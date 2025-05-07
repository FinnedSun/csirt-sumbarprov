import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminNavbar } from "../admin-navbar"
import { AdminSidebar } from "../admin-sidebar"





interface AdminLayoutProps {
  children: React.ReactNode
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <AdminNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          {/* sidebar */}
          <AdminSidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
