"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 187, fill: "#718096" },
  { browser: "safari", visitors: 300, fill: "#718096" },
  { browser: "firefox", visitors: 275, fill: "#718096" },
  { browser: "edge", visitors: 173, fill: "#718096" },
  { browser: "other", visitors: 90, fill: "#718096" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
const HunzoBalanceGraph = () => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        {/* <CartesianGrid vertical={false} /> */}
        {/* <XAxis
          dataKey="browser"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        /> */}
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="bg-hunzo-background-grey p-2"
            />
          }
        />
        <Bar
          dataKey="visitors"
          strokeWidth={2}
          radius={6}
          activeIndex={2}
          activeBar={({ ...props }) => {
            return (
              <Rectangle
                {...props}
                fill="#118AB2"
                // fillOpacity={0.8}
                // stroke={props.payload.fill}
                strokeDasharray={0}
                strokeDashoffset={4}
              />
            );
          }}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default HunzoBalanceGraph;
