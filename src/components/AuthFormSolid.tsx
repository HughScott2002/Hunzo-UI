"use client";

import Link from "next/link";
import Image from "next/image";
import {
  appName,
  loginHeaderSubtext,
  registerHeaderSubtext,
} from "@/constants";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authformSchema } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

import AuthFooter from "./AuthFooter";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();

  const formSchema = authformSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      type === "login"
        ? { email: "", password: "" }
        : {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            dob: "",
            ssn: "",
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
    ["firstName", "lastName"],
    ["email", "password"],
    ["address", "city"],
    ["state", "postalCode"],
    ["dob", "ssn"],
  ];

  const totalSteps = formSteps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const isLastStep = step === totalSteps - 1;

  const handleNext = () => {
    if (isLastStep) {
      form.handleSubmit(onSubmit)();
    } else {
      setStep((prevStep) => prevStep + 1);
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
                          placeholder="Place"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="city"
                          label="City"
                          placeholder="e.g New York"
                          type="text"
                        />
                      </>
                    )}
                    {step === 3 && (
                      <div className="grid grid-cols-2 sm:grid-col-2 gap-2">
                        <CustomInput
                          control={form.control}
                          name="state"
                          label="State"
                          placeholder="e.g NY"
                          type="text"
                        />
                        <CustomInput
                          control={form.control}
                          name="postalCode"
                          label="Postal Code"
                          placeholder="e.g 23003"
                          type="text"
                        />
                      </div>
                    )}
                    {step === 4 && (
                      <div className="grid grid-cols-2 sm:grid-col-2 gap-2">
                        <CustomInput
                          control={form.control}
                          name="dob"
                          label="Date of Birth"
                          placeholder="MM/DD/YYYY"
                          type="date"
                        />
                        <CustomInput
                          control={form.control}
                          name="ssn"
                          label="SSN"
                          placeholder="e.g 123-45-6789"
                          type="text"
                        />
                      </div>
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
                    disabled={isLoading}
                    className={`ml-auto ${
                      isLastStep
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
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
                      Loading...
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
