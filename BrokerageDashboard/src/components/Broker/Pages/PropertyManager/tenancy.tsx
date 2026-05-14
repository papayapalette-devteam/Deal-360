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
  { property: "Marina Pearl Apartment", tenant: "Sarah Johnson", warning: null, selected: true },
  { property: "Palm Jumeirah Villa", tenant: "Ahmed Al Mansoori", warning: "Expires in 31 days", selected: false },
  { property: "Springs Villa 3BR", tenant: "Michael Chen", warning: null, selected: false },
  { property: "JBR Beachfront Apartment", tenant: "Emma Williams", warning: null, selected: false },
];

const paymentSchedule = [
  { dueDate: "9/1/2025", amount: "AED 10,000", status: "Paid", paidDate: "8/28/2025", daysUntil: null },
  { dueDate: "10/1/2025", amount: "AED 10,000", status: "Paid", paidDate: "8/28/2025", daysUntil: null },
  { dueDate: "10/1/2025", amount: "AED 10,000", status: "Paid", paidDate: "8/28/2025", daysUntil: null },
  { dueDate: "10/1/2025", amount: "AED 10,000", status: "Pending", paidDate: "8/28/2025", daysUntil: "4 days", urgent: true },
  { dueDate: "10/1/2025", amount: "AED 10,000", status: "Pending", paidDate: "8/28/2025", daysUntil: "32 days", urgent: false },
];

const calendarEvents = [
  { day: "1", month: "SEP", title: "Rent Payment - AED 10,000", subtitle: "Paid on 8/28/2025", status: "paid" },
  { day: "1", month: "OCT", title: "Rent Payment - AED 10,000", subtitle: "Paid on 8/28/2025", status: "paid" },
  { day: "1", month: "NOV", title: "Rent Payment - AED 10,000", subtitle: "Paid on 8/28/2025", status: "paid" },
  { day: "1", month: "DEC", title: "Rent Payment - AED 10,000", subtitle: "Paid on 8/28/2025", status: "paid" },
  { day: "1", month: "JAN", title: "Rent Payment - AED 10,000", subtitle: "Paid on 8/28/2025", status: "paid" },
  { day: "1", month: "FEB", title: "Rent Payment - AED 10,000", subtitle: "Due in 4 days", status: "urgent" },
  { day: "1", month: "MAR", title: "Rent Payment - AED 10,000", subtitle: "Due in 32 days", status: "pending" },
  { day: "1", month: "APR", title: "Rent Payment - AED 10,000", subtitle: "Due in 63 days", status: "pending" },
];

