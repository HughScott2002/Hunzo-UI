"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Copy, CreditCard, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { HunzoTransactionsTable } from "@/components/test-transactions-table";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Page({ params }: { params: { slug: string } }) {
  const formatCurrency = (amount: number, includeSign = true) => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Math.abs(amount));

    return includeSign ? (amount < 0 ? `-${formatted}` : formatted) : formatted;
  };

  console.log(params.slug);
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Ops / Payroll {params.slug}</h1>
      </div>
      <div className="md:flex  size-full gap-6 justify-between ">
        {/* Left Column */}
        <div className="space-y-6 border rounded-lg md:w-[70%] h-full">
          <div className="pt-6 px-6 space-y-6">
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2 items-center text-muted-foreground">
                  <span>Available</span>
                  <Info className="h-4 w-4" />
                </div>
                <h2 className="text-3xl font-semibold">
                  {formatCurrency(2023267.12, false)}
                </h2>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">+ Deposit</Button>
                <Button variant="outline">Transfer</Button>
              </div>
            </div>
            {/* <Separator className="bg-hunzo-pitch-black" /> */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <div className="text-xs text-hunzo-pitch-black font-bold">
                    Type
                  </div>
                  <div className="text-base">Checking</div>
                </div>
                <div>
                  <div className="text-xs text-hunzo-pitch-black font-bold">
                    Current
                  </div>
                  <div className="text-base">
                    {formatCurrency(2023267.12, false)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-hunzo-pitch-black font-bold">
                    Pending outgoing
                  </div>
                  <div className="text-base">{formatCurrency(0, false)}</div>
                </div>
              </div>
            </div>

            {/* <Separator className="bg-hunzo-pitch-black w-full" /> */}
          </div>
          <div className="flex border-t items-center justify-between text-sm px-6 py-4">
            <div className="flex items-center gap-2 text-green-600">
              <div className="h-2 w-2 bg-green-600 rounded-full" />
              Restore to {formatCurrency(2000000)}
            </div>
            <div className="text-muted-foreground">Next transfer: Jan 15</div>
          </div>
        </div>
        {/* Right Column */}
        <div className="rounded-lg border p-6 space-y-6 md:w-[30%] h-full">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">Routing number</div>
              <div className="flex items-center gap-2">
                <span className="text-xs">132456789</span>
                <Copy className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">Account number</div>
              <div className="flex items-center gap-2">
                <span className="text-xs">• • • • • 1038</span>
                <Copy className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="text-sm font-bold">Bank</div>
              <div>Choice Financial Group</div>
              <div>4501 23rd Avenue S</div>
              <div>Fargo, ND 58104</div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Button variant="link" className="text-primary p-0">
              View Statements
            </Button>
            <Button variant="link" className="text-primary p-0">
              More
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold">Recent transactions</h3>
          <Button variant="link" className="text-primary">
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <HunzoTransactionsTable />
      </div>
    </div>
  );
}
