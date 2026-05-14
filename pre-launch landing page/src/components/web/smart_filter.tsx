"use client"

import { useState, useEffect } from "react";
import { publicAsset } from "@/lib/assetUrl";

// Image paths
const firstslidebg = publicAsset("/smartfilterbg1.png");
const firstslideoverlap = publicAsset("/smartfilteroverlap1.png");

const secondslidebg = publicAsset("/smartfilterbg2.png");
const secondslideoverlap = publicAsset("/smartfilteroverlap2.png");

const thirdslidebg = publicAsset("/smartfilterbg3.png");
const thirdslideoverlap = publicAsset("/smartfilteroverlap3.png");

const DESKTOP_BULLETS = [
  "Real-time availability signals — eliminate outdated listings",
  "Optimised deal flow — faster path from search to transaction",
  "List and find your next property — all in one ecosystem",
];

const DESKTOP_BULLETS1 = [
  "Set complete intent upfront",
  "Eliminate unnecessary back-and-forth",
  "Enable faster, higher-quality matches",
];

const DESKTOP_BULLETS2 = [
  "Structured Listing Intent",
  "Agent proposal comparison",
  "Controlled exposure",
  " Built for serious sellers and landlords"
];

const MOBILE_BULLETS = [
  "Real-time availability signals — eliminate outdated listings",
  "Optimised deal flow — faster path from search to transaction",
  "List and find your next property — all in one ecosystem",
];

const MOBILE_BULLETS1 = [
  "Structured Listing Intent",
  "Agent proposal comparison",
  "Controlled exposure",
  " Built for serious sellers and landlords"
];

const MOBILE_BULLETS2 = [
  "Track rental income across multiple properties",
  "Monitor tenancy start, expiry, and renewal dates",
  "View portfolio performance in one place",
  "Stay organized across units, tenants, and agents"
];

