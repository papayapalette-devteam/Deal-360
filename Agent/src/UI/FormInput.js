import { useState } from "react";

export function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
  rightElement,
}) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-base font-semibold text-brand-grey font-manrope leading-[150%] truncate w-full"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-input pr-10"
        />
        {rightElement && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
            {rightElement}
          </span>
        )}
      </div>
    </div>
  );
}

export function PasswordInput({ label, placeholder, value, onChange, id }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-base font-medium text-brand-grey font-manrope leading-[150%]"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-input pr-12"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-placeholder focus:outline-none"
          tabIndex={-1}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
                stroke="#6C757D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="1"
                y1="1"
                x2="23"
                y2="23"
                stroke="#6C757D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.21383 12C3.79147 12.7966 4.97536 14.2978 6.53429 15.6047C8.15069 16.9598 10.0434 18 11.9976 18C13.9518 18 15.8445 16.9598 17.4609 15.6047C19.0198 14.2978 20.2037 12.7966 20.7814 12C20.2037 11.2033 19.0198 9.70224 17.4609 8.39529C15.8445 7.04015 13.9518 6 11.9976 6C10.0434 6 8.15069 7.04015 6.53429 8.39529C4.97536 9.70224 3.79147 11.2033 3.21383 12ZM5.24937 6.86264C7.0111 5.38568 9.35388 4 11.9976 4C14.6413 4 16.9841 5.38568 18.7458 6.86264C20.5246 8.35393 21.8408 10.0471 22.4489 10.893C22.9273 11.5584 22.9273 12.4416 22.4489 13.107C21.8408 13.9529 20.5246 15.6461 18.7458 17.1374C16.9841 18.6143 14.6413 20 11.9976 20C9.35388 20 7.0111 18.6143 5.24937 17.1374C3.47056 15.6461 2.15441 13.9529 1.54628 13.107C1.06791 12.4416 1.06791 11.5584 1.54628 10.893C2.15441 10.0471 3.47056 8.35393 5.24937 6.86264Z"
                fill="#6C757D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9976 14C13.1022 14 13.9976 13.1046 13.9976 12C13.9976 10.8954 13.1022 10 11.9976 10C10.893 10 9.9976 10.8954 9.9976 12C9.9976 13.1046 10.893 14 11.9976 14ZM11.9976 16C14.2067 16 15.9976 14.2091 15.9976 12C15.9976 9.79086 14.2067 8 11.9976 8C9.78846 8 7.9976 9.79086 7.9976 12C7.9976 14.2091 9.78846 16 11.9976 16Z"
                fill="#6C757D"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
