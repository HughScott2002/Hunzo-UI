import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { cn } from "@/lib/utils";
import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Ellipsis,
  LucideIcon,
} from "lucide-react";
import React, { FC, ReactElement } from "react";

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

const DashboardWalletIcon: FC<DashboardWalletIconProps> = ({
  Icon,
  title,
  textColor,
  hoverColor,
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2`}>
      <div
        className={`size-12 p-2 border-2 border-hunzo-text-grey rounded-xl ${textColor} hover:${hoverColor} hover:text-white justify-center align-middle items-center`}
      >
        <Icon className="w-full" />
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
const Dashboard: FC = () => {
  return (
    <section className="w-full h-full">
      <div className="flex size-full">
        <div className="bg-hunzo-yellow size-full">
          <HunzoInactiveDevelopment />
        </div>
        <div className="w-[45%] h-full max-lg:hidden">
          <div className="border-4 border-hunzo-text-grey rounded-2xl h-[60%] w-full flex flex-col items-center p-6">
            <div className="flex w-full">
              <span className="w-full font-poppins font-semibold text-lg">
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
            <Ellipsis className="my-4 size-8" />
            <div className="flex gap-6 w-full justify-center">
              <DashboardWalletIcon
                Icon={ArrowUpRight}
                title="Send"
                textColor="text-hunzo-green"
                hoverColor="bg-hunzo-green"
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
                hoverColor="bg-hunzo-yellow"
              />
              <DashboardWalletIcon
                Icon={WidgetSVG}
                title="More"
                textColor="text-hunzo-text-grey"
                hoverColor="bg-hunzo-text-grey"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
