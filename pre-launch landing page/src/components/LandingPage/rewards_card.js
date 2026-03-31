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
   <div className="relative px-4 md:px-16 xl:px-32 2xl:px-48 py-0  overflow-hidden bg-white ">

  {/* Background Image (only md and above) */}
  <div className="hidden md:block absolute inset-0 
                  bg-[url('/earlyaccess.png')] 
                  bg-cover bg-center bg-no-repeat mb-4"/>

  {/* Light gray overlay (50%) */}
  <div className="hidden md:block absolute inset-0 bg-gray-200/50" />

  {/* Main Content */}
  <div className="relative  md:bg-transparent">

    <div className="w-full mx-auto  rounded-2xl p-10">
      
      {/* Cards Wrapper */}
      <div className="flex flex-wrap justify-center gap-12">
        
        {/* ===================== CARD 1 ===================== */}
        <div className="relative w-full sm:w-[45%] flex flex-col">
          <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)]">
            
            <div className="flex flex-col px-6 pb-6 pt-14 gap-4 flex-1">
              <img src="./reward1.png" className="h-[80px] w-[80px]" alt="Reward" />

              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[var(--color-text)] mt-2">
                Early Inventory Incentive
              </h3>

              <p className="text-[13px] sm:text-[14px] mt-2 text-[var(--color-text)]">
                Agents and brokerages who complete their setup and upload verified listings will receive complimentary Deal360 credits.
              </p>

              <h3 className="text-[16px] font-medium mt-4 text-[var(--color-text)]">
                How It Works?
              </h3>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-3 text-xs"><CheckIcon1 /><span>Complete your full public profile</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon1 /><span>Verify your BRN (Agent) or ORN (Brokerage)</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon1 /><span>Upload at least one property</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon1 /><span>Property must pass verification</span></div>
              </div>

              <h3 className="flex items-center gap-2 text-[16px] font-medium mt-4">
                <img src="./reward1.png" className="h-[24px] w-[24px]" alt="Reward Icon" />
                Rewards
              </h3>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-3 text-xs"><CheckIcon /><span>1 complimentary credit per listing</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon /><span>Maximum cap per account</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon /><span>Issued after qualification</span></div>
                <div className="flex gap-3 text-xs"><CheckIcon /><span>Non-transferable</span></div>
              </div>

              <p className="text-[12px] mt-2">
                Verified inventory ready from day one.
              </p>
            </div>

            {/* Bottom Button */}
            <div className="flex items-center justify-center gap-2 mt-auto m-4 px-4 py-4 rounded-sm  bg-[#7FFFD4]">
              
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="34" viewBox="0 0 31 34" fill="none">
  <path d="M11.7073 16.8903L11.0341 20.6402L14.6255 18.8426C14.7971 18.7564 14.9865 18.7115 15.1786 18.7115C15.3706 18.7115 15.56 18.7564 15.7316 18.8426L19.3066 20.6371L18.651 16.8903C18.6148 16.6908 18.6296 16.4854 18.694 16.2932C18.7584 16.101 18.8704 15.9282 19.0195 15.7908L21.8564 13.1483L17.8928 12.6019C17.6988 12.5751 17.514 12.5022 17.354 12.3893C17.194 12.2763 17.0634 12.1267 16.9731 11.9529L15.1901 8.5017V8.49805L13.3871 11.9529C13.2968 12.1268 13.1661 12.2765 13.006 12.3894C12.8458 12.5023 12.6609 12.5752 12.4668 12.6019L8.51172 13.1483L11.3425 15.7878C11.4914 15.9259 11.6029 16.0994 11.6667 16.2921C11.7305 16.4849 11.7445 16.6907 11.7073 16.8903Z" fill="#4B4B4B"/>
  <path d="M15.1749 26.7093C21.5452 26.7093 26.7093 21.5452 26.7093 15.1749C26.7093 8.80469 21.5451 3.64062 15.1749 3.64062C8.80476 3.64062 3.64062 8.80469 3.64062 15.1749C3.64766 21.5422 8.80768 26.7022 15.1749 26.7093ZM7.33954 12.7867C7.40888 12.5661 7.53975 12.3699 7.71676 12.2212C7.89377 12.0725 8.10956 11.9774 8.33877 11.9471L12.2945 11.3977L14.0853 7.94344C14.1893 7.74435 14.3458 7.57756 14.5379 7.46118C14.73 7.34479 14.9503 7.28326 15.1749 7.28326C15.3996 7.28326 15.6199 7.34479 15.812 7.46118C16.0041 7.57756 16.1606 7.74435 16.2646 7.94344L18.0476 11.3946L22.0118 11.9471C22.2409 11.9774 22.4566 12.0726 22.6335 12.2213C22.8104 12.3701 22.9411 12.5662 23.0104 12.7867C23.0805 13.0047 23.0865 13.2383 23.0277 13.4596C22.9689 13.681 22.8479 13.8808 22.679 14.0354L19.8415 16.6786L20.5172 20.4236C20.5573 20.6451 20.5346 20.8733 20.4517 21.0825C20.3687 21.2918 20.2289 21.4736 20.0479 21.6074C19.8651 21.7447 19.6474 21.828 19.4197 21.848C19.1919 21.868 18.9631 21.8237 18.7591 21.7204L15.1853 19.9259L11.5933 21.7204C11.3893 21.8238 11.1603 21.8681 10.9325 21.8481C10.7046 21.8281 10.4868 21.7448 10.3039 21.6074C10.123 21.4737 9.98314 21.292 9.90021 21.0829C9.81728 20.8738 9.79457 20.6456 9.83466 20.4243L10.5079 16.6738L7.66981 14.0354C7.50117 13.8806 7.38044 13.6807 7.32191 13.4594C7.26337 13.2381 7.2695 13.0046 7.33954 12.7867Z" fill="#4B4B4B"/>
  <path d="M15.1767 30.3535C23.5587 30.3535 30.3535 23.5587 30.3535 15.1768C30.3535 6.79494 23.5587 0 15.1767 0C6.79481 0 0 6.79487 0 15.1767C0.00936217 23.5547 6.79872 30.3442 15.1767 30.3535ZM15.1767 2.42825C22.2175 2.42825 27.9252 8.13592 27.9252 15.1767C27.9252 22.2175 22.2175 27.9252 15.1767 27.9252C8.13592 27.9252 2.42825 22.2175 2.42825 15.1767C2.43629 8.13931 8.13931 2.43629 15.1767 2.42825Z" fill="#4B4B4B"/>
  <path d="M15.1748 31.5676C8.85267 31.562 3.09587 27.9254 0.375 22.2188C1.96152 29.1139 8.09945 33.9999 15.1748 33.9999C22.2501 33.9999 28.3881 29.1139 29.9746 22.2188C27.2538 27.9254 21.497 31.5619 15.1748 31.5676Z" fill="#4B4B4B"/>
