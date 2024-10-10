import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import React from "react";
import { TestUser } from "@/constants";
const MyBanks = () => {
  const accounts = {
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
  };

  return (
    <section className="flex">
      <div className="my-wallets">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            <BankCard
              key={accounts.id}
              account={accounts}
              userName={TestUser?.firstName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
