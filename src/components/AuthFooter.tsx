import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const AuthFooter = ({ type }: { type: string }) => {
  return (
    <footer className="flex flex-col items-center gap-1">
      <div className="flex flex-row gap-2">
        <p>
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <div>
          <Link
            href={type === "login" ? "/register" : "/login"}
            className="form-link"
          >
            {type === "login" ? "Register" : "Login"}
          </Link>
        </div>
      </div>

      {type === "register" && (
        <>
          <p className="px-8 text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4 text-bankGradient"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4 text-bankGradient"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </>
      )}
    </footer>
  );
};

export default AuthFooter;
