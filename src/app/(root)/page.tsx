"use client";
import HunzoDashboardWalletSection from "@/components/DashboardWalletSection";
import HunzoDashboardRecentActivity from "@/components/HunzoDashboardRecentActivity";
import HunzoHalfBudgetsDiagram from "@/components/HunzoHalfBudgetsDiagram";
import HunzoHalfSavingsDiagram from "@/components/HunzoHalfSavingsDiagram";
import HunzoMoneyFlowDiagram from "@/components/HunzoMoneyFlowDiagram";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, CircleDollarSign } from "lucide-react";
import React, { FC } from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

//TODO: Spilt up this large File
//TODO: Fix the Recent Activity Overflow UI Problem
//TODO: Add Credit Score

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];
type Checked = DropdownMenuCheckboxItemProps["checked"];
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

const Dashboard: FC = () => {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <section className="w-full h-full">
      <div className="flex size-full md:gap-2 lg:gap-4 xl:gap-6 transition-all">
        <div className="size-full flex items-start ">
          {/* <HunzoInactiveDevelopment />
           */}

          <div className="flex flex-1 flex-col gap-4 sm:p-4 rounded-3xl transition-all ease-in-out">
            <div className="w-full xl:max-w-[56rem] mx-auto  flex flex-col p-2 gap-2 ">
              {/* Container to limit width and center */}
              <div className="grid grid-cols-[repeat(auto-fit,13rem)] gap-4 3xl:justify-center justify-start">
                {[1, 2, 3, 4].map((item) => (
                  <div className="size-[13rem] p-4 rounded-2xl border-2 border-hunzo-background-grey transition-all ">
                    <div className="size-full flex flex-col justify-between">
                      <div className="w-full h-fit flex justify-between items-center">
                        <div className="w-full">
                          <div className=" font-medium text-hunzo-dark-blue text-sm">
                            Credit Score
                          </div>
                          <div className="font-bold font-poppins text-2xl text-hunzo-pitch-black">
                            800
                          </div>
                        </div>
                        <CircleDollarSign className="p-2 border-2 border-hunzo-background-grey size-10 rounded-lg" />
                      </div>
                      <ChartContainer
                        config={chartConfig}
                        className="aspect-square size-full"
                      >
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
                          <PolarRadiusAxis
                            tick={false}
                            tickLine={false}
                            axisLine={false}
                          >
                            <Label
                              content={({ viewBox }) => {
                                if (
                                  viewBox &&
                                  "cx" in viewBox &&
                                  "cy" in viewBox
                                ) {
                                  return (
                                    <text
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      textAnchor="middle"
                                    >
                                      <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) - 16}
                                        className="fill-foreground text-2xl font-bold"
                                      >
                                        {totalVisitors.toLocaleString()}
                                      </tspan>
                                      <tspan
                                        x={viewBox.cx}
                                        y={(viewBox.cy || 0) + 4}
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
                    </div>
                  </div>
                ))}
              </div>

              <HunzoMoneyFlowDiagram />

              <div className=" grid grid-cols-[repeat(auto-fit,26rem)] justify-between ">
                <HunzoHalfSavingsDiagram />
                <HunzoHalfBudgetsDiagram />
                {/* <div className="my-4 w-full h-[18rem] rounded-3xl border-2 border-hunzo-background-grey transition-all bg-hunzo-red p-6">
                  <div className="flex w-full bg-hunzo-yellow justify-between">
                    <h2 className="">Saving</h2>
                    <div className="bg-hunzo-background-grey flex">
                      <span>This month</span>
                      <ChevronDown className="size-4" />
                    </div>
                  </div>
                  hey
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-fit transition-all  h-full max-lg:hidden flex flex-col gap-6">
          <HunzoDashboardWalletSection />
          <HunzoDashboardRecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
