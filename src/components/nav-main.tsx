"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | React.FC;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="mt-6 h-fit w-full ">
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem className="">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`flex pl-5 py-7 gap-4  rounded-2xl w-full hover:bg-hunzo-blue transition-all ease-in-out ${
                    item.isActive ? "bg-hunzo-blue" : "bg-hunzo-text-grey"
                  }`}
                >
                  {item.icon && <item.icon className="text-white " />}
                  {!item.items && (
                    <Link
                      href={item.url}
                      className="font-manrope font-bold text-sm text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.items && (
                    <span className="font-manrope font-bold text-sm text-white">
                      {item.title}
                    </span>
                  )}

                  {item.items && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-white" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items?.map((subItem) => (
                <CollapsibleContent className="">
                  <SidebarMenuSub className="">
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span className="text-hunzo-text-grey ml-4 text-base font-bold hover:text-hunzo-blue">
                            {subItem.title}
                          </span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              ))}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
