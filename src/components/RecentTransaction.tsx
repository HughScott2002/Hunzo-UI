import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { PlusIcon } from "lucide-react";
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
const RecentTransaction = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          Recent Transactions
        </CardTitle>
        <Button variant="ghost" size="sm" className=" hover:text-blue-700">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/my-wallets" className="flex gap-2">
                  <PlusIcon></PlusIcon>
                  {/* Add Bank */}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="bg-white">View All</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* View all */}
        </Button>
      </CardHeader>
      <CardContent className=" pb-0 mb-0 h-full overflow-visible">
        <div className="space-y-4 max-h-48 overflow-y-auto overflow-visible pr-2 ">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between ">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <img
                      src={transaction.image}
                      alt={transaction.name}
                      className="rounded-full"
                    />
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{transaction.name}</span>
              </div>
              <span
                className={`text-sm font-medium ${
                  transaction.amount >= 0 ? "text-green-600" : "text-red-600"
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
  );
};

export default RecentTransaction;
