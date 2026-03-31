import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Verification() {

    const navigate=useNavigate()


function VerificationItem({ icon, title, description }) {
  return (
    <div className="flex items-center justify-between w-full px-6 py-5 rounded-[10px] border border-[#E5E7EB] dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        {/* Icon container */}
        <div className="flex-shrink-0 w-9 h-9 rounded-[10px] bg-[#E6E7E6] dark:bg-gray-700 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-poppins font-medium text-base text-[#343A40] dark:text-gray-100 leading-tight">
              {title}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#FFC9C9] bg-[#FEF2F2] text-[#C10007] font-poppins text-xs font-normal">
              Required
            </span>
          </div>
          <span className="font-poppins text-sm font-normal text-[#68706A] dark:text-gray-400 leading-tight">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

const IdentityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3307 17.5V15.8333C13.3307 14.9493 12.9795 14.1014 12.3544 13.4763C11.7293 12.8512 10.8815 12.5 9.9974 12.5H4.9974C4.11334 12.5 3.26549 12.8512 2.64037 13.4763C2.01525 14.1014 1.66406 14.9493 1.66406 15.8333V17.5" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.4974 9.16667C9.33835 9.16667 10.8307 7.67428 10.8307 5.83333C10.8307 3.99238 9.33835 2.5 7.4974 2.5C5.65645 2.5 4.16406 3.99238 4.16406 5.83333C4.16406 7.67428 5.65645 9.16667 7.4974 9.16667Z" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3359 9.16667L15.0026 10.8333L18.3359 7.5" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LicenseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5026 1.66406H5.0026C4.56058 1.66406 4.13665 1.83966 3.82409 2.15222C3.51153 2.46478 3.33594 2.8887 3.33594 3.33073V16.6641C3.33594 17.1061 3.51153 17.53 3.82409 17.8426C4.13665 18.1551 4.56058 18.3307 5.0026 18.3307H15.0026C15.4446 18.3307 15.8686 18.1551 16.1811 17.8426C16.4937 17.53 16.6693 17.1061 16.6693 16.6641V5.83073L12.5026 1.66406Z" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.6641 1.66406V4.9974C11.6641 5.43942 11.8397 5.86335 12.1522 6.17591C12.4648 6.48847 12.8887 6.66406 13.3307 6.66406H16.6641" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 12.5026L9.16667 14.1693L12.5 10.8359" stroke="#68706A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_58104_115305)">
    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#7FFFD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.75 9L8.25 10.5L11.25 7.5" stroke="#7FFFD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_58104_115305">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>
);

const benefits = [
  "List unlimited properties",
  "Access to verified badge on all listings",
  "Connect directly with qualified buyers",
  "Advanced analytics and insights",
  "Priority support",
];

const items = [
  "RERA Registered",
  "256-bit SSL Encryption",
  "UAE Data Protection Compliant",
  "24/7 Support Available",
];

  return (
    <div className="min-h-screen bg-[var(--form-bg)] dark:bg-gray-950 flex flex-col font-poppins">


      <main className="flex-1 w-full max-w-[1540px] mx-auto px-0 sm:px-0 py-6 flex flex-col gap-6">
        {/* Verification Required banner */}
          <div className="w-full bg-white dark:bg-gray-900 rounded-[10px] border border-black/10 dark:border-gray-700 px-6 py-6">
      <div className="flex items-start gap-4">
        {/* Warning circle icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="font-poppins font-semibold text-2xl md:text-[28px] text-[var(--base-black)] dark:text-gray-100 leading-tight">
              Verification Required
            </h1>
            {/* Unverified badge */}
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#FFD6A7] bg-[#FFEDD4] text-[#9F2D00] font-poppins text-xs font-normal">
              Unverified
            </span>
          </div>
          <p className="font-poppins text-base font-normal text-[var(--text-grey)] dark:text-gray-400 leading-snug">
            Complete verification to unlock full platform features
          </p>
        </div>
      </div>
    </div>

        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6 w-full lg:flex-1 min-w-0">
          
             <div className="w-full bg-white dark:bg-gray-900 rounded-[14px] border border-black/10 dark:border-gray-700 p-6">
      <div className="flex flex-col gap-10">
        {/* Card header */}
        <div className="flex items-start gap-4">
          {/* Briefcase icon box */}
          <div className="flex-shrink-0 w-[52px] h-[52px] rounded-[10px] bg-[#FFFAFA] dark:bg-gray-800 flex items-end justify-center pt-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6693 23.3359V4.66927C18.6693 4.05043 18.4234 3.45694 17.9859 3.01935C17.5483 2.58177 16.9548 2.33594 16.3359 2.33594H11.6693C11.0504 2.33594 10.4569 2.58177 10.0194 3.01935C9.58177 3.45694 9.33594 4.05043 9.33594 4.66927V23.3359" stroke="#F88379" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.3359 7H4.66927C3.38061 7 2.33594 8.04467 2.33594 9.33333V21C2.33594 22.2887 3.38061 23.3333 4.66927 23.3333H23.3359C24.6246 23.3333 25.6693 22.2887 25.6693 21V9.33333C25.6693 8.04467 24.6246 7 23.3359 7Z" stroke="#F88379" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-arial font-bold text-xl text-[var(--base-black)] dark:text-gray-100 leading-7">
              Agent Verification
            </h2>
            <p className="font-arial text-base font-normal text-[var(--text-grey)] dark:text-gray-400 leading-6">
              Verify your professional credentials to list properties and connect with clients
            </p>
          </div>
        </div>

        {/* Verification items */}
        <div className="flex flex-col gap-6">
          <VerificationItem
            icon={<IdentityIcon />}
            title="Identity Verification"
            description="UAE Pass or Manual ID Upload"
          />
          <VerificationItem
            icon={<LicenseIcon />}
            title="Professional License"
            description="Upload your agent license"
          />
        </div>

        {/* CTA button */}
        <button
        onClick={()=>navigate("verify-as-agent")}
          className="w-full flex items-center justify-center gap-2 h-12 rounded-lg font-poppins text-sm font-normal text-[#343A40] dark:text-gray-900 transition-opacity hover:opacity-90 active:opacity-80"
          style={{ background: "var(--form-secondary)", color: "var(--base-black)" }}
        >
          Start Verification Process
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

   <div className="w-full rounded-[14px] border border-[#F88379] bg-[#FFF9F9] dark:bg-red-950/20 p-6">
      <div className="flex items-start gap-4">
        {/* Shield icon */}
        <svg
          width="20"
          height="24"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 mt-0.5"
        >
          <path
            d="M16 10.9986C16 15.9978 12.5 18.4974 8.34 19.9471C8.12216 20.0209 7.88554 20.0174 7.67 19.9371C3.5 18.4974 0 15.9978 0 10.9986V3.99978C0 3.73461 0.105357 3.4803 0.292893 3.29279C0.48043 3.10529 0.734784 2.99995 1 2.99995C3 2.99995 5.5 1.80015 7.24 0.280403C7.45185 0.0994316 7.72135 0 8 0C8.27865 0 8.54815 0.0994316 8.76 0.280403C10.51 1.81015 13 2.99995 15 2.99995C15.2652 2.99995 15.5196 3.10529 15.7071 3.29279C15.8946 3.4803 16 3.73461 16 3.99978V10.9986Z"
            stroke="#F88379"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex flex-col gap-2">
          <h3 className="font-poppins font-bold text-base text-[var(--base-black)] dark:text-gray-100 leading-snug">
            Your Data is Secure
          </h3>
          <p className="font-poppins text-sm font-normal text-[var(--text-grey)] dark:text-gray-400 leading-snug">
            All documents are encrypted and stored securely. We use bank-level security standards
            and comply with UAE data protection regulations. Your information is never shared
            without your consent.
          </p>
        </div>
      </div>
    </div>



          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6 w-full lg:w-[380px] xl:w-[424px] flex-shrink-0">
          
              <div className="w-full bg-white dark:bg-gray-900 rounded-[14px] p-6 flex flex-col gap-6">
      <h3 className="font-poppins font-bold text-lg text-[var(--base-black)] dark:text-gray-100 leading-tight">
        Verification Benefits
      </h3>
      <div className="flex flex-col gap-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-3">
            <IdentityIcon />
            <span className="font-arial text-sm font-normal text-[var(--text-grey)] dark:text-gray-400 leading-5">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>


        <div
      className="w-full rounded-[14px] p-6 flex flex-col gap-8"
      style={{ background: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)" }}
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-poppins font-bold text-lg text-[#F8F9FA] leading-tight">
          Need Help?
        </h3>
        <p className="font-poppins text-sm font-normal text-[#E6E7E6] leading-tight">
          Our verification support team is here to assist you through the process.
        </p>
      </div>

      <button className="w-full flex items-center justify-center h-10 rounded-lg bg-[#ECEEF2] font-poppins text-sm font-normal text-black hover:bg-gray-200 transition-colors">
        Contact Support
      </button>
    </div>


        <div className="w-full bg-white dark:bg-gray-900 rounded-[14px] p-6 flex flex-col gap-6">
      <h3 className="font-poppins font-bold text-lg text-[var(--base-black)] dark:text-gray-100 leading-tight">
        Trusted Platform
      </h3>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckIcon />
            <span className="font-arial text-sm font-normal text-[var(--text-grey)] dark:text-gray-400 leading-5">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>

          </div>
        </div>
      </main>
    </div>
  );
}
