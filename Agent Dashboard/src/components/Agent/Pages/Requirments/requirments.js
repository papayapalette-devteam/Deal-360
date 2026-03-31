import { useState, useRef, useEffect } from "react";
import UnlockBuyerContactModal from "./credit_deduct_modal";

// ── Data ────────────────────────────────────────────────────────────────────

const buyers = [
  {
    id: 1,
    initial: "S",
    timeAgo: "2 hours ago",
    preferredLocations: "Portofino, DAMAC Lagoons, Dubai",
    useType: "Investment",
    budget: "3,800,000",
    budgetValue: 3800000,
    propertyType: "Villa",
    buyerSignals: "Ready to Proceed, Serious buyer",
    configuration: "any",
    occupancyStatus: "Vacant, Tenanted",
    completionStatus: "Ready, Off-plan",
    ownershipTenure: "Freehold",
    bedroomsMin: "5",
    bathroomsMin: "6",
    builtUpArea: "2364 Sq.Ft",
    plotSize: "1550 Sq.Ft",
    parkingSpacesMin: "3",
    parkingType: "Any",
    mustHaveFeatures: "Bathtub, Balcony, Pet allowed",
    financeMethod: "Cash Buyer",
    targetClosingDate: "Q1 2026",
    urgencyLevel: "Actively Looking",
    additionalKeywords: "High floor apartment, sea view",
    credits: 1,
  },
  {
    id: 2,
    initial: "A",
    timeAgo: "5 hours ago",
    preferredLocations: "Downtown Dubai, Palm Jumeirah",
    useType: "Own Use",
    budget: "5,500,000",
    budgetValue: 5500000,
    propertyType: "Apartment",
    buyerSignals: "Ready to Proceed",
    configuration: "2BHK",
    occupancyStatus: "Vacant",
    completionStatus: "Ready",
    ownershipTenure: "Freehold",
    bedroomsMin: "2",
    bathroomsMin: "2",
    builtUpArea: "1200 Sq.Ft",
    plotSize: "—",
    parkingSpacesMin: "1",
    parkingType: "Covered",
    mustHaveFeatures: "Sea View, Pool Access",
    financeMethod: "Mortgage",
    targetClosingDate: "Q2 2026",
    urgencyLevel: "Actively Looking",
    additionalKeywords: "High floor, marina view",
    credits: 1,
  },
  {
    id: 3,
    initial: "M",
    timeAgo: "1 day ago",
    preferredLocations: "Arabian Ranches, Jumeirah",
    useType: "Investment",
    budget: "2,200,000",
    budgetValue: 2200000,
    propertyType: "Townhouse",
    buyerSignals: "Serious buyer",
    configuration: "3BHK",
    occupancyStatus: "Tenanted",
    completionStatus: "Off-plan",
    ownershipTenure: "Leasehold",
    bedroomsMin: "3",
    bathroomsMin: "3",
    builtUpArea: "1800 Sq.Ft",
    plotSize: "2000 Sq.Ft",
    parkingSpacesMin: "2",
    parkingType: "Any",
    mustHaveFeatures: "Garden, Storage",
    financeMethod: "Cash Buyer",
    targetClosingDate: "Q3 2026",
    urgencyLevel: "Planning",
    additionalKeywords: "Near schools, quiet community",
    credits: 1,
  },
  {
    id: 4,
    initial: "R",
    timeAgo: "2 days ago",
    preferredLocations: "Business Bay, DIFC",
    useType: "Investment",
    budget: "8,000,000",
    budgetValue: 8000000,
    propertyType: "Villa",
    buyerSignals: "Ready to Proceed, Serious buyer",
    configuration: "5BHK",
    occupancyStatus: "Vacant",
    completionStatus: "Ready",
    ownershipTenure: "Freehold",
    bedroomsMin: "5",
    bathroomsMin: "4",
    builtUpArea: "4500 Sq.Ft",
    plotSize: "6000 Sq.Ft",
    parkingSpacesMin: "3",
    parkingType: "Covered",
    mustHaveFeatures: "Pool, Gym, Smart Home",
    financeMethod: "Cash Buyer",
    targetClosingDate: "Q1 2026",
    urgencyLevel: "Actively Looking",
    additionalKeywords: "Waterfront, luxury finishes",
    credits: 1,
  },
];

