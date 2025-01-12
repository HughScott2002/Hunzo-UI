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
import { quickNavItems } from "@/lib/utils";
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
      <header className="mx-6">
        <div className="flex items-center justify-center text-lg font-manrope text-hunzo-dark-blue font-bold mt-4 mb-2 ">
          SEARCH
        </div>
        <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
          <span className="flex-1">QUICK NAVIGATE</span>
          {/* <div className="flex gap-2 items-center justify-center">
                <ChevronLeft className="size-4" />
                <ChevronRight className="size-4" />
              </div> */}
        </div>
        <div className="flex justify-between my-2">
          {quickNavItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href}>
              <div className="flex flex-col justify-center items-center gap-2 transition-all ease-in-out hover:text-hunzo-blue ">
                <Icon className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
                <span className="font-medium text-xm">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </header>
      <div className="mx-2">
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="QUICK ACTIONS">
            <CommandItem className="flex gap-4 py-2 text-base ">
              <SendHorizontal />
              Send Money
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-base ">
              <HandCoins />
              Request payments
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="NAVIGATE">
            <Link href={"/my-wallets"}>
              <CommandItem className="flex gap-4 py-2 text-base ">
                <Wallet />
                Wallets
              </CommandItem>
            </Link>
            <CommandItem className="flex gap-4 py-2 text-base ">
              <ArrowRightLeft />
              Transactions
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-base ">
              <PiggyBank />
              Pockets
            </CommandItem>
            <CommandItem className="flex gap-4 py-2 text-base ">
              <Settings />
              Settings
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}

const CommandItemActions = () => {
  return (
    <CommandItem className="flex gap-4 py-2 text-sm ">
      <SendHorizontal />
      Send Money
    </CommandItem>
  );
};
