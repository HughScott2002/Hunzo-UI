"use client";
import Link from "next/link";
import React, { act, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";
import BankInfo from "./BankInfo";
import TransactionsTable from "./TransactionsTable";
import { Changa } from "next/font/google";

const RecentTransations = () => {
  const isActive = true;
  const [mode, setMode] = useState(false);

  const ListOfBanks = ["Bank of america", "Chase"];
  function changeMode() {
    // console.log("Here it is this works");
    setMode(!mode);
  }
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link href={`/transaction-history`} className="view-all-btn">
          View all
        </Link>
      </header>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="recent-transactions-tablist">
          {/* {ListOfBanks.map((x, index) => {
            return <TabsTrigger key={index} onClick={changeMode} />;
          })} */}
          <TabsTrigger value="account" onClick={changeMode}>
            Bank of America
          </TabsTrigger>
          <TabsTrigger value="chase" onClick={changeMode}>
            Chase
          </TabsTrigger>
        </TabsList>

        {/* // Notifaction */}
        <BankInfo
          account={{
            id: "123",
            availableBalance: 1000,
            currentBalance: 1500,
            officialName: "Bank of America",
            mask: "1234",
            name: "Bank of America",
            type: "depository",
            subtype: "Checking",
            appwriteItemId: "2309324234",
            sharableId: "1234",
            institutionId: "1234",
            // Add the remaining required properties here
          }}
          appwriteItemId={"2309324234"}
          type="full"
        />

        <TabsContent value="account">
          <TransactionsTable
            transactions={[
              {
                id: "6627f07b00348f242ea9",
                $id: "6627f07b00348f242ea9",
                name: "Shadcn",
                paymentChannel: "Bank of America",
                type: "Transfer",
                accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
                amount: 1000,
                pending: false,
                category: "Transfer",
                date: "2021-09-01",
                image: "https://github.com/shadcn.png",
                $createdAt: "2021-09-01",
                channel: "Bank of America",
                senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
                receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
              },
              {
                id: "6627f07b00348f242ea9",
                $id: "6627f07b00348f242ea9",
                name: "Shopify",
                paymentChannel: "Chase Bank",
                type: "Subscription",
                accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
                amount: 2309.29,
                pending: false,
                category: "Subscription",
                date: "2021-09-01",
                image:
                  "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
                $createdAt: "2021-09-01",
                channel: "Bank of America",
                senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
                receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="chase">
          <TransactionsTable
            transactions={[
              {
                id: "6627f07b00348f242ea9",
                $id: "6627f07b00348f242ea9",
                name: "Shopify",
                paymentChannel: "Chase Bank",
                type: "Subscription",
                accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
                amount: 2309.29,
                pending: false,
                category: "Subscription",
                date: "2021-09-01",
                image:
                  "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
                $createdAt: "2021-09-01",
                channel: "Bank of America",
                senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
                receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
              },
              {
                id: "6627f07b00348f242ea9",
                $id: "6627f07b00348f242ea9",
                name: "Shadcn",
                paymentChannel: "Chase",
                type: "Transfer",
                accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
                amount: 1000,
                pending: false,
                category: "Transfer",
                date: "2021-09-01",
                image: "https://github.com/shadcn.png",
                $createdAt: "2021-09-01",
                channel: "Bank of America",
                senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
                receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};

const Danely = () => {
  return (
    <div
      //   onClick={handleBankChange}
      className={cn(`banktab-item flex justify-start border-blue-600`)}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-blue-600`)}
      >
        Banks
      </p>
    </div>
  );
};

export default RecentTransations;
