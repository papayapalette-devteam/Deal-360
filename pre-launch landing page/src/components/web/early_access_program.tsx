"use client"

import { publicAsset } from "@/lib/assetUrl";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { RegistrationModal } from "../registration-forms/RegistrationModal";
import { Link } from "@/i18n/navigation";

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIconSm = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke="#4B4B4B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.832 5.41406V10.8295L14.4424 12.6347" stroke="#4B4B4B" strokeWidth="1.80516" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.8344 19.8543C15.8192 19.8543 19.8602 15.8134 19.8602 10.8285C19.8602 5.84372 15.8192 1.80273 10.8344 1.80273C5.84958 1.80273 1.80859 5.84372 1.80859 10.8285C1.80859 15.8134 5.84958 19.8543 10.8344 19.8543Z" stroke="#4B4B4B" strokeWidth="1.80516" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0507 11.7315C18.0507 16.2444 14.8916 18.5009 11.1369 19.8096C10.9403 19.8762 10.7267 19.8731 10.5322 19.8006C6.76841 18.5009 3.60938 16.2444 3.60938 11.7315V5.41346C3.60938 5.17408 3.70447 4.94451 3.87373 4.77524C4.043 4.60597 4.27258 4.51088 4.51196 4.51088C6.31712 4.51088 8.57357 3.42778 10.1441 2.05586C10.3353 1.89249 10.5785 1.80273 10.83 1.80273C11.0815 1.80273 11.3248 1.89249 11.516 2.05586C13.0955 3.43681 15.3429 4.51088 17.1481 4.51088C17.3875 4.51088 17.617 4.60597 17.7863 4.77524C17.9556 4.94451 18.0507 5.17408 18.0507 5.41346V11.7315Z" stroke="#4B4B4B" strokeWidth="1.80516" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14.6667L7.04594 16.7586C7.39993 17.4665 7.57692 17.8205 7.81337 18.1273C8.02319 18.3995 8.26721 18.6435 8.5394 18.8533C8.84615 19.0897 9.20014 19.2667 9.90811 19.6207L12 20.6667L9.90811 21.7126C9.20014 22.0666 8.84615 22.2436 8.5394 22.48C8.26721 22.6899 8.02319 22.9339 7.81337 23.2061C7.57692 23.5128 7.39993 23.8668 7.04594 24.5748L6 26.6667L4.95406 24.5748C4.60007 23.8668 4.42308 23.5128 4.18663 23.2061C3.97681 22.9339 3.73279 22.6899 3.4606 22.48C3.15385 22.2436 2.79986 22.0666 2.09189 21.7126L0 20.6667L2.09189 19.6207C2.79986 19.2667 3.15385 19.0897 3.4606 18.8533C3.73279 18.6435 3.97681 18.3995 4.18663 18.1273C4.42308 17.8205 4.60007 17.4665 4.95406 16.7586L6 14.6667Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.3333 0L18.9048 4.08589C19.2808 5.06353 19.4689 5.55235 19.7612 5.96352C20.0203 6.32794 20.3387 6.64633 20.7031 6.90545C21.1143 7.19781 21.6031 7.38582 22.5808 7.76184L26.6667 9.33333L22.5808 10.9048C21.6031 11.2808 21.1143 11.4689 20.7031 11.7612C20.3387 12.0203 20.0203 12.3387 19.7612 12.7031C19.4689 13.1143 19.2808 13.6031 18.9048 14.5808L17.3333 18.6667L15.7618 14.5808C15.3858 13.6031 15.1978 13.1143 14.9054 12.7031C14.6463 12.3387 14.3279 12.0203 13.9635 11.7612C13.5524 11.4689 13.0635 11.2808 12.0859 10.9048L8 9.33333L12.0859 7.76184C13.0635 7.38582 13.5523 7.19781 13.9635 6.90545C14.3279 6.64633 14.6463 6.32794 14.9054 5.96352C15.1978 5.55235 15.3858 5.06353 15.7618 4.08589L17.3333 0Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LogOutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconCircle = "w-20 h-20 rounded-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex items-center justify-center flex-shrink-0";