const infoFields = [
  { label: "Preferred Locations", key: "preferredLocations" },
  { label: "Use Type", key: "useType" },
  { label: "Budget (AED)", key: "budget" },
  { label: "Buyer signals", key: "buyerSignals" },
  { label: "Property Type", key: "propertyType" },
  { label: "Configuration", key: "configuration" },
  { label: "Occupancy Status", key: "occupancyStatus" },
  { label: "Completion Status", key: "completionStatus" },
  { label: "Ownership Tenure", key: "ownershipTenure" },
  { label: "Bedrooms (Min)", key: "bedroomsMin" },
  { label: "Bathrooms (Min)", key: "bathroomsMin" },
  { label: "Built-Up Area(BUA)", key: "builtUpArea" },
  { label: "Plot Size", key: "plotSize" },
  { label: "Parking Spaces (Min)", key: "parkingSpacesMin" },
  { label: "Parking Type", key: "parkingType" },
  { label: "Must-Have Features", key: "mustHaveFeatures" },
  { label: "Finance Method", key: "financeMethod" },
  { label: "Target Closing Date", key: "targetClosingDate" },
  { label: "Urgency Level", key: "urgencyLevel" },
  { label: "Additional Keywords or Requirements*", key: "additionalKeywords" },
];

const budgetOptions = ["All Budgets", "Under 2M AED", "2M – 5M AED", "5M+ AED"];
const typeOptions = ["All Types", "Villa", "Apartment", "Townhouse"];

// ── SVG Icons ────────────────────────────────────────────────────────────────

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        d="M6.66903 13.3333C6.66897 13.4572 6.70344 13.5787 6.76856 13.6841C6.83368 13.7895 6.92688 13.8746 7.0377 13.93L8.37103 14.5967C8.4727 14.6475 8.58566 14.6714 8.69919 14.6663C8.81273 14.6612 8.92306 14.6271 9.01972 14.5673C9.11637 14.5075 9.19614 14.424 9.25144 14.3247C9.30675 14.2254 9.33575 14.1137 9.3357 14V9.33333C9.33585 9.00292 9.45867 8.68433 9.68036 8.43933L14.4957 3.11333C14.582 3.01771 14.6388 2.89912 14.6591 2.77192C14.6794 2.64472 14.6625 2.51435 14.6103 2.39658C14.5581 2.27881 14.4729 2.17868 14.365 2.1083C14.2571 2.03792 14.1312 2.0003 14.0024 2H2.00236C1.87344 2.00005 1.74729 2.03748 1.6392 2.10776C1.53111 2.17804 1.44572 2.27815 1.39337 2.39598C1.34102 2.5138 1.32395 2.64427 1.34425 2.77159C1.36454 2.89892 1.42131 3.01762 1.5077 3.11333L6.32436 8.43933C6.54605 8.68433 6.66888 9.00292 6.66903 9.33333V13.3333Z"
        stroke="#717182"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 opacity-50">
      <path d="M4 6L8 10L12 6" stroke="#717182" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        d="M10.2917 5.96094H2.70833C2.11002 5.96094 1.625 6.44596 1.625 7.04427V10.8359C1.625 11.4342 2.11002 11.9193 2.70833 11.9193H10.2917C10.89 11.9193 11.375 11.4342 11.375 10.8359V7.04427C11.375 6.44596 10.89 5.96094 10.2917 5.96094Z"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.79297 5.95585V3.78919C3.7923 3.11755 4.04121 2.46961 4.49138 1.97117C4.94156 1.47273 5.56088 1.15934 6.22912 1.09184C6.89736 1.02434 7.56684 1.20755 8.1076 1.6059C8.64836 2.00424 9.02182 2.58931 9.15547 3.24752"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CreditsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M4.66797 8.16406C6.60097 8.16406 8.16797 6.59706 8.16797 4.66406C8.16797 2.73107 6.60097 1.16406 4.66797 1.16406C2.73497 1.16406 1.16797 2.73107 1.16797 4.66406C1.16797 6.59706 2.73497 8.16406 4.66797 8.16406Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5521 6.05469C11.1035 6.26027 11.5942 6.60158 11.9788 7.04705C12.3633 7.49253 12.6294 8.02778 12.7523 8.60331C12.8752 9.17884 12.8509 9.77607 12.6819 10.3398C12.5128 10.9035 12.2043 11.4154 11.7849 11.8283C11.3655 12.2412 10.8488 12.5416 10.2826 12.7019C9.71631 12.8622 9.11878 12.8771 8.54523 12.7452C7.97169 12.6133 7.44065 12.339 7.00123 11.9475C6.56182 11.556 6.2282 11.0601 6.03125 10.5055" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.08203 3.5H4.66536V5.83333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.74838 8.09375L10.1567 8.50792L8.51172 10.1529" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── FilterDropdown ───────────────────────────────────────────────────────────

