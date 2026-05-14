import React, { useState } from 'react';

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.21383 12C3.79147 12.7966 4.97536 14.2978 6.53429 15.6047C8.15069 16.9598 10.0434 18 11.9976 18C13.9518 18 15.8445 16.9598 17.4609 15.6047C19.0198 14.2978 20.2037 12.7966 20.7814 12C20.2037 11.2033 19.0198 9.70224 17.4609 8.39529C15.8445 7.04015 13.9518 6 11.9976 6C10.0434 6 8.15069 7.04015 6.53429 8.39529C4.97536 9.70224 3.79147 11.2033 3.21383 12ZM5.24937 6.86264C7.0111 5.38568 9.35388 4 11.9976 4C14.6413 4 16.9841 5.38568 18.7458 6.86264C20.5246 8.35393 21.8408 10.0471 22.4489 10.893C22.9273 11.5584 22.9273 12.4416 22.4489 13.107C21.8408 13.9529 20.5246 15.6461 18.7458 17.1374C16.9841 18.6143 14.6413 20 11.9976 20C9.35388 20 7.0111 18.6143 5.24937 17.1374C3.47056 15.6461 2.15441 13.9529 1.54628 13.107C1.06791 12.4416 1.06791 11.5584 1.54628 10.893C2.15441 10.0471 3.47056 8.35393 5.24937 6.86264Z"
        fill="#68706A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9976 14C13.1022 14 13.9976 13.1046 13.9976 12C13.9976 10.8954 13.1022 10 11.9976 10C10.893 10 9.9976 10.8954 9.9976 12C9.9976 13.1046 10.893 14 11.9976 14ZM11.9976 16C14.2067 16 15.9976 14.2091 15.9976 12C15.9976 9.79086 14.2067 8 11.9976 8C9.78846 8 7.9976 9.79086 7.9976 12C7.9976 14.2091 9.78846 16 11.9976 16Z"
        fill="#68706A"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="#68706A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="1" y1="1" x2="23" y2="23" stroke="#68706A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6758 5.11783C19.8365 5.22082 19.948 5.38093 19.9859 5.56297C20.0237 5.745 19.9848 5.93404 19.8777 6.08851L11.1405 18.6887C11.0807 18.7748 11.0018 18.847 10.9095 18.9003C10.8172 18.9535 10.7137 18.9864 10.6065 18.9966C10.4994 19.0068 10.3912 18.994 10.2898 18.9591C10.1885 18.9243 10.0964 18.8682 10.0202 18.7951L4.19541 13.195C4.0668 13.0623 3.99679 12.8868 4.00011 12.7054C4.00344 12.5241 4.07986 12.3511 4.21326 12.2228C4.34666 12.0946 4.52663 12.0211 4.71526 12.0179C4.90388 12.0147 5.08644 12.082 5.22446 12.2057L10.4212 17.2018L18.6662 5.31104C18.7734 5.15673 18.9401 5.0497 19.1294 5.01347C19.3187 4.97724 19.5153 5.01478 19.6758 5.11783Z"
        fill="#208436"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.21093 5.24686C5.34617 5.10161 5.52949 5.02003 5.72062 5.02003C5.91176 5.02003 6.09508 5.10161 6.23031 5.24686L11.4907 10.9038L16.7511 5.24686C16.8171 5.17066 16.8967 5.10954 16.9852 5.06715C17.0737 5.02475 17.1692 5.00196 17.266 5.00012C17.3629 4.99828 17.4591 5.01744 17.5489 5.05645C17.6387 5.09546 17.7203 5.15352 17.7887 5.22718C17.8572 5.30083 17.9112 5.38856 17.9475 5.48514C17.9838 5.58172 18.0016 5.68517 17.9999 5.78931C17.9982 5.89345 17.977 5.99616 17.9376 6.0913C17.8981 6.18645 17.8413 6.27208 17.7704 6.34309L12.5101 12L17.7704 17.6569C17.8413 17.7279 17.8981 17.8136 17.9376 17.9087C17.977 18.0038 17.9982 18.1065 17.9999 18.2107C18.0016 18.3148 17.9838 18.4183 17.9475 18.5149C17.9112 18.6114 17.8572 18.6992 17.7887 18.7728C17.7203 18.8465 17.6387 18.9045 17.5489 18.9436C17.4591 18.9826 17.3629 19.0017 17.266 18.9999C17.1692 18.998 17.0737 18.9752 16.9852 18.9329C16.8967 18.8905 16.8171 18.8293 16.7511 18.7531L11.4907 13.0962L6.23031 18.7531C6.09359 18.8901 5.91275 18.9647 5.72589 18.9612C5.53904 18.9576 5.36076 18.8762 5.22861 18.7341C5.09646 18.592 5.02077 18.4003 5.01747 18.1994C5.01417 17.9984 5.08353 17.8039 5.21093 17.6569L10.4713 12L5.21093 6.34309C5.07587 6.19766 5 6.00052 5 5.79498C5 5.58943 5.07587 5.3923 5.21093 5.24686Z"
        fill="#E5102E"
      />
    </svg>
  );
}

