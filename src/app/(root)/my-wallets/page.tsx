"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  ChevronRight,
  
  CircleHelp,
  CircleIcon,
  CreditCard,
  RefreshCw,
  Snowflake,
  Wallet,
  ArrowUpDown,
  Settings2,
  Download,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Button } from "@/components/ui/button";
import HunzoDetailCardComponent from "@/components/HunzoDetailCardComponent";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableHead, TableRow } from "@/components/ui/table";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import SearchInput from "@/components/SearchInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const wallets: HunzoWalletType[] = [
  {
    id: "1",
    name: "Personal Wallet",
    cards: [
      { id: "1", lastFour: "1234", type: "Office Card", status: "active" },
      { id: "2", lastFour: "5678", type: "Grocery/Meals", status: "active" },
      { id: "3", lastFour: "9012", type: "Travel Card", status: "frozen" },
    ],
  },
  {
    id: "2",
    name: "Savings Wallet",
    cards: [
      { id: "4", lastFour: "3456", type: "Office supplies", status: "active" },
      {
        id: "5",
        lastFour: "7890",
        type: "Summer Intern Card",
        status: "pending",
      },
    ],
  },
];

interface Account {
  id: string;
  name: string;
  subtext?: string;
  balance: number;
  autoTransfer?: {
    text: string;
    subtext?: string;
  };
}

const accounts: Account[] = [
  {
    id: "credit-card",
    name: "Credit Card",
    subtext: "Mercury IO",
    balance: 12505.87,
    autoTransfer: {
      text: "Autopay from Ops / Payroll",
      subtext: "Every 22nd of the month or if <80% of limit left",
    },
  },
  {
    id: "treasury",
    name: "Treasury",
    balance: 200000.0,
  },
  {
    id: "ops-payroll",
    name: "Ops / Payroll",
    subtext: "Checking • • 1038",
    balance: 2023267.12,
    autoTransfer: {
      text: "Restore to $2,000,000",
      subtext: "Next transfer: Jan 15",
    },
  },
  {
    id: "ap",
    name: "AP",
    subtext: "Checking • • 1794",
    balance: 226767.82,
    autoTransfer: {
      text: "2 auto transfer rules affect this account",
    },
  },
  {
    id: "ar",
    name: "AR",
    subtext: "Checking • • 4296",
    balance: 0.0,
    autoTransfer: {
      text: "2 auto transfer rules affect this account",
    },
  },
  {
    id: "checking",
    name: "Checking • • 0297",
    balance: 1374471.14,
    autoTransfer: {
      text: "Create Rule",
    },
  },
  {
    id: "savings",
    name: "Savings • • 7658",
    balance: 1320201.0,
    autoTransfer: {
      text: "Receives 40% of the balance of 'AR'",
      subtext: "After each transaction",
    },
  },
];

const tableHeaders = [
  { label: "Account", icon: ArrowUpDown },
  { label: "Balance", icon: ChevronDown },
  { label: "Auto transfers", icon: ChevronDown },
];

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
}

type TableHeaderMakerProps = {
  label: string;
  icon: typeof ArrowUpDown | typeof ChevronDown;
};

const TableHeaderMaker = ({ label, icon: Icon }: TableHeaderMakerProps) => {
  return (
    <div className="py-2 flex items-center gap-2">
      <span className="text-sm font-bold text-hunzo-pitch-black">{label}</span>
      <Icon className="size-5 text-hunzo-pitch-black cursor-pointer" />
    </div>
  );
};

