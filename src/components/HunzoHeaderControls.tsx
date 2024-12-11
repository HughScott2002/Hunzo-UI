import HunzoNotification from "@/components/HunzoNotification";

import { BellDot, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { map } from "zod";
import { ElementType, FC, ReactNode } from "react";
import HunzoProfile from "./HunzoProfile";
import HunzoSearch from "./HunzoSearch";
import { CommandShortcut } from "./ui/command";

type Controls = { node: any };
type ControlsArray = Controls[];
const controls: ControlsArray = [
  {
    node: HunzoSearch,
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
        ⌘K
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
