import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { appName, appDescription } from "@/constants";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// TODO: Download and import IBM Plex Serif font
// TODO: Custom 404 page
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

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
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSerif}`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
