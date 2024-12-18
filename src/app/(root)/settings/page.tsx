"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";

// Types
interface MenuItem {
  id: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  title: string;
  description: string;
  active: boolean;
}

interface ProfileCompletion {
  percentage: number;
  title: string;
  description: string;
}

interface PersonalInfoField {
  label: string;
  placeholder: string;
  type?: string;
  gridSpan?: boolean;
}

interface AddressField {
  label: string;
  placeholder: string;
}

const initialMenuItems: MenuItem[] = [
  {
    id: "personal-info",
    icon: UserIcon,
    title: "Personal Information",
    description: "View your detail to receiving money",
    active: true,
  },
  {
    id: "security",
    icon: LockIcon,
    title: "Login and Security",
    description: "Amet, est purus, a lobortis sit.",
    active: false,
  },
  {
    id: "debits",
    icon: CreditCardIcon,
    title: "Direct Debits",
    description: "Set up and manage your direct debit",
    active: false,
  },
];

const personalInfoFields: PersonalInfoField[] = [
  {
    label: "First Name",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    placeholder: "Enter your last name",
  },
  {
    label: "Street Address",
    placeholder: "",
  },
  {
    label: "City",
    placeholder: "",
    type: "date",
  },
  {
    label: "Phone number",
    placeholder: "Enter your phone number",
    type: "tel",
  },
];

const addressFields: AddressField[] = [
  {
    label: "Country",
    placeholder: "Select your country",
  },
  {
    label: "City",
    placeholder: "Enter your city",
  },
  {
    label: "Address",
    placeholder: "Enter your address",
  },
  {
    label: "Postal code",
    placeholder: "Enter your postal code",
  },
];

// Components
const ProfileCompletionCard: React.FC<
  ProfileCompletion & { onDismiss: () => void }
> = ({ percentage, title, description, onDismiss }) => (
  <Card className="bg-hunzo-blue p-6 text-white mx-10">
    <div className="w-full h-fit flex justify-end">
      <CircleX className="cursor-pointer" onClick={onDismiss} />
    </div>
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
            strokeDasharray={`${percentage * 2.51327} ${100 * 2.51327}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-white">{percentage}%</span>
        </div>
      </div>
      <div className="flex-1 px-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
    <Button
      variant="secondary"
      className="w-full bg-white font-bold text-hunzo-blue"
    >
      Verify identity
    </Button>
  </Card>
);

const MenuItem: React.FC<{
  item: MenuItem;
  onClick: (id: string) => void;
}> = ({ item, onClick }) => (
  <div
    className="flex h-28 cursor-pointer hover:bg-gray-50 transition-colors"
    onClick={() => onClick(item.id)}
  >
    {item.active && <div className="bg-hunzo-blue w-1" />}
    <div className="flex items-center gap-4 justify-center pl-6 w-full">
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full bg-hunzo-text-grey/10",
          item.active ? "text-hunzo-blue" : ""
        )}
      >
        <item.icon className="size-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-hunzo-pitch-black">{item.title}</h3>
        <p className="text-sm text-hunzo-text-grey/90">{item.description}</p>
      </div>
    </div>
  </div>
);

const PersonalInfoForm: React.FC = () => (
  <div className="grid gap-6 overflow-y-auto">
    <div className="grid gap-4 sm:grid-cols-2">
      {personalInfoFields.map((field, index) => (
        <>
          {/* <HunzoCustomLoginInput control={[]} /> */}
          <div key={index} className="space-y-2">
            <Label className="text-sm text-muted-foreground">
              {field.label}
            </Label>
            <Input
              type={field.type || "text"}
              placeholder={field.placeholder}
            />
          </div>
        </>
      ))}
    </div>

    <Separator className="my-4" />

    <h3 className="text-lg font-medium">Personal Address</h3>

    <div className="grid gap-4 sm:grid-cols-2">
      {addressFields.map((field, index) => (
        <div key={index} className="space-y-2">
          <label className="text-sm text-muted-foreground">{field.label}</label>
          <Input placeholder={field.placeholder} />
        </div>
      ))}
    </div>
  </div>
);

// Components
const PersonalInformationContent: React.FC = () => (
  <>
    <div className="mb-8">
      <h2 className="text-2xl font-bold">Personal Information</h2>
    </div>

    <div className="mb-8 flex md:flex-col justify-center items-center gap-4 w-full ">
      <Avatar className="size-24 border-4 border-hunzo-blue">
        <AvatarImage src="/placeholder/image 8.png" />
        <AvatarFallback>DP</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="font-bold text-lg">Hugh Scott</h3>
        <span className="text-hunzo-pitch-black/60 text-sm">@taghugh1</span>
      </div>
      <div className="space-x-4">
        <Button className="bg-hunzo-blue font-semibold text-white">
          Upload new pictures
        </Button>
        <Button className="bg-hunzo-red font-semibold text-white">
          Delete
        </Button>
      </div>
    </div>

    <PersonalInfoForm />

    <div className="mt-8 flex justify-end">
      <Button className="bg-hunzo-blue text-white">Edit Details</Button>
    </div>
  </>
);
const Page = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [activeItemId, setActiveItemId] = useState("personal-info");
  const [showCompletion, setShowCompletion] = useState(true);

  const handleDismiss = () => setShowCompletion(false);

  const handleMenuClick = (id: string) => {
    setMenuItems((items) =>
      items.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
    setActiveItemId(id);
  };

  const renderContent = () => {
    switch (activeItemId) {
      case "personal-info":
        return <PersonalInformationContent />;
      case "security":
        return <HunzoInactiveDevelopment />;
      case "debits":
        return <HunzoInactiveDevelopment />;
      default:
        return <HunzoInactiveDevelopment />;
    }
  };

  const profileCompletion: ProfileCompletion = {
    percentage: 50,
    title: "Complete profile",
    description: "Complete your profile to unlock all features",
  };

  return (
    <div className="size-full">
      <div className="lg:flex size-full border-t-2">
        <div className="lg:w-[40%] w-full lg:border-r-2 lg:py-8 pt-4">
          {/* <ProfileCompletionCard {...profileCompletion} /> */}
          {showCompletion && (
            <ProfileCompletionCard
              {...profileCompletion}
              onDismiss={handleDismiss}
            />
          )}
          <div className="mt-8 transition-all ease-in-out">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} onClick={handleMenuClick} />
            ))}
          </div>
        </div>

        <div className="size-full p-10">{renderContent()}</div>
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
