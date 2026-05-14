import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Overview", path: "/brokerage/property-manager", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clipPath="url(#ov)"><path d="M9.9974 13.9883V8.65842C9.9974 8.48172 9.9272 8.31227 9.80226 8.18732C9.67732 8.06238 9.50786 7.99219 9.33116 7.99219H6.66623C6.48954 7.99219 6.32008 8.06238 6.19514 8.18732C6.07019 8.31227 6 8.48172 6 8.65842V13.9883" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 6.66545C1.99995 6.47162 2.0422 6.28012 2.12378 6.1043C2.20536 5.92847 2.32432 5.77256 2.47236 5.64745L7.13599 1.65072C7.37649 1.44746 7.6812 1.33594 7.99609 1.33594C8.31098 1.33594 8.6157 1.44746 8.8562 1.65072L13.5198 5.64745C13.6679 5.77256 13.7868 5.92847 13.8684 6.1043C13.95 6.28012 13.9922 6.47162 13.9922 6.66545V12.6615C13.9922 13.0149 13.8518 13.3539 13.6019 13.6037C13.352 13.8536 13.0131 13.994 12.6597 13.994H3.33247C2.97907 13.994 2.64016 13.8536 2.39027 13.6037C2.14038 13.3539 2 13.0149 2 12.6615V6.66545Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ov"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
  )},
  { label: "Documents", path: "/brokerage/edit-property-manager", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clipPath="url(#doc)"><path d="M9.99262 1.33594H3.99653C3.64314 1.33594 3.30422 1.47632 3.05433 1.72621C2.80445 1.97609 2.66406 2.31501 2.66406 2.6684V13.3281C2.66406 13.6815 2.80445 14.0204 3.05433 14.2703C3.30422 14.5202 3.64314 14.6606 3.99653 14.6606H11.9913C12.3447 14.6606 12.6836 14.5202 12.9335 14.2703C13.1834 14.0204 13.3238 13.6815 13.3238 13.3281V4.6671L9.99262 1.33594Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.32812 1.33594V4.00087C9.32812 4.35426 9.46851 4.69318 9.7184 4.94306C9.96828 5.19295 10.3072 5.33333 10.6606 5.33333H13.3255" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.66059 6H5.32812" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.658 8.66406H5.32812" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.658 11.3281H5.32812" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="doc"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
  )},
  { label: "Tenancy", path: "/brokerage/edit-property-manager-tenancy", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clipPath="url(#ten)"><path d="M5.32812 1.33594V4.00087" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.6562 1.33594V4.00087" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.6597 2.66406H3.33247C2.59657 2.66406 2 3.26063 2 3.99653V13.3238C2 14.0597 2.59657 14.6562 3.33247 14.6562H12.6597C13.3956 14.6562 13.9922 14.0597 13.9922 13.3238V3.99653C13.9922 3.26063 13.3956 2.66406 12.6597 2.66406Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 6.66406H13.9922" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="ten"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
  )},
  { label: "Listing Intent", path: "/brokerage/edit-property-manager-listing-intent", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.6606 4.66406L8.99761 10.327L5.66645 6.99588L1.33594 11.3264" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.6562 4.66406H14.6536V8.66146" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { label: "Alerts", path: "/brokerage/edit-property-manager-alerts", badge: 3, icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clipPath="url(#alr)"><path d="M6.84375 13.9922C6.9607 14.1947 7.12891 14.3629 7.33146 14.4799C7.53402 14.5968 7.76378 14.6584 7.99767 14.6584C8.23155 14.6584 8.46132 14.5968 8.66387 14.4799C8.86642 14.3629 9.03463 14.1947 9.15158 13.9922" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.17407 10.2142C2.08703 10.3095 2.0296 10.4282 2.00874 10.5556C1.98789 10.683 2.00452 10.8138 2.05661 10.932C2.1087 11.0501 2.19401 11.1506 2.30215 11.2211C2.4103 11.2917 2.53662 11.3293 2.66575 11.3294H13.3255C13.4546 11.3295 13.5809 11.292 13.6891 11.2216C13.7974 11.1511 13.8828 11.0508 13.935 10.9327C13.9872 10.8146 14.004 10.6839 13.9833 10.5565C13.9626 10.429 13.9054 10.3103 13.8185 10.2148C12.9324 9.30142 11.993 8.33071 11.993 5.33333C11.993 4.27316 11.5719 3.2564 10.8222 2.50675C10.0725 1.75709 9.05578 1.33594 7.99561 1.33594C6.93543 1.33594 5.91868 1.75709 5.16902 2.50675C4.41936 3.2564 3.99821 4.27316 3.99821 5.33333C3.99821 8.33071 3.05816 9.30142 2.17407 10.2142Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="alr"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
  )},
];
const activeTenancies = [
  { property: "Marina Pearl Apartment", tenant: "Sarah Johnson", warning: null },
  { property: "Palm Jumeirah Villa", tenant: "Ahmed Al Mansoori", warning: "Expires in 31 days" },
  { property: "Springs Villa 3BR", tenant: "Michael Chen", warning: null },
  { property: "JBR Beachfront Apartment", tenant: "Emma Williams", warning: null },
];

