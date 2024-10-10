import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authformSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = authformSchema("login");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="form-label">
            <FormLabel>{label}</FormLabel>
          </div>
          <div className="flex w-full">
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
          <FormMessage className="form-message mt-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
