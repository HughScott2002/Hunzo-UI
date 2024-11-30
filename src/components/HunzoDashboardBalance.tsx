"use client";

import { CircleDollarSign, DollarSign } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { value: 4200 },
  { value: 5052, highlighted: true },
  { value: 4800 },
  { value: 6100 },
  { value: 4500 },
];

export function HunzoDashboardBalance() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <Card className="flex flex-col size-[14rem] p-4 rounded-2xl border-2 border-hunzo-background-grey">
      <CardHeader className="items-start justify-start p-0 m-0">
        <div className="w-full h-full flex justify-between items-center">
          <div>
            <CardDescription className="font-medium text-hunzo-dark-blue text-sm">
              Balance
            </CardDescription>
            <CardTitle className="font-bold font-poppins text-2xl text-hunzo-pitch-black">
              $24,098.00
            </CardTitle>
          </div>

          <CircleDollarSign className="p-2 border-2 border-hunzo-background-grey size-10 rounded-lg" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center size-full p-0 m-0">
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={data} barGap={8} className="">
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-hunzo-blue text-white px-3 py-1.5 rounded-md">
                      {formatCurrency(payload[0].value as number)}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              shape={({ x, y, width, height, highlighted }: any) => (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={highlighted ? "#118AB2" : "#CBD5E0"}
                  rx={4}
                />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