function FilterDropdown({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-3 px-3 h-9 rounded-lg font-arimo text-sm text-black min-w-[140px] sm:min-w-[180px]"
        style={{ backgroundColor: "var(--form-secondary)" }}
      >
        <span>{value}</span>
        <ChevronIcon />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-full overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2 font-arimo text-sm transition-colors hover:bg-gray-50 ${value === opt ? "font-semibold" : ""}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── InfoPill ─────────────────────────────────────────────────────────────────

function InfoPill({ label, value }) {
  return (
    <div
      className="flex flex-col justify-center gap-2 px-4 py-2 rounded-lg overflow-hidden flex-1 min-w-0"
      style={{ backgroundColor: "var(--brand-mint-light)" }}
    >
      <p className="font-poppins text-xs leading-[120%]" style={{ color: "var(--form-placeholder)" }}>
        {label}
      </p>
      <p className="font-poppins text-sm leading-[120%] text-black">
        {value || <span className="text-transparent select-none">—</span>}
      </p>
    </div>
  );
}

// ── BuyerCard ────────────────────────────────────────────────────────────────

function BuyerCard({ buyer,setIsModalOpen }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "rgba(127, 255, 212, 0.20)" }}
        >
          <span className="font-arimo font-bold text-base text-[#0A0A0A]">{buyer.initial}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-manrope font-bold text-lg sm:text-xl leading-6 text-[#0A0A0A]">
            Verified Buyer
          </span>
          <span className="font-manrope text-sm sm:text-base leading-5 text-[#717182]">
            {buyer.timeAgo}
          </span>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {infoFields.map((field) => (
          <InfoPill key={field.key} label={field.label} value={buyer[field.key]} />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        {/* Unlock & Contact button */}
        <button
        onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 px-4 py-[7px] rounded-lg font-arimo text-sm text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--form-secondary)" }}
        >
          <LockIcon />
          <span>Unlock &amp; Contact</span>
        </button>

        {/* Credits badge */}
        <div
          className="flex items-center gap-1 px-[13px] py-[9px] rounded-lg"
          style={{ backgroundColor: "var(--form-primary)" }}
        >
          <CreditsIcon />
          <span className="font-arimo text-sm leading-4 text-white">{buyer.credits} credits</span>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function BuyerRequirements() {
  const [budgetFilter, setBudgetFilter] = useState("All Budgets");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBuyers = buyers.filter((buyer) => {
    const budgetMatch =
      budgetFilter === "All Budgets" ||
      (budgetFilter === "Under 2M AED" && buyer.budgetValue < 2000000) ||
      (budgetFilter === "2M – 5M AED" && buyer.budgetValue >= 2000000 && buyer.budgetValue <= 5000000) ||
      (budgetFilter === "5M+ AED" && buyer.budgetValue > 5000000);

    const typeMatch =
      typeFilter === "All Types" || buyer.propertyType === typeFilter;

    return budgetMatch && typeMatch;
  });

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(var(--background))" }}>
      <div className="max-w-[1403px] mx-auto flex flex-col gap-6">

        {/* ── Filter Bar ── */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter label */}
          <div className="flex items-center gap-2">
            <FilterIcon />
            <span className="font-arimo text-sm text-[#0A0A0A] leading-5">Filters:</span>
          </div>

          {/* Dropdowns */}
          <FilterDropdown
            value={budgetFilter}
            options={budgetOptions}
            onChange={setBudgetFilter}
          />
          <FilterDropdown
            value={typeFilter}
            options={typeOptions}
            onChange={setTypeFilter}
          />

          {/* Showing count — pushed to the right on larger screens */}
          <span className="ml-auto font-manrope text-sm text-[#717182] leading-5 whitespace-nowrap">
            Showing {filteredBuyers.length} requirement{filteredBuyers.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Buyer Cards ── */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {filteredBuyers.length > 0 ? (
            filteredBuyers.map((buyer) => (
              <BuyerCard key={buyer.id} buyer={buyer} setIsModalOpen={setIsModalOpen}/>
            ))
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center">
              <p className="font-manrope text-[#717182]">No requirements match the selected filters.</p>
            </div>
          )}
        </div>

              <UnlockBuyerContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => setIsModalOpen(false)}
        creditsToDeduct={1}
        balanceAfter={151}
      />

      </div>
    </div>
  );
}
