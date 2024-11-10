import Link from "next/link";
import { FC, useMemo } from "react";
import HunzoLicence from "./HunzoLicence";

// Cache the year calculation until end of current year
const useCurrentYear = () => {
  return useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Calculate milliseconds until end of year
    const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59, 999);
    const timeUntilEndOfYear = endOfYear.getTime() - now.getTime();

    return currentYear;
  }, []); // Empty dependency array since we only need to calculate once per component mount
};

export const HunzoAuthFooter = () => {
  const currentYear = useCurrentYear();

  // Memoize the static content
  const footerContent = useMemo(
    () => (
      <footer className="h-fit w-full space-y-6">
        <div className="flex justify-between space-x-56 text-md text-gray-500 font-poppins">
          <Link href="/privacy" className="text-nowrap">
            Privacy Policy
          </Link>
          <span className="text-nowrap">Copyright {currentYear}</span>
        </div>
        <div className="w-full flex items-center justify-center">
          <HunzoLicence />
        </div>
      </footer>
    ),
    [currentYear]
  );

  return footerContent;
};
