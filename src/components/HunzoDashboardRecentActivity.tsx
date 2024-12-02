import Link from "next/link";
import HunzoSmallTransactionComponent from "./HunzoSmallTransactionComponent";

const HunzoDashboardRecentActivity = () => {
  return (
    <div className=" min-h-fit w-full flex flex-col">
      <h2 className="flex w-full my-4 bg-white sticky top-0">
        <span className="w-full font-poppins font-semibold text-lg">
          Recent Activity
        </span>
        <Link href={"/transactions"} className="h-fit w-fit flex text-nowrap">
          <span className="text-hunzo-text-grey hover:text-hunzo-blue hover:underline">
            View All
          </span>
        </Link>
      </h2>

      <div className="flex-1 min-h-2 max-h-[50]  ">
        <div className="flex flex-col gap-2 overflow-y-auto">
          <HunzoSmallTransactionComponent
            transationLabel={"Flexy Gym"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"8:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <HunzoSmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <HunzoSmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />
          <HunzoSmallTransactionComponent
            transationLabel={"Clapper"}
            type={"Payment"}
            date={"Jan 29, 2024"}
            Time={"10:00 pm"}
            href={"/transactions"}
            photo={"https://github.com/shadcn.png"}
          />

          {/* <HunzoInactiveDevelopment /> */}
          {/* <HunzoInactiveDevelopment /> */}
        </div>
      </div>
    </div>
  );
};

export default HunzoDashboardRecentActivity;
