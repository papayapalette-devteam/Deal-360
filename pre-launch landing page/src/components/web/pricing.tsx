"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("plansbuilt");

  return (
    <div className="w-full bg-white text-[var(--color-text)] overflow-hidden mt-10 pt-20 dark:bg-black">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">

        <div className="flex flex-col justify-center items-center gap-6 text-center w-full">

          {/* Heading */}
          <h1 
            className="font-medium leading-[110%] md:max-w-3xl 2xl:max-w-4xl break-words text-[var(--color-text)] dark:text-white"
            style={{ fontSize: "clamp(34px, 4vw, 64px)" }}
          >
            <span>{t("heading1")} </span>
            <span className="text-[var(--color-primary)]">{t("headingHighlight")}</span>
            <span> {t("heading2")}</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="font-normal text-[var(--color-text-secondary)] text-[var(--color-text)] dark:text-white/70 leading-[150%] max-w-full md:max-w-3xl break-words 2xl:max-w-5xl "
            style={{ fontSize: "clamp(16px, 1.2vw, 20px)" }}
          >
            {t("subtitle")}
          </p>

          {/* Early registration */}
          <h2 
            className="font-medium leading-[110%] text-[var(--color-primary)] break-words"
            style={{ fontSize: "clamp(24px, 2vw, 32px)" }}
          >
            {t("earlyRegistrationOpen")}
          </h2>

        </div>
      </div>
    </div>
  );
}