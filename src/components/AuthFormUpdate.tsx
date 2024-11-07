"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const countries = {
  G7: [
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ],
  EU: [
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
  ],
  Caricom: [
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Dominica",
    "Grenada",
    "Guyana",
    "Haiti",
    "Jamaica",
    "Montserrat",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Suriname",
    "Trinidad and Tobago",
  ],
  LATAM: [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Peru",
    "Uruguay",
    "Venezuela",
  ],
};

const allCountries = [...new Set(Object.values(countries).flat())].sort();

const currencies = {
  "United States": "USD",
  "United Kingdom": "GBP",
  Jamaica: "JMD",
  // Add more countries and their currencies here
};

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  country: z.string().min(2, "Please select a country"),
  currency: z.string().min(3, "Currency must be 3 characters"),
  stateProvince: z
    .string()
    .min(2, "State/Province must be at least 2 characters"),
  postalCode: z
    .string()
    .min(2, "Postal/Zip code must be at least 2 characters"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  govId: z.string().min(4, "Government ID must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  authorization: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

const stepSchemas = [
  z.object({
    firstName: formSchema.shape.firstName,
    lastName: formSchema.shape.lastName,
    phone: formSchema.shape.phone,
  }),
  z.object({
    address: formSchema.shape.address,
    city: formSchema.shape.city,
    country: formSchema.shape.country,
    currency: formSchema.shape.currency,
  }),
  z.object({
    stateProvince: formSchema.shape.stateProvince,
    postalCode: formSchema.shape.postalCode,
    dateOfBirth: formSchema.shape.dateOfBirth,
  }),
  z.object({
    govId: formSchema.shape.govId,
    email: formSchema.shape.email,
    password: formSchema.shape.password,
  }),
  z.object({ authorization: formSchema.shape.authorization }),
];

const AuthForm = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isStepValid, setIsStepValid] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      currency: "",
      stateProvince: "",
      postalCode: "",
      dateOfBirth: "",
      govId: "",
      email: "",
      password: "",
      authorization: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/account/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Registration failed");
      router.push("/");
      toast({ title: "Registration successful" });
    } catch (error) {
      console.error("Registration error:", error);
      toast({ title: "Registration failed", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const totalSteps = stepSchemas.length;
  const progress = ((step + 1) / totalSteps) * 100;
  const isLastStep = step === totalSteps - 1;

  const validateStep = async () => {
    const currentStepSchema = stepSchemas[step];
    const stepData = form.getValues();
    try {
      await currentStepSchema.parseAsync(stepData);
      setIsStepValid(true);
    } catch (error) {
      setIsStepValid(false);
    }
  };

  useEffect(() => {
    validateStep();
  }, [step, form.watch()]);

  const handleNext = async () => {
    const isValid = await form.trigger(
      Object.keys(stepSchemas[step].shape) as any
    );
    if (isValid) {
      if (isLastStep) {
        form.handleSubmit(onSubmit)();
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {step === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          form.setValue("currency", currencies[value] || "");
                        }}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {allCountries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {form.watch("country") &&
                  !["United States", "United Kingdom", "Jamaica"].includes(
                    form.watch("country")
                  ) && (
                    <p className="text-yellow-600 col-span-2">
                      Service is not yet available in your country.
                    </p>
                  )}
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Currency</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="USD"
                          {...field}
                          disabled
                          className="hidden"
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="stateProvince"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Province</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postal/Zip Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="12345"
                          {...field}
                          type={
                            ["United States", "United Kingdom"].includes(
                              form.watch("country")
                            )
                              ? "number"
                              : "text"
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="govId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SSN/Gov ID Number</FormLabel>
                      <FormControl>
                        <Input placeholder="123-45-6789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="authorization"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I authorize the collection and processing of my data
                          for KYC purposes and agree to the terms of service.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button
              type="button"
              onClick={() => setStep((prev) => prev - 1)}
              variant="outline"
            >
              Back
            </Button>
          )}
          <Button
            type="button"
            onClick={handleNext}
            disabled={isLoading || !isStepValid}
            className={`ml-auto ${
              isLastStep
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Loading...
              </>
            ) : isLastStep ? (
              "Submit"
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
