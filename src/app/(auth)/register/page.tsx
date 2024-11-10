import Image from "next/image";
import Link from "next/link";
import HunzoAuthRightSide from "@/components/HunzoAuthRightSide";
import HunzoRegisterForm from "@/components/HunzoRegisterForm";
import { HunzoAuthFooter } from "@/components/HunzoAuthFooter";

export default function Component() {
  // FIXME: Fix the font
  // FIXME: Fix the xl size thing
  return (
    <HunzoRegisterForm />
    // <div className="">
    //   <div className="mx-2 sm:mx-14 py-2 sm:py-10 h-full flex flex-col">
    //     <div className="w-full h-fit">
    //       <Image
    //         src="/icons/Hunzo-Logo.svg"
    //         alt="Hunzo Logo"
    //         width={56}
    //         height={56}
    //         className="h-12 w-10"
    //       />
    //     </div>
    //     <div className="w-full flex-auto  flex flex-col gap-4 justify-center items-center">
    //       {/* uhewriuytwe     */}
    //     </div>
    //     <HunzoAuthFooter />
    //   </div>
    // </div>
    // <div className="grid h-screen lg:grid-cols-2">
    //   {/* This is the left side */}
    //   {/* This is the right side */}
    //   {/* <HunzoAuthRightSide /> */}
    // </div>
  );
}
