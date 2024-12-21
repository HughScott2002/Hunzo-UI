import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,

//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BellDot, CheckCheck, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NotificationsArray = Notifications[];

type Notifications = {
  label: string;
  content: string;
  date: string;
  type?: "info" | "warning" | "avatar" | "action";
  icon?: string;
};

const notifications: NotificationsArray = [
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
    icon: "https://github.com/shadcn.png",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
    icon: "https://github.com/shadcn.png",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
    icon: "https://github.com/shadcn.png",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
  {
    label: "Tenner Stafford",
    content: "You have sent $200.00 to Tenner Stafford",
    date: "2 mins ago",
  },
  {
    label: "Kafla Winser",
    content:
      "You have a new payment request from Cindy Lillibridge for $800.00",
    date: "10 hours ago",
    type: "action",
  },
];

const HunzoNotification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("16rem");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      if (contentRef.current) {
        const windowHeight = window.innerHeight;
        const contentRect = contentRef.current.getBoundingClientRect();
        const maxAvailableHeight = windowHeight - contentRect.top - 20; // 20px buffer
        setMaxHeight(
          isExpanded
            ? `${maxAvailableHeight - (20 / 100) * maxAvailableHeight}px`
            : "16rem"
        );
        console.log("HERE");
        console.log(maxAvailableHeight);
        console.log("HERE");
      }
    };
    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, [isExpanded]);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <BellDot className="size-9 p-2 " />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-80 bg-hunzo-background-grey rounded-md shadow-md"
          ref={contentRef}
        >
          <div className="flex justify-center items-center w-full  h-full text-sm font-semibold  px-4 py-2">
            <span className="h-full w-full ">Notifications</span>
            <Button className="flex gap-1  -p-2 text-hunzo-blue">
              <CheckCheck className="size-5" />
              <span className="font-semibold">Mark all as read</span>
            </Button>
          </div>

          <hr className="text-hunzo-pitch-black bg-hunzo-text-grey" />

          <div
            className={cn(
              "overflow-y-auto transition-all duration-300 ease-in-out px-4"
            )}
            style={{ maxHeight }}
          >
            {notifications.map((notification: Notifications, index) => (
              <DropdownMenu.Item key={index}>
                <NotificationItems data={notification} />
              </DropdownMenu.Item>
            ))}
          </div>

          <div className="flex items-center justify-between w-full text-xs font-semibold px-2 py-2">
            <Button
              className="text-hunzo-dark-blue"
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less" : "See all notifications"}
            </Button>
            <Link href={"/settings/notifications"}>
              <Settings className="size-5 mr-1" />
            </Link>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default HunzoNotification;

function NotificationItems({ data }: { data: Notifications }) {
  const source = data.icon || "https://github.com/shadcn.png";
  return (
    <div className="flex gap-2 w-full">
      <Avatar className="my-8">
        <AvatarImage src={source} alt="notification icon" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full my-2 gap-2">
        <span className="text-hunzo-dark-blue font-bold capitalize text-sm">
          {data.label}
        </span>
        <span className="text-sm font-medium text-hunzo-pitch-black">
          {data.content}
        </span>
        <span className="text-xs font-semibold text-hunzo-text-grey">
          {data.date}
        </span>
        {data.type === "action" && (
          <div className=" flex gap-4 w-full">
            <Button className="border-2 border-hunzo-blue px-6">Cancel</Button>
            <Button className="bg-hunzo-blue text-white px-6">Transfer</Button>
          </div>
        )}
      </div>
    </div>
  );
}
