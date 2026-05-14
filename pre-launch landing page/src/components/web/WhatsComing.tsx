"use client";

import React from "react";
import { publicAsset } from "@/lib/assetUrl";
import { useTranslations } from "next-intl";

/* ================= TYPES ================= */

type Feature = {
  title: string;
  description: string;
  variant: "mint" | "coral";
  icon: React.ReactNode;
};

/* ================= MAIN COMPONENT ================= */

export default function WhatsComing() {

   const t = useTranslations("whatsComing");

  const features: Feature[] = [
    {
      title: "card1Title",
      description: "card1Desc",
      variant: "mint",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M22.604 43.2297C23.0468 43.4881 23.2682 43.6172 23.5806 43.6842C23.8231 43.7362 24.1769 43.7362 24.4194 43.6842C24.7318 43.6172 24.9532 43.4881 25.396 43.2297C29.2921 40.9568 40 33.8169 40 24V14.4352C40 12.8362 40 12.0367 39.7385 11.3494C39.5075 10.7423 39.132 10.2005 38.6447 9.77105C38.093 9.28486 37.3444 9.00414 35.8472 8.44268L25.1236 4.42133C24.7078 4.26541 24.4999 4.18745 24.286 4.15655C24.0963 4.12913 23.9037 4.12913 23.714 4.15655C23.5001 4.18745 23.2922 4.26541 22.8764 4.42133L12.1528 8.44268C10.6556 9.00414 9.90699 9.28486 9.35532 9.77105C8.86797 10.2005 8.49255 10.7423 8.26152 11.3494C8 12.0367 8 12.8362 8 14.4352V24C8 33.8169 18.7079 40.9568 22.604 43.2297Z" stroke="#4B4B4B" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "card2Title",
      description: "card2Desc",
      variant: "coral",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#4B4B4B" strokeWidth="2" />
          <circle cx="24" cy="24" r="12" stroke="#4B4B4B" strokeWidth="2" />
          <circle cx="24" cy="24" r="4" stroke="#4B4B4B" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "card3Title",
      description: "card3Desc",
      variant: "mint",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M12.5 18.3H7.6C6.7 18.3 6.2 18.3 5.9 18.5C5.6 18.7 5.3 18.9 5.2 19.2C5 19.6 5 20 5 21V35M27.5 18.3H32.3C33.2 18.3 33.7 18.3 34.1 18.5C34.4 18.7 34.7 18.9 34.8 19.2C35 19.6 35 20 35 21V35M27.5 35V10.3C27.5 8.4 27.5 7.5 27.1 6.8C26.8 6.2 26.3 5.7 25.7 5.3C25 5 24 5 22.1 5H17.8C15.9 5 15 5 14.3 5.3C13.7 5.7 13.2 6.2 12.8 6.8C12.5 7.5 12.5 8.4 12.5 10.3V35M36.6 35H3.3" stroke="#4B4B4B" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "card4Title",
      description: "card4Desc",
      variant: "coral",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M34 20V16C34 10.4 29.5 6 24 6C18.4 6 14 10.4 14 16V20M24 29V33M17.6 42H30.4C33.7 42 35.4 42 36.7 41.3C37.8 40.7 38.7 39.8 39.3 38.7C40 37.4 40 35.7 40 32.4V29.6C40 26.3 40 24.6 39.3 23.3C38.7 22.1 37.8 21.2 36.7 20.6C35.4 20 33.7 20 30.4 20H17.6C14.3 20 12.6 20 11.3 20.6C10.1 21.2 9.2 22.1 8.6 23.3C8 24.6 8 26.3 8 29.6V32.4C8 35.7 8 37.4 8.6 38.7C9.2 39.8 10.1 40.7 11.3 41.3C12.6 42 14.3 42 17.6 42Z" stroke="#4B4B4B" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white font-poppins dark:bg-black">
      <section className="overflow-hidden">

        {/* HEADING */}
        <div className="text-center px-4 pt-12">
        <h2 
        className="font-semibold md:font-medium text-[#4B4B4B] dark:text-white mb-2"
        style={{ fontSize: "clamp(34px, 4vw, 64px)", lineHeight: "1.2" }}
      >
          {t('headingPart1')}<span className="text-[#F88379]">{t('headingHighlight')}</span>{t('headingPart2')}<span className="text-[#F88379]">{t('headingHighlight2')}</span>
        </h2>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center md:pt-4 md:pb-20 2xl:pt-6 2xl:pb:30">

          {/* LEFT IMAGE */}
          <div className="w-[55%] relative h-[680px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -left-10">
              <div className="relative w-full h-full pb-[72%]">
                <img
                  src={publicAsset("whatcoming.png")}
                  className="absolute inset-0 w-full h-full"
                />
      
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6 pr-16">
            {features.map((f, i) => (
              <DesktopCard key={i} {...f} t={t} />
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden mt-6"   style={{
    backgroundImage: `url(${publicAsset("whatscomingmobilebg.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
          <div className="flex flex-col gap-8">
            {features.map((f, i) => (
              <div key={i} className={`${i % 2 ? "translate-x-16" : "-translate-x-6"}`}>
                <MobileCard {...f}  t={t}/>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}

/* ================= CARDS ================= */
function DesktopCard({
  title,
  description,
  variant,
  icon,
  t,
}: Feature & { t: any }) {
  const isMint = variant === "mint";

  return (
    <div className={`
      w-full max-w-[316px]
      min-h-[280px]
      p-5 sm:p-6
      rounded-2xl
      flex flex-col items-center text-center
      ${isMint ? "bg-[#7FFFD4]" : "bg-[#F88379]"}
    `}>
      
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 
        className={`font-semibold ${isMint ? "text-[#4B4B4B]" : "text-white"}`}
        style={{ fontSize: "clamp(18px, 1.5vw, 24px)" }}
      >
        {t(title)}
      </h3>

      <p 
        className={`mt-2 ${isMint ? "text-[#4B4B4B]" : "text-white"}`}
        style={{ fontSize: "clamp(14px, 1vw, 16px)" }}
      >
        {t(description)}
      </p>
    </div>
  );
}

function MobileCard({
  title,
  description,
  variant,
  icon,
  t,
}: Feature & { t: any }) {
  const isMint = variant === "mint";

  return (
    <div
      className={`
        w-[70%]
        p-5 sm:p-6
        rounded-2xl
        flex flex-col items-center text-center
        overflow-hidden
        ${isMint ? "bg-[#7FFFD4] self-start" : "bg-[#F88379] self-end"}
        ${isMint ? "ml-[0%]" : "ml-[20%]"}
      `}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3
        className={`font-semibold ${isMint ? "text-[#4B4B4B]" : "text-white"}`}
        style={{ fontSize: "clamp(18px, 4.5vw, 24px)" }}
      >
        {t(title)}
      </h3>

      <p
        className={`mt-2 ${isMint ? "text-[#4B4B4B]" : "text-white"}`}
        style={{ fontSize: "clamp(14px, 3.5vw, 16px)" }}
      >
        {t(description)}
      </p>
    </div>
  );
}