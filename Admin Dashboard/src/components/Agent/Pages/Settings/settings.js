import { useState } from "react";

/* ── Icons ── */
const ProfileIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path d="M13.4557 14.875V13.4583C13.4557 12.7069 13.1572 11.9862 12.6259 11.4549C12.0945 10.9235 11.3738 10.625 10.6224 10.625H6.3724C5.62095 10.625 4.90028 10.9235 4.36893 11.4549C3.83757 11.9862 3.53906 12.7069 3.53906 13.4583V14.875" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.4974 7.79167C10.0622 7.79167 11.3307 6.52314 11.3307 4.95833C11.3307 3.39353 10.0622 2.125 8.4974 2.125C6.93259 2.125 5.66406 3.39353 5.66406 4.95833C5.66406 6.52314 6.93259 7.79167 8.4974 7.79167Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PasswordKeyIcon = () => (
  <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
    <path d="M10.9766 5.625L12.6057 7.35C12.7381 7.48742 12.9162 7.56439 13.1016 7.56439C13.287 7.56439 13.465 7.48742 13.5974 7.35L15.0849 5.775C15.2147 5.6348 15.2874 5.44631 15.2874 5.25C15.2874 5.05369 15.2147 4.8652 15.0849 4.725L13.4557 3" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8781 1.5L8.07812 8.7" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.3099 15.75C7.46151 15.75 9.20573 13.9032 9.20573 11.625C9.20573 9.34683 7.46151 7.5 5.3099 7.5C3.15829 7.5 1.41406 9.34683 1.41406 11.625C1.41406 13.9032 3.15829 15.75 5.3099 15.75Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 9L17 14H7L12 9Z" fill="#1D1B20"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.21383 12C3.79147 12.7966 4.97536 14.2978 6.53429 15.6047C8.15069 16.9598 10.0434 18 11.9976 18C13.9518 18 15.8445 16.9598 17.4609 15.6047C19.0198 14.2978 20.2037 12.7966 20.7814 12C20.2037 11.2033 19.0198 9.70224 17.4609 8.39529C15.8445 7.04015 13.9518 6 11.9976 6C10.0434 6 8.15069 7.04015 6.53429 8.39529C4.97536 9.70224 3.79147 11.2033 3.21383 12ZM5.24937 6.86264C7.0111 5.38568 9.35388 4 11.9976 4C14.6413 4 16.9841 5.38568 18.7458 6.86264C20.5246 8.35393 21.8408 10.0471 22.4489 10.893C22.9273 11.5584 22.9273 12.4416 22.4489 13.107C21.8408 13.9529 20.5246 15.6461 18.7458 17.1374C16.9841 18.6143 14.6413 20 11.9976 20C9.35388 20 7.0111 18.6143 5.24937 17.1374C3.47056 15.6461 2.15441 13.9529 1.54628 13.107C1.06791 12.4416 1.06791 11.5584 1.54628 10.893C2.15441 10.0471 3.47056 8.35393 5.24937 6.86264Z" fill="#68706A"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9976 14C13.1022 14 13.9976 13.1046 13.9976 12C13.9976 10.8954 13.1022 10 11.9976 10C10.893 10 9.9976 10.8954 9.9976 12C9.9976 13.1046 10.893 14 11.9976 14ZM11.9976 16C14.2067 16 15.9976 14.2091 15.9976 12C15.9976 9.79086 14.2067 8 11.9976 8C9.78846 8 7.9976 9.79086 7.9976 12C7.9976 14.2091 9.78846 16 11.9976 16Z" fill="#68706A"/>
  </svg>
);

const EditPencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
    <path d="M15.75 13.4972L14.9999 14.3178C14.6021 14.7528 14.0626 14.9972 13.5001 14.9972C12.9376 14.9972 12.3981 14.7528 12.0003 14.3178C11.6019 13.8836 11.0625 13.6398 10.5001 13.6398C9.93778 13.6398 9.39835 13.8836 8.99998 14.3178M2.25 14.9972H3.50591C3.87279 14.9972 4.05624 14.9972 4.22887 14.9558C4.38192 14.9191 4.52824 14.8584 4.66245 14.7762C4.81382 14.6834 4.94354 14.5537 5.20296 14.2943L14.625 4.87224C15.2463 4.25092 15.2463 3.24356 14.625 2.62224C14.0037 2.00092 12.9963 2.00092 12.375 2.62224L2.95295 12.0443C2.69352 12.3037 2.5638 12.4334 2.47104 12.5848C2.3888 12.719 2.32819 12.8653 2.29145 13.0184C2.25 13.191 2.25 13.3745 2.25 13.7414V14.9972Z" stroke="#F8F9FA" strokeWidth="1.53237" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M19.6758 5.11783C19.8365 5.22082 19.948 5.38093 19.9859 5.56297C20.0237 5.745 19.9848 5.93404 19.8777 6.08851L11.1405 18.6887C11.0807 18.7748 11.0018 18.847 10.9095 18.9003C10.8172 18.9535 10.7137 18.9864 10.6065 18.9966C10.4994 19.0068 10.3912 18.994 10.2898 18.9591C10.1885 18.9243 10.0964 18.8682 10.0202 18.7951L4.19541 13.195C4.0668 13.0623 3.99679 12.8868 4.00011 12.7054C4.00344 12.5241 4.07986 12.3511 4.21326 12.2228C4.34666 12.0946 4.52663 12.0211 4.71526 12.0179C4.90388 12.0147 5.08644 12.082 5.22446 12.2057L10.4212 17.2018L18.6662 5.31104C18.7734 5.15673 18.9401 5.0497 19.1294 5.01347C19.3187 4.97724 19.5153 5.01478 19.6758 5.11783Z" fill="#208436"/>
  </svg>
);

const XCloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.21093 5.24686C5.34617 5.10161 5.52949 5.02003 5.72062 5.02003C5.91176 5.02003 6.09508 5.10161 6.23031 5.24686L11.4907 10.9038L16.7511 5.24686C16.8171 5.17066 16.8967 5.10954 16.9852 5.06715C17.0737 5.02475 17.1692 5.00196 17.266 5.00012C17.3629 4.99828 17.4591 5.01744 17.5489 5.05645C17.6387 5.09546 17.7203 5.15352 17.7887 5.22718C17.8572 5.30083 17.9112 5.38856 17.9475 5.48514C17.9838 5.58172 18.0016 5.68517 17.9999 5.78931C17.9982 5.89345 17.977 5.99616 17.9376 6.0913C17.8981 6.18645 17.8413 6.27208 17.7704 6.34309L12.5101 12L17.7704 17.6569C17.8413 17.7279 17.8981 17.8136 17.9376 17.9087C17.977 18.0038 17.9982 18.1065 17.9999 18.2107C18.0016 18.3148 17.9838 18.4183 17.9475 18.5149C17.9112 18.6114 17.8572 18.6992 17.7887 18.7728C17.7203 18.8465 17.6387 18.9045 17.5489 18.9436C17.4591 18.9826 17.3629 19.0017 17.266 18.9999C17.1692 18.998 17.0737 18.9752 16.9852 18.9329C16.8967 18.8905 16.8171 18.8293 16.7511 18.7531L11.4907 13.0962L6.23031 18.7531C6.09359 18.8901 5.91275 18.9647 5.72589 18.9612C5.53904 18.9576 5.36076 18.8762 5.22861 18.7341C5.09646 18.592 5.02077 18.4003 5.01747 18.1994C5.01417 17.9984 5.08353 17.8039 5.21093 17.6569L10.4713 12L5.21093 6.34309C5.07587 6.19766 5 6.00052 5 5.79498C5 5.58943 5.07587 5.3923 5.21093 5.24686Z" fill="#E5102E"/>
  </svg>
);

