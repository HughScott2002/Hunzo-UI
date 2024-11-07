import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "@/lib/utils";

const formSchema = RegisterSchema;

interface HunzoSelectProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  options: string[];
  onValueChange: (value: string) => void;
  icon: React.ReactNode;
}

const HunzoSelect: React.FC<HunzoSelectProps> = ({
  control,
  name,
  placeholder,
  options,
  onValueChange,
  icon,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                onValueChange(value);
              }}
            >
              <SelectTrigger className="pl-10 pr-10 text-hunzo-text-grey  placeholder:text-hunzo-text-grey rounded-xl h-16 text-base bg-hunzo-background-grey font-semibold font-poppins px-20 w-full">
                <SelectValue
                  placeholder={placeholder}
                  className="text-hunzo-text-grey"
                />
              </SelectTrigger>
              <SelectContent className="bg-hunzo-background-grey   font-semibold font-poppins">
                {options.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-base uppercase hover:text-hunzo-green text-hunzo-text-grey"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <div className="absolute left-6 bottom-24  text-hunzo-text-grey">
            {icon}
          </div>
          <FormMessage className="mt-4 font-poppins text-base text-hunzo-red" />
        </FormItem>
      )}
    />
  );
};

export default HunzoSelect;
