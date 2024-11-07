"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authformSchema, cn } from "@/lib/utils";
import { FormControl, FormField, FormItem, FormMessage } from "./form";

const formSchema = authformSchema("login");

interface HunzoCustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  type: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
  className?: string;
  isHidden: boolean;
}
const HunzoCustomInput: React.FC<HunzoCustomInputProps> = ({
  control,
  name,
  placeholder,
  type: initialType,
  icon,
  rightIcon,
  onRightIconClick,
  className = "",
  isHidden = false,
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
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <div className="relative">
              <FormControl>
                <Input
                  className={`pl-10 pr-10 placeholder:text-hunzo-text-grey rounded-xl h-16 text-base bg-[#F5F5F5] font-semibold font-poppins px-20 ${className}`}
                  placeholder={placeholder}
                  type={inputType}
                  hidden={isHidden}
                  {...field}
                />
              </FormControl>
              <div className="absolute left-6 top-5 text-hunzo-text-grey">
                {icon}
              </div>
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
            <FormMessage className="mt-4 font-poppins text-base text-hunzo-red" />
          </FormItem>
        )}
      />
    </>
  );
};

export default HunzoCustomInput;
