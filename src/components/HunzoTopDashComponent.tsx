import { CircleDollarSign } from "lucide-react";
import React, { FC, ReactNode } from "react";
/**
 * Props for the TopDashComponents
 *
 * @interface TopDashComponentsProps
 * @property {ReactNode} chartContainer - React component or element to be rendered as the chart
 * @property {string} label - Description label for the component
 * @property {string} [title] - Optional title above the score (defaults to 'Defualt')
 */
interface TopDashComponentsProps {
  ChartContainer: ReactNode;
  label: string;
  title: string;
}
const HunzoTopDashComponent: FC<TopDashComponentsProps> = ({
  ChartContainer,
  label,
  title = "Defualt",
}) => {
  return (
    <div className="h-[13rem] p-4 rounded-2xl border-2 border-hunzo-background-grey transition-all ">
      <div className="size-full flex flex-col justify-between">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="w-full">
            <div className=" font-medium text-hunzo-dark-blue text-sm">
              {label}
            </div>
            <div className="font-bold font-poppins text-xl text-hunzo-pitch-black">
              {title}
            </div>
          </div>
          <CircleDollarSign className="p-2 border-2 border-hunzo-background-grey size-10 rounded-lg" />
        </div>
        {ChartContainer}
      </div>
    </div>
  );
};
export default HunzoTopDashComponent;
