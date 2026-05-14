import { useState } from "react";

// ─── Icon Components ────────────────────────────────────────────────────────

const TrendingUpIcon = ({ size = 16, color = "black" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6654 4.66406L8.9987 10.3307L5.66536 6.9974L1.33203 11.3307" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.668 4.66406H14.668V8.66406" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3737 8.74346C1.31814 8.58443 1.31814 8.40949 1.3737 8.25046C1.91483 6.85636 2.83338 5.66436 4.01288 4.8256C5.19239 3.98683 6.57973 3.53906 7.99904 3.53906C9.41834 3.53906 10.8057 3.98683 11.9852 4.8256C13.1647 5.66436 14.0832 6.85636 14.6244 8.25046C14.6799 8.40949 14.6799 8.58443 14.6244 8.74346C14.0832 10.1376 13.1647 11.3296 11.9852 12.1683C10.8057 13.0071 9.41834 13.4549 7.99904 13.4549C6.57973 13.4549 5.19239 13.0071 4.01288 12.1683C2.83338 11.3296 1.91483 10.1376 1.3737 8.74346Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10.625C9.10457 10.625 10 9.6736 10 8.5C10 7.32639 9.10457 6.375 8 6.375C6.89543 6.375 6 7.32639 6 8.5C6 9.6736 6.89543 10.625 8 10.625Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.9987 14.6693C11.6806 14.6693 14.6654 11.6845 14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594C4.3168 1.33594 1.33203 4.32071 1.33203 8.0026C1.33203 11.6845 4.3168 14.6693 7.9987 14.6693Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 4V8L10.6667 9.33333" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrendingUpLargeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 7H22V13" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.9987 14.6693C11.6806 14.6693 14.6654 11.6845 14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594C4.3168 1.33594 1.33203 4.32071 1.33203 8.0026C1.33203 11.6845 4.3168 14.6693 7.9987 14.6693Z" stroke="#7FFFD4" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 7.9974L7.33333 9.33073L10 6.66406" stroke="#7FFFD4" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 4L12 12" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9L12 15L6 9" stroke="#838383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill="#999999"/>
    <path d="M20 9.84375H4C3.45 9.84375 3 10.2937 3 10.8438V17.0037C3 20.0037 4.5 22.0037 8 22.0037H16C19.5 22.0037 21 20.0037 21 17.0037V10.8438C21 10.2937 20.55 9.84375 20 9.84375Z" fill="#999999"/>
  </svg>
);

// ─── Types ───────────────────────────────────────────────────────────────────





// ─── Data ────────────────────────────────────────────────────────────────────

const promotions = [
  {
    name: "Skyline Towers",
    status: "active",
    type: "Featured Listing",
    duration: "2025-06-01 to 2025-06-30",
    views: "12,450",
    leads: 43,
    daysRemaining: "15 days",
    conversion: "0.35%",
  },
  {
    name: "Riverside Heights",
    status: "active",
    type: "Boosted Visibility",
    duration: "2025-06-10 to 2025-07-10",
    views: "8,920",
    leads: 28,
    daysRemaining: "25 days",
    conversion: "0.31%",
  },
  {
    name: "Garden Residences",
    status: "ending-soon",
    type: "Premium Placement",
    duration: "2025-05-15 to 2025-06-15",
    views: "15,670",
    leads: 52,
    daysRemaining: "Ending Today",
    conversion: "0.33%",
  },
];

const promotionTypes = [
  {
    icon: <StarIcon />,
    name: "Featured Listing",
    description: "Top placement in search results and homepage",
    features: ["Priority placement", "Badge highlighting", "2x visibility boost"],
    buttonLabel: "Request Featured Listing",
  },
  {
    icon: <TrendingUpLargeIcon />,
    name: "Boosted Visibility",
    description: "Enhanced exposure across platform",
    features: ["Increased impressions", "Better ranking", "Email campaigns"],
    buttonLabel: "Request Boosted Visibility",
  },
  {
    icon: <StarIcon />,
    name: "Premium Placement",
    description: "Exclusive premium category listing",
    features: ["Premium badge", "Featured carousel", "3x visibility boost"],
    buttonLabel: "Request Premium Placement",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatInfo({ label, children }) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <span className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">{label}</span>
      {children}
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label className="text-black text-base font-medium leading-[120%] truncate w-full">{label}</label>
      {children}
    </div>
  );
}

// ─── Modal: Request Promotion ────────────────────────────────────────────────

function RequestPromotionModal({ onClose }) {
  const [project, setProject] = useState("");
  const [promotionType, setPromotionType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("30");
  const [notes, setNotes] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-[0.875rem] p-6 w-full max-w-[29.5rem] flex flex-col gap-2 shadow-xl max-h-[90vh] "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <div className="flex items-end justify-end">
          <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity">
            <CloseIcon />
          </button>
        </div>

<div
  className="flex flex-col gap-4 overflow-y-auto"
  style={{
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
  }}
>
  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-black text-[1.125rem] font-bold leading-[120%]">Request Promotion</h2>
            <p className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">Boost your project visibility</p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-3">
              {/* Select Project */}
              <FormField label="Select Project">
                <div className="flex h-11 px-3 items-center gap-2 w-full rounded border border-[var(--brand-disable-text)]">
                  <div className="flex justify-between items-center flex-1">
                    <select
                      className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none appearance-none w-full"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    >
                      <option value="" disabled>Choose a project</option>
                      <option value="skyline">Skyline Towers</option>
                      <option value="riverside">Riverside Heights</option>
                      <option value="garden">Garden Residences</option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>
              </FormField>

              {/* Promotion Type */}
              <FormField label="Promotion Type">
                <div className="flex h-11 px-3 items-center gap-2 w-full rounded border border-[var(--brand-disable-text)]">
                  <div className="flex justify-between items-center flex-1">
                    <select
                      className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none appearance-none w-full"
                      value={promotionType}
                      onChange={(e) => setPromotionType(e.target.value)}
                    >
                      <option value="" disabled>Choose promotion type</option>
                      <option value="featured">Featured Listing</option>
                      <option value="boosted">Boosted Visibility</option>
                      <option value="premium">Premium Placement</option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>
              </FormField>

              {/* Start Date */}
              <FormField label="Start Date">
                <div className="flex h-11 px-3 items-center gap-2 w-full rounded border border-[var(--brand-disable-text)]">
                  <CalendarIcon />
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none"
                  />
                </div>
              </FormField>

              {/* Duration */}
              <FormField label="Duration (Days)">
                <div className="flex h-11 px-3 items-center gap-2 w-full rounded border border-[var(--brand-disable-text)]">
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none"
                    min="1"
                  />
                </div>
              </FormField>

              {/* Additional Notes */}
              <FormField label="Additional Notes">
                <div className="flex px-3 py-2 w-full rounded border border-[var(--brand-disable-text)] min-h-[5rem]">
                  <textarea
                    placeholder="Any specific requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none resize-none w-full"
                    rows={3}
                  />
                </div>
              </FormField>
            </div>

            {/* Info box */}
            <div className="flex px-3 py-2 w-full rounded bg-[var(--brand-info-bg)]">
              <p className="text-[var(--brand-gray-text)] text-sm font-normal leading-[120%]">
                Our team will review your request and contact you within 24 hours with pricing and availability.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 justify-end mt-2">
            <button
              onClick={onClose}
              className="flex h-12 px-6 justify-center items-center gap-1 rounded-lg border border-[var(--brand-gray-text)] bg-white"
            >
              <span className="text-[var(--brand-gray-text)] text-sm font-medium leading-[120%]">Cancel</span>
            </button>
            <button className="flex h-12 px-6 justify-center items-center gap-2 rounded-lg bg-[var(--form-secondary)]">
              <TrendingUpIcon size={16} color="#030213" />
              <span className="text-black text-sm font-medium leading-[120%]">Submit Request</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Modal: Contact Support ──────────────────────────────────────────────────

function ContactSupportModal({ onClose }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-[0.875rem] p-6 w-full max-w-[29.5rem] flex flex-col gap-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-black text-[1.125rem] font-bold leading-[120%]">Contact Support</h2>
          <p className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">Get help from our team</p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-3">
          <FormField label="Subject">
            <div className="flex h-11 px-3 items-center gap-2 w-full rounded border border-[var(--brand-disable-text)]">
              <input
                type="text"
                placeholder="Choose a project"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none"
              />
            </div>
          </FormField>

          <FormField label="Message">
            <div className="flex px-3 py-2 w-full rounded border border-[var(--brand-disable-text)] min-h-[4.5625rem]">
              <textarea
                placeholder="Describe your inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-[var(--brand-gray-text)] text-base font-normal bg-transparent outline-none resize-none w-full"
                rows={3}
              />
            </div>
          </FormField>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 justify-end mt-2">
          <button
            onClick={onClose}
            className="flex h-12 px-6 justify-center items-center gap-1 rounded-lg border border-[var(--brand-gray-text)] bg-white"
          >
            <span className="text-[var(--brand-gray-text)] text-sm font-medium leading-[120%]">Cancel</span>
          </button>
          <button className="flex h-12 px-6 justify-center items-center gap-2 rounded-lg bg-[var(--form-secondary)]">
            <span className="text-black text-sm font-medium leading-[120%]">Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal: Promotion Stats ──────────────────────────────────────────────────

function PromotionStatsModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-[0.875rem] p-6 w-full max-w-[29.5rem] flex flex-col gap-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <div className="flex items-end justify-end">
          <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity">
            <CloseIcon />
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-black text-[1.125rem] font-bold leading-[120%]">{data.name} - Promotion Stats</h2>
          <p className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">{data.type} Performance</p>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            {/* Total Views */}
            <div className="flex-1 flex h-[5.75rem] px-6 py-6 flex-col justify-center items-center gap-2 rounded-[0.625rem] bg-[var(--brand-stat-views-bg)]">
              <span className="text-black text-[1.75rem] font-semibold leading-[120%] text-center">{data.views}</span>
              <span className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%] text-center">Total Views</span>
            </div>
            {/* Leads Generated */}
            <div className="flex-1 flex h-[5.75rem] px-6 py-6 flex-col justify-center items-center gap-2 rounded-[0.625rem] bg-[var(--brand-stat-leads-bg)]">
              <span className="text-black text-[1.75rem] font-semibold leading-[120%] text-center">{data.leads}</span>
              <span className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%] text-center">Leads Generated</span>
            </div>
            {/* Conversion Rate */}
            <div className="flex-1 flex h-[5.75rem] px-6 py-6 flex-col justify-center items-center gap-2 rounded-[0.625rem] bg-[var(--brand-stat-conv-bg)]">
              <span className="text-black text-[1.75rem] font-semibold leading-[120%] text-center">{data.conversion}</span>
              <span className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%] text-center">Conversion Rate</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex px-3 py-2 w-full rounded bg-[var(--brand-info-bg)]">
          <p className="text-[var(--brand-gray-text)] text-sm font-normal leading-[120%]">{data.daysInfo}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Promotion() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [statsModalData, setStatsModalData] = useState(null);

  const openStats = (promo) => {
    const isEndingToday = promo.daysRemaining === "Ending Today";
    setStatsModalData({
      name: promo.name,
      type: promo.type,
      views: promo.views,
      leads: promo.leads,
      conversion: promo.conversion,
      daysInfo: isEndingToday
        ? `Your promotion has generated ${promo.views} views and ${promo.leads} leads. Promotion ends today.`
        : `Your promotion has generated ${promo.views} views and ${promo.leads} leads with ${promo.daysRemaining} remaining.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[92.875rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page wrapper */}
        <div className="flex flex-col items-end gap-6">

          {/* Request Promotion button */}
          <button
            onClick={() => setShowRequestModal(true)}
            className="flex h-12 px-6 justify-center items-center gap-2 rounded-lg bg-[var(--form-secondary)] hover:brightness-95 transition-all flex-shrink-0"
          >
            <TrendingUpIcon size={16} color="black" />
            <span className="text-black text-center text-sm font-medium leading-[120%]">Request Promotion</span>
          </button>

          {/* Full-width sections */}
          <div className="flex flex-col gap-6 w-full">

            {/* ── Active Promotions ── */}
            <section className="flex flex-col gap-6 w-full">
              <h2 className="text-black text-xl font-semibold leading-[120%]">Active Promotions</h2>

              <div className="flex flex-col gap-4 w-full">
                {promotions.map((promo) => (
                  <div
                    key={promo.name}
                    className="flex flex-col justify-center items-start gap-4 p-6 rounded-[0.875rem] border border-black/10 w-full"
                  >
                    {/* Top row: name + badges */}
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-black text-[1.125rem] font-normal leading-[120%]">{promo.name}</span>
                      <div className="flex flex-wrap items-center gap-4">
                        {/* Status badge */}
                        {promo.status === "active" ? (
                          <div className="flex h-7 px-3 justify-center items-center rounded-full bg-[rgba(127,255,212,0.20)]">
                            <span className="text-[var(--brand-active-text)] text-center text-sm font-medium leading-[120%]">Active</span>
                          </div>
                        ) : (
                          <div className="flex h-7 px-3 justify-center items-center rounded-full bg-[#FFF3F2]">
                            <span className="text-[var(--form-primary)] text-center text-sm font-medium leading-[120%]">Ending Soon</span>
                          </div>
                        )}
                        {/* Type badge */}
                        <div className="flex h-7 px-3 justify-center items-center rounded-full bg-black/10">
                          <span className="text-black text-center text-sm font-normal leading-[120%]">{promo.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom row: stats + button */}
                    <div className="flex flex-wrap justify-between items-center w-full gap-4">
                      {/* Stats */}
                      <div className="flex flex-wrap items-center gap-6">
                        {/* Duration */}
                        <StatInfo label="Duration">
                          <span className="text-black text-sm font-normal leading-[120%]">{promo.duration}</span>
                        </StatInfo>

                        {/* Total Views */}
                        <StatInfo label="Total Views">
                          <div className="flex items-end gap-1.5">
                            <EyeIcon />
                            <span className="text-black text-sm font-normal leading-[120%]">{promo.views}</span>
                          </div>
                        </StatInfo>

                        {/* Leads Generated */}
                        <StatInfo label="Leads Generated">
                          <span className="text-black text-sm font-normal leading-[120%]">{promo.leads}</span>
                        </StatInfo>

                        {/* Days Remaining */}
                        <StatInfo label="Days Remaining">
                          <div className="flex items-center gap-1.5">
                            <ClockIcon />
                            <span className="text-[#0A0A0A] text-sm font-normal leading-[120%]">{promo.daysRemaining}</span>
                          </div>
                        </StatInfo>
                      </div>

                      {/* View Stats button */}
                      <button
                        onClick={() => openStats(promo)}
                        className="flex h-[2.5625rem] px-4 justify-center items-center gap-2.5 rounded-lg border border-black/10 bg-white hover:bg-gray-50 transition-colors flex-shrink-0"
                      >
                        <span className="text-black text-center text-sm font-normal leading-[120%]">View Stats</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Available Promotion Types ── */}
            <section className="flex flex-col gap-6 w-full">
              <h2 className="text-black text-xl font-semibold leading-[120%]">Available Promotion Types</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {promotionTypes.map((pt) => (
                  <div
                    key={pt.name}
                    className="flex flex-col justify-center items-start gap-2.5 p-6 rounded-[0.875rem] border border-black/10 w-full"
                  >
                    <div className="flex flex-col gap-8 w-full">
                      <div className="flex flex-col gap-8 w-full">
                        <div className="flex flex-col gap-6 w-full">
                          {/* Icon */}
                          <div className="flex h-12 px-4 items-center gap-2.5 rounded-[0.625rem] bg-[rgba(127,255,212,0.10)] overflow-hidden">
                            {pt.icon}
                          </div>

                          {/* Title + Description */}
                          <div className="flex flex-col gap-4 w-full">
                            <span className="text-black text-[1.125rem] font-normal leading-[120%]">{pt.name}</span>
                            <span className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">{pt.description}</span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-2">
                          {pt.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <CheckCircleIcon />
                              <span className="text-black text-sm font-normal leading-[120%]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => setShowRequestModal(true)}
                        className="flex h-12 px-6 justify-center items-center gap-1 w-full rounded-lg bg-[var(--form-secondary)] hover:brightness-95 transition-all"
                      >
                        <span className="text-black text-center text-sm font-medium leading-[120%]">{pt.buttonLabel}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Maximize Your Reach Banner ── */}
            <div className="flex items-start gap-4 p-6 rounded-[0.875rem] bg-[#F0F0F0] w-full">
              {/* Icon box */}
              <div className="flex w-12 h-12 p-3 items-center justify-center flex-shrink-0 rounded-[0.625rem] bg-[rgba(127,255,212,0.10)]">
                <TrendingUpLargeIcon />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <div className="flex flex-col gap-2">
                  <span className="text-black text-[1.125rem] font-normal leading-[120%]">Maximize Your Reach</span>
                  <p className="text-[var(--brand-secondary-text)] text-sm font-normal leading-[120%]">
                    Promoted projects receive 3-5x more visibility and generate 2x more leads on average. Contact our team to discuss custom promotion packages tailored to your needs.
                  </p>
                </div>

                <button
                  onClick={() => setShowContactModal(true)}
                  className="flex h-10 px-6 justify-center items-center gap-1 rounded-lg border border-[var(--brand-disable-text)] bg-white hover:bg-gray-50 transition-colors w-fit"
                >
                  <span className="text-black text-center text-sm font-medium leading-[120%]">Contact Support</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      {showRequestModal && (
        <RequestPromotionModal onClose={() => setShowRequestModal(false)} />
      )}
      {showContactModal && (
        <ContactSupportModal onClose={() => setShowContactModal(false)} />
      )}
      {statsModalData && (
        <PromotionStatsModal data={statsModalData} onClose={() => setStatsModalData(null)} />
      )}
    </div>
  );
}
