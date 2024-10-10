"use client";

import { useAuth } from "@/components/AuthContext";

const HeaderBox = ({ type, title, subtext }: HeaderBoxProps) => {
  const { user } = useAuth();
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type !== "nah" && <>,</>}
        {type === "greeting" && (
          <span className="text-bankGradient">
            &nbsp;
            {user?.firstName || ""}!👋
          </span>
        )}
      </h1>
      <p>{subtext}</p>
    </div>
  );
};

export default HeaderBox;
