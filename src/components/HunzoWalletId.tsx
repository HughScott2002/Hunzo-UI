import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Info } from "lucide-react";
import { Button } from "./ui/button";

interface HunzoWalletIdProps {
  wallet: HunzoWalletData | null;
  formatCurrency: (amount: number, includeSign?: boolean) => string;
}
const HunzoWalletId = ({ wallet, formatCurrency }: HunzoWalletIdProps) => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <span className="text-hunzo-blue font-bold">{wallet?.type}</span>
        </h1>
      </div>
      <div className="md:flex size-full gap-6 justify-between">
        {/* Left Column */}
        <div className="space-y-6 border rounded-lg md:w-[70%] h-full">
          <div className="pt-6 px-6 space-y-6">
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2 items-center text-muted-foreground">
                  <span>Available Balance</span>
                  <Info className="h-4 w-4" />
                </div>
                <h2 className="text-3xl font-semibold">
                  {formatCurrency(wallet?.balance ?? 0.0, false)}
                </h2>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">+ Deposit</Button>
                <Button variant="outline">Transfer</Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-24 mb-2 bg-hunzo-text-grey animate-pulse" />
                    <Skeleton className="h-6 w-32 bg-hunzo-text-grey animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex border-t items-center justify-between px-6 py-4">
            <Skeleton className="h-4 w-48 bg-hunzo-text-grey animate-pulse" />
            <Skeleton className="h-4 w-36 bg-hunzo-text-grey animate-pulse" />
          </div>
        </div>
        {/* Right Column */}
        <div className="rounded-lg border p-6 space-y-6 md:w-[30%]">
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <Skeleton className="h-4 w-24 bg-hunzo-text-grey animate-pulse" />
                <Skeleton className="h-4 w-32 bg-hunzo-text-grey animate-pulse" />
              </div>
            ))}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 bg-hunzo-text-grey animate-pulse" />
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="h-4 w-48 bg-hunzo-text-grey animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-48 bg-hunzo-text-grey animate-pulse" />
          <Skeleton className="h-6 w-24 bg-hunzo-text-grey animate-pulse" />
        </div>
        <Skeleton className="h-[200px] w-full bg-hunzo-text-grey animate-pulse" />
      </div>
    </div>
  );
};

export default HunzoWalletId;
