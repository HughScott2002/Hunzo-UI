import HunzoNotification from "@/components/HunzoNotification";

import { BellDot, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { map } from "zod";
import { ReactNode } from "react";
import HunzoProfile from "./HunzoProfile";

type Controls = { node: any };
type ControlsArray = Controls[];
const controls: ControlsArray = [
  {
    node: Search,
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
      {controls.map((control: Controls) => (
        <div className="w-fit h-fit bg-hunzo-background-grey rounded-full hover:bg-hunzo-text-grey  transition-colors ease-in">
          <control.node className="size-9 p-2" />
        </div>
      ))}
    </div>
  );
};

export default HunzoHeaderControls;
