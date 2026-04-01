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
        <div className="w-full bg-white text-[var(--color-text)] overflow-hidden mt-10 pt-20 ">
            <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">

                <div className="flex flex-col justify-center items-center gap-6 text-center w-full">

        


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
