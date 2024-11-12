import Image from "next/image";

export default function Custom404() {
  return (
    <div className="p-10 w-full h-screen dark:bg-hunzo-pitch-black">
    <div className="bg-hunzo-red rounded-3xl h-full w-full flex flex-col gap-4 justify-center items-center">
      <Image
        src="/icons/Hunzo-Logo.svg"
        alt="Hunzo Logo"
        width={56}
        height={56}
        className="h-10 w-10"
      />
      <h1 className="text-[150%] font-semibold -tracking-wide font-poppins">
        404 Page Not Found
      </h1>
    </div>
    </div>
  );
}
