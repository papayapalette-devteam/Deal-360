import { useState } from "react";

function InfoField({ label, value }) {
  return (
    <div className="flex flex-col gap-[7px]">
      <span
        style={{
          color: "var(--gray-text-secondary)",
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "120%",
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: "var(--secondary-text)",
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "120%",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.0026 18.3307C4.56058 18.3307 4.13665 18.1551 3.82409 17.8426C3.51153 17.53 3.33594 17.1061 3.33594 16.6641V3.33073C3.33594 2.8887 3.51153 2.46478 3.82409 2.15222C4.13665 1.83966 4.56058 1.66407 5.0026 1.66407H11.6693C11.9331 1.66364 12.1943 1.7154 12.438 1.81637C12.6818 1.91734 12.9031 2.06553 13.0893 2.2524L16.0793 5.2424C16.2666 5.42865 16.4152 5.65019 16.5165 5.8942C16.6178 6.13821 16.6697 6.39987 16.6693 6.66407V16.6641C16.6693 17.1061 16.4937 17.53 16.1811 17.8426C15.8686 18.1551 15.4446 18.3307 15.0026 18.3307H5.0026Z" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6641 1.66406V5.83073C11.6641 6.05174 11.7519 6.2637 11.9081 6.41998C12.0644 6.57626 12.2764 6.66406 12.4974 6.66406H16.6641" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33073 7.5H6.66406" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3307 10.8359H6.66406" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3307 14.1641H6.66406" stroke="#101828" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#eye-clip)">
        <path d="M1.37758 8.22319C1.32206 8.07361 1.32206 7.90907 1.37758 7.75949C1.91836 6.44825 2.83631 5.32711 4.01504 4.53819C5.19378 3.74928 6.58022 3.32812 7.9986 3.32812C9.41698 3.32812 10.8034 3.74928 11.9822 4.53819C13.1609 5.32711 14.0788 6.44825 14.6196 7.75949C14.6751 7.90907 14.6751 8.07361 14.6196 8.22319C14.0788 9.53443 13.1609 10.6556 11.9822 11.4445C10.8034 12.2334 9.41698 12.6546 7.9986 12.6546C6.58022 12.6546 5.19378 12.2334 4.01504 11.4445C2.83631 10.6556 1.91836 9.53443 1.37758 8.22319Z" stroke="#364153" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.9987 9.98958C9.10255 9.98958 9.9974 9.09474 9.9974 7.99089C9.9974 6.88704 9.10255 5.99219 7.9987 5.99219C6.89485 5.99219 6 6.88704 6 7.99089C6 9.09474 6.89485 9.98958 7.9987 9.98958Z" stroke="#364153" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="eye-clip">
          <rect width="15.9896" height="15.9896" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99219 9.99479V2" stroke="#364153" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.9922 9.99219V12.6571C13.9922 13.0105 13.8518 13.3494 13.6019 13.5993C13.352 13.8492 13.0131 13.9896 12.6597 13.9896H3.33247C2.97907 13.9896 2.64016 13.8492 2.39027 13.5993C2.14038 13.3494 2 13.0105 2 12.6571V9.99219" stroke="#364153" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66406 6.66406L7.99523 9.99523L11.3264 6.66406" stroke="#364153" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ApproveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5265 6.66026C14.8307 8.15348 14.6139 9.70589 13.9121 11.0586C13.2103 12.4113 12.066 13.4825 10.67 14.0936C9.27396 14.7047 7.71064 14.8188 6.24071 14.4168C4.77079 14.0148 3.48311 13.121 2.59241 11.8845C1.70171 10.648 1.26184 9.14346 1.34615 7.62189C1.43045 6.10031 2.03384 4.65362 3.05569 3.52308C4.07754 2.39254 5.45608 1.64648 6.96142 1.40931C8.46676 1.17215 10.0079 1.45822 11.3279 2.21982" stroke="#101828" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99219 7.32769L7.99089 9.32639L14.6532 2.66406" stroke="#101828" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RejectIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99826 14.6606C11.6778 14.6606 14.6606 11.6778 14.6606 7.99826C14.6606 4.31876 11.6778 1.33594 7.99826 1.33594C4.31876 1.33594 1.33594 4.31876 1.33594 7.99826C1.33594 11.6778 4.31876 14.6606 7.99826 14.6606Z" stroke="white" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.98958 5.99219L5.99219 9.98958" stroke="white" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99219 5.99219L9.98958 9.98958" stroke="white" strokeWidth="1.33247" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DocumentCard({ name, meta }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-0 rounded-[10px] h-[104px]"
      style={{ background: "#F9FAFB" }}
    >
      {/* Left: icon + file info */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center rounded-[10px] shrink-0"
          style={{
            width: "36px",
            height: "36px",
            background: "var(--form-secondary)",
            padding: "8px",
          }}
        >
          <FileIcon />
        </div>
        <div className="flex flex-col gap-2">
          <span
            style={{
              color: "var(--secondary-text)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "120%",
            }}
          >
            {name}
          </span>
          <span
            style={{
              color: "var(--gray-text-secondary)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
            {meta}
          </span>
        </div>
      </div>

      {/* Right: View + Download buttons */}
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-1 px-3 py-[6px] rounded-[10px] hover:opacity-80 transition-opacity"
          style={{
            border: "1.111px solid #D1D5DC",
            background: "transparent",
          }}
        >
          <EyeIcon />
          <span
            style={{
              color: "#364153",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "120%",
            }}
          >
            View
          </span>
        </button>
        <button
          className="flex items-center gap-1 px-3 py-[6px] rounded-[10px] hover:opacity-80 transition-opacity"
          style={{
            border: "1.111px solid #D1D5DC",
            background: "transparent",
          }}
        >
          <DownloadIcon />
          <span
            style={{
              color: "#364153",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "120%",
            }}
          >
            Download
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Documentsreview({onClose}) {
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleApprove = () => {
    setApproved(true);
    setRejected(false);
  };

  const handleReject = () => {
    setRejected(true);
    setApproved(false);
  };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 h-full">
  <div
    className="w-full max-w-[672px] h-full sm:h-auto max-h-[95vh] flex flex-col rounded-[14px]"
    style={{
      background: "var(--brand-white)",
      boxShadow:
        "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)",
    }}
  >
    {/* Header */}
    <div
      className="flex items-center justify-between px-4 sm:px-6 h-[60px] sm:h-[77px] flex-shrink-0 mt-2"
      style={{ borderBottom: "1.111px solid #E5E7EB" }}
    >
      <h2
        className="text-base sm:text-lg font-medium"
        style={{
          color: "var(--secondary-text)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Document Review
        <p className="text-sm text-[var(--gray-text-secondary)]">COMP-7821</p>
      </h2>
      

      <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9971 21.9942C17.5184 21.9942 21.9942 17.5184 21.9942 11.9971C21.9942 6.47586 17.5184 2 11.9971 2C6.47586 2 2 6.47586 2 11.9971C2 17.5184 6.47586 21.9942 11.9971 21.9942Z" stroke="#99A1AF" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.9983 9L9 14.9983" stroke="#99A1AF" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 9L14.9983 14.9983" stroke="#99A1AF" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </button>
    </div>

    {/* Scrollable Content */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 flex flex-col gap-6">
      
      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <InfoField label="Request ID" value="COMP-7821" />
        <InfoField label="User" value="John Martinez (U-8392)" />
        <InfoField label="Verification Type" value="identity" />
        <InfoField
          label="Status"
          value={approved ? "approved" : rejected ? "rejected" : "pending"}
        />
        <InfoField label="Submitted Date" value="2026-01-18" />
        <div />
        <div className="sm:col-span-2">
          <InfoField label="Notes" value="Standard identity verification request" />
        </div>
      </div>

      {/* Documents */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-[var(--secondary-text)]">
          Submitted Documents
        </span>

        <div className="flex flex-col gap-2">
          <DocumentCard name="passport.pdf" meta="PDF • 2.3 MB • Uploaded 2026-01-18" />
          <DocumentCard name="selfie.jpg" meta="JPG • 1.1 MB • Uploaded 2026-01-18" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-4 border-t">
        <span className="text-sm font-medium text-[var(--secondary-text)]">
          Review Actions
        </span>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleApprove}
            className="flex-1 py-2 px-4 rounded-lg bg-[var(--form-secondary)] text-[var(--secondary-text)]"
          >
            Approve Verification
          </button>

          <button
            onClick={handleReject}
            className="flex-1 py-2 px-4 rounded-lg bg-[var(--form-primary)] text-white"
          >
            Reject Verification
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
