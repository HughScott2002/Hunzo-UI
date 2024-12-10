import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogPortal } from "@radix-ui/react-dialog";
import {
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight,
  Contact,
  DiamondPlusIcon,
  LucideIcon,
  PiggyBank,
  Plus,
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { FC, ReactNode } from "react";
import Image from "next/image";
import HunzoWalletCard from "./HunzoWalletCard";

type recentContactsItems = {
  image: string;
  label: string;
  href: string;
};

const recentContacts: recentContactsItems[] = [
  {
    image: "/placeholder/Ian.png",
    label: "Ian",
    href: "/contacts",
  },
  {
    image: "/placeholder/Cyndy.png",
    label: "Cyndy",
    href: "/my-wallets",
  },
  {
    image: "/placeholder/Roselle.png",
    label: "Roselle",
    href: "/savings",
  },
  {
    image: "/placeholder/TannerS.png",
    label: "Tanner. S",
    href: "/settings",
  },
  //   {
  //     icon: Plus,
  //     label: "Add",
  //     href: "/transactions",
  //   },
];

type HunzoSendMoneyPros = {
  trigger: ReactNode;
};

type HunzoCardItemProps = {
  src: string;
  title: string;
  subtitle: string;
};
export const paymentMethods: HunzoCardItemProps[] = [
  {
    src: "/placeholder/Visa.png",
    title: "Visa",
    subtitle: "$74,787.78",
  },
  {
    src: "/placeholder/Mastercard.png",
    title: "Mastercard",
    subtitle: "$12,345.67",
  },
  {
    src: "/placeholder/Discover.png",
    title: "Discover",
    subtitle: "$98,765.43",
  },
];

const HunzoCardItem = ({
  src,
  title,
  subtitle,
  onClick,
  selected = false,
  className = "",
}: HunzoCardItemProps & {
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-fit w-full border-2 p-2 flex items-center  rounded-2xl gap-2 cursor-pointer transition-all
          ${
            selected
              ? "border-hunzo-blue"
              : "border-gray-200 hover:border-hunzo-blue/50"
          }
          ${className}`}
    >
      <Image src={src} width={40} height={40} alt={title} />
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-xs">{subtitle}</span>
        </div>
        <Image
          src={"/icons/hunzo-check.svg"}
          width={20}
          height={20}
          alt="check"
        />
      </div>
    </div>
  );
};

const HunzoSendMoney = ({ trigger }: HunzoSendMoneyPros) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Icon/> */}
        {trigger}
      </DialogTrigger>

      <DialogOverlay className="bg-hunzo-pitch-black/80" />

      <DialogContent className="sm:max-w-[425px] bg-hunzo-background-grey">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center justify-center text-lg font-manrope text-hunzo-dark-blue font-bold mb-4">
            SEND MONEY
          </DialogTitle>
          <DialogDescription>
            <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
              <span className="flex-1">RECENT CONTACT</span>
              <div className="flex gap-2 items-center justify-center">
                <ChevronLeft className="size-4" />
                <ChevronRight className="size-4 text-hunzo-blue" />
              </div>
            </div>
            <div className="flex justify-between my-4">
              <Link href={"#"}>
                <div className="hover:text-hunzo-blue flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
                  <Plus className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
                  <span className="font-medium text-xm">Add</span>
                </div>
              </Link>
              {recentContacts.map(({ image, label, href }) => (
                // <Link key={href} href={href}>
                //   <div className="flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
                //     <Icon className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
                //     <span className="font-medium text-xm">{label}</span>
                //   </div>
                // </Link>
                <Link key={href} href={"#"}>
                  <div className="hover:text-hunzo-blue flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
                    <div className="size-12">
                      <Image src={image} width={100} height={100} alt={""} />
                    </div>
                    <span className="font-medium text-xm">{label}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex my-4">
              <span className="flex-1">CHOOSE METHOD</span>
              <div className="flex gap-1 items-center justify-center rounded-full border-2 px-2 hover:border-hunzo-blue transition-all ease-in-out">
                <span className="font-medium text-sm">Add</span>
                <Plus className="size-4" />
                {/* <ChevronLeft className="size-4" />
                <ChevronRight className="size-4 text-hunzo-blue" /> */}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 h-fit w-full">
          <div className="flex flex-col gap-2">
            {paymentMethods.map((method) => (
              <HunzoCardItem
                key={method.title}
                {...method}
                // onClick={() => {}}
                selected={false}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 bg-hunzo-yellow px-4 py-2 justify-center items-center">
            {/* <HunzoWalletCard
              balance={""}
              cardNumber={""}
              currency={"JMD"}
              date={""}
            /> */}

            <Input
              type="number"
              className="w-full h-14 text-hunzo-pitch-black rounded-xl"
              placeholder="Enter Amount"
            />
          </div>
        </div>
        {/* <SearchInput type={"desktop"} /> */}
        <DialogFooter>
          <Button
            type="submit"
            className="w-full h-fit bg-hunzo-blue text-white hover:text-hunzo-pitch-black hover:bg-white border-2 hover:border-hunzo-blue mt-2"
          >
            <span className="font-semibold">Continue</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HunzoSendMoney;
