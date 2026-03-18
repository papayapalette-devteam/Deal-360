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

export default function ViewagentDetails({ onClose }) {



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
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-6 px-6 p-6">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <InfoField label="Name" value="John Martinez" />
                        <InfoField label="Email" value="john.m@email.com" />
                        <InfoField label="Brokerage" value="Barnes International Realty-Dubai" />
                        <InfoField label="ORN" value="Barnes International Realty-Dubai" />
                        <InfoField label="KYC Method" value="UAE Pass" />
                        <InfoField label="UAE Pass" value="24" />
                    </div>


                </div>
            </div>


        </div>
    );
}