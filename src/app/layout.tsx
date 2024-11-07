import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { appName, appDescription } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
// TODO: Download and import IBM Plex Serif font
// TODO: Custom 404 page

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: Add Polyglot support
    <html
      lang="en"
      className={`${inter.className} ${poppins.className} ${manrope.className}`}
    >
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
