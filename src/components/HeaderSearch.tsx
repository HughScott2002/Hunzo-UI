import React from "react";
import { Button } from "./ui/button";
import { CommandIcon, Search } from "lucide-react";
import { Input } from "./ui/input";

const HeaderSearch = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-y-2 justify-between items-center md:gap-x-2 ">
      <div className="relative w-full ">
        <Search
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          className="pl-10 bg-white border-gray-300 w-full"
          placeholder={`Search or jump to`}
        />
        <div className="flex absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          <CommandIcon className="text-sm" /> K
        </div>
      </div>
      <div className="w-full flex flex-row md:flex-row space-x-2 md:space-y-0 md:space-x-2 md justify-end items-center ">
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-blue-700 hover:text-white w-full md:w-auto"
        >
          {/* <Send className="mr-2 h-4 w-4" />  */}
          Send
        </Button>
        <Button
          variant="outline"
          className="text-gray-600  hover:bg-blue-700 hover:text-white w-full md:w-auto"
        >
          Request
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-blue-700 hover:text-white w-full md:w-auto"
        >
          Transfer
        </Button>
        <Button
          variant="outline"
          className="text-gray-600 hover:bg-blue-700 hover:text-white w-full md:w-auto"
        >
          Deposit
        </Button>
      </div>
    </div>
  );
};

export default HeaderSearch;
