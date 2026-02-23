import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  Users,
  ShoppingCart,
  Image,
  Tag,
  Settings,
  Truck,
  Star,
  Sparkles,
  Home,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils"; // adjust path if needed
import { Button } from "../../UI/button";
import { ScrollArea } from "../../UI/scroll-area";
import { Sheet, SheetContent } from "../../UI/sheet";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { title: "Products", icon: Package, path: "/admin/products" },
  { title: "Categories", icon: FolderTree, path: "/admin/categories" },
  { title: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { title: "Users", icon: Users, path: "/admin/users" },
  { title: "Banners", icon: Image, path: "/admin/banners" },
  { title: "Offers & Deals", icon: Tag, path: "/admin/offers" },
  { title: "Popular Products", icon: Star, path: "/admin/popular" },
  { title: "Daily Essentials", icon: Sparkles, path: "/admin/essentials" },
  { title: "Delivery Settings", icon: Truck, path: "/admin/delivery-settings" },
  { title: "Delivery Staff", icon: Users, path: "/admin/delivery-staff" },
  { title: "Settings", icon: Settings, path: "/admin/settings" },
];

function SidebarContent({ onItemClick }) {
  const location = useLocation();

  return (
<>
  {/* Sidebar Header */}
  <div className="pt-3 px-3 border-b border-border flex items-center gap-2">
    <img
      src="/favicon.png"
      alt="Admin"
      className="w-10 h-10 rounded-lg object-contain"
    />
    <div>
      <h2 className="font-semibold text-foreground text-base">Admin Panel</h2>
      <p className="text-xs text-muted-foreground">Manage your store</p>
    </div>
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
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  </ScrollArea>

  {/* Back to Store Button */}
  <div className="p-4 border-t border-border">
    <Button
      variant="secondary"
      className="w-full justify-center text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
      asChild
    >
      <NavLink to="/" onClick={onItemClick} className="flex items-center gap-2">
        <Home className="h-4 w-4" />
        <span>Back to Store</span>
      </NavLink>
    </Button>
  </div>
</>

  );
}

export default function Adminsidebar({ open, onOpenChange }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen bg-card border-r border-border flex-col">
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