export default function WalletsPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );
  return (
    <section className="w-full h-full flex justify-center ">
      <div className="max-w-4xl w-full rounded-2xl  py-20">
        <div>
          <div className="mb-6">
            <div className=" flex gap-2 items-center pl-1">
              <span className="text-sm">Available</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>Hover</TooltipTrigger>
                  <TooltipContent>
                    <CircleHelp className="text-hunzo-text-grey size-4" />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-3xl font-semibold text-hunzo-pitch-black">
              {formatCurrency(totalBalance)}
            </div>
          </div>

          <div className="rounded-lg overflow-y-auto cursor-pointer">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {tableHeaders.map((header, index) => (
                    <TableHeader key={index}>
                      <TableHeaderMaker
                        label={header.label}
                        icon={header.icon}
                      />
                    </TableHeader>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-hunzo-background-grey">
                {accounts.map((account) => (
                  <tr
                    key={account.id}
                    className="hover:bg-hunzo-background-grey"
                  >
                    <TableCell>
                      <div className="flex items-center">
                        <div className="size-12 flex-shrink-0 rounded-xl bg-gray-200" />
                        <div className="ml-4 ">
                          <div className="font-bold text-hunzo-pitch-black text-base">
                            {account.name}
                          </div>
                          {account.subtext && (
                            <div className="text-hunzo-text-grey text-sm">
                              {account.subtext}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-bold text-hunzo-pitch-black ">
                        {formatCurrency(account.balance)}
                      </span>
                    </TableCell>
                    <TableCell>
                      {account.autoTransfer ? (
                        <div className="">
                          <div className="font-medium text-hunzo-pitch-black">
                            {account.autoTransfer.text}
                          </div>
                          {account.autoTransfer.subtext && (
                            <div className="text-sm text-hunzo-text-grey">
                              {account.autoTransfer.subtext}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-2 hover:text-white hover:bg-hunzo-blue hover:border-hunzo-blue transition-colors ease-in-out"
                        >
                          Create Rule
                        </Button>
                      )}
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Button
            variant="outline"
            className="flex gap-1 mt-4 border-2 hover:text-white hover:bg-hunzo-blue hover:border-hunzo-blue transition-colors ease-in-out"
          >
            <Plus className="size-4" />
            <span>Create account</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

// export default function WalletsPage() {
//   const [selectedCard, setSelectedCard] = useState<string | null>(null);
//   return (
//     <section className="w-full h-full">
//       <div className="flex size-full justify-center ">
//         {wallets ? (
//           <>
//             <div className="md:h-full h-fit w-full max-w-7xl grid grid-row-12 md:grid-cols-12 md:gap-2 lg:gap-6 lg:p-6 rounded-2xl ">
//               {/* Wallets and Cards List */}
//               <div className="col-span-5 rounded-xl  xl:px-6 py-6 mb-0 md:h-full h-fit w-full overflow-hidden ">
//                 <ScrollArea className="md:h-full w-full ">
//                   {wallets.map((wallet) => (
//                     <div key={wallet.id} className="mb-8">
//                       <div className="flex items-center gap-2 mb-4">
//                         <h2 className="text-lg font-semibold">{wallet.name}</h2>
//                       </div>
//                       <div className="space-y-3">
//                         {wallet.cards.map((card) => (
//                           <Card
//                             key={card.id}
//                             className={cn(
//                               "cursor-pointer transition-colors hover:bg-gray-50",
//                               selectedCard === card.id &&
//                                 "border-hunzo-blue bg-blue-50/50"
//                             )}
//                             onClick={() => {
//                               setSelectedCard(card.id);
//                               console.log(selectedCard);
//                             }}
//                           >
//                             <CardContent className="p-4 transition-all ease-in-out">
//                               <div className="flex items-center gap-3">
//                                 <div
//                                   className={cn(
//                                     "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100",
//                                     card.id === selectedCard
//                                       ? "bg-hunzo-blue"
//                                       : ""
//                                   )}
//                                 >
//                                   <CreditCard
//                                     className={cn(
//                                       "h-5 w-5 ",
//                                       card.id === selectedCard
//                                         ? "text-white bg-hunzo-blue"
//                                         : ""
//                                     )}
//                                   />
//                                 </div>
//                                 <div className="flex-1">
//                                   <p className="font-medium">
//                                     •••• {card.lastFour}
//                                   </p>
//                                   <p className="text-sm text-gray-500">
//                                     {card.type}
//                                   </p>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <span
//                                     className={cn(
//                                       "h-2 w-2 rounded-full",
//                                       card.status === "active" &&
//                                         "bg-hunzo-green",
//                                       card.status === "frozen" &&
//                                         "bg-hunzo-blue",
//                                       card.status === "pending" &&
//                                         "bg-hunzo-yellow"
//                                     )}
//                                   />
//                                   <span className="text-sm capitalize text-gray-500">
//                                     {card.status}
//                                   </span>
//                                   {card.id === selectedCard && (
//                                     <ChevronRight className="animate-in slide-in-from-right duration-700 " />
//                                   )}
//                                 </div>
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </ScrollArea>
//               </div>

//               {/* Card Details */}
//               <div
//                 key={selectedCard}
//                 className="col-span-7 size-full rounded-xl overflow-hidden"
//               >
//                 {selectedCard === "1" ? (
//                   <div className="size-full flex flex-col items-center  animate-in slide-in-from-left duration-700 ease-in-out fade-in-60 md:p-4 lg:p-10">
//                     <div className="h-full w-fit bg-hunzo-background-grey px-6 py-4 md:px-10 lg:px-12 md:py-4 lg:py-6 rounded-2xl">
//                       <HunzoDetailCardComponent
//                         id={wallets[1].id}
//                         name={wallets[1].name}
//                         cards={wallets[1].cards}
//                       />
//                     </div>
//                   </div>
//                 ) : selectedCard === "2" ? (
//                   <HunzoInactiveDevelopment />
//                 ) : (
//                   <div className="h-full flex items-center justify-center text-gray-500">
//                     Select a card to view details
//                   </div>
//                 )}
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="size-full bg-hunzo-background-grey max-w-7xl flex flex-col items-center justify-center rounded-2xl p-8 text-center">
//             <Wallet className="size-10 text-hunzo-blue mb-4" />
//             <h2 className="text-2xl font-bold text-hunzo-blue mb-2">
//               Can't find any wallets right now?
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               We're working on it. Please check back soon.
//             </p>
//             <Button
//               className="bg-hunzo-blue hover:bg-hunzo-blue/90 text-white"
//               onClick={() => {
//                 /* Add refresh logic here */
//               }}
//             >
//               <RefreshCw className="mr-2 size-4" />
//               <span className="text-sm">Refresh</span>
//             </Button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