/* ── Shared Sub-components ── */

function AccordionHeader({ icon, label, isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full h-[60px] px-4 items-center justify-between rounded-md bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] transition-shadow hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]"
    >
      <div className="flex items-center gap-2.5">
        {icon}
        <span style={{ color: "var(--form-primary)", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "1.2" }}>
          {label}
        </span>
      </div>
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}

function TextInput({ label, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <label style={{ color: "var(--neutral-700)", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "1.5" }}>
        {label}
      </label>
      <div
        className="flex h-12 px-3 py-2 items-center rounded"
        style={{ border: "1px solid var(--neutral-300)", background: "var(--form-input-bg)" }}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="flex-1 min-w-0 bg-transparent outline-none truncate"
          style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5" }}
        />
      </div>
    </div>
  );
}

function PasswordInput({ label, value, onChange, hasError = false }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <label style={{ color: "var(--neutral-700)", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "1.5" }}>
        {label}
      </label>
      <div
        className="flex h-12 px-3 py-2 items-center gap-2 rounded"
        style={{ border: `1px solid ${hasError ? "#E5102E" : "var(--neutral-300)"}`, background: "var(--form-input-bg)" }}
      >
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="flex-1 min-w-0 bg-transparent outline-none"
          style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5" }}
        />
        <button type="button" onClick={() => setVisible(!visible)} className="shrink-0 ml-1">
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}

