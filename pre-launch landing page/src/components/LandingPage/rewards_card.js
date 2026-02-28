const CheckIcon = () => (
  <svg width="16" height="16" fill="none" className="mt-0.5 shrink-0">
    <path
      d="M13 4L6 11L3 8"
      stroke="#7FFFD4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
    />
  </svg>
);

export default function RewardsCard() {
  return (
    <div className="px-4 md:px-16 xl:px-32 2xl:px-48 py-0">
      <div className="w-full mx-auto bg-white rounded-2xl p-10">
        {/* Cards Wrapper */}
        <div className="flex flex-wrap justify-center gap-12">
          
          {/* ===================== CARD 1 ===================== */}
          <div className="relative w-full sm:w-[45%] flex flex-col">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)]">
              
              {/* Card Content */}
              <div className="flex flex-col px-6 pb-6 pt-14 gap-4 flex-1">
                <img src="./reward1.png" className="h-[80px] w-[80px]" alt="Reward" />
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[110%] text-[var(--color-text)] mt-2">
                  Early Inventory Incentive
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-[150%] mt-2 text-[var(--color-text)]">
                  Agents and brokerages who complete their setup and upload verified listings will receive complimentary Deal360 credits.
                </p>

                <h3 className="text-[16px] font-medium leading-[110%] text-[var(--color-text)] mt-4">
                  How It Works?
                </h3>

                {/* Features */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon1 />
                    <span className="text-[#4B5563]">Complete your full public profile</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon1 />
                    <span className="text-[#4B5563]">Verify your BRN (Agent) or ORN (Brokerage)</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon1 />
                    <span className="text-[#4B5563]">Upload at least one property</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon1 />
                    <span className="text-[#4B5563]">Property must pass Verified Deal verification</span>
                  </div>
                </div>

                {/* Rewards Header */}
                <h3 className="flex items-center gap-2 text-[16px] font-medium leading-[110%] text-[var(--color-text)] mt-4">
                  <img src="./reward1.png" className="h-[24px] w-[24px]" alt="Reward Icon" />
                  <span>Rewards</span>
                </h3>

                {/* Rewards Items */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">1 complimentary credit per Verified Deal approved listing</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Subject to a maximum cap per account</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Credits are issued once qualification requirements are met</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Credits are non-transferable and cannot be exchanged for cash</span>
                  </div>
                </div>

                <p className="text-[12px] leading-[150%] mt-2 text-[var(--color-text)]">
                  This ensures our launch inventory is verified and ready for real demand from day one.
                </p>
              </div>

              {/* Bottom Button (Always at Bottom) */}
                   <div
  className="flex justify-center items-center gap-2 mt-auto rounded-full m-4"
  style={{
    padding: "12px 24px",
    border: "4px solid #79FFD2",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #FFEFEE 0%, #FFF 50%, #EBFFF8 100%)",
  }}
>

  
  {/* Optional icon */}
<div
  className="flex justify-center items-center flex-shrink-0"
  style={{
    width: "40px",
    height: "40px",
    padding: "8px",
    gap: "10px",
    borderRadius: "999px",
    background: "linear-gradient(180deg, #FFE3E0 0%, #FFF 83.13%, #FFE7E5 166.25%)",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.10)",
    aspectRatio: "1 / 1",
  }}
>
  {/* Your SVG inside */}
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_58104_63018)">
      <path d="M9.55065 11.924L9.07544 14.5709L11.6106 13.3021C11.7317 13.2412 11.8654 13.2095 12.0009 13.2095C12.1365 13.2095 12.2702 13.2412 12.3913 13.3021L14.9149 14.5688L14.4521 11.9239C14.4265 11.7831 14.437 11.6381 14.4824 11.5025C14.5279 11.3668 14.6069 11.2448 14.7122 11.1479L16.7147 9.2825L13.9169 8.89681C13.7799 8.87791 13.6495 8.82645 13.5365 8.74675C13.4236 8.66704 13.3314 8.56141 13.2677 8.43871L12.0091 6.00258V6L10.7364 8.43871C10.6726 8.56145 10.5804 8.66712 10.4673 8.74683C10.3543 8.82654 10.2238 8.87797 10.0867 8.89681L7.29492 9.2825L9.29311 11.1457C9.39821 11.2432 9.47694 11.3656 9.52198 11.5017C9.56701 11.6378 9.57687 11.783 9.55065 11.924Z" fill="#7FFFD4"/>
      <path d="M11.9993 18.8541C16.4959 18.8541 20.1412 15.2088 20.1412 10.7122C20.1412 6.21553 16.4959 2.57031 11.9993 2.57031C7.50269 2.57031 3.85742 6.21553 3.85742 10.7121C3.86239 15.2067 7.50475 18.8491 11.9993 18.8541ZM6.46842 9.02634C6.51737 8.87065 6.60974 8.73217 6.73469 8.62718C6.85964 8.5222 7.01197 8.45506 7.17376 8.43368L9.96601 8.04588L11.2301 5.60759C11.3035 5.46706 11.414 5.34933 11.5496 5.26717C11.6852 5.18502 11.8407 5.14158 11.9993 5.14158C12.1578 5.14158 12.3134 5.18502 12.449 5.26717C12.5846 5.34933 12.6951 5.46706 12.7685 5.60759L14.0271 8.04372L16.8253 8.43368C16.987 8.45513 17.1393 8.52229 17.2641 8.62727C17.389 8.73226 17.4813 8.8707 17.5302 9.02634C17.5797 9.18025 17.5839 9.34512 17.5424 9.50137C17.5009 9.65761 17.4155 9.79868 17.2962 9.90781L15.2933 11.7736L15.7703 14.4171C15.7986 14.5734 15.7826 14.7346 15.724 14.8823C15.6655 15.0299 15.5668 15.1583 15.439 15.2528C15.31 15.3497 15.1563 15.4085 14.9956 15.4226C14.8348 15.4367 14.6733 15.4055 14.5293 15.3325L12.0066 14.0658L9.47107 15.3325C9.32705 15.4055 9.16546 15.4367 9.0046 15.4226C8.84374 15.4086 8.69004 15.3497 8.56091 15.2528C8.43321 15.1584 8.33449 15.0301 8.27595 14.8825C8.21741 14.7349 8.20138 14.5738 8.22968 14.4176L8.70489 11.7702L6.70155 9.90781C6.58251 9.79853 6.49729 9.65742 6.45597 9.5012C6.41466 9.34497 6.41898 9.18018 6.46842 9.02634Z" fill="#7FFFD4"/>
    </g>
    <defs>
      <clipPath id="clip0_58104_63018">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</div>

  {/* Text */}
  <span
    className="font-medium text-[var(--color-text)] text-center"
    style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "20px",
    }}
  >
   1 credit free for verified listings
  </span>
