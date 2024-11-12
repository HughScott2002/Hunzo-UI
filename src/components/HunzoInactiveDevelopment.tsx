import React from "react";
import Image from "next/image";
const HunzoInactiveDevelopment = () => {
  return (
    <div className="bg-hunzo-yellow rounded-3xl h-full w-full flex flex-col gap-4 justify-center items-center">
      <Image
        src="/icons/Hunzo-Logo.svg"
        alt="Hunzo Logo"
        width={56}
        height={56}
        className="h-12 w-12"
      />
      <h1 className="text-[200%] font-semibold -tracking-wide font-poppins">
        IN ACTIVE DEVELOPMENT
      </h1>
    </div>
  );
};

export default HunzoInactiveDevelopment;