function PasswordField({ label, value, onChange, hasError = false }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <label className="text-sm sm:text-base font-medium text-[#434C45] font-poppins">
        {label}
      </label>
      <div
        className={`flex h-12 items-center gap-2 px-3 rounded border bg-white ${
          hasError ? 'border-[#E5102E]' : 'border-[#C0C3C1]'
        }`}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder="••••••••"
          className="flex-1 min-w-0 text-[var(--text-grey)] text-sm sm:text-base font-poppins bg-transparent outline-none placeholder:text-[#68706A]"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="flex-shrink-0 text-[var(--text-grey)] hover:text-[#343A40] transition-colors"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </div>
  );
}

function ValidationItem({ valid, text }) {
  return (
    <div className="flex items-center gap-2">
      {valid ? <CheckIcon /> : <XIcon />}
      <span
        className={`text-sm font-poppins ${valid ? 'text-[#1F9854]' : 'text-[#E5102E]'}`}
      >
        {text}
      </span>
    </div>
  );
}

export default function PasswordSection() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const validations = [
    {
      valid: newPassword.length >= 8,
      text: 'Minimum 8–12 characters (recommend 12+ for stronger security).',
    },
    {
      valid: /[A-Z]/.test(newPassword),
      text: 'At least one uppercase letter must.',
    },
    {
      valid: /[a-z]/.test(newPassword),
      text: 'At least one lowercase letter must.',
    },
    {
      valid: /[0-9]/.test(newPassword),
      text: 'At least one number must (0–9).',
    },
    {
      valid: /[!@#$%^&*]/.test(newPassword),
      text: 'At least special character (! @ # $ % ^ & * etc.).',
    },
    {
      valid: newPassword.length > 0 && !/\s/.test(newPassword),
      text: 'No spaces allowed.',
    },
  ];

  const confirmHasError =
    confirmPassword.length > 0 && confirmPassword !== newPassword;

  const handleDiscard = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1
          className="text-2xl sm:text-3xl font-bold text-[var(--base-black)]"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Changes Password
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-grey)] font-poppins">
          Manage your account preferences, security settings, and privacy options.
        </p>
      </div>

      {/* Password Fields */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <PasswordField
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
        />
        <PasswordField
          label="New  Password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <PasswordField
          label="Confirm New  Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          hasError={confirmHasError}
        />
      </div>

      {/* Validation Items */}
      <div className="flex flex-col gap-2">
        {validations.map((item, i) => (
          <ValidationItem key={i} valid={item.valid} text={item.text} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={handleDiscard}
          className="px-5 sm:px-6 py-3 rounded-md border border-[#F2415A] text-[#F2415A] text-sm font-medium font-poppins hover:bg-red-50 transition-colors"
        >
          Discard Changes
        </button>
        <button
          type="button"
          className="px-8 sm:px-10 py-3 rounded-md bg-[var(--form-primary)] text-[var(--form-primary-foreground)] text-sm font-semibold font-poppins hover:bg-[#f5705f] transition-colors"
        >
          Save Changes
        </button>
      </div>


    </div>
  );
}
