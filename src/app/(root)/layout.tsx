"use client";
import { CommandPalette } from "@/components/CommandPalette";
import { usePathname } from "next/navigation";
import ProtectedRouteWrapper from "@/components/ProtectedRouteWrapper";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-siderbar";
import HunzoHeaderControls from "@/components/HunzoHeaderControls";

//TODO: Fix the Seach bar up top
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  var name = pathname.substring(1);

  return (
    <ProtectedRouteWrapper>
      <SidebarProvider className="min-h-screen max-h-screen overflow-hidden">
        <AppSidebar />
        <main className=" h-screen w-full flex flex-col">
          <SidebarInset className="flex flex-col h-full">
            <header className="flex h-24 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-20 sticky top-0 z-10 px-10">
              <div className="flex flex-col sm:flex-row flex-1 items-center justify-between w-full h-full  p-4 gap-4">
                <div className="flex flex-row items-center justify-center gap-2 ">
                  <h1 className="font-poppins font-bold text-xl capitalize cursor-default">
                    {name === ""
                      ? "Dashboard"
                      : name === "my-wallets"
                      ? "My Wallets"
                      : name === "fx"
                      ? "FX"
                      : name === "ai"
                      ? "AI"
                      : name}
                  </h1>
                </div>
                <HunzoHeaderControls />
              </div>
            </header>
            <div className="flex-1 overflow-y-auto px-10 py-2 h-full w-full">
              {children}
            </div>
          </SidebarInset>
        </main>
      </SidebarProvider>
      <CommandPalette />
    </ProtectedRouteWrapper>
  );
}
