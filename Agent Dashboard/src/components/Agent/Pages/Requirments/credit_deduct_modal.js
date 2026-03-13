import { useNavigate } from "react-router-dom";

export default function UnlockBuyerContactModal({
  isOpen,
  onClose,
  onConfirm,
  creditsToDeduct = 1,
  balanceAfter = 151,
}) {

  const navigate = useNavigate()


  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-[10px] border border-black/10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)] w-full max-w-[576px] p-6">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 4L12 12" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-6 pr-6">
          <h2 className="font-manrope font-bold text-[20px] leading-[18px] text-[#0A0A0A]">
            Unlock Buyer Contact
          </h2>
          <p className="font-manrope font-normal text-[14px] leading-[20px] text-[#717182]">
            This will deduct 5 credits from your account to reveal the buyer's
            contact information.
          </p>
        </div>

        {/* Info Box */}
        <div
          className="rounded-[10px] p-4 mb-6 flex flex-col gap-2"
          style={{
            border: "1px solid var(--form-secondary)",
            background: "rgba(127, 255, 212, 0.20)",
          }}
        >
          {/* Credits to deduct row */}
          <div className="flex items-center justify-between h-6">
            <span className="font-manrope font-normal text-[14px] leading-[20px] text-[#0A0A0A]">
              Credits to deduct:
            </span>
            <span
              className="font-manrope font-bold text-[16px] leading-[24px]"
              style={{ color: "var(--Colors-for-white-theme-Secondary)" }}
            >
              {creditsToDeduct} credits
            </span>
          </div>

          {/* Balance after row */}
          <div className="flex items-center justify-between h-6">
            <span className="font-manrope font-normal text-[14px] leading-[20px] text-[#0A0A0A]">
              Your balance after:
            </span>
            <span className="font-arimo font-bold text-[16px] leading-[24px] text-[#0A0A0A]">
              {balanceAfter} credits
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="font-manrope font-normal text-[14px] leading-[20px] text-[#0A0A0A] px-4 py-2 rounded-lg border border-black/10 bg-white hover:bg-gray-50 transition-colors focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              navigate("contact-buyer");
            }}
            className="font-manrope font-normal text-[14px] leading-[20px] text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity focus:outline-none"
            style={{ background: "var(--form-secondary)" }}
          >
            Confirm &amp; Unlock
          </button>
        </div>
      </div>
    </div>
  );
}
