"use client";

import { ChevronDown, ChevronRight, Dot, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import * as Progress from "@radix-ui/react-progress";
import { FC, useEffect, useState } from "react";

const PieItem: FC = () => {
  return (
    <div className="flex justify-center items-center bg-hunzo-red h-fit">
      <Dot className="bg-black-1 p-0 m-0 size-10 " />
      <div className="flex flex-col justify-start gap-1">
        <span className="text-xs font-extrabold ">$735.00</span>
        <span className="text-[0.625rem] text-hunzo-text-grey">Shopping</span>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-hunzo-text-grey"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-in size-full bg-hunzo-blue transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

const HunzoHalfBudgetsDiagram = () => {
  return (
    <Card className="my-4 w-full h-[18rem] rounded-3xl border-2 border-hunzo-background-grey transition-all p-6">
      <CardHeader className="flex flex-row items-center justify-between h-fit w-full p-0 mb-3">
        <h2 className="font-bold text-lg">Budget</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg text-xs h-8 bg-hunzo-background-grey "
            >
              Veiw All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-hunzo-background-grey">
            <DropdownMenuLabel>Date Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Add date range options here */}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className=" h-[80%] overflow-y-auto gap-2 px-2 bg-red-300 p-2 m-0 flex">
        <div className="size-full bg-black-1">s</div>
        <div className="h-full grid bg-hunzo-green w-[45%] ">
          <div className="flex justify-center p-2">
            <PieItem />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HunzoHalfBudgetsDiagram;
