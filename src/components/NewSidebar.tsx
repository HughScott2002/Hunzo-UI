"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Wallet,
  History,
  SendHorizontal,
  Link as LinkIcon,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  PanelRightOpen,
  PanelRightClose,
  Moon,
  ChevronsUpDown,
  ChevronsDown,
  ChevronDown,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "./AuthContext";
import { appName } from "@/constants";

const sidebarLinks = [
  { icon: Home, route: "/", label: "Home" },
  { icon: Wallet, route: "/my-wallets", label: "My Wallets" },
  {
    icon: History,
    route: "/transaction-history",
    label: "Transaction History",
  },
  { icon: SendHorizontal, route: "/payment-transfer", label: "Transfer Funds" },
  { icon: LinkIcon, route: "/connect-bank", label: "Connect Bank" },
];

//TODO: Fix the logo wallet and account selector
const user = {
  name: "Hugh",
  email: "hughscott2002@msila.coom",
  image: "https://github.com/shadcn.png",
};

const NewSidebar = ({ isExpanded, isMobile, toggleSidebar }: any) => {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <motion.div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-gray-100 shadow-sm fixed",
        isExpanded ? "w-64" : "w-20"
      )}
      animate={{ width: isExpanded ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn("p-6 ", isExpanded ? "px-4" : "px-4")}>
        <Link
          href="/"
          className={cn(
            "grid md:grid-rows-1  sm:grid-rows-2 border-2 border-white hover:border-blue-50 rounded-lg p-2 hover:bg-blue-50 transition-ease"
          )}
        >
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              className="w-8 h-8"
            />
            {isExpanded && (
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {appName}
              </span>
            )}
            {isExpanded && (
              <div className="flex items-center justify-end text-gray-500 w-full group-hover:text-blue-600">
                {/* <ChevronsUpDown />
                 */}
                <ChevronDown className="" />
              </div>
            )}
          </div>
          {!isExpanded && (
            <div className="flex items-center justify-end text-gray-500 pt-2 w-full group-hover:text-blue-600">
              <ChevronDown />
            </div>
          )}
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <nav className="flex flex-col space-y-1">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link key={item.label} href={item.route}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
                    !isExpanded && "px-3"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", isExpanded && "mr-3")} />
                  {isExpanded && item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator />
      <div className={cn("p-6 pt-4 transition-all", !isExpanded && "p-2")}>
        <div className="space-y-1">
          {/* <SidebarFooter /> */}

          {!isMobile && (
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50",
                !isExpanded && "px-3"
              )}
              onClick={toggleSidebar}
            >
              {isExpanded && (
                <PanelRightOpen
                  className={cn("w-5 h-5", isExpanded && "mr-3")}
                />
              )}
              {!isExpanded && (
                <PanelRightClose
                  className={cn("w-5 h-5", isExpanded && "mr-3")}
                />
              )}

              {isExpanded && "Toggle Siderbar"}
            </Button>
          )}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50",
              !isExpanded && "px-3"
            )}
          >
            <Moon className={cn("w-5 h-5", isExpanded && "mr-3")} />
            {isExpanded && "Dark Mode"}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50",
              !isExpanded && "px-3"
            )}
          >
            <Settings className={cn("w-5 h-5", isExpanded && "mr-3")} />
            {isExpanded && "Settings"}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50",
              !isExpanded && "px-3"
            )}
          >
            <HelpCircle className={cn("w-5 h-5", isExpanded && "mr-3")} />
            {isExpanded && "Help & Support"}
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50",
              !isExpanded && "px-3"
            )}
            onClick={() => {
              logout();
            }}
          >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                {/* <Button variant="outline">Show Dialog</Button> */}
                <LogOut className={cn("w-5 h-5", isExpanded && "mr-3")} />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {isExpanded && "Log out"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NewSidebar;
