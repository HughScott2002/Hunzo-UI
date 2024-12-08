import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const HunzoSearch = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Search className="size-9 p-2 " />
      </DialogTrigger>

      <DialogOverlay className="bg-hunzo-pitch-black/80" />

      <DialogContent className="sm:max-w-[425px] bg-hunzo-background-grey">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center justify-center text-lg font-manrope text-hunzo-dark-blue font-bold mb-4">
            SEARCH
          </DialogTitle>
          <DialogDescription>
            <div className="text-base font-bold text-hunzo-pitch-black font-manrope flex">
              <span className="flex-1">QUICK NAVIGATE</span>
              <div className="flex gap-2 items-center justify-center">
                <ChevronLeft className="size-4" />
                <ChevronRight className="size-4" />
              </div>
            </div>
            <div>
              <div>Transaction</div>
              <div>Contacts</div>
              <div>Wallet</div>
              <div>Savings</div>
              <div>Settings</div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HunzoSearch;
