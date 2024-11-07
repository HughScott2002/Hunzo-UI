"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";

interface HunzoCustomInputProps {
  id: string;
  placeholder: string;
  type: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  className?: string;
}
const HunzoCustomInput: React.FC<HunzoCustomInputProps> = ({
  id,
  placeholder,
  type: initialType,
  icon,
  rightIcon,
  onRightIconClick,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(initialType);

  const handleRightIconClick = () => {
    if (initialType === "password") {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    }
    onRightIconClick?.();
  };

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }
    if (initialType === "password") {
      return showPassword ? (
        <EyeOff className="h-6 w-6 text-hunzo-text-grey" />
      ) : (
        <Eye className="h-6 w-6 text-hunzo-text-grey" />
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <Input
        className={`pl-10 pr-10 placeholder:text-hunzo-text-grey rounded-xl h-16 text-base bg-[#F5F5F5] font-semibold font-poppins px-20 ${className}`}
        id={id}
        placeholder={placeholder}
        type={inputType}
      />
      <div className="absolute left-6 top-5 text-hunzo-text-grey">{icon}</div>
      {(initialType === "password" || rightIcon) && (
        <Button
          className="absolute right-2 top-[20%]"
          onClick={handleRightIconClick}
          type="button"
        >
          {renderRightIcon()}
        </Button>
      )}
    </div>
  );
};

export default HunzoCustomInput;
