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

const HunzoSearch = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search className="size-9 p-2 " />
      </DialogTrigger>

      <DialogOverlay className="bg-hunzo-pitch-black/80" />

      <DialogContent className="sm:max-w-[425px] bg-hunzo-background-grey">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center justify-center text-lg font-manrope text-hunzo-dark-blue font-bold mb-4">
            SEARCH
          </DialogTitle>
          <DialogDescription>
            <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
              <span className="flex-1">QUICK NAVIGATE</span>
              <div className="flex gap-2 items-center justify-center">
                <ChevronLeft className="size-4" />
                <ChevronRight className="size-4" />
              </div>
            </div>
            <div className="flex justify-between my-4">
              {quickNavItems.map(({ icon: Icon, label, href }) => (
                <Link key={href} href={href}>
                  <div className="flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
                    <Icon className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
                    <span className="font-medium text-xm">{label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
        <SearchInput type={"desktop"} />
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

export default HunzoSearch;
