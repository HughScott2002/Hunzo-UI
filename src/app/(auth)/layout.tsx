import HunzoAuthLeftSide from "@/components/HunzoAuthLeftSide";
import HunzoAuthRightSide from "@/components/HunzoAuthRightSide";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen lg:grid-cols-2">
      <HunzoAuthLeftSide>{children}</HunzoAuthLeftSide>
      <HunzoAuthRightSide />
    </main>
  );
}
