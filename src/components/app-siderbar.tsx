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
  LogOut,
  Map,
  PanelLeftClose,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
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
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
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
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
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
      <div className="px-4 py-8 bg-hunzo-red w-full h-full flex flex-col">
        <SidebarHeader className="bg-red-200">
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <header className="flex items-end bg-black-1 space-x-2 pb-4">
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
        </header>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </SidebarContent>
        {/* <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter> */}
        <footer className="flex flex-col items-center gap-1">
          <HunzoFooterItem label="Toogle Sidebar">
            {/* <PanelLeftClose className="w-6 h-6" /> */}
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
    <div className={`flex space-x-2 p-4 w-full bg-black-1 ${className}`}>
      {children}
      <span className="font-manrope font-semibold">{label}</span>
    </div>
  );
}
