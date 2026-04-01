"use client";

import { useState } from "react";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

export default function AgentPricingSection() {

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
                "Unlock leads: 79 AED each"
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
                "Agent-to-aProperty Managergent (A2A) access",
                "Unlock: 1 credit or 79 AED per lead",
                "Verified agent status",
                "Increased listing visibility",
                "Access to buyer & tenant requirements",
                "Messaging and CRM-lite tools"
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
                "Advanced lead and performance tools (as released)"
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
                "Visibility to Private & Off-Market inventory (where available)",
                "Early access to new features",
                "Unlock: 1 credit or 79 AED per lead",
                "Early access to advanced tools"
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
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-visible mt-10" >
            <div
                className="max-w-[100%] mx-auto bg-white rounded-2xl "
                style={{ boxShadow: "0 0 10px 0 rgba(0,0,0,0.15)" }}
            >

                {/* Title */}
  <div
  className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 
             min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] 2xl:min-h-[135px]"
  style={{
    background: "linear-gradient(90deg, #7FFFD4 0%, #E5FFF6 100%)",
  }}
>
  {/* Icon */}
<svg xmlns="http://www.w3.org/2000/svg" width="43" height="45" viewBox="0 0 43 45" fill="none">
  <path d="M26.7437 44.361L9.20926 39.2499V42.236H0V23.4629H14.6727L31.6131 29.663V33.3813H42.8139V39.4018L26.7437 44.361ZM2.30001 39.9337H6.90464V25.7652H2.30001V39.9337ZM26.624 41.9183L40.4563 37.7027V35.6836H24.522L17.3733 33.3536L18.133 31.1503L24.8696 33.3813H29.3108V31.2631L14.3089 25.7652H9.20926V36.8347L26.624 41.9183ZM38.2092 27.8903V11.774L25.5465 2.91934L12.8838 11.774V17.9719H10.5814V10.6712L25.5465 0L40.5115 10.6689V27.8903H38.2092ZM26.9187 13.3235H28.7789V11.4632H26.9187V13.3235ZM22.314 13.3235H24.1743V11.4632H22.314V13.3235ZM26.9187 17.9281H28.7789V16.0679H26.9187V17.9281ZM22.314 17.9281H24.1743V16.0679H22.314V17.9281Z" fill="#4B4B4B"/>
</svg>

  {/* Title */}
  <h1
    className="
      font-medium leading-[110%] text-[var(--color-text)]
      text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
      line-clamp-2
    "
    style={{ fontFamily: "Poppins, sans-serif" }}
  >
    Agent Plans-Early Registration
  </h1>
</div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-2 mt-6">
                    {plans.map((plan) => (
                        <div key={plan.name} className="relative flex flex-col">
                            {/* Most Popular Badge */}
                            {plan.isMostPopular && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 
             flex items-center gap-2
             px-3 py-1 
             bg-[#7FFFD4] 
             rounded-[0_12px_0_12px] 
             text-xs font-medium"
                                    style={{ top: "-10px" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        className="shrink-0"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M1.99765 6.99957L6.55633 1.08628L6.02649 4.32534H9.99534L5.43666 10.9134L5.96651 7.67437H1.99765Z"
                                                stroke="#0F172A"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="12" height="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span className="text-[#0A0A0A] font-medium">Most Popular</span>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`flex flex-col h-full rounded-2xl overflow-hidden ${plan.isMostPopular
                                    ? "border border-[#7FFFD4] bg-[#7FFFD4]/20"
                                    : "bg-white"
                                    }`}
                                style={{
                                    boxShadow: plan.isMostPopular
                                        ? "none"
                                        : "0 0 10px rgba(0,0,0,0.10)",
                                    paddingTop: "56px",
                                }}
                            >
                                <div className="flex flex-col flex-1 px-6 pb-6">
                                    {/* Header */}
                                    <div className="mb-6 min-h-[140px]">
                                        <h3 className="text-base font-medium text-[#0A0A0A] mb-2">
                                            {plan.name}
                                        </h3>

                                        {plan.freeLabel ? (
                                            <>
                                                <div className="text-2xl font-bold">
                                                    {plan.freeLabel}
                                                </div>
                                                <p className="text-xs text-[#6B7280]">
                                                    {plan.description}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-xs text-[#6B7280]">
                                                    Early-registration rate:
                                                </p>
                                                <div className="text-base">
                                                    <span className="text-2xl font-bold">
                                                        {plan.earlyRate}
                                                    </span>{" "}
                                                    /mo
                                                </div>
                                                <p className="text-xs text-[#6B7280]">
                                                    <span className="line-through">
                                                        {plan.standardRate}
                                                    </span>
                                                </p>
                                                <p className="text-xs text-[#6B7280] mt-1">
                                                    {plan.description}
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    {/* Credits */}
                                    <div className="flex justify-between px-4 py-4 rounded-lg bg-[#FFEAE8] mb-5 text-xs font-medium">
                                        <span>Monthly Credits Included</span>
                                        <span className="font-bold text-base">
                                            {plan.monthlyCredits}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-col gap-2 flex-1">
                                        <span className="text-xs font-semibold text-[#9CA3AF]">
                                            Includes
                                        </span>
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex gap-3 items-start text-xs">
                                                <CheckIcon />
                                                <span className="text-[#4B5563]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-6 pb-6 pt-4 border-t border-[#EDEDED] flex items-center justify-center flex-col">
                                    <div
                                        className="flex justify-center items-center "
                                    >
                                        <span className="text-lg font-medium text-[var(--color-primary)]">
                                            {plan.ctaLabel}
                                        </span>
                                    </div>
                                    <span className="text-xs text-[#4B5563] self-stretch flex items-center justify-center mt-4">
                                        {plan.ctaDesc}
                                    </span>
                                    <button onClick={() => setIsModalOpen(true)} className=" cursor-pointer w-full py-4 rounded-lg bg-[#7FFFD4] text-[#4B4B4B] font-medium hover:opacity-90 transition mt-4">
                                        Register Early
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <RegistrationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
}