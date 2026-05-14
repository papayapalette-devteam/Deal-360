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

type AlertPriority = "urgent" | "medium" | "low";
type AlertIconType = "dollar" | "calendar" | "trending" | "document" | "clock" | "bell";



const highPriorityAlerts = [
  {
    property: "Palm Jumeirah Villa",
    description: "Rent payment due",
    date: "2/15/2026",
    daysAway: "18 days away",
    daysAwayColor: "#F54900",
    priority: "urgent",
    iconType: "dollar",
    borderColor: "#BEDBFF",
    iconBg: "#EFF6FF",
  },
  {
    property: "Palm Jumeirah Villa",
    description: "Tenancy expires soon - Renewal window open",
    date: "2/28/2026",
    daysAway: "31 days away",
    daysAwayColor: "#4A5565",
    priority: "urgent",
    iconType: "calendar",
    borderColor: "#FFC9C9",
    iconBg: "#FEF2F2",
  },
];

const mediumPriorityAlerts = [
  {
    property: "Palm Jumeirah Villa",
    description: "New agent proposal from Sarah Mitchell",
    date: "1/25/2026",
    daysAway: "-3 days away",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "trending",
    borderColor: "#E9D4FF",
    iconBg: "#FAF5FF",
  },
  {
    property: "Downtown Office Suite",
    description: "New agent proposals received (5 new)",
    date: "1/28/2026",
    daysAway: "Today",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "trending",
    borderColor: "#E9D4FF",
    iconBg: "#FAF5FF",
  },
  {
    property: "JBR Beachfront Apartment",
    description: "Rent payment due",
    date: "2/20/2026",
    daysAway: "23 days away",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "dollar",
    borderColor: "#BEDBFF",
    iconBg: "#EFF6FF",
  },
  {
    property: "Marina Pearl Apartment",
    description: "Rent payment due",
    date: "3/1/2026",
    daysAway: "32 days away",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "dollar",
    borderColor: "#BEDBFF",
    iconBg: "#EFF6FF",
  },
  {
    property: "Palm Jumeirah Villa",
    description: "Building permit renewal required",
    date: "3/10/2026",
    daysAway: "41 days away",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "document",
    borderColor: "#FFF085",
    iconBg: "#FEFCE8",
  },
  {
    property: "Springs Villa 3BR",
    description: "Rent payment due",
    date: "3/15/2026",
    daysAway: "46 days away",
    daysAwayColor: "#4A5565",
    priority: "medium",
    iconType: "dollar",
    borderColor: "#BEDBFF",
    iconBg: "#EFF6FF",
  },
];

const lowPriorityAlerts= [
  {
    property: "Springs Villa 3BR",
    description: "Renewal decision needed in 90 days",
    date: "4/28/2026",
    daysAway: "90 days away",
    daysAwayColor: "#4A5565",
    priority: "low",
    iconType: "clock",
    borderColor: "#E5E7EB",
    iconBg: "#FFF7ED",
  },
  {
    property: "JBR Beachfront Apartment",
    description: "Tenancy expires in 168 days",
    date: "7/15/2026",
    daysAway: "168 days away",
    daysAwayColor: "#4A5565",
    priority: "low",
    iconType: "calendar",
    borderColor: "#E5E7EB",
    iconBg: "#FEF2F2",
  },
];

