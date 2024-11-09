import HunzoAuthRightSide from "@/components/HunzoAuthRightSide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen lg:grid-cols-2">
      {children}
      <HunzoAuthRightSide />
    </main>
  );
}
