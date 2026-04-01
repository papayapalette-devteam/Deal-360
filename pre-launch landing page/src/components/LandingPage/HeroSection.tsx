"use client"

import React, { useEffect, useState } from "react";

// ─── Shared Icon Components ───────────────────────────────────────────────────

const CheckCircleIcon: React.FC = () => (
  <div
    className="flex-shrink-0 flex items-center justify-center rounded-full"
    style={{
      width: 27,
      height: 27,
      background: "var(--color-primary)",
      boxShadow: "0 0 6.697px 0 rgba(0,0,0,0.10)",
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M11.1611 3.34839L5.02247 9.48704L2.23218 6.69674"
        stroke="white"
        strokeWidth="1.67418"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const LogOutIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
      stroke="#4B4B4B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AppStoreButton: React.FC = () => (
  <div
    className="relative overflow-hidden flex items-center flex-shrink-0"
    style={{
      width: 140,
      height: 40,
      borderRadius: 6,
      border: "1px solid #A6A6A6",
      background: "#000",
    }}
  >
    {/* Apple logo */}
    <svg
      className="absolute"
      style={{ left: 8, top: 8 }}
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
    >
      <path
        d="M16.7045 12.7631C16.7166 11.8432 16.9669 10.9412 17.4321 10.1411C17.8972 9.34105 18.5621 8.66882 19.3648 8.18699C18.8548 7.47594 18.1821 6.89078 17.4 6.47797C16.6178 6.06517 15.7479 5.8361 14.8592 5.80895C12.9635 5.61468 11.1258 6.91641 10.1598 6.91641C9.17506 6.91641 7.68776 5.82824 6.08616 5.86041C5.05021 5.89308 4.04059 6.18719 3.15568 6.71407C2.27077 7.24096 1.54075 7.98265 1.03674 8.86688C-1.14648 12.5573 0.482005 17.9809 2.57338 20.964C3.61975 22.4247 4.84264 24.0563 6.44279 23.9985C8.00863 23.9351 8.59344 23.0237 10.4835 23.0237C12.3561 23.0237 12.9048 23.9985 14.5374 23.9617C16.2176 23.9351 17.2762 22.4945 18.2859 21.0199C19.0377 19.9791 19.6162 18.8288 20 17.6116C19.0238 17.2085 18.1908 16.5338 17.6048 15.6716C17.0187 14.8094 16.7056 13.7979 16.7045 12.7631Z"
        fill="white"
      />
      <path
        d="M13.622 3.84713C14.5381 2.77343 14.9895 1.39335 14.8802 0C13.4806 0.143519 12.1877 0.796596 11.2592 1.82911C10.8052 2.33351 10.4575 2.92033 10.236 3.55601C10.0145 4.19168 9.92342 4.86375 9.96808 5.5338C10.6681 5.54084 11.3607 5.3927 11.9936 5.10054C12.6266 4.80838 13.1833 4.37982 13.622 3.84713Z"
        fill="white"
      />
    </svg>
    {/* Text */}
    <div
      className="absolute flex flex-col justify-center"
      style={{ left: 36, top: 7 }}
    >
      <span
        style={{
          color: "#FFF",
          fontFamily: "Poppins, sans-serif",
          fontSize: 9,
          fontWeight: 400,
          lineHeight: "9px",
          display: "block",
        }}
      >
        Download on the
      </span>
      <span
        style={{
          color: "#FFF",
          fontFamily: "Poppins, sans-serif",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: "-0.47px",
          lineHeight: "100%",
          display: "block",
        }}
      >
        App Store
      </span>
    </div>
    {/* SOON ribbon */}
    <div
      className="absolute flex items-center justify-end overflow-hidden"
      style={{
        transform: "rotate(-31.485deg)",
        left: 47,
        top: -6,
        width: 109,
        height: 23,
        background: "var(--color-aquamarine)",
        padding: "4px 20px 4px 48px",
      }}
    >
      <span
        style={{
          color: "var(--color-text)",
          fontFamily: "Poppins, sans-serif",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "110%",
        }}
      >
        SOON
      </span>
    </div>
  </div>
);

const GooglePlayButton: React.FC = () => (
  <div
    className="relative overflow-hidden flex items-center flex-shrink-0"
    style={{
      width: 140,
      height: 40,
      borderRadius: 6,
      border: "1px solid #A6A6A6",
      background: "#000",
    }}
  >
    {/* Play Store logo */}
    <svg
      className="absolute"
      style={{ left: 8, top: 8 }}
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
    >
      <path
        d="M9.80482 11.4617L0.0895996 22.0059C0.0905121 22.0078 0.090512 22.0106 0.0914244 22.0125C0.389807 23.1574 1.41179 24 2.62539 24C3.11083 24 3.56616 23.8656 3.95671 23.6305L3.98773 23.6118L14.9229 17.1593L9.80482 11.4617Z"
        fill="#EA4335"
      />
      <path
        d="M19.6312 9.66619L19.6221 9.65966L14.9009 6.86123L9.58203 11.7013L14.9201 17.1582L19.6157 14.3878C20.4388 13.9324 20.9981 13.045 20.9981 12.0223C20.9981 11.0052 20.447 10.1225 19.6312 9.66619Z"
        fill="#FBBC04"
      />
      <path
        d="M0.0894234 1.99337C0.0310244 2.21359 0 2.445 0 2.68388V21.3164C0 21.5553 0.0310245 21.7867 0.0903359 22.006L10.1386 11.7314L0.0894234 1.99337Z"
        fill="#4285F4"
      />
      <path
        d="M9.87715 12L14.9049 6.85945L3.9825 0.383598C3.58557 0.140054 3.12203 8.67844e-05 2.62655 8.67844e-05C1.41295 8.67844e-05 0.389138 0.84456 0.0907557 1.99043C0.0907557 1.99136 0.0898438 1.9923 0.0898438 1.99323L9.87715 12Z"
        fill="#34A853"
      />
    </svg>
    {/* Text */}
    <div
      className="absolute flex flex-col justify-center"
      style={{ left: 36, top: 5, gap: 2 }}
    >
      <span
        style={{
          color: "#FFF",
          fontFamily: "Poppins, sans-serif",
          fontSize: 10,
          fontWeight: 400,
          textTransform: "uppercase",
          lineHeight: "normal",
          display: "block",
        }}
      >
        GET IT ON
      </span>
      <span
        style={{
          color: "#FFF",
          fontFamily: "Poppins, sans-serif",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: "100%",
          display: "block",
          letterSpacing: "-0.3px",
        }}
      >
        Google Play
      </span>
    </div>
    {/* SOON ribbon */}
    <div
      className="absolute flex items-center justify-end overflow-hidden"
      style={{
        transform: "rotate(-31.485deg)",
        left: 47,
        top: -6,
        width: 109,
        height: 23,
        background: "var(--color-primary)",
        padding: "4px 20px 4px 48px",
      }}
    >
      <span
        style={{
          color: "#FFF",
          fontFamily: "Poppins, sans-serif",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "110%",
        }}
      >
        SOON
      </span>
    </div>
  </div>
);

// ─── Main HeroSlider Component ────────────────────────────────────────────────

const BG_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/57bfa1e0591736bdb4847afeba6d0d601597ab3b?width=3840";
const PHONE_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/cc2e8f2fb53927b6de1860617202d581e381fd60?width=899";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? 2 : p - 1));
  const nextSlide = () => setCurrentSlide((p) => (p === 2 ? 0 : p + 1));
  const goToSlide = (i: number) => setCurrentSlide(i);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  }, 2000);

  return () => clearInterval(interval);
}, []);

  return (
    <section
      className="relative w-full  md:mt-10 md:mb-20"
      style={{ borderRadius: "50px 50px 0 0" }}
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 1
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className={currentSlide === 0 ? "flex" : "hidden"}>
        <div
          className="relative w-full flex "
          style={{
            minHeight: "clamp(600px, 80vh, 929px)",
            backgroundImage: `url('${BG_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* White gradient overlay */}
          {/* <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 100%)",
            }}
          /> */}

          {/* Phone image — absolute, right side, desktop only */}
          <div
            className="absolute hidden lg:block 2xl:right-[15%] md:right-[5%]  "
            style={{
              // right: "5%",
              top: "5%",
              height: "100%",
              width: "clamp(280px, 24vw, 450px)",
              
            }}
          >
            <img
              src={PHONE_IMAGE}
              alt="Dubai real estate app preview"
              className="w-full h-full object-contain object-bottom "
            />
          </div>

          {/* Left content */}
          <div
            className="relative z-10 flex flex-col w-full"
            style={{
              paddingTop: "clamp(48px, 10vw, 151px)",
              paddingBottom: "clamp(32px, 5vw, 64px)",
              paddingLeft: "clamp(16px, 10.4vw, 200px)",
              paddingRight: "clamp(16px, 4vw, 48px)",
              // maxWidth: "clamp(340px, 75%, 800px)",
            }}
          >
            {/* Headline */}
            <h1
              className="font-semibold leading-[110%] mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 4.5vw, 4.6875rem)",
                maxWidth: 743,
              }}
            >
              Dubai real estate is about to{" "}
              <span style={{ color: "var(--color-primary)" }}>change</span>.
            </h1>

            {/* Subtitle */}
            <p
              className="leading-[150%] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.5rem)",
                color: "var(--color-text)",
                maxWidth: 743,
              }}
            >
              A{" "}
              <strong style={{ fontWeight: 700 }}>revolutionary platform</strong>{" "}
              built around verified agents, real demand, and private
              opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  color: "var(--color-text)",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 43px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Requirement
              </button>
              <button
                className="flex items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 44px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Listing Intent
              </button>
            </div>

            {/* Registration Card */}
            <div
              className="rounded-2xl  w-full 2xl:absolute 2xl:-bottom-10 relative md:-bottom-25 "
              style={{
                maxWidth: 705,
                background: "rgba(255,255,255,0.55)",
                boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                backdropFilter: "blur(8px)",
                padding:
                  "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
                  
              }}
            >
              {/* Card title */}
              <p
                className="leading-[150%] mb-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(14px, 1.4vw, 24px)",
                  color: "var(--color-text)",
                }}
              >
                <strong style={{ fontWeight: 700 }}>Register now!</strong>{" "}
                <span style={{ fontWeight: 500 }}>
                  Early access spots available
                </span>
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Priority visibility
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Founding-only benefits
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon />
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 16,
                      color: "var(--color-text)",
                      fontWeight: 500,
                    }}
                  >
                    Early feature access
                  </span>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{
                    // background: "var(--color-aquamarine)",
                    color: "var(--color-text)",
                    boxShadow:
                      "0 0 2px 0 rgba(0,0,0,0.35), 0 0 10px 0 rgba(255,255,255,0.25) inset",
                    padding: "16px 32px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    height: 52,
                  }}
                >
                  <LogOutIcon />
                  Pre - Registration
                </button>
                <div className="flex flex-col gap-2">
                  <AppStoreButton />
                  <GooglePlayButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 2
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className={currentSlide === 1 ? "block" : "hidden"}>
        <div
          className="relative w-full flex "
          style={{
            minHeight: "clamp(600px, 80vh, 929px)",
            backgroundImage: "url('/herobg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* White gradient overlay */}
          {/* <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 100%)",
            }}
          /> */}

        {/* Phone image — absolute, right side, desktop only */}
          <div
            className="absolute hidden lg:block 2xl:right-[15%] md:right-[5%]  "
            style={{
              // right: "5%",
              top: "5%",
              height: "100%",
              width: "clamp(280px, 24vw, 450px)",
              
            }}
          >
            {/* <img
              src={PHONE_IMAGE}
              alt="Dubai real estate app preview"
              className="w-full h-full object-contain object-bottom "
            /> */}
          </div>

          {/* Left content */}
          <div
            className="relative z-10 flex flex-col w-full"
            style={{
              paddingTop: "clamp(48px, 10vw, 151px)",
              paddingBottom: "clamp(32px, 5vw, 64px)",
              paddingLeft: "clamp(16px, 10.4vw, 200px)",
              paddingRight: "clamp(16px, 4vw, 48px)",
              // maxWidth: "clamp(340px, 55%, 800px)",
            }}
          >
            {/* Headline */}
            <h1
              className="font-semibold leading-[110%] mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 4.5vw, 4.6875rem)",
                maxWidth: 743,
              }}
            >
              A <span style={{ color: "var(--color-primary)" }}>smarter</span> way to {""}
             <span className="whitespace-nowrap">navigate properties</span> 
            </h1>

            {/* Subtitle */}
            <p
              className="leading-[150%] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.5rem)",
                color: "var(--color-text)",
                maxWidth: 743,
              }}
            >
              
              <strong style={{ fontWeight: 700 }}>We help</strong>{" "}
               buyers, sellers, agents, brokerages, and investors make clearer property 
              decisions by aligning real demand with 
              verified supply launching in Dubai and expanding across the UAE. 
            </p>

     {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  color: "var(--color-text)",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 43px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Requirement
              </button>
              <button
                className="flex items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 44px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Listing Intent
              </button>
            </div>

            {/* Registration Card */}
            <div
               className="rounded-2xl  w-full 2xl:absolute 2xl:-bottom-10 relative md:-bottom-25 "
              style={{
                maxWidth: 705,
                background: "rgba(255,255,255,0.55)",
                boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                backdropFilter: "blur(8px)",
                padding:
                  "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
              }}
            >
              {/* Card title */}
              <p
                className="leading-[150%] mb-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(14px, 1.4vw, 24px)",
                  color: "var(--color-text)",
                }}
              >
                <strong style={{ fontWeight: 700 }}>Register now!</strong>{" "}
                <span style={{ fontWeight: 500 }}>
                  Early access spots available
                </span>
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Priority visibility
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Founding-only benefits
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon />
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 16,
                      color: "var(--color-text)",
                      fontWeight: 500,
                    }}
                  >
                    Early feature access
                  </span>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{
                    // background: "var(--color-aquamarine)",
                    color: "var(--color-text)",
                    boxShadow:
                      "0 0 2px 0 rgba(0,0,0,0.35), 0 0 10px 0 rgba(255,255,255,0.25) inset",
                    padding: "16px 32px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    height: 52,
                  }}
                >
                  <LogOutIcon />
                  Pre - Registration
                </button>
                <div className="flex flex-col gap-2">
                  <AppStoreButton />
                  <GooglePlayButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 3
          ═══════════════════════════════════════════════════════════════════════ */}
       <div className={currentSlide === 2 ? "block" : "hidden"}>
        <div
          className="relative w-full flex "
          style={{
            minHeight: "clamp(600px, 80vh, 929px)",
            backgroundImage: "url('/herobg3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* White gradient overlay */}
          {/* <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.6) 55%, rgba(255,255,255,0) 100%)",
            }}
          /> */}

        {/* Phone image — absolute, right side, desktop only */}
          <div
            className="absolute hidden lg:block 2xl:right-[15%] md:right-[5%]  "
            style={{
              right: "0%",
              top: "10%",
              height: "100%",
              // width: "clamp(280px, 24vw, 450px)",
              
            }}
          >
            <img
              src='./heromonitor.png'
              alt="Dubai real estate app preview"
              className="w-full h-full object-cover object-bottom "
            />
          </div>

          {/* Left content */}
          <div
            className="relative z-10 flex flex-col w-full"
            style={{
              paddingTop: "clamp(48px, 10vw, 151px)",
              paddingBottom: "clamp(32px, 5vw, 64px)",
              paddingLeft: "clamp(16px, 10.4vw, 200px)",
              paddingRight: "clamp(16px, 4vw, 48px)",
              // maxWidth: "clamp(340px, 55%, 800px)",
            }}
          >
            {/* Headline */}
            <h1
              className="font-semibold leading-[110%] mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 4.5vw, 4.6875rem)",
                maxWidth: 743,
              }}
            >
              Clearer intent.  <span style={{ color: "var(--color-primary)" }}>{""}Better </span>
             <span className="whitespace-nowrap">decisions.</span> 
            </h1>

            {/* Subtitle */}
            <p
              className="leading-[150%] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.9rem, 1.4vw, 1.5rem)",
                color: "var(--color-text)",
                maxWidth: 743,
              }}
            >
              
              
             Deal 360 is a <strong style={{ fontWeight: 700 }}>verification-first</strong>{" "}  real estate platform aligning buyers, sellers, 
             agents, brokerages, and investors with real supply and real demand — not recycled leads.
            </p>

     {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  color: "var(--color-text)",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 43px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Requirement
              </button>
              <button
                className="flex items-center justify-center rounded-lg font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                  padding: "16px 44px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  height: 50,
                  minWidth: "clamp(140px, 15vw, 256px)",
                }}
              >
                Submit Listing Intent
              </button>
            </div>

            {/* Registration Card */}
            <div
               className="rounded-2xl  w-full 2xl:absolute 2xl:-bottom-10 relative md:-bottom-25 "
              style={{
                maxWidth: 705,
                background: "rgba(255,255,255,0.55)",
                boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                backdropFilter: "blur(8px)",
                padding:
                  "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
              }}
            >
              {/* Card title */}
              <p
                className="leading-[150%] mb-5"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(14px, 1.4vw, 24px)",
                  color: "var(--color-text)",
                }}
              >
                <strong style={{ fontWeight: 700 }}>Register now!</strong>{" "}
                <span style={{ fontWeight: 500 }}>
                  Early access spots available
                </span>
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Priority visibility
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon />
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: 16,
                        color: "var(--color-text)",
                        fontWeight: 500,
                      }}
                    >
                      Founding-only benefits
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon />
                  <span
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 16,
                      color: "var(--color-text)",
                      fontWeight: 500,
                    }}
                  >
                    Early feature access
                  </span>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-opacity hover:opacity-90"
                  style={{
                    // background: "var(--color-aquamarine)",
                    color: "var(--color-text)",
                    boxShadow:
                      "0 0 2px 0 rgba(0,0,0,0.35), 0 0 10px 0 rgba(255,255,255,0.25) inset",
                    padding: "16px 32px",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    height: 52,
                  }}
                >
                  <LogOutIcon />
                  Pre - Registration
                </button>
                <div className="flex flex-col gap-2">
                  <AppStoreButton />
                  <GooglePlayButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Navigation Arrows ─────────────────────────────────────────────── */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-10 h-16 hover:opacity-70 transition-opacity"
        aria-label="Previous slide"
      >
        <svg width="31" height="62" viewBox="0 0 31 62" fill="none">
          <path
            d="M30 1L2 31L30 61"
            stroke="#4B4B4B"
            strokeWidth="5.72"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-30 md:flex items-center justify-center w-10 h-16 hover:opacity-70 transition-opacity"
        aria-label="Next slide"
      >
        <svg width="31" height="62" viewBox="0 0 31 62" fill="none">
          <path
            d="M1 1L29 31L1 61"
            stroke="#4B4B4B"
            strokeWidth="5.72"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ─── Dot Indicators ────────────────────────────────────────────────── */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        <button
          onClick={() => goToSlide(0)}
          aria-label="Go to slide 1"
          className="transition-all duration-200"
          style={{
            width: currentSlide === 0 ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background:
              currentSlide === 0
                ? "var(--color-primary)"
                : "rgba(75,75,75,0.35)",
            border: "none",
            cursor: "pointer",
          }}
        />
        <button
          onClick={() => goToSlide(1)}
          aria-label="Go to slide 2"
          className="transition-all duration-200"
          style={{
            width: currentSlide === 1 ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background:
              currentSlide === 1
                ? "var(--color-primary)"
                : "rgba(75,75,75,0.35)",
            border: "none",
            cursor: "pointer",
          }}
        />
        <button
          onClick={() => goToSlide(2)}
          aria-label="Go to slide 3"
          className="transition-all duration-200"
          style={{
            width: currentSlide === 2 ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background:
              currentSlide === 2
                ? "var(--color-primary)"
                : "rgba(75,75,75,0.35)",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
