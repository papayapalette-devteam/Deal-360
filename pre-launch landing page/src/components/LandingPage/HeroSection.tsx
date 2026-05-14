"use client";

export default function HeroSection() {
  const buttons = [
    "Submit Requirement",
    "Submit Listing Intent",
    "User Registration",
    "Professional Registration",
    "Partner Registration",
  ];

  const benefits = [
    "Priority visibility",
    "Early feature access",
    "Founding-only benefits",
  ];

  return (
    <div className="bg-[white] text-[var(--color-text)] overflow-hidden mt-2">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 max-w-full lg:max-w-[55%]">
            {/* Main Content */}
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] text-foreground">
                Dubai real estate is about to{" "}
                <span className="text-[var(--color-primary)]">change</span>.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)]  leading-[150%]">
                A new platform built around verified agents, real demand, and
                private opportunities.
              </p>

              {/* Launching soon + Registration */}
              <div className="flex flex-col gap-4">
                <p className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--color-text)] leading-[150%]">
                  Launching soon.
                </p>

                <div className="flex flex-col gap-2">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[var(--color-primary)] leading-[150%]">
                    Founding Registration
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text)] leading-[150%]">
                    Not everyone will get the same access.
                  </p>
                  <p className="text-sm sm:text-base font-normal text-[var(--color-text-secondary)] leading-[150%]">
                    We&apos;re opening early registration to a select group of agents
                    and brokerages before official launch.
                  </p>

                  {/* Benefits List */}
                  <div className="flex flex-col gap-2 mt-2">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 py-2 px-2"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F88379]/10 shadow-[0_0_8px_0_rgba(0,0,0,0.10)] flex items-center justify-center">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3327 4L5.99935 11.3333L2.66602 8"
                              stroke="#F88379"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text)] leading-[110%]">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Buttons + App Store */}
            <div className="flex flex-col gap-6">
              {/* Registration Buttons */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {buttons.map((label) => (
                  <button
                    key={label}
                    className="px-6 py-4 rounded-lg border-4 border-[#79FFD2] text-[var(--color-text)] font-medium text-sm sm:text-base leading-[110%] bg-gradient-to-r from-[#E8FFF7] via-[#FFF3F2] to-[#D5FFF1] hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex items-center gap-6 flex-wrap">
                {/* Apple App Store */}
                <div className="relative w-[140px] h-10 rounded-[6px] border border-[#A6A6A6] bg-black overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center pl-2">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M16.7045 12.763C16.7166 11.8431 16.9669 10.9411 17.4321 10.141C17.8972 9.34093 18.5621 8.66869 19.3648 8.18687C18.8548 7.47582 18.1821 6.89066 17.4 6.47785C16.6178 6.06505 15.7479 5.83597 14.8592 5.80883C12.9635 5.61456 11.1258 6.91628 10.1598 6.91628C9.17506 6.91628 7.68776 5.82812 6.08616 5.86028C5.05021 5.89296 4.04059 6.18707 3.15568 6.71395C2.27077 7.24083 1.54075 7.98252 1.03674 8.86675C-1.14648 12.5571 0.482005 17.9808 2.57338 20.9639C3.61975 22.4246 4.84264 24.0562 6.44279 23.9984C8.00863 23.9349 8.59344 23.0235 10.4835 23.0235C12.3561 23.0235 12.9048 23.9984 14.5374 23.9616C16.2176 23.9349 17.2762 22.4944 18.2859 21.0198C19.0377 19.979 19.6162 18.8287 20 17.6115C19.0238 17.2084 18.1908 16.5337 17.6048 15.6715C17.0187 14.8093 16.7056 13.7977 16.7045 12.763Z"
                        fill="white"
                      />
                      <path
                        d="M13.622 3.84713C14.5381 2.77343 14.9895 1.39335 14.8802 0C13.4806 0.143519 12.1877 0.796596 11.2592 1.82911C10.8052 2.33351 10.4575 2.92033 10.236 3.55601C10.0145 4.19168 9.92342 4.86375 9.96808 5.5338C10.6681 5.54084 11.3607 5.3927 11.9936 5.10054C12.6266 4.80838 13.1833 4.37982 13.622 3.84713Z"
                        fill="white"
                      />
                    </svg>
                    <div className="flex flex-col items-start ml-2">
                      <span className="text-white font-poppins font-normal leading-none text-[9px]">
                        Download on the
                      </span>
                      <span className="text-white font-poppins font-normal text-[18px] leading-none tracking-tight">
                        App Store
                      </span>
                    </div>
                  </div>
                  {/* Coming soon banner - aquamarine */}
                  <div className="absolute top-[-4px] left-[50px] w-[109px] h-[17px] bg-[#7FFFD4] flex items-center justify-center overflow-hidden -rotate-[31.485deg] origin-center">
                    <span className="text-[#4B4B4B] font-poppins font-medium text-[8px] leading-[110%] whitespace-nowrap">
                      COMING SOON
                    </span>
                  </div>
                </div>

                {/* Google Play Store */}
                <div className="relative w-[134px] h-10 rounded-[6px] border border-[#A6A6A6] bg-black overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 flex items-center pl-2">
                    <svg
                      width="21"
                      height="24"
                      viewBox="0 0 21 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M19.6312 9.66424L19.6221 9.6577L14.9009 6.85928L9.58203 11.6994L14.9201 17.1562L19.6157 14.3858C20.4388 13.9305 20.9981 13.0431 20.9981 12.0204C20.9981 11.0033 20.447 10.1205 19.6312 9.66424Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M0.0894234 1.9952C0.0310244 2.21542 0 2.44683 0 2.68571V21.3182C0 21.5571 0.0310245 21.7885 0.0903359 22.0078L10.1386 11.7332L0.0894234 1.9952Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9.87715 12L14.9049 6.85945L3.9825 0.383598C3.58557 0.140054 3.12203 8.67844e-05 2.62655 8.67844e-05C1.41295 8.67844e-05 0.389138 0.84456 0.0907557 1.99043C0.0907557 1.99136 0.0898438 1.9923 0.0898438 1.99323L9.87715 12Z"
                        fill="#34A853"
                      />
                    </svg>
                    <div className="flex flex-col items-start ml-2 gap-[3px]">
                      <span className="text-white font-poppins font-normal text-[10px] uppercase leading-normal">
                        GET IT ON
                      </span>
                      <svg
                        width="74"
                        height="15"
                        viewBox="0 0 74 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M57.5181 11.4097H59.1469V0.398144H57.5181V11.4097ZM72.1888 4.36461L70.3217 9.13882H70.2658L68.328 4.36461H66.5735L69.4793 11.0371L67.8234 14.749H69.5212L74 4.36461H72.1888ZM62.9519 10.1588C62.4176 10.1588 61.6739 9.89019 61.6739 9.22338C61.6739 8.37424 62.6001 8.04833 63.4005 8.04833C64.1163 8.04833 64.4541 8.20424 64.8888 8.41652C64.7622 9.43655 63.892 10.1588 62.9519 10.1588ZM63.1483 4.12414C61.969 4.12414 60.7469 4.64825 60.2424 5.81009L61.6879 6.41876C61.9969 5.81009 62.5721 5.61102 63.1762 5.61102C64.0185 5.61102 64.8748 6.12103 64.8888 7.0283V7.14105C64.5938 6.97105 63.9627 6.71648 63.1902 6.71648C61.632 6.71648 60.0451 7.5806 60.0451 9.1952C60.0451 10.6689 61.323 11.6184 62.7546 11.6184C63.8501 11.6184 64.4541 11.1225 64.8329 10.5411H64.8888V11.3912H66.4609V7.16924C66.4609 5.21463 65.0154 4.12414 63.1483 4.12414ZM53.0821 5.70527H50.7655V1.93082H53.0821C54.2998 1.93082 54.9911 2.9482 54.9911 3.81761C54.9911 4.67115 54.2998 5.70527 53.0821 5.70527ZM53.0402 0.398144H49.1375V11.4097H50.7655V7.23795H53.0402C54.8453 7.23795 56.6199 5.91843 56.6199 3.81761C56.6199 1.71678 54.8453 0.398144 53.0402 0.398144ZM31.7583 10.1606C30.6332 10.1606 29.6913 9.21017 29.6913 7.90475C29.6913 6.58524 30.6332 5.61982 31.7583 5.61982C32.8695 5.61982 33.7406 6.58524 33.7406 7.90475C33.7406 9.21017 32.8695 10.1606 31.7583 10.1606ZM33.6289 4.98121H33.5722C33.2064 4.54166 32.5038 4.1444 31.6178 4.1444C29.7611 4.1444 28.0599 5.78983 28.0599 7.90475C28.0599 10.0047 29.7611 11.6369 31.6178 11.6369C32.5038 11.6369 33.2064 11.2396 33.5722 10.7851H33.6289V11.3251C33.6289 12.7582 32.8695 13.5246 31.6457 13.5246C30.6471 13.5246 30.0282 12.8005 29.7751 12.1901L28.3549 12.7864C28.7626 13.78 29.8458 15 31.6457 15C33.5582 15 35.1757 13.8646 35.1757 11.0978V4.37078H33.6289V4.98121ZM36.3008 11.4097H37.9323V0.397264H36.3008V11.4097ZM40.3362 7.77703C40.2943 6.32979 41.4474 5.59164 42.2766 5.59164C42.9243 5.59164 43.4725 5.91755 43.6549 6.38616L40.3362 7.77703ZM45.3989 6.52798C45.0899 5.69117 44.1472 4.1444 42.2208 4.1444C40.3083 4.1444 38.7196 5.6621 38.7196 7.89066C38.7196 9.9906 40.2943 11.6369 42.4032 11.6369C44.1053 11.6369 45.0899 10.5869 45.4976 9.97651L44.2319 9.12473C43.8103 9.74925 43.2333 10.1606 42.4032 10.1606C41.5739 10.1606 40.983 9.77744 40.6033 9.02607L45.5674 6.95343L45.3989 6.52798ZM5.8501 5.29391V6.88296H9.61836C9.50576 7.77703 9.21072 8.42974 8.76118 8.88337C8.21214 9.43743 7.35409 10.0479 5.8501 10.0479C3.52909 10.0479 1.71523 8.1602 1.71523 5.8189C1.71523 3.47672 3.52909 1.58993 5.8501 1.58993C7.10182 1.58993 8.01574 2.08673 8.69048 2.72535L9.80167 1.60403C8.85895 0.69587 7.6081 0 5.8501 0C2.67191 0 0 2.61172 0 5.8189C0 9.02607 2.67191 11.6369 5.8501 11.6369C7.56533 11.6369 8.85895 11.0688 9.8715 10.0047C10.9129 8.95472 11.2358 7.4793 11.2358 6.28663C11.2358 5.91755 11.2079 5.57754 11.1512 5.29391H5.8501ZM15.5208 10.1606C14.3957 10.1606 13.425 9.22426 13.425 7.89066C13.425 6.54207 14.3957 5.61982 15.5208 5.61982C16.6451 5.61982 17.6158 6.54207 17.6158 7.89066C17.6158 9.22426 16.6451 10.1606 15.5208 10.1606ZM15.5208 4.1444C13.4669 4.1444 11.7936 5.71936 11.7936 7.89066C11.7936 10.0479 13.4669 11.6369 15.5208 11.6369C17.5739 11.6369 19.2472 10.0479 19.2472 7.89066C19.2472 5.71936 17.5739 4.1444 15.5208 4.1444ZM23.65 10.1606C22.5249 10.1606 21.5542 9.22426 21.5542 7.89066C21.5542 6.54207 22.5249 5.61982 23.65 5.61982C24.7752 5.61982 25.745 6.54207 25.745 7.89066C25.745 9.22426 24.7752 10.1606 23.65 10.1606ZM23.65 4.1444C21.597 4.1444 19.9237 5.71936 19.9237 7.89066C19.9237 10.0479 21.597 11.6369 23.65 11.6369C25.7031 11.6369 27.3764 10.0479 27.3764 7.89066C27.3764 5.71936 25.7031 4.1444 23.65 4.1444Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Coming soon banner - coral */}
                  <div className="absolute top-[-4px] left-[44px] w-[109px] h-[17px] bg-[#F88379] flex items-center justify-center overflow-hidden -rotate-[31.485deg] origin-center">
                    <span className="text-white font-poppins font-medium text-[8px] leading-[110%] whitespace-nowrap">
                      COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="hidden lg:flex flex-1 relative items-center justify-center min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
            {/* Teal blur blob */}
            <div className="absolute rounded-full bg-[#7FFFD4] blur-[120px] opacity-60 w-[400px] h-[280px] top-[10%] right-[5%] rotate-[-80deg] pointer-events-none" />

            {/* Phone images container - rotated arrangement */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left center phone */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/af1e47eed63032038f29431ba0e27c9be486f087?width=479"
                alt="App screenshot"
                className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] left-[0%] top-[18%] z-10"
              />
              {/* Small overlay card - bottom right */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/067b7eae724b69dde322fd5acb7a5e90544f3f1d?width=459"
                alt="Property card"
                className="absolute w-[160px] xl:w-[190px] 2xl:w-[220px] rounded-xl shadow-xl -rotate-[0deg] left-[20%] top-[30%] z-30"
              />

              {/* Right Side Vertical Phones */}
              <div>
                {/* Top Phone */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e5b7590364ee604abf055ae420494e03698afe49?width=479"
                  alt="App screenshot"
                  className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl"
                />

                {/* Bottom Phone */}

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8937a22567fe31112fd56bbfd8366aec8bc65fa6?width=479"
                  alt="App screenshot"
                  className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl"
                />
                {/* Small overlay card - top left area */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/291ebc707914e5dcc28ddc4b0650156a41bfa573?width=308"
                  alt="Property card"
                  className="absolute w-[120px] xl:w-[140px] 2xl:w-[154px] rounded-xl shadow-xl -rotate-[0deg] right-[25%] top-[35%] z-30"
                />
              </div>




            </div>
          </div>

          {/* Mobile phone images - shown below content on small screens */}
          <div className="flex lg:hidden w-full justify-center mt-2 mb-8">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left center phone */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/af1e47eed63032038f29431ba0e27c9be486f087?width=479"
                alt="App screenshot"
                className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] left-[0%] top-[18%] z-10"
              />
              {/* Small overlay card - bottom right */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/067b7eae724b69dde322fd5acb7a5e90544f3f1d?width=459"
                alt="Property card"
                className="absolute w-[160px] xl:w-[190px] 2xl:w-[220px] rounded-xl shadow-xl -rotate-[0deg] left-[20%] top-[30%] z-30"
              />

              {/* Right Side Vertical Phones */}
              <div>
                {/* Top Phone */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e5b7590364ee604abf055ae420494e03698afe49?width=479"
                  alt="App screenshot"
                  className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl"
                />

                {/* Bottom Phone */}

                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8937a22567fe31112fd56bbfd8366aec8bc65fa6?width=479"
                  alt="App screenshot"
                  className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl"
                />
                {/* Small overlay card - top left area */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/291ebc707914e5dcc28ddc4b0650156a41bfa573?width=308"
                  alt="Property card"
                  className="absolute w-[120px] xl:w-[140px] 2xl:w-[154px] rounded-xl shadow-xl -rotate-[0deg] right-[25%] top-[35%] z-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
