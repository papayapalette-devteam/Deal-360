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

                    <div className="w-full flex flex-col gap-6">

                        {/* Row 1 - 3 Cards (start from left) */}
                        <div className="flex justify-start gap-6">

                            <div className="w-[30%] flex flex-col justify-center items-center text-center px-6 py-10 rounded-[16px] bg-[#E6FFF7] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] gap-4">
                                <div className="w-12 h-12 min-w-[80px] min-h-[80px] rounded-full bg-gradient-to-b from-white via-white to-white flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M26.1828 25.299L21.0161 22.2156C20.1161 21.6823 19.3828 20.399 19.3828 19.349V12.5156" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.66732 10.0026C4.58398 12.7859 3.33398 16.2526 3.33398 20.0026C3.33398 29.2026 10.8007 36.6693 20.0007 36.6693C29.2007 36.6693 36.6673 29.2026 36.6673 20.0026C36.6673 10.8026 29.2007 3.33594 20.0007 3.33594C17.6173 3.33594 15.334 3.83594 13.284 4.7526" stroke="#292D32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-medium leading-[110%] text-[var(--color-text)]">
                                    No payment upfront
                                </h1>

                                <p className="text-sm font-normal leading-[150%] text-[var(--color-text)]">
                                    No payment is taken upfront during registration. Billing begins only once the platform is live and the account is activated on a paid plan.
                                </p>

                            </div>

                            <div className="w-[30%] flex flex-col justify-center items-center text-center px-6 py-10 rounded-[16px] bg-[#FFEFEE] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] gap-4">
                                <div className="w-12 h-12 min-w-[80px] min-h-[80px] rounded-full bg-gradient-to-b from-white via-white to-white flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M20.0004 37.9167C19.6004 37.9167 19.2004 37.8667 18.8171 37.7501C10.1671 35.3667 3.90039 27.2833 3.90039 18.5167V11.2C3.90039 9.3333 5.2504 7.31672 6.98373 6.60005L16.2671 2.8C18.6837 1.81667 21.3337 1.81667 23.7337 2.8L33.0171 6.60005C34.7504 7.31672 36.1004 9.3333 36.1004 11.2V18.5167C36.1004 27.2667 29.817 35.3501 21.1837 37.7501C20.8004 37.8667 20.4004 37.9167 20.0004 37.9167ZM20.0004 4.58335C19.0504 4.58335 18.117 4.76671 17.217 5.13337L7.93375 8.93332C7.13375 9.26665 6.40039 10.35 6.40039 11.2166V18.5333C6.40039 26.1833 11.9004 33.25 19.4837 35.35C19.8171 35.4501 20.1837 35.4501 20.5171 35.35C28.1004 33.25 33.6004 26.1833 33.6004 18.5333V11.2166C33.6004 10.35 32.867 9.26665 32.067 8.93332L22.7838 5.13337C21.8838 4.76671 20.9504 4.58335 20.0004 4.58335Z" fill="#292D32" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-medium leading-[110%] text-[var(--color-text)]">
                                    Limited & verified
                                </h1>

                                <p className="text-sm font-normal leading-[150%] text-[var(--color-text)]">
                                    Early-registration availability is limited and subject to verification. We&apos;re
                                    onboarding a select group of verified professionals first.
                                </p>

                            </div>

                            <div className="w-[30%] flex flex-col justify-center items-center text-center px-6 py-10 rounded-[16px] bg-[#EEFFF9] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] gap-4">
                                <div className="w-12 h-12 min-w-[80px] min-h-[80px] rounded-full bg-gradient-to-b from-white via-white to-white flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M8.66601 17.3307L9.71196 19.4226C10.0659 20.1306 10.2429 20.4846 10.4794 20.7913C10.6892 21.0635 10.9332 21.3075 11.2054 21.5174C11.5122 21.7538 11.8662 21.9308 12.5741 22.2848L14.666 23.3307L12.5741 24.3767C11.8662 24.7307 11.5122 24.9077 11.2054 25.1441C10.9332 25.3539 10.6892 25.5979 10.4794 25.8701C10.2429 26.1769 10.0659 26.5309 9.71196 27.2388L8.66602 29.3307L7.62007 27.2388C7.26609 26.5309 7.08909 26.1769 6.85264 25.8701C6.64283 25.5979 6.39881 25.3539 6.12661 25.1441C5.81986 24.9077 5.46588 24.7307 4.7579 24.3767L2.66602 23.3307L4.7579 22.2848C5.46588 21.9308 5.81986 21.7538 6.12661 21.5174C6.39881 21.3075 6.64283 21.0635 6.85264 20.7913C7.08909 20.4846 7.26609 20.1306 7.62007 19.4226L8.66601 17.3307Z" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.9993 2.66406L21.5708 6.74995C21.9469 7.72759 22.1349 8.21641 22.4272 8.62758C22.6864 8.992 23.0047 9.31039 23.3692 9.56951C23.7803 9.86188 24.2691 10.0499 25.2468 10.4259L29.3327 11.9974L25.2468 13.5689C24.2692 13.9449 23.7803 14.1329 23.3692 14.4253C23.0047 14.6844 22.6864 15.0028 22.4272 15.3672C22.1349 15.7784 21.9469 16.2672 21.5708 17.2448L19.9993 21.3307L18.4279 17.2448C18.0518 16.2672 17.8638 15.7784 17.5715 15.3672C17.3123 15.0028 16.994 14.6844 16.6295 14.4253C16.2184 14.1329 15.7295 13.9449 14.7519 13.5689L10.666 11.9974L14.7519 10.4259C15.7295 10.0499 16.2184 9.86188 16.6295 9.56951C16.994 9.31039 17.3123 8.992 17.5715 8.62758C17.8638 8.21641 18.0518 7.72759 18.4279 6.74995L19.9993 2.66406Z" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-medium leading-[110%] text-[var(--color-text)]">
                                    Shape the platform
                                </h1>

                                <p className="text-sm font-normal leading-[150%] text-[var(--color-text)]">
                                    Your feedback directly influences features and improvements. Early access
                                    to platform features as they are released.
                                </p>

                            </div>
                        </div>

                        {/* Row 2 - 2 Cards (centered) */}
                        <div className="flex justify-center gap-6">
                            <div className="w-[40%] flex flex-col justify-left items-left text-left px-6 py-10 rounded-[16px] bg-[#FFEFEE] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] gap-4">

                                <h1 className="text-2xl font-medium leading-[110%] text-[var(--color-text)]">
                                    What Early Access Means
                                </h1>

                                <p className="text-sm font-normal leading-[150%] text-[var(--color-text)]">
                                    Your feedback directly influences features and improvements. Early access
                                    to platform features as they are released.
                                </p>

                                <div className="flex flex-col gap-4 mt-0">

                                    {["Priority onboarding before public launch", "Early setup of profiles, teams, and inventory before full platform rollout.",
                                        "Priority access to new features ahead of wider release.", "Preferential pricing secured ahead of full platform release."].map((item) => (
                                            <div key={item} className="flex items-center gap-3">

                                                {/* Circle with tick */}
                                                <div className="w-8 h-8 rounded-full  flex items-left justify-left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17L4 12" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>

                                                {/* Text */}
                                                <span className="text-[var(--color-text)] sm:text-lg lg:text-xl font-medium justify-left">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                </div>

                            </div>

                            <div className="w-[40%] flex flex-col justify-left items-left text-left px-6 py-10 rounded-[16px] bg-[#EEFFF9] shadow-[0_0_10px_0_rgba(0,0,0,0.10)] gap-4">

                                <h1 className="text-2xl font-medium leading-[110%] text-[var(--color-text)]">
                                    Why It Matters
                                </h1>

                                <p className="text-sm font-normal leading-[150%] text-[var(--color-text)]">
                                    Not everyone will get the same access. Establishing your presence early
                                    means better positioning when the platform goes public.
                                </p>

                                <div className="flex flex-col gap-4 mt-0">

                                    {["Help shape a platform built for UAE property", "Establish your presence before competitors, Lock in founder-level pricing",
                                        "Build relationships with verified professionals"].map((item) => (
                                            <div key={item} className="flex items-center gap-3">

                                                {/* Circle with tick */}
                                                <div className="w-8 h-8 rounded-full  flex items-left justify-left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17L4 12" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>

                                                {/* Text */}
                                                <span className="text-[var(--color-text)] sm:text-lg lg:text-xl font-medium justify-left">
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
