import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils"; // adjust path if needed
import { Button } from "../../UI/button";
import { ScrollArea } from "../../UI/scroll-area";
import { Sheet, SheetContent } from "../../UI/sheet";
import buyerrequirment from "../../assets/images/buyerrequirment.png"
import publicagent from "../../assets/images/public agent.png"
import listingmoderation from "../../assets/images/listingmoderation.png"
import listings from "../../assets/images/listings.png"
import subscriptionpayment from "../../assets/images/subscription1.png"
import creditcard from "../../assets/images/creditmanagement.png"
import activitylog from "../../assets/images/activitylog.png"
import compliance from "../../assets/images/compliance.png"
import settings1 from "../../assets/images/settings1.png"
import settings from "../../assets/images/settings.png"
import logout from "../../assets/images/log-out.png"

const menuItems = [
  { title: "Dashboard Overview", icon: LayoutDashboard, path: "/admin" },
  { title: "User Management", icon: publicagent, type: "image", path: "/admin/user-management" },
  { title: "Agent Management", icon: publicagent, type: "image", path: "/admin/agent-management" },
  { title: "Brokerage Management", icon: publicagent, type: "image", path: "/admin/brokerage-management" },
  { title: "Listings Moderation ", icon: listingmoderation, type: "image", path: "/admin/listing-moderation" },
  { title: "Advertisements", icon: listings, type: "image", path: "/admin/advertisement" },
  { title: "Buyer Requirements", icon: buyerrequirment, type: "image", path: "/admin/buyer-requirment" },
  { title: "Subscription & Payments", icon: subscriptionpayment, type: "image", path: "/admin/subscription-payment" },
  { title: "Credits Management", icon: creditcard, type: "image", path: "/admin/credit-management" },
  { title: "Platform Settings", icon: settings, type: "image", path: "/admin/plateform-settings" },
  { title: "Activity Logs", icon: activitylog, type: "image", path: "/admin/activity-log" },
  { title: "Compliance", icon: compliance, type: "image", path: "/admin/compliance" },
  { title: "Settings", icon: settings1, type: "image", path: "/admin/settings" },
  { title: "Logout", icon: logout, type: "image", path: "/admin/logout" },
];

function SidebarContent({ onItemClick }) {
  const location = useLocation();

  return (
    <>
      {/* Sidebar Header */}
      <div className="py-6 flex justify-center items-center">
        <img
          src="/Frame 2147231752.png"
          alt="Admin"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Sidebar Menu */}
      <ScrollArea className="flex-1 py-2">
        <nav className="space-y-1 px-2 ">
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/admin" && location.pathname.startsWith(item.path));

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onItemClick}
                className={cn(
                  "flex font-sans items-center gap-3 px-3 xl:py-[20px] lg:py-3 sm:text-[16px] 2xl:text-lg rounded-lg text-lg font-medium transition-colors no-underline",
                  isActive
                    ? "bg-[hsl(var(--brand-secondary))] text-white font-[700]"
                    : "text-[#565656] hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {/* <item.icon className="h-5 w-5" /> */}
                {item.type === "image" ? (
                  <img src={item.icon} alt={item.title} className="h-5 w-5 object-contain" />
                ) : (
                  <item.icon className="h-5 w-5" />
                )}
                <span
                  className={`
    ${isActive ? "font-bold" : "font-normal"}
    ${item.title === "Logout" ? "text-red-500" : ""}
  `}
                >
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </ScrollArea>





    </>

  );
}

export default function Adminsidebar({ open, onOpenChange }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 lg:w-72 xl:w-80 2xl:w-[381px] min-h-screen bg-card flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-64 p-0 flex flex-col">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10"
            onClick={() => onOpenChange && onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <SidebarContent onItemClick={() => onOpenChange && onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
