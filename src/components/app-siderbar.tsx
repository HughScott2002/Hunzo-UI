"use client";
import {
  ArrowRightLeft,
  AudioWaveform,
  BadgePoundSterling,
  CircleHelp,
  Command,
  Contact,
  GalleryVerticalEnd,
  HandCoins,
  House,
  LogOut,
  Pocket,
  Settings,
  Wallet,
  Workflow,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import Link from "next/link";

// This is sample data.
const data = {
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
      url: "/",
      icon: House,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: ArrowRightLeft,
    },
    {
      title: "Recipients",
      url: "/recipients",
      icon: Contact,
    },
    {
      title: "My Wallets",
      url: "/my-wallets",
      icon: Wallet,
      // items: [
      //   {
      //     title: "New Wallet",
      //     url: "/my-wallets",
      //   },
      //   {
      //     title: "Manage Wallets",
      //     url: "/my-wallets",
      //   },
      // ],
    },
    // {
    //   title: "FX Exchange",
    //   url: "/fx",
    //   icon: BadgePoundSterling,
    // },
    {
      title: "Pocket",
      url: "/pocket",
      icon: HandCoins,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="bg-hunzo-background-grey" {...props}>
      <div className="px-4 py-2  w-full h-full flex flex-col">
        <SidebarHeader className="">
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <hr />
        <hr />
        <hr className="text-hunzo-pitch-black" />
        <SidebarContent className="">
          <NavMain items={data.navMain} />
          {/* <NavProjects projects={data.projects} /> */}
        </SidebarContent>
        {/* <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter> */}
        <footer className="flex flex-col items-center gap-1 ">
          <HunzoFooterItem label="Toggle Sidebar">
            <SidebarTrigger className="size-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Help" href="/help">
            <CircleHelp className="size-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Settings" href="/settings">
            <Settings className="size-6" />
          </HunzoFooterItem>
          <HunzoFooterItem label="Logout" className="text-hunzo-red">
            <LogOut className="size-6" />
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
  href,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
  href?: string;
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const button = (
    <SidebarMenuButton
      className={`flex items-center justify-start px-4 py-6 ${
        isCollapsed ? "w-full" : "w-full"
      } ${className}`}
    >
      {children}
      {!isCollapsed && (
        <span className="ml-2 font-manrope font-semibold text-base">
          {label}
        </span>
      )}
    </SidebarMenuButton>
  );

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {href ? <Link href={`${href}`}>{button}</Link> : ""}
          {/* {!href && button} */}
        </TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          className="bg-hunzo-background-grey p-4 text-sm font-bold text-hunzo-text-grey"
        >
          {label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return button;
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
