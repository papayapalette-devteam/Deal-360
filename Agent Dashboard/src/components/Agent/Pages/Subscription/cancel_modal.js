import ModalOverlay from "./modal_overlay";

const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M21.7585 15.92L15.3585 4.4C14.4985 2.85 13.3085 2 11.9985 2C10.6885 2 9.49851 2.85 8.63851 4.4L2.23851 15.92C1.42851 17.39 1.33851 18.8 1.98851 19.91C2.63851 21.02 3.91851 21.63 5.59851 21.63H18.3985C20.0785 21.63 21.3585 21.02 22.0085 19.91C22.6585 18.8 22.5685 17.38 21.7585 15.92Z" fill="#FF7F00"/>
    <path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75Z" fill="white"/>
    <path d="M12 18.0025C11.94 18.0025 11.87 17.9925 11.8 17.9825C11.74 17.9725 11.68 17.9525 11.62 17.9225C11.56 17.9025 11.5 17.8725 11.44 17.8325C11.39 17.7925 11.34 17.7525 11.29 17.7125C11.11 17.5225 11 17.2625 11 17.0025C11 16.7425 11.11 16.4825 11.29 16.2925C11.34 16.2525 11.39 16.2125 11.44 16.1725C11.5 16.1325 11.56 16.1025 11.62 16.0825C11.68 16.0525 11.74 16.0325 11.8 16.0225C11.93 15.9925 12.07 15.9925 12.19 16.0225C12.26 16.0325 12.32 16.0525 12.38 16.0825C12.44 16.1025 12.5 16.1325 12.56 16.1725C12.61 16.2125 12.66 16.2525 12.71 16.2925C12.89 16.4825 13 16.7425 13 17.0025C13 17.2625 12.89 17.5225 12.71 17.7125C12.66 17.7525 12.61 17.7925 12.56 17.8325C12.5 17.8725 12.44 17.9025 12.38 17.9225C12.32 17.9525 12.26 17.9725 12.19 17.9825C12.13 17.9925 12.06 18.0025 12 18.0025Z" fill="white"/>
  </svg>
);

export default function CancelModal({ onClose, onDowngrade, onFreeze, onCancelAnyway }) {
  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="flex flex-col items-center gap-4 rounded-lg overflow-hidden p-4 w-full"
        style={{ background: "#F3F3F3" }}
      >
        {/* Title */}
        <div className="w-full">
          <h2
            className="font-poppins font-medium text-base text-black text-center"
            style={{ lineHeight: "110%" }}
          >
            Cancel subscription anytime
          </h2>
        </div>

        {/* Warning box */}
        <div
          className="flex items-start gap-2.5 w-full rounded-lg p-2 overflow-hidden"
          style={{ background: "rgba(255, 127, 0, 0.20)" }}
        >
          <WarningIcon />
          <p
            className="font-poppins font-normal text-xs flex-1"
            style={{ color: "#575757", lineHeight: "110%" }}
          >
            Cancelling may reduce your profile visibility and limit access to leads and
            messages. Your profile will remain, but some features will be disabled.
          </p>
        </div>

        {/* Downgrade instead button */}
        <button
          onClick={onDowngrade}
          className="w-full flex items-center justify-center py-4 px-8 rounded-lg font-manrope font-medium text-base transition-opacity hover:opacity-90"
          style={{
            border: "1px solid #F88379",
            color: "var(--form-primary)",
            background: "transparent",
          }}
        >
          Downgrade instead
        </button>

        {/* Freeze For 1 month button */}
        <button
          onClick={onFreeze}
          className="w-full flex items-center justify-center py-4 px-8 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-base text-black transition-opacity hover:opacity-90"
        >
          Freeze For 1 month
        </button>

        {/* Cancel anyway link */}
        <button
          onClick={onCancelAnyway}
          className="font-manrope font-medium text-base transition-opacity hover:opacity-70"
          style={{ color: "#E5102E" }}
        >
          Cancel anyway
        </button>
      </div>
    </ModalOverlay>
  );
}
