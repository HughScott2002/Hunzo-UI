"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [lastRefresh, setLastRefresh] = useState<number>(0);
  const router = useRouter();

  const REFRESH_INTERVAL = 14 * 60 * 1000; // 14 minutes in milliseconds

  const shouldRefresh = () => {
    return Date.now() - lastRefresh > REFRESH_INTERVAL;
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(
          "http://localhost/api/users/auth/check-session",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user);
          setLastRefresh(Date.now());
        }
      } catch (error) {
        console.error("Failed to check session:", error);
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
      const response = await fetch("http://localhost/api/users/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          router.push("/");
        } else {
          console.log("User data not received");
          throw new Error("User data not received");
        }
      } else {
        console.log("Login faileed");
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch("http://localhost/api/users/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const register = async (userData: any) => {
    try {
      const response = await fetch("http://localhost/api/users/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
          router.push("/");
        } else {
          console.log("User data not received - Registration");
          throw new Error("User data not received");
        }
      } else {
        console.log("Registration faileed");
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, refreshToken }}
    >
      {children}
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
