import { useState } from "react";
import { Outlet } from "react-router-dom";
import  Brokersidebar  from "./brokersidebar";
import { Brokerheader } from "./brokerheader";

export function BrokerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Brokersidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 ml-1">
        <Brokerheader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-2 md:p-2 overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
