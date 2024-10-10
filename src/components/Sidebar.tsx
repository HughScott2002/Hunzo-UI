"use client";
import Link from "next/link";
import Image from "next/image";
import { appName, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import SearchInput from "./SearchInput";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        {/* Logo */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt={`${appName} logo`}
            className="size-[54px] max-xl:size-14"
          />
          {/* <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1 ">
            {appName}
          </h1> */}
        </Link>
        {/* *********** */}
        {/* *********** */}
        {/* Search Here */}
        {/* <SearchInput /> */}
        {/* Search Here */}
        {/* *********** */}
        {/* *********** */}
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bankGradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        {/* USER */}
      </nav>

      {/* *********** */}
      {/* *********** */}
      {/* Account bottom info */}
      {/* *********** */}
      {/* ***********
      {/* Nav items */}
      {/* <hr className="text-black-1 w-fill block sm:hidden" />s */}
      <SidebarFooter type="desktop" />
      {/* Account bottom info */}
    </section>
  );
};

export default Sidebar;
