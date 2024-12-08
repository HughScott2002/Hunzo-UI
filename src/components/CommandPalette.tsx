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
  ChevronLeft,
  ChevronRight,
  HandCoins,
  PiggyBank,
  SendHorizontal,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* <header className="mx-6">
        <div className="flex items-center justify-center text-lg font-manrope text-hunzo-dark-blue font-bold mt-4 mb-2 ">
          SEARCH
        </div>
        <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
          <span className="flex-1">QUICK NAVIGATE</span>
          <div className="flex gap-2 items-center justify-center">
            <ChevronLeft className="size-4" />
            <ChevronRight className="size-4" />
          </div>
        </div>
        <div>
          <div>Transaction</div>
          <div>Contacts</div>
          <div>Wallet</div>
          <div>Savings</div>
          <div>Settings</div>
        </div>
      </header> */}
      <div className="mx-2">
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="QUICK ACTIONS">
            <CommandItem className="flex gap-4 py-2 text-sm ">
              <SendHorizontal />
              Send Money
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm ">
              <HandCoins />
              Request payments
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="NAVIGATE">
            <Link href={"/my-wallets"}>
              <CommandItem className="flex gap-4 py-2 text-sm ">
                <Wallet />
                Wallets
              </CommandItem>
            </Link>
            <CommandItem className="flex gap-4 py-2 text-sm ">
              <ArrowRightLeft />
              Transactions
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm ">
              <PiggyBank />
              Pockets
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-sm ">
              <Settings />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}
