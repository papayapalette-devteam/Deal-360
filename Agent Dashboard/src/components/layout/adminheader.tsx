import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../../UI/button";

interface AdminheaderProps {
  onMenuClick: () => void;
}

export function Adminheader({ onMenuClick }: AdminheaderProps) {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="min-h-[2.77rem] font-sans bg-card px-[0.88rem] md:px-[1.33rem] flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="flex items-start gap-[0.66rem]">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mt-[0.22rem]"
          onClick={onMenuClick}
        >
          <Menu className="h-[1.11rem] w-[1.11rem]" />
        </Button>

        <div>
          <h1 className="font-manrope text-[1.33rem] font-bold leading-[150%] text-[var(--Secondary-Color,#181818)] mt-[0.88rem]">
            Welcome Back, Natasha
          </h1>
          <p className="text-[0.77rem] text-muted-foreground">
            Here’s what's happening with your real estate today
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-[0.66rem]">

        {/* Dark / Light Toggle */}
        <div className="inline-flex p-[0.22rem] rounded-[0.88rem] bg-[linear-gradient(90deg,#E8E8E8_0%,#E5E5E5_100%)] dark:bg-[#1a1a1a]">
          {/* Light Button */}
          <button
            onClick={() => changeTheme("light")}
            className={`flex items-center gap-[0.44rem] px-[0.88rem] py-[0.44rem] rounded-[0.66rem] text-[0.77rem] font-semibold transition-all duration-200
              ${
                theme === "light"
                  ? "bg-[linear-gradient(180deg,#BAFFE8_0%,#B7FFE7_100%)] text-black shadow-sm"
                  : "bg-transparent text-gray-500"
              }
            `}
          >
            <Sun className="h-[0.88rem] w-[0.88rem]" />
            Light
          </button>

          {/* Dark Button */}
          <button
            onClick={() => changeTheme("dark")}
            className={`flex items-center gap-[0.44rem] px-[0.88rem] py-[0.44rem] rounded-[0.66rem] text-[0.77rem] font-semibold transition-all duration-200
              ${
                theme === "dark"
                  ? "bg-[linear-gradient(180deg,#BAFFE8_0%,#B7FFE7_100%)] text-black shadow-sm"
                  : "bg-transparent text-gray-500"
              }
            `}
          >
            <Moon className="h-[0.88rem] w-[0.88rem]" />
            Dark
          </button>
        </div>
      </div>
    </header>
  );
}