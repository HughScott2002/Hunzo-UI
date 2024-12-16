"use client";

import {
  ArrowUpDown,
  ChevronDown,
  TypeIcon as type,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define the recipient type
type Recipient = {
  name: string;
  date: string;
  time: string;
  amount: string;
  currency: string;
};

// Define the data array
const recipients: Recipient[] = [
  {
    name: "Guy Hawkins",
    date: "JUL 29, 2022",
    time: "AT 08:00 PM",
    amount: "+$300.00",
    currency: "USD",
  },
  {
    name: "Angy Hawkins",
    date: "JUL 27, 2022",
    time: "AT 09:00 PM",
    amount: "-$890.15",
    currency: "USD",
  },
  {
    name: "Robert Hisson",
    date: "JUL 25, 2022",
    time: "AT 05:00 PM",
    amount: "-$600.00",
    currency: "USD",
  },
  {
    name: "Angy Hawkins",
    date: "JUL 22, 2022",
    time: "AT 08:00 AM",
    amount: "+1,243.00",
    currency: "USD",
  },
  {
    name: "Guy Hawkins",
    date: "JUL 19, 2022",
    time: "AT 11:00 PM",
    amount: "-$123.00",
    currency: "USD",
  },
  {
    name: "Lie Taisan",
    date: "JUL 15, 2022",
    time: "AT 07:00 PM",
    amount: "-$190.00",
    currency: "USD",
  },
  {
    name: "Miky Baoey",
    date: "JUL 15, 2022",
    time: "AT 05:00 PM",
    amount: "-$1,565.99",
    currency: "USD",
  },
  {
    name: "Trvie Milon",
    date: "JUL 14, 2022",
    time: "AT 09:00 AM",
    amount: "-$10.00",
    currency: "USD",
  },
];

// Define the table header data
const tableHeaders: { label: string; icon: LucideIcon }[] = [
  { label: "Name/Business", icon: ArrowUpDown },
  { label: "Date", icon: ChevronDown },
  { label: "Amount", icon: ChevronDown },
  { label: "Currency", icon: ChevronDown },
  { label: "Actions", icon: ChevronDown },
];

type TableHeaderMakerProps = {
  label: string;
  icon: LucideIcon;
};

const TableHeaderMaker = ({ label, icon: Icon }: TableHeaderMakerProps) => {
  return (
    <div className="py-2 flex items-center gap-2">
      <span className="text-sm font-bold text-hunzo-pitch-black">{label}</span>
      <Icon className="size-5 text-hunzo-pitch-black cursor-pointer" />
    </div>
  );
};

export function HunzoContactTable() {
  return (
    <div className="rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            {tableHeaders.map((header, index) => (
              <TableHeader key={index}>
                <TableHeaderMaker label={header.label} icon={header.icon} />
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-hunzo-background-grey">
          {recipients.map((recipient, index) => (
            <tr key={index} className="hover:bg-hunzo-background-grey">
              <TableCell>
                <div className="flex items-center cursor-default">
                  <div className="size-12 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <div className="font-bold text-hunzo-pitch-black text-base">
                      {recipient.name}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="cursor-default">
                  <div className="text-hunzo-pitch-black">{recipient.date}</div>
                  <div className="text-hunzo-text-grey">{recipient.time}</div>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-bold text-hunzo-pitch-black cursor-default">
                  {recipient.amount}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 cursor-default">
                  <div className="size-6 rounded-full overflow-hidden">
                    <Image
                      src="/icons/gradient-mesh.svg"
                      alt="USD flag"
                      className="w-full h-full object-cover"
                      height={100}
                      width={100}
                    />
                  </div>
                  <span className="font-bold text-hunzo-pitch-black">
                    {recipient.currency}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Button className="border-2 hover:text-white hover:bg-hunzo-blue hover:border-hunzo-blue transition-colors ease-in-out">
                  Details
                </Button>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
}
