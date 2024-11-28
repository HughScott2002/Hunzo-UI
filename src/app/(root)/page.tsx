import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { cn } from "@/lib/utils";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Ellipsis,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

//TODO: Fix the Recent Activity Overflow UI Problem
interface IconComponent {
  className?: string;
}

const WidgetSVG: FC<IconComponent> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-grid-2x2-plus", className)}
    >
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="M16 19h6" />
      <path d="M19 22v-6" />
    </svg>
  );
};

interface DashboardWalletIconProps {
  Icon: LucideIcon | FC<IconComponent>;
  title: string;
  textColor: string;
  hoverColor: string;
}

interface HunzoWalletCardProps {
  balance: number;
  cardNumber: number;
  currency: "JMD" | "USD" | "JPY"; // TODO: Add more currency
  date: Date | string;
}

interface SmallTransactionComponentProps {
  transationLabel: string;
  type: string;
  date: Date | string;
  Time: string | Date;
  href: string;
  photo?: string;
}

const DashboardWalletIcon: FC<DashboardWalletIconProps> = ({
  Icon,
  title,
  textColor,
  hoverColor,
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 hun`}>
      <div
        className={`size-12 p-2 border-2 border-hunzo-text-grey rounded-xl ${textColor} hover:${hoverColor} hover:text-white justify-center align-middle items-center`}
      >
        <Icon className="size-full" strokeWidth={2} />
      </div>
      <span className="font-semibold text-hunzo-text-grey font-poppins">
        {title}
      </span>
    </div>
  );
};

const HunzoWalletCard: FC<HunzoWalletCardProps> = ({
  balance,
  cardNumber,
  currency,
  date,
}) => {
  return (
    <div className="w-full h-[50%] rounded-3xl bg-black-1 mt-2">
      <HunzoInactiveDevelopment />
    </div>
  );
};

const DashboardRecentActivity = () => {
  return (
    <div className=" min-h-fit w-full flex flex-col">
      <h2 className="flex w-full my-4 bg-white sticky top-0">
        <span className="w-full font-poppins font-semibold text-lg">
          Recent Activity
        </span>
        <Link href={"/transactions"} className="h-fit w-fit flex text-nowrap">
          <span className="text-hunzo-text-grey hover:text-hunzo-blue hover:underline">
            View All
          </span>
        </Link>
      </h2>

      <div className="flex-1 min-h-2 max-h-[50]  ">
        <div className="flex flex-col gap-2 overflow-y-auto">
          <SmallTransactionComponent
            transationLabel={"Flexy Gym"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"8:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <SmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />

          {/* <HunzoInactiveDevelopment /> */}
          {/* <HunzoInactiveDevelopment /> */}
        </div>
      </div>
    </div>
  );
};

const SmallTransactionComponent: FC<SmallTransactionComponentProps> = ({
  transationLabel,
  type,
  date,
  Time,
  href,
  photo,
}) => {
  return (
    <Link
      href={href}
      className="w-full h-fit flex gap-4 py-2 hover:bg-hunzo-background-grey border-2 border-white hover:border-hunzo-background-grey transition-all rounded-lg hover:px-2"
    >
      {/* Icons and Images */}
      {photo ? (
        <div className="size-14  flex items-center justify-center rounded-xl">
          <Image
            width={500}
            height={500}
            src={photo}
            alt={"Dashboard Transaction Icon"}
            className="rounded-xl"
          />
        </div>
      ) : (
        <div className="size-14 flex items-center justify-center rounded-xl">
          {type}
        </div>
      )}
      {/* Name and Types */}
      <div className="flex flex-col flex-1">
        <span className="text-lg font-semibold">{transationLabel}</span>
        <span className="text-xs">{type}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-col">
        <span className="text-base uppercase text-hunzo-pitch-black">
          {date.toString()}
        </span>
        <span className="text-hunzo-text-grey text-sm">
          At {Time.toString()}
        </span>
      </div>
    </Link>
  );
};

const DashboardWallet = () => {
  return (
    <div className="min-h-[400px] max-h-[400px] border-4 border-hunzo-text-grey rounded-2xl h-[55%] w-full flex flex-col items-center px-6 py-6">
      <div className="flex w-full">
        <span className="w-full font-poppins font-semibold text-lg ">
          Wallet
        </span>
        <Ellipsis className="size-8" />
      </div>

      <HunzoWalletCard
        balance={0}
        cardNumber={0}
        currency={"JMD"}
        date={"11/22"}
      />
      <Ellipsis className="my-2 size-8 text-hunzo-text-grey" />
      <div className="flex gap-6 w-full justify-center ">
        <DashboardWalletIcon
          Icon={ArrowUpRight}
          title="Send"
          textColor="text-hunzo-green"
          hoverColor=" hover:bg-hunzo-green"
        />
        <DashboardWalletIcon
          Icon={ArrowDownLeft}
          title="Request"
          textColor="text-hunzo-blue"
          hoverColor="bg-hunzo-blue"
        />
        <DashboardWalletIcon
          Icon={ArrowRightLeft}
          title="Exchange"
          textColor="text-hunzo-yellow"
          hoverColor=" hover:bg-hunzo-yellow"
        />
        <DashboardWalletIcon
          Icon={WidgetSVG}
          title="More"
          textColor="text-hunzo-text-grey"
          hoverColor="bg-hunzo-text-grey"
        />
      </div>
    </div>
  );
};

const Dashboard: FC = () => {
  return (
    <section className="w-full h-full">
      <div className="flex size-full md:gap-2 lg:gap-4 xl:gap-6 transition-all">
        <div className="bg-hunzo-yellow size-full">
          <HunzoInactiveDevelopment />
        </div>
        <div className="min-w-fit transition-all  h-full max-lg:hidden">
          <DashboardWallet />
          <DashboardRecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
