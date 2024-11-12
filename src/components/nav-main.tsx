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
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon | React.FC;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="mt-6 h-fit w-full ">
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={pathname === item.url ? true : false}
            className="group/collapsible"
          >
            <SidebarMenuItem className="">
              <CollapsibleTrigger asChild>
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`flex pl-5 py-7 gap-4  rounded-lg w-full hover:bg-hunzo-blue transition-all ease-in-out ${
                      pathname === item.url
                        ? "bg-hunzo-blue text-white"
                        : "text-hunzo-text-grey hover:text-white"
                    }`}
                  >
                    {item.icon && <item.icon className=" " />}
                    <span className="font-manrope font-bold text-sm ">
                      {item.title}
                    </span>
                    {item.items && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 " />
                    )}
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
              {item.items?.map((subItem) => (
                <CollapsibleContent className="">
                  <SidebarMenuSub className="">
                    <SidebarMenuSubItem key={subItem.title}>
                      <Link href={subItem.url}>
                        <SidebarMenuSubButton asChild>
                          <span className="text-hunzo-text-grey ml-4 text-base font-bold hover:text-hunzo-blue">
                            {subItem.title}
                          </span>
                        </SidebarMenuSubButton>
                      </Link>
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
