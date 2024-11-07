"use client";
import React from "react";
import AuthFooter from "./AuthFooter";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  CalendarFold,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Mail,
  Signpost,
  User,
  Landmark,
  Home,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/AuthContext";
import HunzoProgressBar from "./HunzoProgressBar";
import HunzoSelect from "./HunzoCustomSelect";
import HunzoCustomRegisterInput from "./Hunzo-custom-register-input";
import { cn } from "@/lib/utils";

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
// Now, let's create the allCountries array without using Set
const allCountries: string[] = Object.values(countries)
  .reduce((acc, group) => acc.concat(group), [] as string[])
  .filter((country, index, self) => self.indexOf(country) === index)
  .sort();
// export { countries, allCountries };

const currencies = {
  "United States": "USD",
  "United Kingdom": "GBP",
  Jamaica: "JMD",
  // Add more countries and their currencies here
};

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  country: z.string().min(2, "Please select a country"),
  currency: z.string().min(3, "Currency must be 3 characters"),
  state: z.string().min(2, "State/Province must be at least 2 characters"),
  postalCode: z
    .string()
    .min(2, "Postal/Zip code must be at least 2 characters"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  govId: z.string().min(4, "Government ID must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dataAuthorization: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the terms to gain access"
    ),
});
type RegisterSchema = z.infer<typeof registerSchema>;

const HunzoRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<number>(0);
  const [isStepValid, setIsStepValid] = useState(false);
  const { toast } = useToast();
  const { register } = useAuth();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      currency: "",
      state: "",
      postalCode: "",
      dob: "",
      govId: "",
      dataAuthorization: false,
    },
  });
  const test = () => {
    console.log("HIt");
    console.log("HIt");
    console.log("HIt");
  };

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      await register(data);
      toast({ title: `Welcome` });
    } catch (error) {
      console.error("Registration error details:", error); // Enhanced error logging
      toast({
        title: "Registration failed",
        description:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formSteps: (keyof RegisterSchema)[][] = [
    ["firstName", "lastName", "email", "password"],
    ["address", "city", "country", "currency"],
    ["state", "postalCode", "dob", "govId", "dataAuthorization"],
  ];
  const totalSteps = formSteps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const isLastStep = step === totalSteps - 1;

  const validateStep = async () => {
    const currentStepFields = formSteps[step];
    const stepData = form.getValues();
    const stepSchema = z.object(
      Object.fromEntries(
        currentStepFields.map((field) => [
          field,
          registerSchema.shape[field as keyof typeof registerSchema.shape],
        ])
      )
    ) as z.ZodType<Partial<RegisterSchema>>;

    try {
      await stepSchema.parseAsync(stepData);
      setIsStepValid(true);
    } catch (error) {
      setIsStepValid(false);
    }
  };

  useEffect(() => {
    validateStep();
  }, [step, form.watch()]);

  const handleNext = async () => {
    const isValid = await form.trigger(formSteps[step]);
    if (isValid) {
      if (isLastStep) {
        const data: z.infer<typeof registerSchema> = form.getValues();
        await form.handleSubmit(onSubmit(data));
      } else {
        setStep((prevStep: number) => prevStep + 1);
      }
    } else {
      console.log("Form validation failed", form.formState.errors); // Add this
    }
  };

  return (
    <>
      <div className="space-y-4  w-[90%] sm:w-[70%] md:w-1/2 lg:w-[90%] xl:w-96  max-xl:">
        <header className="space-y-4 text-center h-10">
          {/* This is the Heading Section */}
          {/* Poppins */}
          <h2 className="text-3xl font-semibold -tracking-wide text-[#073B4C] font-poppins">
            Register for Hunzo
          </h2>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <HunzoProgressBar progress={progress} />
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  {step === 0 && (
                    <div className="space-y-4">
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="firstName"
                        placeholder={"FIRST NAME"}
                        type={"text"}
                        icon={<User className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="lastName"
                        placeholder={"LAST NAME"}
                        type={"text"}
                        icon={<User className="h-5 w-5" />}
                        isHidden={false}
                      />

                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="email"
                        placeholder={"EMAIL"}
                        type={"email"}
                        icon={<Mail className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="password"
                        placeholder={"PASSWORD"}
                        type={"password"}
                        icon={<User className="h-5 w-5" />}
                        isHidden={false}
                      />
                    </div>
                  )}
                  {step === 1 && (
                    <div className="space-y-4">
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="address"
                        placeholder={"STREET ADDRESS"}
                        type={"text"}
                        icon={<Home className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="city"
                        placeholder={"CITY"}
                        type={"text"}
                        icon={<Home className="h-5 w-5" />}
                        isHidden={false}
                      />

                      <HunzoSelect
                        control={form.control}
                        name="country"
                        placeholder="SELECT COUNTRY"
                        options={allCountries}
                        onValueChange={(value) => {
                          form.setValue("currency", currencies[value] || "");
                        }}
                        icon={<></>}
                      />
                      {form.watch("country") &&
                        ![
                          "United States",
                          "United Kingdom",
                          "Jamaica",
                        ].includes(form.watch("country")) && (
                          <p className="text-yellow-600">
                            Service is not yet available in your country.
                          </p>
                        )}
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="currency"
                        placeholder={"CURRENCY"}
                        type={"text"}
                        icon={<></>}
                        isHidden={true}
                      />
                    </div>
                  )}
                  {step === 2 && (
                    <div className="space-y-4">
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="state"
                        placeholder={"STATE"}
                        type={"text"}
                        icon={<Home className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="postalCode"
                        placeholder={"POSTAL/ZIP CODE"}
                        type={
                          ["United States", "United Kingdom"].includes(
                            form.watch("country")
                          )
                            ? "number"
                            : "text"
                        }
                        icon={<Signpost className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="dob"
                        placeholder={"DATE OF BIRTH (MM/DD/YYYY)"}
                        type={"date"}
                        icon={<CalendarFold className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <HunzoCustomRegisterInput
                        control={form.control}
                        name="govId"
                        placeholder={"SSN/GOV ID"}
                        type={"text"}
                        icon={<Landmark className="h-5 w-5" />}
                        isHidden={false}
                      />
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="dataAuthorization"
                          checked={form.watch("dataAuthorization")}
                          onCheckedChange={(checked) =>
                            form.setValue(
                              "dataAuthorization",
                              checked as boolean
                            )
                          }
                        />
                        <div className="mt-5">
                          <label
                            htmlFor="dataAuthorization"
                            className="text-sm font-medium font-poppins leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I authorize the collection and processing of my data
                            for KYC purposes and agree to the terms of service.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-between space-x-4">
                {/* <Button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  variant="outline"
                  className={cn("", step > 0 ? "bg-red-500" : "bg-black-1")}
                >
                  <ChevronLeft />
                  Back
                </Button>
                <Button
                  type={"button"}
                  onClick={handleNext}
                  disabled={isLoading || !isStepValid}
                  className={`ml-auto ${
                    isLastStep
                      ? "bg-hunzo-green hover:bg-green-600"
                      : "bg-hunzo-blue hover:bg-blue-600"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : isLastStep ? (
                    "Submit"
                  ) : (
                    <>
                      Next
                      <ChevronRight />
                    </>
                  )}
                </Button> */}
                <Button
                  size="lg"
                  disabled={step === 0}
                  onClick={() => setStep((prev) => prev - 1)}
                  className={cn(
                    `w-full font-semibold bg-hunzo-text-grey text-white  hover:text-hunzo-pitch-black hover:bg-hunzo-green/90 rounded-xl h-14 text-base font-poppins`
                  )}
                >
                  <ChevronLeft />
                  BACK
                </Button>
                <Button
                  className={`w-full bg-hunzo-blue text-white hover:text-hunzo-pitch-black hover:bg-hunzo-green/90 rounded-xl h-14 text-base font-poppins ${
                    isLastStep
                      ? "bg-hunzo-green hover:bg-green-600"
                      : "bg-hunzo-blue hover:bg-blue-600"
                  }}`}
                  size="lg"
                  disabled={isLoading || !isStepValid}
                  onClick={handleNext}
                  type={isLastStep ? "submit" : "button"} // Add this
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin text-white" />{" "}
                      &nbsp; Loading...
                    </>
                  ) : isLastStep ? (
                    <span className="text-white">SUMBIT</span>
                  ) : (
                    <>
                      NEXT
                      <ChevronRight />
                    </>
                  )}
                </Button>
              </div>
              {/* <Button
                    className="w-full bg-hunzo-blue text-white hover:text-hunzo-pitch-black hover:bg-hunzo-green/90 rounded-xl h-14 text-base font-poppins"
                    size="lg"
                    disabled={isLoading}
                    onClick={handleNext}
                    type="submit"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        Loading...
                      </>
                    ) : (
                      "SIGN IN"
                    )}
                  </Button> */}
            </div>
          </form>
        </Form>
      </div>
      <AuthFooter type="register" />
    </>
  );
};

export default HunzoRegisterForm;
