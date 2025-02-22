import HunzoNotification from "@/components/HunzoNotification";

import { BellDot, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { map } from "zod";
import { ElementType, FC, ReactNode } from "react";
import HunzoProfile from "./HunzoProfile";
import HunzoSearch from "./HunzoSearch";
import { CommandShortcut } from "./ui/command";
import { Badge } from "./ui/badge";
import HunzoQR from "./HunzoQR";

type Controls = { node: any };
type ControlsArray = Controls[];
const controls: ControlsArray = [
  {
    node: HunzoSearch,
  },
  {
    node: HunzoQR,
  },
  {
    node: HunzoNotification,
  },

  {
    node: SidebarTrigger,
  },

  {
    node: HunzoProfile,
  },
];

const HunzoHeaderControls = () => {
  return (
    <div className="flex justify-end items-center gap-4 ">
      <CommandShortcut className="px-2 rounded-full -mx-3 cursor-default">
        {/* Ctrl+K/  */}

        <Badge className="bg-hunzo-blue py-0 px-1 text-white text-center w-fit font-medium text-[0.6rem]">
          <span className="">⌘K</span>
        </Badge>
      </CommandShortcut>
      {controls.map((control: Controls, index) => (
        <div
          className="w-fit h-fit bg-hunzo-background-grey rounded-full hover:bg-hunzo-blue hover:text-white  transition-colors ease-in"
          key={index}
        >
          <control.node className="size-9 p-2" />
        </div>
      ))}
    </div>
  );
};

export default HunzoHeaderControls;
