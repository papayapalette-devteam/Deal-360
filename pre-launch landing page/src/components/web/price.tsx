"use client"

import AgentPricingSection from "./agent_pricingcard";
import BrokeragePricingSection from "./brokerage_pricingcard";
import CustomPlans from "./custom_plans";

export default function PricingGlowWrapper() {
  return (
    <div className="bg-white text-[var(--color-text)] overflow-hidden dark:bg-black">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">

      {/* Content */}
      <div className="relative z-10">
        <AgentPricingSection />
        <BrokeragePricingSection />
        <CustomPlans/>
      </div>
</div>
    </div>
  );
}