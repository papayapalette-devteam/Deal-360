import { useState } from "react";

// Toggle Switch Component
function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className="relative inline-flex items-center flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none"
      style={{
        width: "44px",
        height: "24px",
        backgroundColor: enabled ? "var(--form-secondary)" : "#D1D5DC",
      }}
    >
      <span
        className="inline-block rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{
          width: "16px",
          height: "16px",
          transform: enabled ? "translateX(24px)" : "translateX(4px)",
        }}
      />
    </button>
  );
}

// Toggle Card (gray background card with title, description, and toggle)
function ToggleCard({ title, description, enabled, onChange }) {
  return (
    <div
      className="flex items-center justify-between rounded-[10px] p-4 gap-4"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span
          className="text-base font-normal leading-[120%]"
          style={{ color: "var(--secondary-text)" }}
        >
          {title}
        </span>
        <span
          className="text-sm font-normal leading-[120%]"
          style={{ color: "var(--gray-text-secondary)" }}
        >
          {description}
        </span>
      </div>
      <div className="flex-shrink-0">
        <Toggle enabled={enabled} onChange={onChange} />
      </div>
    </div>
  );
}

// Input Field Component
function InputField({ label, value, onChange, helperText, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-normal leading-[120%]"
        style={{ color: "#364153" }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        className="w-full h-12 px-3 py-2 text-base font-normal rounded-[10px] outline-none focus:ring-2 transition-shadow"
        style={{
          border: "1.111px solid #D1D5DC",
          color: "var(--base-secondary-text)",
          backgroundColor: "var(--form-input-bg)",
          fontFamily: "Poppins, sans-serif",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--form-secondary)";
          e.target.style.boxShadow = "0 0 0 2px rgba(127,255,212,0.2)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#D1D5DC";
          e.target.style.boxShadow = "none";
        }}
      />
      {helperText && (
        <p className="text-xs" style={{ color: "#6A7282" }}>
          {helperText}
        </p>
      )}
    </div>
  );
}

