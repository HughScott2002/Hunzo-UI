"use client";
import Countup from "react-countup";

const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      USD&nbsp;
      <Countup
        prefix="$"
        delay={0.5}
        start={0}
        end={value}
        duration={2}
        // decimal={","}
      />
      {/* [value] */}
      {/* {value} */}
    </div>
  );
};

export default AnimatedCounter;
