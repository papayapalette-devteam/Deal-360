import { useState } from "react";


function InfoField({ label, value }) {
    return (
        <div className="flex flex-col gap-1.5">
            <span
                className="text-base font-medium leading-[120%]"
                style={{ color: "var(--brand-dark)" }}
            >
                {label}
            </span>
            <span
                className="text-base font-normal leading-[120%]"
                style={{ color: "var(--gray-text)" }}
            >
                {value}
            </span>
        </div>
    );
}

export default function ViewAdvertisement({ onClose }) {



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
            <div
                className="w-full max-w-[672px] flex flex-col rounded-[14px] overflow-hidden"
                style={{
                    background: "var(--brand-white)",
                    boxShadow:
                        "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)",
                }}
            >
                {/* Header */}
             <div className="flex items-center justify-between px-6 ">
  
  {/* LEFT - IMAGE */}
  <img
    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a6/f9/7a/caption.jpg?w=800&h=500&s=1"
    alt=""
    className="h-20 w-20 rounded-md object-cover mt-2"
  />

  {/* RIGHT - CLOSE BUTTON */}
  <button
    onClick={onClose}
    className="flex items-start justify-start w-8 h-8 rounded hover:bg-gray-100 transition-colors"
    aria-label="Close"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M30 10L10 30"
        stroke="#343A40"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L30 30"
        stroke="#343A40"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

</div>

                {/* Body */}
                <div className="flex flex-col gap-6 px-6 p-6">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <InfoField label="Title" value="Homepage Hero Section" />
                        <InfoField label="Type" value="Landing Page" />
                        <InfoField label="Views" value="12,543" />
                        <InfoField label="Last Updated" value="20-01-2026" />
                    </div>


                </div>
            </div>


        </div>
    );
}