function AlertIcon({ type, bg }) {
  return (
    <div
      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ background: bg }}
    >
      {type === "dollar" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 1.66406V18.3307" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.1667 4.16406H7.91667C7.14312 4.16406 6.40125 4.47135 5.85427 5.01833C5.30729 5.56532 5 6.30718 5 7.08073C5 7.85428 5.30729 8.59614 5.85427 9.14312C6.40125 9.69011 7.14312 9.9974 7.91667 9.9974H12.0833C12.8569 9.9974 13.5987 10.3047 14.1457 10.8517C14.6927 11.3986 15 12.1405 15 12.9141C15 13.6876 14.6927 14.4295 14.1457 14.9765C13.5987 15.5234 12.8569 15.8307 12.0833 15.8307H5" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {type === "calendar" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6.66406 1.66406V4.9974" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3359 1.66406V4.9974" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.8333 3.33594H4.16667C3.24619 3.33594 2.5 4.08213 2.5 5.0026V16.6693C2.5 17.5897 3.24619 18.3359 4.16667 18.3359H15.8333C16.7538 18.3359 17.5 17.5897 17.5 16.6693V5.0026C17.5 4.08213 16.7538 3.33594 15.8333 3.33594Z" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.5 8.33594H17.5" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {type === "trending" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#trend_alr)">
            <path d="M18.3307 5.83594L11.2474 12.9193L7.08073 8.7526L1.66406 14.1693" stroke="#9810FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3359 5.83594H18.3359V10.8359" stroke="#9810FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs><clipPath id="trend_alr"><rect width="20" height="20" fill="white"/></clipPath></defs>
        </svg>
      )}
      {type === "document" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#doc_alr)">
            <path d="M12.5026 1.66406H5.0026C4.56058 1.66406 4.13665 1.83966 3.82409 2.15222C3.51153 2.46478 3.33594 2.8887 3.33594 3.33073V16.6641C3.33594 17.1061 3.51153 17.53 3.82409 17.8426C4.13665 18.1551 4.56058 18.3307 5.0026 18.3307H15.0026C15.4446 18.3307 15.8686 18.1551 16.1811 17.8426C16.4937 17.53 16.6693 17.1061 16.6693 16.6641V5.83073L12.5026 1.66406Z" stroke="#D08700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6641 1.66406V4.9974C11.6641 5.43942 11.8397 5.86335 12.1522 6.17591C12.4648 6.48847 12.8887 6.66406 13.3307 6.66406H16.6641" stroke="#D08700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.33073 7.5H6.66406" stroke="#D08700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3307 10.8359H6.66406" stroke="#D08700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3307 14.1641H6.66406" stroke="#D08700" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs><clipPath id="doc_alr"><rect width="20" height="20" fill="white"/></clipPath></defs>
        </svg>
      )}
      {type === "clock" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#clk_alr)">
            <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#F54900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 5V10L13.3333 11.6667" stroke="#F54900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs><clipPath id="clk_alr"><rect width="20" height="20" fill="white"/></clipPath></defs>
        </svg>
      )}
      {type === "bell" && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.55469 17.5C8.70097 17.7533 8.91137 17.9637 9.16472 18.11C9.41808 18.2563 9.70547 18.3333 9.99802 18.3333C10.2906 18.3333 10.578 18.2563 10.8313 18.11C11.0847 17.9637 11.2951 17.7533 11.4414 17.5" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.71772 12.7691C2.60886 12.8884 2.53702 13.0368 2.51094 13.1962C2.48486 13.3556 2.50566 13.5191 2.57081 13.6669C2.63597 13.8147 2.74267 13.9404 2.87794 14.0286C3.0132 14.1169 3.17121 14.1639 3.33272 14.1641H16.6661C16.8276 14.1641 16.9856 14.1172 17.1209 14.0292C17.2563 13.9411 17.3631 13.8155 17.4285 13.6678C17.4938 13.5201 17.5148 13.3566 17.4889 13.1972C17.4631 13.0378 17.3914 12.8893 17.2827 12.7699C16.1744 11.6274 14.9994 10.4132 14.9994 6.66406C14.9994 5.33798 14.4726 4.06621 13.5349 3.12853C12.5972 2.19085 11.3255 1.66406 9.99939 1.66406C8.67331 1.66406 7.40154 2.19085 6.46386 3.12853C5.52618 4.06621 4.99939 5.33798 4.99939 6.66406C4.99939 10.4132 3.82356 11.6274 2.71772 12.7691Z" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}

