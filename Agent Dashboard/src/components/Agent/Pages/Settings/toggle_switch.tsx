import React from 'react';

export default function ToggleSwitch({ checked = false, onChange, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      className={`relative inline-flex h-[1.55rem] w-[3.11rem] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        disabled
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer'
      } ${
        checked
          ? 'bg-[#F88379]'
          : 'bg-[#757575]'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[1.11rem] w-[1.11rem] transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ${
          checked ? 'translate-x-[1.55rem]' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
