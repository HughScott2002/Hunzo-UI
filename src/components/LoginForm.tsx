"use client";

import Link from "next/link";
import Image from "next/image";
import { appName, loginHeaderSubtext } from "@/constants";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
// import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthContext";

import AuthFooter from "./AuthFooter";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      await login(data.email, data.password);
      toast({
        title: `Welcome Back`,
        description: "You have been sucessfully been logged in",
        // duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please make sure all your information is correct. 😊",
      });
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
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
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Login
            <p className="text-16 font-normal text-gray-600 lg:mt-1">
              {loginHeaderSubtext}
            </p>
          </h1>
        </div>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="johndoe@mail.com"
            type="email"
            isHidden={false}
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            isHidden={false}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="form-btn w-full"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <Loader2 size={20} className="animate-spin" />
                <Loader2 size={20} className="animate-spin" />
                &nbsp; Loading LOGIN FORM...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <AuthFooter type="login" />
    </div>
  );
};

export default LoginForm;
