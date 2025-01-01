import AccountAlerts from "@/components/AccountAlerts";
import HunzoDashboardWalletSection from "@/components/DashboardWalletSection";
import HunzoBalanceGraph from "@/components/HunzoBalanceGraph";
import HunzoDashboardRecentActivity from "@/components/HunzoDashboardRecentActivity";
import HunzoExpensesGraph from "@/components/HunzoExpensesGraph";
import HunzoHalfBudgetsDiagram from "@/components/HunzoHalfBudgetsDiagram";
import HunzoHalfSavingsDiagram from "@/components/HunzoHalfSavingsDiagram";
import HunzoIncomeGraph from "@/components/HunzoIncomeGraph";
import HunzoMoneyFlowDiagram from "@/components/HunzoMoneyFlowDiagram";
import HunzoScoreGraph from "@/components/HunzoScoreGraph";
import HunzoTopDashComponent from "@/components/HunzoTopDashComponent";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { FC } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

/**
 * Array of dashboard items matching TopDashComponentsProps interface
 */
const dashboardItems = [
  {
    chartContainer: <HunzoBalanceGraph />,
    label: "Balance",
    title: "$24,098.00",
  },
  {
    chartContainer: <HunzoIncomeGraph />,
    label: "Income",
    title: "$2,456.84",
  },
  {
    chartContainer: <HunzoExpensesGraph />,
    label: "Expenses",
    title: "$1,980.00",
  },
  {
    chartContainer: <HunzoScoreGraph />,
    label: "Credit Score",
    title: "800",
  },
];

const Dashboard: FC = () => {
  return (
    <section className="w-full h-full ">
      <div className="flex size-full md:gap-2 lg:gap-4 xl:gap-6 transition-all">
        <div className="size-full flex items-start ">
          <div className="flex flex-1 flex-col gap-4 sm:p-4 rounded-3xl transition-all ease-in-out">
            <div className="w-full xl:max-w-[56rem] mx-auto flex flex-col p-2 gap-2">
              <AccountAlerts />
              {/* Container to limit width and center */}
              <div className="grid grid-cols-[repeat(auto-fit,13rem)] gap-4 3xl:justify-center justify-start ">
                {dashboardItems.map((item, index) => (
                  <HunzoTopDashComponent
                    ChartContainer={item.chartContainer}
                    key={index}
                    label={item.label}
                    title={item.title}
                  />
                ))}
              </div>

              <HunzoMoneyFlowDiagram />

              <div className="grid grid-cols-[repeat(auto-fit,26rem)] justify-between ">
                <HunzoHalfSavingsDiagram />
                <HunzoHalfBudgetsDiagram />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-fit transition-all  h-full max-lg:hidden flex flex-col gap-6">
          <HunzoDashboardWalletSection />
          <HunzoDashboardRecentActivity />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