function ValidationRule({ passed, text }) {
  return (
    <div className="flex items-center gap-2">
      {passed ? <CheckIcon /> : <XCloseIcon />}
      <span style={{ color: passed ? "#1F9854" : "#E5102E", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.5" }}>
        {text}
      </span>
    </div>
  );
}

/* ── Profile Section Content ── */
function ProfileContent({ data, setData }) {
  const upd = (key) => (e) => setData((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-4">
      {/* Left — Profile card */}
      <div
        className="w-full lg:w-[320px] xl:w-[360px] shrink-0 rounded-lg border overflow-hidden shadow-[0_4px_8px_0_rgba(0,0,0,0.12)]"
        style={{ borderColor: "var(--neutral-100)", background: "var(--form-bg)" }}
      >
        {/* Gradient banner */}
        <div
          className="w-full h-[120px] sm:h-[140px] lg:h-[160px]"
          style={{ background: "linear-gradient(180deg, #DBFFF3 0%, #FFF 50%, #FFE8E6 100%)", opacity: 0.8 }}
        />
        {/* Content */}
        <div className="flex flex-col items-center gap-6 px-5 pb-8 -mt-[60px] sm:-mt-[70px]">
          {/* Avatar */}
          <div className="relative">
            <div
              className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[140px] lg:h-[140px] rounded-full  overflow-hidden shadow-[0_4px_15px_0_rgba(0,0,0,0.10)]"
              
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/72aa258ea8333737baa26ebada0d8a3656d06cf7?width=320"
                alt="Profile avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="absolute bottom-0.5 right-0.5 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border-2"
              style={{ background: "var(--form-primary)", borderColor: "var(--form-bg)" }}
            >
              <EditPencilIcon />
            </button>
          </div>

          {/* Name & email */}
          <div className="flex flex-col items-center text-center gap-0.5 w-full">
            <span style={{ color: "var(--form-primary)", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(18px,3vw,24px)", lineHeight: "1.5" }}>
              {data.firstName} {data.lastName}
            </span>
            <span style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "1.5" }}>
              {data.email}
            </span>
          </div>

          {/* Details list */}
          <div className="flex flex-col gap-3 w-full">
            {[
              { label: "Name", value: `${data.firstName} ${data.lastName}` },
              { label: "Email", value: data.email },
              { label: "Phone", value: "+971 ***********" },
              { label: "Location", value: data.location },
              { label: "Since", value: "04/02/2026" },
            ].map(({ label, value }) => (
              <p key={label} style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "1.5" }}>
                <span style={{ fontWeight: 500, color: "var(--brand-dark)" }}>{label}:</span> {value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Personal Information form */}
      <div
        className="flex-1 rounded-lg border shadow-[0_4px_8px_0_rgba(0,0,0,0.12)] p-5 sm:p-7 lg:p-10"
        style={{ borderColor: "var(--neutral-100)", background: "var(--form-bg)" }}
      >
        <div className="mb-8">
          <h2 style={{ color: "var(--brand-dark)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", lineHeight: "1.2", marginBottom: "4px" }}>
            Personal Information
          </h2>
          <p style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5" }}>
            Manage your personal information and profile details.
          </p>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-6 mb-8">
          {["Male", "Female"].map((g) => (
            <button
              key={g}
              className="flex items-center gap-2"
              onClick={() => setData((p) => ({ ...p, gender: g }))}
            >
              <span style={{ color: "var(--neutral-700)", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "1.5" }}>
                {g}
              </span>
              <div
                className="w-[18px] h-[18px] rounded-full border flex items-center justify-center"
                style={{ borderColor: "var(--neutral-700)" }}
              >
                {data.gender === g && (
                  <div className="w-3 h-3 rounded-full" style={{ background: "var(--form-primary)" }} />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <TextInput label="First Name" value={data.firstName} onChange={upd("firstName")} />
            <TextInput label="Last Name" value={data.lastName} onChange={upd("lastName")} />
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <TextInput label="Email Address" value={data.email} onChange={upd("email")} type="email" />
            <TextInput label="Phone Number" value={data.phone} onChange={upd("phone")} />
          </div>
          <TextInput label="Location" value={data.location} onChange={upd("location")} />
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4 mt-8 flex-wrap">
          <button
            className="h-[45px] px-5 rounded-md border text-sm font-medium transition-opacity hover:opacity-75"
            style={{ borderColor: "var(--neutral-600)", color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif" }}
          >
            Discard Changes
          </button>
          <button
            className="h-[45px] px-8 rounded-md text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ background: "var(--form-primary)", color: "var(--form-primary-foreground)", fontFamily: "Poppins, sans-serif" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Password Section Content ── */
function PasswordContent({ data, setData }) {
  const upd = (key) => (e) => setData((p) => ({ ...p, [key]: e.target.value }));

  const rules = [
    { ok: data.newPass.length >= 8, text: "Minimum 8–12 characters (recommend 12+ for stronger security)." },
    { ok: /[A-Z]/.test(data.newPass), text: "At least one uppercase letter must." },
    { ok: /[a-z]/.test(data.newPass), text: "At least one lowercase letter must." },
    { ok: /[0-9]/.test(data.newPass), text: "At least one number must (0–9)." },
    { ok: /[!@#$%^&*]/.test(data.newPass), text: "At least special character (! @ # $ % ^ & * etc.)." },
    { ok: data.newPass.length > 0 && !/\s/.test(data.newPass), text: "No spaces allowed." },
  ];

  const confirmError = data.confirm.length > 0 && data.confirm !== data.newPass;

  return (
    <div className="mt-4">
      <div
        className="rounded-lg border shadow-[0_4px_8px_0_rgba(0,0,0,0.12)] p-5 sm:p-7 lg:p-10"
        style={{ borderColor: "var(--neutral-100)", background: "var(--form-bg)" }}
      >
        {/* Heading */}
        <div className="mb-8">
          <h2 style={{ color: "var(--brand-dark)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", lineHeight: "1.2", marginBottom: "4px" }}>
            Changes Password
          </h2>
          <p style={{ color: "var(--neutral-600)", fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5" }}>
            Manage your account preferences, security settings, and privacy options.
          </p>
        </div>

        {/* Password inputs */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <PasswordInput label="Current Password" value={data.current} onChange={upd("current")} />
          <PasswordInput label="New  Password" value={data.newPass} onChange={upd("newPass")} />
          <PasswordInput label="Confirm New  Password" value={data.confirm} onChange={upd("confirm")} hasError={confirmError} />
        </div>

        {/* Validation rules */}
        <div className="flex flex-col gap-2 mb-8">
          {rules.map(({ ok, text }) => (
            <ValidationRule key={text} passed={ok} text={text} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4 mb-10 flex-wrap">
          <button
            className="h-12 px-6 rounded-md border text-sm font-medium transition-opacity hover:opacity-75"
            style={{ borderColor: "#F2415A", color: "#F2415A", fontFamily: "Poppins, sans-serif" }}
          >
            Discard Changes
          </button>
          <button
            className="h-12 px-8 rounded-md text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ background: "var(--form-primary)", color: "var(--form-primary-foreground)", fontFamily: "Poppins, sans-serif" }}
          >
            Save Changes
          </button>
        </div>

        {/* 2FA */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h3 style={{ color: "var(--brand-dark)", fontFamily: "Manrope, sans-serif", fontWeight: 700, fontSize: "clamp(20px,3vw,32px)", lineHeight: "1.2" }}>
            2 Factor Authentication
          </h3>
          <div
            className="flex items-center p-2 rounded-lg gap-1"
            style={{ background: "var(--form-section-bg)" }}
          >
            {["OFF", "On"].map((opt) => {
              const active = (opt === "OFF" && !data.twoFactor) || (opt === "On" && data.twoFactor);
              return (
                <button
                  key={opt}
                  onClick={() => setData((p) => ({ ...p, twoFactor: opt === "On" }))}
                  className="px-4 py-3 rounded-lg text-xs font-medium leading-[1.1] transition-all min-w-[48px]"
                  style={{
                    background: active ? "#FFFFFF" : "transparent",
                    color: "var(--form-text)",
                    fontFamily: "Poppins, sans-serif",
                    boxShadow: active ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Login History */}
        <div
          className="flex items-center h-[72px] px-6 rounded-xl border cursor-pointer hover:bg-pink-50 transition-colors"
          style={{ borderColor: "var(--form-primary)" }}
        >
          <span style={{ color: "var(--form-text-black)", fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "1.2" }}>
            Login History
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function SettingsPage() {
  // "profile" open by default as per requirements
  const [open, setOpen] = useState("profile");

  const [profileData, setProfileData] = useState({
    gender: "Male",
    firstName: "Sam",
    lastName: "Bannister",
    email: "info@deal360.ae",
    phone: "+971 ********",
    location: "Building A1, Dubai Digital Park, Silicone Oasis, Dubai, United Arab Emirates",
  });

  const [passwordData, setPasswordData] = useState({
    current: "",
    newPass: "",
    confirm: "",
    twoFactor: false,
  });

  const toggle = (section) => setOpen((prev) => (prev === section ? null : section));

  return (
    <div className=" w-full" style={{ background: "hsl(var(--background))", fontFamily: "Poppins, sans-serif" }}>
      <div className="w-full mx-auto px-2 sm:px-2 lg:px-2 py-8 lg:py-12">

        {/* Profile accordion */}
        <div className="mb-4">
          <AccordionHeader
            icon={<ProfileIcon />}
            label="Profile"
            isOpen={open === "profile"}
            onClick={() => toggle("profile")}
          />
          {open === "profile" && (
            <ProfileContent data={profileData} setData={setProfileData} />
          )}
        </div>

        {/* Password accordion */}
        <div className="mb-4">
          <AccordionHeader
            icon={<PasswordKeyIcon />}
            label="Password"
            isOpen={open === "password"}
            onClick={() => toggle("password")}
          />
          {open === "password" && (
            <PasswordContent data={passwordData} setData={setPasswordData} />
          )}
        </div>

      </div>
    </div>
  );
}
