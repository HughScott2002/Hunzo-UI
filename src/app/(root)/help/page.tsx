import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  icons,
  LucideIcon,
  User,
  WalletIcon,
} from "lucide-react";
import { FC } from "react";
import { Label } from "recharts";

//TODO: Implement Search
//TODO: Make the tags work
type HelpIconProps = {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  active?: boolean;
};
type RightSideCOmponentProps = {
  label: string;
  sublabel: string;
};

const HelpOptionsData: HelpIconProps[] = [
  {
    icon: WalletIcon,
    label: "Sending Money",
    sublabel: "Setting up, paying for, editing, and canceling transfers",
  },
  {
    icon: User,
    label: "Managing Your Account",
    sublabel: "Setting up your account and getting verified",
    active: true,
  },
  {
    icon: CircleDollarSign,
    label: "Holding Money",
    sublabel: "Holding balances, setting up cards debits, and using assets",
  },
  {
    icon: BriefcaseBusiness,
    label: "Overpay Business",
    sublabel: "Multi-users access, accounting, and using our API",
  },
];

const RightSdieData: RightSideCOmponentProps[] = [
  {
    label: "Why can't I open balance?",
    sublabel:
      "We’d like to offer balances to everyone. But there are a few countries and US states where you can’t open any balances just yet.",
  },
  {
    label: "How do I set up Direct Debits?",
    sublabel:
      "When you set up a Direct Debit, you give a company permission to take regular payments from your account. You might use Direct Debits to pay for a monthly subscription like the gym, or to pay your phone or energy bill.",
  },
  {
    label: "How do I open a balance?",
    sublabel:
      "Add money to your balances whenever you like. Just choose which currency you’d like to add to, then click Add money. When you add money to your balances, make sure it comes from your own bank account. If you want to add money to your business account, make sure the money comes from your company’s bank account.",
  },
  {
    label: "How do I cancel a Direct Debit?",
    sublabel:
      "Cancelling a Direct Debit won’t cancel the contract or subscription you have with the company you were paying. So don’t forget to cancel with them, or give them different account details.",
  },
];

const HelpSearchComponent = () => {
  return (
    <div className="bg-hunzo-background-grey h-fit w-full  p-10 flex flex-col gap-4 rounded-xl xl:max-w-96">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Hey, need some help?</h1>
        <span className="text-hunzo-text-grey text-base">
          Type your question or search keyword
        </span>
      </div>
      {/* <HunzoSearch /> */}
      <Input
        className="w-full h-14 rounded-xl text-base"
        placeholder="🔍 Search"
      />
      <div className="flex flex-col gap-2">
        <span className="text-hunzo-text-grey text-base">Popular search:</span>
        <div className="grid grid-cols-[repeat(auto-fit, auto-fit)] gap-2 3xl:justify-center justify-start">
          <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap">
            Send Money
          </span>
          {/* <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap flex">
            Dev
          </span>

          <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap">
            Transfers
          </span> */}
        </div>
      </div>
    </div>
  );
};

const HelpIconComponent: FC<HelpIconProps> = ({
  icon: Icon,
  label,
  sublabel,
  active = false,
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer  flex w-full max-h-60 rounded-xl border-2  transition-all ease-in-out px-4 justify-between items-center gap-2 xl:max-w-[90%]",
        active ? "border-hunzo-blue" : "hover:border-hunzo-blue"
      )}
    >
      {/* <div className={cn("size-12 rounded-full", active ? "" : "")}></div> */}
      <Icon
        className={cn(
          "size-12 rounded-full p-2",
          active ? "bg-hunzo-blue text-white " : "bg-hunzo-text-grey/10"
        )}
      />
      <div className="py-4 flex flex-col">
        <h3 className="font-bold text-base">{label}</h3>
        <span className="text-xs text-hunzo-text-grey font-normal text-wrap">
          {sublabel}
        </span>
      </div>
      <ChevronRight className="size-10 text-hunzo-text-grey " />
    </div>
  );
};

const RightSideCOmponent: FC<RightSideCOmponentProps> = ({
  label,
  sublabel,
}) => {
  return (
    <div className="rounded-xl h-fit border-2 p-6 flex flex-col gap-2">
      <h3 className="font-semibold">{label} </h3>
      <span className="font-light text-hunzo-text-grey text-sm text-balance">
        {sublabel}
      </span>
    </div>
  );
};
const page = () => {
  return (
    <section className="w-full h-full overflow-clip">
      <div className="md:flex justify-center size-full">
        <div className="relative md:px-2 md:w-[40%] lg:px-6 xl:px-10  flex flex-col items-center gap-8 border-r-2">
          <HelpSearchComponent />
          <div className="flex flex-col gap-6 size-full overflow-y-auto">
            {HelpOptionsData.map((item, index): any => (
              <>
                <HelpIconComponent
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  sublabel={item.sublabel}
                  active={item.active}
                />
              </>
            ))}
          </div>
        </div>
        <div className="relative w-[60%] px-8">
          <div className="flex flex-col gap-2 mb-10">
            <h3 className="text-xl font-bold">Holding Money</h3>
            <span className="text-hunzo-text-grey">
              Holding balances, setting up cards debits, and using assets
            </span>
          </div>
          <div className="flex flex-col gap-4 h-full overflow-y-auto">
            {RightSdieData.map((items, index): any => (
              <RightSideCOmponent
                label={items.label}
                sublabel={items.sublabel}
                key={index}
              />
              // <RightSideCOmponent label={"sd"} sublabel={"asdasd"} />;
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
