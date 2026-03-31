import { useRef } from "react";

export default function UploadUAEPassId() {

  const inputRef = useRef(null);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const colors = {
    border: "var(--Colors-for-white-theme-Secondary)",
    background: "#FFF9F9",
    icon: "var(--Colors-for-white-theme-Secondary)",
    title: "var(--base-black)",
    text: "#364153",
  };

  const requirements = [
    "Document must be valid and not expired",
    "Image must be clear and well-lit",
    "All text must be readable",
    "No black and white copies accepted",
  ];

  function InfoIcon() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, marginTop: "1px" }}
      >
        <g clipPath="url(#clip0_doc_req)">
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6V9"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H9.0075"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_doc_req">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <div
      className="min-h-screen flex  justify-start px-4 py-0"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="w-full flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {/* Briefcase icon container */}
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 64,
              height: 64,
              background: "#FFF6F5",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3307 26.6641V5.33073C21.3307 4.62349 21.0498 3.94521 20.5497 3.44511C20.0496 2.94501 19.3713 2.66406 18.6641 2.66406H13.3307C12.6235 2.66406 11.9452 2.94501 11.4451 3.44511C10.945 3.94521 10.6641 4.62349 10.6641 5.33073V26.6641" stroke="#F88379" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6641 8H5.33073C3.85797 8 2.66406 9.19391 2.66406 10.6667V24C2.66406 25.4728 3.85797 26.6667 5.33073 26.6667H26.6641C28.1368 26.6667 29.3307 25.4728 29.3307 24V10.6667C29.3307 9.19391 28.1368 8 26.6641 8Z" stroke="#F88379" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Title & subtitle */}
          <div className="flex flex-col items-center gap-2">
            <h1
              className="text-2xl font-medium text-center"
              style={{ color: "var(--base-black)", lineHeight: "120%" }}
            >
              Verify as Agent
            </h1>
            <p
              className="text-base text-center"
              style={{ color: "var(--text-grey)", lineHeight: "120%" }}
            >
              Choose your preferred verification method
            </p>
          </div>
        </div>

        {/* Cards + Info Section */}
        <div className="flex flex-col gap-6 w-full items-stretch">
          {/* Two verification cards */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* UAE Pass Verification Card */}
            <div
              className="relative flex flex-col rounded-2xl p-6 flex-1 w-full min-w-0"
              style={{
                border: "1px solid #F88379",
                background: "#FFEFEE",
              }}
            >
              {/* Recommended badge - top right */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 rounded px-2 py-1"
                style={{ background: "#F88379" }}
              >
                <span className="text-xs font-normal" style={{ color: "#000" }}>Recommended</span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-4 mt-4 justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-start justify-center rounded-xl pt-3 px-3"
                    style={{ width: 52, height: 52, background: "#F88379" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3307 15.162C23.3307 20.9953 19.2474 23.912 14.3941 25.6037C14.1399 25.6898 13.8639 25.6857 13.6124 25.592C8.7474 23.912 4.66406 20.9953 4.66406 15.162V6.99532C4.66406 6.6859 4.78698 6.38915 5.00577 6.17036C5.22456 5.95157 5.52131 5.82865 5.83073 5.82865C8.16406 5.82865 11.0807 4.42865 13.1107 2.65532C13.3579 2.44415 13.6723 2.32812 13.9974 2.32812C14.3225 2.32812 14.6369 2.44415 14.8841 2.65532C16.9257 4.44032 19.8307 5.82865 22.1641 5.82865C22.4735 5.82865 22.7702 5.95157 22.989 6.17036C23.2078 6.38915 23.3307 6.6859 23.3307 6.99532V15.162Z" stroke="#F8F9FA" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl font-medium" style={{ color: "var(--base-black)", lineHeight: "120%" }}>
                          UAE Pass Verification
                        </span>
                        <div className="flex items-center justify-center px-2 py-0.5 rounded-lg overflow-hidden" style={{ border: "1px solid #8EC5FF", background: "#FFF", height: 22 }}>
                          <span className="text-xs font-normal" style={{ color: "#1447E6" }}>Instant</span>
                        </div>
                      </div>
                      <p className="text-base font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
                        Verify instantly using your UAE Pass digital identity. Fastest and most secure method.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      <FeatureItem text="Instant verification (30 seconds)" color="#F88379" />
                      <FeatureItem text="Government-backed identity" color="#F88379" />
                      <FeatureItem text="No document upload required" color="#F88379" />
                    </div>
                  </div>
                </div>

                {/* Button aligned bottom-right */}

                <button
                  className=" flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal transition-opacity hover:opacity-90 active:opacity-75 mt-4"
                  style={{
                    background: "#F88379",
                    color: "var(--base-black)",
                    width: "fit-content",
                    height: 40,
                  }}
                >
                  <span>Verify with UAE Pass</span>
                </button>

              </div>
            </div>

            {/* Manual ID Verification Card */}
            <div
              className="relative flex flex-col rounded-2xl p-6 flex-1 w-full min-w-0"
              style={{
                border: "1px solid #68706A",
                background: "#FFFFFF",
              }}
            >
              {/* Recommended badge - top right */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 rounded px-2 py-1"
                style={{ background: "#F88379" }}
              >
                <span className="text-xs font-normal" style={{ color: "#000" }}>Recommended</span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-4 mt-4 justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-start justify-center rounded-xl pt-3 px-3"
                    style={{ width: 52, height: 52, background: "#F3F4F6" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.4974 2.33594H6.9974C6.37856 2.33594 5.78506 2.58177 5.34748 3.01935C4.9099 3.45694 4.66406 4.05043 4.66406 4.66927V23.3359C4.66406 23.9548 4.9099 24.5483 5.34748 24.9859C5.78506 25.4234 6.37856 25.6693 6.9974 25.6693H20.9974C21.6162 25.6693 22.2097 25.4234 22.6473 24.9859C23.0849 24.5483 23.3307 23.9548 23.3307 23.3359V8.16927L17.4974 2.33594Z" stroke="#4A5565" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl font-medium" style={{ color: "var(--base-black)", lineHeight: "120%" }}>
                          Manual ID Verification
                        </span>
                        <div className="flex items-center justify-center px-2 py-0.5 rounded overflow-hidden" style={{ border: "1px solid #AFB3B0", background: "#FFF", height: 24 }}>
                          <span className="text-xs font-normal" style={{ color: "#AFB3B0" }}>24-48 hours</span>
                        </div>
                      </div>
                      <p className="text-base font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
                        Verify manually by uploading documents. Reviewed within 24-48 hours.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      <FeatureItem text="Upload Passport or Emirates ID" color="#565656" />
                      <FeatureItem text="Take a selfie for verification" color="#565656" />
                      <FeatureItem text="Review within 24-48 hours" color="#565656" />
                    </div>
                  </div>
                </div>

                {/* Button aligned bottom-right */}
                <button
                  className=" flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal transition-opacity hover:opacity-90 active:opacity-75 mt-4"
                  style={{
                    border: "1px solid rgba(0,0,0,0.10)",
                    background: "#FFF",
                    color: "var(--base-black)",
                    width: "fit-content",
                    height: 40,
                  }}
                >
                  <span>Upload Documents</span>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "24px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "14px",
              border: "2px solid #D1D5DC",
              background: "var(--Colors-for-white-theme-White)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                width: "100%",
              }}
            >
              {/* Icon + Text group */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  width: "100%",
                }}
              >
                {/* Upload Icon */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                    stroke="#C0C3C1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34 16L24 6L14 16"
                    stroke="#C0C3C1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 6V30"
                    stroke="#C0C3C1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Title + Subtitle */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      color: "var(--base-black)",
                      textAlign: "center",
                      fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: "120%",
                      margin: 0,
                    }}
                  >
                    UAE Pass ID
                  </p>
                  <p
                    style={{
                      color: "var(--text-grey)",
                      textAlign: "center",
                      fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      margin: 0,
                    }}
                  >
                    Make sure the document is clear and all details are visible
                  </p>
                </div>
              </div>

              {/* Choose File Button */}
              <button
                onClick={handleChooseFile}
                style={{
                  display: "flex",
                  width: "128px",
                  height: "40px",
                  padding: "8px 16px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  background: "var(--form-secondary)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                      stroke="var(--form-text-black)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3307 5.33333L7.9974 2L4.66406 5.33333"
                      stroke="var(--form-text-black)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V10"
                      stroke="var(--form-text-black)"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      color: "var(--form-text-black)",
                      textAlign: "center",
                      fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "120%",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Choose File
                  </span>
                </div>
              </button>

              {/* Hidden file input */}
              <input
                ref={inputRef}
                type="file"
                style={{ display: "none" }}
                accept="image/*,.pdf"
              />
            </div>
          </div>

          {/* Info box */}
          <div
            className="document-requirements-card"
            style={{
              border: `1px solid ${colors.border}`,
              background: colors.background,
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <InfoIcon />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "120%",
                    color: colors.title,
                    margin: 0,
                  }}
                >
                  Document Requirements
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {requirements.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "120%",
                        color: colors.text,
                      }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text, color }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g clipPath="url(#clip-check)">
          <circle cx="8" cy="8" r="6.667" stroke={color} strokeWidth="1.33333" />
          <path d="M6 7.9974L7.33333 9.33073L10 6.66406" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip-check"><rect width="16" height="16" fill="white" /></clipPath>
        </defs>
      </svg>
      <span className="text-sm font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
        {text}
      </span>
    </div>
  );
}
