import { Bell, User, Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../UI/button";
import { Avatar, AvatarFallback } from "../../UI/avatar";

export function Adminheader({ onMenuClick }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="min-h-[50px]  bg-card px-4 md:px-6 flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="flex items-start gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mt-1"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div>
<h1 className="font-manrope text-[24px] font-[700] leading-[150%] text-[var(--Secondary-Color,#181818)] mt-4">
  Welcome Back, Natasha
</h1>
          <p className="text-sm text-muted-foreground">
            Here’s what's happening with your real estate today
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">

        {/* Dark / Light Toggle */}


<div className="inline-flex p-1 rounded-[16px] bg-[linear-gradient(90deg,#E8E8E8_0%,#E5E5E5_100%)]">

  {/* Light Button */}
  <button
    onClick={() => setTheme("light")}
    className={`flex items-center gap-2 px-4 py-2 rounded-[12px] text-sm font-semibold transition-all duration-200
      ${
        theme === "light"
          ? "bg-[linear-gradient(180deg,#BAFFE8_0%,#B7FFE7_100%)] shadow-sm"
          : "bg-transparent"
      }
    `}
  >
    <Sun className="h-4 w-4" />
    Light
  </button>

  {/* Dark Button */}
  <button
    onClick={() => setTheme("dark")}
    className={`flex items-center gap-2 px-4 py-2 rounded-[12px] text-sm font-semibold transition-all duration-200
      ${
        theme === "dark"
          ? "bg-[linear-gradient(180deg,#BAFFE8_0%,#B7FFE7_100%)] shadow-sm"
          : "bg-transparent"
      }
    `}
  >
    <Moon className="h-4 w-4" />
    Dark
  </button>

</div>


      </div>
    </header>
  );
}