"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  kycStatus: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: any) => Promise<void>;
  refreshToken: () => Promise<void>;
  dump: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<number>(0);
  const router = useRouter();

  const REFRESH_INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds
  const MIN_LOADING_TIME = 2000;

  const shouldRefresh = () => {
    return Date.now() - lastRefresh > REFRESH_INTERVAL;
  };

  useEffect(() => {
    const checkSession = async () => {
      const startTime = Date.now();
      try {
        const response = await fetch(
          "http://localhost/api/users/auth/check-session",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          // const userData = await response.json();
          // setUser(userData.user);
          setLastRefresh(Date.now());
        }
      } catch (error) {
        console.error("Failed to check session:", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
        setTimeout(() => setLoading(false), remainingTime);
      }
    };

    checkSession();
  }, []);

  const refreshToken = async () => {
    if (!shouldRefresh()) {
      return; // Skip refresh if it's not time yet
    }

    try {
      const response = await fetch("http://localhost/api/users/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          setLastRefresh(Date.now());
        }
      } else {
        console.log("Refresh failed");
        await logout();
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      await logout();
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        "http://localhost/api/users/auth/account/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("HERE");
        console.log(data);
        console.log("HERE");
        if (data.user) {
          setUser(data.user);
          setLastRefresh(Date.now());
          router.push("/");
        } else {
          console.log("User data not received");
          throw new Error("User data not received");
        }
      } else {
        console.log("Login failed");
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch("http://localhost/api/users/auth/account/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      setLastRefresh(0);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (userData: any) => {
    try {
      const response = await fetch(
        "http://localhost/api/users/auth/account/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          setLastRefresh(Date.now());
          router.push("/");
        } else {
          console.log("User data not received - Registration");
          throw new Error("User data not received");
        }
      } else {
        console.log("Registration failed");
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const dump = async (data: any) => {
    try {
      const response = await fetch("http://localhost/api/users/dump", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("Dump failed");
        throw new Error("Dump failed");
      }
    } catch (error) {
      console.error("Dump error:", error);
      throw error;
    }
  };

  // if (loading) {
  //   return (
  //     <div className="w-full h-screen flex justify-center items-center transition">
  //       <Loader2 size={20} className="animate-spin text-hunzo-blue w-6 h-6" />{" "}
  //       &nbsp;
  //       <span className="font-poppins text-hunzo-blue text-lg ">
  //         Loading...
  //       </span>
  //     </div>
  //   ); // Or any loading component
  // }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, refreshToken, dump }}
    >
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
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
