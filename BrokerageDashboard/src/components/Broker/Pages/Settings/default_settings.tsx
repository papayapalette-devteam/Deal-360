import React, { useState } from 'react';
import ToggleSwitch from './toggle_switch';

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <g clipPath="url(#clip0_info)">
        <path
          d="M7.9987 10.6693V8.0026M7.9987 5.33594H8.00536M14.6654 8.0026C14.6654 11.6845 11.6806 14.6693 7.9987 14.6693C4.3168 14.6693 1.33203 11.6845 1.33203 8.0026C1.33203 4.32071 4.3168 1.33594 7.9987 1.33594C11.6806 1.33594 14.6654 4.32071 14.6654 8.0026Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_info">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SettingsTable({ rows, showState = false }) {
  return (
    <div className="rounded-xl border border-[#E6E7E6] bg-white overflow-hidden w-full">
      {/* Header */}
      <div className="flex bg-[rgba(248,131,121,0.10)]">
        <div className="flex-1 px-4 sm:px-6 py-3 text-sm font-medium text-black font-poppins min-w-0">
          Setting
        </div>
        <div className="w-24 sm:w-36 px-4 sm:px-6 py-3 text-sm font-medium text-black font-poppins text-center flex-shrink-0">
          Toggle
        </div>
        {showState && (
          <div className="w-28 sm:w-44 px-4 sm:px-6 py-3 text-sm font-medium text-black font-poppins text-center flex-shrink-0">
            State
          </div>
        )}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex items-center ${i < rows.length - 1 ? 'border-b border-[#E6E7E6]' : ''}`}
        >
          <div className="flex-1 px-4 sm:px-6 py-4 flex items-center gap-2 min-w-0">
            <span className="text-base sm:text-lg font-medium text-black font-poppins leading-tight">
              {row.label}
            </span>
            {row.infoIcon && <InfoCircleIcon />}
          </div>
          <div className="w-24 sm:w-36 px-4 sm:px-6 py-4 flex justify-center flex-shrink-0">
            <ToggleSwitch checked={row.checked} onChange={row.onToggle} />
          </div>
          {showState && (
            <div className="w-28 sm:w-44 px-4 sm:px-6 py-4 flex justify-center flex-shrink-0">
              <span className="text-sm text-[#45556C] font-poppins text-center">
                {row.stateText}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DefaultSettingsSection() {
  const [toggles, setToggles] = useState({
    inPlatformMessages: false,
    whatsAppContact: false,
    inAppNotifications: false,
    emailNotifications: false,
    creditUsageConfirmation: false,
    autoAddConfirmedViewings: false,
    showProfilePublicly: false,
    showBrokerageAffiliation: false,
  });

  const handleToggle = (key) => (value) => {
    setToggles((prev) => ({ ...prev, [key]: value }));
  };

  const getState = (key) => {
    if (key === 'inPlatformMessages') {
      return toggles[key] ? 'Enabled' : 'Disabled';
    }
    return toggles[key] ? 'Default ON' : 'Default OFF';
  };

  const contactRows = [
    {
      label: 'In-platform messages',
      checked: toggles.inPlatformMessages,
      onToggle: handleToggle('inPlatformMessages'),
      stateText: getState('inPlatformMessages'),
    },
    {
      label: 'WhatsApp contact',
      infoIcon: true,
      checked: toggles.whatsAppContact,
      onToggle: handleToggle('whatsAppContact'),
      stateText: getState('whatsAppContact'),
    },
  ];

  const notificationRows = [
    {
      label: 'In-app notifications',
      checked: toggles.inAppNotifications,
      onToggle: handleToggle('inAppNotifications'),
    },
    {
      label: 'Email notifications',
      checked: toggles.emailNotifications,
      onToggle: handleToggle('emailNotifications'),
    },
  ];

  const billingRows = [
    {
      label: 'Credit usage confirmation',
      checked: toggles.creditUsageConfirmation,
      onToggle: handleToggle('creditUsageConfirmation'),
    },
  ];

  const calendarRows = [
    {
      label: 'Auto-add confirmed viewings',
      checked: toggles.autoAddConfirmedViewings,
      onToggle: handleToggle('autoAddConfirmedViewings'),
    },
  ];

  const privacyRows = [
    {
      label: 'Show profile publicly',
      checked: toggles.showProfilePublicly,
      onToggle: handleToggle('showProfilePublicly'),
    },
    {
      label: 'Show brokerage affiliation',
      checked: toggles.showBrokerageAffiliation,
      onToggle: handleToggle('showBrokerageAffiliation'),
    },
  ];

  const handleDiscard = () => {
    setToggles({
      inPlatformMessages: false,
      whatsAppContact: false,
      inAppNotifications: false,
      emailNotifications: false,
      creditUsageConfirmation: false,
      autoAddConfirmedViewings: false,
      showProfilePublicly: false,
      showBrokerageAffiliation: false,
    });
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1
          className="text-2xl sm:text-3xl font-bold text-[var(--base-black)]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Agent Default Settings
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-grey)] font-poppins">
          Control what agents can see, do, and spend by default
        </p>
      </div>

      {/* Contact & Communication */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--base-black)] font-poppins">
          Contact &amp; Communication
        </h2>
        <SettingsTable rows={contactRows} showState={true} />
      </div>

      {/* Notifications */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--base-black)] font-poppins">
          Notifications
        </h2>
        <SettingsTable rows={notificationRows} />
      </div>

      {/* Billing and Usage */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--base-black)] font-poppins">
          Billing and Usage
        </h2>
        <SettingsTable rows={billingRows} />
      </div>

      {/* Calendar */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--base-black)] font-poppins">
          Calendar
        </h2>
        <SettingsTable rows={calendarRows} />
      </div>

      {/* Privacy & Visibility */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--base-black)] font-poppins">
          Privacy &amp; Visibility
        </h2>
        <SettingsTable rows={privacyRows} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-4 pt-2">
        <button
          type="button"
          onClick={handleDiscard}
          className="px-5 py-2.5 rounded-md border border-[var(--text-grey)] text-[var(--text-grey)] text-sm font-medium font-poppins hover:bg-gray-50 transition-colors"
        >
          Discard Changes
        </button>
        <button
          type="button"
          className="px-8 py-2.5 rounded-md bg-[#F88379] text-[#F8F9FA] text-sm font-semibold font-poppins hover:bg-[#f5705f] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
