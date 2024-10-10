import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/components/AuthContext";

//TODO: Add Avatar Default FallBack

const SidebarFooter = ({ type = "desktop" }: FooterProps) => {
  const { logout } = useAuth();
  const { user } = useAuth();

  function handleLogOut() {
    logout();
  }

  return (
    <footer className="text-black-1 flex space-x-2 w-full cursor-pointer mt-72">
      <div className={type === "mobile" ? "footer_name-moblie" : "footer_name"}>
        {/* <p>{user.firstName[0]}</p>
         */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName} {user?.lastName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      {/* <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="profile footer image" />
      </div> */}
      {/* 
      <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
      </Avatar>
          <div className="sm:hidden lg:block sm:w-28">
          <p className="text-sm truncate">
          {user.firstName} {user.lastName}
          </p>
          <p className="text-black-1 text-xs truncate">
          {user.email || "email@mail.com"}
          </p>
          </div>
          <Link href="/logout" className="w-8 items-center">
          <Image
          className="sm:hidden lg:block w-2/3"
          src={"/icons/logout.svg"}
          width={25}
          height={25}
          />
          </Link> */}
    </footer>
  );
};

export default SidebarFooter;
