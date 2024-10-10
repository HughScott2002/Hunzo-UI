"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { appName, sidebarLinks } from "@/constants";
import { ChevronDown, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function New2Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 flex h-screen w-[280px] flex-col justify-between border-r border-gray-200 bg-white p-6">
      <div className="flex flex-col gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt={`${appName} logo`}
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold text-gray-900">{appName}</h1>
        </Link>

        <nav className="flex flex-col gap-2">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link
                key={item.label}
                href={item.route}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Image
                  src={item.imgURL}
                  alt=""
                  width={20}
                  height={20}
                  className={cn("h-5 w-5", { "text-blue-700": isActive })}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start px-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-900">
                  JD
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-gray-900">
                    John Doe
                  </span>
                  <span className="text-xs text-gray-500">
                    john@example.com
                  </span>
                </div>
              </div>
              <ChevronDown className="ml-auto h-4 w-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
