"use client";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";
import { useAuth } from "./AuthContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HunzoAccountAlerts() {
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useAuth();

  const status: string = user?.kycStatus || "";
  // const status: string = "approved";

  if (!isVisible && status !== "rejected") return null;

  const alertContent: any = {
    pending: {
      title: "Account Pending",
      description:
        "Your account is currently in the activation process. We're working to verify your information and ensure everything is set up correctly.",
      className: "border-yellow-500 bg-yellow-50 text-yellow-900",
      icon: (
        <svg
          className="animate-spin h-6 w-6 text-yellow-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ),
    },
    approved: {
      title: "Account Activated",
      description:
        "Congratulations! Your account has been successfully activated. You now have full access to all our features. Enjoy using our platform!",
      className: "border-green-500 bg-green-50 text-green-900",
      icon: (
        <div className="h-full w-fit flex justify-center items-center ">
          <svg
            className="animate-pulse h-8 w-8 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
    },
    rejected: {
      title: "Account Not Activated",
      description:
        "We're sorry, but your account could not be activated at this time. If you believe this is a mistake, please contact our support team for assistance.",
      className: "border-red-500 bg-red-50 text-red-900",
      icon: (
        <svg
          className="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const { title, description, className, icon } = alertContent[status];

  return (
    <Alert
      variant="default"
      className={`fixed top-4 right-4 w-80 sm:w-[70%] lg:w-[30%] md:w-[50%] z-50 p-4 ${className}`}
    >
      <div className="flex items-start space-x-4 ">
        <div className="flex-shrink-0 mt-0.5 h-full">{icon}</div>
        <div className="flex-grow">
          <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
          <AlertDescription className="mt-2">
            {description}
            {""}
            {status === "rejected" && (
              <Link
                href="/mailto:support@mail.com"
                className="underline font-medium hover:text-red-700 transition-colors"
              >
                Contact support
              </Link>
            )}
          </AlertDescription>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className={cn(
            "flex-shrink-0  transition-colors",
            status === "approved"
              ? "text-green-700 hover:text-green-900"
              : "text-yellow-700 hover:text-yellow-900"
          )}
          aria-label="Dismiss"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </Alert>
  );
}
