"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
const HunzoScoreGraph = () => {
  return (
    <ChartContainer config={chartConfig} className="aspect-square size-full">
      <RadialBarChart
        data={chartData}
        endAngle={180}
        innerRadius={70}
        outerRadius={140}
        className="m-0 p-0"
      >
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="bg-hunzo-background-grey"
            />
          }
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 16}
                      className="fill-foreground text-2xl font-bold"
                    >
                      {/* {totalVisitors.toLocaleString()} */}
                      800
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground"
                    >
                      Awesome
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="desktop"
          stackId="a"
          cornerRadius={5}
          fill="#718096"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="mobile"
          fill="#118AB2"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
};

export default HunzoScoreGraph;
