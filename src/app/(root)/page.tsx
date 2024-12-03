"use client";
import HunzoDashboardWalletSection from "@/components/DashboardWalletSection";
import HunzoDashboardRecentActivity from "@/components/HunzoDashboardRecentActivity";
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

          <div className="flex flex-1 flex-col gap-4 sm:p-4 bg-hunzo-background-grey rounded-3xl transition-all ease-in-out">
            <div className="w-full xl:max-w-[60rem] mx-auto bg-black-1 flex flex-col p-2 gap-6">
              {/* Container to limit width and center */}
              <div className="grid grid-cols-[repeat(auto-fit,14rem)] gap-4 justify-center">
                {[1, 2, 3, 4].map((item) => (
                  <div className="size-[14rem] p-4 rounded-2xl border-2 border-hunzo-background-grey transition-all ">
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

              <div className="w-full bg-hunzo-green h-[20.1875rem] rounded-3xl p-6">
                <div className="flex justify-between items-end bg-black-1">
                  <h2 className="h-full  text-center font-bold text-xl">
                    Money Flow
                  </h2>
                  <div className="flex gap-10 items-center bg-hunzo-blue">
                    <div className="flex gap-2 justify-center items-center h-full w-fit bg-white">
                      <div className="h-2 w-4 rounded-full bg-hunzo-pitch-black" />
                      <span className="font-poppins text-sm font-semibold ">
                        Expenses
                      </span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="font-semibold text-xs  bg-hunzo-background-grey rounded-2xl px-2 h-full">
                          <span className="">Jan 10 - Jan 16</span>
                          <ChevronDown className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                          checked={showStatusBar}
                          onCheckedChange={setShowStatusBar}
                        >
                          Status Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={showActivityBar}
                          onCheckedChange={setShowActivityBar}
                          disabled
                        >
                          Activity Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={showPanel}
                          onCheckedChange={setShowPanel}
                        >
                          Panel
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="w-full h-[86%] bg-hunzo-yellow"></div>
              </div>
              <div className=" grid grid-cols-[repeat(auto-fit,28rem)] gap-6 justify-between bg-hunzo-yellow">
                <div className="w-full h-[18rem] rounded-3xl border-2 border-hunzo-background-grey transition-all bg-hunzo-red">
                  hey
                </div>
                <div className="h-[18rem] rounded-3xl border-2 border-hunzo-background-grey transition-all">
                  hey
                </div>
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
