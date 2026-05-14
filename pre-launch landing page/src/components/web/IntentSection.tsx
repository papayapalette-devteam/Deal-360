"use client";

import Image from "next/image";
import { Button } from "../Ui/button";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PropertyIntent() {
  const t = useTranslations("intent");

  const intentPoints = [
    t("intentPoint0"),
    t("intentPoint1"),
    t("intentPoint2"),
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <div className="relative mx-auto lg:mx-0 w-full max-w-[560px] ">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/newphon2.png"
                alt="Intent feature preview"
                fill
                className="object-contain"
                priority
              />

            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-start">
          <div>
            <div
              className="inline-block rounded-[999px] p-[3px]"
              style={{
                background: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
              }}
            >
              <Button
                className="h-[40px] rounded-[999px] px-5 text-sm text-[#F88379]"
                style={{
                  background:
                    "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#00C274]" />
                {t("badge")}
              </Button>
            </div>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            {t("headingPart1")}<span className="text-[#F88379]">{t("headingHighlight")}</span>{t("headingPart2")}
          </h2>

          <div className="space-y-3">
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
              {t("desc1")}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
              {t("desc2")}
            </p>
          </div>

          <ul className="space-y-5 pt-1 text-start">
            {intentPoints.map((point) => (
              <li
                key={point}
                className="flex items-center justify-start gap-3 text-[#4B4B4B] dark:text-white text-base sm:text-xl font-medium"
              >
                <span className="h-9 w-9 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-[#F88379]" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Link
              href="/buyer-requirements"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-[#7FFFD4] text-[#4B4B4B] font-medium rounded-lg hover:bg-[#7FFFD4]/90 transition-colors"
            >
              {t("postBuyerRequirements")}
            </Link>
            <Link
              href="/list-proparty"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-[#F88379] text-white font-medium rounded-lg hover:bg-[#e06e65] transition-colors"
            >
              {t("submitListingIntent")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
