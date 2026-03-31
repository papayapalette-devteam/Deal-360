import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const leadsData = [
  {
    id: 1,
    name: "Emma Wilson",
    status: "New",
    interest: "Interested in: Luxury Villa in Palm Jumeirah",
    property: "Luxury Villa in Palm Jumeirah",
    phone: "+971 50 123 4567",
    email: "emma@email.com",
    date: "2024-01-08 10:30",
    events: [
      { title: "Lead received from website inquiry", date: "2024-01-08 10:30", note: null, isLast: true },
    ],
  },
  {
    id: 2,
    name: "Mohammed Ali",
    status: "Contacted",
    interest: "Interested in: Luxury Villa in Palm Jumeirah",
    property: "Modern Apartment Downtown",
    phone: "+971 50 123 4567",
    email: "emma@email.com",
    date: "2024-01-08 10:30",
    events: [
      { title: "Lead received from phone call", date: "2024-01-07 14:20", note: null, isLast: false },
      { title: "First contact made", date: "2024-01-07 15:45", note: "Interested in viewing property this weekend", isLast: false },
      { title: "Follow-up email sent", date: "2024-01-08 09:15", note: null, isLast: true },
    ],
  },
  {
    id: 3,
    name: "Lisa Chen",
    status: "Converted",
    interest: "Interested in: Luxury Villa in Palm Jumeirah",
    property: "Penthouse with Burj View",
    phone: "+971 50 123 4567",
    email: "emma@email.com",
    date: "2024-01-08 10:30",
    events: [
      { title: "Lead received from client referral", date: "2024-01-05 11:00", note: null, isLast: false },
      { title: "Initial call completed", date: "2024-01-05 16:30", note: null, isLast: false },
      { title: "Property viewing scheduled", date: "2024-01-06 10:00", note: null, isLast: false },
      { title: "Viewing completed", date: "2024-01-07 14:00", note: "Very interested, discussing terms", isLast: false },
      { title: "Deal closed - Converted to sale!", date: "2024-01-08 11:30", note: null, isLast: true },
    ],
  },
];

const statusOptions = ["New", "Contacted", "Qualified", "Converted", "Lost"];
const filterOptions = ["All Leads", "New", "Contacted", "Qualified", "Converted", "Lost"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getBadgeStyle(status) {
  switch (status) {
    case "New":        return { backgroundColor: "#7FFFD4", color: "#000000" };
    case "Contacted":  return { backgroundColor: "#DBEAFE", color: "#1447E6" };
    case "Converted":  return { backgroundColor: "#DCFCE7", color: "#008236" };
    default:           return { backgroundColor: "#F3F3F5", color: "#0A0A0A" };
  }
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <g clipPath="url(#phone-clip)">
        <path d="M14.665 11.2827V13.2827C14.6657 13.4683 14.6277 13.6521 14.5533 13.8222C14.479 13.9924 14.3699 14.1451 14.233 14.2706C14.0962 14.3961 13.9347 14.4917 13.7588 14.5511C13.5829 14.6106 13.3966 14.6327 13.2117 14.616C11.1602 14.3931 9.18966 13.6921 7.45833 12.5693C5.84755 11.5458 4.48189 10.1801 3.45833 8.56934C2.33165 6.83014 1.63049 4.85 1.41166 2.78934C1.395 2.60498 1.41691 2.41918 1.47599 2.24375C1.53508 2.06833 1.63004 1.90713 1.75484 1.77042C1.87964 1.6337 2.03153 1.52448 2.20086 1.44968C2.37018 1.37489 2.55322 1.33618 2.73833 1.336H4.73833C5.06187 1.33282 5.37552 1.44739 5.62084 1.65836C5.86615 1.86933 6.02638 2.1623 6.07166 2.48267C6.15608 3.12271 6.31263 3.75115 6.53833 4.356C6.62802 4.59462 6.64744 4.85395 6.59427 5.10326C6.5411 5.35257 6.41757 5.58141 6.23833 5.76267L5.39166 6.60934C6.3407 8.27837 7.72263 9.6603 9.39166 10.6093L10.2383 9.76267C10.4196 9.58343 10.6484 9.4599 10.8977 9.40673C11.1471 9.35356 11.4064 9.37297 11.645 9.46267C12.2498 9.68837 12.8783 9.84492 13.5183 9.92934C13.8422 9.97502 14.1379 10.1381 14.3494 10.3877C14.5608 10.6372 14.6731 10.9557 14.665 11.2827Z" stroke="#F88379" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="phone-clip"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M13.3359 2.66406H2.66927C1.93289 2.66406 1.33594 3.26102 1.33594 3.9974V11.9974C1.33594 12.7338 1.93289 13.3307 2.66927 13.3307H13.3359C14.0723 13.3307 14.6693 12.7338 14.6693 11.9974V3.9974C14.6693 3.26102 14.0723 2.66406 13.3359 2.66406Z" stroke="#F88379" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6693 4.66406L8.68927 8.46406C8.48345 8.59301 8.24548 8.6614 8.0026 8.6614C7.75973 8.6614 7.52176 8.59301 7.31594 8.46406L1.33594 4.66406" stroke="#F88379" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M8.0026 14.6693C11.6845 14.6693 14.6693 11.6845 14.6693 8.0026C14.6693 4.32071 11.6845 1.33594 8.0026 1.33594C4.32071 1.33594 1.33594 4.32071 1.33594 8.0026C1.33594 11.6845 4.32071 14.6693 8.0026 14.6693Z" stroke="#F88379" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 4V8L10.6667 9.33333" stroke="#F88379" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.5 }}>
      <path d="M4 6L8 10L12 6" stroke="#717182" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Empty circle (pending event)
function CircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <g clipPath="url(#circle-clip)">
        <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#717182" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="circle-clip"><rect width="20" height="20" fill="white"/></clipPath></defs>
    </svg>
  );
}

