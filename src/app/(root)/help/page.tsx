import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import HunzoSearch from "@/components/HunzoSearch";
import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <section className="w-full h-full">
      <div className="flex h-full gap-2">
        <div className="w-[70%] lg:px-10">
          <div className="bg-hunzo-background-grey h-fit p-10 flex flex-col gap-4 rounded-3xl">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-2xl">Hey, need some help?</h1>
              <span className="text-hunzo-text-grey text-base">
                Type your question or search keyword
              </span>
            </div>
            {/* <HunzoSearch /> */}
            <Input className="w-full h-14 rounded-2xl text-lg" placeholder="🔍 Search" />
            <div className="flex flex-col gap-2 ">
              <span className="text-hunzo-text-grey text-base">
                Popular search:
              </span>
              <div className="text-hunzo-blue flex gap-4 transition-all ease-in-out font-semibold">
                <span className="px-4 py-1 rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white ">
                  Dev
                </span>
                <span className="px-4 py-1 rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white ">
                  Send Money
                </span>
                <span className="px-4 py-1 rounded-lg border-2 border-hunzo-blue hover:bg-hunzo-blue hover:text-white ">
                  Transfers
                </span>
              </div>
            </div>
          </div>
          <HunzoInactiveDevelopment />
        </div>
        <div className="bg-hunzo-text-grey w-1 h-full rounded-full" />
        <HunzoInactiveDevelopment />
      </div>
    </section>
  );
};

export default page;
