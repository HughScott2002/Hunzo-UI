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
  Search,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { FC, ReactNode } from "react";
import HunzoDialogRecentContacts from "./HunzoDialogRecentContacts";
import { recentContacts } from "./HunzoSendMoney";

type QuickNavItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const quickNavItems: QuickNavItem[] = [
  {
    icon: ArrowRightLeft,
    label: "Transfers",
    href: "/transactions",
  },
  {
    icon: Contact,
    label: "Contacts",
    href: "/contacts",
  },
  {
    icon: Wallet,
    label: "Wallet",
    href: "/my-wallets",
  },
  {
    icon: PiggyBank,
    label: "Savings",
    href: "/savings",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

type HunzoRequestPaymentProps = {
  trigger: ReactNode;
};

const HunzoRequestPayment = ({ trigger }: HunzoRequestPaymentProps) => {
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
            REQUEST PAYMENT
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <HunzoDialogRecentContacts data={recentContacts} />
          <Input
            type="number"
            className="w-full h-14 text-hunzo-pitch-black rounded-xl"
            placeholder="Request Amount"
          />
        </DialogDescription>
        {/* <SearchInput type={"desktop"} /> */}
        <DialogFooter>
          <Button
            type="submit"
            className="w-full h-fit bg-hunzo-blue text-white hover:text-hunzo-pitch-black hover:bg-white border-2 hover:border-hunzo-blue mt-2"
          >
            <span className="font-semibold">Search</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HunzoRequestPayment;
