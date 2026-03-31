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
        background: "white",
        // boxShadow: "0 2px 4px rgba(0,0,0,0.10)",
      }}
    >
      {/* Top Bar */}
 <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 py-3 md:py-4">

  {/* Left Section - Logo */}
  <div className="flex items-center gap-2 flex-shrink-0">
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/58b21f90e57aab8730e4c3da6c7d29174a380bf1?width=80"
      alt="Deal 360 logo"
      className="w-8 h-10 object-contain"
    />
    <span
      className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap"
      style={{ fontFamily: "Manrope, sans-serif", color: "#F88379" }}
    >
      Deal 360
    </span>
  </div>

  {/* Middle Section - Nav Links */}
  <nav className="hidden md:flex items-center justify-center gap-6 flex-1">
    {navLinks.map((link) => (
      <a
        key={link}
        href="#"
        className="rounded-full text-sm font-medium whitespace-nowrap hover:bg-white/20 px-3 py-2"
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "#4B4B4B",
        }}
      >
        {link}
      </a>
    ))}
  </nav>

  {/* Right Section - Button */}
  <div className="hidden md:flex items-center flex-shrink-0">
    <button
      className="px-4 md:px-5 py-2 text-sm rounded-lg transition-opacity hover:opacity-90 whitespace-nowrap"
      style={{
        background: "#7FFFD4",
        boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset",
        fontFamily: "Poppins, sans-serif",
        color: "#4B4B4B",
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