function PriorityBadge({ priority }) {
  if (priority === "urgent") {
    return (
      <span className="px-2.5 py-1 rounded-full bg-[#FFE2E2] text-[#C10007] text-xs font-arimo whitespace-nowrap">
        Urgent
      </span>
    );
  }
  if (priority === "medium") {
    return (
      <span className="px-2.5 py-1 rounded-full bg-[#FFEDD4] text-[#CA3500] text-xs font-arimo whitespace-nowrap">
        Medium
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[#4A5565] text-xs font-arimo whitespace-nowrap">
      Low
    </span>
  );
}

function AlertCard({ alert, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl p-4 flex items-start gap-4 transition-colors hover:bg-gray-50"
      style={{ border: `1.1px solid ${alert.borderColor}` }}
    >
      <AlertIcon type={alert.iconType} bg={alert.iconBg} />
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[#101828] text-base font-bold font-poppins leading-tight">{alert.property}</span>
          <PriorityBadge priority={alert.priority} />
        </div>
        <p className="text-[#4A5565] text-sm font-poppins">{alert.description}</p>
        <div className="flex items-center gap-4">
          <span className="text-[#6A7282] text-sm font-poppins">{alert.date}</span>
          <span className="text-sm font-poppins" style={{ color: alert.daysAwayColor }}>{alert.daysAway}</span>
        </div>
      </div>
    </button>
  );
}



export default function EditAlerts() {
  const location = useLocation();
  const [modalAlert, setModalAlert] = useState(null);

  const handleAlertClick = (alert) => {
    setModalAlert({
      property: alert.property,
      intent: "Renew with Current Tenant",
    });
  };

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
      <div className="p-4 md:p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="text-[#101828] text-lg font-bold font-poppins">Alerts &amp; Reminders</h2>
          <p className="text-[#4A5565] text-sm font-poppins">Stay on top of important dates and property events</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* High Priority */}
          <div className="bg-white rounded-xl border border-[#FFC9C9] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(248,131,121,0.18)] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#hp_icon)">
                  <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 6.66406V9.9974" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 13.3359H10.0083" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs><clipPath id="hp_icon"><rect width="20" height="20" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <div>
              <p className="text-[#6A7282] text-xs font-poppins">High Priority</p>
              <p className="text-[#101828] text-2xl font-bold font-poppins leading-tight">2</p>
            </div>
          </div>

          {/* Medium Priority */}
          <div className="bg-white rounded-xl border border-[#FFD6A7] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(248,131,121,0.19)] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#mp_icon)">
                  <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5V10L13.3333 11.6667" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs><clipPath id="mp_icon"><rect width="20" height="20" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <div>
              <p className="text-[#6A7282] text-xs font-poppins">Medium Priority</p>
              <p className="text-[#101828] text-2xl font-bold font-poppins leading-tight">6</p>
            </div>
          </div>

          {/* Low Priority */}
          <div className="bg-white rounded-xl border border-[#BEDBFF] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[rgba(248,131,121,0.18)] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8.55469 17.5C8.70097 17.7533 8.91137 17.9637 9.16472 18.11C9.41808 18.2563 9.70547 18.3333 9.99802 18.3333C10.2906 18.3333 10.578 18.2563 10.8313 18.11C11.0847 17.9637 11.2951 17.7533 11.4414 17.5" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.71772 12.7691C2.60886 12.8884 2.53702 13.0368 2.51094 13.1962C2.48486 13.3556 2.50566 13.5191 2.57081 13.6669C2.63597 13.8147 2.74267 13.9404 2.87794 14.0286C3.0132 14.1169 3.17121 14.1639 3.33272 14.1641H16.6661C16.8276 14.1641 16.9856 14.1172 17.1209 14.0292C17.2563 13.9411 17.3631 13.8155 17.4285 13.6678C17.4938 13.5201 17.5148 13.3566 17.4889 13.1972C17.4631 13.0378 17.3914 12.8893 17.2827 12.7699C16.1744 11.6274 14.9994 10.4132 14.9994 6.66406C14.9994 5.33798 14.4726 4.06621 13.5349 3.12853C12.5972 2.19085 11.3255 1.66406 9.99939 1.66406C8.67331 1.66406 7.40154 2.19085 6.46386 3.12853C5.52618 4.06621 4.99939 5.33798 4.99939 6.66406C4.99939 10.4132 3.82356 11.6274 2.71772 12.7691Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[#6A7282] text-xs font-poppins">Low Priority</p>
              <p className="text-[#101828] text-2xl font-bold font-poppins leading-tight">2</p>
            </div>
          </div>
        </div>

        {/* High Priority Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#hp_head)">
                <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 6.66406V9.9974" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 13.3359H10.0083" stroke="#E7000B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs><clipPath id="hp_head"><rect width="20" height="20" fill="white"/></clipPath></defs>
            </svg>
            <h3 className="text-[#101828] text-base font-bold font-poppins">High Priority Alerts</h3>
          </div>
          <div className="flex flex-col gap-3">
            {highPriorityAlerts.map((alert, i) => (
              <AlertCard key={i} alert={alert} onClick={() => handleAlertClick(alert)} />
            ))}
          </div>
        </div>

        {/* Medium Priority Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clipPath="url(#mp_head)">
                <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#F54900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 5V10L13.3333 11.6667" stroke="#F54900" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs><clipPath id="mp_head"><rect width="20" height="20" fill="white"/></clipPath></defs>
            </svg>
            <h3 className="text-[#101828] text-base font-bold font-poppins">Medium Priority Alerts</h3>
          </div>
          <div className="flex flex-col gap-3">
            {mediumPriorityAlerts.map((alert, i) => (
              <AlertCard key={i} alert={alert} onClick={() => handleAlertClick(alert)} />
            ))}
          </div>
        </div>

        {/* Low Priority Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.55469 17.5C8.70097 17.7533 8.91137 17.9637 9.16472 18.11C9.41808 18.2563 9.70547 18.3333 9.99802 18.3333C10.2906 18.3333 10.578 18.2563 10.8313 18.11C11.0847 17.9637 11.2951 17.7533 11.4414 17.5" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.71772 12.7691C2.60886 12.8884 2.53702 13.0368 2.51094 13.1962C2.48486 13.3556 2.50566 13.5191 2.57081 13.6669C2.63597 13.8147 2.74267 13.9404 2.87794 14.0286C3.0132 14.1169 3.17121 14.1639 3.33272 14.1641H16.6661C16.8276 14.1641 16.9856 14.1172 17.1209 14.0292C17.2563 13.9411 17.3631 13.8155 17.4285 13.6678C17.4938 13.5201 17.5148 13.3566 17.4889 13.1972C17.4631 13.0378 17.3914 12.8893 17.2827 12.7699C16.1744 11.6274 14.9994 10.4132 14.9994 6.66406C14.9994 5.33798 14.4726 4.06621 13.5349 3.12853C12.5972 2.19085 11.3255 1.66406 9.99939 1.66406C8.67331 1.66406 7.40154 2.19085 6.46386 3.12853C5.52618 4.06621 4.99939 5.33798 4.99939 6.66406C4.99939 10.4132 3.82356 11.6274 2.71772 12.7691Z" stroke="#155DFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-[#101828] text-base font-bold font-poppins">Low Priority Alerts</h3>
          </div>
          <div className="flex flex-col gap-3">
            {lowPriorityAlerts.map((alert, i) => (
              <AlertCard key={i} alert={alert} onClick={() => handleAlertClick(alert)} />
            ))}
          </div>
        </div>
      </div>

      {/* Set Market Intent Modal */}
      {modalAlert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 "
          onClick={(e) => { if (e.target === e.currentTarget) setModalAlert(null); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 flex flex-col gap-3">
            <div>
              <h2 className="text-[#101828] text-lg font-bold font-poppins">Set Market Intent</h2>
              <p className="text-[#4A5565] text-sm font-poppins mt-1">You're setting the intent to,</p>
              <p className="text-[#101828] text-sm font-poppins mt-1">
                <span className="font-bold">{modalAlert.intent}</span>
                {" "}for{" "}
                <span className="font-bold">{modalAlert.property}</span>
              </p>
            </div>

            <div className="bg-[rgba(248,131,121,0.12)] border border-[#F88379] rounded-xl p-4">
              <p className="text-[#4A5565] text-sm font-poppins leading-relaxed">
                By setting this intent, verified agents will be notified and can submit proposals. Your property information remains private until you choose to list publicly.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setModalAlert(null)}
                className="flex-1 py-3 rounded-xl border border-[#D1D5DC] text-[#364153] text-sm font-poppins hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setModalAlert(null)}
                className="flex-1 py-3 rounded-xl bg-[#F88379] text-white text-sm font-poppins hover:opacity-90 transition-opacity"
              >
                Confirm Intent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
