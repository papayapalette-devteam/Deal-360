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

export default function ViewbrokerDetails({ onClose }) {



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
                <div
                    className="flex items-center justify-end px-6 h-[77px] flex-shrink-0"

                >


                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100 transition-colors"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M30 10L10 30" stroke="#343A40" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 10L30 30" stroke="#343A40" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-6 px-6 p-6">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <InfoField label="Brokerage Name" value="Barnes International Realty-Dubai" />
                        <InfoField label="ORN" value="56188" />
                        <InfoField label="Agents List" value="24" />
                        <InfoField label="Listings" value="156" />
                    </div>


                </div>
            </div>


        </div>
    );
}