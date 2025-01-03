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

import { ReactNode } from "react";
import HunzoDialogRecentContacts from "./HunzoDialogRecentContacts";
import HunzoDialogSendMoney from "./HunzoDialogSendMoney";

type recentContactsItems = {
  image: string;
  label: string;
  href: string;
};

export const recentContacts: recentContactsItems[] = [
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

type HunzoFXProps = {
  trigger: ReactNode;
};

const HunzoFX = ({ trigger }: HunzoFXProps) => {
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
            Exchange Currency
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <HunzoDialogRecentContacts data={recentContacts} />
          <HunzoDialogSendMoney />
        </DialogDescription>
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

export default HunzoFX;
