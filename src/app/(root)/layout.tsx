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
//TODO: fix the Seach bar up top
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Render the layout and children if authenticated

  return (
    <ProtectedRouteWrapper>
      <main className="flex h-screen w-full font-inter">
        {/* <Sidebar user={TestUser} /> */}
        <NewSidebar />
        {/* <New2Sidebar /> */}
        {/* <AccountAlerts /> */}
        <div className="flex size-full flex-col">
          {/* <div className="">
            <div className="w-full ">
              <HeaderSearch />
            </div>
          </div> */}
          {children}
        </div>
        <CommandPalette />
      </main>
    </ProtectedRouteWrapper>
  );
}
