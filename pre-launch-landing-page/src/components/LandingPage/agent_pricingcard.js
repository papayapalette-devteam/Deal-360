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
            ctaLabel: "Free Limited Access",
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
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
            <div
                className="max-w-[100%] mx-auto bg-white rounded-2xl p-10"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.12)" }}
            >
                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-[32px] font-medium leading-[110%] text-[#4B4B4B] mb-10 text-left">
                    Agent Plans - Early Registration
                </h1>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
                                <div className="px-6 pb-6 pt-4 border-t border-[#EDEDED]">
                                    <div
                                        className="flex justify-center items-center 
             px-4 py-2 mb-4
             rounded-full 
             border border-[#DEDEDE]
             bg-[linear-gradient(90deg,rgba(255,246,245,0.93)_0%,rgba(251,255,237,0.93)_50%,rgba(240,255,250,0.93)_100%)]"
                                    >
                                        <span className="text-lg font-medium text-[var(--color-primary)]">
                                            {plan.ctaLabel}
                                        </span>
                                    </div>
                                    <span className="text-xs text-[#4B5563] self-stretch">
                                        Annual options available
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