import Link from "next/link";
import { FC } from "react";
import HunzoLicence from "./HunzoLicence";

export const HunzoAuthFooter: FC = () => {
  return (
    <footer className="h-fit w-full space-y-6">
      <div className="flex justify-between space-x-56 text-md text-gray-500 font-poppins">
        <Link href="/privacy" className="text-nowrap">
          Privacy Policy
        </Link>
        <span className="text-nowrap">Copyright 2024</span>
      </div>
      <div className="w-full flex items-center justify-center">
        <HunzoLicence />
      </div>
    </footer>
  );
};
