"use client";

import Link from "next/link";
import Image from "next/image";
import {
  appName,
  loginHeaderSubtext,
  registerHeaderSubtext,
} from "@/constants";
import { useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

import AuthFooter from "./AuthFooter";

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

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();

  const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const registerSchema = z.object({
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

  const formSchema = type === "login" ? loginSchema : registerSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      type === "login"
        ? { email: "", password: "" }
        : {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            currency: "",
            stateProvince: "",
            postalCode: "",
            dateOfBirth: "",
            govId: "",
            authorization: false,
          },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const respURL: string = `http://localhost/api/users/auth/${type}`;
      const response: any = await fetch(respURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const result = await response.json();
      const oldtoken = localStorage.getItem("token");
      if (oldtoken) {
        localStorage.removeItem("token");
      }
      localStorage.setItem("token", result.token);
      router.push("/");
      toast({ title: `Welcome` });
    } catch (error) {
      console.error("Authentication error:", error);
      toast({ title: "Login failed" });
    } finally {
      setIsLoading(false);
    }
  };

  const formSteps = [
    ["firstName", "lastName", "phone"],
    ["email", "password"],
    ["address", "city", "country", "currency"],
    ["stateProvince", "postalCode", "dateOfBirth"],
    ["govId", "authorization"],
  ];

  const totalSteps = formSteps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const isLastStep = step === totalSteps - 1;

  const validateStep = async () => {
    if (type === "login") return;
    const currentStepFields = formSteps[step];
    const stepData = form.getValues();
    const stepSchema = z.object(
      Object.fromEntries(
        currentStepFields.map((field) => [field, registerSchema.shape[field]])
      )
    );
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
    if (type === "login") {
      form.handleSubmit(onSubmit)();
      return;
    }
    const isValid = await form.trigger(formSteps[step]);
    if (isValid) {
      if (isLastStep) {
        form.handleSubmit(onSubmit)();
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    }
  };

  return (
    <div className="auth-form w-fill px-4 md:px-0">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            {appName}
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900 ">
            {user ? "Link Account" : type === "login" ? "Login" : "Register"}
            <p className="text-16 font-normal text-gray-600 lg:mt-1">
              {type === "login" ? registerHeaderSubtext : loginHeaderSubtext}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {type === "register" && (
              <>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
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
                  >
                    {step === 0 && (
                      <div className="grid grid-cols-2 sm:grid-col-2 gap-2">
                        <CustomInput
                          control={form.control}
                          name="firstName"
                          label="First Name"
                          placeholder="John"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="lastName"
                          label="Last Name"
                          placeholder="Doe"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="phone"
                          label="Phone"
                          placeholder="+1234567890"
                          type="tel"
                        />
                      </div>
                    )}
                    {step === 1 && (
                      <>
                        <CustomInput
                          control={form.control}
                          name="email"
                          label="Email"
                          placeholder="johndoe@mail.com"
                          type="email"
                        />
                        <CustomInput
                          control={form.control}
                          name="password"
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                        />
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <CustomInput
                          control={form.control}
                          name="address"
                          label="Address"
                          placeholder="123 Main St"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="city"
                          label="City"
                          placeholder="New York"
                          type="text"
                        />
                        <Select
                          onValueChange={(value) => {
                            form.setValue("country", value);
                            form.setValue("currency", currencies[value] || "");
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            {allCountries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                        <CustomInput
                          control={form.control}
                          name="currency"
                          label="Currency"
                          placeholder="USD"
                          type="text"
                          disabled
                        />
                      </>
                    )}
                    {step === 3 && (
                      <div className="grid grid-cols-2 sm:grid-col-2 gap-2">
                        <CustomInput
                          control={form.control}
                          name="stateProvince"
                          label="State/Province"
                          placeholder="NY"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="postalCode"
                          label="Postal/Zip Code"
                          placeholder="12345"
                          type={
                            ["United States", "United Kingdom"].includes(
                              form.watch("country")
                            )
                              ? "number"
                              : "text"
                          }
                        />
                        <CustomInput
                          control={form.control}
                          name="dateOfBirth"
                          label="Date of Birth"
                          placeholder="MM/DD/YYYY"
                          type="date"
                        />
                      </div>
                    )}
                    {step === 4 && (
                      <>
                        <CustomInput
                          control={form.control}
                          name="govId"
                          label="SSN/Gov ID Number"
                          placeholder="123-45-6789"
                          type="text"
                        />
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="authorization"
                            checked={form.watch("authorization")}
                            onCheckedChange={(checked) =>
                              form.setValue("authorization", checked as boolean)
                            }
                            className="size-4"
                          />
                          <label
                            htmlFor="authorization"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I authorize the collection and processing of my data
                            for KYC purposes and agree to the terms of service.
                          </label>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-between mt-4">
                  {step > 0 && (
                    <Button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      variant="outline"
                    >
                      <ChevronLeft />
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
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        Loading AUTH FORM TSX 11111111111...
                      </>
                    ) : isLastStep ? (
                      "Submit"
                    ) : (
                      <>
                        Next
                        <ChevronRight />
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}

            {type === "login" && (
              <>
                <CustomInput
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="johndoe@mail.com"
                  type="email"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="form-btn w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading Loading AUTH FORM TSX 22222222......
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </>
            )}
          </form>
        </Form>
      )}
      <AuthFooter type={type} />
    </div>
  );
};

export default AuthForm;
