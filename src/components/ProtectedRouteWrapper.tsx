"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import { Loader2 } from "lucide-react";
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
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
    console.log("HERE ARE THE COOKIES");
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
        {/* <Loader2 size={20} className="animate-spin" /> &nbsp; Loading... */}
        <HunzoLoader />
      </div>
    ); // or a loading spinner
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
