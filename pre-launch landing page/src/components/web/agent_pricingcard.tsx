"use client";

import { useState } from "react";
import { RegistrationModal } from "../registration-forms/RegistrationModal";
import { useTranslations } from "next-intl";

export default function AgentPricingSection() {
  const t = useTranslations("agentPricing");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Agent Lite",
      freeLabel: "Free",
      description:
        "Essential tools to get started with basic listings and lead access.",
      earlyRate: null,
      standardRate: null,
      monthlyCredits: 0,
      ctaLabel: "Free Access",
      ctaDesc: "Upgrade to unlock credits and priority visibility",
      isMostPopular: false,
      features: [
        "Basic agent profile",
        "Low search visibility",
        "Unlimited standard listings",
        "SmartLink & QR referrals",
        "Requirement leads access",
        "Listing Intent leads access",
        "Unlock leads: 79 AED each",
      ],
    },
    {
      name: "Agent Basic",
      freeLabel: null,
      description: "Enhanced profile and tools for growing agents.",
      earlyRate: "AED 149",
      standardRate: "AED 299",
      monthlyCredits: 20,
      ctaLabel: "No Payment Upfront",
      ctaDesc: "Annual options available",
      isMostPopular: false,
      features: [
        "Enhanced agent profile",
        "Medium search visibility",
        "Unlimited standard listings",
        "SmartLink & QR referrals",
        "Requirement & Listing Intent leads",
        "Proposal tools",
        "Agent-to-agent (A2A) access",
        "Unlock: 1 credit or 79 AED per lead",
        "Verified agent status",
        "Messaging and CRM-lite tools",
      ],
    },
    {
      name: "Agent Plus",
      freeLabel: null,
      description:
        "Verified status and priority placement for serious professionals.",
      earlyRate: "AED 299",
      standardRate: "AED 599",
      monthlyCredits: 50,
      ctaLabel: "No Payment Upfront",
      ctaDesc: "Annual options available",
      isMostPopular: true,
      features: [
        "Verified Agent badge (approval required)",
        "High search visibility",
        "Priority profile placement",
        "Unlimited standard listings",
        "Smart Link & QR referrals",
        "Requirement & Listing Intent leads",
        "Proposal tools",
        "A2A access",
        "Property Manager",
        "Unlock: 1 credit or 79 AED per lead",
      ],
    },
    {
      name: "Agent Elite",
      freeLabel: null,
      description:
        "Maximum visibility and exclusive access for top performers.",
      earlyRate: "AED 499",
      standardRate: "AED 999",
      monthlyCredits: 100,
      ctaLabel: "No Payment Upfront",
      ctaDesc: "Annual options available",
      isMostPopular: false,
      features: [
        "Elite profile marker",
        "Top search visibility",
        "Priority ranking in selected areas",
        "Unlimited standard listings",
        "SmartLink & QR referrals",
        "Requirement & Listing Intent leads",
        "Proposal tools",
        "A2A access",
        "Property Manager",
        "Early access to new features",
      ],
    },
  ];

  const CheckIcon = () => (
    <svg width="16" height="16" fill="none" className="mt-0.5">
      <path
        d="M13 4L6 11L3 8"
        stroke="#7FFFD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] dark:bg-black dark:text-white overflow-visible mt-10">
      <div className="max-w-[100%] mx-auto bg-white dark:bg-black rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]">

        {/* Title */}
<div className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] 2xl:min-h-[135px] 
  bg-gradient-to-r from-[#7FFFD4] to-[#E5FFF6] dark:bg-none dark:from-black dark:to-black">
          <svg className="w-[36.192px] h-[37.5px] sm:w-[43px] sm:h-[45px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 43 45" fill="none">
            <path d="M26.7437 44.361L9.20926 39.2499V42.236H0V23.4629H14.6727L31.6131 29.663V33.3813H42.8139V39.4018L26.7437 44.361ZM2.30001 39.9337H6.90464V25.7652H2.30001V39.9337ZM26.624 41.9183L40.4563 37.7027V35.6836H24.522L17.3733 33.3536L18.133 31.1503L24.8696 33.3813H29.3108V31.2631L14.3089 25.7652H9.20926V36.8347L26.624 41.9183ZM38.2092 27.8903V11.774L25.5465 2.91934L12.8838 11.774V17.9719H10.5814V10.6712L25.5465 0L40.5115 10.6689V27.8903H38.2092ZM26.9187 13.3235H28.7789V11.4632H26.9187V13.3235ZM22.314 13.3235H24.1743V11.4632H22.314V13.3235ZM26.9187 17.9281H28.7789V16.0679H26.9187V17.9281ZM22.314 17.9281H24.1743V16.0679H22.314V17.9281Z" fill="#4B4B4B"/>
          </svg>
          <h1 
            className="font-medium dark:text-white"
            style={{ fontSize: "clamp(24px, 2vw, 40px)" }}
          >
            {t("title")}
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-4 mt-6">
          {plans.map((plan) => (
            <div key={plan.name} className="relative flex flex-col">

              {/* Most Popular Badge */}
              {plan.isMostPopular && (
                <div className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-[#7FFFD4] dark:bg-[#0f766e] rounded text-xs font-medium -top-3">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div
                className={`flex flex-col h-full rounded-2xl overflow-hidden border
                  ${plan.isMostPopular
                    ? "border-[#7FFFD4] dark:border-[#0f766e] bg-[#7FFFD4]/20 dark:bg-[#0f2f2a]"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
                  }
                `}
              >
                <div className="flex flex-col flex-1 px-6 pb-6 pt-12">

                  {/* Header */}
                  <div className="mb-6 min-h-[140px]">
                    <h3 
                      className="font-medium dark:text-white mb-2"
                      style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
                    >
                      {plan.name}
                    </h3>

                    {plan.freeLabel ? (
                      <>
                        <div 
                          className="font-bold dark:text-white"
                          style={{ fontSize: "clamp(22px, 1.8vw, 26px)" }}
                        >
                          {plan.freeLabel}
                        </div>
                        <p 
                          className="dark:text-white/70"
                          style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                        >
                          {plan.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <p 
                          className="dark:text-white/70"
                          style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                        >
                          Early-registration rate:
                        </p>
                        <div className="text-base">
                          <span 
                            className="font-bold dark:text-white"
                            style={{ fontSize: "clamp(22px, 1.8vw, 26px)" }}
                          >
                            {plan.earlyRate}
                          </span> /mo
                        </div>
                        <p 
                          className="line-through dark:text-white/70"
                          style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                        >
                          {plan.standardRate}
                        </p>
                        <p 
                          className="mt-1 dark:text-white/70"
                          style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                        >
                          {plan.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Credits */}
                  <div 
                    className="flex justify-between px-4 py-4 rounded-lg bg-[#FFEAE8] dark:bg-[#1a1a1a] mb-5 font-medium"
                    style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                  >
                    <span className="dark:text-white/70">Monthly Credits Included</span>
                    <span className="font-bold dark:text-white">{plan.monthlyCredits}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-2 flex-1">
                    <span 
                      className="font-semibold dark:text-white/70"
                      style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                    >
                      Includes
                    </span>
                    {plan.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex gap-3 items-start"
                        style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
                      >
                        <CheckIcon />
                        <span className="dark:text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col items-center">
                  <span 
                    className="font-medium text-[var(--color-primary)]"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                  >
                    {plan.ctaLabel}
                  </span>
                  <span 
                    className="mt-3 dark:text-white/70 text-center"
                    style={{ fontSize: "clamp(11px, 0.8vw, 13px)" }}
                  >
                    {plan.ctaDesc}
                  </span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 rounded-lg bg-[#7FFFD4] text-[#4B4B4B] font-medium mt-4 hover:opacity-90"
                  >
                    {t("registerButton")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <RegistrationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </div>
  );
}