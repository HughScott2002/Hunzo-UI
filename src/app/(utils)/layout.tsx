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

  return <div className="w-full h-screen p-10">{children}</div>;
}
