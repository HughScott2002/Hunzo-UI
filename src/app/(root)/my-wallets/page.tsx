"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, CreditCard, RefreshCw, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Button } from "@/components/ui/button";
import HunzoWalletCard from "@/components/HunzoWalletCard";

interface WalletType {
  id: string;
  name: string;
  cards: CardType[];
}

interface CardType {
  id: string;
  lastFour: string;
  type: string;
  status: "active" | "frozen" | "pending";
}

const wallets: WalletType[] = [
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

export default function WalletsPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="w-full h-full">
      <div className="flex size-full justify-center ">
        {wallets ? (
          <>
            <div className="md:h-full h-fit w-full max-w-7xl grid grid-row-12 md:grid-cols-12  md:gap-2 lg:gap-6  lg:p-6  rounded-2xl">
              {/* Wallets and Cards List */}
              <div className="col-span-5 rounded-xl  xl:px-6 py-6 mb-0 md:h-full h-fit w-full overflow-hidden ">
                <ScrollArea className="md:h-full w-full ">
                  {wallets.map((wallet) => (
                    <div key={wallet.id} className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-lg font-semibold">{wallet.name}</h2>
                      </div>
                      <div className="space-y-3">
                        {wallet.cards.map((card) => (
                          <Card
                            key={card.id}
                            className={cn(
                              "cursor-pointer transition-colors hover:bg-gray-50",
                              selectedCard === card.id &&
                                "border-hunzo-blue bg-blue-50/50"
                            )}
                            onClick={() => {
                              setSelectedCard(card.id);
                              console.log(selectedCard);
                            }}
                          >
                            <CardContent className="p-4 transition-all ease-in-out">
                              <div className="flex items-center gap-3">
                                <div
                                  className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100",
                                    card.id === selectedCard
                                      ? "bg-hunzo-blue"
                                      : ""
                                  )}
                                >
                                  <CreditCard
                                    className={cn(
                                      "h-5 w-5 ",
                                      card.id === selectedCard
                                        ? "text-white bg-hunzo-blue"
                                        : ""
                                    )}
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">
                                    •••• {card.lastFour}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {card.type}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span
                                    className={cn(
                                      "h-2 w-2 rounded-full",
                                      card.status === "active" &&
                                        "bg-hunzo-green",
                                      card.status === "frozen" &&
                                        "bg-hunzo-blue",
                                      card.status === "pending" &&
                                        "bg-hunzo-yellow"
                                    )}
                                  />
                                  <span className="text-sm capitalize text-gray-500">
                                    {card.status}
                                  </span>
                                  {card.id === selectedCard && (
                                    <ChevronRight className="animate-in slide-in-from-right duration-700 " />
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              {/* Card Details */}
              <div
                key={selectedCard}
                className="col-span-7 size-full rounded-xl overflow-hidden"
              >
                {selectedCard === "1" ? (
                  <div className="size-full  animate-in slide-in-from-left duration-700 ease-in-out fade-in-60 bg-hunzo-background-grey p-6 lg:p-10">
                    {/* Header Section */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <h2 className="text-xl font-semibold text-hunzo-pitch-black">
                            Office Card
                          </h2>
                          <p className="text-hunzo-text-grey">Hugh Scott</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">$10,789.00</p>
                          <p className="text-sm text-hunzo-text-grey">
                            Balance
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Container with Aspect Ratio */}
                    <div className="w-full max-w-2xl mx-auto">
                      <div className="relative w-full aspect-[1.586/1]  rounded-xl p-4 md:p-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="min-w-72">
                            <HunzoWalletCard
                              balance={"balance"}
                              cardNumber={"cardNumber"}
                              currency={"JMD"}
                              date={"date"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="mt-8 space-y-6 max-w-2xl mx-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Available Balance</span>
                        <span className="font-semibold">
                          $289.2k available • $300k limit
                        </span>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Billing Address
                          </h3>
                          <p className="text-gray-600">660 Mission St</p>
                          <p className="text-gray-600">Floor 4</p>
                          <p className="text-gray-600">
                            San Francisco, CA 94105
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Card Details
                          </h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Card Type</span>
                              <span>Virtual Debit</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Account</span>
                              <span>Checking ••0297</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedCard === "2" ? (
                  <HunzoInactiveDevelopment />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Select a card to view details
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="size-full bg-hunzo-background-grey max-w-7xl flex flex-col items-center justify-center rounded-2xl p-8 text-center">
            <Wallet className="size-10 text-hunzo-blue mb-4" />
            <h2 className="text-2xl font-bold text-hunzo-blue mb-2">
              Can't find any wallets right now?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're working on it. Please check back soon.
            </p>
            <Button
              className="bg-hunzo-blue hover:bg-hunzo-blue/90 text-white"
              onClick={() => {
                /* Add refresh logic here */
              }}
            >
              <RefreshCw className="mr-2 size-4" />
              <span className="text-sm">Refresh</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
