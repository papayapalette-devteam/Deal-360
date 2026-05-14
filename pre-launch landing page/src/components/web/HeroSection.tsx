"use client"

import React, { useEffect, useState } from "react";
import { publicAsset } from "@/lib/assetUrl";
import { useRouter } from "@/i18n/navigation";
import Link from "next/link";
import { RegistrationModal } from "../registration-forms/RegistrationModal";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    <div className="absolute top-[15px] left-[44px] w-[109px] h-[17px] bg-[#7FFFD4] flex items-center justify-center overflow-hidden -rotate-[31.485deg] origin-center">
      <span className="text-[#4B4B4B] ml-2 font-poppins font-medium text-[8px] leading-[110%] whitespace-nowrap">
        COMING SOON
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

    <div className="absolute top-[15px] left-[44px] w-[109px] h-[17px] bg-[var(--color-primary)] flex items-center justify-center overflow-hidden -rotate-[31.485deg] origin-center">
      <span className="text-[#fff] ml-2 font-poppins font-medium text-[8px] leading-[110%] whitespace-nowrap">
        COMING SOON
      </span>
    </div>
  </div>
);

// ─── Main HeroSlider Component ────────────────────────────────────────────────


const HeroSection: React.FC = () => {
  const [registration_modal, setregistration_modal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0);

  const t1 = useTranslations("heroslide.slides.0");
  const t2 = useTranslations("heroslide.slides.1");
  const t3 = useTranslations("heroslide.slides.2");

  const locale = useLocale();

  return (
    <section
      className="relative w-full md:mb-20 font-[Poppins] group"
      style={{ borderRadius: "50px 50px 0 0" }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full h-full !overflow-visible"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div
            className="relative w-full flex"
            style={{
              minHeight: "clamp(600px, 80vh, 929px)",
              backgroundImage: `url('${publicAsset('/herobg1.png')}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "visible",
            }}
          >
            {/* Phone image — absolute, right side, desktop only */}
            <div
              className="absolute hidden lg:block"
              style={{
                top: "12%",
                height: "95%",
                width: "clamp(450px, 40vw, 850px)",
                right: locale === "en" ? "0" : "auto",
                left: locale === "ar" ? "0" : "auto",
                zIndex: 5,
              }}
            >
              <img
                src={publicAsset("/heromobile.png")}
                alt="Dubai real estate app preview"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Left content */}
            <div
              className="relative z-20 flex flex-col w-full"
              style={{
                paddingTop: "clamp(48px, 8vw, 151px)",
                paddingBottom: "clamp(32px, 5vw, 64px)",
                paddingLeft: "clamp(16px, 8vw, 200px)",
                paddingRight: "clamp(16px, 4vw, 48px)",
              }}
            >
              <h1
                className="font-semibold leading-[110%] mb-4 lg:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "var(--color-text)",
                  fontSize: "clamp(1.75rem, 4vw, 4.6875rem)",
                  maxWidth: "clamp(300px, 45vw, 743px)",
                }}
              >
                {t1.rich("title", {
                  highlight: (chunks) => <span style={{ color: "var(--color-primary)" }}>{chunks}</span>
                })}
              </h1>

              <p
                className="leading-[150%] mb-6 lg:mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(0.875rem, 1.3vw, 1.5rem)",
                  color: "var(--color-text)",
                  maxWidth: "clamp(300px, 45vw, 743px)",
                }}
              >
                {t1.rich("subtitle", {
                  bold: (chunks) => <strong style={{ fontWeight: 700 }}>{chunks}</strong>
                })}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/buyer-requirements">
                  <button className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95"
                    style={{
                      color: "var(--color-text)",
                      boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                      padding: "16px 43px",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      height: 50,
                      minWidth: "clamp(140px, 15vw, 256px)",
                    }}>
                    {t1("cta.submitRequirement")}
                  </button>
                </Link>
                <Link href="/list-proparty">
                  <button className="flex items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95 text-white"
                    style={{
                      background: "var(--color-primary)",
                      boxShadow: "0 0 2px 0 rgba(0,0,0,0.35)",
                      padding: "16px 44px",
                      fontSize: "clamp(14px, 1.1vw, 16px)",
                      height: 50,
                      minWidth: "clamp(140px, 15vw, 256px)",
                    }}>
                    {t1("cta.submitListing")}
                  </button>
                </Link>
              </div>

              <div
                className="rounded-2xl w-full 2xl:absolute 2xl:-bottom-10 relative lg:mt-16 mt-10 z-30"
                style={{
                  maxWidth: 705,
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                  backdropFilter: "blur(8px)",
                  padding: "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
                }}
              >
                <p className="leading-[150%] mb-5" style={{ fontSize: "clamp(14px, 1.4vw, 24px)", color: "var(--color-text)" }}>
                  <strong>{t1("registerCard.titleStrong")}</strong> <span>{t1("registerCard.titleLight")}</span>
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                  {t1.raw("registerCard.features").map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon />
                      <span style={{ fontSize: 16, color: "var(--color-text)", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button onClick={() => setregistration_modal(true)} className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-all hover:opacity-90"
                    style={{ color: "var(--color-text)", padding: "16px 32px", height: 52 }}>
                    <LogOutIcon /> {t1("registerCard.preRegister")}
                  </button>
                  <div className="flex flex-col gap-2">
                    <AppStoreButton />
                    <GooglePlayButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div
            className="relative w-full flex"
            style={{
              minHeight: "clamp(600px, 80vh, 929px)",
              backgroundImage: `url('${publicAsset('/herobg2 (2).png')}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute hidden lg:block"
              style={{
                right: locale === "en" ? "0" : "auto",
                left: locale === "ar" ? "0" : "auto",
                top: "5%",
                height: "100%",
                width: "clamp(750px, 55vw, 1200px)",
                zIndex: 5,
              }}
            >
              <img
                src={publicAsset('/herolaptop.png')}
                alt="Dubai real estate app preview"
                className="w-full h-full object-cover object-bottom "
                style={{ transform: locale === "ar" ? "scaleX(-1)" : "scaleX(1)" }}
              />
            </div>

            <div
              className="relative z-20 flex flex-col w-full"
              style={{
                paddingTop: "clamp(48px, 8vw, 151px)",
                paddingBottom: "clamp(32px, 5vw, 64px)",
                paddingLeft: "clamp(16px, 8vw, 200px)",
                paddingRight: "clamp(16px, 4vw, 48px)",
              }}
            >
              <h1
                className="font-semibold leading-[110%] mb-4 lg:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "var(--color-text)",
                  fontSize: "clamp(1.75rem, 3.5vw, 4.6875rem)",
                  maxWidth: "clamp(300px, 42vw, 800px)",
                }}
              >
                {t2.rich("title", {
                  highlight: (chunks) => <span style={{ color: "var(--color-primary)" }}>{chunks}</span>
                })}
              </h1>

              <p
                className="leading-[150%] mb-6 lg:mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(0.875rem, 1.3vw, 1.5rem)",
                  color: "var(--color-text)",
                  maxWidth: "clamp(300px, 45vw, 743px)",
                }}
              >
                {t2.rich("subtitle", {
                  bold: (chunks) => <strong style={{ fontWeight: 700 }}>{chunks}</strong>
                })}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/buyer-requirements">
                  <button className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95"
                    style={{ color: "var(--color-text)", padding: "16px 43px", height: 50, minWidth: "clamp(140px, 15vw, 256px)" }}>
                    {t2("cta.submitRequirement")}
                  </button>
                </Link>
                <Link href="/list-proparty">
                  <button className="flex items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95 text-white"
                    style={{ background: "var(--color-primary)", padding: "16px 44px", height: 50, minWidth: "clamp(140px, 15vw, 256px)" }}>
                    {t2("cta.submitListing")}
                  </button>
                </Link>
              </div>

              <div
                className="rounded-2xl w-full 2xl:absolute 2xl:-bottom-10 relative lg:mt-16 mt-10 z-30"
                style={{
                  maxWidth: 705,
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                  backdropFilter: "blur(8px)",
                  padding: "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
                }}
              >
                <p className="leading-[150%] mb-5" style={{ fontSize: "clamp(14px, 1.4vw, 24px)", color: "var(--color-text)" }}>
                  <strong>{t2("registerCard.titleStrong")}</strong> <span>{t2("registerCard.titleLight")}</span>
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                  {t2.raw("registerCard.features").map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon />
                      <span style={{ fontSize: 16, color: "var(--color-text)", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button onClick={() => setregistration_modal(true)} className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-all hover:opacity-90"
                    style={{ color: "var(--color-text)", padding: "16px 32px", height: 52 }}>
                    <LogOutIcon /> {t2("registerCard.preRegister")}
                  </button>
                  <div className="flex flex-col gap-2">
                    <AppStoreButton />
                    <GooglePlayButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div
            className="relative w-full flex"
            style={{
              minHeight: "clamp(600px, 80vh, 929px)",
              backgroundImage: `url('${publicAsset('/herobg3.png')}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute hidden lg:block"
              style={{
                right: locale === "en" ? "-10%" : "auto",
                left: locale === "ar" ? "-10%" : "auto",
                top: "10%",
                height: "90%",
                width: "clamp(800px, 60vw, 1300px)",
                zIndex: 5,
              }}
            >
              <img
                src={publicAsset('/heromonitor.png')}
                alt="Dubai real estate app preview"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            <div
              className="relative z-20 flex flex-col w-full"
              style={{
                paddingTop: "clamp(48px, 8vw, 151px)",
                paddingBottom: "clamp(32px, 5vw, 64px)",
                paddingLeft: "clamp(16px, 8vw, 200px)",
                paddingRight: "clamp(16px, 4vw, 48px)",
              }}
            >
              <h1
                className="font-semibold leading-[110%] mb-4 lg:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "var(--color-text)",
                  fontSize: "clamp(1.75rem, 3.5vw, 4.6875rem)",
                  maxWidth: "clamp(300px, 42vw, 743px)",
                }}
              >
                {t3.rich("title", {
                  highlight: (chunks) => <span style={{ color: "var(--color-primary)" }}>{chunks}</span>
                })}
              </h1>

              <p
                className="leading-[150%] mb-6 lg:mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(0.875rem, 1.3vw, 1.5rem)",
                  color: "var(--color-text)",
                  maxWidth: "clamp(300px, 45vw, 743px)",
                }}
              >
                {t3.rich("subtitle", {
                  bold: (chunks) => <strong style={{ fontWeight: 700 }}>{chunks}</strong>
                })}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/buyer-requirements">
                  <button className="flex bg-[#7FFFD4] items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95"
                    style={{ color: "var(--color-text)", padding: "16px 43px", height: 50, minWidth: "clamp(140px, 15vw, 256px)" }}>
                    {t3("cta.submitRequirement")}
                  </button>
                </Link>
                <Link href="/list-proparty">
                  <button className="flex items-center justify-center rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-95 text-white"
                    style={{ background: "var(--color-primary)", padding: "16px 44px", height: 50, minWidth: "clamp(140px, 15vw, 256px)" }}>
                    {t3("cta.submitListing")}
                  </button>
                </Link>
              </div>

              <div
                className="rounded-2xl w-full 2xl:absolute 2xl:-bottom-10 relative lg:mt-16 mt-10 z-30"
                style={{
                  maxWidth: 705,
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
                  backdropFilter: "blur(8px)",
                  padding: "clamp(20px, 3.5vw, 41px) clamp(16px, 4.5vw, 65px) clamp(20px, 3.5vw, 52px)",
                }}
              >
                <p className="leading-[150%] mb-5" style={{ fontSize: "clamp(14px, 1.4vw, 24px)", color: "var(--color-text)" }}>
                  <strong>{t3("registerCard.titleStrong")}</strong> <span>{t3("registerCard.titleLight")}</span>
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                  {t3.raw("registerCard.features").map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon />
                      <span style={{ fontSize: 16, color: "var(--color-text)", fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button onClick={() => setregistration_modal(true)} className="bg-[#7FFFD4] flex items-center gap-2 rounded-lg font-semibold transition-all hover:opacity-90"
                    style={{ color: "var(--color-text)", padding: "16px 32px", height: 52 }}>
                    <LogOutIcon /> {t3("registerCard.preRegister")}
                  </button>
                  <div className="flex flex-col gap-2">
                    <AppStoreButton />
                    <GooglePlayButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Styles for Pagination Dot Indicators */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 pointer-events-auto" />

      {/* Navigation Arrows */}
      <button className="hero-prev hidden md:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
          <path d="M9 5L15 12L9 19" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button className="hero-next hidden md:flex absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L15 12L9 19" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {
        registration_modal && (
          <RegistrationModal open={registration_modal} onOpenChange={setregistration_modal} />
        )
      }
    </section>
  );
};

export default HeroSection;
