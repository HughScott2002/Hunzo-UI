"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  ChevronRightCircle,
  CreditCard,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { randomBytes } from "crypto";

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
        <div className="size-full max-w-7xl grid grid-cols-12 gap-6 p-6 ">
          {/* Wallets and Cards List */}
          <div className="col-span-5  rounded-xl p-6 h-full w-full overflow-hidden">
            <ScrollArea className="h-full ">
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
                                card.id === selectedCard ? "bg-hunzo-blue" : ""
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
                                  card.status === "active" && "bg-hunzo-green",
                                  card.status === "frozen" && "bg-hunzo-blue",
                                  card.status === "pending" && "bg-hunzo-yellow"
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
            className="col-span-7 bg-white rounded-xl overflow-hidden"
          >
            {selectedCard ? (
              // <div className="h-full bg-green-500" /> // Placeholder as requested
              <div className="size-full animate-in slide-in-from-left duration-700 ease-in-out fade-in-5">
                <HunzoInactiveDevelopment />
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a card to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
