import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/shell/TopBar";

interface LayoutProps {
  children: React.ReactNode;
  hideRightSidebar?: boolean;
  smallSidebar?: boolean;
  backUrl?: string;
}

export function Layout({ children, hideRightSidebar, smallSidebar, backUrl }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}