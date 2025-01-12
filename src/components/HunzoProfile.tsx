import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ChevronDown,
  LogOut,
  LucideIcon,
  Moon,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { themesFeatureFlag } from "@/lib/featureFlags";
import { useAuth } from "./AuthContext";

type ProfileItemsArray = ProfileItems[];
type ProfileItems = {
  icon: LucideIcon;
  label: string;
  action: "link" | "action";
  href?: string;
};

const profileItems: ProfileItemsArray = [
  {
    icon: User,
    label: "Your details",
    action: "link",
    href: "/settings/user",
  },
  {
    icon: Settings,
    label: "Account Settings",
    action: "link",
    href: "/settings/account",
  },
  {
    icon: LogOut,
    label: "Log out",
    action: "action",
  },
];

const HunzoProfile = () => {
  const { logout } = useAuth();
  function handleLogout() {
    logout();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-3 p-2 bg-[#FAFAFA] rounded-full justify-center items-center hover:bg-hunzo-blue hover:text-white transition-colors ease-in">
          <Avatar className="size-8">
            <AvatarImage src="/placeholder/image 8.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-poppins text-sm font-semibold  truncate max-w-32">
            Hugh Scott
          </span>
          <ChevronDown className="w-4 h-4 mr-1" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-hunzo-background-grey w-56 p-6 mr-12 ">
        <DropdownMenuLabel className="flex pb-4 w-full h-full -px-1 ">
          <div className="flex justify-between items-center  w-full">
            <div className="h-[70%] w-1 bg-hunzo-blue ">&nbsp;</div>

            <div className=" flex w-full h-full gap-2">
              <div className="flex flex-col flex-grow  pl-4 ">
                <span className="text-base font-bold capitalize">
                  Hugh Scott
                </span>
                <span className="text-hunzo-text-grey text-xs font-semibold">
                  Personal Account
                </span>
              </div>
              {themesFeatureFlag && (
                <div className="flex justify-center items-center w-fit px-0">
                  <Moon className="" />
                </div>
              )}
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="text-hunzo-text-grey bg-hunzo-text-grey" />
        <DropdownMenuGroup>
          {profileItems.map((item) => (
            <>
              {item.label === "Log out" ? (
                <DropdownMenuItem
                  className={cn(
                    "flex gap-3 mt-2 py-2 -px-1 rounded-lg cursor-pointer hover:px-2 transition-all "
                  )}
                  onClick={handleLogout}
                >
                  <item.icon className={cn("size-5 text-hunzo-red")} />
                  <span className={cn("text-sm text-hunzo-red font-semibold")}>
                    {item.label}
                  </span>
                </DropdownMenuItem>
              ) : (
                <Link href={"/settings"}>
                  <DropdownMenuItem
                    className={cn(
                      "flex gap-3 mt-2 py-2 -px-1 rounded-lg cursor-pointer hover:bg-hunzo-blue hover:px-2 transition-all hover:text-white"
                    )}
                  >
                    <item.icon className={cn("size-5")} />
                    <span className={cn("text-sm font-medium")}>
                      {item.label}
                    </span>
                  </DropdownMenuItem>
                </Link>
              )}
            </>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HunzoProfile;
