"use client";

import { ChevronDown } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data = [
  { time: "1D", value: 40 },
  { time: "5D", value: 10 },
  { time: "1M", value: 70 },
  { time: "3M", value: 23 },
  { time: "6M", value: 43 },
  { time: "1Y", value: 100 },
];
const HunzoMoneyFlowDiagram = () => {
  return (
    <Card className="w-full rounded-3xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h2 className="font-bold text-lg">Money Flow</h2>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="h-2 w-4 rounded-full bg-hunzo-pitch-black" />
            <span className="text-sm font-semibold">Expenses</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-lg text-xs h-8 bg-hunzo-background-grey font-semibold border-2 border-hunzo-background-grey"
              >
                Jan 10 - Jan 16
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hunzo-background-grey">
              <DropdownMenuLabel>Date Range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Add date range options here */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            expenses: {
              label: "Expenses",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[300px] w-full transition-all"
        >
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid vertical={false} stroke="#EDF2F7" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: "0.92431rem",
                fontWeight: 600,
                color: "#000000",
              }}
              dy={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: "0.92431rem", fontWeight: 600 }}
              dx={-40}
              domain={[0, 100]}
              ticks={[0, 50, 100]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent className="bg-hunzo-background-grey" />
              }
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#000000"
              fill="#000000"
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default HunzoMoneyFlowDiagram;
