import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const properties = [
  { name: "Marina Pearl Apartment", docs: 5, progress: 100 },
  { name: "Palm Jumeirah Villa", docs: 3, progress: 60 },
  { name: "Downtown Office Suite", docs: 2, progress: 40 },
  { name: "Springs Villa 3BR", docs: 0, progress: 0 },
  { name: "JBR Beachfront Apartment", docs: 0, progress: 0 },
];

const filterTypes = [
  { label: "All Documents (5)", key: "all" },
  { label: "Title Deed (1)", key: "title_deed" },
  { label: "Ejari Certificate (1)", key: "ejari" },
  { label: "Tenancy Contract (1)", key: "tenancy" },
  { label: "Permits & Licenses (1)", key: "permits" },
  { label: "IDs & Passports (1)", key: "ids" },
  { label: "Other Documents (0)", key: "other" },
];

const docCategories = [
  { title: "Title Deed", desc: "Property ownership documents", count: 1, active: true },
  { title: "Ejari Certificate", desc: "Tenancy registration", count: 1, active: true },
  { title: "Tenancy Contract", desc: "Active rental agreements", count: 1, active: true },
  { title: "Permits & Licenses", desc: "Building and occupancy permits", count: 1, active: true },
  { title: "IDs & Passports", desc: "Tenant identification documents", count: 1, active: true },
  { title: "Other Documents", desc: "Miscellaneous files", count: 0, active: false },
];

const documents = [
  { name: "Title_Deed_Marina_Pearl.pdf", type: "Title Deed", date: "1/15/2024", size: "2.4 MB" },
  { name: "Ejari_Certificate_2025.pdf", type: "Ejari Certificate", date: "1/15/2024", size: "1.2 MB" },
  { name: "Tenancy_Contract_Sarah_Johnson.pdf", type: "Tenancy Contract", date: "1/15/2024", size: "3.1 MB" },
  { name: "Building_Permit_2024.pdf", type: "Permits & Licenses", date: "1/15/2024", size: "890 KB" },
  { name: "Tenant_Emirates_ID.pdf", type: "IDs & Passports", date: "1/15/2024", size: "890 KB" },
];

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

