import { cn } from "@/lib/utils";
import React from "react";

const HunzoProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full bg-hunzo-background-grey mb-10 mt-6 rounded-full h-3">
      <div
        className={cn(
          " h-3 rounded-full transition-all duration-300 ease-in-out",
          progress === 3 ? "bg-hunzo-green" : "bg-hunzo-blue"
        )}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default HunzoProgressBar;
