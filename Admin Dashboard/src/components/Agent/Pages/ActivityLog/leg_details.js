import { useState } from "react";


function InfoField({ label, value }) {
    return (
        <div className="flex flex-col gap-1.5">
            <span
                className="text-sm font-medium leading-[120%]"
                style={{ color: "var(--gray-text-secondary)" }}
            >
                {label}
            </span>
            <span
                className="text-base font-medium leading-[120%]"
                style={{ color: "var(--secondary-text)" }}
            >
                {value}
            </span>
        </div>
    );
}

export default function ViewLogDetails({ onClose }) {



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
                    className="flex items-center justify-between px-6 h-[77px] flex-shrink-0"
                    style={{ borderBottom: "1.111px solid #E5E7EB" }}
                >
                    <h2
                        className="text-lg font-medium leading-[120%]"
                        style={{
                            color: "var(--secondary-text)",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        Log Details
                    </h2>

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
                        <InfoField label="Log ID" value="LOG-9821" />
                        <InfoField label="Timestamp" value="2026-01-18 14:32:15" />
                        <InfoField label="Actor" value="admin@deal360.com (ADMIN-001)" />
                        <InfoField label="Action" value="User Suspended" />
                        <InfoField label="Resource" value="User (U-3291)" />
                        <InfoField label="Severity" value="critical" />
                        <InfoField label="IP Address" value="192.168.1.100" />
                        <InfoField label="User Agent" value="Chrome 120.0" />
                        <InfoField label="Details" value="Lisa Anderson suspended for policy violation" />
                    </div>
       {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button onClick={onClose}
                            className="flex-1 flex items-center justify-center gap-2 py-[11px] px-4 text-[#364153] rounded-[10px] hover:bg-gray-50"
                            style={{ border: "1.111px solid #D1D5DC" }}
                        >
   
                            Close
                        </button>


                    </div>

                </div>
            </div>


        </div>
    );
}