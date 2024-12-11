import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type recentContactsItems = {
  image: string;
  label: string;
  href: string;
};

type HunzoDialogRecentContactsProps = {
  data: recentContactsItems[];
};

const HunzoDialogRecentContacts = ({
  data: recentContacts,
}: HunzoDialogRecentContactsProps) => {
  return (
    <>
      <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
        <span className="flex-1">RECENT CONTACT</span>
        <div className="flex gap-2 items-center justify-center">
          <ChevronLeft className="size-4" />
          <ChevronRight className="size-4 text-hunzo-blue" />
        </div>
      </div>
      <div className="flex justify-between my-4">
        <Link href={"#"}>
          <div className="hover:text-hunzo-blue flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
            <Plus className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
            <span className="font-medium text-xm">Add</span>
          </div>
        </Link>
        {recentContacts.map(({ image, label, href }: recentContactsItems) => (
          // <Link key={href} href={href}>
          //   <div className="flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
          //     <Icon className="size-12 p-4 bg-[#D9D9D9] rounded-full hover:bg-hunzo-blue hover:text-white" />
          //     <span className="font-medium text-xm">{label}</span>
          //   </div>
          // </Link>
          <Link key={href} href={"#"}>
            <div className="hover:text-hunzo-blue flex flex-col justify-center items-center gap-2 transition-all ease-in-out">
              <div className="size-12">
                <Image src={image} width={100} height={100} alt={""} />
              </div>
              <span className="font-medium text-xm">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HunzoDialogRecentContacts;
