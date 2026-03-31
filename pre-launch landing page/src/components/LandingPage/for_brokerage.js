export default function ForBrockerage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden font-poppins">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}

function CheckBadge() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
      style={{
        background: "rgba(248,131,121,0.10)",
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.3334 4L6.00008 11.3333L2.66675 8"
          stroke="#F88379"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-24">

        {/* ── LEFT: Content ── */}
        <div className="lg:w-[53%] flex flex-col px-8 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 2xl:pl-48 pb-6">

          {/* Main heading */}
          <h1 className="font-medium leading-[110%]" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            <span className="2xl:whitespace-nowrap" style={{ color: "var(--color-primary)" }}>
              We power your brokerage,
            </span>
          </h1>
          <h1 className="font-medium leading-[110%]" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
            <span style={{ color: "var(--color-text)" }}>
              from listings to leads to teams.
            </span>
          </h1>

          {/* Body copy */}
          <p className="font-normal leading-[150%] mb-4 mt-8" style={{ fontSize: "clamp(15px, 1.2vw, 20px)", color: "var(--color-text)" }}>
            Deal 360 is built <span className="text-[var(--color-primary)] font-bold">for brokerages</span> that want structured visibility,
            performance oversight, and operational control — not just listing exposure.
          </p>

          <p className="font-normal leading-[150%] mb-8" style={{ fontSize: "clamp(15px, 1.2vw, 20px)", color: "var(--color-text)" }}>
            Manage agents, inventory, and performance within one connected platform designed for
            leadership, not micromanagement.
          </p>

          <p className="font-normal leading-[150%] mb-8 mt-6" style={{ fontSize: "clamp(15px, 1.2vw, 20px)", color: "var(--color-text)", fontWeight: 500 }}>
            Early Brokerage Registration
          </p>

          {/* ── RIGHT IMAGE ON MOBILE BEFORE BUTTON ── */}
          <div className="lg:hidden w-full mb-8 flex justify-center relative">
            <picture className="w-full max-w-xs sm:max-w-sm">
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

          {/* Button */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold leading-[120%]"
              style={{
                fontSize: "16px",
                background: "var(--color-primary)",
                boxShadow:
                  "0 0 2px rgba(0,0,0,0.35), 0 0 10px rgba(255,255,255,0.25) inset",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pre - Registration
            </button>
          </div>

          {/* Bottom note */}
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-sm lg:text-base">
              Preferential early-access terms secured prior to wider rollout.
            </p>
          </div>
        </div>

        {/* ── RIGHT: Phone (Desktop Only) ── */}
        <div className="hidden lg:flex lg:w-[45%] relative">
          <div
            className="absolute rounded-full"
            style={{
              width: "min(540px, 75%)",
              aspectRatio: "1",
              background: "#7FFFD4",
              filter: "blur(150px)",
              top: "15%",
              left: "5%",
              opacity: 0.9,
            }}
          />

          <div className="w-full flex items-start justify-end relative">
            <picture className="w-full max-w-none">
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
    </div>
  );
}

/* ─────────────────────────────────────────────
   Feature icon circle wrapper
───────────────────────────────────────────── */
function FeatureIconCircle({ children }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full mx-auto"
      style={{
        width: "86px",
        height: "86px",
        background: "var(--color-primary)",
        boxShadow: "0 0 14.333px 0 rgba(0,0,0,0.10)",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Bottom features section
───────────────────────────────────────────── */
function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Team Management",
      desc: "Track, organize, and oversee agents with role-based permissions.",
      icon: (
        <FeatureIconCircle>
       <svg xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
  <g filter="url(#filter0_d_58891_35639)">
    <rect x="14.3333" y="14.3335" width="86" height="86" rx="43" fill="#F88379"/>
    <path d="M67.0112 63.7283C69.3556 64.9472 71.3656 66.9034 72.8327 69.3495C73.1233 69.8339 73.2686 70.0762 73.3188 70.4115C73.4209 71.0931 72.9705 71.931 72.3572 72.2008C72.0554 72.3335 71.7159 72.3335 71.0369 72.3335M63.7906 56.5539C66.1766 55.3266 67.8163 52.7783 67.8163 49.8335C67.8163 46.8887 66.1766 44.3403 63.7906 43.1131M60.57 49.8335C60.57 53.9756 57.3257 57.3335 53.3237 57.3335C49.3217 57.3335 46.0774 53.9756 46.0774 49.8335C46.0774 45.6914 49.3217 42.3335 53.3237 42.3335C57.3257 42.3335 60.57 45.6914 60.57 49.8335ZM42.147 68.8974C44.7143 64.9077 48.7655 62.3335 53.3237 62.3335C57.8818 62.3335 61.933 64.9077 64.5003 68.8974C65.0628 69.7714 65.344 70.2084 65.3116 70.7667C65.2864 71.2014 65.0111 71.7335 64.6755 71.9961C64.2446 72.3335 63.6518 72.3335 62.4663 72.3335H44.181C42.9956 72.3335 42.4028 72.3335 41.9718 71.9961C41.6363 71.7335 41.361 71.2014 41.3358 70.7667C41.3034 70.2084 41.5846 69.7714 42.147 68.8974Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <filter id="filter0_d_58891_35639" x="-8.10623e-05" y="0.000163078" width="114.667" height="114.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="7.16667"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_58891_35639"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_58891_35639" result="shape"/>
    </filter>
  </defs>
</svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 2,
      title: "Performance Analytics",
      desc: "Clear signals on response times, activity, and transaction performance.",
      icon: (
        /* This icon is a self-contained SVG circle from the Figma */
     <FeatureIconCircle>
<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <path d="M28.4492 34.834H34.8301" stroke="white" stroke-width="2.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.16797 3.16602V30.0827C3.16797 32.711 5.28964 34.8327 7.91797 34.8327H22.1363" stroke="white" stroke-width="2.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M31.6484 12.9523L33.2476 11.084" stroke="white" stroke-width="2.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.91797 26.9158L15.1855 18.4291C16.3888 17.0358 18.5263 16.9408 19.8246 18.2549L21.3288 19.7591C22.6271 21.0575 24.7646 20.9783 25.968 19.5849L27.7888 17.4474" stroke="white" stroke-width="2.375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 3,
      title: "Listing Oversight",
      desc: "Maintain quality and compliance across inventory at scale.",
      icon: (
        <FeatureIconCircle>
       <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
  <path opacity="0.6" d="M18.5363 7.33398C18.3896 7.88398 18.3346 8.48898 18.3346 9.16732V14.6673H9.16797V11.0007C9.16797 8.98398 10.818 7.33398 12.8346 7.33398H18.5363Z" fill="white"/>
  <path d="M18.3346 34.8327V14.666H9.16797C5.5013 14.666 3.66797 16.4993 3.66797 20.166V34.8327C3.66797 38.4993 5.5013 40.3327 9.16797 40.3327H23.8346C20.168 40.3327 18.3346 38.4993 18.3346 34.8327ZM12.3763 31.166C12.3763 31.9177 11.753 32.541 11.0013 32.541C10.2496 32.541 9.6263 31.9177 9.6263 31.166V23.8327C9.6263 23.081 10.2496 22.4577 11.0013 22.4577C11.753 22.4577 12.3763 23.081 12.3763 23.8327V31.166Z" fill="white"/>
  <path opacity="0.4" d="M25.6654 40.3327H23.832C20.1654 40.3327 18.332 38.4994 18.332 34.8327V9.16602C18.332 5.49935 20.1654 3.66602 23.832 3.66602H34.832C38.4987 3.66602 40.332 5.49935 40.332 9.16602V34.8327C40.332 38.4994 38.4987 40.3327 34.832 40.3327H32.9987" fill="white"/>
  <path d="M33.0013 32.9993V40.3327H25.668V32.9993C25.668 31.991 26.493 31.166 27.5013 31.166H31.168C32.1763 31.166 33.0013 31.991 33.0013 32.9993Z" fill="white"/>
  <path d="M25.668 25.2077C24.9163 25.2077 24.293 24.5843 24.293 23.8327V14.666C24.293 13.9143 24.9163 13.291 25.668 13.291C26.4196 13.291 27.043 13.9143 27.043 14.666V23.8327C27.043 24.5843 26.4196 25.2077 25.668 25.2077Z" fill="white"/>
  <path d="M33 25.2077C32.2483 25.2077 31.625 24.5843 31.625 23.8327V14.666C31.625 13.9143 32.2483 13.291 33 13.291C33.7517 13.291 34.375 13.9143 34.375 14.666V23.8327C34.375 24.5843 33.7517 25.2077 33 25.2077Z" fill="white"/>
</svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 4,
      title: "Engagement with Verified Demand",
      desc: "Connect with structured buyer, tenant, and owner intent — not recycled portal enquiries.",
      icon: (
        <FeatureIconCircle>
       <svg xmlns="http://www.w3.org/2000/svg" width="39" height="28" viewBox="0 0 39 28" fill="none">
  <path d="M36.125 2.125L12.75 25.5L2.125 14.875" stroke="white" stroke-width="4.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </FeatureIconCircle>
      ),
    },
    
  ];

  return (
  <div className="w-full mx-auto pb-16 pt-4 lg:pt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
    {features.map((f) => (
      <div key={f.id} className="flex flex-col items-start">
        
        {/* Icon */}
        <div className="mb-6">{f.icon}</div>

        {/* Title */}
        <h3
          className="font-medium leading-[110%] mb-4 min-h-[3em]"
          style={{
            fontSize: "clamp(16px, 1.4vw, 20px)",
            color: "var(--color-text)",
          }}
        >
          {f.title}
        </h3>

        {/* Description */}
        <p
          className="font-normal leading-normal"
          style={{
            fontSize: "14px",
            color: "var(--color-text)",
          }}
        >
          {f.desc}
        </p>

      </div>
    ))}
  </div>
</div>
  );
}
