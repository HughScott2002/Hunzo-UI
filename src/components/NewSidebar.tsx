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

const user = {
  name: "Hugh",
  email: "hughscott2002@msila.coooooooooooooooooooooooooooooooooooooom",
  image: "https://github.com/shadcn.png",
};

const NewSidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
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
    <motion.div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-gray-100 shadow-sm relative",
        isExpanded ? "w-64" : "w-20"
      )}
      animate={{ width: isExpanded ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn("p-6", isExpanded ? "px-6" : "px-4")}>
        <Link href="/" className="flex items-center space-x-2">
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
      <div className={cn("p-6 pt-4", !isExpanded && "p-2")}>
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
