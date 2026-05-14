import { useState } from "react";
import ConfirmSuspensionModal from "./confirm_suspension_modal";

function InfoField({ label, value }) {
    return (
        <div className="flex flex-col gap-1.5">
            <span
                className="text-sm font-normal leading-[120%]"
                style={{ color: "#4A5565" }}
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

export default function UserDetailsModal({ onClose,setsuspend_user }) {



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
                        User Details
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
                <div className="flex flex-col gap-6 px-6 pt-6">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        <InfoField label="User ID" value="U-8392" />
                        <InfoField label="Name" value="John Martinez" />
                        <InfoField label="Email" value="john.m@email.com" />
                        <InfoField label="Role" value="seller" />
                        <InfoField label="Status" value="active" />
                        <InfoField label="Subscription Tier" value="Premium" />
                        <InfoField label="Joined Date" value="01-02-2026" />
                        <InfoField label="Active Listings" value="12" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 py-[11px] px-4 text-[#364153] rounded-[10px] hover:bg-gray-50"
                            style={{ border: "1.111px solid #D1D5DC" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_58104_94145)">
                                    <path d="M1.37758 8.22319C1.32206 8.07361 1.32206 7.90907 1.37758 7.75949C1.91836 6.44825 2.83631 5.32711 4.01504 4.53819C5.19378 3.74928 6.58022 3.32812 7.9986 3.32812C9.41698 3.32812 10.8034 3.74928 11.9822 4.53819C13.1609 5.32711 14.0788 6.44825 14.6196 7.75949C14.6751 7.90907 14.6751 8.07361 14.6196 8.22319C14.0788 9.53443 13.1609 10.6556 11.9822 11.4445C10.8034 12.2334 9.41698 12.6546 7.9986 12.6546C6.58022 12.6546 5.19378 12.2334 4.01504 11.4445C2.83631 10.6556 1.91836 9.53443 1.37758 8.22319Z" stroke="#364153" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.99089 9.9974C9.09474 9.9974 9.98958 9.10255 9.98958 7.9987C9.98958 6.89485 9.09474 6 7.99089 6C6.88704 6 5.99219 6.89485 5.99219 7.9987C5.99219 9.10255 6.88704 9.9974 7.99089 9.9974Z" stroke="#364153" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_58104_94145">
                                        <rect width="15.9896" height="15.9896" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            View Activity Logs
                        </button>

                        <button
                            className="flex-1 flex items-center justify-center gap-2 py-[11px] px-4 text-[#364153] rounded-[10px] hover:bg-gray-50"
                            style={{ border: "1.111px solid #D1D5DC" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.3238 8.65698C13.3238 11.9881 10.992 13.6537 8.22044 14.6198C8.07531 14.6689 7.91767 14.6666 7.77407 14.6131C4.99588 13.6537 2.66406 11.9881 2.66406 8.65698V3.99336C2.66406 3.81666 2.73425 3.6472 2.8592 3.52226C2.98414 3.39731 3.1536 3.32712 3.3303 3.32712C4.66276 3.32712 6.32834 2.52764 7.48759 1.51497C7.62873 1.39438 7.80828 1.32812 7.99392 1.32812C8.17957 1.32812 8.35912 1.39438 8.50026 1.51497C9.66617 2.53431 11.3251 3.32712 12.6576 3.32712C12.8342 3.32712 13.0037 3.39731 13.1287 3.52226C13.2536 3.6472 13.3238 3.81666 13.3238 3.99336V8.65698Z" stroke="#364153" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99219 5.32812V7.99306" stroke="#364153" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99219 10.6562H7.99885" stroke="#364153" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            View Compliance
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div
                        className="flex flex-col gap-3 pt-[17px] pb-6"
                        style={{ borderTop: "1.111px solid #E5E7EB" }}
                    >
                        <span
                            className="text-sm"
                            style={{
                                color: "var(--secondary-text)",
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Quick Actions
                        </span>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setsuspend_user(true);
                                    onClose()
                                }}
                                className="flex-1 flex gap-2 items-center justify-center py-[11px] px-4 rounded-[10px] hover:opacity-90"
                                style={{ background: "var(--form-primary)", color: "white" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_58104_94162)">
                                        <path d="M13.3238 8.6648C13.3238 11.996 10.992 13.6615 8.22044 14.6276C8.07531 14.6768 7.91767 14.6744 7.77407 14.6209C4.99588 13.6615 2.66406 11.996 2.66406 8.6648V4.00117C2.66406 3.82447 2.73425 3.65501 2.8592 3.53007C2.98414 3.40513 3.1536 3.33494 3.3303 3.33494C4.66276 3.33494 6.32834 2.53546 7.48759 1.52278C7.62873 1.40219 7.80828 1.33594 7.99392 1.33594C8.17957 1.33594 8.35912 1.40219 8.50026 1.52278C9.66617 2.54212 11.3251 3.33494 12.6576 3.33494C12.8342 3.33494 13.0037 3.40513 13.1287 3.53007C13.2536 3.65501 13.3238 3.82447 13.3238 4.00117V8.6648Z" stroke="white" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99219 5.32812V7.99306" stroke="white" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.99219 10.6641H7.99885" stroke="white" stroke-width="1.33247" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_58104_94162">
                                            <rect width="15.9896" height="15.9896" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Suspend User
                            </button>

                            <button
                                className="flex-1 flex items-center justify-center py-[11px] text-[#364153] px-4 rounded-[10px] hover:bg-gray-50"
                                style={{ border: "1.111px solid #D1D5DC" }}
                            >
                                Reset Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}