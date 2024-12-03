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
  { time: "1D", value: 20 },
  { time: "5D", value: 10 },
  { time: "1M", value: 70 },
  { time: "3M", value: 40 },
  { time: "6M", value: 90 },
  { time: "1Y", value: 30 },
];
const HunzoMoneyFlowDiagram = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h2 className="font-bold text-xl">Money Flow</h2>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="h-2 w-4 rounded-full bg-primary" />
            <span className="text-sm font-semibold">Expenses</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full text-xs h-8">
                Jan 10 - Jan 16
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
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
          className="h-[300px]"
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
            <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dx={-10}
              domain={[0, 500]}
              ticks={[0, 50, 100, 500]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
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
