"use client";

export default function Pricing() {
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
        <div className="w-full bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden mt-4">
            <div className="w-full px-4 md:px-16 xl:px-32 2xl:px-48 py-32">

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
                            Pricing
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%]">
                        Plans built for
                        <span className="text-[var(--color-primary)]"> UAE property</span> professionals.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] leading-[150%] max-w-2xl">
                        Agents and brokerages may join on Lite (Free) or select a paid plan
                        during early registration. No payment is taken upfront. Rates are
                        fixed for 12 months from activation.

                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[110%]
  text-[var(--color-primary)]
">
                        Early registration is now open
                    </h1>



                </div>
            </div>
        </div>
    );
}
