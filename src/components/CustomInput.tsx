import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authformSchema, cn } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = authformSchema("login");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type: string;
  isHidden: Boolean;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type,
  isHidden = false,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={cn("form-label", isHidden ? "hidden" : "")}>
            <FormLabel>{label}</FormLabel>
          </div>
          <div className={cn("flex w-full", isHidden ? "hidden" : "")}>
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
          </div>
          {/* <FormDescription>
        This is your public display name.
      </FormDescription> */}
          <FormMessage className="form-message mt-4" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
