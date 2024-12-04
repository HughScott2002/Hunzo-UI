"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { color } from "framer-motion";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#718096",
  },
  safari: {
    label: "Safari",
    color: "#06D6A0",
  },
};

const HunzoScoreGraph = () => {
  return (
    <ChartContainer config={chartConfig} className="size-full">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={240}
        innerRadius={40}
        outerRadius={70}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar
          dataKey="visitors"
          background
          cornerRadius={10}
          fill="#718096"
        />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      fill="#06D6A0"
                      className="fill-foreground text-base font-bold "
                    >
                      Great
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};

export default HunzoScoreGraph;