// Green checkmark circle (last/completed event)
function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <g clipPath="url(#check-clip)">
        <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#7FFFD4" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594" stroke="#7FFFD4" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs><clipPath id="check-clip"><rect width="20" height="20" fill="white"/></clipPath></defs>
    </svg>
  );
}

// ─── List View Card ───────────────────────────────────────────────────────────

function ListCard({ lead, onStatusChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const badgeStyle = getBadgeStyle(lead.status);

  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-[14px] bg-white"
      style={{ border: "1px solid rgba(0,0,0,0.10)" }}
    >
      {/* Left: Lead Info */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-bold text-[20px] leading-[28px]" style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}>
            {lead.name}
          </h3>
          <span
            className="inline-flex items-center justify-center px-2 py-[2px] rounded-[8px] text-[12px] leading-[16px] font-normal"
            style={{ ...badgeStyle, fontFamily: "Manrope, sans-serif", whiteSpace: "nowrap" }}
          >
            {lead.status}
          </span>
        </div>

        <p className="text-[16px] leading-[20px] font-normal" style={{ color: "#717182", fontFamily: "Manrope, sans-serif" }}>
          {lead.interest}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span className="text-[14px] leading-[20px]" style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}>{lead.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <EmailIcon />
            <span className="text-[14px] leading-[20px]" style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}>{lead.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span className="text-[14px] leading-[20px]" style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}>{lead.date}</span>
          </div>
        </div>
      </div>

      {/* Right: Status + Message */}
      <div className="flex flex-col gap-2 w-full sm:w-[150px] flex-shrink-0">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full h-[36px] px-3 rounded-[8px] text-[14px] font-normal"
            style={{ background: "#F3F3F5", border: "1px solid transparent", color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
          >
            <span>{lead.status}</span>
            <ChevronDownIcon />
          </button>
          {dropdownOpen && (
            <div
              className="absolute right-0 top-full mt-1 w-full rounded-[8px] overflow-hidden z-10 shadow-md"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.10)" }}
            >
              {statusOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => { onStatusChange(lead.id, opt); setDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2 text-[14px] hover:bg-gray-50 transition-colors"
                  style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="flex items-center justify-center gap-3 w-full h-[36px] px-4 rounded-[8px] text-[14px] font-normal transition-colors hover:bg-gray-50"
          style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.10)", color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
        >
          <MessageIcon />
          <span>Message</span>
        </button>
      </div>
    </div>
  );
}

// ─── Timeline Card ────────────────────────────────────────────────────────────

function TimelineCard({ lead }) {
  const badgeStyle = getBadgeStyle(lead.status);

  return (
    <div
      className="flex flex-col gap-[30px] p-6 rounded-[14px] bg-white w-full"
      style={{ border: "1px solid rgba(0,0,0,0.10)" }}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3
            className="text-[20px] leading-[28px] font-medium"
            style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
          >
            {lead.name}
          </h3>
          <p
            className="text-[16px] leading-[20px] font-normal"
            style={{ color: "#717182", fontFamily: "Manrope, sans-serif" }}
          >
            {lead.property}
          </p>
        </div>
        <span
          className="inline-flex items-center justify-center px-2 py-[2px] rounded-[8px] text-[14px] leading-[16px] font-normal flex-shrink-0"
          style={{ ...badgeStyle, fontFamily: "Manrope, sans-serif", whiteSpace: "nowrap", minWidth: "58px" }}
        >
          {lead.status}
        </span>
      </div>

      {/* Timeline Events */}
      <div className="flex flex-col gap-4">
        {lead.events.map((event, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Icon + vertical line column */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: "20px" }}>
              {event.isLast ? <CheckCircleIcon /> : <CircleIcon />}
              {!event.isLast && (
                <div
                  className="flex-1 mt-1"
                  style={{ width: "2px", minHeight: event.note ? "72px" : "44px", background: "rgba(0,0,0,0.10)" }}
                />
              )}
            </div>

            {/* Event content */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p
                className="text-[16px] leading-[24px] font-medium"
                style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
              >
                {event.title}
              </p>
              <p
                className="text-[14px] leading-[16px] font-normal"
                style={{ color: "#717182", fontFamily: "Manrope, sans-serif" }}
              >
                {event.date}
              </p>
              {event.note && (
                <div
                  className="mt-1 p-3 rounded-[10px] w-full"
                  style={{ background: "rgba(248, 131, 121, 0.17)" }}
                >
                  <p
                    className="text-[16px] leading-[20px] font-normal"
                    style={{ color: "#4F4F5A", fontFamily: "Manrope, sans-serif" }}
                  >
                    {event.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Leads() {
  const [activeTab, setActiveTab] = useState("list");
  const [filterStatus, setFilterStatus] = useState("All Leads");
  const [filterOpen, setFilterOpen] = useState(false);
  const [leads, setLeads] = useState(leadsData);

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  const filteredLeads =
    filterStatus === "All Leads" ? leads : leads.filter((l) => l.status === filterStatus);

  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8"
      style={{ background: "hsl(var(--background))", fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1472px] mx-auto flex flex-col gap-8">

        {/* Tab List */}
        <div
          className="flex items-center w-full max-w-[292px] h-[36px] p-[3px] rounded-[14px]"
          style={{ background: "#FFFFFF" }}
        >
          <button
            onClick={() => setActiveTab("list")}
            className="flex-1 h-[29px] rounded-[14px] text-[14px] font-normal leading-[20px] text-center transition-colors"
            style={{
              background: activeTab === "list" ? "rgba(248, 131, 121, 0.73)" : "transparent",
              color: "#0A0A0A",
              fontFamily: "Manrope, sans-serif",
              border: "1px solid transparent",
            }}
          >
            List View
          </button>
          <button
            onClick={() => setActiveTab("timeline")}
            className="flex-1 h-[29px] rounded-[14px] text-[14px] font-normal leading-[20px] text-center transition-colors"
            style={{
              background: activeTab === "timeline" ? "rgba(248, 131, 121, 0.73)" : "transparent",
              color: "#0A0A0A",
              fontFamily: "Manrope, sans-serif",
              border: "1px solid transparent",
            }}
          >
            Timeline View
          </button>
        </div>

        {/* Tab Panel */}
        <div className="flex flex-col gap-4 w-full">

          {/* Filter row */}
          <div className="flex items-center gap-4 flex-wrap">
            <span
              className="text-[14px] leading-[20px] font-normal whitespace-nowrap"
              style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
            >
              Filter by status:
            </span>
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center justify-between gap-2 h-[36px] px-3 rounded-[8px] text-[14px] font-normal min-w-[140px]"
                style={{ background: "#F3F3F5", border: "1px solid #F3F3F5", color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
              >
                <span>{filterStatus}</span>
                <ChevronDownIcon />
              </button>
              {filterOpen && (
                <div
                  className="absolute left-0 top-full mt-1 min-w-full rounded-[8px] overflow-hidden z-10 shadow-md"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.10)" }}
                >
                  {filterOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setFilterStatus(opt); setFilterOpen(false); }}
                      className="w-full text-left px-3 py-2 text-[14px] hover:bg-gray-50 transition-colors whitespace-nowrap"
                      style={{ color: "#0A0A0A", fontFamily: "Manrope, sans-serif" }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          {filteredLeads.length === 0 ? (
            <div
              className="flex items-center justify-center py-16 rounded-[14px]"
              style={{ border: "1px solid rgba(0,0,0,0.10)", background: "#fff" }}
            >
              <p className="text-[16px]" style={{ color: "#717182", fontFamily: "Manrope, sans-serif" }}>
                No leads found for this status.
              </p>
            </div>
          ) : activeTab === "list" ? (
            <div className="flex flex-col gap-4">
              {filteredLeads.map((lead) => (
                <ListCard key={lead.id} lead={lead} onStatusChange={handleStatusChange} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredLeads.map((lead) => (
                <TimelineCard key={lead.id} lead={lead} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
