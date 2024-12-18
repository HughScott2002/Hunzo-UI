import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import { Input } from "@/components/ui/input";

//TODO: Implement Search
//TODO: Make the tags work
const page = () => {
  return (
    <section className="w-full h-full">
      <div className="flex h-full gap-2">
        <div className="w-[60%] lg:px-10">
          <HelpSearchComponent />
          <HunzoInactiveDevelopment />
        </div>
        <div className="bg-hunzo-text-grey w-1 h-full rounded-full" />
        <HunzoInactiveDevelopment />
      </div>
    </section>
  );
};

export default page;

const HelpSearchComponent = () => {
  return (
    <div className="bg-hunzo-background-grey h-fit p-10 flex flex-col gap-4 rounded-3xl">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Hey, need some help?</h1>
        <span className="text-hunzo-text-grey text-base">
          Type your question or search keyword
        </span>
      </div>
      {/* <HunzoSearch /> */}
      <Input
        className="w-full h-14 rounded-2xl text-lg"
        placeholder="🔍 Search"
      />
      <div className="flex flex-col gap-2">
        <span className="text-hunzo-text-grey text-base">Popular search:</span>
        <div className="bg-hunzo-yellow overflow-clip text-hunzo-blue flex gap-4  transition-all ease-in-out font-semibold">
          <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap">
            Send Money
          </span>
          <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap flex">
            Dev
          </span>
          <span className="px-4 py-1 size-fit rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white text-nowrap">
            Transfers
          </span>
        </div>
      </div>
    </div>
  );
};
