import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HunzoCustomInput from "@/components/ui/hunzo-custom-input";
import HunzoLoginForm from "@/components/HunzoLoginForm";
import HunzoAuthRightSide from "@/components/HunzoAuthRightSide";
import HunzoRegisterForm from "@/components/HunzoRegisterForm";

export default function Component() {
  // TODO: Fix the font
  // TODO: Fix the xl size thing
  // TODO: Fix
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
            <HunzoRegisterForm />
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
}
