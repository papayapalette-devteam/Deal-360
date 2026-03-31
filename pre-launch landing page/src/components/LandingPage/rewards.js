"use client";

export default function Rewards() {
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
        <div className="w-full bg-white text-[var(--color-text)] overflow-hidden mt-6">
            <div className="w-full px-4 md:px-16 xl:px-32 2xl:px-48 py-12">

                <div className="flex flex-col justify-center items-center gap-6 text-center w-full">

             


                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%]">
                        Early access

                        <span className="text-[var(--color-primary)]"> rewards</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] leading-[150%] max-w-2xl">
                       Build your profile. Upload verified inventory. 
                       Invite quality professionals. Be
                        part of the verified foundation of Deal360.

                    </p>

              <p className="text-base sm:text-lg lg:text-lg font-normal text-[var(--color-text-secondary)] leading-[150%] w-full">
                        To support a strong, credible launch, Deal360 rewards agents and 
                        brokerages who help build high-quality, verified inventory.

                    </p>

                </div>
            </div>
        </div>
    );
}
