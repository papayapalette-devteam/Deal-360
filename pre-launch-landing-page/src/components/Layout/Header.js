"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    "Requirements",
    "Listing intent",
    "Agent",
    "Brokerages",
    "Investor",
  ];

    useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header
      className="w-full"
      style={{
        background: "rgba(201, 255, 237, 0.40)",
        // boxShadow: "0 2px 4px rgba(0,0,0,0.10)",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-3 md:py-4">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/58b21f90e57aab8730e4c3da6c7d29174a380bf1?width=80"
            alt="Deal 360 logo"
            className="w-8 h-10 object-contain"
          />
          <span
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold whitespace-nowrap"
            style={{ fontFamily: "Manrope, sans-serif", color: "#F88379" }}
          >
            Deal 360
          </span>
        </div>

        {/* Middle Section - Nav Links */}
      <nav
  className="hidden md:flex items-center gap-4 px-4 py-2 flex-1"
  style={{
    flex: "1 0 0",   // flex-grow:1; flex-shrink:0; flex-basis:0
  }}
>
  {navLinks.map((link) => (
    <a
      key={link}
      href="#"
      className="rounded-full text-[14px] font-medium whitespace-nowrap hover:bg-white/20 px-3 py-2"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        color: "#4B4B4B",
        lineHeight: "120%",
      }}
    >
      {link}
    </a>
  ))}
</nav>

        {/* Right Section - Theme & Button */}
    {/* Right Section - Theme & Button */}
<div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0 mr-[10%]">
  <div
    className="flex items-center rounded-2xl overflow-hidden p-1 flex-shrink-0"
    style={{
      background: "linear-gradient(90deg, #E8E8E8 0%, #E5E5E5 100%)",
    }}
  >
    <button
      onClick={() => setTheme("light")}
      className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm lg:text-base transition-all cursor-pointer ${
        theme === "light" ? "bg-[#BAFFE8]" : ""
      }`}
    >
      Light
    </button>
    <button
      onClick={() => setTheme("dark")}
      className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm lg:text-base transition-all cursor-pointer ${
        theme === "dark" ? "bg-[#BAFFE8]" : ""
      }`}
    >
      Dark
    </button>
  </div>

  <button
    className="flex items-center gap-2 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 text-xs md:text-sm lg:text-base rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap flex-shrink-0"
    style={{
      background: "#7FFFD4",
      boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      color: "#4B4B4B",
      lineHeight: "120%",
    }}
  >
    Pre - Registration
  </button>
</div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 flex-shrink-0"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4B4B4B"
            strokeWidth="2"
          >
            {mobileMenu ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="py-2 border-b border-gray-200 text-[#4B4B4B]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setTheme("light")}
            className="mt-4 py-2 rounded bg-[#BAFFE8] text-sm font-medium"
          >
            Light Mode
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="py-2 rounded bg-[#BAFFE8] text-sm font-medium"
          >
            Dark Mode
          </button>

          <button
            className="mt-2 py-3 rounded-lg text-sm font-medium"
            style={{
              background: "#7FFFD4",
              color: "#4B4B4B",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
            }}
          >
            Pre - Registration
          </button>
        </div>
      </div>
    </header>
  );
}