import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import React from "react";
import { TestUser } from "@/constants";
import WalletCard from "@/components/WalletCard";
import Image from "next/image";
import NewWalletCard from "@/components/NewWalletCard";
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
          <div className="flex flex-wrap gap-6 ">
            <BankCard
              key={accounts.id}
              account={accounts}
              userName={TestUser?.firstName}
            />
            {/* <div className="w-[53.75rem] h-[33.75rem]">
              Hddddddddddeyhh
              <div className="w-[53.75rem] h-[33.75rem] flex-shrink-0 border-4 border-white bg-[#82E8FF] border-r-2">
                <div></div>
              </div>
              <div className=""></div>
            </div> */}
            <NewWalletCard color={"blue"} />
            <NewWalletCard color={"orange"} />
            <NewWalletCard color={"pink"} />
            <NewWalletCard color={"white"} />
            <NewWalletCard color={"yellow"} />
            <NewWalletCard color={"black"} />
          </div>
        </div>
        {/* <WalletCard /> */}
      </div>
    </section>
  );
};

export default MyBanks;