</svg>

              <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
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


 <div className="flex items-center justify-center gap-2 
                mt-auto m-4 px-4 py-2  
                rounded-md
                bg-[#F88379]">

 
<svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
  <path d="M32.5 19.9997V29.9997C32.5 33.683 29.5912 36.6663 26 36.6663H13C9.40875 36.6663 6.5 33.683 6.5 29.9997V19.9997C6.5 19.083 7.23125 18.333 8.125 18.333H11.3262C12.22 18.333 12.9512 19.083 12.9512 19.9997V25.233C12.9512 26.4663 13.6175 27.5997 14.6737 28.183C15.145 28.4497 15.665 28.583 16.2013 28.583C16.8188 28.583 17.4363 28.3997 17.9725 28.033L19.5163 26.9997L20.9463 27.983C21.9375 28.6663 23.205 28.7497 24.2612 28.1663C25.3337 27.583 26 26.4663 26 25.2163V19.9997C26 19.083 26.7313 18.333 27.625 18.333H30.875C31.7687 18.333 32.5 19.083 32.5 19.9997Z" fill="white"/>
  <path d="M34.9375 11.6663V13.333C34.9375 15.1663 34.0763 16.6663 31.6875 16.6663H7.3125C4.82625 16.6663 4.0625 15.1663 4.0625 13.333V11.6663C4.0625 9.83301 4.82625 8.33301 7.3125 8.33301H31.6875C34.0763 8.33301 34.9375 9.83301 34.9375 11.6663Z" fill="white"/>
  <path d="M18.915 8.33372H9.94502C9.39252 7.71706 9.40877 6.76706 9.99377 6.16706L12.3013 3.80039C12.9025 3.18372 13.8938 3.18372 14.495 3.80039L18.915 8.33372Z" fill="white"/>
  <path d="M29.0388 8.33372H20.0688L24.4888 3.80039C25.0901 3.18372 26.0813 3.18372 26.6826 3.80039L28.9901 6.16706C29.5751 6.76706 29.5913 7.71706 29.0388 8.33372Z" fill="white"/>
  <path d="M22.7013 18.333C23.5951 18.333 24.3263 19.083 24.3263 19.9997V25.2163C24.3263 26.5497 22.8801 27.3497 21.8076 26.5997L20.3451 25.5997C19.8088 25.233 19.1101 25.233 18.5576 25.5997L17.0301 26.633C15.9576 27.3663 14.5276 26.5663 14.5276 25.2497V19.9997C14.5276 19.083 15.2588 18.333 16.1526 18.333H22.7013Z" fill="white"/>
</svg>

  

  <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
    1 month free referral program
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