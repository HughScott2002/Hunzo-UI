import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full flex flex-rows bg-hunzo-yellow">
      <div className="w-1/6 bg-hunzo-text-grey"></div>
      <div className="w-4/6 bg-hunzo-green"></div>
      <div className="w-1/6 bg-hunzo-red"></div>
      {/* <Image src={"/auth/checker.png"} alt="Hey" fill className="object-fill" /> */}
      {/* <div className="bg-hunzo-text-grey w-96">
        <header className=" flex space-y-4 text-center h-fit w-full bg-hunzo-red">
          <Image
            src={"/icons/Hunzo-Logo.svg"}
            alt="Hey"
            height={60}
            width={60}
            className="h-14 w-12"
          />
          <h1 className="text-3xl font-semibold -tracking-wide text-[#073B4C] font-poppins">
            Hunzo
          </h1>
        </header>
      </div> */}
    </div>
  );
};

export default page;
