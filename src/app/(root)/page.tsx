"use client";

import HeaderBox from "@/components/HeaderBox";
import RecentTransations from "@/components/RecentTransations";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { transactionsTestData, bankTestData } from "@/constants";

import React from "react";
import {
  ArrowDown,
  ArrowUp,
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  DollarSign,
  LineChart,
  PlusCircle,
  PlusIcon,
  Search,
  Send,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import TransactionsTable from "@/components/TransactionsTable";
import BankInfo from "@/components/BankInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-select";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const data = [
  { date: "Sep 14", value: 3000000 },
  { date: "Sep 19", value: 3200000 },
  { date: "Sep 24", value: 3800000 },
  { date: "Sep 29", value: 4200000 },
  { date: "Oct 4", value: 4900000 },
];

const transactions = [
  {
    name: "Shopify",
    amount: -2309.29,
    image: "https://github.com/shopify.png",
  },
  { name: "Shadcn", amount: 1000, image: "https://github.com/shadcn.png" },
  { name: "Stripe", amount: -599, image: "https://github.com/stripe.png" },
  { name: "Amazon", amount: -129.99, image: "https://github.com/amazon.png" },
  { name: "GitHub", amount: -25, image: "https://github.com/github.png" },
  { name: "Netflix", amount: -15.99, image: "https://github.com/netflix.png" },
  { name: "Spotify", amount: -9.99, image: "https://github.com/spotify.png" },
  { name: "Apple", amount: -0.99, image: "https://github.com/apple.png" },
];

function MercuryStyleBalanceAndTransactions({
  accounts,
  totalBanks,
  totalCurrentBalance,
  transactions,
}: any) {
  const [selectedBank, setSelectedBank] = React.useState(accounts[0]?.id || "");

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalCurrentBalance.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bank Accounts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBanks}</div>
            <p className="text-xs text-muted-foreground">Connected accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+$5,750.00</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$3,524.00</div>
            <p className="text-xs text-muted-foreground">+7% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
interface SearchParamProps {
  searchParams: {
    id?: string;
    page?: string;
  };
}

const Home = ({ searchParams: { id, page } }: SearchParamProps) => {
  const subText = "Access & manage your account and transactions efficiently.";
  const currentPage = Number(page) || 1;

  return (
    <section className="flex">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" subtext={subText} />
          {/* <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.23}
          /> */}
          <div className="flex-1 px-1 w-full ">
            <div className="flex justify-between items-center gap-x-28">
              <div className="relative w-full ">
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  className="pl-10 bg-white border-gray-300 w-full"
                  placeholder="Search or jump to"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  Move Money <ChevronDown className="ml-2" size={16} />
                </Button>
                <Bell size={20} className="text-gray-600" />
                <Avatar className="h-8 w-8 bg-blue-100 text-blue-600">
                  <AvatarFallback>JB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl px-2">
          <div className="flex space-x-2 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
            <Button variant="outline" className="text-gray-600">
              Request
            </Button>
            <Button variant="outline" className="text-gray-600">
              Transfer
            </Button>
            <Button variant="outline" className="text-gray-600">
              Deposit
            </Button>
            <Button variant="outline" className="text-gray-600">
              Pay Bill
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-sm  h-fit ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">Balance</CardTitle>
                <div className="flex space-x-2 text-gray-400">
                  <LineChart size={20} />
                  <ChevronsUpDown size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="header-2">$4,944,707.08</div>
                <div className="text-sm text-gray-500 mb-4">
                  Last 30 days <ChevronDown className="inline ml-1" size={16} />
                </div>
                <div className="w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorValue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.1}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                        tickFormatter={(value) =>
                          `$${(value / 1000000).toFixed(1)}M`
                        }
                        dx={-10}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          boxShadow:
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                        labelStyle={{ color: "#374151", fontWeight: "bold" }}
                        formatter={(value) => [
                          `$${(value / 1000000).toFixed(2)}M`,
                          "Balance",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-sm mt-4">
                  <span className="text-green-600 font-medium">↑ $4.7M</span>
                  <span className="text-red-600 font-medium">↓ -$3.2M</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Recent Transactions
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href="/my-wallets" className="flex gap-2">
                          <PlusIcon></PlusIcon>
                          {/* Add Bank */}
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View All</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {/* View all */}
                </Button>
              </CardHeader>
              <CardContent className=" pb-0 mb-0 h-full overflow-visible">
                <div className="space-y-4 max-h-48 overflow-y-auto overflow-visible pr-2 ">
                  {transactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between "
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-10">
                          <AvatarFallback>
                            <img
                              src={transaction.image}
                              alt={transaction.name}
                              className="rounded-full"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {transaction.name}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          transaction.amount >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount >= 0 ? "+" : "-"}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Balance
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,944,707.08</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Bank Accounts
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  Connected accounts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Income</CardTitle>
                <ArrowUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+$5,750.00</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">-$3,524.00</div>
                <p className="text-xs text-muted-foreground">
                  +7% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Main content */}
        {/* <div className="flex space-x-2 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
          <Button variant="outline" className="text-gray-600">
            Request
          </Button>
          <Button variant="outline" className="text-gray-600">
            Transfer
          </Button>
          <Button variant="outline" className="text-gray-600">
            Deposit
          </Button>
          <Button variant="outline" className="text-gray-600">
            Pay Bill
          </Button>
        </div> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Mercury balance
              </CardTitle>
              <div className="flex space-x-2 text-gray-400">
                <LineChart size={20} />
                <ChevronsUpDown size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">$4,944,707.08</div>
              <div className="text-sm text-gray-500 mb-4">
                Last 30 days <ChevronDown className="inline ml-1" size={16} />
              </div>
              <div className="w-[100%] h-[100%]">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#9CA3AF" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#9CA3AF" }}
                    tickFormatter={(value) =>
                      `$${(value / 1000000).toFixed(1)}M`
                    }
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                    labelStyle={{ color: "#374151", fontWeight: "bold" }}
                    formatter={(value) => [
                      `$${(value / 1000000).toFixed(2)}M`,
                      "Balance",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </div>
              <div className="flex justify-between text-sm mt-4">
                <span className="text-green-600 font-medium">↑ $4.7M</span>
                <span className="text-red-600 font-medium">↓ -$3.2M</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">Accounts</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600"
              >
                <PlusCircle size={20} />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Main Checking",
                "Direct Deposit",
                "Vacation",
                "Checking ••0297",
                "Savings ••7658",
              ].map((account, index) => (
                <div
                  key={account}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">{account}</span>
                  </div>
                  <span className="text-sm font-medium">
                    $
                    {index === 2
                      ? "0.00"
                      : (1000000 + index * 500000).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* TODO: FIX THIS UP MAYBE */}
        {/* <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Bill Pay
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <PlusCircle size={20} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Outstanding</div>
                    <div className="text-2xl font-semibold">6</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Overdue</div>
                    <div className="text-2xl font-semibold">-</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Due next 7 days</div>
                    <div className="text-2xl font-semibold">-</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">Inbox</div>
                    <div className="text-sm text-gray-500">3 bills</div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    View <ChevronRight className="ml-1" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  Money movement
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <ChevronDown className="rotate-90" size={16} />
                  <span>Oct 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Money in</div>
                    <div className="text-2xl font-semibold text-green-600">
                      $1,077,664.47
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Money out</div>
                    <div className="text-2xl font-semibold text-red-600">
                      -$1,215,830.28
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
        {/* </div> */}
        {/* <MercuryStyleBalanceAndTransactions
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={9023}
          transactions={transactionsTestData}
        ></MercuryStyleBalanceAndTransactions> */}
        {/* <RecentTransations
        // accounts={accountsData}
        // transactions={account?.transactions}
        // appwriteItemId={appwriteItemId}
        // page={currentPage}
        /> */}
      </div>
      <RightSidebar
        transactions={transactionsTestData}
        banks={[{ currentBalance: 23000.3 }, { currentBalance: 2200.2 }]}
      />
    </section>
  );
};

export default Home;
