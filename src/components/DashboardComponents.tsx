import React from "react";
import RecentTransaction from "./RecentTransaction";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronsUpDown,
  CreditCard,
  DollarSign,
  LineChart,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { date: "Sep 14", value: 3000000 },
  { date: "Sep 19", value: 3200000 },
  { date: "Sep 24", value: 3800000 },
  { date: "Sep 29", value: 4200000 },
  { date: "Oct 4", value: 4900000 },
];

const DashboardComponents = () => {
  return (
    <div className="max-w-7xl">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,944,707.08</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↑ +20.1%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bank Accounts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Connected accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income</CardTitle>
            <ArrowUp className="h-4 w-4 text-muted-foreground text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$5,750.00</div>
            <p className="text-xs text-muted-foreground ">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
            <ArrowDown className="h-4 w-4 text-muted-foreground text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold ">
              <span className="text-red-600">-</span>$3,524.00
            </div>
            <p className="text-xs text-muted-foreground">
              {" "}
              <span className="text-red-600">-7%</span> from last month
            </p>
          </CardContent>
        </Card>
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
                    formatter={(value: number) => [
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

        <RecentTransaction />
      </div>
    </div>
  );
};

export default DashboardComponents;
