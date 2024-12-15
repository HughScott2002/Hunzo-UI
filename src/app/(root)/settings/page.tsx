"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="size-full">
      <div className="flex size-full border-t-2">
        <div className="w-[40%] border-r-2 px-10 py-8">
          <Card className="bg-hunzo-blue p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <div className="relative h-16 w-16">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="stroke-muted"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    className="stroke-teal-400 transition-all duration-300 ease-in-out"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    strokeDasharray={`${64 * 2.51327} ${100 * 2.51327}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium text-white">64%</span>
                </div>
              </div>
              <div className="flex-1 px-4">
                <h3 className="font-semibold text-lg">Complete profile</h3>
                <p className="text-sm opacity-90">
                  Complete your profile to unlock all features
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="w-full text-hunzo-blue bg-white font-bold"
            >
              Verify identity
            </Button>
          </Card>

          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <UserIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Personal Information</h3>
                <p className="text-sm text-muted-foreground">
                  View your detail to receiving money
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <LockIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Login and Security</h3>
                <p className="text-sm text-muted-foreground">
                  Amet, est purus, a lobortis sit.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <CreditCardIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Direct Debits</h3>
                <p className="text-sm text-muted-foreground">
                  Set up and manage your direct debit
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="size-full p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Personal Information</h2>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="space-x-4">
              <Button className="bg-hunzo-blue text-white font-semibold">
                Upload new pictures
              </Button>
              <Button className="bg-hunzo-red text-white font-semibold">
                Delete
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Full legal first name
                </label>
                <Input placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Full legal last name
                </label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Date of birth
                </label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Phone number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
            </div>

            <Separator className="my-4" />

            <h3 className="text-lg font-medium">Personal Address</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Country</label>
                <Input placeholder="Select your country" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">City</label>
                <Input placeholder="Enter your city" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Address</label>
                <Input placeholder="Enter your address" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">
                  Postal code
                </label>
                <Input placeholder="Enter your postal code" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button className="bg-hunzo-blue  text-white">Edit Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

function UserIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LockIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CreditCardIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
