import { useNavigate } from "react-router-dom";

export default function VerifyAgent() {

  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex  justify-start px-4 py-0"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="w-full flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {/* Briefcase icon container */}
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 64,
              height: 64,
              background: "#FFF6F5",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3307 26.6641V5.33073C21.3307 4.62349 21.0498 3.94521 20.5497 3.44511C20.0496 2.94501 19.3713 2.66406 18.6641 2.66406H13.3307C12.6235 2.66406 11.9452 2.94501 11.4451 3.44511C10.945 3.94521 10.6641 4.62349 10.6641 5.33073V26.6641" stroke="#F88379" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.6641 8H5.33073C3.85797 8 2.66406 9.19391 2.66406 10.6667V24C2.66406 25.4728 3.85797 26.6667 5.33073 26.6667H26.6641C28.1368 26.6667 29.3307 25.4728 29.3307 24V10.6667C29.3307 9.19391 28.1368 8 26.6641 8Z" stroke="#F88379" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Title & subtitle */}
          <div className="flex flex-col items-center gap-2">
            <h1
              className="text-2xl font-medium text-center"
              style={{ color: "var(--base-black)", lineHeight: "120%" }}
            >
              Verify as Agent
            </h1>
            <p
              className="text-base text-center"
              style={{ color: "var(--text-grey)", lineHeight: "120%" }}
            >
              Choose your preferred verification method
            </p>
          </div>
        </div>

        {/* Cards + Info Section */}
        <div className="flex flex-col gap-6 w-full items-stretch">
          {/* Two verification cards */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* UAE Pass Verification Card */}
            <div
              className="relative flex flex-col rounded-2xl p-6 flex-1 w-full min-w-0"
              style={{
                border: "1px solid #F88379",
                background: "var(--form-bg)",
              }}
            >
              {/* Recommended badge - top right */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 rounded px-2 py-1"
                style={{ background: "#E6E7E6" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M5.7634 1.14745C5.78531 1.10318 5.81916 1.06591 5.86113 1.03986C5.90309 1.01381 5.9515 1 6.0009 1C6.0503 1 6.09871 1.01381 6.14067 1.03986C6.18264 1.06591 6.21649 1.10318 6.2384 1.14745L7.3934 3.48695C7.46949 3.64093 7.58181 3.77415 7.72071 3.87517C7.85962 3.9762 8.02096 4.042 8.1909 4.06695L10.7739 4.44495C10.8228 4.45204 10.8688 4.47268 10.9066 4.50455C10.9445 4.53641 10.9726 4.57822 10.9879 4.62525C11.0032 4.67228 11.005 4.72265 10.9932 4.77066C10.9814 4.81868 10.9563 4.86242 10.9209 4.89695L9.0529 6.71595C8.92971 6.836 8.83754 6.98419 8.78432 7.14776C8.7311 7.31133 8.71843 7.48539 8.7474 7.65495L9.1884 10.2249C9.19704 10.2739 9.19176 10.3242 9.17315 10.3703C9.15454 10.4163 9.12336 10.4563 9.08317 10.4854C9.04298 10.5146 8.99539 10.5319 8.94583 10.5354C8.89628 10.5388 8.84675 10.5283 8.8029 10.5049L6.4939 9.29095C6.34176 9.21106 6.17249 9.16932 6.00065 9.16932C5.82881 9.16932 5.65954 9.21106 5.5074 9.29095L3.1989 10.5049C3.15507 10.5282 3.1056 10.5386 3.05613 10.5351C3.00665 10.5316 2.95916 10.5142 2.91905 10.4851C2.87894 10.4559 2.84782 10.416 2.82923 10.3701C2.81064 10.3241 2.80533 10.2738 2.8139 10.2249L3.2544 7.65545C3.2835 7.48581 3.27089 7.31165 3.21767 7.14797C3.16445 6.98429 3.0722 6.83602 2.9489 6.71595L1.0809 4.89745C1.0452 4.86296 1.0199 4.81914 1.00788 4.77098C0.995866 4.72282 0.997618 4.67226 1.01294 4.62504C1.02826 4.57783 1.05653 4.53587 1.09454 4.50394C1.13254 4.47201 1.17875 4.4514 1.2279 4.44445L3.8104 4.06695C3.98053 4.0422 4.14209 3.97648 4.28119 3.87544C4.42029 3.77441 4.53275 3.64108 4.6089 3.48695L5.7634 1.14745Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="text-xs font-normal" style={{ color: "#000" }}>
                  Recommended</span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-4 mt-4 justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-start justify-center rounded-xl pt-3 px-3"
                    style={{ width: 52, height: 52, background: "#F3F4F6" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M23.3346 15.1698C23.3346 21.0031 19.2513 23.9198 14.398 25.6115C14.1438 25.6976 13.8678 25.6935 13.6163 25.5998C8.7513 23.9198 4.66797 21.0031 4.66797 15.1698V7.00313C4.66797 6.69371 4.79089 6.39696 5.00968 6.17817C5.22847 5.95938 5.52522 5.83646 5.83464 5.83646C8.16797 5.83646 11.0846 4.43646 13.1146 2.66313C13.3618 2.45196 13.6762 2.33594 14.0013 2.33594C14.3264 2.33594 14.6408 2.45196 14.888 2.66313C16.9296 4.44813 19.8346 5.83646 22.168 5.83646C22.4774 5.83646 22.7741 5.95938 22.9929 6.17817C23.2117 6.39696 23.3346 6.69371 23.3346 7.00313V15.1698Z" stroke="#4A5565" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl font-medium" style={{ color: "var(--base-black)", lineHeight: "120%" }}>
                          UAE Pass Verification
                        </span>
                        <div className="flex items-center justify-center px-2 py-0.5 rounded-lg overflow-hidden" style={{ border: "1px solid #C0C3C1", background: "#FFF", height: 22 }}>
                          <span className="text-xs font-normal" style={{ color: "#C0C3C1" }}>Instant</span>
                        </div>
                      </div>
                      <p className="text-base font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
                        Verify instantly using your UAE Pass digital identity. Fastest and most secure method.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      <FeatureItem text="Instant verification (30 seconds)" color="#565656" />
                      <FeatureItem text="Government-backed identity" color="#565656" />
                      <FeatureItem text="No document upload required" color="#565656" />
                    </div>
                  </div>
                </div>

                {/* Button aligned bottom-right */}




                <button
                  onClick={() => navigate("upload-identity")}
                  className=" flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal transition-opacity hover:opacity-90 active:opacity-75 mt-4"
                  style={{
                    background: "var(--form-input-bg)",
                    color: "var(--base-black)",
                    width: "fit-content",
                    height: 40,
                    border: "1px solid rgba(0, 0, 0, 0.10)"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3346 8.66957C13.3346 12.0029 11.0013 13.6696 8.22797 14.6362C8.08274 14.6855 7.92499 14.6831 7.7813 14.6296C5.0013 13.6696 2.66797 12.0029 2.66797 8.66957V4.0029C2.66797 3.82609 2.73821 3.65652 2.86323 3.5315C2.98826 3.40648 3.15782 3.33624 3.33464 3.33624C4.66797 3.33624 6.33464 2.53624 7.49464 1.5229C7.63587 1.40224 7.81554 1.33594 8.0013 1.33594C8.18707 1.33594 8.36673 1.40224 8.50797 1.5229C9.67464 2.5429 11.3346 3.33624 12.668 3.33624C12.8448 3.33624 13.0143 3.40648 13.1394 3.5315C13.2644 3.65652 13.3346 3.82609 13.3346 4.0029V8.66957Z" stroke="#343A40" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Verify with UAE Pass</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="#343A40" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>



              </div>
            </div>

            {/* Manual ID Verification Card */}
            <div
              className="relative flex flex-col rounded-2xl p-6 flex-1 w-full min-w-0"
              style={{
                border: "1px solid #68706A",
                background: "#FFEFEE",
              }}
            >
              {/* Recommended badge - top right */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1 rounded px-2 py-1"
                style={{ background: "#F88379" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M5.7634 1.14745C5.78531 1.10318 5.81916 1.06591 5.86113 1.03986C5.90309 1.01381 5.9515 1 6.0009 1C6.0503 1 6.09871 1.01381 6.14067 1.03986C6.18264 1.06591 6.21649 1.10318 6.2384 1.14745L7.3934 3.48695C7.46949 3.64093 7.58181 3.77415 7.72071 3.87517C7.85962 3.9762 8.02096 4.042 8.1909 4.06695L10.7739 4.44495C10.8228 4.45204 10.8688 4.47268 10.9066 4.50455C10.9445 4.53641 10.9726 4.57822 10.9879 4.62525C11.0032 4.67228 11.005 4.72265 10.9932 4.77066C10.9814 4.81868 10.9563 4.86242 10.9209 4.89695L9.0529 6.71595C8.92971 6.836 8.83754 6.98419 8.78432 7.14776C8.7311 7.31133 8.71843 7.48539 8.7474 7.65495L9.1884 10.2249C9.19704 10.2739 9.19176 10.3242 9.17315 10.3703C9.15454 10.4163 9.12336 10.4563 9.08317 10.4854C9.04298 10.5146 8.99539 10.5319 8.94583 10.5354C8.89628 10.5388 8.84675 10.5283 8.8029 10.5049L6.4939 9.29095C6.34176 9.21106 6.17249 9.16932 6.00065 9.16932C5.82881 9.16932 5.65954 9.21106 5.5074 9.29095L3.1989 10.5049C3.15507 10.5282 3.1056 10.5386 3.05613 10.5351C3.00665 10.5316 2.95916 10.5142 2.91905 10.4851C2.87894 10.4559 2.84782 10.416 2.82923 10.3701C2.81064 10.3241 2.80533 10.2738 2.8139 10.2249L3.2544 7.65545C3.2835 7.48581 3.27089 7.31165 3.21767 7.14797C3.16445 6.98429 3.0722 6.83602 2.9489 6.71595L1.0809 4.89745C1.0452 4.86296 1.0199 4.81914 1.00788 4.77098C0.995866 4.72282 0.997618 4.67226 1.01294 4.62504C1.02826 4.57783 1.05653 4.53587 1.09454 4.50394C1.13254 4.47201 1.17875 4.4514 1.2279 4.44445L3.8104 4.06695C3.98053 4.0422 4.14209 3.97648 4.28119 3.87544C4.42029 3.77441 4.53275 3.64108 4.6089 3.48695L5.7634 1.14745Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="text-xs font-normal" style={{ color: "#000" }}>Recommended</span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 gap-4 mt-4 justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-start justify-center rounded-xl pt-3 px-3"
                    style={{ width: 52, height: 52, background: "var(--form-primary)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M17.5013 2.33594H7.0013C6.38246 2.33594 5.78897 2.58177 5.35139 3.01935C4.9138 3.45694 4.66797 4.05043 4.66797 4.66927V23.3359C4.66797 23.9548 4.9138 24.5483 5.35139 24.9859C5.78897 25.4234 6.38246 25.6693 7.0013 25.6693H21.0013C21.6201 25.6693 22.2136 25.4234 22.6512 24.9859C23.0888 24.5483 23.3346 23.9548 23.3346 23.3359V8.16927L17.5013 2.33594Z" stroke="#F8F9FA" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.332 2.33594V7.0026C16.332 7.62144 16.5779 8.21494 17.0154 8.65252C17.453 9.0901 18.0465 9.33594 18.6654 9.33594H23.332" stroke="#F8F9FA" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.6654 10.5H9.33203" stroke="#F8F9FA" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.6654 15.1641H9.33203" stroke="#F8F9FA" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.6654 19.8359H9.33203" stroke="#F8F9FA" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6 flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl font-medium" style={{ color: "var(--base-black)", lineHeight: "120%" }}>
                          Manual ID Verification
                        </span>
                        <div className="flex items-center justify-center px-2 py-0.5 rounded overflow-hidden" style={{ border: "1px solid #F88379", background: "#F9D6D4", height: 24 }}>
                          <span className="text-xs font-normal" style={{ color: "var(--form-primary)" }}>24-48 hours</span>
                        </div>
                      </div>
                      <p className="text-base font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
                        Verify manually by uploading documents. Reviewed within 24-48 hours.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      <FeatureItem text="Upload Passport or Emirates ID" color="#565656" />
                      <FeatureItem text="Take a selfie for verification" color="#565656" />
                      <FeatureItem text="Review within 24-48 hours" color="#565656" />
                    </div>
                  </div>
                </div>

                {/* Button aligned bottom-right */}
                <button
                  className=" flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-normal transition-opacity hover:opacity-90 active:opacity-75 mt-4"
                  style={{
                    border: "1px solid rgba(0,0,0,0.10)",
                    background: "var(--form-primary)",
                    color: "var(--base-black)",
                    width: "fit-content",
                    height: 40,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3346 5.33333L8.0013 2L4.66797 5.33333" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 2V10" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Upload Documents</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="#343A40" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

function FeatureItem({ text, color }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g clipPath="url(#clip-check)">
          <circle cx="8" cy="8" r="6.667" stroke={color} strokeWidth="1.33333" />
          <path d="M6 7.9974L7.33333 9.33073L10 6.66406" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip-check"><rect width="16" height="16" fill="white" /></clipPath>
        </defs>
      </svg>
      <span className="text-sm font-normal" style={{ color: "var(--text-grey)", lineHeight: "120%" }}>
        {text}
      </span>
    </div>
  );
}
