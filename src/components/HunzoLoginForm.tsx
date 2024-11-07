"use client";
import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/components/AuthContext";
// import { useAuth } from "./HunzoAuthProvider";
import AuthFooter from "./AuthFooter";
import HunzoCustomLoginInput from "@/components/Hunzo-custom-login-input";
import HunzoLoader from "./HunzoLoader";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const HunzoLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      // toast({ title: `Welcome ${user?.firstName}` });
    } catch (error) {
      // console.error("Login error:", error);
      toast({ title: "Login failed" });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="space-y-4  w-[90%] sm:w-[70%] md:w-1/2 lg:w-[90%] xl:w-96  max-xl:">
        <header className="space-y-4 text-center h-10">
          {/* This is the Heading Section */}
          {/* Poppins */}
          <h1 className="text-3xl font-semibold -tracking-wide text-[#073B4C] font-poppins">
            Log In To Hunzo
          </h1>
        </header>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <HunzoCustomLoginInput
                  control={form.control}
                  name="email"
                  placeholder={"EMAIL"}
                  type={"email"}
                  icon={<Mail className="h-5 w-5" />}
                  isHidden={false}
                />
              </div>
              <div className="space-y-2">
                <HunzoCustomLoginInput
                  control={form.control}
                  name="password"
                  placeholder={"PASSWORD"}
                  type={"password"}
                  icon={<LockKeyhole className="h-5 w-5" />}
                  isHidden={false}
                />
              </div>
              <div className="text-right">
                <Link
                  className="text-sm text-gray-500 hover:text-hunzo-green font-poppins"
                  href="/forgot-password"
                >
                  Forget Password?
                </Link>
              </div>
              <Button
                className="w-full bg-hunzo-blue text-white hover:text-hunzo-pitch-black hover:bg-hunzo-green/90 rounded-xl h-14 text-base font-poppins"
                size="lg"
                disabled={isLoading}
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
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <AuthFooter type="login" />
    </>
  );
};

export default HunzoLoginForm;
