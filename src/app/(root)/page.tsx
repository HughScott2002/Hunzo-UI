"use client";
import BankCard from "@/components/BankCard";
import { HunzoDashboardBalance } from "@/components/HunzoDashboardBalance";
import { HunzoDashboardCreditScore } from "@/components/HunzoDashboardCreditScore";
import HunzoDashboardSmallChart from "@/components/HunzoDashboardSmallChart";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import WalletCard from "@/components/WalletCard";
import { cn } from "@/lib/utils";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Ban,
  CircleDollarSign,
  Ellipsis,
  Eye,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

//TODO: Spilt up this large File
//TODO: Fix the Recent Activity Overflow UI Problem
//TODO: Add Credit Score
interface IconComponent {
  className?: string;
}

const WidgetSVG: FC<IconComponent> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-grid-2x2-plus", className)}
    >
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="M16 19h6" />
      <path d="M19 22v-6" />
    </svg>
  );
};

interface DashboardWalletIconProps {
  Icon: LucideIcon | FC<IconComponent>;
  title: string;
  textColor: string;
  hoverColor: string;
}

interface HunzoWalletCardProps {
  balance: number | string;
  cardNumber: number | string;
  currency: "JMD" | "USD" | "JPY" | "GBP"; // TODO: Add more currency
  date: Date | string;
}

interface SmallTransactionComponentProps {
  transationLabel: string;
  type: string;
  date: Date | string;
  Time: string | Date;
  href: string;
  photo?: string;
}

