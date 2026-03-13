import { useState } from "react";
import PropertyInfoForm from "./property_info";
import MediaUpload from "./media_upload";
import ReviewPublish from "./review_publish";

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function PropertyListingForm() {

  const steps = [
    { label: "Property information" },
    { label: "Media Upload" },
    { label: "Review & Publish" },
  ];

  const [current, setcurrent] = useState(1);
  const total = steps.length;

  // Progress bar fill: complete steps + partial credit for in-progress
  const progressPercent = (current / total) * 100;

  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      width: "100%",
      fontFamily: "'Poppins', sans-serif",
      color: "var(--form-text)",
      backgroundColor: "var(--form-bg)",
      padding: "10px"
    }}>

      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-6 mb-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">

          <h1
            className="text-xl sm:text-2xl font-bold leading-8 sm:leading-9 whitespace-nowrap"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "#0A0A0A",
            }}
          >
            Add New Listing
          </h1>

          <p
            className="text-xs sm:text-sm whitespace-nowrap"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "var(--form-text)",
            }}
          >
            Complete all steps to publish your listing
          </p>

        </div>

        {/* RIGHT SIDE - TABS */}
        <div
          className="
      flex items-center gap-4 
      p-2 rounded-lg 
      flex-1
      w-full
    "
          style={{
            minHeight: "55px",
            background: "var(--form-section-bg)",
          }}
        >
          {/* Manual */}
          <div
            onClick={() => setActiveTab("manual")}
            className="
        flex-1 flex justify-center items-center
        cursor-pointer transition-all duration-200
        whitespace-nowrap
        text-sm md:text-base
      "
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              background: activeTab === "manual" ? "#FFF" : "transparent",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              color:
                activeTab === "manual"
                  ? "#0A0A0A"
                  : "var(--form-text)",
            }}
          >
            List Property Manually
          </div>

          {/* CSV */}
          <div
            onClick={() => setActiveTab("csv")}
            className="
        flex-1 flex justify-center items-center
        cursor-pointer transition-all duration-200
        whitespace-nowrap
        text-sm md:text-base
      "
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              background: activeTab === "csv" ? "#FFF" : "transparent",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              color:
                activeTab === "csv"
                  ? "#0A0A0A"
                  : "var(--form-text)",
            }}
          >
            Upload CSV File
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Step bubbles row */}
        <div className="flex items-start justify-between w-full">
          {steps.map((step, idx) => {
            const stepNumber = idx + 1;
            const isActive = stepNumber === current;
            const isDone = stepNumber < current;

            return (
              <div
                key={stepNumber}
                onClick={() => setcurrent(stepNumber)} // ✅ Click event
                className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
              >
                {/* Circle */}
                <div
                  className={[
                    "flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-all duration-300",
                    isActive || isDone
                      ? "bg-[#7FFFD4]"
                      : "bg-[#ECECF0]",
                  ].join(" ")}
                >
                  {isDone ? (
                    /* Checkmark */
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M1 7L6.5 12.5L17 1"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span
                      className={[
                        "text-base select-none transition-all",
                        isActive
                          ? "font-bold text-black"
                          : "font-normal text-[#717182]",
                      ].join(" ")}
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      {stepNumber}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className={[
                    "text-center font-medium text-xs sm:text-sm leading-tight transition-all",
                    isActive || isDone
                      ? "text-[#0A0A0A]"
                      : "text-[#717182]",
                  ].join(" ")}
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 rounded-full bg-[rgba(127,255,212,0.20)] overflow-hidden">
          <div
            className="h-full bg-[#7FFFD4] rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {
        current === 1 ? (
          <PropertyInfoForm />
        ) : current === 2 ? (
          <MediaUpload />
        ) : current === 3 ? (
          <ReviewPublish />
        ) : null
      }


    </div>
  );
}
