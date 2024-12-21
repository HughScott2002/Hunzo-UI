import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  CircleX,
  DoorClosed,
  EllipsisVertical,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
const page = () => {
  return (
    <section className="w-full h-full">
      {/* <HunzoInactiveDevelopment /> */}
      <div className="size-full border-b  grid grid-cols-3">
        <div className="col-span-2 size-full border-l-2 border-b-2">
          <div className="w-full h-20  flex items-center justify-start gap-2 border-t-2 border-b-2  px-10">
            <div className="h-full flex items-center">
              <Image
                src={"/placeholder/ai.jpg"}
                alt={""}
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div className="flex items-center  justify-between w-full ">
              <div className="flex flex-col ">
                <span className="font-bold">Hunzo AI</span>
                <span className="text-sm text-hunzo-green bg-hu">Online</span>
              </div>
              <EllipsisVertical />
            </div>
          </div>
          <div className="h-auto w-full relative p-10">The rest</div>
        </div>

        <div className=" col-span-1 lg:px-10 lg: px-2 border-2">
          <div className="w-full h-20 flex items-center justify-end">
            <CircleX />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Image
              src={"/placeholder/ai.jpg"}
              alt={""}
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="font-bold text-lg">Hunzo AI</span>
            <span className="text-sm font-normal text-hunzo-text-grey">
              @hunzoAi
            </span>
          </div>
          <div className="mt-14 ">
            <div className="flex justify-between">
              <h3 className="font-semibold text-base ">Recent Converations</h3>
              <ChevronDown className="text-hunzo-text-grey" />
            </div>
            <div className="flex gap-2 items-center">
              <MessageSquare />
              <span className="h-full ">X</span>
            </div>
            <div>Y</div>
            <div>Z</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
