// @ts-nocheck
import { useState } from "react";

const salesTransactions = [
  { year: 2026, residential: 1, commercial: 0, total: 1 },
  { year: 2025, residential: 1, commercial: 8, total: 9 },
  { year: 2024, residential: 4, commercial: 3, total: 7 },
  { year: 2023, residential: 2, commercial: 3, total: 5 },
];

const rentTransactions = [
  { year: 2026, residential: 1, commercial: 0, total: 1 },
  { year: 2025, residential: 1, commercial: 8, total: 9 },
  { year: 2024, residential: 4, commercial: 3, total: 7 },
  { year: 2023, residential: 2, commercial: 3, total: 5 },
];

const initialAreas = [
  { id: 1, name: "Tilal Al Ghaf", featured: false },
  { id: 2, name: "The Greens", featured: false },
  { id: 3, name: "Damac Hills", featured: false },
  { id: 4, name: "Damac Lagoons", featured: true },
  { id: 5, name: "Town Square", featured: false },
  { id: 6, name: "Arjan", featured: false },
  { id: 7, name: "Downtown Dubai", featured: false },
  { id: 8, name: "Palm Jumeirah", featured: true },
];

function LocationPin({ stroke = "#0F172A" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarBadge() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M5.76297 1.13916C5.78488 1.09738 5.81873 1.06221 5.86069 1.03762C5.90265 1.01303 5.95106 1 6.00045 1C6.04984 1 6.09825 1.01303 6.14021 1.03762C6.18217 1.06221 6.21602 1.09738 6.23793 1.13916L7.39282 3.34715C7.46891 3.49248 7.58121 3.61821 7.72011 3.71356C7.859 3.8089 8.02033 3.87101 8.19025 3.89455L10.773 4.2513C10.822 4.25799 10.8679 4.27748 10.9058 4.30755C10.9436 4.33762 10.9717 4.37708 10.987 4.42147C11.0023 4.46585 11.0041 4.51339 10.9923 4.55871C10.9805 4.60403 10.9554 4.64531 10.92 4.67789L9.05217 6.39465C8.92899 6.50795 8.83683 6.64781 8.78362 6.80219C8.7304 6.95657 8.71773 7.12084 8.7467 7.28086L9.18766 9.7064C9.1963 9.75257 9.19102 9.8001 9.17241 9.84357C9.15381 9.88704 9.12263 9.9247 9.08244 9.95225C9.04225 9.97981 8.99467 9.99614 8.94512 9.9994C8.89556 10.0027 8.84604 9.99269 8.8022 9.97066L6.4934 8.8249C6.34128 8.7495 6.17202 8.71011 6.0002 8.71011C5.82837 8.71011 5.65912 8.7495 5.50699 8.8249L3.1987 9.97066C3.15487 9.99256 3.10541 10.0024 3.05594 9.99909C3.00647 9.99578 2.95898 9.97942 2.91887 9.95189C2.87877 9.92435 2.84765 9.88675 2.82906 9.84335C2.81048 9.79996 2.80517 9.7525 2.81374 9.7064L3.2542 7.28133C3.28329 7.12124 3.27069 6.95686 3.21747 6.80238C3.16425 6.64791 3.07202 6.50797 2.94872 6.39465L1.08089 4.67837C1.04519 4.64582 1.01989 4.60447 1.00788 4.55901C0.995866 4.51356 0.997619 4.46583 1.01294 4.42127C1.02826 4.37671 1.05653 4.33711 1.09453 4.30698C1.13253 4.27684 1.17874 4.25739 1.22788 4.25083L3.81015 3.89455C3.98026 3.87119 4.14181 3.80916 4.2809 3.71381C4.41998 3.61845 4.53243 3.49262 4.60857 3.34715L5.76297 1.13916Z" stroke="var(--form-secondary)" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TransactionTable({ title, data }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex flex-col gap-4">
        <h4 className="text-base font-medium text-[#0A0A0A] font-poppins">{title}</h4>
        <div className="rounded-xl border border-[#E6E7E6] overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="h-11 px-0 text-center text-sm font-normal text-black border-r border-b border-[#E6E7E6] bg-[rgba(248,131,121,0.10)] font-poppins">Year</th>
                <th className="h-11 px-0 text-center text-sm font-normal text-black border-r border-b border-[#E6E7E6] bg-[rgba(248,131,121,0.10)] font-poppins">Residential</th>
                <th className="h-11 px-0 text-center text-sm font-normal text-black border-r border-b border-[#E6E7E6] bg-[rgba(248,131,121,0.10)] font-poppins">Commercial</th>
                <th className="h-11 px-0 text-center text-sm font-normal text-black border-b border-[#E6E7E6] bg-[rgba(248,131,121,0.10)] font-poppins">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={row.year} className={i < data.length - 1 ? "border-b border-[#E6E7E6]" : ""}>
                  <td className="h-[72px] px-3 text-center text-sm font-medium text-black border-r border-[#E6E7E6] font-poppins">{row.year}</td>
                  <td className="h-[72px] px-3 text-center text-sm font-medium text-black border-r border-[#E6E7E6] font-poppins">{row.residential}</td>
                  <td className="h-[72px] px-3 text-center text-sm font-medium text-black border-r border-[#E6E7E6] font-poppins">{row.commercial}</td>
                  <td className="h-[72px] px-3 text-center text-sm font-medium text-black font-poppins">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ToggleSwitch({ value, onChange }) {
  return (
    <div className="flex p-2 gap-1 bg-[var(--form-section-bg)] rounded-lg w-[137px]">
      {["On", "Off"].map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt.toLowerCase())}
          className={`flex-1 py-3 rounded-lg text-xs font-medium text-[var(--form-text)] font-poppins transition-colors ${value === opt.toLowerCase() ? "bg-white shadow-sm" : ""}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="flex p-2 gap-1 bg-[var(--form-section-bg)] rounded-lg">
      {options.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-4 py-3 rounded-lg text-xs font-medium text-[var(--form-text)] font-poppins transition-colors whitespace-nowrap ${value === opt.value ? "bg-white shadow-sm" : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder = "" }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-base font-medium text-[#434C45] font-poppins">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="h-12 px-3 rounded border border-[#C0C3C1] bg-white text-[var(--text-grey)] text-base font-poppins outline-none focus:border-[var(--form-primary)] transition-colors"
      />
    </div>
  );
}

export default function EditProfile() {
  const [gender, setGender] = useState("female");
  const [salesExpertise, setSalesExpertise] = useState("both");
  const [propertyType, setPropertyType] = useState("both");
  const [marketType, setMarketType] = useState("both");
  const [areas, setAreas] = useState(initialAreas);
  const [newArea, setNewArea] = useState("");
  const [displaySales, setDisplaySales] = useState("on");
  const [displayRent, setDisplayRent] = useState("on");
  const [form, setForm] = useState({
    fullName: "Natasha Howe",
    designation: "Senior Property Consultant",
    nationality: "British",
    reraBrnId: "56188",
    languagesSpoken: "English & Russian",
    experience: "16 years",
    brokerage: "Barnes International Realty Dubai",
    reraOrnId: "406",
    officeAddress: "The onyx, Two Towers Tecom - Emaar Square, Building 4 - Office 703 - Dubai",
    legalFullName: "Natasha Howe",
    contactEmail: "n.howe@barnes-international.com",
    phoneNumber: "+971********",
    billingEmail: "n.howe@barnes-international.com",
    vatNumber: "",
    invoiceAddress: "",
  });

  const handleChange = (name, value) => setForm(prev => ({ ...prev, [name]: value }));

  const addArea = () => {
    if (newArea.trim()) {
      setAreas(prev => [...prev, { id: Date.now(), name: newArea.trim(), featured: false }]);
      setNewArea("");
    }
  };

  const removeArea = (id) => setAreas(prev => prev.filter(a => a.id !== id));

  return (
    <div className="min-h-screen bg-[var(--Colors-for-white-theme-White)] p-0 md:p-0 font-poppins">
          <div className="w-full p-2">
      <button
        type="button"
        className="flex h-[60px] w-full items-center justify-between rounded-[6px] bg-white px-4 shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] hover:shadow-[0_6px_10px_0_rgba(0,0,0,0.12)] transition-shadow duration-200"
      >
        {/* Left: icon + label */}
        <div className="flex items-center gap-[10px]">
          {/* Profile icon */}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M13.4557 14.875V13.4583C13.4557 12.7069 13.1572 11.9862 12.6259 11.4549C12.0945 10.9235 11.3738 10.625 10.6224 10.625H6.3724C5.62095 10.625 4.90028 10.9235 4.36893 11.4549C3.83757 11.9862 3.53906 12.7069 3.53906 13.4583V14.875"
              stroke="#F88379"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.4974 7.79167C10.0622 7.79167 11.3307 6.52314 11.3307 4.95833C11.3307 3.39353 10.0622 2.125 8.4974 2.125C6.93259 2.125 5.66406 3.39353 5.66406 4.95833C5.66406 6.52314 6.93259 7.79167 8.4974 7.79167Z"
              stroke="#F88379"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Label */}
          <span className="font-poppins font-bold text-[14px] leading-[120%] text-[#F88379]">
            Profile
          </span>
        </div>

        {/* Right: dropdown arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20" />
        </svg>
      </button>
    </div>
      <div className="w-full  flex flex-col lg:flex-row gap-6 items-stretch mt-4">


        {/* ══════════════════════════════════
            LEFT PANEL — Bio / Profile Preview
            ══════════════════════════════════ */}
        <div className="w-full lg:w-[410px] xl:w-[420px] flex-shrink-0 bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.12)] overflow-hidden border border-[#E6E7E6]">

          {/* Gradient banner */}
          <div className="relative">
            <div
              className="h-[150px] w-full rounded-t-lg"
              style={{ background: "linear-gradient(180deg, #DBFFF3 0%, #FFF 50%, #FFE8E6 100%)", opacity: 0.8 }}
            />
            {/* Avatar — sits over the banner bottom edge */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
              <div className="relative w-[130px] h-[130px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ab98ed6f04d865f8372187d5b599d544c540d58b?width=320"
                  alt="Natasha Howe"
                  className="w-full h-full rounded-full border-4 border-[#F7F8F8] shadow-[0_4px_15px_rgba(0,0,0,0.10)] object-cover"
                />
                <button
                  type="button"
                  className="absolute bottom-1 right-1 w-8 h-8 bg-[var(--form-primary)] rounded-full border-2 border-[var(--form-bg)] flex items-center justify-center shadow-md"
                >
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 13.4972L14.9999 14.3178C14.6021 14.7528 14.0626 14.9972 13.5001 14.9972C12.9376 14.9972 12.3981 14.7528 12.0003 14.3178C11.6019 13.8836 11.0625 13.6398 10.5001 13.6398C9.93778 13.6398 9.39835 13.8836 8.99998 14.3178M2.25 14.9972H3.50591C3.87279 14.9972 4.05624 14.9972 4.22887 14.9558C4.38192 14.9191 4.52824 14.8584 4.66245 14.7762C4.81382 14.6834 4.94354 14.5537 5.20296 14.2943L14.625 4.87224C15.2463 4.25092 15.2463 3.24356 14.625 2.62224C14.0037 2.00092 12.9963 2.00092 12.375 2.62224L2.95295 12.0443C2.69352 12.3037 2.5638 12.4334 2.47104 12.5848C2.3888 12.719 2.32819 12.8653 2.29145 13.0184C2.25 13.191 2.25 13.3745 2.25 13.7414V14.9972Z" stroke="var(--form-bg)" strokeWidth="1.53237" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content below avatar */}
          <div className="mt-[78px] px-6 pb-8 flex flex-col gap-5">

            {/* Name */}
            <h2 className="text-center text-2xl font-semibold text-[var(--form-primary)] font-poppins">Natasha Howe</h2>

            {/* Bio */}
            <div className="flex flex-col gap-2">
              <span className="text-base font-medium text-[#434C45] font-poppins">Bio</span>
              <p className="text-[15px] text-[var(--text-grey)] leading-[1.6] font-poppins font-normal">
                Natasha has over 16 years of experience with a deep understanding of the real estate market and a passion for ensuring all clients are always beyond satisfied, along with her strong ability to drive sales growth making her an invaluable asset to any organization. Having worked for both large international corporate firms such as Knight Frank and Savills, to smaller boutiques, as well as launching new start-ups, Natasha has a broad range of experience and a very extensive network of buyers and sellers within the market, as her investor base has built up steadily over the years. She is proactive and forward-thinking in her approach to real estate, which can be a huge asset when it comes to helping clients navigate the complexities of the market. With her proven track record of building successful relationships, she has demonstrated a strong work ethic and a reputation for consistently pushing herself to do her best and exceed expectations, always staying extremely motivated and determined to succeed in all aspects of her role, always doing everything in her power to find the perfect property with a seamless, ethical and transparent approach.
              </p>
            </div>

            {/* Transaction disclaimer */}
            <p className="text-sm font-medium text-[var(--form-primary)] leading-[1.4] font-poppins">
              Transactions shown are self-declared by the agent. Official transfer records can be verified through the Dubai Land Department using the agent's BRN or the brokerage ORN
            </p>

            {/* Sales history toggle */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-[var(--form-primary)] font-poppins">Display Transaction History on Public Profile</span>
              <ToggleSwitch value={displaySales} onChange={setDisplaySales} />
            </div>

            {/* Sales transactions table */}
            <TransactionTable title="Sales Transactions" data={salesTransactions} />

            {/* Rent history toggle */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-[var(--form-primary)] font-poppins">Display Transaction History on Public Profile</span>
              <ToggleSwitch value={displayRent} onChange={setDisplayRent} />
            </div>

            {/* Rent transactions table */}
            <TransactionTable title="Rent Transactions" data={rentTransactions} />
          </div>
        </div>

        {/* ══════════════════════════════════
            RIGHT PANEL — Edit Form
            ══════════════════════════════════ */}
        <div className="flex-1 min-w-0 bg-[var(--form-bg)] rounded-lg border border-[#E6E7E6] shadow-[0_4px_8px_rgba(0,0,0,0.12)] p-6 flex flex-col gap-6">

          {/* ── PUBLIC INFORMATION ── */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[32px] font-bold text-[var(--base-black)] font-manrope leading-[1.2]">Public Information</h1>
            <p className="text-base font-normal text-[var(--text-grey)] font-poppins">Manage your personal information and profile details.</p>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-6">
            {[{ value: "male", label: "Male" }, { value: "female", label: "Female" }].map(g => (
              <div key={g.value} className="flex items-center gap-2 cursor-pointer" onClick={() => setGender(g.value)}>
                <span className="text-sm font-medium text-[#434C45] font-poppins">{g.label}</span>
                <div className="w-[18px] h-[18px] rounded-full border border-[#434C45] flex items-center justify-center flex-shrink-0 p-[3px]">
                  {gender === g.value && <div className="w-full h-full rounded-full bg-[var(--form-primary)]" />}
                </div>
              </div>
            ))}
          </div>

          {/* Row: Full Name / Designation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
            <FormField label="Designation" name="designation" value={form.designation} onChange={handleChange} />
          </div>

          {/* Row: Nationality / RERA BRN ID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Nationality" name="nationality" value={form.nationality} onChange={handleChange} />
            <FormField label="RERA BRN ID" name="reraBrnId" value={form.reraBrnId} onChange={handleChange} />
          </div>

          {/* Row: Languages / Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Languages Spoken" name="languagesSpoken" value={form.languagesSpoken} onChange={handleChange} />
            <FormField label="Experience" name="experience" value={form.experience} onChange={handleChange} />
          </div>

          {/* Row: Brokerage / RERA ORN ID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField label="Brokerage" name="brokerage" value={form.brokerage} onChange={handleChange} />
            <FormField label="RERA ORN ID" name="reraOrnId" value={form.reraOrnId} onChange={handleChange} />
          </div>

          {/* Office Address — full width */}
          <FormField label="Office Address" name="officeAddress" value={form.officeAddress} onChange={handleChange} />

          {/* Expertise */}
          <div className="flex flex-col gap-4">
            <span className="text-base font-medium text-[#0A0A0A] font-poppins">Expertise</span>
            <div className="flex flex-wrap gap-4">
              <SegmentedControl
                options={[
                  { value: "sales", label: "Sales" },
                  { value: "rents", label: "Rents" },
                  { value: "both", label: "Both" },
                ]}
                value={salesExpertise}
                onChange={setSalesExpertise}
              />
              <SegmentedControl
                options={[
                  { value: "residential", label: "Residential" },
                  { value: "commercial", label: "Commercial" },
                  { value: "both", label: "Both" },
                ]}
                value={propertyType}
                onChange={setPropertyType}
              />
              <SegmentedControl
                options={[
                  { value: "off-plan", label: "Off-Plan" },
                  { value: "secondary-market", label: "Secondary Market" },
                  { value: "both", label: "Both" },
                ]}
                value={marketType}
                onChange={setMarketType}
              />
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="flex flex-col gap-4 p-4 rounded-lg border border-transparent">
            <span className="text-base font-medium text-[#0A0A0A] font-poppins">Coverage Areas</span>

            {/* Area input row */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#EFEFEF] rounded-lg">
              <LocationPin />
              <input
                type="text"
                value={newArea}
                onChange={e => setNewArea(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addArea()}
                placeholder="Type your Area"
                className="flex-1 bg-transparent text-sm text-[#7C7C7C] outline-none placeholder:text-[#7C7C7C] font-poppins min-w-0"
              />
              <button
                type="button"
                onClick={addArea}
                className="h-[45px] px-6 bg-[var(--form-primary)] text-[var(--form-bg)] text-sm font-semibold font-poppins rounded-md flex-shrink-0 hover:bg-[#e8726a] transition-colors"
              >
                Add
              </button>
            </div>

            {/* Area tags */}
            <div className="flex flex-wrap gap-3">
              {areas.map(area => (
                <div
                  key={area.id}
                  className="flex items-center gap-2 px-5 py-2   rounded-lg cursor-pointer hover:bg-[#fff5f4] transition-colors group"
                  onClick={() => removeArea(area.id)}
                  title="Click to remove"
                  style={{border:"1px solid #F88379"}}
                >
                  <LocationPin />
                  <span className="text-sm font-normal text-[#0F172A] font-poppins">{area.name}</span>
                  {area.featured && <StarBadge />}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E6E7E6]" />

          {/* ── PRIVATE INFORMATION ── */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] font-bold text-[var(--base-black)] font-manrope leading-[1.2]">Private Information</h2>

            {/* Legal Full Name — full width */}
            <FormField label="Legal Full Name (if different)" name="legalFullName" value={form.legalFullName} onChange={handleChange} />

            {/* Row: Contact email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Contact email" name="contactEmail" value={form.contactEmail} onChange={handleChange} />
              <FormField label="Phone number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E6E7E6]" />

          {/* ── BILLING DETAILS ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-[var(--base-black)] font-poppins">Billing Details</h3>

            {/* Row: Billing Email / VAT Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Billing Email" name="billingEmail" value={form.billingEmail} onChange={handleChange} />
              <FormField label="VAT Number (if applicable)" name="vatNumber" value={form.vatNumber} onChange={handleChange} />
            </div>

            {/* Row: Invoice Address / Upload KYC Doc */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField label="Invoice Address" name="invoiceAddress" value={form.invoiceAddress} onChange={handleChange} />

              {/* Upload KYC */}
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-[#434C45] font-poppins">Upload KYC Doc</label>
                <label className="h-12 px-3 rounded border border-[#C0C3C1] bg-white flex items-center justify-end cursor-pointer hover:border-[var(--form-primary)] transition-colors">
                  <input type="file" className="hidden" />
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6654 21.3359V10.4693L11.1987 13.9359L9.33203 12.0026L15.9987 5.33594L22.6654 12.0026L20.7987 13.9359L17.332 10.4693V21.3359H14.6654ZM7.9987 26.6693C7.26536 26.6693 6.63781 26.4084 6.11603 25.8866C5.59425 25.3648 5.33292 24.7368 5.33203 24.0026V20.0026H7.9987V24.0026H23.9987V20.0026H26.6654V24.0026C26.6654 24.7359 26.4045 25.3639 25.8827 25.8866C25.3609 26.4093 24.7329 26.6702 23.9987 26.6693H7.9987Z" fill="#757575" />
                  </svg>
                </label>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-end items-center gap-4 pt-2">
            <button
              type="button"
              className="h-[45px] px-6 border border-[var(--text-grey)] rounded-md text-sm font-medium text-[var(--text-grey)] font-poppins hover:bg-gray-100 transition-colors"
            >
              Discard Changes
            </button>
            <button
              type="button"
              className="h-[45px] w-[142px] bg-[var(--form-primary)] rounded-md text-sm font-semibold text-[var(--form-bg)] font-poppins hover:bg-[#e8726a] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
