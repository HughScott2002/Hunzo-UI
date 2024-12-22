import { useEffect, useState } from "react";
import HunzoWalletCard from "@/components/HunzoWalletCard";
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Dot,
  RefreshCw,
  Snowflake,
  Wallet,
} from "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";



// const cardActionButtons = ()


const CardButtons = () => {
  return (
    <div className="bg-hunzo-yellow mt-auto">
      <Snowflake />
      <span className="">Freeze</span>
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
        <div className="flex justify-center">
          <div className="flex w-full justify-start items-center">
            <span className="font-bold text-base">$5k available</span>
            <span className="flex justify-center items-center">
              <Dot />
            </span>
            <span className="font-bold text-base">$5k limit</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-nowrap h-full items-center text-base">
              Show Details
            </span>

            <ChevronDown
              className={cn(
                "size-5 cursor-pointer ease-in-out transition-all duration-700",
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
          <div className="w-full h-fit mb-6 bg-white rounded-xl p-6 mt-4 animate-in animate-out slide-in-from-top duration-700 fade-in-60">
            <div>
              <span>Total Monthly Limit</span>
              <span>$300,000.00</span>
            </div>
            <hr />
            <div></div>
          </div>
        )}
      </div>
      {/* Card Container with Aspect Ratio */}
      <div className="w-full max-w-2xl mx-auto  bg-hunzo-red">
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
        {/* Here you go */}
        <CardButtons />
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Available Balance</span>
          <span className="font-semibold">$289.2k available • $300k limit</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Billing Address</h3>
            <p className="text-gray-600">660 Mission St</p>
            <p className="text-gray-600">Floor 4</p>
            <p className="text-gray-600">San Francisco, CA 94105</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Card Details</h3>
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
    </>
  );
};

export default HunzoDetailCardComponent;