export default function EarlyAccessProgram() {
  const t = useTranslations("earlyAccessProgram");
  const [registration_modal, setregistration_modal] = useState(false);

  const earlyAccessItems = [
    t("cards.earlyAccessMeans.items.0"),
    t("cards.earlyAccessMeans.items.1"),
    t("cards.earlyAccessMeans.items.2"),
    t("cards.earlyAccessMeans.items.3"),
  ];

  const whyMattersItems = [
    t("cards.whyItMatters.items.0"),
    t("cards.whyItMatters.items.1"),
    t("cards.whyItMatters.items.2"),
    t("cards.whyItMatters.items.3"),
  ];

  return (
    <div className="font-poppins bg-white min-h-screen overflow-x-hidden pb-4 w-full dark:bg-black">

      {/* ===== HEADER SECTION ===== */}
      <div  className="w-full px-6 sm:px-10 lg:px-16 xl:px-32 pt-12 lg:pt-16 pb-6 text-center">

        {/* Title */}
        <h1 
          className="w-[359.563px] md:w-full font-semibold sm:font-medium leading-[1.1] tracking-[-0.05em]"
          style={{ fontSize: "clamp(34px, 4vw, 64px)" }}
        >
          <span className="text-[var(--color-text)] text-[var(--color-text)] dark:text-white">{t("title.part1")} </span>
          <span className="text-[#F88379]">{t("title.highlight")}</span>
          <span className="text-[var(--color-text)] text-[var(--color-text)] dark:text-white"> {t("title.part2")}</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="mt-5 lg:mt-6 text-[var(--color-text)] text-[var(--color-text)] dark:text-white/70 leading-[150%] max-w-[752px] mx-auto"
          style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
        >
          {t("subtitle")}
        </p>

        {/* Divider - desktop only */}
        <hr className="hidden lg:block mt-8 border-[#B6B6B6] max-w-[1465px] mx-auto" />

        {/* Description */}
        <p 
          className="mt-5 lg:mt-7 text-[var(--color-text)] text-[var(--color-text)] dark:text-white/70 leading-[150%] max-w-[1339px] mx-auto"
          style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
        >
          {t("description")}
        </p>

        {/* MOBILE BUTTONS (stacked, centered) */}
        <div className="lg:hidden flex flex-col items-center gap-3 mt-8">
          <Link href="/buyer-requirements">
            <button className="w-[191px] h-[50px] rounded-lg bg-[#7FFFD4] shadow-[0_0_2px_0_rgba(0,0,0,0.35)] text-[var(--color-text)] text-sm font-semibold">
              {t("submitRequirement")}
            </button>
          </Link>
          <Link href="/list-proparty">
            <button className="w-[191px] h-[50px] rounded-lg bg-[#F88379] shadow-[0_0_2px_0_rgba(0,0,0,0.35)] text-white text-sm font-semibold">
              {t("submitListingIntent")}
            </button>
          </Link>
        </div>

        {/* DESKTOP BUTTONS (inline row) */}
        <div className="hidden lg:flex items-center justify-center gap-6 mt-10 flex-wrap">
          <button onClick={() => setregistration_modal(true)} className="flex items-center gap-2 px-8 h-[52px] rounded-lg bg-[#7FFFD4] shadow-[0_0_2px_0_rgba(0,0,0,0.35),0_0_10px_0_rgba(255,255,255,0.25)_inset] text-[var(--color-text)] text-base font-semibold">
            <LogOutIcon />
            {t("preRegistration")}
          </button>
          <Link href="/list-proparty">
            <button className="px-11 h-[50px] rounded-lg bg-[#F88379] shadow-[0_0_2px_0_rgba(0,0,0,0.35)] text-white text-base font-semibold">
              {t("submitListingIntent")}
            </button>
          </Link>
          <Link href="/buyer-requirements">
            <button className="px-11 h-[50px] rounded-lg bg-[#7FFFD4] shadow-[0_0_2px_0_rgba(0,0,0,0.35)] text-[var(--color-text)] text-base font-semibold">
              {t("submitRequirement")}
            </button>
          </Link>
        </div>
      </div>

      {/* ===== BACKGROUND IMAGE + CARDS SECTION ===== */}
      <div className="relative rounded-b-[30px] lg:rounded-b-none lg:rounded-t-[50px] overflow-hidden mt-8 lg:mt-0">

        {/* Background image */}
        <img
          src={publicAsset("earlyaccessprogram.png")}
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Mobile gradient overlay (white fade from top) */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none z-10" style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255,255,255,0.00) 53.85%)' }} />

        {/* Inner content wrapper */}
        <div className="relative z-20">

          {/* ===== MOBILE LAYOUT ===== */}
          <div className="lg:hidden px-0 pt-6 pb-12">

            {/* Register Now section */}
            <div className="flex flex-col items-center mb-6 px-6">
              <p className="text-[var(--color-text)] font-bold text-base leading-[26px]">{t("mobileRegisterNow")}</p>
              <button onClick={() => setregistration_modal(true)} className="mt-2 flex items-center gap-2 w-[191px] h-[52px] rounded-lg bg-[#7FFFD4] shadow-[0_0_2px_0_rgba(0,0,0,0.35),0_0_10px_0_rgba(255,255,255,0.25)_inset] text-[var(--color-text)] text-sm font-semibold justify-center">
                <LogOutIcon />
                {t("preRegistration")}
              </button>
            </div>

            {/* Mobile Cards - staggered layout */}
            <div className="flex flex-col gap-4 overflow-hidden">

              {/* Card 1: No payment upfront — RIGHT EDGE (rounded left corners, extends right) */}
              <div className="ml-[18%] rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none bg-[#7FFFD4] py-6 px-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-4">
                  <ClockIcon />
                </div>
                <h3 
                  className="text-[var(--color-text)] font-medium leading-8 mb-2"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                >
                  {t("cards.noPayment.title")}
                </h3>
                <p 
                  className="text-[var(--color-text)] leading-4"
                  style={{ fontSize: "clamp(11px, 3vw, 13px)" }}
                >
                  {t("cards.noPayment.body")}
                </p>
              </div>

              {/* Card 2: Limited & verified — LEFT EDGE (rounded right corners, extends left) */}
              <div className="mr-[18%] rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none bg-[#F88379] py-6 px-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-4">
                  <ShieldIcon />
                </div>
                <h3 
                  className="text-white font-medium leading-8 mb-2"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                >
                  {t("cards.limitedVerified.title")}
                </h3>
                <p 
                  className="text-white leading-4"
                  style={{ fontSize: "clamp(11px, 3vw, 13px)" }}
                >
                  {t("cards.limitedVerified.body")}
                </p>
              </div>

              {/* Card 3: What Early Access Means — RIGHT EDGE */}
              <div className="ml-[18%] rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none bg-white py-5 px-6">
                <h3 
                  className="text-[var(--color-text)] font-medium leading-8 mb-2 text-center"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                >
                  {t("cards.earlyAccessMeans.title")}
                </h3>
                <p 
                  className="text-[var(--color-text)] leading-4 text-center mb-4"
                  style={{ fontSize: "clamp(11px, 3vw, 13px)" }}
                >
                  {t("cards.earlyAccessMeans.body")}
                </p>
                <div className="flex flex-col gap-3">
                  {earlyAccessItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0"><CheckIconSm /></div>
                      <span 
                        className="text-[var(--color-text)] leading-5"
                        style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Shape the platform — LEFT EDGE */}
              <div className="mr-[18%] rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none bg-[#7FFFD4] py-6 px-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-4">
                  <SparkleIcon />
                </div>
                <h3 
                  className="text-[var(--color-text)] font-medium leading-8 mb-2"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                >
                  {t("cards.shapePlatform.title")}
                </h3>
                <p 
                  className="text-[var(--color-text)] leading-4"
                  style={{ fontSize: "clamp(11px, 3vw, 13px)" }}
                >
                  {t("cards.shapePlatform.body")}
                </p>
              </div>

              {/* Card 5: Why It Matters — RIGHT EDGE */}
              <div className="ml-[18%] rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none bg-white py-5 px-6 mb-4">
                <h3 
                  className="text-[var(--color-text)] font-medium leading-8 mb-2 text-center"
                  style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                >
                  {t("cards.whyItMatters.title")}
                </h3>
                <p 
                  className="text-[var(--color-text)] leading-4 text-center mb-4"
                  style={{ fontSize: "clamp(11px, 3vw, 13px)" }}
                >
                  {t("cards.whyItMatters.body")}
                </p>
                <div className="flex flex-col gap-3">
                  {whyMattersItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0"><CheckIconSm /></div>
                      <span 
                        className="text-[var(--color-text)] leading-5"
                        style={{ fontSize: "clamp(12px, 3.5vw, 14px)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ===== DESKTOP LAYOUT ===== */}
          <div className="hidden lg:block px-6 xl:px-[10.6%] pt-20 pb-16">
            <div className="flex gap-6">

              {/* LEFT BLOCK (~49%) */}
              <div className="flex flex-col gap-6 flex-[49]">

                {/* Top row: No payment upfront + Limited & verified */}
                <div className="flex gap-6">

                  {/* No payment upfront */}
                  <div className="flex-1 h-[280px] rounded-2xl bg-[#7FFFD4] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex flex-col items-center justify-center px-6 text-center">
                    <div className={iconCircle}>
                      <ClockIcon />
                    </div>
                    <h3 
                      className="mt-5 text-[var(--color-text)] font-medium leading-[122%]"
                      style={{ fontSize: "clamp(20px, 1.5vw, 24px)" }}
                    >
                      {t("cards.noPayment.title")}
                    </h3>
                    <p 
                      className="mt-3 text-[var(--color-text)] leading-[150%]"
                      style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                    >
                      {t("cards.noPayment.body")}
                    </p>
                  </div>

                  {/* Limited & verified */}
                  <div className="flex-1 h-[280px] rounded-2xl bg-[#F88379] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] opacity-90 flex flex-col items-center justify-center px-6 text-center">
                    <div className={iconCircle}>
                      <ShieldIcon />
                    </div>
                    <h3 
                      className="mt-5 text-white font-medium leading-[122%]"
                      style={{ fontSize: "clamp(20px, 1.5vw, 24px)" }}
                    >
                      {t("cards.limitedVerified.title")}
                    </h3>
                    <p 
                      className="mt-3 text-white leading-[150%]"
                      style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                    >
                      {t("cards.limitedVerified.body")}
                    </p>
                  </div>
                </div>

                {/* What Early Access Means */}
                <div className="h-[430px] rounded-2xl border border-[#B6B6B6] bg-white overflow-hidden px-10 py-10 flex flex-col">
                    <h3 
                      className="text-[var(--color-text)] font-medium leading-[110%]"
                      style={{ fontSize: "clamp(20px, 1.5vw, 24px)" }}
                    >
                      {t("cards.earlyAccessMeans.title")}
                    </h3>
                    <p 
                      className="mt-4 text-[var(--color-text)] leading-[150%] max-w-[574px]"
                      style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                    >
                      {t("cards.earlyAccessMeans.body")}
                    </p>
                    <div className="mt-6 flex flex-col gap-4">
                      {earlyAccessItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-[2px]"><CheckIcon /></div>
                          <span 
                            className="text-[#68706A] font-medium leading-[110%]"
                            style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>

              {/* RIGHT BLOCK (~51%) */}
              <div className="flex flex-col gap-6 flex-[51]">

                {/* Why It Matters */}
                <div className="h-[430px] rounded-2xl border border-[#B6B6B6] bg-white overflow-hidden px-10 py-10 flex flex-col">
                    <h3 
                      className="text-[var(--color-text)] font-medium leading-[110%]"
                      style={{ fontSize: "clamp(20px, 1.5vw, 24px)" }}
                    >
                      {t("cards.whyItMatters.title")}
                    </h3>
                    <p 
                      className="mt-4 text-[var(--color-text)] leading-[150%] max-w-[552px]"
                      style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                    >
                      {t("cards.whyItMatters.body")}
                    </p>
                    <div className="mt-6 flex flex-col gap-6">
                      {whyMattersItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="flex-shrink-0 mt-[2px]"><CheckIcon /></div>
                          <span 
                            className="text-[#68706A] font-medium leading-[110%]"
                            style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                </div>

                {/* Shape the platform */}
                <div className="h-[280px] rounded-2xl bg-[#7FFFD4] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex flex-col items-center justify-center px-10 text-center">
                  <div className={iconCircle}>
                    <SparkleIcon />
                  </div>
                    <h3 
                      className="mt-5 text-[var(--color-text)] font-medium leading-[110%]"
                      style={{ fontSize: "clamp(20px, 1.5vw, 24px)" }}
                    >
                      {t("cards.shapePlatform.title")}
                    </h3>
                    <p 
                      className="mt-3 text-[var(--color-text)] leading-[150%] max-w-[508px]"
                      style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                    >
                      {t("cards.shapePlatform.body")}
                    </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {
        registration_modal && (
          <RegistrationModal open={registration_modal} onOpenChange={setregistration_modal} />
        )
      }

    </div>
  );
}
