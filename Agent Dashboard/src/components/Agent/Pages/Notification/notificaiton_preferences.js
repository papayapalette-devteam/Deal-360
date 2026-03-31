import { useState } from "react";

function ToggleSwitch({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className="relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none"
      style={{
        backgroundColor: enabled ? "var(--form-secondary)" : "#D1D5DC",
      }}
      role="switch"
      aria-checked={enabled}
    >
      <span
        className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-200"
        style={{
          left: enabled ? "calc(100% - 20px)" : "4px",
        }}
      />
    </button>
  );
}

function PreferenceRow({ title, description, enabled, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div className="flex flex-col gap-0.5">
        <span
          className="font-manrope text-base font-normal leading-6"
          style={{ color: "#101828" }}
        >
          {title}
        </span>
        <span
          className="font-manrope text-sm leading-5"
          style={{ color: "#4A5565" }}
        >
          {description}
        </span>
      </div>
      <ToggleSwitch enabled={enabled} onChange={onChange} />
    </div>
  );
}

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({
    push: true,
    email: true,
    sms: false,
  });

  const updatePref = (key) => (value) => {
    setPrefs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className="rounded-[10px]  bg-white dark:bg-card shadow-sm overflow-hidden"
      style={{ border: "1px solid #E5E7EB" }}
    >
      {/* Header */}
      <div
        className="px-6 py-6 border-b"
        style={{ border: "1px solid #E5E7EB" }}
      >
        <h2
          className="font-manrope font-bold text-xl leading-7"
          style={{ color: "#101828" }}
        >
          Notification Preferences
        </h2>
      </div>

      {/* Preferences List */}
      <div className="px-6 py-6 flex flex-col gap-4">
        <PreferenceRow
          title="Push Notifications"
          description="Receive push notifications on your devices"
          enabled={prefs.push}
          onChange={updatePref("push")}
        />
        <PreferenceRow
          title="Email Digest"
          description="Daily summary of your notifications"
          enabled={prefs.email}
          onChange={updatePref("email")}
        />
        <PreferenceRow
          title="SMS Alerts"
          description="Important updates via text message"
          enabled={prefs.sms}
          onChange={updatePref("sms")}
        />
      </div>
    </div>
  );
}
