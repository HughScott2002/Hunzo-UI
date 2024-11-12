"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ArrowRightLeft,
  HandCoins,
  PiggyBank,
  SendHorizontal,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="bg-hunzo-text-grey">
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="QUICK ACTIONS">
            <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
              <SendHorizontal />
              Send Money
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
              <HandCoins />
              Request payment
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="NAVIGATE">
            <Link href={"/my-wallets"}>
              <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
                <Wallet />
                Wallets
              </CommandItem>
            </Link>
            <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
              <ArrowRightLeft />
              Transactions
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
              <PiggyBank />
              Pockets
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm text-hunzo-text-grey">
              <Settings />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
