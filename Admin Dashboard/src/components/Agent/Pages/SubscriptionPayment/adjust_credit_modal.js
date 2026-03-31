import { useState } from "react";

const REASON_OPTIONS = [
  "Promotional credit",
  "Referral bonus",
  "Correction / Error",
  "Manual adjustment",
  "Refund",
  "Other",
];

export default function AdjustCreditsModal({ onClose, companyName = "Empire Realty Group", currentBalance = 250 }) {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const isValid = amount !== "" && reason !== "";

  const handleIncrement = () => {
    const current = parseFloat(amount) || 0;
    setAmount(String(current + 1));
  };

  const handleDecrement = () => {
    const current = parseFloat(amount) || 0;
    setAmount(String(current - 1));
  };

  const handleConfirm = () => {
    if (!isValid) return;
    // Handle confirm logic here
    onClose && onClose();
  };

  return (
    /* Overlay */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
      {/* Modal Card */}
      <div
        className="relative w-full max-w-[448px] flex flex-col gap-4 rounded-[14px] bg-white p-6"
        style={{ boxShadow: "0 20px 25px -5px rgba(0,0,0,0.10), 0 8px 10px -6px rgba(0,0,0,0.10)" }}
      >
        {/* Title */}
        <h2
          className="text-[18px] font-medium leading-tight"
          style={{ fontFamily: "Poppins, sans-serif", color: "var(--secondary-text)" }}
        >
          Adjust Credits
        </h2>

        {/* Subtitle */}
        <div className="flex items-center gap-2 -mt-1">
          <span
            className="text-[16px] font-normal leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#4A5565" }}
          >
            {companyName} - Current Balance:
          </span>
          <span
            className="text-[16px] font-bold leading-6"
            style={{ fontFamily: "Arimo, sans-serif", color: "var(--secondary-text)" }}
          >
            {currentBalance}
          </span>
        </div>

        {/* Adjustment Amount */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-[14px] font-medium leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#364153" }}
          >
            Adjustment Amount
          </label>
          <div className="flex items-center gap-2 w-full">
            {/* Number Input */}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount (+ to add, - to subtract)"
              className="flex-1 min-w-0 h-[42px] px-3 py-2 rounded-[10px] text-[14px] outline-none focus:ring-2 placeholder:text-[rgba(10,10,10,0.5)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                border: "1.111px solid #D1D5DC",
                color: "#0A0A0A",
              }}
            />
            {/* Plus Button */}
            <button
              type="button"
              onClick={handleIncrement}
              className="flex items-center justify-center w-[46px] h-[42px] rounded-[10px] flex-shrink-0 hover:bg-gray-50 transition-colors"
              style={{ border: "1.111px solid #D1D5DC" }}
              aria-label="Increment"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16406 10H15.8307" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16406V15.8307" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Minus Button */}
            <button
              type="button"
              onClick={handleDecrement}
              className="flex items-center justify-center w-[46px] h-[42px] rounded-[10px] flex-shrink-0 hover:bg-gray-50 transition-colors"
              style={{ border: "1.111px solid #D1D5DC" }}
              aria-label="Decrement"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16406 10H15.8307" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Reason & Notes */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="text-[14px] font-medium leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#364153" }}
          >
            Reason (required)
          </label>
          {/* Reason Dropdown */}
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full h-[40px] px-3 rounded-[10px] text-[14px] outline-none focus:ring-2 bg-white appearance-none cursor-pointer"
            style={{
              fontFamily: "Poppins, sans-serif",
              border: "1.111px solid #D1D5DC",
              color: reason ? "#0A0A0A" : "rgba(10,10,10,0.5)",
            }}
          >
            <option value="" disabled hidden style={{ color: "rgba(10,10,10,0.5)" }}>
              Select a reason...
            </option>
            {REASON_OPTIONS.map((opt) => (
              <option key={opt} value={opt} style={{ color: "#0A0A0A" }}>
                {opt}
              </option>
            ))}
          </select>

          {/* Additional Notes Textarea */}
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Additional notes (optional)..."
            rows={4}
            className="w-full px-3 py-2 rounded-[10px] text-[14px] outline-none focus:ring-2 resize-none placeholder:text-[rgba(10,10,10,0.5)]"
            style={{
              fontFamily: "Poppins, sans-serif",
              border: "1.111px solid #D1D5DC",
              color: "#0A0A0A",
              minHeight: "90px",
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full">
          {/* Confirm Button */}
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!isValid}
            className="flex-1 flex items-center justify-center py-3 px-6 rounded-[10px] text-[14px] font-normal transition-opacity"
            style={{
              fontFamily: "Poppins, sans-serif",
              backgroundColor: "var(--form-secondary)",
              color: "var(--form-text-black)",
              opacity: isValid ? 1 : 0.5,
              cursor: isValid ? "pointer" : "not-allowed",
            }}
          >
            Confirm Adjustment
          </button>
          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex-1 flex items-center justify-center py-3 px-6 rounded-[10px] text-[14px] font-normal hover:bg-gray-50 transition-colors"
            style={{
              fontFamily: "Poppins, sans-serif",
              border: "1.111px solid #D1D5DC",
              color: "#364153",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
