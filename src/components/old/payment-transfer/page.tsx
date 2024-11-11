import HeaderBox from "@/components/HeaderBox";
import React from "react";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TransferSwitch } from "@/components/TransferSwitch";

const Transfers = () => {
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />
      {/* <TransferSwitch /> */}

      <section className="size-full pt-5">
        <div className="flex gap-10 items-center">
          {/* <div className="w-1/2 border-2 border-black-1 rounded-3xl p-6">
            <form action="">
              <Label htmlFor="recipt">Add a Recipetent</Label>
              <Input type="text" id="recipt" name="recipt"></Input>
            </form>

          </div> */}
          <div className="p-6">
            <PaymentTransferForm
            // accounts={accountsData}
            // accounts={}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Transfers;
