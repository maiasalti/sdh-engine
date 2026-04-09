import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { MedicalDisclaimer } from "@/components/medical-disclaimer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 pl-64">
        <div className="mx-auto max-w-7xl p-6 lg:p-8">
          <MedicalDisclaimer variant="banner" className="mb-6" />
          {children}
        </div>
      </main>
    </div>
  );
}
