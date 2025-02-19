import Image from "next/image";

const HunzoLogo = ({ size }: { size: number }) => {
  return (
    <Image
      src="/icons/Hunzo-Logo.svg"
      alt="Hunzo Logo"
      width={56}
      height={56}
      className={`size-${size}`}
    />
  );
};

export default HunzoLogo;
