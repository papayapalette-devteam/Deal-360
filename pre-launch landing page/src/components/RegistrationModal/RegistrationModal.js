import { useState, useEffect } from "react";
import TabSwitcher from "../Ui/TabSwitcher";
import ProfessionalForm from "../RegistrationFroms/ProfissinalForm";
import UserForm from "../RegistrationFroms/UserForm";
import PartnerForm from "../RegistrationFroms/PartnerForm";

const tabs = [
  { id: "professional", label: "Professional" },
  { id: "user", label: "User" },
  { id: "partner", label: "Partner" },
];

export default function RegistrationModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("partner");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] w-full max-w-[1000px] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Scrollable content area */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          <div className="flex flex-col gap-10">
            {/* Header section */}
            <div className="flex flex-col gap-4">
              {/* Logo row + close button */}
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/24656b7017f0a68c80f8419e7809cba3d6bfe089?width=80"
                      alt="Deal 360 Logo"
                      className="w-9 h-11 object-contain"
                    />
                    <span className="font-manrope font-semibold text-[var(--color-primary)] text-2xl text-brand-salmon leading-[110%]">
                      Deal 360
                    </span>
                  </div>
                  <span className="font-poppins text-[var(--color-primary)] font-semibold text-xl text-brand-salmon leading-[120%]">
                    • Early Registration
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="text-[#1D1B20] hover:opacity-60 transition-opacity flex-shrink-0 p-1"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                      fill="#1D1B20"
                    />
                  </svg>
                </button>
              </div>

              {/* Tab switcher */}
              <TabSwitcher
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>

            {/* Form content */}
            <div>
              {activeTab === "professional" && <ProfessionalForm />}
              {activeTab === "user" && <UserForm />}
              {activeTab === "partner" && <PartnerForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
