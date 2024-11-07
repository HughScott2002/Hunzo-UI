import HunzoAuthRightSide from "@/components/HunzoAuthRightSide";
import HunzoLoader from "@/components/HunzoLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Forgot = () => {
  return (
    <div className="grid h-screen lg:grid-cols-2">
      {/* This is the left side */}
      <div className="">
        <div className="mx-2 sm:mx-14 py-2 sm:py-10 h-full flex flex-col">
          <div className="w-full h-fit">
            <Image
              src="/icons/Hunzo-Logo.svg"
              alt="Hunzo Logo"
              width={56}
              height={56}
              className="h-12 w-10"
            />
          </div>
          <div className="w-full flex-auto  flex flex-col gap-4 justify-center items-center">
            {/* uhewriuytwe     */}
            {/* <HunzoLoginForm /> */}
            <span className="h-full w-full flex justify-center items-center bg-black-1">
              Forgot
            </span>
          </div>
          <footer className="h-fit w-full">
            <div className="flex justify-between space-x-56 text-md text-gray-500 font-poppins">
              <Link href="/privacy" className="text-nowrap">
                Privacy Policy
              </Link>
              <span className="text-nowrap">Copyright 2024</span>
            </div>
          </footer>
        </div>
      </div>
      {/* This is the right side */}
      <HunzoAuthRightSide />
    </div>
  );
};
// const Forgot = () => {
//   return <HunzoLoader />;
// };

export default Forgot;
