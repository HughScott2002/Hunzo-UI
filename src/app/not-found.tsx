import Image from "next/image";

export default function Custom404() {
  return (
    <div className="p-10 w-full h-screen dark:bg-hunzo-pitch-black">
      <div className="bg-hunzo-yellow rounded-3xl h-full w-full flex flex-col gap-4 justify-center items-center">
        <h1 className=" flex flex-col gap-2 justify-center items-center font-semibold -tracking-wide font-poppins">
          <span className="text-6xl font-extrabold flex justify-center items-center">
            4
            <Image
              src="/icons/Hunzo-Logo.svg"
              alt="Hunzo Logo"
              width={56}
              height={56}
              className="size-12"
            />
            4
          </span>
          <span className="text-2xl">Page Not Found</span>
        </h1>
      </div>
    </div>
  );
}
