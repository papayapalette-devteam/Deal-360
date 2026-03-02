import AgentPricingSection from "./agent_pricingcard";
import BrokeragePricingSection from "./brokerage_pricingcard";

export default function PricingGlowWrapper() {
  return (
    <div className="relative overflow-hidden py-20">
      
      {/* Blurred Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div
          className="w-[1000px] h-[1000px] rounded-full bg-[#9DFFDE]"
          style={{
            filter: "blur(227.65px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AgentPricingSection />
        <BrokeragePricingSection />
      </div>

    </div>
  );
}