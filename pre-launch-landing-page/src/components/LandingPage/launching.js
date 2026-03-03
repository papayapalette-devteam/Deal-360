"use client";

export default function LaunchingSection() {
  const buttons = [
    "Submit Requirement",
    "Submit Listing Intent",
    "User Registration",
    "Professional Registration",
    "Partner Registration",
  ];



  return (
  <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
  <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">
    {/* Main Flex Container */}
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[80vh] gap-8 lg:gap-12">
      
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-center items-start gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 max-w-full lg:max-w-[55%]">
        
        {/* Pill / Launching in Dubai */}
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
            Launching in Dubai,UAE
          </span>
        </div>

        {/* Heading + Subtitle */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] text-[var(--color-text)]">
            A better way to navigate <span className="text-[var(--color-primary)]">property</span> in 
            the <span className="text-[var(--color-primary)]">UAE</span>
            <span className="inline-flex w-2 h-2 m-1 rounded-full bg-black text-xs flex items-center justify-center">
              .
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-[var(--color-secondary)] leading-[150%]">
            We helps buyer sellers, agents, brokerages, and investors make cleaner property decisions by aligning 
            real demand with verified supply launching in Dubai and expanding across in UAE.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6">
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
        </div>
      </div>

      {/* Right Column: Phone images + blobs */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
        {/* Teal blur blob */}
        <div className="absolute rounded-full bg-[#7FFFD4] blur-[120px] opacity-60 w-[400px] h-[280px] top-[10%] right-[5%] rotate-[-80deg] pointer-events-none" />

        {/* Phone images container */}
        <div className="relative w-full h-full flex items-center justify-center rotate-[-20deg]">
          {/* Left center phone */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/af1e47eed63032038f29431ba0e27c9be486f087?width=479"
            alt="App screenshot"
            className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] right-[-2%] top-[18%] z-10"
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
              className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl mt-2"
            />
          </div>
        </div>
      </div>

      {/* Mobile phones for small screens */}
      <div className="flex lg:hidden w-full justify-center mt-2 mb-8">
        <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone images container */}
        <div className="relative w-full h-full flex items-center justify-center rotate-[-20deg]">
          {/* Left center phone */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/af1e47eed63032038f29431ba0e27c9be486f087?width=479"
            alt="App screenshot"
            className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] right-[-2%] top-[18%] z-10"
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
              className="w-[140px] sm:w-[160px] md:w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl mt-2"
            />
          </div>
        </div>
        </div>
      </div>

    </div>
  </div>
</div>
  );
}
