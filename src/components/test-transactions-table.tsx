import React from "react";
import { ArrowUpDown, ChevronDown, type LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

// Define the transaction type
type Transaction = {
  name: string;
  type: string;
  date: string;
  time: string;
  invoiceId: string;
  amount: string;
  status: "Pending" | "Success" | "Failed";
};

// Define the data array
const transactions: Transaction[] = [
  {
    name: "Gym",
    type: "Payment",
    date: "JUL 29, 2022",
    time: "AT 08:00 PM",
    invoiceId: "PMX09812",
    amount: "+$300.00",
    status: "Pending",
  },
  {
    name: "AI-Bank",
    type: "Deposit",
    date: "JUL 27, 2022",
    time: "AT 09:00 PM",
    invoiceId: "PMX0979",
    amount: "-$890.15",
    status: "Success",
  },
  {
    name: "McDonald",
    type: "Payment",
    date: "JUL 25, 2022",
    time: "AT 05:00 PM",
    invoiceId: "OVF19244",
    amount: "-$600.00",
    status: "Success",
  },
  {
    name: "Amazon",
    type: "Payment",
    date: "JUL 22, 2022",
    time: "AT 08:00 AM",
    invoiceId: "AMX09871",
    amount: "+1,243.00",
    status: "Pending",
  },
  {
    name: "Facebook Ads",
    type: "Payment",
    date: "JUL 19, 2022",
    time: "AT 11:00 PM",
    invoiceId: "PMX09873",
    amount: "-$123.00",
    status: "Failed",
  },
  {
    name: "Gym",
    type: "Payment",
    date: "JUL 29, 2022",
    time: "AT 08:00 PM",
    invoiceId: "PMX09812",
    amount: "+$300.00",
    status: "Pending",
  },
  {
    name: "AI-Bank",
    type: "Deposit",
    date: "JUL 27, 2022",
    time: "AT 09:00 PM",
    invoiceId: "PMX0979",
    amount: "-$890.15",
    status: "Success",
  },
  {
    name: "McDonald",
    type: "Payment",
    date: "JUL 25, 2022",
    time: "AT 05:00 PM",
    invoiceId: "OVF19244",
    amount: "-$600.00",
    status: "Success",
  },
  {
    name: "Amazon",
    type: "Payment",
    date: "JUL 22, 2022",
    time: "AT 08:00 AM",
    invoiceId: "AMX09871",
    amount: "+1,243.00",
    status: "Pending",
  },
  {
    name: "Facebook Ads",
    type: "Payment",
    date: "JUL 19, 2022",
    time: "AT 11:00 PM",
    invoiceId: "PMX09873",
    amount: "-$123.00",
    status: "Failed",
  },
  {
    name: "Gym",
    type: "Payment",
    date: "JUL 29, 2022",
    time: "AT 08:00 PM",
    invoiceId: "PMX09812",
    amount: "+$300.00",
    status: "Pending",
  },
  {
    name: "AI-Bank",
    type: "Deposit",
    date: "JUL 27, 2022",
    time: "AT 09:00 PM",
    invoiceId: "PMX0979",
    amount: "-$890.15",
    status: "Success",
  },
  {
    name: "McDonald",
    type: "Payment",
    date: "JUL 25, 2022",
    time: "AT 05:00 PM",
    invoiceId: "OVF19244",
    amount: "-$600.00",
    status: "Success",
  },
  {
    name: "Amazon",
    type: "Payment",
    date: "JUL 22, 2022",
    time: "AT 08:00 AM",
    invoiceId: "AMX09871",
    amount: "+1,243.00",
    status: "Pending",
  },
  {
    name: "Facebook Ads",
    type: "Payment",
    date: "JUL 19, 2022",
    time: "AT 11:00 PM",
    invoiceId: "PMX09873",
    amount: "-$123.00",
    status: "Failed",
  },
  {
    name: "Gym",
    type: "Payment",
    date: "JUL 29, 2022",
    time: "AT 08:00 PM",
    invoiceId: "PMX09812",
    amount: "+$300.00",
    status: "Pending",
  },
  {
    name: "AI-Bank",
    type: "Deposit",
    date: "JUL 27, 2022",
    time: "AT 09:00 PM",
    invoiceId: "PMX0979",
    amount: "-$890.15",
    status: "Success",
  },
  {
    name: "McDonald",
    type: "Payment",
    date: "JUL 25, 2022",
    time: "AT 05:00 PM",
    invoiceId: "OVF19244",
    amount: "-$600.00",
    status: "Success",
  },
  {
    name: "Amazon",
    type: "Payment",
    date: "JUL 22, 2022",
    time: "AT 08:00 AM",
    invoiceId: "AMX09871",
    amount: "+1,243.00",
    status: "Pending",
  },
  {
    name: "Facebook Ads",
    type: "Payment",
    date: "JUL 19, 2022",
    time: "AT 11:00 PM",
    invoiceId: "PMX09873",
    amount: "-$123.00",
    status: "Failed",
  },
];

// Define the table header data
const tableHeaders: { label: string; icon: LucideIcon }[] = [
  { label: "Name/Business", icon: ArrowUpDown },
  { label: "Date", icon: ChevronDown },
  { label: "Invoice ID", icon: ChevronDown },
  { label: "Amount", icon: ChevronDown },
  { label: "Status", icon: ChevronDown },
  { label: "Actions", icon: ChevronDown },
];

type TableHeaderMakerProps = {
  label: string;
  icon: LucideIcon;
};

const TableHeaderMaker = ({ label, icon: Icon }: TableHeaderMakerProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-bold text-gray-700">{label}</span>
      <Icon className="h-4 w-4 text-gray-500" />
    </div>
  );
};

export function TransactionsTable() {
  return (
    <div className="rounded-lg overflow-y-auto scroll-">
      <table className="min-w-full">
        <thead className="border-b">
          <tr className="">
            {tableHeaders.map((header, index) => (
              <TableHeader key={index}>
                <TableHeaderMaker label={header.label} icon={header.icon} />
              </TableHeader>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <TableCell>
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {transaction.name}
                    </div>
                    <div className="text-gray-500">{transaction.type}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>{transaction.date}</div>
                <div className="text-gray-500">{transaction.time}</div>
              </TableCell>
              <TableCell>{transaction.invoiceId}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <span
                  className={`px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === "Success"
                      ? "bg-green-100 text-green-800"
                      : transaction.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {transaction.status}
                </span>
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