const intentOptions = [
  {
    key: "renew",
    label: "Renew with Current Tenant",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: false,
  },
  {
    key: "rent",
    label: "List for Rent",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <g clipPath="url(#li_rent)">
          <path d="M5 18.3307V3.33073C5 2.8887 5.17559 2.46478 5.48816 2.15222C5.80072 1.83966 6.22464 1.66406 6.66667 1.66406H13.3333C13.7754 1.66406 14.1993 1.83966 14.5118 2.15222C14.8244 2.46478 15 2.8887 15 3.33073V18.3307H5Z" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.9974 10H3.33073C2.8887 10 2.46478 10.1756 2.15222 10.4882C1.83966 10.8007 1.66406 11.2246 1.66406 11.6667V16.6667C1.66406 17.1087 1.83966 17.5326 2.15222 17.8452C2.46478 18.1577 2.8887 18.3333 3.33073 18.3333H4.9974" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7.5H16.6667C17.1087 7.5 17.5326 7.6756 17.8452 7.98816C18.1577 8.30072 18.3333 8.72464 18.3333 9.16667V16.6667C18.3333 17.1087 18.1577 17.5326 17.8452 17.8452C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333H15" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33594 5H11.6693" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33594 8.33594H11.6693" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33594 11.6641H11.6693" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33594 15H11.6693" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="li_rent"><rect width="20" height="20" fill="white"/></clipPath></defs>
      </svg>
    ),
    active: true,
  },
  {
    key: "sale",
    label: "List for Sale",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18.3307 5.83594L11.2474 12.9193L7.08073 8.7526L1.66406 14.1693" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3359 5.83594H18.3359V10.8359" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: false,
  },
  {
    key: "private",
    label: "Off-Market (Private)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1.71615 10.2869C1.6467 10.0998 1.6467 9.89398 1.71615 9.70688C2.39257 8.06676 3.54075 6.66442 5.01513 5.67763C6.48951 4.69085 8.22369 4.16406 9.99782 4.16406C11.7719 4.16406 13.5061 4.69085 14.9805 5.67763C16.4549 6.66442 17.6031 8.06676 18.2795 9.70688C18.3489 9.89398 18.3489 10.0998 18.2795 10.2869C17.6031 11.927 16.4549 13.3293 14.9805 14.3161C13.5061 15.3029 11.7719 15.8297 9.99782 15.8297C8.22369 15.8297 6.48951 15.3029 5.01513 14.3161C3.54075 13.3293 2.39257 11.927 1.71615 10.2869Z" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#99A1AF" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: false,
  },
];