function CheckIconDesktop() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#4B4B4B] bg-transparent"
      style={{ width: 48, height: 48, boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#4B4B4B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function CheckIconDesktopwhite() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#FFF] bg-transparent"
      style={{ width: 48, height: 48, boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CheckIconMobile() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full border border-[#4B4B4B] bg-transparent"
      style={{
        width: 27,
        height: 27,
        boxShadow: "0 0 6.697px 0 rgba(0,0,0,0.10)",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1612 3.34839L5.02253 9.48704L2.23223 6.69674"
          stroke="#4B4B4B"
          strokeWidth="1.67418"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowIconPrev() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 24L12 16L20 8"
        stroke="#4B4B4B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIconNext() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24L20 16L12 8"
        stroke="#4B4B4B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SlideProps = {
  slideTitle: string;
  slideDescription: string;
  slideDeal360Text?: string;
  bulletsDesktop: string[];
  bulletsMobile: string[];
  desktopGradient: string;
  mobileGradient: string;
  desktopKeyImage: string;
  desktopPhoneImage: string;
  mobilePhoneImage: string;
  mobileBgImage: string;
};

function Slide({
  slideTitle,
  slideDescription,
  slideDeal360Text,
  bulletsDesktop,
  bulletsMobile,
  desktopGradient,
  mobileGradient,
  desktopKeyImage,
  desktopPhoneImage,
  mobilePhoneImage,
  mobileBgImage,
}: SlideProps) {


  return (
    <>
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:flex relative w-full min-h-[600px]">
        {/* ── Left gradient column ── */}
        <div
          className="flex flex-col justify-center relative z-10 mt-10 mb-10"
          style={{
            width: "56%",
            background: desktopGradient,
            padding: "80px clamp(40px, 4vw, 100px)",
          }}
        >
          {/* Title */}
          <h2
            className="font-poppins font-medium mb-8 pr-10"
            style={{
              fontSize: "clamp(36px, 3.35vw, 64px)",
              lineHeight: "110%",
              // color: "var(--color-text)",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              maxWidth: 711,
            }}
          >
            {slideTitle}
          </h2>

                    <p
            className="font-poppins font-medium mb-10 pr-10 mt-10"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              display: desktopPhoneImage === "/smartfilteroverlap3.png" ? "flex" : "none",
              maxWidth: 661,
            }}
          >
            Total Portfolio Control
          </p>

          {/* Body text */}
          <p
            className="font-poppins font-normal mb-4 pr-15"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              maxWidth: 711,
            }}
          >
            {slideDescription}
          </p>

          <p
            className="font-poppins font-normal mb-10 pr-10"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              maxWidth: 661,
            }}
          >
            {slideDeal360Text}
          </p>
                        <p
            className="font-poppins font-medium mb-10 pr-10 mt-10"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              display: desktopPhoneImage === "/smartfilteroverlap3.png" ? "flex" : "none",
              maxWidth: 661,
            }}
          >
            With Property Manager you can:
          </p>

          {/* Bullet list */}
          <div className="flex flex-col gap-4">
            {bulletsDesktop.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                {desktopPhoneImage === "/smartfilteroverlap3.png" ? <CheckIconDesktop /> : <CheckIconDesktopwhite />}
                <span
                  className="font-poppins font-medium"
                  style={{
                    fontSize: "clamp(14px, 1.05vw, 20px)",
                    color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-poppins font-medium mb-10 pr-10 mt-10"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: desktopPhoneImage === "/smartfilteroverlap3.png" ? "var(--color-text)" : "white",
              display: desktopPhoneImage === "/smartfilteroverlap3.png" ? "flex" : "none",
              maxWidth: 661,
            }}
          >
            Built for investors who want clarity — not spreadsheets.
          </p>

        </div>

        {/* ── Right image column ── */}
        <div className="relative flex-1 min-h-[600px]">
          {/* Background: keys / hand image */}
          <img
            style={{ borderTopLeftRadius: "50px" }}
            src={desktopKeyImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Phone mockup overlay */}
          <img
            src={desktopPhoneImage}
            alt="App mockup"
            className="absolute object-contain"
            style={{
              left: `${desktopPhoneImage === "/smartfilteroverlap2.png" ? "-35%" : "-20%"}`,
              top: "15%",
              height: "90%",
              width: "auto",
              zIndex: 9999,
            }}
          />
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="md:hidden w-full">
        {/* ── Top section: background image + text + phone ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            minHeight: "520px",
            paddingBottom: "20px",
          }}
        >
          {/* Full-bleed background image container */}
          <div
            className="absolute inset-0"
            style={{
              height: "100%",
              background: `linear-gradient(270deg, #FFF 0%, rgba(255,255,255,0.00) 91.35%), url('https://api.builder.io/api/v1/image/assets/TEMP/7d1f24cf312bb40541999645eac88311b187d442?width=780') lightgray -92.855px 0px / 263.66% 93.444% no-repeat, #FFF`,
              boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
            }}
          >
            {/* Background image */}
            <img
              src={mobileBgImage}
              alt=""
              className="absolute object-cover"
              style={{
                top: "calc(-5.3% - 1.5px)",
                width: "139.5%",
                height: "105.3%",
              }}
            />
          </div>

          {/* Content overlay - title */}
          <div className="relative z-10 pt-6 px-6 sm:pt-8 sm:px-8">
            <h2
              className="font-poppins font-semibold mb-12 sm:mb-16"
              style={{
                fontSize: "clamp(28px, 7vw, 34px)",
                lineHeight: "1.3",
                color: "var(--color-text)",
              }}
            >
              {slideTitle}
            </h2>

            

            {/* Description paragraph */}
            <p
              className="font-poppins font-normal mb-10 sm:mb-14"
              style={{
                fontSize: "clamp(13px, 3.5vw, 14px)",
                lineHeight: "1.7",
                color: "var(--color-text)",
                maxWidth: "195px",
              }}
            >
              {slideDescription}
            </p>

            {/* Deal 360 paragraph */}
            <p
              className="font-poppins font-normal"
              style={{
                fontSize: "clamp(13px, 3.5vw, 14px)",
                lineHeight: "1.7",
                color: "var(--color-text)",
                maxWidth: "195px",
              }}
            >
              {slideDeal360Text}
            </p>
          </div>

          {/* Phone mockup - absolutely positioned within top section */}
          <img
            src={mobilePhoneImage}
            alt="App screenshot"
            className="absolute object-contain"
            style={{
              right: "0%",
              top: "35%",
              height: "65%",
              maxHeight: "345px",
            }}
          />
        </div>

        {/* ── Bottom section: bullets ── */}
        <div
          className="relative z-10 px-6 sm:px-8 py-8"
          style={{
            background: mobileGradient,
          }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            {bulletsMobile.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIconMobile />
                <span
                  className="font-poppins font-medium mt-0.5"
                  style={{
                    fontSize: "clamp(12px, 3.5vw, 14px)",
                    color: "var(--color-text)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const SLIDES_DATA = [
  {
    slideTitle: "Sharper filters. Smarter matches.",
    slideDescription:
      "Results are refined using intent, availability, and verification — so you’re not just seeing more listings, you’re seeing the right ones.",
    slideDeal360Text: "Built around live market signals and real user intent, every interaction is designed to move you closer to a decision.",
    bulletsMobile: MOBILE_BULLETS,
    bulletsDesktop: DESKTOP_BULLETS,
    desktopGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    mobileGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    desktopKeyImage: firstslidebg,
    desktopPhoneImage: firstslideoverlap,
    mobilePhoneImage: firstslideoverlap,
    mobileBgImage: firstslidebg,
  },
  {
    slideTitle: "Sell or Rent with Control.",
    slideDescription:
      "Owners declare Listing Intent before going live and connect with agents aligned to genuine demand — without broadcasting their property everywhere.",
    // slideDeal360Text: "Deal 360 connects structured intent with aligned demand.",
    bulletsMobile: MOBILE_BULLETS1,
    bulletsDesktop: DESKTOP_BULLETS1,
    desktopGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    mobileGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), #F88379",
    desktopKeyImage: secondslidebg,
    desktopPhoneImage: secondslideoverlap,
    mobilePhoneImage: secondslideoverlap,
    mobileBgImage: secondslidebg,
  },
  {
    slideTitle: "Property Manager",
    slideDescription:
      "Track rental income, tenancy dates, and overall portfolio performance in one structured dashboard — built for landlords and investors managing multiple properties.",
    slideDeal360Text: "",
    bulletsMobile: MOBILE_BULLETS2,
    bulletsDesktop: DESKTOP_BULLETS2,
    desktopGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%), #7FFFD4",
    mobileGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%), #7FFFD4",
    desktopKeyImage: thirdslidebg,
    desktopPhoneImage: thirdslideoverlap,
    mobilePhoneImage: thirdslideoverlap,
    mobileBgImage: thirdslidebg,
  },
];

export default function SmartFilter() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = SLIDES_DATA[currentSlide];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8s
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8s
  };

  return (
    <div className="w-full font-poppins bg-[#EDEEF0] md:mt-20 md:mb-30 mt-10 relative">
      {/* Slide container with smooth transition */}
      <div className="transition-opacity duration-500 h-full">
        <div className="relative flex items-center justify-center">
          {/* Previous Arrow - Desktop */}
          <button
            onClick={handlePrevClick}
            className="hidden md:flex absolute left-6 z-50 p-2 hover:opacity-70 transition-opacity"
            aria-label="Previous slide"
          >
            <ArrowIconPrev />
          </button>

          {/* Slide Content */}
      <Slide
  slideTitle={slide.slideTitle}
  slideDescription={slide.slideDescription}
  slideDeal360Text={slide.slideDeal360Text}
  bulletsDesktop={slide.bulletsDesktop}
  bulletsMobile={slide.bulletsMobile}
  desktopGradient={slide.desktopGradient}
  mobileGradient={slide.mobileGradient}
  desktopKeyImage={slide.desktopKeyImage}
  desktopPhoneImage={slide.desktopPhoneImage}
  mobilePhoneImage={slide.mobilePhoneImage}
  mobileBgImage={slide.mobileBgImage}
/>

          {/* Next Arrow - Desktop */}
          <button
            onClick={handleNextClick}
            className="hidden md:flex absolute right-6 z-50 p-2 hover:opacity-70 transition-opacity"
            aria-label="Next slide"
          >
            <ArrowIconNext />
          </button>
        </div>
      </div>

      {/* Mobile Arrow Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 py-4">
        <button
          onClick={handlePrevClick}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Previous slide"
        >
          <ArrowIconPrev />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2">
          {SLIDES_DATA.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? "bg-gray-800 w-2 h-2"
                  : "bg-gray-400 w-2 h-2"
                }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Next slide"
        >
          <ArrowIconNext />
        </button>
      </div>
    </div>
  );
}
