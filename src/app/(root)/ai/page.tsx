import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, CircleX, DoorClosed, MessageSquare } from "lucide-react";
import Image from "next/image";
const page = () => {
  return (
    <section className="w-full h-full">
      {/* <HunzoInactiveDevelopment /> */}
      <div className="size-full border-b bg-hunzo-red grid grid-cols-3">
        <div className="bg-hunzo-blue  col-span-2">wkw</div>

        <div className="bg-hunzo-green col-span-1 lg:px-4 lg: px-2">
          <div className="w-full h-20 bg-hunzo-red flex justify-end">
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
          <div className="mt-14 bg-hunzo-red">
            <div className="flex justify-between">
              <h3 className="font-semibold text-base ">Recent Converations</h3>
              <ChevronDown className="text-hunzo-text-grey" />
            </div>
            <div className="flex gap-2 items-center">
              <MessageSquare />
              <span className="h-full bg-hunzo-green">X</span>
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
