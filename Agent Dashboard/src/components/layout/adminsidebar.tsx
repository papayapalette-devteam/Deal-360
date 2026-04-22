import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  LogOut,
  X,
  type LucideIcon,
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

interface MenuItem {
  title: string;
  icon: LucideIcon | string;
  type?: "image";
  path: string;
}

const menuItems: MenuItem[] = [
  { title: "Dashboard Overview", icon: LayoutDashboard, path: "/agent" },
  { title: "Public Agent Profile", icon: publicagent, type: "image", path: "/agent/agent-profile" },
  { title: "Property Manager", icon: propertymanager, type: "image", path: "/agent/categories" },
  { title: "Listings", icon: listings, type: "image", path: "/agent/listings" },
  { title: "Requirements", icon: requirment, type: "image", path: "/agent/requirments" },
  { title: "Listing Intent", icon: listingintent, type: "image", path: "/agent/banners" },
  { title: "Leads", icon: leads, type: "image", path: "/agent/leads" },
  { title: "Messages", icon: message, type: "image", path: "/agent/messages" },
  { title: "Subscription", icon: subscription, type: "image", path: "/agent/subscription" },
  { title: "Calendar", icon: calender, type: "image", path: "/agent/calender" },
  { title: "Notifications", icon: notification, type: "image", path: "/agent/notification" },
  { title: "Settings", icon: settings, type: "image", path: "/agent/settings" },
  { title: "Logout", icon: logout, type: "image", path: "/agent/logout" },
];

interface SidebarContentProps {
  onItemClick?: () => void;
}

function SidebarContent({ onItemClick }: SidebarContentProps) {
  const location = useLocation();

  return (
    <>
      <div className="py-[1.33rem] flex justify-center items-center">
        <img
          src="/Frame 2147231752.png"
          alt="Admin"
          className="w-[4.44rem] h-[4.44rem] object-contain"
        />
      </div>

      <ScrollArea className="flex-1 py-2">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/agent" && location.pathname.startsWith(item.path));

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onItemClick}
                className={cn(
                  "flex font-sans items-center gap-[0.66rem] px-[0.66rem] py-[0.55rem] lg:py-[0.55rem] xl:py-[0.75rem] 2xl:py-[0.85rem] 4xl:py-[1rem] sm:text-[0.88rem] 2xl:text-[1rem] rounded-[0.44rem] text-[1rem] font-medium transition-colors no-underline",
                  isActive
                    ? "bg-[hsl(var(--brand-secondary))] text-white font-[700]"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.type === "image" ? (
                  <img src={Icon as string} alt={item.title} className="h-[1.11rem] w-[1.11rem] object-contain" />
                ) : (
                  typeof Icon !== "string" && <Icon className="h-[1.11rem] w-[1.11rem]" />
                )}
                <span
                  className={cn(
                    isActive ? "font-bold" : "font-medium",
                    item.title === "Logout" && "text-red-500"
                  )}
                >
                  {item.title}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="rounded-[0.88rem] p-[0.88rem] space-y-[0.88rem] bg-[#DBFFF3] m-[0.44rem]">
        <div className="flex items-center gap-[0.88rem]">
          <div className="relative w-[3.55rem] h-[3.55rem]">
            <svg className="w-[3.55rem] h-[3.55rem] rotate-[-90deg]" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                strokeWidth="6"
                className="stroke-muted"
                fill="transparent"
              />
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
            <div className="absolute inset-0 flex items-center justify-center text-[0.77rem] font-bold">
              80%
            </div>
          </div>
        </div>

        <div>
          <p className="text-[0.77rem] font-semibold">Used Credits</p>
          <p className="text-[0.66rem] text-muted-foreground">
            You have used 80% of credits. Need more?
          </p>
        </div>

        <div className="flex flex-row gap-[0.22rem]">
          <button className="w-full text-[0.77rem] font-semibold py-[0.44rem] rounded-[0.44rem] bg-white">
            Buy More Credits
          </button>
          <button className="w-full text-[0.77rem] font-semibold py-[0.44rem] rounded-[0.44rem] border border-border bg-white text-[hsl(var(--brand-secondary))]">
            Upgrade Plan
          </button>
        </div>
      </div>

      <div className="mt-[0.44rem] p-[0.44rem] border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.66rem]">
            <div className="w-[2.22rem] h-[2.22rem] rounded-full bg-[hsl(var(--brand-secondary))] flex items-center justify-center text-white font-semibold">
              <User className="h-[1.11rem] w-[1.11rem]" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] mb-[0.88rem]">
              <p className="m-0 text-[0.88rem] font-semibold text-[var(--Colors-for-white-theme-Secondary)]">
                Natasha Howe
              </p>
              <p className="m-0 text-[0.66rem] text-muted-foreground">
                natasha@gmail.com
              </p>
            </div>
          </div>
          <button className="p-[0.44rem] rounded-[0.44rem] hover:bg-accent transition-colors">
            <LogOut
              className="h-[1.11rem] w-[1.11rem]"
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

interface AdminsidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Adminsidebar({ open, onOpenChange }: AdminsidebarProps) {
  return (
    <>
      <aside className="hidden md:flex md:w-[14rem] lg:w-[16rem] xl:w-[16rem] 2xl:w-[21.16rem] min-h-screen bg-card flex-col">
        <SidebarContent />
      </aside>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-[16rem] md:w-[18rem] lg:w-[20rem] 2xl:w-[21.16rem] p-0 flex flex-col">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[0.44rem] top-[0.44rem] z-10"
            onClick={() => onOpenChange && onOpenChange(false)}
          >
            <X style={{ width: "0.88rem", height: "0.88rem" }} />
          </Button>
          <SidebarContent onItemClick={() => onOpenChange && onOpenChange(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
