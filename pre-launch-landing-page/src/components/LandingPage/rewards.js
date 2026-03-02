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
        <div className="w-full bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden mt-4">
            <div className="w-full px-4 md:px-16 xl:px-32 2xl:px-48 py-12">

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
                            Incentives
                        </span>
                    </div>


                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%]">
                        Rewards for early<br></br>

                        <span className="text-[var(--color-primary)]"> adopters.</span>
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