export default function EditPropertyManager() {
  const location = useLocation();
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [documentType, setDocumentType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-poppins">
      {/* Tab Navigation */}
      <div className="bg-white px-4 md:px-6 pt-4">
        <div className="mb-4">
          <h1 className="text-[#181818] font-manrope text-xl md:text-2xl font-bold leading-tight">Property Manager</h1>
          <p className="text-[#424242] font-manrope text-xs mt-0.5">View your profile and adjust your passkey</p>
        </div>
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto pb-0 scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.label}
                to={tab.path}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors no-underline ${
                  isActive
                    ? "bg-[#F88379] text-white"
                    : "text-[#4A5565] hover:bg-gray-100"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#4A5565]"}>
                  {tab.icon}
                </span>
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
          <h2 className="text-[#101828] text-lg font-bold font-poppins">Document Storage</h2>
          <p className="text-[#4A5565] text-sm font-normal mt-1">Securely store and manage all property-related documents</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[18.125rem] flex-shrink-0 flex flex-col gap-4">
            {/* Select Property */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex flex-col gap-3">
              <h3 className="text-[#101828] text-base font-normal">Select Property</h3>
              <div className="flex flex-col gap-2">
                {properties.map((prop, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedProperty(i)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      selectedProperty === i
                        ? "border-[#F88379] bg-[rgba(127,255,212,0.13)]"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[#101828] text-sm">{prop.name}</span>
                      {prop.docs > 0 && (
                        <span className="text-xs text-[#565656] font-medium">{prop.docs}</span>
                      )}
                    </div>
                    <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#7FFFD4] rounded-full transition-all"
                        style={{ width: `${prop.progress}%` }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Type */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#101828]">
                  <g clipPath="url(#fil)">
                    <path d="M6.66556 13.326C6.6655 13.4498 6.69994 13.5711 6.76502 13.6765C6.8301 13.7818 6.92324 13.8669 7.03399 13.9222L8.36645 14.5885C8.46805 14.6392 8.58094 14.6632 8.6944 14.658C8.80786 14.6529 8.91812 14.6189 9.01472 14.5591C9.11131 14.4994 9.19102 14.4159 9.24629 14.3167C9.30156 14.2175 9.33054 14.1058 9.33049 13.9922V9.32856C9.33064 8.99836 9.45339 8.67998 9.67493 8.43514L14.4871 3.11261C14.5734 3.01704 14.6301 2.89854 14.6504 2.77142C14.6707 2.6443 14.6538 2.51402 14.6017 2.39633C14.5495 2.27863 14.4644 2.17857 14.3566 2.10823C14.2487 2.0379 14.1229 2.0003 13.9941 2H2.00193C1.87309 2.00005 1.74702 2.03745 1.639 2.10769C1.53098 2.17792 1.44565 2.27797 1.39333 2.39572C1.34101 2.51346 1.32396 2.64385 1.34424 2.77109C1.36452 2.89833 1.42126 3.01696 1.50759 3.11261L6.32112 8.43514C6.54266 8.67998 6.66541 8.99836 6.66556 9.32856V13.326Z" stroke="#101828" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs><clipPath id="fil"><rect width="16" height="16" fill="white"/></clipPath></defs>
                </svg>
                <h3 className="text-[#101828] text-base font-normal">Filter by Type</h3>
              </div>
              <div className="flex flex-col gap-1">
                {filterTypes.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                      activeFilter === f.key
                        ? "bg-[rgba(248,131,121,0.16)] text-[#F88379] font-arimo"
                        : "text-[#4A5565] hover:bg-gray-50"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Document Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {docCategories.map((cat, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-4 flex flex-col gap-2 border ${
                    cat.active ? "border-[#7FFFD4]" : "border-[#E5E7EB]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* File icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.5026 1.66406H5.0026C4.56058 1.66406 4.13665 1.83966 3.82409 2.15222C3.51153 2.46478 3.33594 2.8887 3.33594 3.33073V16.6641C3.33594 17.1061 3.51153 17.53 3.82409 17.8426C4.13665 18.1551 4.56058 18.3307 5.0026 18.3307H15.0026C15.4446 18.3307 15.8686 18.1551 16.1811 17.8426C16.4937 17.53 16.6693 17.1061 16.6693 16.6641V5.83073L12.5026 1.66406Z" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.6641 1.66406V4.9974C11.6641 5.43942 11.8397 5.86335 12.1522 6.17591C12.4648 6.48847 12.8887 6.66406 13.3307 6.66406H16.6641" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.33073 7.5H6.66406" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3307 10.8359H6.66406" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3307 14.1641H6.66406" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* Check / X icon */}
                    {cat.active ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#chk)">
                          <path d="M18.1708 8.33357C18.5513 10.2013 18.2801 12.1431 17.4023 13.8351C16.5245 15.527 15.0932 16.8669 13.347 17.6313C11.6009 18.3957 9.64545 18.5384 7.80684 18.0355C5.96823 17.5327 4.35758 16.4147 3.24349 14.8681C2.12939 13.3214 1.57919 11.4396 1.68464 9.53639C1.79009 7.63318 2.54482 5.82364 3.82297 4.40954C5.10111 2.99545 6.82541 2.06226 8.70831 1.76561C10.5912 1.46897 12.5189 1.82679 14.1699 2.7794" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 9.16927L10 11.6693L18.3333 3.33594" stroke="#F88379" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs><clipPath id="chk"><rect width="20" height="20" fill="white"/></clipPath></defs>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clipPath="url(#cx)">
                          <path d="M9.9974 18.3307C14.5998 18.3307 18.3307 14.5998 18.3307 9.9974C18.3307 5.39502 14.5998 1.66406 9.9974 1.66406C5.39502 1.66406 1.66406 5.39502 1.66406 9.9974C1.66406 14.5998 5.39502 18.3307 9.9974 18.3307Z" stroke="#D1D5DC" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12.5 7.5L7.5 12.5" stroke="#D1D5DC" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7.5 7.5L12.5 12.5" stroke="#D1D5DC" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs><clipPath id="cx"><rect width="20" height="20" fill="white"/></clipPath></defs>
                      </svg>
                    )}
                  </div>
                  <p className="text-[#101828] text-base font-medium leading-tight">{cat.title}</p>
                  <p className="text-[#6A7282] text-sm font-normal leading-tight">{cat.desc}</p>
                  {cat.count > 0 && (
                    <p className="text-[#F88379] font-arimo text-xs">{cat.count} file(s)</p>
                  )}
                </div>
              ))}
            </div>

            {/* Upload Bar */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-[#101828] text-base font-medium">Upload Documents</h3>
                <p className="text-[#6A7282] text-sm mt-0.5">Add new documents for Marina Pearl Apartment</p>
              </div>
              <button onClick={() => setShowUploadModal(true)} className="flex items-center gap-2 bg-[#F88379] text-white px-4 py-2 rounded-lg text-sm font-normal hover:opacity-90 transition-opacity whitespace-nowrap">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.9922 9.99219V12.6571C13.9922 13.0105 13.8518 13.3494 13.6019 13.5993C13.352 13.8492 13.0131 13.9896 12.6597 13.9896H3.33247C2.97907 13.9896 2.64016 13.8492 2.39027 13.5993C2.14038 13.3494 2 13.0105 2 12.6571V9.99219" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.3264 5.33116L7.99523 2L4.66406 5.33116" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99219 2V9.99479" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Upload
              </button>
            </div>

            {/* Documents Table */}
            <div className="bg-white rounded-xl border border-[#E6E7E6] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[37.5rem]">
                  <thead>
                    <tr className="bg-[rgba(248,131,121,0.10)]">
                      <th className="text-left px-6 py-3 text-sm font-medium text-black">Document Name</th>
                      <th className="text-center px-6 py-3 text-sm font-medium text-black">Type</th>
                      <th className="text-center px-6 py-3 text-sm font-medium text-black">Upload Date</th>
                      <th className="text-center px-6 py-3 text-sm font-medium text-black">Size</th>
                      <th className="text-center px-6 py-3 text-sm font-medium text-black">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, i) => (
                      <tr key={i} className="border-b border-[#E6E7E6] last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-black text-sm font-semibold font-poppins">{doc.name}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-[#4A5565] text-sm font-normal">{doc.type}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-[#4A5565] text-sm font-normal">{doc.date}</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-[#4A5565] text-sm font-normal">{doc.size}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            {/* Download */}
                            <button className="p-1.5 rounded hover:bg-gray-100 transition-colors text-[#4A5565]">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.9922 9.99219V12.6571C13.9922 13.0105 13.8518 13.3494 13.6019 13.5993C13.352 13.8492 13.0131 13.9896 12.6597 13.9896H3.33247C2.97907 13.9896 2.64016 13.8492 2.39027 13.5993C2.14038 13.3494 2 13.0105 2 12.6571V9.99219" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.66406 6.66406L7.99523 9.99523L11.3264 6.66406" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.99219 9.99479V2" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                            {/* Delete */}
                            <button className="p-1.5 rounded hover:bg-red-50 transition-colors text-[#4A5565]">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#del)">
                                  <path d="M2 4H13.9922" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12.6554 4V13.3273C12.6554 13.9935 11.9891 14.6597 11.3229 14.6597H4.66059C3.99436 14.6597 3.32812 13.9935 3.32812 13.3273V4" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M5.32812 4.00087V2.6684C5.32812 2.00217 5.99436 1.33594 6.66059 1.33594H9.32552C9.99175 1.33594 10.658 2.00217 10.658 2.6684V4.00087" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M6.66406 7.32812V11.3255" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M9.32812 7.32812V11.3255" stroke="#4A5565" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs><clipPath id="del"><rect width="16" height="16" fill="white"/></clipPath></defs>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setShowUploadModal(false); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-[#181818] font-poppins text-lg font-semibold">Upload Document</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-[#6A7282]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="px-6 pb-6 flex flex-col gap-5">
              {/* Document Type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#181818] font-poppins text-sm font-medium">Document Type</label>
                <input
                  type="text"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  placeholder="e.g. Title Deed"
                  className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#181818] font-poppins outline-none focus:border-[#F88379] transition-colors placeholder:text-[#DBDBDB]"
                />
              </div>

              {/* Select File */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#181818] font-poppins text-sm font-medium">Select File</label>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    const file = e.dataTransfer.files[0];
                    if (file) setSelectedFile(file);
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 py-8 px-4 cursor-pointer transition-colors ${
                    dragging ? "border-[#F88379] bg-[rgba(248,131,121,0.05)]" : "border-[#E5E7EB] hover:border-[#F88379] hover:bg-[rgba(248,131,121,0.03)]"
                  }`}
                >
                  {/* Upload icon */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M27.9844 19.9844V25.3142C27.9844 26.021 27.7036 26.6989 27.2038 27.1986C26.704 27.6984 26.0262 27.9792 25.3194 27.9792H6.66493C5.95814 27.9792 5.28032 27.6984 4.78054 27.1986C4.28076 26.6989 4 26.021 4 25.3142V19.9844" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22.6528 10.6623L15.9905 4L9.32812 10.6623" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.9844 4V19.9896" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {selectedFile ? (
                    <div className="text-center">
                      <p className="text-[#101828] text-sm font-medium font-poppins">{selectedFile.name}</p>
                      <p className="text-[#6A7282] text-xs font-poppins mt-0.5">{(selectedFile.size / 1024).toFixed(0)} KB</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-[#4A5565] text-sm font-poppins">Click to browse or drag and drop</p>
                      <p className="text-[#6A7282] text-xs font-poppins mt-0.5">PDF, PNG, JPG up to 15MB</p>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setSelectedFile(file);
                    }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setDocumentType("");
                    setSelectedFile(null);
                  }}
                  className="flex-1 py-2.5 rounded-lg border border-[#E5E7EB] text-[#4A5565] text-sm font-medium font-poppins hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Upload logic placeholder
                    setShowUploadModal(false);
                    setDocumentType("");
                    setSelectedFile(null);
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-[#F88379] text-white text-sm font-medium font-poppins hover:opacity-90 transition-opacity"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
