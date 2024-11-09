"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CircleHelp,
  Command,
  Frame,
  GalleryVerticalEnd,
  House,
  LogOut,
  Map,
  PanelLeftClose,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
  Wallet,
  Workflow,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "./ui/separator";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/test",
      icon: House,
      isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Activity",
      url: "#",
      icon: Workflow,
      items: [
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Recipients",
          url: "#",
        },
      ],
    },
    {
      title: "My Wallet",
      url: "#",
      icon: Wallet,
      // items: [
      //   {
      //     title: "General",
      //     url: "#",
      //   },
      //   {
      //     title: "Team",
      //     url: "#",
      //   },
      //   {
      //     title: "Billing",
      //     url: "#",
      //   },
      //   {
      //     title: "Limits",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: HunzoChartSVG,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="px-4 py-2  w-full h-full flex flex-col">
        <SidebarHeader className="">
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        {/* <header className="flex items-end bg-black-1 space-x-2 pb-4">
          <Image
            src="/icons/Hunzo-Logo.svg"
            alt="Hunzo Logo"
            width={56}
            height={56}
            className="h-10 w-10"
          />
          <h1 className="text-2xl font-semibold -tracking-wide text-hunzo-blue font-poppins">
            Hunzo
          </h1>
        </header> */}
        <hr className="font-extrabold text-hunzo-text-grey text-2xl w-full" />
        <SidebarContent className="">
          <NavMain items={data.navMain} />
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        {/* <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter> */}
        <footer className="flex flex-col items-center gap-1">
          <HunzoFooterItem label="Toogle Sidebar">
            <SidebarTrigger className=" w-6 h-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Help">
            <CircleHelp className="w-6 h-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Settings">
            <Settings className="w-6 h-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Logout" className="text-hunzo-red">
            <LogOut className="w-6 h-6" />
          </HunzoFooterItem>
        </footer>
        <SidebarRail />
      </div>
    </Sidebar>
  );
}

function HunzoFooterItem({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex space-x-2 p-4 w-full  ${className}`}>
      {children}
      <span className="font-manrope font-semibold">{label}</span>
    </div>
  );
}

function HunzoChartSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-chart-candlestick ${className}`}
    >
      <path d="M9 5v4" />
      <rect width="4" height="6" x="7" y="9" rx="1" />
      <path d="M9 15v2" />
      <path d="M17 3v2" />
      <rect width="4" height="8" x="15" y="5" rx="1" />
      <path d="M17 13v3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>
  );
}
