"use client"

import { useState, useEffect } from "react";

// Images from Figma design
const KEYS_IMG_DESKTOP =
  "https://api.builder.io/api/v1/image/assets/TEMP/2b7a7f9888eeec7b153d23a7f529755a56c3b7ff?width=5528";
const PHONE_IMG_DESKTOP =
  "https://api.builder.io/api/v1/image/assets/TEMP/9cb580cf6f3bffea09916d9b6ca79da820580f2a?width=833";
const MOBILE_BG_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/1afbf0cf2c44d3099c5291bb275503e09b382697?width=1088";
const PHONE_IMG_MOBILE =
  "https://api.builder.io/api/v1/image/assets/TEMP/d77600d1564565e095c736769db205285d47d1b1?width=338";
const SLIDE21_IMG = "/slide21.png";
const SLIDE22_IMG = "/slide22.png";

const MOBILE_BG_IMG1 = "/slide21.png";
const PHONE_IMG_MOBILE1 = "/slide22.png";

const DESKTOP_BULLETS = [
  "Submit structured requirements",
  "Use precision filters to narrow aligned availability",
  "Save and refine your criteria",
];

const DESKTOP_BULLETS1 = [
  "Set complete intent upfront",
  "Eliminate unnecessary back-and-forth",
  "Enable faster, higher-quality matches",
];

const MOBILE_BULLETS = [
  "Submit structured requirements",
  "Align availability with precision filters",
  "Save and refine your criteria",
];

const MOBILE_BULLETS1 = [
  "Set complete intent upfront",
  "Eliminate unnecessary back-and-forth",
  "Enable faster, higher-quality matches",
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

function Slide({
  slideTitle,
  slideDescription,
  slideDeal360Text,
  bullets,
  desktopGradient,
  mobileGradient,
  desktopKeyImage,
  desktopPhoneImage,
  mobilePhoneImage,
  mobileBgImage,
}) {
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
              color: "var(--color-text)",
              maxWidth: 711,
            }}
          >
            {slideTitle}
          </h2>

          {/* Body text */}
          <p
            className="font-poppins font-normal mb-4 pr-10"
            style={{
              fontSize: "clamp(14px, 1.05vw, 20px)",
              lineHeight: "150%",
              color: "var(--color-text)",
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
              color: "var(--color-text)",
              maxWidth: 661,
            }}
          >
            {slideDeal360Text}
          </p>

          {/* Bullet list */}
          <div className="flex flex-col gap-4">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckIconDesktop />
                <span
                  className="font-poppins font-medium"
                  style={{
                    fontSize: "clamp(14px, 1.05vw, 20px)",
                    color: "var(--color-text)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
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
              left: "-20%",
              top: "10%",
              height: "96%",
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
                // left: "calc(-14.6% - 1.5px)",
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
              className="font-poppins font-medium mb-10 sm:mb-14"
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
              className="font-poppins font-medium"
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
              // width: "43.6%",
              height: "65%",
              maxHeight: "345px",
            }}
          />
        </div>

        {/* ── Bottom section: bullets ── */}
        <div
          className="relative z-10 px-6 sm:px-8 py-8"
          style={{
            // borderRadius: "32px 32px 0 0",
            background: mobileGradient,
          }}
        >
          <div className="flex flex-col gap-6 sm:gap-8">
            {bullets.map((text, i) => (
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
    slideTitle: "Start with Requirements. Not Endless Searching.",
    slideDescription:
      "Buyers and tenants define exactly what they're looking for through structured requirements, supported by precision filters designed to reduce noise and surface aligned availability.",
    slideDeal360Text: "Deal 360 connects real demand with real supply — not guesswork.",
    bullets: DESKTOP_BULLETS,
    desktopGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%)",
    mobileGradient: "linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%)",
    desktopKeyImage: KEYS_IMG_DESKTOP,
    desktopPhoneImage: PHONE_IMG_DESKTOP,
    mobilePhoneImage: PHONE_IMG_MOBILE,
    mobileBgImage: MOBILE_BG_IMG,
  },
  {
    slideTitle: "Intent First. Everything Else Follows.",
    slideDescription:
      "Define your property, expectations, and target audience upfront—so agents can act with precision from the start.",
    slideDeal360Text: "Deal 360 connects structured intent with aligned demand.",
    bullets: DESKTOP_BULLETS1,
    desktopGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%)",
    mobileGradient: "linear-gradient(90deg, #F88379 0%, #FFA79F 100%), linear-gradient(90deg, #7FFFD4 0%, #A5FFE1 100%), #85FFD6",
    desktopKeyImage: SLIDE21_IMG,
    desktopPhoneImage: SLIDE22_IMG,
    mobilePhoneImage: PHONE_IMG_MOBILE1,
    mobileBgImage: MOBILE_BG_IMG1,
  },
];

export default function StartWithRequirements() {
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

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume auto-play after 8s
  };

  return (
    <div className="w-full font-poppins bg-[#EDEEF0] md:mt-20 md:mb-30 mt-10 ">
      {/* Slide container with smooth transition */}
      <div className="transition-opacity duration-500">
        <Slide
          slideTitle={slide.slideTitle}
          slideDescription={slide.slideDescription}
          slideDeal360Text={slide.slideDeal360Text}
          bullets={slide.bullets}
          desktopGradient={slide.desktopGradient}
          mobileGradient={slide.mobileGradient}
          desktopKeyImage={slide.desktopKeyImage}
          desktopPhoneImage={slide.desktopPhoneImage}
          mobilePhoneImage={slide.mobilePhoneImage}
          mobileBgImage={slide.mobileBgImage}
        />
      </div>

      {/* Slide indicators */}
      {/* <div className="flex justify-center gap-2 py-6 px-4">
        {SLIDES_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-gray-800 w-8 h-2"
                : "bg-gray-400 w-2 h-2 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