const proposals = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initial: "S",
    company: "Premium Properties Dubai",
    rating: "4.8",
    experience: "12 years experience",
    date: "1/25/2026",
    estimatedValue: "AED 480,000",
    commission: "5%",
    type: "Rental",
    message: "I've successfully leased 15+ villas in Palm Jumeirah. I can help you secure premium tenants before your current contract expires.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/6139ee45d896db57df820189aca8ccf9037e8226?width=96",
    email: "agent@premiumpropertiesdubai.com",
    phone: "+971 50 XXX XXXX",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    initial: "A",
    company: "Elite Real Estate",
    rating: "4.9",
    experience: "8 years experience",
    date: "1/25/2026",
    estimatedValue: "AED 500,000",
    commission: "4.5%",
    type: "Rental",
    message: "Specializing in luxury villa rentals with a network of high-quality tenants. Can arrange viewings within 48 hours.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/d8edbb6d48344d3654f7bf6c84d32ecdf45d63d9?width=96",
    email: "ahmed@eliterealestate.ae",
    phone: "+971 50 XXX XXXX",
  },
  {
    id: 3,
    name: "Michael Chen",
    initial: "M",
    company: "Dubai Luxury Homes",
    rating: "4.7",
    experience: "10 years experience",
    date: "1/25/2026",
    estimatedValue: "AED 475,000",
    commission: "5%",
    type: "Rental",
    message: "Palm Jumeirah specialist with extensive tenant database. Offering marketing strategy and professional photography.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/d456156148b50b1aa7017a9868d2ddfa7d9803b3?width=96",
    email: "michael@dubailuxuryhomes.com",
    phone: "+971 50 XXX XXXX",
  },
];

const Proposal =  proposals[0];

