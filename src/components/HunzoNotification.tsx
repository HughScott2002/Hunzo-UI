import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellDot,
  CheckCheck,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type NotificationsArray = Notifications[];

type Notifications = {
  label: string;
  content: string;
  date: string;
  type?: "info" | "warning" | "avatar" | "action";
};

const notifications: NotificationsArray = [
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BellDot className="size-9 p-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-hunzo-background-grey">
        <DropdownMenuLabel className="flex justify-center items-center w-full  h-full text-sm font-semibold  px-4">
          <span className="h-full w-full ">Notifications</span>
          <Button className="flex gap-1  -p-2 text-hunzo-blue">
            <CheckCheck className="size-5" />
            <span className="">Mark all as read</span>
          </Button>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="text-hunzo-pitch-black bg-hunzo-text-grey" />

        <DropdownMenuGroup>
          {notifications.map((notification: Notifications) => (
            <DropdownMenuItem>
              <NotificationItems data={notification} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator /> */}

        <DropdownMenuItem className="items-center w-full h-full text-xs font-semibold  px-4">
          <Button className="h-full w-full justify-start -px-2 text-hunzo-dark-blue">
            See all notifications
          </Button>
          <div className="pl-10">
            <Settings className="size-5" />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HunzoNotification;

function NotificationItems({ data }: { data: Notifications }) {
  return (
    <div className="flex gap-2 w-full">
      <Avatar className="my-8">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="notification icon"
        />
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
