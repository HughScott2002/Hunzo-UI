"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import { Loader2 } from "lucide-react";

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
    return (
      <div className="w-screen h-screen text-2xl flex items-center align-middle justify-center">
        <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
      </div>
    ); // or a loading spinner
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
