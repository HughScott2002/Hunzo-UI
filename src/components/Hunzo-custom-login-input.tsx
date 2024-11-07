"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema, cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

//TODO: Fix the data Icon

const formSchema = authFormSchema("login");

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
const HunzoCustomLoginInput: React.FC<HunzoCustomInputProps> = ({
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
  const formSchema = authFormSchema("login");

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
                  className={`pl-10 pr-10 placeholder:text-hunzo-text-grey rounded-xl h-16 text-base bg-hunzo-background-grey font-semibold font-poppins px-20 ${className} ${
                    isHidden ? "hidden" : ""
                  } `}
                  placeholder={placeholder}
                  type={inputType}
                  hidden={isHidden}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}
                  {...field}
                />
              </FormControl>
              <div
                className={cn(
                  "absolute left-6 top-5 text-hunzo-text-grey",
                  isHidden ? "hidden" : ""
                )}
              >
                {icon}
              </div>
              {(initialType === "password" || rightIcon) && (
                <Button
                  className={cn(
                    "absolute right-2 top-[20%]",
                    isHidden ? "hidden" : ""
                  )}
                  onClick={handleRightIconClick}
                  type="button"
                >
                  {renderRightIcon()}
                </Button>
              )}
            </div>
            <FormMessage
              className={cn(
                "mt-4 font-poppins text-base text-hunzo-red",
                isHidden ? "hidden" : ""
              )}
            />
          </FormItem>
        )}
      />
    </>
  );
};

export default HunzoCustomLoginInput;
