import AgentPricingSection from "./agent_pricingcard";
import BrokeragePricingSection from "./brokerage_pricingcard";

export default function PricingGlowWrapper() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">

      {/* Content */}
      <div className="relative z-10">
        <AgentPricingSection />
        <BrokeragePricingSection />
      </div>
</div>
    </div>
  );
}