export default function ContactCard() {
  return (
    <div className="flex flex-col justify-center items-start gap-2.5 flex-1 rounded-[14px] border border-black/10 bg-white p-6">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* Title */}
        <h2
          className="w-full text-[#0A0A0A] text-lg font-medium leading-4"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Contact Information
        </h2>

        {/* Contact rows */}
        <div className="flex flex-col items-start gap-3 w-full">
          {/* Phone row */}
          <div className="flex items-center gap-3 w-full h-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M14.665 11.2827V13.2827C14.6657 13.4683 14.6277 13.6521 14.5533 13.8222C14.479 13.9924 14.3699 14.1451 14.233 14.2706C14.0962 14.3961 13.9347 14.4917 13.7588 14.5511C13.5829 14.6106 13.3966 14.6327 13.2117 14.616C11.1602 14.3931 9.18966 13.6921 7.45833 12.5693C5.84755 11.5458 4.48189 10.1801 3.45833 8.56934C2.33165 6.83014 1.63049 4.85 1.41166 2.78934C1.395 2.60498 1.41691 2.41918 1.47599 2.24375C1.53508 2.06833 1.63004 1.90713 1.75484 1.77042C1.87964 1.6337 2.03153 1.52448 2.20086 1.44968C2.37018 1.37489 2.55322 1.33618 2.73833 1.336H4.73833C5.06187 1.33282 5.37552 1.44739 5.62084 1.65836C5.86615 1.86933 6.02638 2.1623 6.07166 2.48267C6.15608 3.12271 6.31263 3.75115 6.53833 4.356C6.62802 4.59462 6.64744 4.85395 6.59427 5.10326C6.5411 5.35257 6.41757 5.58141 6.23833 5.76267L5.39166 6.60934C6.3407 8.27837 7.72263 9.6603 9.39166 10.6093L10.2383 9.76267C10.4196 9.58343 10.6484 9.4599 10.8977 9.40673C11.1471 9.35356 11.4064 9.37297 11.645 9.46267C12.2498 9.68837 12.8783 9.84492 13.5183 9.92934C13.8422 9.97502 14.1379 10.1381 14.3494 10.3877C14.5608 10.6372 14.6731 10.9557 14.665 11.2827Z"
                stroke="var(--Colors-for-white-theme-Secondary)"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[#0A0A0A] text-sm font-normal leading-5"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              97150 2871704
            </span>
          </div>

          {/* Email row */}
          <div className="flex items-center gap-3 w-full h-5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M13.332 2.66406H2.66536C1.92898 2.66406 1.33203 3.26102 1.33203 3.9974V11.9974C1.33203 12.7338 1.92898 13.3307 2.66536 13.3307H13.332C14.0684 13.3307 14.6654 12.7338 14.6654 11.9974V3.9974C14.6654 3.26102 14.0684 2.66406 13.332 2.66406Z"
                stroke="var(--Colors-for-white-theme-Secondary)"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6654 4.66406L8.68536 8.46406C8.47955 8.59301 8.24158 8.6614 7.9987 8.6614C7.75582 8.6614 7.51785 8.59301 7.31203 8.46406L1.33203 4.66406"
                stroke="var(--Colors-for-white-theme-Secondary)"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-[#0A0A0A] text-sm font-normal leading-5"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              n,howe@barnos-internationalcom
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
