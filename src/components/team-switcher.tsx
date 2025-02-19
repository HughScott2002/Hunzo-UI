"use client";
import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { newAccoutsFeatureFlag } from "@/lib/featureFlags";
import { useState } from "react";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = useState(teams[0]);
  //TODO: Implement the account switcher
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {!newAccoutsFeatureFlag && (
          <SidebarTitle newAccoutsFeatureFlag={newAccoutsFeatureFlag} />
        )}
        {newAccoutsFeatureFlag && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarTitle newAccoutsFeatureFlag={newAccoutsFeatureFlag} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-hunzo-background-grey"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-sm  text-hunzo-text-grey">
                Accounts
              </DropdownMenuLabel>
              {teams.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <team.logo className="size-5 shrink-0" />
                  </div>
                  <span className="font-manrope text-base">{team.name}</span>
                  <DropdownMenuShortcut className="text-hunzo-blue font-bold text-xs">
                    ⌘K
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add New Account
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function SidebarTitle({
  newAccoutsFeatureFlag,
}: {
  newAccoutsFeatureFlag: boolean;
}) {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        {/* <activeTeam.logo className="size-4" /> */}
        <Image
          src="/icons/Hunzo-Logo.svg"
          alt="Hunzo Logo"
          width={56}
          height={56}
          className="size-10"
        />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        {/* <span className="truncate font-semibold">
          {activeTeam.name}
        </span> */}
        <h1 className="text-2xl font-semibold -tracking-wide text-hunzo-blue font-poppins">
          Hunzo
        </h1>
        {/* <span className="truncate text-xs">{activeTeam.plan}</span> */}
      </div>
      {newAccoutsFeatureFlag && (
        <ChevronsUpDown className="ml-auto text-hunzo-grey hover:text-hunzo-blue" />
      )}
    </SidebarMenuButton>
  );
}

function HunzoLogo({}) {}
