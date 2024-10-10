"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

const ProtectedRouteWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, refreshToken } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        router.push("/login");
      } else {
        await refreshToken();
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [user, router, refreshToken]);

  if (isLoading) {
    return <div>Loading...</div>; // or a loading spinner
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
