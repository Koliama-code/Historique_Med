import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DashboardStats from "@/components/Dashboard/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <DashboardStats />
        {children}
      </main>
    </SidebarProvider>
  );
}
