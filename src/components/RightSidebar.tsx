"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";
import { useAuth } from "./AuthContext";
//TODO: Wallets need to be fetched from the backend
//TODO: Budgets need to be fetched from the backend

const RightSidebar = ({ transactions, banks }: RightSidebarProps) => {
  const { user } = useAuth();
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold">{user?.firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/my-wallets" className="flex gap-2">
                  <Image
                    src={"/icons/plus.svg"}
                    width={20}
                    height={20}
                    alt={"plus icon"}
                  />
                  {/* Add Bank */}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Wallet</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user?.firstName} ${user?.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user?.firstName} ${user?.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>

      <hr className="w-full mt-8" />
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Budgets</h2>
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger></TooltipTrigger>
              <TooltipContent>
                <p>Helo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Link href="/" className="flex gap-2">
                <Image
                  src={"/icons/ellipsis-vertical.svg"}
                  width={20}
                  height={20}
                  alt={"ellipsis vertical icon"}
                />
                {/* Add Budget */}
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
