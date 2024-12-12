import { HunzoContactTable } from "@/components/HunzoContactTable";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import HunzoTransactionsTable from "@/components/HunzoTransactionsTable";
import SearchInput from "@/components/SearchInput";
import { Download, Plus, Settings2 } from "lucide-react";

const page = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="w-full h-fit  grid grid-cols-2 mb-6">
        <div className="w-full">
          <SearchInput type={"desktop"} />
        </div>
        <div className="flex justify-end gap-4">
          <div className="h-full text-sm px-4 flex justify-center items-center gap-2 bg-hunzo-blue text-white rounded-md border-2 hover:border-hunzo-blue">
            <Plus className="size-4" />
            Add New
          </div>
          <div className="h-full text-sm px-4 flex justify-center items-center gap-2 bg-hunzo-background-grey rounded-md border-2 hover:border-hunzo-blue">
            <Settings2 className="size-4" />
            Filters
          </div>
        </div>
      </div>
      {/* <HunzoTransactionsTable /> */}
      <HunzoContactTable />
    </section>
  );
};

export default page;
