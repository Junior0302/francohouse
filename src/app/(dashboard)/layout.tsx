import { Sidebar } from "@/components/Sidebar";
import { MobileMenu } from "@/components/MobileMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 w-full md:pl-64 pb-20 md:pb-0">
        <div className="container max-w-4xl mx-auto p-4 md:p-8 pt-8">
          {children}
        </div>
      </main>
      <MobileMenu />
    </div>
  );
}
