import { useState } from "react";
import { Outlet } from "react-router-dom";
import  Adminsidebar  from "./adminsidebar";
import { Adminheader } from "./adminheader";

export function AgentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      <Adminsidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 ml-0 md:ml-[0.22rem]">
        <Adminheader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-[0.88rem] md:p-[1.33rem] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
