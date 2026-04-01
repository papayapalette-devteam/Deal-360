export default function ConnectionVerification() {
  return (
    <section className="bg-white w-full  flex items-center overflow-hidden">
      <div className="w-full mx-auto px-0  py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 lg:flex-shrink-0 lg:pr-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">

            {/* Heading */}
            <h2
              className="font-poppins leading-[110%] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:font-medium"
              style={{ color: "var(--color-text)" }}
            >
              <span style={{ color: "var(--color-text)" }}>Every </span>
              <span style={{ color: "var(--color-primary)" }}>connection</span>
              <span style={{ color: "var(--color-text)" }}> starts with </span>
              <span style={{ color: "var(--color-primary)" }}>verification</span>
              <span style={{ color: "var(--color-text)" }}>.</span>
            </h2>

            {/* Description */}
            <p
              className="font-poppins font-medium sm:font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              Agents, brokerages, and listings are verified so users engage with
              real professionals and real availability — not duplicated or
              misleading data.
            </p>

            {/* Feature items */}
            <div className="mt-4 sm:mt-6 lg:mt-8">
              {/* Mobile: 2-col grid; Desktop: vertical column */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">

                {/* Verified Agents */}
                <FeatureItem label="Verified Agents" icon={<CheckVerifiedIcon />} />

                {/* Checked Listings */}
                <FeatureItem label="Checked Listings" icon={<SecurityIcon />} />

                {/* Transparent Pricing — spans to next row on mobile */}
                <div className="col-span-1">
                  <FeatureItem label="Transparent Pricing" icon={<EyeIcon />} />
                </div>

              </div>
            </div>
          </div>

          {/* ── Right: Monitor image ── */}
          <div className="w-full lg:w-full flex items-center justify-center lg:justify-end relative">
            <picture className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
              <source
                media="(min-width: 1024px)"
                srcSet="https://api.builder.io/api/v1/image/assets/TEMP/a180c4fefb5b5ac1e7b840df44c9f1fa430b82fb?width=1899"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c641b5ef4120cca9d4532c98ae7c93a9b181388d?width=728"
                alt="Monitor"
                className="w-full h-auto object-contain"
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function FeatureItem({ label, icon }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Icon container — smaller on mobile (31px), larger on desktop (40px) */}
      <div
        className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
        style={{ background: "#FFEFEE" }}
      >
        {icon}
      </div>
      <span
        className="font-poppins font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-tight sm:leading-snug"
        style={{ color: "var(--color-primary)" }}
      >
        {label}
      </span>
    </div>
  );
}

function CheckVerifiedIcon() {
  return (
    <>
      {/* Mobile size */}
      <svg
        className="block lg:hidden"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.4749 5.54611C2.38097 5.12301 2.39539 4.68304 2.51683 4.267C2.63827 3.85096 2.86278 3.47232 3.16956 3.16618C3.47635 2.86004 3.85546 2.63632 4.27175 2.51575C4.68805 2.39519 5.12804 2.38169 5.55094 2.4765C5.78371 2.11246 6.10438 1.81287 6.48338 1.60535C6.86238 1.39784 7.28752 1.28906 7.71962 1.28906C8.15172 1.28906 8.57686 1.39784 8.95586 1.60535C9.33486 1.81287 9.65553 2.11246 9.8883 2.4765C10.3118 2.38128 10.7526 2.39472 11.1696 2.51557C11.5865 2.63643 11.9661 2.86078 12.2731 3.16775C12.5801 3.47471 12.8044 3.85433 12.9253 4.27129C13.0461 4.68825 13.0596 5.129 12.9643 5.55255C13.3284 5.78531 13.628 6.10598 13.8355 6.48498C14.043 6.86398 14.1518 7.28913 14.1518 7.72122C14.1518 8.15332 14.043 8.57846 13.8355 8.95746C13.628 9.33646 13.3284 9.65713 12.9643 9.8899C13.0592 10.3128 13.0457 10.7528 12.9251 11.1691C12.8045 11.5854 12.5808 11.9645 12.2747 12.2713C11.9685 12.5781 11.5899 12.8026 11.1738 12.924C10.7578 13.0454 10.3178 13.0599 9.89473 12.9659C9.66227 13.3314 9.34135 13.6322 8.9617 13.8407C8.58205 14.0491 8.15595 14.1584 7.72284 14.1584C7.28973 14.1584 6.86362 14.0491 6.48397 13.8407C6.10432 13.6322 5.78341 13.3314 5.55094 12.9659C5.12804 13.0608 4.68805 13.0473 4.27175 12.9267C3.85546 12.8061 3.47635 12.5824 3.16956 12.2763C2.86278 11.9701 2.63827 11.5915 2.51683 11.1754C2.39539 10.7594 2.38097 10.3194 2.4749 9.89633C2.10806 9.66418 1.8059 9.34301 1.59652 8.96272C1.38714 8.58242 1.27734 8.15535 1.27734 7.72122C1.27734 7.2871 1.38714 6.86002 1.59652 6.47973C1.8059 6.09943 2.10806 5.77827 2.4749 5.54611Z"
          stroke="#4B4B4B"
          strokeWidth="1.28705"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.79297 7.72259L7.08002 9.00964L9.65411 6.43555"
          stroke="#4B4B4B"
          strokeWidth="1.28705"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Desktop size */}
      <svg
        className="hidden lg:block"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
          stroke="#4B4B4B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

function SecurityIcon() {
  return (
    <>
      {/* Mobile size */}
      <svg
        className="block lg:hidden"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip-security-mobile)">
          <path
            d="M6.96806 1.5313C7.18727 1.37318 7.4507 1.28809 7.72098 1.28809C7.99127 1.28809 8.2547 1.37318 8.47391 1.5313L13.6221 5.22512C13.8442 5.38514 14.0095 5.61181 14.094 5.87219C14.1785 6.13258 14.1777 6.41312 14.0919 6.67305L12.1356 12.6321C12.0503 12.8889 11.8863 13.1124 11.6668 13.2706C11.4473 13.4289 11.1835 13.514 10.9129 13.5137H4.5291C4.25849 13.514 3.99469 13.4289 3.77518 13.2706C3.55568 13.1124 3.39165 12.8889 3.30641 12.6321L1.3501 6.67305C1.26424 6.41312 1.2635 6.13258 1.34798 5.87219C1.43246 5.61181 1.59776 5.38514 1.81987 5.22512L6.96806 1.5313Z"
            stroke="#4B4B4B"
            strokeWidth="1.28705"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip-security-mobile">
            <rect width="15.4446" height="15.4446" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {/* Desktop size */}
      <svg
        className="hidden lg:block"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9998 22.7498C11.7598 22.7498 11.5199 22.7198 11.2899 22.6498C6.09986 21.2198 2.33984 16.3698 2.33984 11.1098V6.71978C2.33984 5.59978 3.14985 4.38983 4.18985 3.95983L9.75986 1.6798C11.2099 1.0898 12.7998 1.0898 14.2398 1.6798L19.8098 3.95983C20.8498 4.38983 21.6599 5.59978 21.6599 6.71978V11.1098C21.6599 16.3598 17.8898 21.2098 12.7098 22.6498C12.4798 22.7198 12.2398 22.7498 11.9998 22.7498ZM11.9998 2.74981C11.4298 2.74981 10.8698 2.85983 10.3298 3.07983L4.75986 5.3598C4.27986 5.5598 3.83984 6.20979 3.83984 6.72979V11.1198C3.83984 15.7098 7.13985 19.9498 11.6898 21.2098C11.8898 21.2698 12.1098 21.2698 12.3098 21.2098C16.8598 19.9498 20.1599 15.7098 20.1599 11.1198V6.72979C20.1599 6.20979 19.7198 5.5598 19.2398 5.3598L13.6699 3.07983C13.1299 2.85983 12.5698 2.74981 11.9998 2.74981Z"
          fill="#4B4B4B"
        />
      </svg>
    </>
  );
}

function EyeIcon() {
  return (
    <>
      {/* Mobile size */}
      <svg
        className="block lg:hidden"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.32929 7.94697C1.27565 7.80249 1.27565 7.64356 1.32929 7.49907C1.85163 6.23253 2.73829 5.14959 3.87685 4.38757C5.01541 3.62555 6.35459 3.21875 7.72463 3.21875C9.09466 3.21875 10.4338 3.62555 11.5724 4.38757C12.711 5.14959 13.5976 6.23253 14.12 7.49907C14.1736 7.64356 14.1736 7.80249 14.12 7.94697C13.5976 9.21352 12.711 10.2964 11.5724 11.0585C10.4338 11.8205 9.09466 12.2273 7.72463 12.2273C6.35459 12.2273 5.01541 11.8205 3.87685 11.0585C2.73829 10.2964 1.85163 9.21352 1.32929 7.94697Z"
          stroke="#4B4B4B"
          strokeWidth="1.28705"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.72354 9.65314C8.78977 9.65314 9.65411 8.78879 9.65411 7.72256C9.65411 6.65634 8.78977 5.79199 7.72354 5.79199C6.65732 5.79199 5.79297 6.65634 5.79297 7.72256C5.79297 8.78879 6.65732 9.65314 7.72354 9.65314Z"
          stroke="#4B4B4B"
          strokeWidth="1.28705"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Desktop size */}
      <svg
        className="hidden lg:block"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.02992 13.9999C8.63992 13.4299 8.41992 12.7399 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799"
          stroke="#4B4B4B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5601 5.57998C15.8701 4.37998 13.9701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C5.18009 18.2 8.47009 20.28 12.0001 20.28C15.5301 20.28 18.8201 18.2 21.1101 14.6C22.0101 13.19 22.0101 10.82 21.1101 9.40998"
          stroke="#4B4B4B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