export default function EditTenancy() {
  const location = useLocation();
  const [scheduleView, setScheduleView] = useState("schedule");
  const [selectedTenancy, setSelectedTenancy] = useState(0);

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
        {/* Page Title */}
        <div className="mb-5">
          <h2 className="text-[#101828] text-lg font-bold font-poppins">Tenancy & Rent Tracking</h2>
          <p className="text-[#4A5565] text-sm font-normal mt-1">
            Monitor rent payments, tenancy dates, and renewal timelines
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel — Active Tenancies */}
          <div className="w-full lg:w-[16.25rem] flex-shrink-0">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h3 className="text-[#101828] text-base font-semibold font-poppins mb-3">
                Active Tenancies
              </h3>
              <div className="flex flex-col gap-2">
                {activeTenancies.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTenancy(i)}
                    className={`w-full text-left px-3 py-3 rounded-xl border transition-colors ${
                      selectedTenancy === i
                        ? "border-[#F88379] bg-[rgba(248,131,121,0.06)]"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-[#101828] text-sm font-medium font-poppins leading-tight">
                      {t.property}
                    </p>
                    <p className="text-[#6A7282] text-xs font-poppins mt-0.5">{t.tenant}</p>
                    {t.warning && (
                      <div className="flex items-center gap-1 mt-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="5.5" stroke="#F97316"/>
                          <path d="M6 4V6.5" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round"/>
                          <circle cx="6" cy="8.5" r="0.6" fill="#F97316"/>
                        </svg>
                        <span className="text-[#F97316] text-[0.6875rem] font-poppins">{t.warning}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Current Tenancy Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
              <div className="flex items-start justify-between mb-1">
                <div>
                  <h3 className="text-[#101828] text-base font-semibold font-poppins">
                    Current Tenancy
                  </h3>
                  <p className="text-[#6A7282] text-sm font-poppins">Marina Pearl Apartment</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[rgba(127,255,212,0.2)] text-[#059669] text-xs font-medium font-poppins border border-[#7FFFD4]">
                  Active
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tenant Info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F8F9FA] border border-[#E5E7EB] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="#6A7282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 14C2 11.7909 4.68629 10 8 10C11.3137 10 14 11.7909 14 14" stroke="#6A7282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6A7282] text-xs font-poppins">Tenant</p>
                      <p className="text-[#101828] text-sm font-semibold font-poppins">Sarah Johnson</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M11.667 2.333H2.333C1.597 2.333 1 2.93 1 3.667V10.333C1 11.07 1.597 11.667 2.333 11.667H11.667C12.403 11.667 13 11.07 13 10.333V3.667C13 2.93 12.403 2.333 11.667 2.333Z" stroke="#6A7282" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 4L7 7.667L13 4" stroke="#6A7282" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#6A7282] text-xs font-poppins">tenant@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 ml-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12.586 9.561L10.827 7.802C10.351 7.326 9.562 7.326 9.086 7.802L8.301 8.587C7.883 9.004 7.215 9.065 6.732 8.73C5.908 8.173 5.142 7.529 4.455 6.842C3.768 6.155 3.124 5.389 2.567 4.565C2.232 4.082 2.293 3.414 2.71 2.997L3.495 2.211C3.971 1.735 3.971 0.946 3.495 0.47L1.736 -1.289C1.26 -1.765 0.471 -1.765 -0.005 -1.289L-0.602 -0.692C-1.506 0.212 -1.774 1.554 -1.293 2.726C-0.357 5.016 1.268 7.125 3.399 8.949C5.516 10.76 8.017 12.115 10.663 12.686C11.909 12.956 13.192 12.597 14.099 11.69L14.307 11.482C14.783 11.006 14.783 10.217 14.307 9.741L12.586 9.561Z" fill="#6A7282"/>
                    </svg>
                    <span className="text-[#6A7282] text-xs font-poppins">+971 50 123 4567</span>
                  </div>
                </div>

                {/* Annual Rent */}
                <div>
                  <p className="text-[#6A7282] text-xs font-poppins mb-1">Annual Rent</p>
                  <p className="text-[#101828] text-xl font-bold font-poppins">AED 120,000</p>
                  <p className="text-[#6A7282] text-xs font-poppins mt-0.5">AED 10,000/month</p>
                </div>

                {/* Tenancy Period */}
                <div>
                  <p className="text-[#6A7282] text-xs font-poppins mb-1">Tenancy Period</p>
                  <p className="text-[#101828] text-sm font-semibold font-poppins">Expires: 8/31/2026</p>
                  <p className="text-[#6A7282] text-xs font-poppins mt-0.5">215 days remaining</p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Paid */}
              <div className="bg-[rgba(127,255,212,0.15)] border border-[#7FFFD4] rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(127,255,212,0.3)] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9L8 11L12 7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6A7282] text-xs font-poppins">Paid</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins">AED 50,000</p>
                </div>
              </div>

              {/* Pending */}
              <div className="bg-[rgba(127,255,212,0.15)] border border-[#7FFFD4] rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(127,255,212,0.3)] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.5" stroke="#F97316" strokeWidth="1.5"/>
                    <path d="M9 5.5V9.5L11.5 11" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6A7282] text-xs font-poppins">Pending</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins">AED 30,000</p>
                </div>
              </div>

              {/* Total */}
              <div className="bg-[rgba(127,255,212,0.15)] border border-[#7FFFD4] rounded-xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(127,255,212,0.3)] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5V16.5M12.75 4.5H7.125C6.42881 4.5 5.76113 4.77656 5.26884 5.26884C4.77656 5.76113 4.5 6.42881 4.5 7.125C4.5 7.82119 4.77656 8.48887 5.26884 8.98116C5.76113 9.47344 6.42881 9.75 7.125 9.75H10.875C11.5712 9.75 12.2389 10.0266 12.7312 10.5188C13.2234 11.0111 13.5 11.6788 13.5 12.375C13.5 13.0712 13.2234 13.7389 12.7312 14.2312C12.2389 14.7234 11.5712 15 10.875 15H4.5" stroke="#6A7282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6A7282] text-xs font-poppins">Total</p>
                  <p className="text-[#101828] text-lg font-bold font-poppins">AED 120,000</p>
                </div>
              </div>
            </div>

            {/* Payment Schedule */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
                <h3 className="text-[#101828] text-base font-semibold font-poppins">Payment Schedule</h3>
                <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-lg p-1">
                  <button
                    onClick={() => setScheduleView("schedule")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium font-poppins transition-colors ${
                      scheduleView === "schedule"
                        ? "bg-[#F88379] text-white shadow-sm"
                        : "text-[#6A7282] hover:text-[#101828]"
                    }`}
                  >
                    Schedule View
                  </button>
                  <button
                    onClick={() => setScheduleView("calendar")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium font-poppins transition-colors ${
                      scheduleView === "calendar"
                        ? "bg-[#F88379] text-white shadow-sm"
                        : "text-[#6A7282] hover:text-[#101828]"
                    }`}
                  >
                    Calendar View
                  </button>
                </div>
              </div>

              {/* Schedule View — Table */}
              {scheduleView === "schedule" && (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[35rem]">
                    <thead>
                      <tr className="bg-[rgba(248,131,121,0.08)]">
                        <th className="text-left px-5 py-3 text-sm font-medium text-[#101828] font-poppins">Due Date</th>
                        <th className="text-left px-5 py-3 text-sm font-medium text-[#101828] font-poppins">Amount</th>
                        <th className="text-left px-5 py-3 text-sm font-medium text-[#101828] font-poppins">Status</th>
                        <th className="text-left px-5 py-3 text-sm font-medium text-[#101828] font-poppins">Paid Date</th>
                        <th className="text-left px-5 py-3 text-sm font-medium text-[#101828] font-poppins">Days Until Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentSchedule.map((row, i) => (
                        <tr key={i} className="border-b border-[#E5E7EB] last:border-0 hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4">
                            <span className="text-[#101828] text-sm font-semibold font-poppins">{row.dueDate}</span>
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-[#6A7282] text-sm font-poppins">{row.amount}</span>
                          </td>
                          <td className="px-5 py-4">
                            {row.status === "Paid" ? (
                              <div className="flex items-center gap-1.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M14.667 7.387C14.872 8.479 14.729 9.608 14.257 10.614C13.785 11.621 13.008 12.454 12.036 12.997C11.064 13.54 9.947 13.765 8.839 13.642C7.73 13.52 6.689 13.056 5.858 12.316C5.028 11.577 4.452 10.597 4.211 9.515C3.97 8.433 4.076 7.303 4.514 6.284C4.952 5.265 5.7 4.409 6.652 3.835C7.604 3.261 8.713 2.997 9.823 3.079" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M5.5 7.5L8 10L14.5 3" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-[#059669] text-sm font-poppins font-medium">Paid</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <circle cx="8" cy="8" r="6.5" stroke="#F97316" strokeWidth="1.2"/>
                                  <path d="M8 5V8.5" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round"/>
                                  <circle cx="8" cy="10.5" r="0.7" fill="#F97316"/>
                                </svg>
                                <span className="text-[#F97316] text-sm font-poppins font-medium">Pending</span>
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-4">
                            <span className="text-[#6A7282] text-sm font-poppins">{row.paidDate}</span>
                          </td>
                          <td className="px-5 py-4">
                            {row.daysUntil ? (
                              <span className={`text-sm font-poppins font-medium ${row.urgent ? "text-[#EF4444]" : "text-[#6A7282]"}`}>
                                {row.daysUntil}
                              </span>
                            ) : (
                              <span className="text-[#E5E7EB] text-sm">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Calendar View — Event Cards */}
              {scheduleView === "calendar" && (
                <div className="flex flex-col gap-3 p-4">
                  {calendarEvents.map((evt, i) => {
                    const isPaid = evt.status === "paid";
                    const isUrgent = evt.status === "urgent";
                    const isPending = evt.status === "pending";

                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl border transition-colors ${
                          isPaid
                            ? "bg-[rgba(127,255,212,0.15)] border-[#7FFFD4]"
                            : isUrgent
                            ? "bg-[rgba(248,131,121,0.08)] border-[#F88379]"
                            : "bg-white border-[#E5E7EB]"
                        }`}
                      >
                        {/* Date Column */}
                        <div className="flex flex-col items-center w-10 flex-shrink-0">
                          <span className={`text-2xl font-bold font-poppins leading-none ${isUrgent ? "text-[#F88379]" : "text-[#101828]"}`}>
                            {evt.day}
                          </span>
                          <span className={`text-[0.6875rem] font-poppins font-medium tracking-wide mt-0.5 ${isUrgent ? "text-[#F88379]" : "text-[#6A7282]"}`}>
                            {evt.month}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className={`w-px h-10 flex-shrink-0 ${isPaid ? "bg-[#7FFFD4]" : isUrgent ? "bg-[#F88379]" : "bg-[#E5E7EB]"}`} />

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold font-poppins ${isUrgent ? "text-[#F88379]" : "text-[#101828]"}`}>
                            {evt.title}
                          </p>
                          <p className={`text-xs font-poppins mt-0.5 ${isUrgent ? "text-[#F88379]" : isPaid ? "text-[#059669]" : "text-[#6A7282]"}`}>
                            {evt.subtitle}
                          </p>
                        </div>

                        {/* Status Icon */}
                        <div className="flex-shrink-0">
                          {isPaid && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M22 4L12 14.01L9 11.01" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {isUrgent && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="#F88379" strokeWidth="2"/>
                              <path d="M12 8V12" stroke="#F88379" strokeWidth="2" strokeLinecap="round"/>
                              <circle cx="12" cy="16" r="1" fill="#F88379"/>
                            </svg>
                          )}
                          {isPending && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="#F97316" strokeWidth="2"/>
                              <path d="M12 7V12.5L15.5 14.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
