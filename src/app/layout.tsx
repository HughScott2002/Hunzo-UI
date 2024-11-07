import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { appName, appDescription } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthContext";
// import { HunzoAuthProvider } from "@/components/HunzoAuthProvider";

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
  // TODO: FIX THE AUTH
  // TODO: 1) It doesn't keep the state on a reload
  // TODO: 2) It sends too much data to the backend
  // TODO: 3) It doesn't provide the global state to get the user and its attributes
  // TODO: 4) I dont think it sends the token on each request
  // TODO: 4) Token Updates should be silent

  // TODO: ADD POLYGLOT SUPPORT
  //TODO: FIX THE GODDAMN FONTS
  return (
    <html
      lang="en"
      className={`${inter.className} ${poppins.className} ${manrope.className}`}
    >
      <body>
        <AuthProvider>{children}</AuthProvider>
        {/* <HunzoAuthProvider>{children}</HunzoAuthProvider> */}
        <Toaster />
      </body>
    </html>
  );
}
