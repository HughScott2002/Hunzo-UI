import { HunzoBigBarChart } from "@/components/HunzoBigBarChart";
import CandlestickChart from "@/components/HunzoCandlestick";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";

const page = () => {
  return (
    <section className="w-full h-full">
      {/* <HunzoInactiveDevelopment /> */}
      <div className="size-full flex  flex-col justify-start items-center rounded-3xl overflow-hidden">
        <div className="w-full h-40 bg-hunzo-yellow">Hey</div>
        <div className="w-full h-[60%]">
          {/* <CandlestickChart /> */}
          <HunzoBigBarChart />
        </div>
      </div>
    </section>
  );
};

export default page;
