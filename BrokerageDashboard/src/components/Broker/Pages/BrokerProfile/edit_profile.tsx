import { useState, useEffect } from "react";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 mt-[2px]"
  >
    <path
      d="M16.6693 5L7.5026 14.1667L3.33594 10"
      stroke="#7FFFD4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6693 10.8311C16.6693 14.9978 13.7526 17.0811 10.2859 18.2894C10.1044 18.351 9.90722 18.348 9.7276 18.2811C6.2526 17.0811 3.33594 14.9978 3.33594 10.8311V4.99777C3.33594 4.77676 3.42374 4.5648 3.58002 4.40852C3.7363 4.25223 3.94826 4.16444 4.16927 4.16444C5.83594 4.16444 7.91927 3.16444 9.36927 1.89777C9.54582 1.74694 9.7704 1.66406 10.0026 1.66406C10.2348 1.66406 10.4594 1.74694 10.6359 1.89777C12.0943 3.17277 14.1693 4.16444 15.8359 4.16444C16.057 4.16444 16.2689 4.25223 16.4252 4.40852C16.5815 4.5648 16.6693 4.77676 16.6693 4.99777V10.8311Z"
      stroke="#7FFFD4"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 4.5L3.5 16.5M3.5 4.5L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function EditProfile() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    // Company Details
    tradeName: "Barnes International Realty-Dubai",
    reraOrnId: "2982398246",
    brokerageName: "Barnes International Realty-Dubai",
    officeAddress: "Office 305, Building Onyx Tower 2, The Greens, n/a, Dubai,",
    officePhone: "+971******",
    officeEmail: "info@barnes-international.com",
    propertyTypes: "Hotel Apartments, Townhouses, Penthouses, Villas, Apartments",
    description: "Barnes International is a global leader in high-end real estate, known for its excellence and exceptional service. Our Dubai office combines international standards with the vibrancy of the local market. Choosing Barnes International Dubai means benefiting from our global reach and local expertise. With a network spanning 22 countries and 145 offices, we connect you with prime real estate opportunities worldwide while offering in-depth knowledge of the local market. Our professionalism is unmatched; we pride ourselves on integrity, transparency, and a commitment to excellence, ensuring a seamless and rewarding experience. We leverage the latest technology and market insights to provide innovative solutions and strategies, maximizing the value of your investments. Our portfolio features exclusive properties, from luxurious villas and penthouses to premium apartments and investment properties. We offer personalized consultations and bespoke property solutions to meet the unique needs of each client, whether you are looking to buy, sell, or invest. Our expert team consists of seasoned professionals with years of experience in the real estate industry. With deep insights into the Dubai market, we guide you through every step of your real estate journey. At Barnes International Dubai, we transform your real estate dreams into reality, offering the guidance, resources, and support necessary for informed decisions and achieving your goals.",
    // Coverage Areas
    coverageAreas: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah",
    serviceRadius: "25 km",
    // Expertise
    specializations: "Luxury Properties, Commercial Real Estate, Investment Properties",
    yearsOfExperience: "15",
    focusAreas: "High-end residential, Commercial development, Property management",
    // Primary Contact
    primaryContact: "Natasha Howe",
    contactEmail: "n.howe@barnes-international.com",
    contactPhone: "+971*********",
    // Private Information
    legalCompanyName: "Barnes International Realty",
    tradeLicenseNumber: "00000",
    registeredAddress: "Office 305, Building Onyx Tower 2, The Greens, n/a, Dubai,",
    // Billing Details
    billingEmail: "n.howe@barnes-international.com",
    vatNumber: "XXXX",
    invoiceAddress: "XXXX",
  });

  const [awards, setAwards] = useState([
    { id: 1, title: "Winner - House of Superagent Vierra Property", category: "Sales Excellence", year: "2025" },
  ]);

  const handleAwardChange = (id, field, value) => {
    setAwards((prev) => prev.map((a) => a.id === id ? { ...a, [field]: value } : a));
  };

  const addNewAward = () => {
    setAwards((prev) => [...prev, { id: Date.now(), title: "", category: "", year: "" }]);
  };

  const deleteAward = (id) => {
    setAwards((prev) => prev.filter((a) => a.id !== id));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const stats = [
    { label: "Profile Views", value: "1,234" },
    { label: "Inquiries Received", value: "89" },
    { label: "Total Agents", value: "24" },
    { label: "Active Listings", value: "156" },
  ];

  const trustIndicators = [
    { title: "15+ Years in Business", subtitle: "Established 2008" },
    { title: "Licensed & Insured", subtitle: "Full coverage" },
    { title: "24/7 Customer Support", subtitle: "Always available" },
  ];

  return (
    <div className=" bg-background font-poppins">
      {/* Top bar */}
<div className="sticky top-0 z-10 bg-background border-b border-black/10 dark:border-white/10 shadow-sm">
  <div className="w-full mx-auto px-6 py-3 flex flex-col items-start">
    
    <span className="font-poppins font-semibold text-lg text-[#0A0A0A] dark:text-white">
      Public Information
    </span>

    <p className="font-poppins text-base font-normal leading-6 text-[#68706A] dark:text-slate-400">
      Manage your personal information and profile details.
    </p>

  </div>
</div>

      

      {/* Main content */}
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col xl:flex-row items-start gap-6">

          {/* ── Left Sidebar ── */}
          <div className="flex flex-col gap-6 w-full xl:w-[29.125rem] xl:flex-shrink-0">

            {/* ── Card 1: Brokerage Logo ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.875rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 pt-6 pb-0">
                <h3 className="font-poppins font-medium text-base leading-none text-[#0A0A0A] dark:text-white">
                  Brokerage Logo
                </h3>
              </div>
              <div className="px-6 pt-[1.375rem] pb-6 flex flex-col gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/380eb5515abb6981869a736a06005cc3e124700e?width=836"
                  alt="Brokerage Profile"
                  className="w-full h-[21.3125rem] object-cover rounded-[0.625rem]"
                />
                <button className="w-full py-2 px-4 rounded-[0.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-slate-700 text-[0.875rem] font-poppins font-normal text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                  Change Logo
                </button>
              </div>
            </div>

            {/* ── Card 2: Verification Status ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.875rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 pt-6 pb-0 flex items-center gap-[0.5rem]">
                <ShieldIcon />
                <h3 className="font-poppins font-medium text-base leading-none text-[#0A0A0A] dark:text-white">
                  Verification Status
                </h3>
              </div>
              <div className="px-6 pt-[1.375rem] pb-6 flex flex-col gap-4">
                {["Identity Verified", "Business License", "Insurance"].map((label) => (
                  <div key={label} className="flex items-center justify-between h-[1.375rem]">
                    <span className="font-poppins font-normal text-[0.875rem] leading-5 text-[#45556C] dark:text-slate-300">
                      {label}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-[0.5rem] border border-[#B9F8CF] bg-[#DCFCE7] dark:bg-emerald-950 dark:border-emerald-800 text-[0.75rem] font-poppins font-normal text-[#008236] dark:text-emerald-300 leading-4 whitespace-nowrap">
                      Verified
                    </span>
                  </div>
                ))}
                <div className="pt-[0.5625rem] border-t border-black/10 dark:border-white/10 flex flex-col gap-1">
                  <span className="font-poppins font-normal text-[0.75rem] leading-4 text-[#62748E] dark:text-slate-400">
                    License Number
                  </span>
                  <span className="font-poppins font-normal text-[0.875rem] leading-5 text-[#0A0A0A] dark:text-white">
                    CA-BRE-123456
                  </span>
                </div>
              </div>
            </div>

            {/* ── Card 3: Profile Stats ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.875rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 pt-6 pb-0">
                <h3 className="font-poppins font-medium text-base leading-none text-[#0A0A0A] dark:text-white">
                  Profile Stats
                </h3>
              </div>
              <div className="px-6 pt-[1.375rem] pb-6 flex flex-col gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between h-5">
                    <span className="font-poppins font-normal text-[0.875rem] leading-[120%] text-[#45556C] dark:text-slate-300">
                      {stat.label}
                    </span>
                    <span className="font-poppins font-medium text-[0.875rem] leading-[120%] text-[#0A0A0A] dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Card 4: Trust Indicators ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.875rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 pt-6 pb-0">
                <h3 className="font-arimo font-normal text-base leading-none text-[#0A0A0A] dark:text-white">
                  Trust Indicators
                </h3>
              </div>
              <div className="px-6 pt-[1.375rem] pb-6 flex flex-col gap-3">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.title} className="flex items-start gap-2 h-9">
                    <CheckIcon />
                    <div className="flex flex-col gap-1">
                      <span className="font-arimo font-normal text-[0.875rem] leading-5 text-[#0A0A0A] dark:text-white">
                        {indicator.title}
                      </span>
                      <span className="font-arimo font-normal text-[0.75rem] leading-4 text-[#62748E] dark:text-slate-400">
                        {indicator.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right Main Content ── */}
          <div className="flex flex-col gap-6 flex-1 w-full min-w-0">

            {/* ── Company Details Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-6">
              <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                Company Details
              </h2>

              <div className="flex flex-col gap-4">
                {/* Row 1: Trade Name + RERA ORN ID */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Trade Name (public-facing)
                    </label>
                    <input
                      type="text"
                      name="tradeName"
                      value={formData.tradeName}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      RERA ORN ID
                    </label>
                    <input
                      type="text"
                      name="reraOrnId"
                      value={formData.reraOrnId}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Brokerage Name */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Brokerage Name
                    </label>
                    <input
                      type="text"
                      name="brokerageName"
                      value={formData.brokerageName}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Office Address */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Office Address
                    </label>
                    <input
                      type="text"
                      name="officeAddress"
                      value={formData.officeAddress}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 4: Office Phone + Office email */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Office Phone
                    </label>
                    <input
                      type="text"
                      name="officePhone"
                      value={formData.officePhone}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Office email
                    </label>
                    <input
                      type="email"
                      name="officeEmail"
                      value={formData.officeEmail}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 5: Property Types */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Property Types
                    </label>
                    <input
                      type="text"
                      name="propertyTypes"
                      value={formData.propertyTypes}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 6: Description */}
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    rows={6}
                    className="w-full px-3 py-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors resize-vertical"
                  />
                </div>
              </div>
            </div>

            {/* ── Coverage Areas Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-6">
              <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                Coverage Areas
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Coverage Areas
                  </label>
                  <input
                    type="text"
                    name="coverageAreas"
                    value={formData.coverageAreas}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Service Radius
                  </label>
                  <input
                    type="text"
                    name="serviceRadius"
                    value={formData.serviceRadius}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* ── Expertise Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-6">
              <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                Expertise
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Specializations
                  </label>
                  <input
                    type="text"
                    name="specializations"
                    value={formData.specializations}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Focus Areas
                  </label>
                  <textarea
                    name="focusAreas"
                    value={formData.focusAreas}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-3 py-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors resize-vertical"
                  />
                </div>
              </div>
            </div>

            {/* ── Awards Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                  Awards
                </h2>
                <button
                  onClick={addNewAward}
                  className="flex items-center gap-1 px-2 py-2 rounded-[0.25rem] bg-[#7FFFD4] hover:bg-[#6fe8c2] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.32812 8H12.6615" stroke="#343A40" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.32812V12.6615" stroke="#343A40" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-poppins font-normal text-[0.875rem] leading-[120%] text-[#343A40]">Add New Award</span>
                </button>
              </div>

              {/* Award Cards */}
              <div className="flex flex-col gap-6">
                {awards.map((award) => (
                  <div key={award.id} className="flex flex-col gap-6 p-4 rounded-[0.75rem] border border-[#AFB3B0] dark:border-slate-600 relative">
                    {/* Delete Button */}
                    {awards.length > 1 && (
                      <button
                        onClick={() => deleteAward(award.id)}
                        className="absolute top-4 right-4 p-1 text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Delete award"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5 4.5L3.5 16.5M3.5 4.5L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                        <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                          Award Title
                        </label>
                        <input
                          type="text"
                          value={award.title}
                          onChange={(e) => handleAwardChange(award.id, "title", e.target.value)}
                          className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                        <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                          Category
                        </label>
                        <input
                          type="text"
                          value={award.category}
                          onChange={(e) => handleAwardChange(award.id, "category", e.target.value)}
                          className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                        Year
                      </label>
                      <input
                        type="text"
                        value={award.year}
                        onChange={(e) => handleAwardChange(award.id, "year", e.target.value)}
                        className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Contact */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Primary contact person
                  </label>
                  <input
                    type="text"
                    name="primaryContact"
                    value={formData.primaryContact}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Contact email
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Private Information Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-6">
              <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                Private Information
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Legal company name
                    </label>
                    <input
                      type="text"
                      name="legalCompanyName"
                      value={formData.legalCompanyName}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Trade License number
                    </label>
                    <input
                      type="text"
                      name="tradeLicenseNumber"
                      value={formData.tradeLicenseNumber}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Registered address
                  </label>
                  <input
                    type="text"
                    name="registeredAddress"
                    value={formData.registeredAddress}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* ── Billing Details Form ── */}
            <div className="bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6 flex flex-col gap-6">
              <h2 className="font-poppins font-semibold text-2xl leading-[120%] text-[#343A40] dark:text-white">
                Billing Details
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      Billing Email
                    </label>
                    <input
                      type="email"
                      name="billingEmail"
                      value={formData.billingEmail}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 flex-1 min-w-0">
                    <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                      VAT number (if applicable)
                    </label>
                    <input
                      type="text"
                      name="vatNumber"
                      value={formData.vatNumber}
                      onChange={handleFormChange}
                      className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label className="font-poppins font-medium text-base leading-6 text-[#434C45] dark:text-slate-300 self-stretch">
                    Invoice address (if different to registered address)
                  </label>
                  <input
                    type="text"
                    name="invoiceAddress"
                    value={formData.invoiceAddress}
                    onChange={handleFormChange}
                    className="w-full h-12 px-3 rounded-[0.25rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-normal text-base leading-6 text-[#68706A] dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex items-center justify-end gap-4 bg-white dark:bg-slate-800 rounded-[0.625rem] shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] p-6">
              <button
                onClick={() => {
                  // Reset form to initial state
                  setFormData({
                    tradeName: "Barnes International Realty-Dubai",
                    reraOrnId: "2982398246",
                    brokerageName: "Barnes International Realty-Dubai",
                    officeAddress: "Office 305, Building Onyx Tower 2, The Greens, n/a, Dubai,",
                    officePhone: "+971******",
                    officeEmail: "info@barnes-international.com",
                    propertyTypes: "Hotel Apartments, Townhouses, Penthouses, Villas, Apartments",
                    description: "Barnes International is a global leader in high-end real estate, known for its excellence and exceptional service. Our Dubai office combines international standards with the vibrancy of the local market. Choosing Barnes International Dubai means benefiting from our global reach and local expertise. With a network spanning 22 countries and 145 offices, we connect you with prime real estate opportunities worldwide while offering in-depth knowledge of the local market. Our professionalism is unmatched; we pride ourselves on integrity, transparency, and a commitment to excellence, ensuring a seamless and rewarding experience. We leverage the latest technology and market insights to provide innovative solutions and strategies, maximizing the value of your investments. Our portfolio features exclusive properties, from luxurious villas and penthouses to premium apartments and investment properties. We offer personalized consultations and bespoke property solutions to meet the unique needs of each client, whether you are looking to buy, sell, or invest. Our expert team consists of seasoned professionals with years of experience in the real estate industry. With deep insights into the Dubai market, we guide you through every step of your real estate journey. At Barnes International Dubai, we transform your real estate dreams into reality, offering the guidance, resources, and support necessary for informed decisions and achieving your goals.",
                    coverageAreas: "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah",
                    serviceRadius: "25 km",
                    specializations: "Luxury Properties, Commercial Real Estate, Investment Properties",
                    yearsOfExperience: "15",
                    focusAreas: "High-end residential, Commercial development, Property management",
                    primaryContact: "Natasha Howe",
                    contactEmail: "n.howe@barnes-international.com",
                    contactPhone: "+971*********",
                    legalCompanyName: "Barnes International Realty",
                    tradeLicenseNumber: "00000",
                    registeredAddress: "Office 305, Building Onyx Tower 2, The Greens, n/a, Dubai,",
                    billingEmail: "n.howe@barnes-international.com",
                    vatNumber: "XXXX",
                    invoiceAddress: "XXXX",
                  });
                  setAwards([
                    { id: 1, title: "Winner - House of Superagent Vierra Property", category: "Sales Excellence", year: "2025" },
                  ]);
                }}
                className="px-6 py-3 rounded-[0.5rem] border border-[#C0C3C1] dark:border-slate-600 bg-white dark:bg-slate-700 font-poppins font-medium text-base text-[#434C45] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
              >
                Discard Changes
              </button>
              <button
                onClick={() => {
                  console.log("Changes saved:", { ...formData, awards });
                  alert("Changes saved successfully!");
                }}
                className="px-6 py-3 rounded-[0.5rem] bg-[#7FFFD4] dark:bg-[#7FFFD4] font-poppins font-medium text-base text-[#000000] dark:text-[#000000] hover:bg-[#6fe8c2] dark:hover:bg-[#6fe8c2] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
