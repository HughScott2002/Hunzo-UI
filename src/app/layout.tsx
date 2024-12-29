import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { appName, appDescription } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthContext";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
// import { HunzoAuthProvider } from "@/components/HunzoAuthProvider";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
// const poppins = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Poppins/Poppins-Thin.ttf",
//       weight: "100",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-poppins",
//   display: "swap",
// });

// const inter = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Inter/static/Inter_18pt-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Inter/static/Inter_18pt-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Inter/static/Inter_18pt-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-inter",
//   display: "swap",
// });

// const manrope = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Manrope/static/Manrope/Manrope-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Manrope/static/Manrope-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Manrope/static/Manrope-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Manrope/static/Manrope-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Manrope/static/Manrope-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Manrope/static/Manrope-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//   ],
//   variable: "--font-manrope",
//   display: "swap",
// });

// TODO: FIX THE AUTH
// TODO: 1) It doesn't keep the state on a reload
// TODO: 2) It sends too much data to the backend
// TODO: 3) It doesn't provide the global state to get the user and its attributes
// TODO: 4) I dont think it sends the token on each request
// TODO: 4) Token Updates should be silent
// TODO: 5) If your token is valid auto sign you in, quickly. If your token is valid and you try to login it should check for a valid token first then auto

// TODO: ADD POLYGLOT SUPPORT
// TODO: ADD DARK MODE AND MAKE IT LOOK GOOD
// TODO: FIX THE GODDAMN FONTS
// TODO: AFTER YOU LOGIN YOU SHOULD GO BACK TO WHERE YOU WHERE BEFORE

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
  icons: {
    icon: "/icons/Hunzo-Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