// Settings Section Card
function SettingsSection({ title, children }) {
  return (
    <div
      className="w-full rounded-[14px] p-6 flex flex-col gap-4"
      style={{
        border: "1.111px solid #E5E7EB",
        backgroundColor: "var(--brand-white)",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)",
      }}
    >
      <h2
        className="text-lg font-medium leading-[120%] pb-1"
        style={{
          color: "var(--secondary-text)",
          borderBottom: "1px solid #F3F4F6",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

// Main Settings Page
export default function PlateformSettings() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    allowNewRegistrations: true,
    emailVerificationRequired: true,
    autoApproveListings: false,
    maxImagesPerListing: 30,
    listingExpiryDays: 90,
    requireVerificationForListings: true,
    aiModerationEnabled: true,
    autoFlagSuspiciousListings: true,
    pricingAnomalyThreshold: 30,
    defaultCreditPackage: 100,
    creditExpiryDays: 365,
    lowBalanceThreshold: 100,
    criticalBalanceThreshold: 50,
    sessionTimeoutMinutes: 60,
    maxLoginAttempts: 5,
    passwordMinLength: 8,
    requireTwoFactorAuth: false,
  });

  const update = (key, value) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  return (
    <div
      className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "hsl(var(--background))", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-6">

        {/* General Settings */}
        <SettingsSection title="General Settings">
          <InputField
            label="Platform Name"
            value={settings.platformName ?? "Deal360"}
            onChange={(v) => update("platformName", v)}
          />
          <ToggleCard
            title="Maintenance Mode"
            description="Disable public access to the platform"
            enabled={settings.maintenanceMode}
            onChange={(v) => update("maintenanceMode", v)}
          />
          <ToggleCard
            title="Allow New Registrations"
            description="Enable new user sign-ups"
            enabled={settings.allowNewRegistrations}
            onChange={(v) => update("allowNewRegistrations", v)}
          />
          <ToggleCard
            title="Email Verification Required"
            description="Users must verify email before access"
            enabled={settings.emailVerificationRequired}
            onChange={(v) => update("emailVerificationRequired", v)}
          />
        </SettingsSection>

        {/* Listing Settings */}
        <SettingsSection title="Listing Settings">
          <ToggleCard
            title="Auto-Approve Listings"
            description="Skip manual moderation for verified users"
            enabled={settings.autoApproveListings}
            onChange={(v) => update("autoApproveListings", v)}
          />
          <InputField
            label="Max Images Per Listing"
            value={settings.maxImagesPerListing}
            onChange={(v) => update("maxImagesPerListing", v)}
            type="number"
          />
          <InputField
            label="Listing Expiry (Days)"
            value={settings.listingExpiryDays}
            onChange={(v) => update("listingExpiryDays", v)}
            type="number"
          />
          <ToggleCard
            title="Require Verification for Listings"
            description="Only verified users can create listings"
            enabled={settings.requireVerificationForListings}
            onChange={(v) => update("requireVerificationForListings", v)}
          />
        </SettingsSection>

        {/* AI Moderation Settings */}
        <SettingsSection title="AI Moderation Settings">
          <ToggleCard
            title="AI Moderation Enabled"
            description="Use AI to detect suspicious content"
            enabled={settings.aiModerationEnabled}
            onChange={(v) => update("aiModerationEnabled", v)}
          />
          <ToggleCard
            title="Auto-Flag Suspicious Listings"
            description="Automatically flag anomalies for review"
            enabled={settings.autoFlagSuspiciousListings}
            onChange={(v) => update("autoFlagSuspiciousListings", v)}
          />
          <div className="md:col-span-1">
            <InputField
              label="Pricing Anomaly Threshold (%)"
              value={settings.pricingAnomalyThreshold}
              onChange={(v) => update("pricingAnomalyThreshold", v)}
              type="number"
              helperText="Flag if price differs by more than this % from market average"
            />
          </div>
        </SettingsSection>

        {/* Credit System Settings */}
        <SettingsSection title="Credit System Settings">
          <InputField
            label="Default Credit Package"
            value={settings.defaultCreditPackage}
            onChange={(v) => update("defaultCreditPackage", v)}
            type="number"
          />
          <InputField
            label="Credit Expiry (Days)"
            value={settings.creditExpiryDays}
            onChange={(v) => update("creditExpiryDays", v)}
            type="number"
          />
          <InputField
            label="Low Balance Threshold"
            value={settings.lowBalanceThreshold}
            onChange={(v) => update("lowBalanceThreshold", v)}
            type="number"
          />
          <InputField
            label="Critical Balance Threshold"
            value={settings.criticalBalanceThreshold}
            onChange={(v) => update("criticalBalanceThreshold", v)}
            type="number"
          />
        </SettingsSection>

        {/* Security Settings */}
        <SettingsSection title="Security Settings">
          <InputField
            label="Session Timeout (Minutes)"
            value={settings.sessionTimeoutMinutes}
            onChange={(v) => update("sessionTimeoutMinutes", v)}
            type="number"
          />
          <InputField
            label="Max Login Attempts"
            value={settings.maxLoginAttempts}
            onChange={(v) => update("maxLoginAttempts", v)}
            type="number"
          />
          <InputField
            label="Password Min Length"
            value={settings.passwordMinLength}
            onChange={(v) => update("passwordMinLength", v)}
            type="number"
          />
          <ToggleCard
            title="Require Two-Factor Authentication"
            description="Mandatory 2FA for all admin accounts"
            enabled={settings.requireTwoFactorAuth}
            onChange={(v) => update("requireTwoFactorAuth", v)}
          />
        </SettingsSection>

        {/* Save Button */}
        <div className="flex justify-end pb-8">
          <button
            type="button"
            className="px-8 py-3 rounded-[10px] text-sm font-medium transition-opacity hover:opacity-90 active:opacity-75"
            style={{
              backgroundColor: "var(--form-secondary)",
              color: "var(--base-secondary-text)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
