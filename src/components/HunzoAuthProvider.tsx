// contexts/AuthContext.tsx
"use client";
// Import necessary hooks and utilities
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode"; // Library to decode JWT tokens
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

// Define the shape of our user object
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  kycStatus: string;
}

// Define what methods and data will be available through our auth context
interface AuthContextType {
  user: User | null; // Current user or null if not logged in
  login: (email: string, password: string) => Promise<void>; // Login function
  logout: () => Promise<void>; // Logout function
  loading: boolean; // Loading state while checking auth
}

// Define the structure of our JWT token payload
interface JWTPayload {
  exp: number; // Expiration time
  sub: string; // Subject (usually user email)
}

// Create the context with undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function HunzoAuthProvider({ children }: { children: React.ReactNode }) {
  // State management
  const [user, setUser] = useState<User | null>(null); // Store user data
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter(); // Navigation
  const pathname = usePathname(); // Current route

  // Refs to store our token expiry timers
  // We use refs so these survive component re-renders
  const accessTokenTimer = useRef<NodeJS.Timeout>();
  const refreshTokenTimer = useRef<NodeJS.Timeout>();

  // Function to schedule warnings before tokens expire
  const scheduleTokenWarnings = useCallback(
    (accessExp: number, refreshExp: number) => {
      // Clear any existing timers to prevent duplicate warnings
      if (accessTokenTimer.current) clearTimeout(accessTokenTimer.current);
      if (refreshTokenTimer.current) clearTimeout(refreshTokenTimer.current);

      const now = Date.now();
      // Schedule warnings 1 minute before expiry
      const accessWarningTime = accessExp - 60000; // 60 seconds before access token expires
      const refreshWarningTime = refreshExp - 60000; // 60 seconds before refresh token expires

      // Set timer for access token warning
      if (accessWarningTime > now) {
        accessTokenTimer.current = setTimeout(() => {
          console.log("Access token expires in 1 minute");
          // TODO: Could add auto-refresh logic here
        }, accessWarningTime - now);
      }

      // Set timer for refresh token warning
      if (refreshWarningTime > now) {
        refreshTokenTimer.current = setTimeout(() => {
          console.log(
            "Refresh token expires in 1 minute - user should re-login soon"
          );
        }, refreshWarningTime - now);
      }
    },
    []
  );

  // Utility function to get token expiry time
  const getTokenExpiry = (token: string): number => {
    try {
      const decoded = jwtDecode<JWTPayload>(token);
      return decoded.exp * 1000; // Convert Unix timestamp to milliseconds
    } catch {
      return 0; // Return 0 if token is invalid
    }
  };

  // Check if we have valid tokens in cookies
  const checkLocalAuth = useCallback(() => {
    // Get both tokens from cookies
    console.log("Checking the Air");
    const cookies = document.cookie.split("; ");
    console.log(cookies);
    const accessToken = cookies
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
    console.log("AccessToken: " + accessToken);

    const refreshToken = cookies
      .find((row) => row.startsWith("refresh_token="))
      ?.split("=")[1];

    // If either token is missing, auth fails
    if (!accessToken || !refreshToken) return false;

    // Get expiry times for both tokens
    const accessExpiry = getTokenExpiry(accessToken);
    const refreshExpiry = getTokenExpiry(refreshToken);
    const now = Date.now();

    if (accessExpiry > now && refreshExpiry > now) {
      // Both tokens are valid - schedule warnings and return true
      scheduleTokenWarnings(accessExpiry, refreshExpiry);
      return true;
    } else if (accessExpiry <= now && refreshExpiry > now) {
      // Only refresh token is valid - need to get new access token
      return "refresh-needed";
    }

    // Both tokens expired
    return false;
  }, [scheduleTokenWarnings]);

  // Function to get new access token using refresh token
  const refreshAccessToken = async () => {
    try {
      // Call backend to get new access token
      const response = await fetch("/api/check-session", {
        credentials: "include", // Include cookies in request
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);

        // Get new token expiries from updated cookies
        const cookies = document.cookie.split("; ");
        const newAccessToken = cookies
          .find((row) => row.startsWith("access_token="))
          ?.split("=")[1];
        const refreshToken = cookies
          .find((row) => row.startsWith("refresh_token="))
          ?.split("=")[1];

        if (newAccessToken && refreshToken) {
          // Schedule new warnings for the updated tokens
          scheduleTokenWarnings(
            getTokenExpiry(newAccessToken),
            getTokenExpiry(refreshToken)
          );
        }
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  // Main authentication check function
  const checkAuth = useCallback(async () => {
    // First try local token check
    const localAuthStatus = checkLocalAuth();

    // If we have valid tokens and user data, we're done
    if (localAuthStatus === true && user) {
      setLoading(false);
      return;
    }

    // If access token expired but refresh token valid, try to refresh
    if (localAuthStatus === "refresh-needed") {
      const refreshSuccess = await refreshAccessToken();
      if (refreshSuccess) {
        setLoading(false);
        return;
      }
    }

    // If local checks fail, verify with backend
    try {
      const response = await fetch("/api/check-session", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);

        // Setup token warnings
        const cookies = document.cookie.split("; ");
        const accessToken = cookies
          .find((row) => row.startsWith("access_token="))
          ?.split("=")[1];
        const refreshToken = cookies
          .find((row) => row.startsWith("refresh_token="))
          ?.split("=")[1];

        if (accessToken && refreshToken) {
          scheduleTokenWarnings(
            getTokenExpiry(accessToken),
            getTokenExpiry(refreshToken)
          );
        }

        // Redirect to dashboard if on auth pages
        if (
          pathname?.startsWith("/login") ||
          pathname?.startsWith("/register")
        ) {
          router.push("/");
        }
      } else {
        // Auth failed - clear user and redirect to login if needed
        setUser(null);
        if (pathname && !pathname.startsWith("/login")) {
          router.push("/login");
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      if (pathname && !pathname.startsWith("/login")) {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  }, [router, pathname, user, checkLocalAuth, scheduleTokenWarnings]);

  // Run auth check on mount
  useEffect(() => {
    checkAuth();
    // Cleanup timers on unmount
    return () => {
      if (accessTokenTimer.current) clearTimeout(accessTokenTimer.current);
      if (refreshTokenTimer.current) clearTimeout(refreshTokenTimer.current);
    };
  }, [checkAuth]);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        "http://localhost/api/users/auth/account/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      setUser(data.user);

      // Setup token warnings after successful login
      const cookies = document.cookie.split("; ");
      const accessToken = cookies
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];
      const refreshToken = cookies
        .find((row) => row.startsWith("refresh_token="))
        ?.split("=")[1];

      if (accessToken && refreshToken) {
        scheduleTokenWarnings(
          getTokenExpiry(accessToken),
          getTokenExpiry(refreshToken)
        );
      }

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await fetch("http://localhost/api/users/auth/account/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      // Clear token warning timers
      if (accessTokenTimer.current) clearTimeout(accessTokenTimer.current);
      if (refreshTokenTimer.current) clearTimeout(refreshTokenTimer.current);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Provide auth context to children components
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen flex justify-center items-center"
          >
            <Loader2
              size={20}
              className="animate-spin text-hunzo-blue w-6 h-6"
            />
            <span className="font-poppins text-hunzo-blue text-lg ml-2">
              Loading...
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an Hunzo");
  }
  return context;
}
