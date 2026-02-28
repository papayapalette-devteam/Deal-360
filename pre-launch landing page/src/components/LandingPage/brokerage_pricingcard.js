export default function BrokeragePricingSection() {
    const plans = [
        {
            name: "Brokerage Lite",
            freeLabel: "Free",
            description:
                "Essential visibility for new brokerages.",
            earlyRate: null,
            standardRate: null,
            monthlyCredits: 0,
            ctaLabel: "Free Limited Access",
            isMostPopular: false,
            features: [
                "Monthly Credits  Included",
                "Office branding on agent profiles",
                "Link agents to brokerage",
                "View list of linked agents",
            ],
        },
        {
            name: "Brokerage Core",
            freeLabel: null,
            description: "Standard tools for growing teams.",
            earlyRate: "AED 599",
            standardRate: "AED 999",
            monthlyCredits: 70,
            ctaLabel: "No Payment Upfront",
            isMostPopular: false,
            features: [
                "Brokerage profile & branding",
                "Brokerage profile & branding",
                "Unlimited standard listings",
                "Inventory management (office listings view)",
                "Shared credit pool",
                "Assign credits to agents ",
                "View credit usage",
                "Property Manager",
            ],
        },
        {
            name: "Brokerage Pro",
            freeLabel: null,
            description:
                "Advanced insights for established offices.",
            earlyRate: "AED 1,499",
            standardRate: "AED 2,499",
            monthlyCredits: 210,
            ctaLabel: "No Payment Upfront",
            isMostPopular: true,
            features: [
                "Brokerage profile & branding",
                "Agent management",
                "Inventory management (office listings view)",
                "Shared credit pool",
                "Assign credits to agents",
                "View credit usage",
                "Team activity overview",
                "Property Manager",
            ],
        },
        {
            name: "Brokerage Pro",
            freeLabel: null,
            description:
                "Maximum scale for multi-office ",
            earlyRate: "AED 2,999",
            standardRate: "AED 4,999",
            monthlyCredits: 420,
            ctaLabel: "No Payment Upfront",
            isMostPopular: false,
            features: [
                "Brokerage profile & branding",
                "Multi-office & enterprise management",
                "Agent management at scale",
                "Inventory management (office listings view)",
                "Large shared credit pool",
                "Assign credits to agents",
                "Office-level activity overview",
                "Property Manager",
                "Custom integrations",
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
        <div className="px-4 md:px-16 xl:px-32 2xl:px-48 py-0 mt-8">
            <div
                className="max-w-[100%] mx-auto bg-white rounded-2xl p-10"
                style={{ boxShadow: "0 0 20px rgba(0,0,0,0.12)" }}
            >
                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-[32px] font-medium leading-[110%] text-[#4B4B4B] mb-10 text-left">
                    Brokerage Plans - Early Registration
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
                                    <button className="w-full py-4 rounded-lg bg-[#7FFFD4] text-[#4B4B4B] font-medium hover:opacity-90 transition mt-4">
                                        Register Early
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}