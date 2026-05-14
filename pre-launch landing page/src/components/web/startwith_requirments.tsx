"use client"

import { useState, useEffect } from "react";
import { publicAsset } from "@/lib/assetUrl";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";


import { ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SlideType = {
  slideTitle: ReactNode;          // ✅ changed
  slideDescription: string;
  slideDeal360Text: ReactNode;    // ✅ changed
  bullets: string[];
  desktopGradient: string;
  mobileGradient: string;
  desktopKeyImage: string;
  desktopPhoneImage: string;
  mobilePhoneImage: string;
  mobileBgImage: string;
};
type SlideProps = SlideType;


// Images from Figma design
// const KEYS_IMG_DESKTOP =
//   "https://api.builder.io/api/v1/image/assets/TEMP/2b7a7f9888eeec7b153d23a7f529755a56c3b7ff?width=5528";
// const PHONE_IMG_DESKTOP =
//   "https://api.builder.io/api/v1/image/assets/TEMP/9cb580cf6f3bffea09916d9b6ca79da820580f2a?width=833";
// const MOBILE_BG_IMG =
//   "https://api.builder.io/api/v1/image/assets/TEMP/1afbf0cf2c44d3099c5291bb275503e09b382697?width=1088";
// const PHONE_IMG_MOBILE =
//   "https://api.builder.io/api/v1/image/assets/TEMP/d77600d1564565e095c736769db205285d47d1b1?width=338";

const SLIDE11_IMG = publicAsset("keybackground.png");
const SLIDE12_IMG = publicAsset("slide11.png");

const MOBILE_BG_IMG11 = publicAsset("keybackground.png");
const PHONE_IMG_MOBILE12 = publicAsset("slide11.png");

const SLIDE21_IMG = publicAsset("slide21.png");
const SLIDE22_IMG = publicAsset("slide22.png");

const MOBILE_BG_IMG1 = publicAsset("slide21.png");
const PHONE_IMG_MOBILE1 = publicAsset("slide22.png");

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
}: SlideProps) {

  const params = useParams();
  const locale = params?.locale || "en";

  const intentText = locale === "ar" ? "النية أولاً." : "Intent First.";

  return (
    <div className="w-full overflow-visible pt-10 ">
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:flex relative w-full min-h-[600px] lg:min-h-[700px] overflow-visible">
        {/* ── Left gradient column ── */}
        <div
          className="flex flex-col justify-center relative z-5 mt-10 mb-10"
          style={{
            width: "56%",
            background: desktopGradient,
            padding: "80px clamp(40px, 6vw, 120px)",

          }}
        >
          {/* Title */}
          <h2
            className="font-poppins font-medium mb-8 pr-14"
            style={{
              fontSize: "clamp(30px, 3.2vw, 64px)",
              lineHeight: "110%",
              color: desktopKeyImage === "/slide21.png" ? "white" : "var(--color-text)",
              maxWidth: 711,
            }}
          >
            <span className="text-[var(--color-text)]"
              style={{
                display: desktopKeyImage === "/slide21.png" ? "inline" : "none",
                color: "#4B4B4B"
              }}
            >{intentText}</span> {slideTitle}
          </h2>

          {/* Body text */}
          <p
            className="font-poppins font-normal mb-4 pr-14"
            style={{
              fontSize: "clamp(14px, 1.1vw, 20px)",
              lineHeight: "150%",
              color: desktopKeyImage === "/slide21.png" ? "white" : "var(--color-text)",
              maxWidth: 711,
            }}
          >
            {slideDescription}
          </p>

          <p
            className="font-poppins font-normal mb-10 pr-10"
            style={{
              fontSize: "clamp(14px, 1.1vw, 20px)",
              lineHeight: "150%",
              color: desktopKeyImage === "/slide21.png" ? "white" : "var(--color-text)",
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
                    fontSize: "clamp(14px, 1.1vw, 20px)",
                    color: desktopKeyImage === "/slide21.png" ? "white" : "var(--color-text)",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right image column ── */}
        <div className="relative flex-1 ">
          {/* Background: keys / hand image */}
          <img
            style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }}
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
              top: "10%",
              height: "100%",
              width: "auto",
              zIndex: 20,
              left: locale === "en" ? "-20.5%" : "auto",
              right: locale === "ar" ? "-20.5%" : "auto",
              bottom: "-80px"
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
                fontSize: "clamp(34px, 7vw, 34px)",
                lineHeight: "1.3",
                color: "var(--color-text)",
              }}
            >
              <span className="text-[var(--color-text)]"
                style={{
                  display: desktopKeyImage === "/slide21.png" ? "inline" : "none",
                }}
              >{intentText}</span> {slideTitle}
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
            className="absolute object-contain -right-10"
            style={{
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
    </div>
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
    desktopKeyImage: SLIDE11_IMG,
    desktopPhoneImage: SLIDE12_IMG,
    mobilePhoneImage: PHONE_IMG_MOBILE12,
    mobileBgImage: MOBILE_BG_IMG11,
  },
  {
    slideTitle: "Everything Else Follows.",
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
  const t = useTranslations('startWithRequirements');

  return (
    <div className="w-full font-poppins bg-[#EDEEF0] md:mt-10 md:mb-32 mt-10 dark:bg-black group overflow-visible relative z-20">
      <div className="relative overflow-visible">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.requirements-pagination',
          }}
          navigation={{
            nextEl: '.requirements-next',
            prevEl: '.requirements-prev',
          }}
          className="w-full !overflow-visible"
          style={{ overflow: 'visible' }}
        >
          {SLIDES_DATA.map((slideData, index) => {
            const bullets = [
              t(`slides.${index}.bullet1`),
              t(`slides.${index}.bullet2`),
              t(`slides.${index}.bullet3`),
            ];

            return (
              <SwiperSlide key={index} style={{ overflow: 'visible' }}>
                <Slide
                  slideTitle={t.rich(`slides.${index}.slideTitle`, {
                    bold: (chunks) => <strong>{chunks}</strong>,
                    highlight: (chunks) => <span className="text-primary">{chunks}</span>,
                  })}
                  slideDescription={t(`slides.${index}.slideDescription`)}
                  slideDeal360Text={t.rich(`slides.${index}.slideDeal360Text`, {
                    bold: (chunks) => <strong>{chunks}</strong>
                  })}
                  bullets={bullets}
                  desktopGradient={slideData.desktopGradient}
                  mobileGradient={slideData.mobileGradient}
                  desktopKeyImage={slideData.desktopKeyImage}
                  desktopPhoneImage={slideData.desktopPhoneImage}
                  mobilePhoneImage={slideData.mobilePhoneImage}
                  mobileBgImage={slideData.mobileBgImage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Pagination Dot Indicators */}
        <div className="requirements-pagination absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 pointer-events-auto" />

        {/* Navigation Arrows */}
        <button className="requirements-prev hidden md:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
            <path d="M9 5L15 12L9 19" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="requirements-next hidden md:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L15 12L9 19" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
