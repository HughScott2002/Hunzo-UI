import { Link } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface SmallTransactionComponentProps {
  transationLabel: string;
  type: string;
  date: Date | string;
  Time: string | Date;
  href: string;
  photo?: string;
}

const HunzoSmallTransactionComponent: FC<SmallTransactionComponentProps> = ({
  transationLabel,
  type,
  date,
  Time,
  href,
  photo,
}) => {
  return (
    <Link
      href={href}
      className="w-full h-fit flex gap-4 py-2 hover:bg-hunzo-background-grey border-2 border-white hover:border-hunzo-background-grey transition-all rounded-lg hover:px-2"
    >
      {/* Icons and Images */}
      {photo ? (
        <div className="size-14  flex items-center justify-center rounded-xl">
          <Image
            width={500}
            height={500}
            src={photo}
            alt={"Dashboard Transaction Icon"}
            className="rounded-xl"
          />
        </div>
      ) : (
        <div className="size-14 flex items-center justify-center rounded-xl">
          {type}
        </div>
      )}
      {/* Name and Types */}
      <div className="flex flex-col flex-1">
        <span className="text-lg font-semibold">{transationLabel}</span>
        <span className="text-xs">{type}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-col">
        <span className="text-base uppercase text-hunzo-pitch-black">
          {date.toString()}
        </span>
        <span className="text-hunzo-text-grey text-sm">
          At {Time.toString()}
        </span>
      </div>
    </Link>
  );
};

export default HunzoSmallTransactionComponent;
