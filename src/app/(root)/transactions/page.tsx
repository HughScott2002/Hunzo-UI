import SearchInput from "@/components/SearchInput";
import { HunzoTransactionsTable } from "@/components/test-transactions-table";
import { Download, Settings2 } from "lucide-react";

const Transactions = () => {
  return (
    <section className="flex flex-col size-full ">
      <header className="w-full h-14 grid grid-cols-2 mb-6">
        <div className="w-full">
          <SearchInput type={"desktop"} />
        </div>
        <div className="flex justify-end gap-4">
          <div className="h-full text-sm  px-4 flex justify-center items-center gap-2 bg-hunzo-background-grey rounded-md border-2 hover:border-hunzo-blue">
            <Settings2 className="size-4" />
            Filters
          </div>
          <div className="h-full text-sm  px-4 flex justify-center items-center gap-2 bg-hunzo-background-grey rounded-md border-2 hover:border-hunzo-blue">
            <Download className="size-4" />
            Exports
          </div>
        </div>
      </header>
      <HunzoTransactionsTable />
      {/* <HunzoTransactionsTable /> */}
    </section>
  );
};

export default Transactions;

{
  /* <div className="my-wallets w-full">

  <TransactionsTable
    transactions={[
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shadcn",
        paymentChannel: "Bank of America",
        type: "Transfer",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 1000,
        pending: false,
        category: "Transfer",
        date: "2021-09-01",
        image: "https://github.com/shadcn.png",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
      {
        id: "6627f07b00348f242ea9",
        $id: "6627f07b00348f242ea9",
        name: "Shopify",
        paymentChannel: "Chase Bank",
        type: "Subscription",
        accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
        amount: 2309.29,
        pending: false,
        category: "Subscription",
        date: "2021-09-01",
        image:
          "https://banner2.cleanpng.com/20180511/ajq/kisspng-shopify-computer-icons-e-commerce-sales-inventory-5af5e03f12ee59.7893920915260631670776.jpg",
        $createdAt: "2021-09-01",
        channel: "Bank of America",
        senderBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
        receiverBankId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
      },
    ]}
  />
</div> */
}
