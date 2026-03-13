import { useState } from "react";
import CancelModal from "./cancel_modal";
import FreezeModal from "./freeze_modal";
import DowngradeModal from "./downgrand_modal";


export default function Subscription() {

      const [activeModal, setActiveModal] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
   const [successMessage, setSuccessMessage] = useState("");

    const openModal = (modal) => {
    setSuccessMessage("");
    setActiveModal(modal);
  };

  const closeAllModals = () => {
    setActiveModal(null);
    setSelectedPlan(null);
  };


  /* ─── inline SVG helpers ─── */
  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const InfoCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M3.33203 8H12.6654" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3.33594V12.6693" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CreditIcon48 = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#F88379" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36.1797 20.7422C38.0703 21.447 39.7527 22.6172 41.0712 24.1446C42.3897 25.6719 43.3018 27.5071 43.7232 29.4803C44.1445 31.4536 44.0615 33.5012 43.4818 35.4339C42.9021 37.3665 41.8444 39.1218 40.4065 40.5374C38.9687 41.953 37.1971 42.9832 35.2557 43.5326C33.3142 44.0821 31.2655 44.1332 29.2991 43.6811C27.3326 43.229 25.5119 42.2884 24.0053 40.9462C22.4988 39.604 21.355 37.9036 20.6797 36.0022" stroke="#F88379" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 12H16V20" stroke="#F88379" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33.4197 27.7578L34.8197 29.1778L29.1797 34.8178" stroke="#F88379" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CreditIcon28White = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M9.33203 16.3359C13.198 16.3359 16.332 13.2019 16.332 9.33594C16.332 5.46994 13.198 2.33594 9.33203 2.33594C5.46604 2.33594 2.33203 5.46994 2.33203 9.33594C2.33203 13.2019 5.46604 16.3359 9.33203 16.3359Z" stroke="#F8F9FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.1042 12.0938C22.207 12.5049 23.1884 13.1875 23.9575 14.0785C24.7267 14.9694 25.2587 16.0399 25.5045 17.191C25.7503 18.3421 25.7019 19.5365 25.3637 20.6639C25.0256 21.7913 24.4086 22.8152 23.5698 23.641C22.7311 24.4667 21.6977 25.0676 20.5651 25.3882C19.4326 25.7087 18.2376 25.7385 17.0905 25.4748C15.9434 25.2111 14.8813 24.6624 14.0025 23.8794C13.1236 23.0965 12.4564 22.1046 12.0625 20.9954" stroke="#F8F9FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.16797 7H9.33464V11.6667" stroke="#F8F9FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4968 16.1953L20.3134 17.0236L17.0234 20.3136" stroke="#F8F9FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const TrendDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3346 14.1693L11.2513 7.08594L7.08464 11.2526L1.66797 5.83594" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 14.1641H18.332V9.16406" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const TrendUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3346 5.83594L11.2513 12.9193L7.08464 8.7526L1.66797 14.1693" stroke="#00A63E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 5.83594H18.332V10.8359" stroke="#00A63E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  /* ─── data ─── */
  const plans = [
    {
      id: 'lite',
      name: 'Agent Lite',
      price: 'Free',
      priceUnit: null,
      desc: 'Essential tools to get started with basic listings and lead access.',
      credits: 0,
      features: [
        'Basic agent profile',
        'Low search visibility',
        'Unlimited standard listings',
        'SmartLink & QR referrals',
        'Requirement leads access',
        'Listing Intent leads access',
        'Unlock leads: 79 AED each',
      ],
      isCurrent: false,
      cardStyle: 'default',
      buttonText: 'Downgrade',
      buttonStyle: 'ghost',
    },
    {
      id: 'basic',
      name: 'Agent Basic',
      price: 'AED 149',
      priceUnit: '/mo',
      desc: 'Enhanced profile and tools for growing agents.',
      credits: 20,
      features: [
        'Enhanced agent profile',
        'Medium search visibility',
        'Unlimited standard listings',
        'SmartLink & QR referrals',
        'Requirement & Listing Intent leads',
        'Proposal tools',
        'Agent-to-agent (A2A) access',
        'Property Manager',
        'Unlock: 1 credit or 79 AED per lead',
      ],
      isCurrent: true,
      cardStyle: 'highlighted',
      buttonText: 'Manage Plan',
      buttonStyle: 'coral',
    },
    {
      id: 'plus',
      name: 'Agent Plus',
      price: 'AED 299',
      priceUnit: '/mo',
      desc: 'Verified status and priority placement for serious professionals.',
      credits: 50,
      features: [
        'VerifiedAgent badge (approval required)',
        'High search visibility',
        'Priority profile placement',
        'Unlimited standard listings',
        'SmartLink & QR referrals',
        'Requirement & Listing Intent leads',
        'Proposal tools',
        'A2A access',
        'Property Manager',
        'Unlock: 1 credit or 79 AED per lead',
      ],
      isCurrent: false,
      cardStyle: 'gray',
      buttonText: 'Upgrade Plan',
      buttonStyle: 'mint',
    },
    {
      id: 'elite',
      name: 'Agent Elite',
      price: 'AED 499',
      priceUnit: '/mo',
      desc: 'Maximum visibility and exclusive access for top performers.',
      credits: 100,
      features: [
        'Elite profile marker',
        'Top search visibility',
        'Priority ranking in selected areas',
        'Unlimited standard listings',
        'SmartLink & QR referrals',
        'Requirement & Listing Intent leads',
        'Proposal tools',
        'A2A access',
        'Property Manager',
        'Visibility to Private & Off-Market inventory (where available)',
        'Early access to new features',
        'Unlock: 1 credit or 79 AED per lead',
      ],
      isCurrent: false,
      cardStyle: 'default',
      buttonText: 'Upgrade Plan',
      buttonStyle: 'mint',
    },
  ];

  const creditPackages = [
    { credits: 20, price: 'AED 199', perCredit: '~9.95 AED/credit', popular: false },
    { credits: 50, price: 'AED 449', perCredit: '~8.98 AED/credit', popular: true },
    { credits: 100, price: 'AED 799', perCredit: '~7.99 AED/credit', popular: false },
    { credits: 250, price: 'AED 1,899', perCredit: '~7.60 AED/credit', popular: false },
  ];

  const usageHistory = [
    { type: 'debit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: -5 },
    { type: 'debit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: -10 },
    { type: 'credit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: 100 },
    { type: 'debit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: -3 },
    { type: 'debit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: -7 },
    { type: 'credit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: 50 },
    { type: 'credit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: 5 },
    { type: 'debit', desc: 'Unlocked buyer requirement - Sarah M.', date: '2024-01-08 10:30', amount: -15 },
  ];

  /* ─── card style helpers ─── */
  const cardClass = (style) => {
    if (style === 'highlighted') return 'border border-[#7FFFD4] bg-[rgba(127,255,212,0.10)] rounded-xl relative';
    if (style === 'gray') return 'rounded-xl bg-[var(--form-primary-foreground)] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] relative';
    return 'border border-[#E5E7EB] bg-white rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] relative';
  };

  const buttonClass = (style) => {
    if (style === 'coral') return 'flex items-center justify-center gap-2 w-full py-[11px] px-4 rounded-lg bg-[var(--form-primary)] text-white font-medium text-sm';
    if (style === 'mint') return 'flex items-center justify-center w-full py-[11px] px-4 rounded-lg bg-[var(--form-secondary)] text-[#0A0A0A] font-medium text-sm';
    return 'flex items-center justify-center w-full py-[11px] px-4 rounded-lg bg-white text-[#0A0A0A] font-medium text-sm';
  };

  const featureTextClass = (planId) => {
    if (planId === 'plus' || planId === 'elite') return 'text-[#0A0A0A] text-xs';
    return 'text-[#4B5563] text-xs';
  };

  /* ─── render ─── */
  return (
    <div className="min-h-screen bg-[var(--form-primary-foreground)] py-6 px-4 md:px-6 lg:px-8" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1380px] mx-auto flex flex-col gap-8">

        {/* ── 1. Header ── */}
        <div className="flex flex-col items-start gap-2.5">
          <div className="flex items-center gap-2 py-[9px] px-8 rounded-lg bg-[var(--form-primary)]">
            <span className="text-white text-sm font-medium leading-6">Renewal date: 10 Mar 2026</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="py-[11px] px-[85px] rounded-lg bg-[var(--form-secondary)] text-[#0A0A0A] text-sm font-medium leading-6 whitespace-nowrap">
            Manage the Subscription
          </button>
        </div>

        {/* ── 2. Pricing Plans ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={cardClass(plan.cardStyle)}>

              {/* Current Plan badge */}
              {plan.isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center px-6 py-[3px] rounded-lg border border-black/10 bg-[var(--form-primary)] overflow-hidden z-10 whitespace-nowrap">
                  <span className="text-white text-xs" style={{ fontFamily: "'Arimo', sans-serif" }}>Current Plan</span>
                </div>
              )}

              <div className="p-6 flex flex-col h-full">

                {/* Plan name */}
                <h3 className="text-[#0A0A0A] text-[15px] font-bold leading-7 mb-1">{plan.name}</h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-2">
                  {plan.priceUnit ? (
                    <>
                      <span
                        className="text-[#000000] font-semibold leading-10"
                        style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-[#45556C] text-lg font-normal leading-7 pb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {plan.priceUnit}
                      </span>
                    </>
                  ) : (
                    <span
                      className="text-[#111827] font-bold"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '26px', lineHeight: '36px' }}
                    >
                      {plan.price}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#6B7280] text-xs leading-[22px] mb-4 min-h-[44px]">{plan.desc}</p>

                {/* Credits pill */}
                <div className="flex items-center justify-between px-3 py-[13px] rounded-lg bg-[#FFEAE8] mb-3">
                  <span className="text-[#374151] text-xs font-medium leading-5">Monthly Credits  Included</span>
                  <span className="text-[#4B5563] text-[15px] font-bold leading-7">{plan.credits}</span>
                </div>

                {/* Includes label */}
                <p className="text-[#9CA3AF] text-[10px] font-semibold leading-4 mb-2">Includes</p>

                {/* Features list – flex-1 pushes button to bottom */}
                <ul className="flex flex-col gap-3 flex-1 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className={featureTextClass(plan.id)} style={{ lineHeight: '17px' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Action button */}
                <button className={buttonClass(plan.buttonStyle)}>
                  <span>{plan.buttonText}</span>
                  {plan.buttonStyle === 'coral' && <ChevronUpIcon />}
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* ── 3. Billing Notice ── */}
        <div className="flex flex-col gap-3 p-2 rounded-2xl bg-[#F6F6F6]">
          <div className="flex items-center gap-3 px-2 pt-1">
            <InfoCircleIcon />
            <span className="text-black font-medium text-base leading-5" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Takes effect next billing cycle
            </span>
          </div>
          <button onClick={() => openModal("downgrade")} className="flex items-center justify-center py-[13px] px-8 rounded-lg bg-white w-full">
            <span className="text-black font-medium text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Downgrade plan</span>
          </button>
          <button onClick={() => openModal("freeze")} className="flex items-center justify-center py-[13px] px-8 rounded-lg bg-white w-full">
            <span className="text-black font-medium text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Freeze for 1 month (Travel mode)</span>
          </button>
          <button onClick={() => openModal("cancel")} className="flex items-center justify-center py-[13px] px-8 rounded-lg bg-white w-full">
            <span className="text-black font-medium text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Cancel subscription anytime</span>
          </button>
        </div>

        {/* ── 4. Available Credits ── */}
        <div className="rounded-[14px] border-2 border-[var(--form-primary)] bg-[rgba(248,131,121,0.12)] p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Left side */}
            <div className="flex flex-col gap-2">
              <span className="text-[#717182] text-base font-normal leading-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Available Credits
              </span>
              <div className="flex items-center gap-3">
                <CreditIcon48 />
                <span
                  className="text-[#0A0A0A] font-bold"
                  style={{ fontFamily: "'Manrope', sans-serif", fontSize: '48px', lineHeight: '48px' }}
                >
                  156
                </span>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[var(--form-primary)] text-base font-normal" style={{ fontFamily: "'Manrope', sans-serif" }}>45 credits</span>
                <span className="text-[#717182] text-base font-normal" style={{ fontFamily: "'Manrope', sans-serif" }}>used this month</span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-stretch sm:items-end gap-2 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[var(--form-secondary)] h-[42px] whitespace-nowrap">
                <PlusIcon />
                <span className="text-black text-sm font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Buy More Credits</span>
              </button>
              <button className="flex items-center justify-center py-[9px] px-8 rounded-lg bg-[var(--form-primary)] h-12 whitespace-nowrap">
                <span className="text-[var(--form-primary-foreground)] text-sm font-normal text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Credits reset: 10 Mar 2026</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── 5. Credit Packages ── */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#0A0A0A] text-xl font-bold leading-7" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Credit Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg, i) => (
              <div
                key={i}
                className={
                  pkg.popular
                    ? 'relative rounded-xl border-2 border-[#7FFFD4] bg-gradient-to-br from-[rgba(127,255,212,0.20)] to-[rgba(255,255,255,0.30)] flex flex-col items-center pt-8 pb-8 px-4'
                    : 'relative rounded-xl border-2 border-[#E5E7EB] bg-white flex flex-col items-center pt-6 pb-6 px-4'
                }
              >
                {/* Most popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center px-3 py-1 rounded-full bg-[var(--form-secondary)] shadow-md whitespace-nowrap">
                    <span className="text-[#4B4B4B] text-[10px] font-bold leading-4">Most popular</span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--form-primary)] mb-4 flex-shrink-0">
                  <CreditIcon28White />
                </div>

                {/* Credits label */}
                <p className="text-[#111827] text-[15px] font-bold leading-7 text-center mb-2">
                  {pkg.credits} Credits
                </p>

                {/* Price */}
                <p
                  className="text-[#111827] font-bold text-center mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '26px', lineHeight: '36px' }}
                >
                  {pkg.price}
                </p>

                {/* Per credit */}
                <p className="text-[#6B7280] text-xs text-center mb-6">{pkg.perCredit}</p>

                {/* Button */}
                {pkg.popular ? (
                  <button className="w-full py-[11px] px-4 rounded-lg bg-[var(--form-primary)] text-white text-sm font-medium text-center">
                    Purchase Pack
                  </button>
                ) : (
                  <button className="w-full py-3 px-4 rounded-lg border-2 border-[#D1D5DB] bg-white text-[#374151] text-sm font-medium text-center">
                    Purchase Pack
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. Usage History ── */}
        <div className="rounded-[14px] border border-black/10 bg-white flex flex-col gap-8 p-6">
          <h2 className="text-[#0A0A0A] text-xl font-medium" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Usage History
          </h2>
          <div className="flex flex-col gap-3">
            {usageHistory.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-5 rounded-[10px]"
              >
                {/* Left: icon + text */}
                <div className="flex items-center gap-4 min-w-0">
                  {/* Icon circle */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0 ${
                      item.type === 'credit' ? 'bg-[#DCFCE7]' : 'bg-[rgba(248,131,121,0.20)]'
                    }`}
                  >
                    {item.type === 'credit' ? <TrendUpIcon /> : <TrendDownIcon />}
                  </div>
                  {/* Description */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className="text-[#0A0A0A] text-base font-medium leading-6 truncate"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.desc}
                    </span>
                    <span
                      className="text-[#717182] text-sm font-normal leading-4"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Right: amount */}
                <div className="flex flex-col items-end ml-4 flex-shrink-0">
                  <span
                    className={`text-lg font-bold leading-7 ${
                      item.type === 'credit' ? 'text-[#00A63E]' : 'text-[var(--form-primary)]'
                    }`}
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.amount > 0 ? `+${item.amount}` : item.amount}
                  </span>
                  <span
                    className="text-[#717182] text-sm font-normal leading-4 text-right"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    credits
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

              {activeModal === "cancel" && (
        <CancelModal
          onClose={closeAllModals}
        //   onDowngrade={handleDowngrade}
        //   onFreeze={handleFreeze}
        //   onCancelAnyway={handleCancelAnyway}
        />
      )}

                  {activeModal === "freeze" && (
        <FreezeModal
          onClose={closeAllModals}
        //   onDowngrade={handleDowngrade}
        //   onFreeze={handleFreeze}
        //   onCancelAnyway={handleCancelAnyway}
        />
      )}

                     {activeModal === "downgrade" && (
        <DowngradeModal
          onClose={closeAllModals}
        //   onDowngrade={handleDowngrade}
        //   onFreeze={handleFreeze}
        //   onCancelAnyway={handleCancelAnyway}
        />
      )}

      </div>
    </div>
  );
}
