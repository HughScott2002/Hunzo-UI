import { FC, useEffect, useState } from "react";
import HunzoWalletCard from "@/components/HunzoWalletCard";
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Dot,
  FilePenLine,
  ListCollapse,
  LucideIcon,
  RefreshCw,
  Snowflake,
  Trash2,
  Tags,
  Lock,
  Settings2,
  CircleHelp,
  Building2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import * as Progress from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CardButtonsProps = {
  buttons: Array<{
    icon: LucideIcon;
    label: string;
    href: string;
  }>;
};

const cardActionButtons = [
  { icon: Snowflake, label: "Freeze", href: "/api/freeze" },
  { icon: ListCollapse, label: "Transactions", href: "/transactions" },
];

const CardButtons = ({ buttons }: CardButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2 w-full justify-between rounded-lg bg-hunzo-blueoK p-2">
      {buttons.map((button, index) => {
        return (
          <Link href={button.href}>
            <div
              key={index}
              className="px-2 mt-auto flex rounded-lg   gap-2 justify-center items-center "
            >
              <button.icon className="size-4 text-white" />
              <span className="text-white text-sm">{button.label}</span>
            </div>
          </Link>
        );
      })}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="px-2 mt-auto flex gap-1 rounded-lg justify-center items-center cursor-pointer">
            <span className="text-white text-sm">More</span>
            <ChevronDown className="size-4 text-white" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col justify-center px-4 py-2 w-42 bg-hunzo-background-grey">
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <FilePenLine className="size-4 " />
            <span className="text-sm font-normal">Edit nickname</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <Building2 className="size-4" />
            <span className="text-sm font-normal">Merchant lock</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <Tags className="size-4" />
            <span className="text-sm font-normal">Category lock</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <Settings2 className="size-4" />
            <span className="text-sm font-normal">Edit limit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <Lock className="size-4" />
            <span className="text-sm font-normal">Reset PIN</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-hunzo-text-grey" />
          <DropdownMenuItem className="flex gap-2 p-2 items-center hover:px-2 hover:text-hunzo-blue">
            <Trash2 className="size-4" />
            <span className="text-sm font-normal">Cancel card</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Progress.Root
      className="relative mt-4 h-4 w-full overflow-hidden rounded-md bg-hunzo-text-grey"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-in size-full bg-hunzo-blue transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

const HunzoDetailCardComponent = ({ cards, id, name }: HunzoWalletType) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      {/* Header Section */}
      <div className="mb-6 transition-all ease-in-out">
        <div className="flex justify-between items-center mt-2">
          <div>
            <h2 className="text-lg font-semibold text-hunzo-pitch-black">
              Office Card
            </h2>
            <p className="text-hunzo-text-grey text-sm">Hugh Scott</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">$10,789.00</p>
            <p className="text-sm text-hunzo-text-grey">Balance</p>
          </div>
        </div>
        <ProgressBar />
        <div className="flex justify-center mt-4  text-sm">
          <div className="flex w-full justify-start items-center ">
            <span className="font-bold ">$5k available</span>
            <Dot />
            <span className="font-bold ">$5k limit</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-nowrap font-medium items-center ">
              Show Details
            </span>

            <ChevronDown
              className={cn(
                "size-4 cursor-pointer ease-in-out transition-all duration-700",
                openDetails ? "rotate-180 " : "rotate-0"
              )}
              onClick={() => {
                setOpenDetails(!openDetails);
                console.log(openDetails);
              }}
            />
          </div>
        </div>

        {openDetails && (
          <div className="cursor-default w-full text-sm h-fit mb-6  rounded-xl p-6 mt-4 animate-in animate-out slide-in-from-top duration-700 fade-in-60">
            <div className="flex py-2  justify-between">
              <span className="text-hunzo-text-grey">Total Monthly Limit</span>
              <span className="text-hunzo-pitch-black font-bold">
                $300,000.00
              </span>
            </div>
            <hr />
            <div className="flex flex-col gap-3 py-2">
              <div className="flex justify-between items-center ">
                <div className="flex gap-1 justify-between items-center">
                  <div className="bg-hunzo-pitch-black rounded-full size-3" />
                  <span className="text-hunzo-pitch-black font-semibold">
                    Posted
                  </span>
                  <CircleHelp className="size-3" />
                </div>
                <div className="font-semibold text-hunzo-text-grey">
                  <span>-$10,789.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <div className="flex gap-1 justify-between items-center">
                  <div className="bg-hunzo-green/40 rounded-full size-3" />
                  <span className="text-hunzo-pitch-black font-semibold">
                    Pending
                  </span>
                  <CircleHelp className="size-3" />
                </div>
                <div className="font-semibold text-hunzo-text-grey">
                  <span>$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center ">
                <div className="flex gap-1 justify-between items-center">
                  <div className="bg-hunzo-text-grey rounded-full size-3" />
                  <span className="text-hunzo-pitch-black font-semibold">
                    Posted
                  </span>
                  <CircleHelp className="size-3 " />
                </div>
                <div className="font-semibold text-hunzo-text-grey">
                  <span className="text-green-600">$289,211.00</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Card Container with Aspect Ratio */}
      {/* <div className="w-full max-w-2xl mx-auto  ">
        <div className="relative w-full aspect-[1.586/1]  rounded-xl p-4 md:p-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="min-w-72 ">
              <HunzoWalletCard
                balance={"balance"}
                cardNumber={"cardNumber"}
                currency={"JMD"}
                date={"date"}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full py-0 my-0  flex justify-center">
        <div className="size-full  p-4 w-[100%] max-w-80 bg-hunzo-red">
          <HunzoWalletCard
            balance={"13,543.32"}
            cardNumber={"**** **** **** 7854"}
            currency={"JMD"}
            date={"11/22"}
          />
        </div>
      </div>
      {/* Additional Details */}
      <div className="mt-4 space-y-6 max-w-2xl mx-auto">
        {/* Here you go */}
        <CardButtons buttons={cardActionButtons} />
        {/* <div className="flex justify-between items-center text-base gap-2">
          <span className="text-gray-600">Available Balance</span>
          <span className="font-semibold">$289.2k available • $300k limit</span>
        </div> */}

        <div className="flex flex-col gap-8">
          <div className="text-base">
            <h3 className="text-sm font-semibold mb-2 text-hunzo-text-grey">
              Billing Address
            </h3>
            <p className="text-hunzo-pitch-black font-medium">660 Mission St</p>
            <p className="text-hunzo-pitch-black font-medium">Floor 4</p>
            <p className="text-hunzo-pitch-black font-medium">
              San Francisco, CA 94105
            </p>
          </div>
          <div className="text-base">
            <h3 className="text-sm font-semibold mb-2 text-hunzo-text-grey">
              Card Details
            </h3>
            <div className="space-y-2 text-hunzo-pitch-black text-medium">
              <div className="flex justify-between font-medium">
                <span>Card Type</span>
                <span className="font-bold">Virtual Debit</span>
              </div>
              <div className="flex justify-between gap-2 font-medium">
                <span>Account</span>
                <span className="font-bold">Checking ••0297</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HunzoDetailCardComponent;
