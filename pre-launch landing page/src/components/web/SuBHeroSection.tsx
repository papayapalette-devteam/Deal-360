'use client'

import { Button } from "@/components/Ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SubHeroSection() {
  const t = useTranslations("subHero");

  const labels = [
    t("label0"),
    t("label1"),
    t("label2"),
    t("label3"),
    t("label4"),
  ];

  return (
    <section className="relative overflow-hidden py-14 lg:py-0">
      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
        <div className="flex flex-col gap-2 sm:gap-4 text-center lg:text-start">
          <div>
            <div
              className="inline-block rounded-full p-[4px]"
              style={{
                background: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
              }}
            >
              <Button
                className="rounded-full h-[48px] px-6 md:px-8 text-sm md:text-base text-[#4B4B4B]"
                style={{
                  background:
                    "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00C274]"></span>
                {t("badge")}
              </Button>
            </div>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-6xl font-medium leading-tight text-[#4B4B4B] dark:text-white">
            {t("headingPart1")}<span className="text-[#F88379]">{t("headingHighlight")}</span>{t("headingPart2")}<span className="text-[#F88379]">{t("headingHighlight2")}</span>
          </h1>

          <p className="text-base sm:text-lg text-[#686868] dark:text-white leading-relaxed max-w-5xl mx-auto lg:mx-0">
            {t("desc")}
          </p>

          <div className="flex flex-wrap gap-4 w-full max-w-[743px] mt-6 justify-center lg:justify-start">
            {labels.map((label) => (
              <div key={label} className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
                    {label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-[320px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[940px] items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/hero44.png"
              alt="App screen"
              width={1000}
              height={1000}
              className="w-full h-full object-cover drop-shadow-[0_0_85px_#B9FFE8] dark:drop-shadow-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
