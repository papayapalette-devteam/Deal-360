"use client";

export default function EarlyAccessProgram() {
    const buttons = [
        "Submit Requirement",
        "Submit Listing Intent",
        "Professional Registration",
        "User Registration",
        "Partner Registration",
    ];

    const benefits = [
        "Priority visibility",
        "Early feature access",
        "Founding-only benefits",
    ];

    return (
        <div className="w-full bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
            <div className="w-full px-4 md:px-16 xl:px-32 2xl:px-48 py-0">

                <div className="flex flex-col justify-center items-center gap-6 text-center w-full">

                    <div
                        className="relative flex items-center gap-2 rounded-full border-4"
                        style={{
                            borderColor: "#83f4ce",
                            padding: "12px 24px",
                            background:
                                "linear-gradient(90deg, rgba(248,131,121,0.10) 0%, rgba(225,255,109,0.10) 50%, rgba(127,255,212,0.10) 100%)",
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                                background:
                                    "linear-gradient(180deg, #C4FFEC 0%, #00C274 50%, #FFB8B8 100%)",
                            }}
                        />


                        <span
                            className="font-medium leading-tight text-[var(--color-primary)]"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "20px",
                            }}
                        >
                            Early Access Program
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%]">
                        Join <span className="text-[var(--color-primary)]">Deal360</span> early.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] leading-[150%] max-w-2xl">
                        Agents and brokerages secure early-registration rates. Buyers, owners, and
                        investors get priority onboarding at launch.

                    </p>

                    <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] leading-[150%] w-full">
                        Deal360 is not a lead portal. It is a transparent property platform built around verified listings, real intent, and better decision-making.


                    </p>



                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 max-w-[900px] mx-auto">
                        {buttons.map((label) => (
                            <button
                                key={label}
                                className="
        flex items-center justify-center gap-2
        px-6 py-4
        rounded-[16px]
        border-4 border-[#79FFD2]
        bg-gradient-to-r from-[#E8FFF7] via-[#FFF3F2] to-[#D5FFF1]
        font-medium text-sm sm:text-base
        hover:opacity-90 transition-opacity
        w-full sm:w-[45%] lg:w-[30%]
      "
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                <div className="w-full flex flex-col gap-10">

  {/* ===== Row 1 ===== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#E6FFF7] shadow-md gap-4">
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M26.1828 25.299L21.0161 22.2156C20.1161 21.6823 19.3828 20.399 19.3828 19.349V12.5156"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66732 10.0026C4.58398 12.7859 3.33398 16.2526 3.33398 20.0026C3.33398 29.2026 10.8007 36.6693 20.0007 36.6693C29.2007 36.6693 36.6673 29.2026 36.6673 20.0026C36.6673 10.8026 29.2007 3.33594 20.0007 3.33594C17.6173 3.33594 15.334 3.83594 13.284 4.7526"
            stroke="#292D32"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="text-xl sm:text-2xl font-medium leading-tight text-[var(--color-text)]">
        No payment upfront
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
        No payment is taken upfront during registration. Billing begins only once the platform is live and the account is activated on a paid plan.
      </p>
    </div>


    {/* Card 2 */}
    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#FFEFEE] shadow-md gap-4">
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20.0004 37.9167C19.6004 37.9167 19.2004 37.8667 18.8171 37.7501C10.1671 35.3667 3.90039 27.2833 3.90039 18.5167V11.2C3.90039 9.3333 5.2504 7.31672 6.98373 6.60005L16.2671 2.8C18.6837 1.81667 21.3337 1.81667 23.7337 2.8L33.0171 6.60005C34.7504 7.31672 36.1004 9.3333 36.1004 11.2V18.5167C36.1004 27.2667 29.817 35.3501 21.1837 37.7501C20.8004 37.8667 20.4004 37.9167 20.0004 37.9167Z" fill="#292D32" />
        </svg>
      </div>

      <h2 className="text-xl sm:text-2xl font-medium leading-tight text-[var(--color-text)]">
        Limited & verified
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
        Early-registration availability is limited and subject to verification. We&apos;re onboarding a select group of verified professionals first.
      </p>
    </div>


    {/* Card 3 */}
    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#EEFFF9] shadow-md gap-4">
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M8.66601 17.3307L9.71196 19.4226..."
            stroke="#4B4B4B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="text-xl sm:text-2xl font-medium leading-tight text-[var(--color-text)]">
        Shape the platform
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text)]">
        Your feedback directly influences features and improvements. Early access to platform features as they are released.
      </p>
    </div>

  </div>


  {/* ===== Row 2 ===== */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Left Card */}
    <div className="flex flex-col text-left p-6 sm:p-8 rounded-2xl bg-[#FFEFEE] shadow-md gap-6">

      <h2 className="text-xl sm:text-2xl font-medium text-[var(--color-text)]">
        What Early Access Means
      </h2>

      <p className="text-sm sm:text-base text-[var(--color-text)]">
        Your feedback directly influences features and improvements. Early access to platform features as they are released.
      </p>

      <div className="flex flex-col gap-4">
        {[
          "Priority onboarding before public launch",
          "Early setup of profiles and inventory",
          "Priority access to new features",
          "Preferential pricing secured"
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm sm:text-base text-[var(--color-text)]">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>


    {/* Right Card */}
    <div className="flex flex-col text-left p-6 sm:p-8 rounded-2xl bg-[#EEFFF9] shadow-md gap-6">

      <h2 className="text-xl sm:text-2xl font-medium text-[var(--color-text)]">
        Why It Matters
      </h2>

      <p className="text-sm sm:text-base text-[var(--color-text)]">
        Establishing your presence early means better positioning when the platform goes public.
      </p>

      <div className="flex flex-col gap-4">
        {[
          "Help shape a platform built for UAE property",
          "Establish your presence before competitors",
          "Build relationships with verified professionals"
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17L4 12" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm sm:text-base text-[var(--color-text)]">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>

  </div>

</div>


                </div>
            </div>
        </div>
    );
}
