import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";

const SearchInput = ({ type = "desktop" }: { type: "mobile" | "desktop" }) => {
  if (type === "mobile") {
    return (
      <div className="mt-20 mb-0 pb-0 ">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-fill text-black-1" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 text-black-1 w-fill"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-link flex w-fill items-center space-x-2 mr-0">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-fill text-black-1" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 text-black-1 w-fill"
          />
        </div>
      </div>
    );
  }
};

export default SearchInput;
