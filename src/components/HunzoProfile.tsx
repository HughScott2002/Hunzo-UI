import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown } from "lucide-react";

const HunzoProfile = () => {
  return (
    <div className="flex gap-3 p-2 bg-[#FAFAFA] rounded-full justify-center items-center hover:bg-hunzo-text-grey transition-colors ease-in">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="font-poppins text-sm font-semibold  text-[#1A202C] truncate max-w-32">
        Firstname L.
      </span>
      <ChevronDown className="w-4 h-4 mr-1" />
    </div>
  );
};

export default HunzoProfile;
