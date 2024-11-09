import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { appName, appDescription } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthContext";
import localFont from "next/font/local";
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

// TODO: Custom 404 page

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
  // TODO: FIX THE AUTH
  // TODO: 1) It doesn't keep the state on a reload
  // TODO: 2) It sends too much data to the backend
  // TODO: 3) It doesn't provide the global state to get the user and its attributes
  // TODO: 4) I dont think it sends the token on each request
  // TODO: 4) Token Updates should be silent
  // TODO: 5) If your token is valid auto sign you in, quickly. If your token is valid and you try to login it should check for a valid token first then auto

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
// function localFont(arg0: {
//   src: { path: string; weight: string; style: string }[];
//   variable: string;
//   display: string;
// }) {
//   throw new Error("Function not implemented.");
// }
