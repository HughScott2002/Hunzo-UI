"use client";

import { ChevronDown, Wallet } from "lucide-react";

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

const SavingsItem: FC = () => {
  return (
    <div className="w-full h-fit p-4 border-2 rounded-2xl">
      <div className="w-full h-fit  flex justify-between items-center">
        <div className="flex gap-4">
          <div className="rounded-full bg-hunzo-blue/20 p-2">
            <Wallet className="size-5 text-hunzo-blue" />
          </div>
          <div className="flex flex-col gap-22">
            <h2 className="font-manrope font-extrabold text-sm">Mutal funds</h2>
            <span className="font-manrope font-medium text-hunzo-text-grey text-xs">
              Monthly income 10%
            </span>
          </div>
        </div>
        <span className="font-extrabold text-sm text-hunzo-dark-blue">
          $545.00
        </span>
      </div>
      <ProgressBar />
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
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

const HunzoHalfSavingsDiagram = () => {
  return (
    <Card className="my-4 w-full h-[18rem] rounded-3xl border-2 border-hunzo-background-grey transition-all p-6">
      <CardHeader className="flex flex-row items-center justify-between h-fit w-full p-0 mb-3">
        <h2 className="font-bold text-lg">Savings</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg text-xs h-8 bg-hunzo-background-grey"
            >
              This month
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-hunzo-background-grey">
            <DropdownMenuLabel>Date Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Add date range options here */}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className=" h-[80%] overflow-y-auto flex flex-col gap-2 px-2">
        <SavingsItem />
        <SavingsItem />
        <SavingsItem />
        <SavingsItem />
      </CardContent>
    </Card>
  );
};

export default HunzoHalfSavingsDiagram;
