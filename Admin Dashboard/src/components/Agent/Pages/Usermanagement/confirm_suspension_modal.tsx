import { useState } from "react";

export default function ConfirmSuspensionModal({
  userName = "John Martinez",
  userId = "U-8392",
  onCancel,
}) {
  const [reason, setReason] = useState("");





  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/30 z-50">
      <div className="w-full max-w-[448px] bg-[var(--brand-white)] rounded-[14px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)] p-6 flex flex-col">
        
        {/* Title */}
        <h2 className="font-poppins text-[18px] font-medium leading-[1.2] text-[var(--secondary-text)] mb-3">
          Confirm Suspension
        </h2>

        {/* Description */}
        <div className="flex flex-col mb-11">
          <p className="font-poppins text-[16px] font-normal text-[#4A5565]">
            Are you sure you want to suspend user
          </p>
          <p className="font-poppins text-[16px] font-medium text-[var(--secondary-text)]">
            {userName}
          </p>
          <p className="font-poppins text-[16px] font-normal text-[#4A5565]">
            ({userId})?
          </p>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full h-[90px] px-3 py-2 rounded-[10px] border border-[#D1D5DC] bg-[var(--form-input-bg)] text-[14px] font-poppins text-[var(--form-text-black)] placeholder:text-[rgba(10,10,10,0.5)] focus:outline-none focus:border-[var(--form-primary)] resize-none mb-4"
          placeholder="Reason for suspension (required)..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            // onClick={handleConfirm}
            className="flex-1 py-[12px] rounded-[10px] bg-[var(--form-primary)] text-[var(--brand-white)] text-[14px] font-medium font-poppins hover:opacity-90 transition"
          >
            Confirm
          </button>

          <button
            onClick={() => onCancel()}
            className="flex-1 py-[12px] rounded-[10px] border border-[#D1D5DC] text-[#364153] text-[14px] font-medium font-poppins hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}