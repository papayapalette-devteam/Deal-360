"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { RegistrationModal } from "../registration-forms/RegistrationModal";

export default function Rewards() {
  const t = useTranslations("rewards");
  const [registrationModal, setRegistrationModal] = useState(false);

  const LogOutIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
        stroke="#4B4B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="w-full bg-white text-[var(--color-text)] overflow-hidden mt-6 dark:bg-black">
      <div className="w-full px-4 md:px-16 xl:px-32 2xl:px-48 py-12">
        <div className="flex flex-col justify-center items-center gap-6 text-center w-full">
          {/* Heading */}
            <h1 
              className="font-medium leading-[110%] dark:text-white"
              style={{ fontSize: "clamp(34px, 4vw, 64px)" }}
            >
              {t("title_part1")}
              <span className="text-[var(--color-primary)] ">{t("title_part2")}</span>
            </h1>

          {/* Subtitle */}
          <p 
            className="font-normal text-[var(--color-text-secondary)] leading-[150%] max-w-2xl dark:text-white/70"
            style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}
          >
            {t("subtitle")}
          </p>

          {/* Pre-Registration Button */}
          <button
            onClick={() => setRegistrationModal(true)}
            className="flex items-center gap-2 px-8 h-[52px] rounded-lg bg-[#7FFFD4] shadow-[0_0_2px_0_rgba(0,0,0,0.35),0_0_10px_0_rgba(255,255,255,0.25)_inset] text-[var(--color-text)] text-base font-semibold"
          >
            <LogOutIcon />
            {t("button")}
          </button>

          {/* Description */}
          <p 
            className="font-normal text-[var(--color-text-secondary)] leading-[150%] w-full dark:text-white/70"
            style={{ fontSize: "clamp(14px, 1.1vw, 18px)" }}
          >
            {t("description")}
          </p>
        </div>
      </div>

      {/* Registration Modal */}
      {registrationModal && (
        <RegistrationModal open={registrationModal} onOpenChange={setRegistrationModal} />
      )}
    </div>
  );
}