export default function EditListingIntent() {
  const location = useLocation();
  const [selectedTenancy, setSelectedTenancy] = useState(1);
  const [selectedIntent, setSelectedIntent] = useState("rent");
  const [modalProposal, setModalProposal] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-poppins">
      {/* Tab Navigation */}
      <div className="bg-white px-4 md:px-6 pt-4">
        <div className="mb-4">
          <h1 className="text-[#181818] font-manrope text-xl md:text-2xl font-bold leading-tight">
            Property Management
          </h1>
          <p className="text-[#424242] font-manrope text-xs mt-0.5">
            View your profile and adjust your passkey
          </p>
        </div>
             <div className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-0 scrollbar-hide">
                {tabs.map((tab) => {
                  const isActive = location.pathname === tab.path;
                  return (
                    <Link
                      key={tab.label}
                      to={tab.path}
                      className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors no-underline ${
                        isActive ? "bg-[#F88379] text-white" : "text-[#4A5565] hover:bg-gray-100"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-[#4A5565]"}>{tab.icon}</span>
                      {tab.label}
                      {tab.badge && (
                        <span className="bg-[#FB2C36] text-white text-[0.625rem] font-normal font-arimo rounded-full w-5 h-5 flex items-center justify-center">
                          {tab.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
      </div>

      

      {/* Main Content */}
      <div className="p-4 md:p-6">

       <div className="mb-5">
          <h2 className="text-[#101828] text-lg font-bold font-poppins">Market Readiness & Intent</h2>
          <p className="text-[#4A5565] text-sm font-normal mt-1">
            Set your property intentions and receive proposals from verified agents
          </p>
        </div>
        
         <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Panel — Active Tenancies */}
        <div className="w-full lg:w-[16.25rem] flex-shrink-0">
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <h3 className="text-[#101828] text-base font-normal font-poppins mb-3">Active Tenancies</h3>
            <div className="flex flex-col gap-2">
              {activeTenancies.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTenancy(i)}
                  className={`w-full text-left px-3 py-3 rounded-xl border transition-colors ${
                    selectedTenancy === i
                      ? "border-[#F88379] bg-[rgba(248,131,121,0.10)]"
                      : "border-[#E5E7EB] hover:bg-gray-50"
                  }`}
                >
                  <p className="text-[#101828] text-sm font-medium font-poppins leading-tight">{t.property}</p>
                  <p className="text-[#6A7282] text-xs font-poppins mt-0.5">{t.tenant}</p>
                  {t.warning && (
                    <div className="flex items-center gap-1 mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#warn)">
                          <path d="M5.99855 10.9971C8.75918 10.9971 10.9971 8.75918 10.9971 5.99855C10.9971 3.23793 8.75918 1 5.99855 1C3.23793 1 1 3.23793 1 5.99855C1 8.75918 3.23793 10.9971 5.99855 10.9971Z" stroke="#F54900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 4V5.99942" stroke="#F54900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 8H6.005" stroke="#F54900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs><clipPath id="warn"><rect width="12" height="12" fill="white"/></clipPath></defs>
                      </svg>
                      <span className="text-[#F54900] text-[0.6875rem] font-poppins">{t.warning}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Property Header + Intent Options */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex flex-col gap-4">
            {/* Title Row */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-[#101828] text-lg font-bold font-poppins">Palm Jumeirah Villa</h2>
                <p className="text-[#6A7282] text-sm font-poppins mt-0.5">Palm Jumeirah, Frond M, Villa 42</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[rgba(127,255,212,0.2)] text-[#059669] text-xs font-medium font-poppins border border-[#7FFFD4] whitespace-nowrap">
                Intent: rent
              </span>
            </div>

            {/* Intent Option Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {intentOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSelectedIntent(opt.key)}
                  className={`flex flex-col items-start gap-2 p-4 rounded-xl border transition-colors ${
                    opt.key === selectedIntent
                      ? "border-[#F88379] bg-[rgba(248,131,121,0.10)]"
                      : "border-[#E5E7EB] hover:bg-gray-50"
                  }`}
                >
                  {opt.icon}
                  <span className="text-[#101828] text-sm font-poppins text-left leading-tight">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Note */}
            <div className="bg-[rgba(127,255,212,0.14)] border border-[#7FFFD4] rounded-xl px-4 py-3">
              <p className="text-[#4B4B4B] text-sm font-poppins leading-relaxed">
                <span className="font-bold">Note:</span> Setting your market intent allows verified agents to see your property is coming to market soon and submit proposals. Your property remains private until you choose to list publicly.
              </p>
            </div>
          </div>

          {/* User Proposals */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[#101828] text-lg font-bold font-poppins">User Proposals (3)</h3>
              <span className="text-[#6A7282] text-sm font-poppins">Received before public listing</span>
            </div>

            {proposals.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex flex-col gap-4">
                {/* Agent Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <img
                      src={p.avatar}
                      alt={p.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#101828] text-base font-bold font-poppins">{p.name}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clipPath="url(#ver)">
                            <path d="M14.535 6.66373C14.8395 8.15793 14.6225 9.71135 13.9203 11.0649C13.218 12.4185 12.073 13.4904 10.6761 14.1019C9.27913 14.7135 7.71479 14.8276 6.24391 14.4253C4.77302 14.023 3.4845 13.1287 2.59323 11.8913C1.70195 10.654 1.26179 9.14856 1.34615 7.62599C1.43051 6.10342 2.0343 4.65579 3.05681 3.52451C4.07932 2.39323 5.45876 1.64668 6.96509 1.40937C8.47141 1.17205 10.0136 1.4583 11.3344 2.2204" stroke="#155DFC" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 7.33073L8 9.33073L14.6667 2.66406" stroke="#155DFC" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs><clipPath id="ver"><rect width="16" height="16" fill="white"/></clipPath></defs>
                        </svg>
                      </div>
                      <p className="text-[#4A5565] text-sm font-poppins">{p.company}</p>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M7.67519 1.53241C7.70439 1.47342 7.74949 1.42376 7.80541 1.38905C7.86132 1.35433 7.92583 1.33594 7.99165 1.33594C8.05747 1.33594 8.12198 1.35433 8.17789 1.38905C8.23381 1.42376 8.27891 1.47342 8.30811 1.53241L9.84711 4.64971C9.94849 4.85489 10.0982 5.0324 10.2832 5.16701C10.4683 5.30162 10.6833 5.3893 10.9097 5.42254L14.3515 5.92621C14.4167 5.93566 14.478 5.96317 14.5284 6.00562C14.5788 6.04808 14.6163 6.10379 14.6367 6.16646C14.657 6.22912 14.6595 6.29624 14.6437 6.36022C14.6279 6.4242 14.5946 6.48248 14.5474 6.52848L12.0583 8.95224C11.8942 9.1122 11.7714 9.30966 11.7005 9.52762C11.6295 9.74557 11.6127 9.9775 11.6513 10.2034L12.2389 13.6279C12.2504 13.693 12.2434 13.7601 12.2186 13.8215C12.1938 13.8829 12.1522 13.9361 12.0987 13.975C12.0451 14.0139 11.9817 14.0369 11.9157 14.0415C11.8496 14.0461 11.7836 14.0321 11.7252 14.0009L8.64856 12.3833C8.44583 12.2769 8.22029 12.2213 7.99132 12.2213C7.76235 12.2213 7.5368 12.2769 7.33408 12.3833L4.25808 14.0009C4.19967 14.0319 4.13376 14.0458 4.06784 14.0411C4.00192 14.0364 3.93864 14.0133 3.88519 13.9744C3.83174 13.9356 3.79028 13.8825 3.76551 13.8212C3.74074 13.7599 3.73366 13.693 3.74508 13.6279L4.33203 10.2041C4.37081 9.97806 4.35401 9.74599 4.28309 9.52789C4.21217 9.3098 4.08926 9.11224 3.92497 8.95224L1.43592 6.52915C1.38835 6.4832 1.35464 6.42482 1.33863 6.36064C1.32262 6.29647 1.32495 6.22909 1.34537 6.16618C1.36578 6.10327 1.40345 6.04736 1.45409 6.00481C1.50473 5.96227 1.56631 5.9348 1.63179 5.92554L5.07289 5.42254C5.29958 5.38956 5.51486 5.30199 5.7002 5.16736C5.88554 5.03274 6.03539 4.85509 6.13686 4.64971L7.67519 1.53241Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[#364153] text-sm font-poppins">{p.rating}</span>
                        <span className="text-[#6A7282] text-sm font-poppins">{p.experience}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#4A5565] text-xs font-poppins bg-[#F3F4F6] px-2 py-1 rounded whitespace-nowrap">
                    {p.date}
                  </span>
                </div>

                {/* Stats Row */}
                <div className="bg-[#F9FAFB] rounded-xl p-3 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[#6A7282] text-xs font-poppins">Estimated Value</p>
                    <p className="text-[#101828] text-sm font-bold font-poppins mt-0.5">{p.estimatedValue}</p>
                  </div>
                  <div>
                    <p className="text-[#6A7282] text-xs font-poppins">Commission</p>
                    <p className="text-[#101828] text-sm font-bold font-poppins mt-0.5">{p.commission}</p>
                  </div>
                  <div>
                    <p className="text-[#6A7282] text-xs font-poppins">Type</p>
                    <p className="text-[#101828] text-sm font-bold font-poppins mt-0.5">{p.type}</p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-[#364153] text-sm font-poppins leading-relaxed">{p.message}</p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setModalProposal(p)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F88379] text-white text-sm font-poppins hover:opacity-90 transition-opacity"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#eye_btn)">
                        <path d="M1.37758 8.22319C1.32206 8.07361 1.32206 7.90907 1.37758 7.75949C1.91836 6.44825 2.83631 5.32711 4.01504 4.53819C5.19378 3.74928 6.58022 3.32812 7.9986 3.32812C9.41698 3.32812 10.8034 3.74928 11.9822 4.53819C13.1609 5.32711 14.0788 6.44825 14.6196 7.75949C14.6751 7.90907 14.6751 8.07361 14.6196 8.22319C14.0788 9.53443 13.1609 10.6556 11.9822 11.4445C10.8034 12.2334 9.41698 12.6546 7.9986 12.6546C6.58022 12.6546 5.19378 12.2334 4.01504 11.4445C2.83631 10.6556 1.91836 9.53443 1.37758 8.22319Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.9987 9.98958C9.10255 9.98958 9.9974 9.09474 9.9974 7.99089C9.9974 6.88704 9.10255 5.99219 7.9987 5.99219C6.89485 5.99219 6 6.88704 6 7.99089C6 9.09474 6.89485 9.98958 7.9987 9.98958Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs><clipPath id="eye_btn"><rect width="16" height="16" fill="white"/></clipPath></defs>
                    </svg>
                    View Full Proposal
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#D1D5DC] text-[#364153] text-sm font-poppins hover:bg-gray-50 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.9922 9.99479C13.9922 10.3482 13.8518 10.6871 13.6019 10.937C13.352 11.1869 13.0131 11.3273 12.6597 11.3273H4.66493L2 13.9922V3.33247C2 2.97907 2.14038 2.64016 2.39027 2.39027C2.64016 2.14038 2.97907 2 3.33247 2H12.6597C13.0131 2 13.352 2.14038 13.6019 2.39027C13.8518 2.64016 13.9922 2.97907 13.9922 3.33247V9.99479Z" stroke="#364153" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>

      </div>

      {/* View Full Proposal Modal */}
      {modalProposal && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 "
          onClick={(e) => { if (e.target === e.currentTarget) setModalProposal(null); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[80vh] flex flex-col ">
            <div className="p-6 flex flex-col gap-5 overflow-auto " style={{
    scrollbarWidth: "none",       // Firefox
    msOverflowStyle: "none",      // IE/Edge
  }}>
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#155DFC] text-xl font-bold font-arimo">{modalProposal.initial}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#101828] text-lg font-bold font-poppins">{modalProposal.name}</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="#155DFC" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="#155DFC" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#4A5565] text-sm font-poppins">{modalProposal.company}</p>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M7.67519 1.53241C7.70439 1.47342 7.74949 1.42376 7.80541 1.38905C7.86132 1.35433 7.92583 1.33594 7.99165 1.33594C8.05747 1.33594 8.12198 1.35433 8.17789 1.38905C8.23381 1.42376 8.27891 1.47342 8.30811 1.53241L9.84711 4.64971C9.94849 4.85489 10.0982 5.0324 10.2832 5.16701C10.4683 5.30162 10.6833 5.3893 10.9097 5.42254L14.3515 5.92621C14.4167 5.93566 14.478 5.96317 14.5284 6.00562C14.5788 6.04808 14.6163 6.10379 14.6367 6.16646C14.657 6.22912 14.6595 6.29624 14.6437 6.36022C14.6279 6.4242 14.5946 6.48248 14.5474 6.52848L12.0583 8.95224C11.8942 9.1122 11.7714 9.30966 11.7005 9.52762C11.6295 9.74557 11.6127 9.9775 11.6513 10.2034L12.2389 13.6279C12.2504 13.693 12.2434 13.7601 12.2186 13.8215C12.1938 13.8829 12.1522 13.9361 12.0987 13.975C12.0451 14.0139 11.9817 14.0369 11.9157 14.0415C11.8496 14.0461 11.7836 14.0321 11.7252 14.0009L8.64856 12.3833C8.44583 12.2769 8.22029 12.2213 7.99132 12.2213C7.76235 12.2213 7.5368 12.2769 7.33408 12.3833L4.25808 14.0009C4.19967 14.0319 4.13376 14.0458 4.06784 14.0411C4.00192 14.0364 3.93864 14.0133 3.88519 13.9744C3.83174 13.9356 3.79028 13.8825 3.76551 13.8212C3.74074 13.7599 3.73366 13.693 3.74508 13.6279L4.33203 10.2041C4.37081 9.97806 4.35401 9.74599 4.28309 9.52789C4.21217 9.3098 4.08926 9.11224 3.92497 8.95224L1.43592 6.52915C1.38835 6.4832 1.35464 6.42482 1.33863 6.36064C1.32262 6.29647 1.32495 6.22909 1.34537 6.16618C1.36578 6.10327 1.40345 6.04736 1.45409 6.00481C1.50473 5.96227 1.56631 5.9348 1.63179 5.92554L5.07289 5.42254C5.29958 5.38956 5.51486 5.30199 5.7002 5.16736C5.88554 5.03274 6.03539 4.85509 6.13686 4.64971L7.67519 1.53241Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#364153] text-sm font-poppins">{modalProposal.rating}</span>
                      <span className="text-[#6A7282] text-sm font-poppins">{modalProposal.experience.replace(" experience", "")}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setModalProposal(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="bg-[#F9FAFB] rounded-xl p-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#6A7282] text-sm font-poppins">Estimated Value</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins mt-1">{modalProposal.estimatedValue}</p>
                </div>
                <div>
                  <p className="text-[#6A7282] text-sm font-poppins">Commission</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins mt-1">{modalProposal.commission}</p>
                </div>
                <div>
                  <p className="text-[#6A7282] text-sm font-poppins">Type</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins mt-1">{modalProposal.type}</p>
                </div>
              </div>

              {/* Proposal Details */}
              <div>
                <p className="text-[#101828] text-sm font-normal font-poppins mb-2">Proposal Details</p>
                <p className="text-[#364153] text-sm font-poppins leading-relaxed">{modalProposal.message}</p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <p className="text-[#101828] text-sm font-normal font-poppins">Contact Information</p>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3281 2.66406H2.6684C1.9325 2.66406 1.33594 3.26063 1.33594 3.99653V11.9913C1.33594 12.7272 1.9325 13.3238 2.6684 13.3238H13.3281C14.064 13.3238 14.6606 12.7272 14.6606 11.9913V3.99653C14.6606 3.26063 14.064 2.66406 13.3281 2.66406Z" stroke="#99A1AF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.6606 4.66406L8.68448 8.46159C8.4788 8.59046 8.24098 8.6588 7.99826 8.6588C7.75554 8.6588 7.51773 8.59046 7.31205 8.46159L1.33594 4.66406" stroke="#99A1AF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#364153] text-sm font-poppins">{modalProposal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.6564 11.2762V13.2749C14.6571 13.4604 14.6191 13.6441 14.5448 13.8141C14.4704 13.9841 14.3614 14.1367 14.2247 14.2622C14.088 14.3876 13.9266 14.4831 13.7508 14.5425C13.575 14.602 13.3888 14.6241 13.204 14.6074C11.1539 14.3846 9.18459 13.6841 7.45439 12.562C5.84465 11.5391 4.47988 10.1744 3.45699 8.56463C2.33104 6.82656 1.63034 4.84771 1.41166 2.78839C1.39501 2.60415 1.4169 2.41847 1.47595 2.24316C1.53499 2.06785 1.6299 1.90676 1.75461 1.77013C1.87933 1.63351 2.03112 1.52435 2.20034 1.44961C2.36955 1.37487 2.55247 1.33618 2.73746 1.336H4.73616C5.05949 1.33282 5.37294 1.44732 5.61809 1.65815C5.86325 1.86898 6.02337 2.16176 6.06862 2.48192C6.15298 3.12155 6.30943 3.74958 6.53499 4.35404C6.62462 4.5925 6.64402 4.85165 6.59089 5.1008C6.53775 5.34995 6.41431 5.57865 6.23518 5.75979L5.38907 6.6059C6.33749 8.27385 7.71852 9.65488 9.38646 10.6033L10.2326 9.75718C10.4137 9.57806 10.6424 9.45461 10.8916 9.40148C11.1407 9.34834 11.3999 9.36774 11.6383 9.45738C12.2428 9.68293 12.8708 9.83938 13.5104 9.92374C13.8341 9.9694 14.1296 10.1324 14.3409 10.3818C14.5522 10.6311 14.6645 10.9495 14.6564 11.2762Z" stroke="#99A1AF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#364153] text-sm font-poppins">{modalProposal.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => setModalProposal(null)}
                  className="flex-1 py-2.5 rounded-xl border border-[#D1D5DC] text-[#364153] text-sm font-poppins hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 py-2.5 rounded-xl bg-[#F88379] text-white text-sm font-poppins hover:opacity-90 transition-opacity">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
