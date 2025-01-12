import { HunzoContactTable } from "@/components/HunzoContactTable";
import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";
import HunzoTransactionsTable from "@/components/HunzoTransactionsTable";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { Download, Plus, Settings2 } from "lucide-react";

const page = () => {
  return (
    <section className="flex flex-col w-full">
      <header className="w-full h-10 grid grid-cols-2 mb-6">
        <div className="w-full">
          <SearchInput type={"desktop"} />
        </div>
        <div className="flex justify-end gap-4">
          <Button className="h-full text-sm px-4 flex justify-center items-center gap-2 bg-hunzo-blue text-white rounded-md border-2 hover:border-hunzo-blue">
            <Plus className="size-4" />
            AddNew
          </Button>
          <Button className="h-full text-sm px-4 flex justify-center items-center gap-2 bg-hunzo-background-grey rounded-md border-2 hover:border-hunzo-blue">
            <Settings2 className="size-4" />
            Filters
          </Button>
          {/* <Button className=" gap-2 text-hunzo-background-grey rounded-full bg-hunzo-blue font-semibold">
            <Plus className="size-4" />
            Add New
          </Button>
          <Button className=" gap-2 bg-hunzo-background-grey rounded-full text-hunzo-blue font-semibold">
            <Settings2 className="size-4" />
            Filters
          </Button> */}
        </div>
      </header>
      <HunzoContactTable />
    </section>
  );
};

export default page;
