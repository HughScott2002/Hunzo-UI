"use client";
import MoblieSidebar from "@/components/MoblieSidebar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { TestUser, appName } from "@/constants";
import { CommandPalette } from "@/components/CommandPalette";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProtectedRouteWrapper from "@/components/ProtectedRouteWrapper";
import AccountAlerts from "@/components/AccountAlerts";
import NewSidebar from "@/components/NewSidebar";
import New2Sidebar from "@/components/New2Sidebar";
import HeaderSearch from "@/components/HeaderSearch";
import { cn } from "@/lib/utils";
import HunzoSiderbar from "@/components/HunzoSiderbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BellDot, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/app-siderbar";

//TODO: Fix the Seach bar up top
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  var name = pathname.substring(1);

  function dashboardName() {
    return name.substring(1);
  }

  return (
    <ProtectedRouteWrapper>
      <SidebarProvider className="min-h-screen max-h-screen overflow-hidden">
        <AppSidebar />
        <main className=" h-screen w-full flex flex-col">
          <SidebarInset className="flex flex-col h-full">
            <header className="flex h-28 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-20 sticky top-0 z-10 px-10 ">
              <div className="flex flex-1 items-center justify-between w-full h-full">
                <div className="flex flex-col items-start justify-center gap-2 ">
                  <h1 className="font-poppins font-semibold text-xl capitalize">
                    {name === ""
                      ? "Dashboard"
                      : name === "my-wallets"
                      ? "My Wallets"
                      : name}
                  </h1>
                  {/* <div className="flex items-center gap-2">
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Hunzo</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Home</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div> */}
                </div>
                <div className="flex justify-end items-center gap-4 ">
                  <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                    <SidebarTrigger className=" size-9 p-2" />
                  </div>
                  <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                    <Search className="size-9 p-2" />
                  </div>
                  <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                    <BellDot className="size-9 p-2 " />
                  </div>
                  <div className="flex gap-3 p-2 bg-[#FAFAFA] rounded-full justify-center items-center">
                    <Avatar className="size-7">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="font-poppins text-sm font-semibold text-[#1A202C] truncate max-w-32">
                      Firstname L.
                    </span>
                    <ChevronDown className="w-4 h-4 mr-1" />
                  </div>
                </div>
              </div>
            </header>
            <div className="flex-1 overflow-y-auto px-10 py-2 h-full">
              {children}
            </div>
          </SidebarInset>
        </main>
      </SidebarProvider>
      <CommandPalette />
    </ProtectedRouteWrapper>
  );
}