</div>

            </div>
          </div>

          {/* ===================== CARD 2 ===================== */}
          <div className="relative w-full sm:w-[45%] flex flex-col">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)]">

              {/* Card Content */}
              <div className="flex flex-col px-6 pb-6 pt-14 gap-4 flex-1">
                <img src="./reward2.png" className="h-[80px] w-[80px]" alt="Reward" />
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[110%] text-[var(--color-text)] mt-2">
                  Referral Program
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-[150%] mt-2 text-[var(--color-text)]">
                  Help us grow a high-quality, verified network — and get rewarded. If you refer another agent or brokerage and they activate a paid plan, you will receive a discount on your next billing cycle.
                </p>

                <h3 className="text-[16px] font-medium leading-[110%] text-[var(--color-text)] mt-4">
                  How It Works — a referral is successful when:
                </h3>

                {/* Features */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Registration is completed</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Verification is approved</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">A paid subscription is activated</span>
                  </div>
                  <div className="flex gap-3 items-start text-xs">
                    <CheckIcon />
                    <span className="text-[#4B5563]">The account remains active beyond the minimum billing period</span>
                  </div>
                  <p className="text-[12px] leading-[150%] mt-2 text-[var(--color-text)]">
                    Free, inactive, duplicate, refunded, or unverified accounts do not qualify.
                  </p>
                </div>

                {/* Rewards Header */}
                <h3 className="flex items-center gap-2 text-[16px] font-medium leading-[110%] text-[var(--color-text)] mt-4">
                  <img src="./reward2.png" className="h-[24px] w-[24px]" alt="Reward Icon" />
                  <span>Rewards</span>
                </h3>

                {/* Rewards Items */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-3 items-start text-[14px]">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Free, inactive, duplicate, refunded, or unverified accounts do not qualify.</span>
                  </div>
                  <div className="flex gap-3 items-start text-[14px]">
                    <CheckIcon />
                    <span className="text-[#4B5563]">Refer 2 successful paid accounts → 100% off your next billing cycle</span>
                  </div>
                </div>

                <h3 className="text-[16px] font-medium leading-[110%] text-[var(--color-text)] mt-4">
                  Terms & Conditions – Referral Rewards
                </h3>

                <p className="text-[12px] leading-[150%] mt-2 text-[#939393]">
                  Referral rewards apply to the referrer&apos;s active paid plan only. A maximum of one 100% discounted billing cycle may be applied per cycle, and discounts cannot be stacked beyond one full month. Self-referrals or referrals between related accounts are not permitted. Rewards are non-transferable, not redeemable for cash, and may be withheld in cases of misuse or abuse of the referral program. These early adopter rewards are available for a limited period as part of our launch phase.
                </p>
              </div>

              {/* Bottom Button (Always at Bottom) */}
            <div
  className="flex justify-center items-center gap-2 mt-auto rounded-full m-4"
  style={{
    padding: "12px 24px",
    border: "4px solid #79FFD2",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #FFEFEE 0%, #FFF 50%, #EBFFF8 100%)",
  }}
>

  
  {/* Optional icon */}
<div
  className="flex justify-center items-center flex-shrink-0"
  style={{
    width: "40px",
    height: "40px",
    padding: "8px",
    gap: "10px",
    borderRadius: "999px",
    background: "linear-gradient(180deg, #FFE3E0 0%, #FFF 83.13%, #FFE7E5 166.25%)",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.10)",
    aspectRatio: "1 / 1",
  }}
>
  {/* Your SVG inside */}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 12V18C20 20.21 18.21 22 16 22H8C5.79 22 4 20.21 4 18V12C4 11.45 4.45 11 5 11H6.97C7.52 11 7.97 11.45 7.97 12V15.14C7.97 15.88 8.38 16.56 9.03 16.91C9.32 17.07 9.64 17.15 9.97 17.15C10.35 17.15 10.73 17.04 11.06 16.82L12.01 16.2L12.89 16.79C13.5 17.2 14.28 17.25 14.93 16.9C15.59 16.55 16 15.88 16 15.13V12C16 11.45 16.45 11 17 11H19C19.55 11 20 11.45 20 12Z" fill="#F88379"/>
  <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" fill="#F88379"/>
  <path d="M11.6408 4.9975H6.12076C5.78076 4.6275 5.79076 4.0575 6.15076 3.6975L7.57076 2.2775C7.94076 1.9075 8.55076 1.9075 8.92076 2.2775L11.6408 4.9975Z" fill="#F88379"/>
  <path d="M17.8696 4.9975H12.3496L15.0696 2.2775C15.4396 1.9075 16.0496 1.9075 16.4196 2.2775L17.8396 3.6975C18.1996 4.0575 18.2096 4.6275 17.8696 4.9975Z" fill="#F88379"/>
  <path d="M13.9695 11C14.5195 11 14.9695 11.45 14.9695 12V15.13C14.9695 15.93 14.0795 16.41 13.4195 15.96L12.5195 15.36C12.1895 15.14 11.7595 15.14 11.4195 15.36L10.4795 15.98C9.81945 16.42 8.93945 15.94 8.93945 15.15V12C8.93945 11.45 9.38945 11 9.93945 11H13.9695Z" fill="#F88379"/>
</svg>
</div>

  {/* Text */}
  <span
    className="font-medium text-[var(--color-text)] text-center"
    style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "20px",
    }}
  >
    1 month free referral program
  </span>
</div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}