"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

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

const radialChartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const lineChartData = [
  { month: "Jan", visitors: 100 },
  { month: "Feb", visitors: 120 },
  { month: "Mar", visitors: 180 },
  { month: "Apr", visitors: 150 },
  { month: "May", visitors: 200 },
  { month: "Jun", visitors: 170 },
];

const stackedRadialChartData = [
  { name: "18-24", uv: 31.47, pv: 2400, fill: "#8884d8" },
  { name: "25-29", uv: 26.69, pv: 4567, fill: "#83a6ed" },
  { name: "30-34", uv: 15.69, pv: 1398, fill: "#8dd1e1" },
  { name: "35-39", uv: 8.22, pv: 9800, fill: "#82ca9d" },
  { name: "40-49", uv: 8.63, pv: 3908, fill: "#a4de6c" },
  { name: "50+", uv: 2.63, pv: 4800, fill: "#d0ed57" },
  { name: "unknown", uv: 6.67, pv: 4800, fill: "#ffc658" },
];

const barChartData = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  uv: {
    label: "UV",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const HunzoDashboardSmallChart = ({
  type,
}: {
  type: "radial" | "line" | "stacked-radial" | "bar-active" | "bar";
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          {type === "radial" && "Radial Chart"}
          {type === "line" && "Line Chart"}
          {type === "stacked-radial" && "Stacked Radial Chart"}
          {type === "bar-active" && "Bar Chart - Active"}
          {type === "bar" && "Bar Chart"}
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          {type === "radial" && (
            <RadialBarChart
              data={radialChartData}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
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
                            className="fill-foreground text-4xl font-bold"
                          >
                            {radialChartData[0].visitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          )}
          {type === "line" && (
            <LineChart
              data={lineChartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="var(--color-safari)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          )}
          {type === "stacked-radial" && (
            <RadialBarChart
              width={250}
              height={250}
              innerRadius="10%"
              outerRadius="80%"
              data={stackedRadialChartData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                // minAngle={"15"}
                label={{ fill: "#666", position: "insideStart" }}
                background
                // clockWise={true}
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadialBarChart>
          )}
          {type === "bar-active" && (
            <BarChart width={250} height={250} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="uv"
                onClick={(data, index) => console.log(data, index)}
              >
                {barChartData.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={
                      index === 1 ? "var(--color-uv)" : "var(--color-safari)"
                    }
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          )}
          {type === "bar" && (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={barChartData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar
                  dataKey="uv"
                  fill="var(--color-uv)"
                  radius={[4, 4, 0, 0]}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default HunzoDashboardSmallChart;
