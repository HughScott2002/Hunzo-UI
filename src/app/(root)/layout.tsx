"use client";
import MoblieSidebar from "@/components/MoblieSidebar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { TestUser, appName } from "@/constants";
import { CommandPalette } from "@/components/CommandPalette";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProtectedRouteWrapper from "@/components/ProtectedRouteWrapper";
import AccountAlerts from "@/components/AccountAlerts";
import NewSidebar from "@/components/NewSidebar";
import New2Sidebar from "@/components/New2Sidebar";
import HeaderSearch from "@/components/HeaderSearch";
import { cn } from "@/lib/utils";
import HunzoSiderbar from "@/components/HunzoSiderbar";
//TODO: fix the Seach bar up top
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Render the layout and children if authenticated
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarExpanded");
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(isExpanded));
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded((prev: any) => !prev);
  };
  return (
    <ProtectedRouteWrapper>
      <main className="flex h-screen w-full font-inter">
        {/* <Sidebar user={TestUser} /> */}
        {/* <New2Sidebar /> */}
        {/* <AccountAlerts /> */}
        {/* <NewSidebar
          isExpanded={isExpanded}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        /> */}
        {/* <HunzoSiderbar /> */}
        {/* <div className="w-screen gap-2">
          <div className={cn("transition-all", isExpanded ? "ml-60" : "ml-20")}>
            {children}
          </div>
        </div> */}
        {children}

        <CommandPalette />
      </main>
    </ProtectedRouteWrapper>
  );
}
