import { useState } from "react";

export default function ConfirmDeleteAgent({ onCancel }) {

    const [reason, setReason] = useState("");


    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/30 z-50">
            <div className="w-full max-w-[448px] bg-[var(--brand-white)] rounded-[14px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)] p-6 flex flex-col">

                <div className="flex w-12 h-12 items-center justify-center rounded-[28px] border-[8px] border-[#FFEEED] bg-[#FFD4D0]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6 stroke-[#F88379]"
                    >
                        <path
                            d="M11.9984 8.997V12.747M2.69536 16.123C1.82936 17.623 2.91236 19.497 4.64336 19.497H19.3534C21.0834 19.497 22.1664 17.623 21.3014 16.123L13.9474 3.375C13.0814 1.875 10.9154 1.875 10.0494 3.375L2.69536 16.123ZM11.9984 15.747H12.0054V15.755H11.9984V15.747Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {/* Description */}
                <div className="flex flex-col mb-11 mt-4">
                    {/* Heading: "Are You Sure?" */}
                    <span className="text-[var(--brand-dark)] font-[Poppins] text-[18px] font-medium leading-[150%]">
                        Are You Sure?
                    </span>

                    {/* Paragraph: "Are you sure you want to delete this list?" */}
                    <p className="text-[var(--brand-grey)] font-[Poppins] text-[16px] font-normal leading-[150%] mt-2">
                        Are you sure you want to delete this list?
                    </p>
                </div>



                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">


                    <button
                        onClick={() => onCancel()}
                        className="flex-1 py-[12px] rounded-[10px] border border-[#D1D5DC] text-[#364153] text-[14px] font-medium font-poppins hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        // onClick={handleConfirm}
                        className="flex-1 py-[12px] rounded-[10px] bg-[var(--form-primary)] text-[var(--brand-white)] text-[14px] font-medium font-poppins hover:opacity-90 transition"
                    >
                        Confirm
                    </button>
                </div>

            </div>
        </div>
    );
}