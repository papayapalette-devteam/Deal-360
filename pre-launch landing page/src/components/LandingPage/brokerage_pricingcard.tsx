"use client";

import { useState } from "react";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

export default function BrokeragePricingSection() {
      const [isModalOpen, setIsModalOpen] = useState(false);
    const plans = [
        {
            name: "Brokerage Lite",
            freeLabel: "Free",
            description:
                "Essential visibility for new brokerages.",
            earlyRate: null,
            standardRate: null,
            monthlyCredits: "00",
            agents: "Unlimited (Lite only)",
            creditseats: 0,
            ctaLabel: "Free Limited Access",
            ctaDesc:"Upgrade to activate credits and agent usage",
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
            agents: "Unlimited (Lite access)",
            creditseats: 10,
            ctaLabel: "No Payment Upfront",
            ctaDesc:"Annual options available",
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
            agents: "Unlimited (Lite access)",
            creditseats: 25,
            ctaLabel: "No Payment Upfront",
            ctaDesc:"Annual options available",
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
            name: "Enterprise",
            freeLabel: null,
            description:
                "Maximum scale for multi-office ",
            earlyRate: "AED 2,999",
            standardRate: "AED 4,999",
            monthlyCredits: 420,
            agents: "Unlimited (Lite access)",
            creditseats: 55,
            ctaLabel: "No Payment Upfront",
            ctaDesc:"Annual options available",
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
<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
  <path d="M27.1767 31.5855C27.0066 31.1681 26.678 30.8352 26.2629 30.6595C25.8478 30.4839 25.38 30.4799 24.962 30.6485C22.0915 31.7982 18.8884 31.7982 16.0179 30.6485C15.8109 30.5635 15.5893 30.5201 15.3655 30.5207C15.1418 30.5214 14.9204 30.5661 14.714 30.6523C14.5075 30.7385 14.3201 30.8646 14.1623 31.0232C14.0046 31.1819 13.8796 31.37 13.7946 31.577C13.7096 31.7839 13.6662 32.0056 13.6668 32.2293C13.6675 32.4531 13.7122 32.6745 13.7984 32.8809C13.8846 33.0874 14.0107 33.2748 14.1693 33.4325C14.328 33.5903 14.5162 33.7152 14.7231 33.8002C18.4161 35.2967 22.5467 35.2967 26.2397 33.8002C26.6571 33.6301 26.9901 33.3015 27.1657 32.8864C27.3413 32.4713 27.3453 32.0035 27.1767 31.5855ZM27.1938 9.72779C28.8011 10.8223 30.1164 12.2933 31.025 14.0126C31.9336 15.7319 32.4081 17.6473 32.4069 19.5919C32.403 20.0927 32.3746 20.593 32.3217 21.0911C32.2949 21.3148 32.3124 21.5416 32.3732 21.7586C32.434 21.9756 32.5369 22.1784 32.6762 22.3556C32.8154 22.5328 32.9881 22.6808 33.1845 22.7912C33.381 22.9017 33.5972 22.9723 33.8209 22.9992C34.0447 23.026 34.2715 23.0085 34.4884 22.9477C34.7054 22.8869 34.9083 22.7839 35.0855 22.6447C35.2626 22.5055 35.4107 22.3328 35.5211 22.1363C35.6315 21.9399 35.7022 21.7237 35.729 21.5C35.802 20.8667 35.8305 20.2291 35.8142 19.5919C35.8153 17.0935 35.2059 14.6328 34.039 12.4237C32.8721 10.2146 31.1831 8.32417 29.1189 6.91678C28.9344 6.78711 28.7261 6.69534 28.5059 6.6468C28.2857 6.59826 28.058 6.59391 27.8361 6.63401C27.6142 6.67411 27.4025 6.75786 27.2133 6.8804C27.024 7.00294 26.8609 7.16183 26.7335 7.34787C26.6061 7.5339 26.5169 7.74338 26.471 7.96415C26.4252 8.18493 26.4236 8.4126 26.4665 8.63398C26.5093 8.85536 26.5956 9.06604 26.7205 9.2538C26.8453 9.44156 27.0062 9.60267 27.1938 9.72779ZM7.15895 22.9821C7.60574 22.9267 8.01243 22.6967 8.29016 22.3424C8.56788 21.988 8.69406 21.5382 8.64112 21.0911C8.61667 20.5916 8.61667 20.0913 8.64112 19.5919C8.63049 17.6549 9.09186 15.7444 9.98533 14.0257C10.8788 12.307 12.1775 10.8319 13.7691 9.72779C13.9567 9.60267 14.1175 9.44156 14.2424 9.2538C14.3672 9.06604 14.4536 8.85536 14.4964 8.63398C14.5392 8.4126 14.5376 8.18493 14.4918 7.96415C14.446 7.74338 14.3567 7.5339 14.2293 7.34787C14.1019 7.16183 13.9389 7.00294 13.7496 6.8804C13.5603 6.75786 13.3486 6.67411 13.1267 6.63401C12.9048 6.59391 12.6772 6.59826 12.457 6.6468C12.2368 6.69534 12.0284 6.78711 11.844 6.91678C9.77977 8.32417 8.09075 10.2146 6.92386 12.4237C5.75697 14.6328 5.14756 17.0935 5.14865 19.5919C5.14369 20.2299 5.18354 20.8675 5.26791 21.5C5.32331 21.9467 5.55331 22.3534 5.90765 22.6312C6.26199 22.9089 6.71186 23.0351 7.15895 22.9821ZM26.7338 16.1846C26.7985 16.1866 26.8628 16.1739 26.9219 16.1473C26.9809 16.1207 27.0331 16.081 27.0745 16.0313C27.1126 15.9807 27.1398 15.9228 27.1544 15.8613C27.1691 15.7997 27.1709 15.7358 27.1597 15.6735C26.8155 14.1424 25.9608 12.7739 24.7361 11.7926C23.5114 10.8114 21.9894 10.2758 20.4201 10.2739C18.8508 10.2719 17.3274 10.8036 16.1002 11.7817C14.873 12.7599 14.0149 14.1262 13.6669 15.6565C13.6383 15.7148 13.6234 15.7789 13.6234 15.8439C13.6234 15.9088 13.6383 15.9729 13.6669 16.0313C13.7507 16.1225 13.8668 16.1775 13.9905 16.1846H26.7338ZM16.2223 4.2591C16.2223 5.38869 16.671 6.47201 17.4698 7.27074C18.2685 8.06948 19.3518 8.51821 20.4814 8.51821C21.611 8.51821 22.6943 8.06948 23.4931 7.27074C24.2918 6.47201 24.7405 5.38869 24.7405 4.2591C24.7405 3.12952 24.2918 2.0462 23.4931 1.24746C22.6943 0.448726 21.611 0 20.4814 0C19.3518 0 18.2685 0.448726 17.4698 1.24746C16.671 2.0462 16.2223 3.12952 16.2223 4.2591ZM34.1105 34.9246C32.5212 34.9121 30.9761 35.4472 29.735 36.4401C28.4939 37.433 27.6326 38.823 27.296 40.3763C27.2835 40.4375 27.2846 40.5007 27.2992 40.5614C27.3139 40.6221 27.3417 40.6789 27.3807 40.7276C27.4197 40.7764 27.469 40.816 27.525 40.8436C27.581 40.8712 27.6424 40.8862 27.7049 40.8874H40.414C40.5429 40.8811 40.6646 40.8263 40.7547 40.7341C40.7801 40.6748 40.7931 40.6111 40.7931 40.5467C40.7931 40.4822 40.7801 40.4185 40.7547 40.3593C40.4211 38.8375 39.5835 37.473 38.3777 36.4866C37.1718 35.5003 35.6682 34.9499 34.1105 34.9246ZM29.9026 28.9619C29.9026 30.0915 30.3513 31.1748 31.15 31.9735C31.9488 32.7723 33.0321 33.221 34.1617 33.221C35.2912 33.221 36.3746 32.7723 37.1733 31.9735C37.972 31.1748 38.4208 30.0915 38.4208 28.9619C38.4208 27.8323 37.972 26.749 37.1733 25.9503C36.3746 25.1515 35.2912 24.7028 34.1617 24.7028C33.0321 24.7028 31.9488 25.1515 31.15 25.9503C30.3513 26.749 29.9026 27.8323 29.9026 28.9619ZM6.85229 34.9246C5.26297 34.9121 3.71781 35.4472 2.47672 36.4401C1.23563 37.433 0.374342 38.823 0.0377271 40.3763C0.0128494 40.4327 0 40.4936 0 40.5552C0 40.6168 0.0128494 40.6777 0.0377271 40.7341C0.0927083 40.814 0.173343 40.8728 0.266286 40.9007C0.359228 40.9286 0.458906 40.9239 0.54882 40.8874H13.2409C13.3066 40.8893 13.3718 40.876 13.4315 40.8486C13.4912 40.8211 13.5437 40.7802 13.585 40.729C13.6262 40.6779 13.6551 40.6179 13.6693 40.5537C13.6835 40.4896 13.6827 40.423 13.6669 40.3593C13.3239 38.8106 12.4604 37.4263 11.2203 36.4373C9.98016 35.4483 8.43845 34.9144 6.85229 34.9246ZM2.71244 28.9619C2.71244 30.0915 3.16117 31.1748 3.95991 31.9735C4.75864 32.7723 5.84196 33.221 6.97155 33.221C8.10113 33.221 9.18445 32.7723 9.98319 31.9735C10.7819 31.1748 11.2306 30.0915 11.2306 28.9619C11.2306 27.8323 10.7819 26.749 9.98319 25.9503C9.18445 25.1515 8.10113 24.7028 6.97155 24.7028C5.84196 24.7028 4.75864 25.1515 3.95991 25.9503C3.16117 26.749 2.71244 27.8323 2.71244 28.9619Z" fill="#4B4B4B"/>
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
    Brokerage Plans-Early Registration
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
                                          <div className="flex justify-between px-4 py-4 rounded-lg  mb-5 text-xs font-medium" style={{border:"1px solid #DADADA"}}>
                                              <span>Monthly Credits Included</span>
                                              <span className="font-bold text-base">
                                                  {plan.monthlyCredits}
                                              </span>
                                          </div>
                                          <p className="text-xs text-[var(--color-text)] font-bold">Agents: 
                                            <span className="text-xs text-[var(--color-text)] font-normal">{plan.agents}</span>
                                            </p>

                                        <p className="text-xs text-[var(--color-text)] font-bold mt-2">Active Credit Seats: 
                                            <span className="text-xs text-[var(--color-text)] font-normal">{plan.creditseats}</span>
                                            </p>
      
                                          {/* Features */}
                                          <div className="flex flex-col gap-2 flex-1 mt-6">
                                              <span className="text-xs font-semibold text-[var(--color-text)]">
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