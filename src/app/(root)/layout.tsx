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

//TODO: Fix the app name on the moblie and the desktop version of the layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Render the layout and children if authenticated

  return (
    <ProtectedRouteWrapper>
      <main className="flex h-screen w-full font-inter">
        <Sidebar user={TestUser}></Sidebar>
        <AccountAlerts />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} width={30} height={30} alt="Logo" />
            <div>
              <MoblieSidebar user={TestUser} />
            </div>
          </div>
          {children}
        </div>
        <CommandPalette />
      </main>
    </ProtectedRouteWrapper>
  );
}
