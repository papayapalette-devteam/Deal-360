import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const colors = {
    cardBg: "var(--Colors-for-white-theme-White)",
    fieldBg: "var(--brand-mint-light)",
    titleColor: "var(--neutral-700)",
    labelColor: "var(--Colors-for-white-theme-Balck-text)",
    valueColor: "var(--Colors-for-white-theme-Balck-text)",
    tagColor: "var(--neutral-700)",
};

const fontFamily = "'Poppins', -apple-system, Roboto, Helvetica, sans-serif";


function InfoField({ label, value }) {
    return (
        <div
            style={{
                display: "flex",
                padding: "8px 16px",
                flexDirection: "column",
                gap: "4px",
                borderRadius: "8px",
                background: colors.fieldBg,
            }}
        >
            <span
                style={{
                    fontFamily,
                    fontSize: "14px",
                    color: colors.labelColor,
                }}
            >
                {label}
            </span>

            {value && (
                <span
                    style={{
                        fontFamily,
                        fontSize: "14px",
                        color: colors.valueColor,
                    }}
                >
                    {value}
                </span>
            )}
        </div>
    );
}


function TagField({ label }) {
    return (
        <div
            style={{
                display: "flex",
                padding: "8px 16px",
                borderRadius: "8px",
                background: colors.fieldBg,
            }}
        >
            <span
                style={{
                    fontFamily,
                    fontSize: "14px",
                    color: colors.tagColor,
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </span>
        </div>
    );
}



export default function Calendar({
    highlightedDates = [],
    fullName = "Maiam Buas",
    email = "mairambuas@gmail.com",
    phone = "+971****",
    propertyType = "Residential",
    listingType = "Rent",
    location = "Portofino, DAMAC Lagoons, Dubai",
    bookedTime = "12 : 00 PM",
}) {

    const today = new Date();

    const [viewDate, setViewDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [view, setView] = useState("monthly");

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const monthLabel = `${MONTHS[month]} ${year}`;

    const onViewChange = (type) => {
        setView(type);
    };

    const onToday = () => {
        const t = new Date();
        setViewDate(new Date(t.getFullYear(), t.getMonth(), 1));
    };

    const goToPrev = () => {
        setViewDate(new Date(year, month - 1, 1));
    };

    const goToNext = () => {
        setViewDate(new Date(year, month + 1, 1));
    };



    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells = [];

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        cells.push({ day: daysInPrevMonth - i, currentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        cells.push({ day: i, currentMonth: true });
    }

    const remaining = 42 - cells.length;

    for (let i = 1; i <= remaining; i++) {
        cells.push({ day: i, currentMonth: false });
    }

    const isToday = (day, currentMonth) => {
        if (!currentMonth) return false;

        return (
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    const isHighlighted = (day, currentMonth) => {
        if (!currentMonth) return false;
        return highlightedDates.includes(day);
    };



    return (
        <div>
              {/* Top Controls */}

         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mb-6">

  {/* View Switch */}
  <div
    className="flex items-center gap-1 p-[10px] rounded-full w-fit"
    style={{ background: "var(--pill-bg)" }}
  >
    <button
      onClick={() => onViewChange("monthly")}
      className="flex items-center justify-center h-8 px-4 rounded-full text-sm whitespace-nowrap"
      style={
        view === "monthly"
          ? { background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }
          : {}
      }
    >
      Monthly
    </button>

    <button
      onClick={() => onViewChange("weekly")}
      className="flex items-center justify-center h-8 px-4 rounded-full text-sm whitespace-nowrap"
    >
      Weekly
    </button>
  </div>

  {/* Right Section */}
  <div className="flex flex-wrap items-center gap-4 md:gap-6">

    {/* Today Button */}
    <button
      onClick={onToday}
      className="h-8 px-4 rounded-lg text-sm border whitespace-nowrap"
    >
      Today
    </button>

    {/* Month Navigation */}
    <div className="flex items-center gap-4 md:gap-6">

      <button
        onClick={goToPrev}
        className="text-lg font-medium"
      >
        ‹
      </button>

      <span className="text-sm md:text-base font-medium whitespace-nowrap">
        {monthLabel}
      </span>

      <button
        onClick={goToNext}
        className="text-lg font-medium"
      >
        ›
      </button>

    </div>

  </div>

</div>
        <div
            style={{
                background: "var(--Foundation-White-Light)",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.10)",
                padding: "30px",
                width: "100%",
                fontFamily,
            }}
        >

      

  {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <span
          style={{
            color: "var(--base-black)",
            fontSize: "clamp(18px, 2vw, 24px)",
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          Calendar
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
   

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span
              style={{
                color: "var(--Colors-for-white-theme-Secondary)",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: "120%",
                textAlign: "center",
              }}
            >
              {MONTHS[month]}
            </span>
            <span
              style={{
                color: "var(--Colors-for-white-theme-Secondary)",
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: "120%",
                textAlign: "center",
              }}
            >
              {year}
            </span>
          </div>

      
        </div>
      </div>

            {/* Day Headers */}

            <div className="grid grid-cols-7 mb-3">
                {DAYS.map((day) => (
                    <div key={day} className="text-center text-sm">
                        {day}
                    </div>
                ))}
            </div>



            {/* Calendar Grid */}

            <div className="grid grid-cols-7">

                {cells.map((cell, idx) => {

                    const highlighted = isHighlighted(cell.day, cell.currentMonth);
                    const todayCell = isToday(cell.day, cell.currentMonth);

                    return (

                        <div
                            key={idx}
                            className="flex items-center justify-center min-h-[60px]"
                            style={{
                                borderRadius: highlighted || todayCell ? "8px" : "0",
                                background:
                                    highlighted || todayCell
                                        ? "var(--calendar-highlight-bg)"
                                        : "transparent"
                            }}
                        >

                            <span
                                style={{
                                    color: cell.currentMonth
                                        ? "var(--Foundation-Black-Normal)"
                                        : "var(--Foundation-White-Darker)"
                                }}
                            >
                                {cell.day}
                            </span>

                        </div>

                    );

                })}

            </div>



            {/* Booking Info */}

            <div className="flex flex-col gap-6 p-6 rounded-xl w-full mt-6" style={{ background: colors.cardBg }}>

                <h2
                    className="text-[20px] font-medium"
                    style={{ fontFamily, color: colors.titleColor }}
                >
                    Booking Information
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <InfoField label="Full Name" value={fullName} />
                    <InfoField label="Email Address" value={email} />

                    <InfoField label="Phone Number" value={phone} />
                    <TagField label={propertyType} />

                    <TagField label={listingType} />
                    <InfoField label="Location" value={location} />

                    <InfoField label="Booked Time" value={bookedTime} />

                </div>

            </div>


        </div>

        </div>
    );
}