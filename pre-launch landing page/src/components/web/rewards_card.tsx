'use client';

import { publicAsset } from "@/lib/assetUrl";
import { useTranslations } from "next-intl";

const CheckIcon = () => (
  <svg width="16" height="16" fill="none" className="mt-0.5 shrink-0">
    <path
      d="M13 4L6 11L3 8"
      stroke="#7FFFD4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-white"
    />
  </svg>
);

const CheckIcon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.3307 4L5.9974 11.3333L2.66406 8"
      stroke="#F88379"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-white/70"
    />
  </svg>
);

export default function RewardsCard() {
  const t = useTranslations('rewardsCard');

  const card1Steps = t.raw('card1.steps') as string[];
  const card1Rewards = t.raw('card1.rewards') as string[];
  const card2Steps = t.raw('card2.steps') as string[];
  const card2Rewards = t.raw('card2.rewards') as string[];

  return (
   <div className="relative px-4 md:px-16 xl:px-32 2xl:px-48 py-0 overflow-hidden bg-white">

      {/* Background Image (only md and above) */}
      <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat mb-4"
        style={{ backgroundImage: `url('${publicAsset('/earlyaccess.png')}')` }} />

      <div className="hidden md:block absolute inset-0 bg-gray-200/50" />

      <div className="relative md:bg-transparent">

        <div className="w-full mx-auto rounded-2xl p-10">
          <div className="flex flex-wrap justify-center gap-12">

            {/* ===================== CARD 1 ===================== */}
            <div className="relative w-full sm:w-[45%] flex flex-col">
              <div className="flex flex-col h-full rounded-2xl overflow-hidden 
                              bg-white dark:bg-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                <div className="flex flex-col px-6 pb-6 pt-14 gap-4 flex-1">

                  <img src={publicAsset('/reward1.png')} className="h-[80px] w-[80px]" alt="Reward" />

                  <h3 
                    className="font-medium mt-2"
                    style={{ fontSize: "clamp(18px, 1.5vw, 24px)" }}
                  >
                    {t('card1.title')}
                  </h3>

                  <p 
                    className="mt-2 text-gray-900 dark:text-white/70"
                    style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    {t('card1.description')}
                  </p>

                  <h3 
                    className="font-medium mt-4"
                    style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
                  >
                    {t('card1.howItWorks')}
                  </h3>

                  <div className="flex flex-col gap-2 mt-2">
                    {card1Steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-3 text-gray-900 dark:text-white/70"
                        style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                      >
                        <CheckIcon1 />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <h3 
                    className="flex items-center gap-2 font-medium mt-4"
                    style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
                  >
                    <img src={publicAsset('/reward1.png')} className="h-[24px] w-[24px]" alt="Reward Icon" />
                    {t('card1.rewardsTitle')}
                  </h3>

                  <div className="flex flex-col gap-2 mt-2">
                    {card1Rewards.map((reward, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-3 text-gray-900 dark:text-white/70"
                        style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                      >
                        <CheckIcon />
                        <span>{reward}</span>
                      </div>
                    ))}
                  </div>

                  <p 
                    className="mt-2 text-gray-900 dark:text-white/50"
                    style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                  >
                    {t('card1.footerNote')}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 mt-auto m-4 px-4 py-4 rounded-sm 
                                bg-[#7FFFD4] dark:bg-[#5EEAD4]">
                  <span 
                    className="font-medium whitespace-nowrap text-black dark:text-gray-900"
                    style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
                  >
                    {t('card1.buttonText')}
                  </span>
                </div>
              </div>
            </div>

            {/* ===================== CARD 2 ===================== */}
            <div className="relative w-full sm:w-[45%] flex flex-col">
              <div className="flex flex-col h-full rounded-2xl overflow-hidden 
                              bg-white dark:bg-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                <div className="flex flex-col px-6 pb-6 pt-14 gap-4 flex-1">

                  <img src={publicAsset('/reward2.png')} className="h-[80px] w-[80px]" alt="Reward" />

                  <h3 
                    className="font-medium leading-[110%] mt-2"
                    style={{ fontSize: "clamp(18px, 1.5vw, 24px)" }}
                  >
                    {t('card2.title')}
                  </h3>

                  <p 
                    className="leading-[150%] mt-2 text-gray-900 dark:text-white/70"
                    style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                  >
                    {t('card2.description')}
                  </p>

                  <h3 
                    className="font-medium leading-[110%] mt-4"
                    style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
                  >
                    {t('card2.howItWorks')}
                  </h3>

                  <div className="flex flex-col gap-2 mt-2">
                    {card2Steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-3 items-start text-gray-900 dark:text-white/70"
                        style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                      >
                        <CheckIcon />
                        <span>{step}</span>
                      </div>
                    ))}
                    <p 
                      className="leading-[150%] mt-2 text-gray-900 dark:text-white/50"
                      style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                    >
                      {t('card2.stepsNote')}
                    </p>
                  </div>

                  <h3 
                    className="flex items-center gap-2 font-medium leading-[110%] mt-4"
                    style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
                  >
                    <img src={publicAsset('/reward2.png')} className="h-[24px] w-[24px]" alt="Reward Icon" />
                    <span>{t('card2.rewardsTitle')}</span>
                  </h3>

                  <div className="flex flex-col gap-2 mt-2">
                    {card2Rewards.map((reward, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-3 items-start text-gray-900 dark:text-white/70"
                        style={{ fontSize: "clamp(13px, 1vw, 15px)" }}
                      >
                        <CheckIcon />
                        <span>{reward}</span>
                      </div>
                    ))}
                  </div>

                  <h3 
                    className="font-medium leading-[110%] mt-4 text-gray-900 dark:text-white/70"
                    style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
                  >
                    {t('card2.termsTitle')}
                  </h3>

                  <p 
                    className="leading-[150%] mt-2 text-[#939393] dark:text-white/50"
                    style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                  >
                    {t('card2.terms')}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 mt-auto m-4 px-4 py-4 rounded-md 
                                bg-[#F88379] dark:bg-[#F87171]">
                  <span 
                    className="font-medium whitespace-nowrap text-white dark:text-gray-900"
                    style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
                  >
                    {t('card2.buttonText')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}