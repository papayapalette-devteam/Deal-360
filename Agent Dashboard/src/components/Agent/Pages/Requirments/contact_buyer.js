export default function ContactBuyer() {
  const infoItems = [
    { label: "Preferred Locations", value: "Portofino, DAMAC Lagoons, Dubai" },
    { label: "Use Type", value: "Investment" },
    { label: "Budget (AED)", value: "3,800,000" },
    { label: "Buyer signals", value: "Ready to Proceed, Serious buyer" },

    { label: "Preferred Locations", value: "Villa" },
    { label: "Configuration", value: "any" },
    { label: "Occupancy Status", value: "Vacant, Tenanted" },
    { label: "Completion Status", value: "Ready, Off-plan" },

    { label: "Ownership Tenure", value: "Freehold" },
    { label: "Bedrooms (Min)", value: "5" },
    { label: "Bathrooms (Min)", value: "6" },
    { label: "Built-Up Area(BUA)", value: "2364 Sq.Ft" },

    { label: "Plot Size", value: "1550 Sq.Ft" },
    { label: "Parking Spaces (Min)", value: "3" },
    { label: "Parking Type", value: "Any" },
    { label: "Must-Have Features", value: "Bathtub, Balcony, Pet allowed" },

    { label: "Finance Method", value: "Cash Buyer" },
    { label: "Target Closing Date", value: "Q1 2026" },
    { label: "Urgency Level", value: "Actively Looking" },
    { label: "Additional Keywords or Requirements*", value: "High floor apartment, sea view," },
  ];

  return (
    <div
      className="min-h-screen py-6 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: "var(--form-bg)", fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif" }}
    >
      <div className="w-full mx-auto flex flex-col gap-3">

        {/* Go Back */}
        <button className="flex items-center gap-2 w-fit" style={{ color: "#4B4B4B" }}>
          <span
            className="flex items-center justify-center w-6 h-6 rounded-full"
            style={{ background: "#D9FFF2" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8 12L15.4 16.6L14 18L8 12L14 6L15.4 7.4L10.8 12Z" fill="#1D1B20" />
            </svg>
          </span>
          <span className="text-base font-normal leading-[110%]" style={{ color: "#4B4B4B" }}>Go back</span>
        </button>

        {/* Profile Card */}
        <div
          className="relative rounded-[10px] overflow-hidden pb-6"
          style={{
            background: "#fff",
            border: "1.111px solid rgba(0,0,0,0.10)",
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)",
          }}
        >
          {/* Gradient Banner */}
          <div
            className="w-full"
            style={{
              height: "117px",
              background: "linear-gradient(90deg, rgba(255,159,151,0.60) 0%, rgba(183,255,231,0.50) 100%)",
            }}
          />

          {/* Avatar — overlaps banner */}
          <div
            className="absolute hidden sm:flex items-center justify-center"
            style={{
              width: "128px",
              height: "128px",
              top: "63px",
              left: "39px",
              borderRadius: "50%",
              border: "3.333px solid #fff",
              background: "#F3F4F6",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)",
              overflow: "hidden",
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/deca2d85730a93eec698ceb50658d85accaad634?width=240"
              alt="Olivia Rhye"
              style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", border: "4px solid #F7F8F8" }}
            />
          </div>

          {/* Mobile avatar */}
          <div className="sm:hidden flex justify-center -mt-12 mb-2 relative z-10">
            <div
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                border: "3px solid #fff",
                background: "#F3F4F6",
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.10)",
                overflow: "hidden",
              }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/deca2d85730a93eec698ceb50658d85accaad634?width=240"
                alt="Olivia Rhye"
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* User Info */}
          <div className="flex sm:ml-36 flex-col gap-2 pt-4 pb-0 px-4 sm:px-0 ">
            <h1 className="text-2xl sm:text-[28px] font-semibold leading-[120%]" style={{ color: "var(--base-black)" }}>
              Olivia Rhye
            </h1>

            <p className="text-xs leading-[120%] m-0">
              <span className="font-medium" style={{ color: "#000" }}>Bio:</span>
              {" "}
              <span style={{ color: "#4B4B4B" }}>Fashion designer passionate about creating styles that celebrate individuality and comfort.</span>
            </p>

            <p className="text-xs leading-[120%] m-0">
              <span style={{ color: "#000" }}>Email: </span>
              <span style={{ color: "#4B4B4B" }}>bessieedwards@gmail.com</span>
            </p>

            <p className="text-xs leading-[120%] m-0">
              <span style={{ color: "#000" }}>Phone: </span>
              <span style={{ color: "#4B4B4B" }}>+971 ********</span>
            </p>

            <p className="text-xs leading-[150%] m-0">
              <span className="font-medium" style={{ color: "var(--base-black)" }}>Location:</span>
              {" "}
              <span style={{ color: "var(--text-grey)" }}>Portofino, DAMAC Lagoons, Dubai</span>
            </p>

            <p className="text-xs leading-[150%] m-0">
              <span className="font-medium" style={{ color: "var(--base-black)" }}>Since: </span>
              <span style={{ color: "#4B4B4B" }}>14 August, 2025</span>
            </p>

            {/* Contact Button */}
            <button
              className="flex items-center gap-1 w-fit px-2 py-1 mt-1 rounded-lg text-xs font-normal leading-6"
              style={{ background: "#7FFFD4", color: "#4B4B4B", height: "32px" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M12.3145 11.2226L12.5745 13.3293C12.6412 13.8826 12.0479 14.2693 11.5745 13.9826L8.7812 12.3226C8.47453 12.3226 8.17454 12.3026 7.88121 12.2626C8.37454 11.6826 8.66787 10.9493 8.66787 10.1559C8.66787 8.26259 7.02787 6.72929 5.0012 6.72929C4.22787 6.72929 3.51454 6.94927 2.9212 7.33594C2.9012 7.16927 2.89453 7.0026 2.89453 6.82926C2.89453 3.79593 5.52787 1.33594 8.7812 1.33594C12.0345 1.33594 14.6679 3.79593 14.6679 6.82926C14.6679 8.62926 13.7412 10.2226 12.3145 11.2226Z" fill="#4B4B4B" />
                <path d="M8.66536 10.1532C8.66536 10.9465 8.37204 11.6799 7.8787 12.2599C7.2187 13.0599 6.17203 13.5732 4.9987 13.5732L3.2587 14.6065C2.96536 14.7865 2.59203 14.5399 2.63203 14.1999L2.7987 12.8866C1.90536 12.2666 1.33203 11.2732 1.33203 10.1532C1.33203 8.97987 1.9587 7.94654 2.9187 7.33321C3.51203 6.94654 4.22536 6.72656 4.9987 6.72656C7.02536 6.72656 8.66536 8.25987 8.66536 10.1532Z" fill="#4B4B4B" />
              </svg>
              Contact Buyer
            </button>
          </div>
        </div>

        {/* Required Information */}
        <div
          className="rounded-2xl p-4 sm:p-6 flex flex-col gap-6"
          style={{ background: "#fff" }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0"
              style={{ background: "#D9FFF2" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0548 5.72263V10.2826C14.0548 11.0293 13.6548 11.7226 13.0081 12.1026L9.0481 14.3893C8.40143 14.7626 7.60141 14.7626 6.94808 14.3893L2.98808 12.1026C2.34141 11.7293 1.94141 11.0359 1.94141 10.2826V5.72263C1.94141 4.97596 2.34141 4.2826 2.98808 3.9026L6.94808 1.61594C7.59475 1.2426 8.39476 1.2426 9.0481 1.61594L13.0081 3.9026C13.6548 4.2826 14.0548 4.96929 14.0548 5.72263Z" fill="#4B4B4B" />
                <path d="M8 9.16406C7.72667 9.16406 7.5 8.9374 7.5 8.66406V5.16406C7.5 4.89073 7.72667 4.66406 8 4.66406C8.27333 4.66406 8.5 4.89073 8.5 5.16406V8.66406C8.5 8.9374 8.27333 9.16406 8 9.16406Z" fill="#7FFFD4" />
                <path d="M7.9987 11.4967C7.91203 11.4967 7.82536 11.4766 7.74536 11.4433C7.65869 11.41 7.59202 11.3633 7.52535 11.3033C7.46535 11.2367 7.4187 11.1633 7.3787 11.0833C7.34537 11.0033 7.33203 10.9167 7.33203 10.83C7.33203 10.6567 7.39868 10.4833 7.52535 10.3566C7.59202 10.2966 7.65869 10.25 7.74536 10.2167C7.99203 10.11 8.28538 10.17 8.47205 10.3566C8.53205 10.4233 8.57869 10.49 8.61202 10.5766C8.64535 10.6566 8.66536 10.7433 8.66536 10.83C8.66536 10.9167 8.64535 11.0033 8.61202 11.0833C8.57869 11.1633 8.53205 11.2367 8.47205 11.3033C8.34538 11.43 8.1787 11.4967 7.9987 11.4967Z" fill="#7FFFD4" />
              </svg>
            </span>
            <h2 className="text-xl font-medium leading-[110%]" style={{ color: "#4B4B4B" }}>
              Required Information
            </h2>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoItems.map((item, i) => (
              <InfoCard key={i} label={item.label} value={item.value} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div
      className="flex flex-col gap-2 px-4 py-2 rounded-lg overflow-hidden"
      style={{ background: "var(--brand-mint-light)" }}
    >
      <span className="text-xs font-normal leading-[120%]" style={{ color: "var(--form-placeholder)" }}>
        {label}
      </span>
      <span className="text-sm font-normal leading-[120%]" style={{ color: "var(--form-text-black)" }}>
        {value}
      </span>
    </div>
  );
}
