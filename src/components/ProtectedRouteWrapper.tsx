"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import HunzoLoader from "./HunzoLoader";

const ProtectedRouteWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, refreshToken } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  function listCookies() {
    var theCookies = document.cookie.split(";");
    var aString = "";
    for (var i = 1; i <= theCookies.length; i++) {
      aString += i + " " + theCookies[i - 1] + "\n";
    }
    return aString;
  }
  useEffect(() => {
    console.log(listCookies());
    const checkAuth = async () => {
      console.log(user || "NONE");
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
        <HunzoLoader />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