const DashboardWalletIcon: FC<DashboardWalletIconProps> = ({
  Icon,
  title,
  textColor,
  hoverColor,
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 hun`}>
      <div
        className={`size-12 p-2 border-2 border-hunzo-background-grey rounded-xl ${textColor} hover:${hoverColor} hover:text-white justify-center align-middle items-center`}
      >
        <Icon className="size-full" strokeWidth={2} />
      </div>
      <span className="font-semibold text-hunzo-text-grey font-poppins text-sm">
        {title}
      </span>
    </div>
  );
};

const HunzoWalletCard: FC<HunzoWalletCardProps> = ({
  balance,
  cardNumber,
  currency,
  date,
}) => {
  return (
    <div className="w-full h-full rounded-2xl bg-hunzo-pitch-black  mt-2">
      {/* <WalletCard businessName={"sda"} /> */}
      <div className="size-full flex flex-col">
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between px-6 py-4 ">
            <Button variant={"ghost"} className="cursor-pointer -p-2">
              <Eye className="text-white" />
            </Button>
            <Image
              src={"/icons/mastercard.svg"}
              width={50}
              height={50}
              alt={"Wallet Card"}
              className="-mr-2"
            />
          </div>
          <div className="text-white w-full px-6 flex h-full justify-between items-center ">
            <span>{cardNumber}</span>
            <span className="text-hunzo-text-grey">{date.toString()}</span>
          </div>
        </div>
        <div className="bg-hunzo-green w-full z-40 h-20 rounded-b-2xl px-6 font-bold text-xl text-hunzo-dark-blue flex justify-between items-center">
          {currency === "GBP" ? "£" : "$"}
          {balance}
          <Ban
            strokeWidth={3}
            className="hover:text-hunzo-red transition-all"
          />
        </div>
      </div>
    </div>
  );
};

const DashboardRecentActivity = () => {
  return (
    <div className=" min-h-fit w-full flex flex-col">
      <h2 className="flex w-full my-4 bg-white sticky top-0">
        <span className="w-full font-poppins font-semibold text-lg">
          Recent Activity
        </span>
        <Link href={"/transactions"} className="h-fit w-fit flex text-nowrap">
          <span className="text-hunzo-text-grey hover:text-hunzo-blue hover:underline">
            View All
          </span>
        </Link>
      </h2>

      <div className="flex-1 min-h-2 max-h-[50]  ">
        <div className="flex flex-col gap-2 overflow-y-auto">
          <SmallTransactionComponent
            transationLabel={"Flexy Gym"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"8:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />

          {/* <HunzoInactiveDevelopment /> */}
          {/* <HunzoInactiveDevelopment /> */}
        </div>
      </div>
    </div>
  );
};

const SmallTransactionComponent: FC<SmallTransactionComponentProps> = ({
  transationLabel,
  type,
  date,
  Time,
  href,
  photo,
}) => {
  return (
    <Link
      href={href}
      className="w-full h-fit flex gap-4 py-2 hover:bg-hunzo-background-grey border-2 border-white hover:border-hunzo-background-grey transition-all rounded-lg hover:px-2"
    >
      {/* Icons and Images */}
      {photo ? (
        <div className="size-14  flex items-center justify-center rounded-xl">
          <Image
            width={500}
            height={500}
            src={photo}
            alt={"Dashboard Transaction Icon"}
            className="rounded-xl"
          />
        </div>
      ) : (
        <div className="size-14 flex items-center justify-center rounded-xl">
          {type}
        </div>
      )}
      {/* Name and Types */}
      <div className="flex flex-col flex-1">
        <span className="text-lg font-semibold">{transationLabel}</span>
        <span className="text-xs">{type}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-col">
        <span className="text-base uppercase text-hunzo-pitch-black">
          {date.toString()}
        </span>
        <span className="text-hunzo-text-grey text-sm">
          At {Time.toString()}
        </span>
      </div>
    </Link>
  );
};

const DashboardWallet = () => {
  return (
    <div className="min-h-[400px] max-h-[400px] border-2 border-hunzo-background-grey rounded-2xl h-[55%] w-full flex flex-col items-center px-6 py-6">
      <div className="flex w-full">
        <span className="w-full font-poppins font-semibold text-lg ">
          Wallet
        </span>
        <Ellipsis className="size-8" />
      </div>

      <HunzoWalletCard
        balance={"13,543.32"}
        cardNumber={"**** **** **** 7854"}
        currency={"JMD"}
        date={"11/22"}
      />
      <Ellipsis className="my-2 size-8 text-hunzo-text-grey" />
      <div className="flex gap-6 w-full justify-center ">
        <DashboardWalletIcon
          Icon={ArrowUpRight}
          title="Send"
          textColor="text-hunzo-green"
          hoverColor=" hover:bg-hunzo-green"
        />
        <DashboardWalletIcon
          Icon={ArrowDownLeft}
          title="Request"
          textColor="text-hunzo-blue"
          hoverColor="bg-hunzo-blue"
        />
        <DashboardWalletIcon
          Icon={ArrowRightLeft}
          title="Exchange"
          textColor="text-hunzo-yellow"
          hoverColor=" hover:bg-hunzo-yellow"
        />
        <DashboardWalletIcon
          Icon={WidgetSVG}
          title="More"
          textColor="text-hunzo-text-grey"
          hoverColor="bg-hunzo-text-grey"
        />
      </div>
    </div>
  );
};

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

const Dashboard: FC = () => {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <section className="w-full h-full">
      <div className="flex size-full md:gap-2 lg:gap-4 xl:gap-6 transition-all">
        <div className="size-full flex  items-start ">
          {/* <HunzoInactiveDevelopment />
           */}

          <div className="flex flex-1 flex-col gap-4 p-2 sm:p-4">
            <div className="w-full xl:max-w-[80rem] mx-auto">
              {/* Container to limit width and center */}
              <div className="grid grid-cols-[repeat(auto-fit,14rem)] gap-4 justify-center ">
                {[1, 2, 3, 4].map((item) => (
                  <div className="size-[14rem] p-4 rounded-2xl border-2 border-hunzo-background-grey transition-all">
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
              {/* <div className=" grid grid-cols-[repeat(auto-fit,20rem)] gap-6 justify-center ">
                <div className="w-[20rem] h-[18rem] rounded-2xl border-2 border-hunzo-background-grey transition-all bg-black-1">
                  hey
                </div>
                <div className="w-[20rem] h-[18rem] rounded-2xl border-2 border-hunzo-background-grey transition-all">
                  hey
                </div>
                <div className="w-[20rem] h-[18rem] rounded-2xl border-2 border-hunzo-background-grey transition-all">
                  hey
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="min-w-fit transition-all  h-full max-lg:hidden">
          <DashboardWallet />
          <DashboardRecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
