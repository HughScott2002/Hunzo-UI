import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BellDot, ChevronDown, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/app-siderbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="min-h-screen max-h-screen overflow-hidden">
      <AppSidebar />
      <main className=" h-screen w-full flex flex-col">
        <SidebarInset className="flex flex-col h-full">
          <header className="flex h-28 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-20 sticky top-0 z-10 px-10 bg-black-1">
            <div className="flex flex-1 items-center justify-between w-full h-full">
              <div className="flex flex-col items-start justify-center gap-2 ">
                <h1 className="font-poppins font-semibold text-2xl">
                  Page Name
                </h1>
                <div className="flex items-center gap-2">
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Hunzo</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Home</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4 ">
                <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                  <SidebarTrigger className=" w-10 h-10 p-2" />
                </div>
                <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                  <Search className="w-10 h-10 p-2" />
                </div>
                <div className="w-fit h-fit bg-[#FAFAFA] rounded-full">
                  <BellDot className="w-10 h-10 p-2 " />
                </div>
                <div className="flex gap-3 p-2 bg-[#FAFAFA] rounded-full justify-center items-center">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-poppins text-base font-semibold text-[#1A202C] truncate max-w-32">
                    Firstname L.
                  </span>
                  <ChevronDown className="w-4 h-4 mr-1" />
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-10 py-2">{children}</div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
}
