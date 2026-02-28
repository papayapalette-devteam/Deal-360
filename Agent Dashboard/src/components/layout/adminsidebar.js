import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Building2,
  List,
  ClipboardList,
  FileText,
  MessageSquare,
  Bell,
  CreditCard,
  Calendar,
  Settings,
  LogOut,
  Home,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils"; // adjust path if needed
import { Button } from "../../UI/button";
import { ScrollArea } from "../../UI/scroll-area";
import { Sheet, SheetContent } from "../../UI/sheet";
import requirment from "../../assets/images/requirment.png"
import publicagent from "../../assets/images/public agent.png"
import propertymanager from "../../assets/images/property manager.png"
import listings from "../../assets/images/listings.png"
import listingintent from "../../assets/images/listing intent.png"
import leads from "../../assets/images/leads.png"
import message from "../../assets/images/message.png"
import subscription from "../../assets/images/subscription.png"
import calender from "../../assets/images/calender.png"
import notification from "../../assets/images/notification.png"
import settings from "../../assets/images/settings.png"
import logout from "../../assets/images/log-out.png"

const menuItems = [
  { title: "Dashboard Overview", icon: LayoutDashboard, path: "/admin" },
  { title: "Public Agent Profile", icon: publicagent,type: "image", path: "/admin/products" },
  { title: "Property Manager", icon: propertymanager,type: "image", path: "/admin/categories" },
  { title: "Listings", icon: listings,type: "image", path: "/admin/orders" },
  { title: "Requirements", icon: requirment, type: "image", path: "/admin/users" },
  { title: "Listing Intent", icon: listingintent,type: "image", path: "/admin/banners" },
  { title: "Leads", icon: leads,type: "image", path: "/admin/offers" },
  { title: "Messages", icon: message,type: "image", path: "/admin/popular" },
  { title: "Subscription", icon: subscription,type: "image", path: "/admin/essentials" },
  { title: "Calendar", icon: calender,type: "image", path: "/admin/delivery-settings" },
  { title: "Notifications", icon: notification,type: "image", path: "/admin/delivery-staff" },
  { title: "Settings", icon: settings,type: "image", path: "/admin/settings" },
  { title: "Logout", icon: logout,type: "image", path: "/admin/logout" },
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
    <nav className="space-y-1 px-2">
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
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline",
              isActive
                ? "bg-[hsl(var(--brand-secondary))] text-white font-[700]"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
    ${isActive ? "font-bold" : "font-medium"}
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

  {/* Credit Button */}
  <div className="rounded-2xl  p-4  space-y-4 bg-[#DBFFF3] m-2">

    {/* Circle Progress */}
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 rotate-[-90deg]">
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            strokeWidth="6"
            className="stroke-muted"
            fill="transparent"
          />
          {/* Progress Circle (80%) */}
          <circle
            cx="32"
            cy="32"
            r="28"
            strokeWidth="6"
            fill="transparent"
            stroke="hsl(var(--brand-secondary))"
            strokeDasharray={2 * Math.PI * 28}
            strokeDashoffset={(2 * Math.PI * 28) * (1 - 0.8)}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          80%
        </div>
      </div>
         </div>

      <div>
        <p className="text-sm font-semibold">Used Credits</p>
        <p className="text-xs text-muted-foreground">
          You have used 80% of credits. Need more?
        </p>
      </div>
 

    {/* Action Buttons */}
    <div className="flex flex-row gap-1">
      <button className="w-full text-sm font-semibold py-2 rounded-lg bg-white ">
        Buy More Credits
      </button>
      <button className="w-full text-sm font-semibold py-2 rounded-lg border border-border bg-white text-[hsl(var(--brand-secondary))]">
        Upgrade Plan
      </button>
    </div>

  </div>

  <div className="mt-2 p-2 border-t border-border">
  <div className="flex items-center justify-between">

    {/* Left Side (Avatar + Name + Email) */}
    <div className="flex items-center gap-3">

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-[hsl(var(--brand-secondary))] flex items-center justify-center text-white font-semibold">
        <User className="h-5 w-5" />
      </div>

      {/* Name + Email */}
<div className="flex flex-col items-start leading-[1.1] mb-4">
  <p className="m-0 text-base font-semibold text-[var(--Colors-for-white-theme-Secondary)]">
    Natasha Howe
  </p>
  <p className="m-0 text-xs text-muted-foreground">
    natasha@gmail.com
  </p>
</div>
    </div>

    {/* Logout Icon */}
    <button className="p-2 rounded-lg hover:bg-accent transition-colors">
      <LogOut
  className="h-5 w-5"
  style={{
    stroke: "var(--Colors-for-white-theme-Gray-Text)",
    strokeWidth: 2,
  }}
/>
    </button>

  </div>
</div>

</>

  );
}

export default function Adminsidebar({ open, onOpenChange }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 lg:w-72 xl:w-80 2xl:w-96 min-h-screen bg-card flex-col">
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
