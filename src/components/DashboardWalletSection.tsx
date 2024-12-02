import {
  ArrowDownLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Ellipsis,
  LucideIcon,
} from "lucide-react";
import HunzoWalletCard from "./HunzoWalletCard";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface IconComponent {
  className?: string;
}

interface DashboardWalletIconProps {
  Icon: LucideIcon | FC<IconComponent>;
  title: string;
  textColor: string;
  hoverColor: string;
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

const DashboardWalletIcon: FC<DashboardWalletIconProps> = ({
  Icon,
  title,
  textColor,
  hoverColor,
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 hun`}>
      <div
        className={`size-12 p-2 border-2 border-hunzo-background-grey rounded-xl ${textColor} hover:${hoverColor} hover:text-white justify-center align-middle items-center`}
      >
        <Icon className="size-full" strokeWidth={2} />
      </div>
      <span className="font-semibold text-hunzo-text-grey font-poppins text-sm">
        {title}
      </span>
    </div>
  );
};

const DashboardWalletSection = () => {
  return (
    <div className="min-h-[400px] max-h-[400px] border-2 border-hunzo-background-grey rounded-2xl h-[55%] w-full flex flex-col items-center px-6 py-6">
      <div className="flex w-full">
        <span className="w-full font-poppins font-semibold text-lg ">
          Wallet
        </span>
        <Ellipsis className="size-8" />
      </div>

      <HunzoWalletCard
        balance={"13,543.32"}
        cardNumber={"**** **** **** 7854"}
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

export default DashboardWalletSection;
