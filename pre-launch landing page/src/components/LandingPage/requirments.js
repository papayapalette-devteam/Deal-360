"use client";


export default function Requirment() {
 


  return (
  <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
  <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">
    {/* Main Flex Container */}
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch  gap-8 lg:gap-12">
      
      {/* Left Column */}
      <div className=" flex flex-col justify-center items-start gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 max-w-full lg:max-w-[55%]">
        
         {/* Phone images container */}
  <div className="relative w-full h-full flex items-center justify-end">
    {/* Right side phone */}
    <img
      src="/mobile2.png" // put mobile.png in public folder
      alt="App screenshot"
      className="rounded-2xl shadow-2xl z-10"
      style={{
        width: "647px",
        height: "516px",
      }}
    />
  </div>

        {/* Mobile phones for small screens */}
      <div className="flex lg:hidden w-full justify-center mt-2 mb-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/mobile2.png"
            alt="App screenshot"
            className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] left-[0%] top-[18%] z-10"
          />
        
        </div>
      </div>
 

     
      </div>


<div className="hidden lg:flex flex-1 flex-col justify-end items-start gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 max-w-full lg:max-w-[55%]">
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
      Intent First
    </span>
  </div>

  {/* Heading + Subtitle */}
 <div className="flex flex-col gap-6">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] text-[#4B4B4B]">
    <span className="whitespace-nowrap text-[var(--color-text)]">Start with</span>{" "}
    <span className="text-[var(--color-primary)]">Requirments</span>
    <span className="inline-flex w-2 h-2 m-1 rounded-full bg-black text-xs flex items-center justify-center">
      .
    </span>
    Not Endless Searching
    <span className=" text-[var(--color-text)] inline-flex w-2 h-2 m-1 rounded-full bg-black text-xs flex items-center justify-center">
      .
    </span>
  </h1>

  <p className="text-[var(--color-text-secondary)] sm:text-lg lg:text-xl font-normal text-[#686868] leading-[150%]">
    Buyers and tenants define exactly what they&apos;re looking for through structured requirements,
    supported by precision filters designed to reduce noise and surface aligned availability.
  </p>
</div>
  <p className="text-[var(--color-text-secondary)] sm:text-lg lg:text-xl font-normal text-[#686868] leading-[150%] m-0 p-0">
      Deal360 connects real intent with supply-not guesswork.
  </p>
<div className="flex flex-col gap-4 mt-0">
  {["Submit structured requirments", "User precision filters to narrow aligned availability", "Save and refine your criteria"].map((item) => (
    <div key={item} className="flex items-center gap-3">
      
      {/* Circle with tick */}
      <div className="w-8 h-8 rounded-full bg-[#F883791A] flex items-center justify-center">
        <svg
          className="w-4 h-4 text-[#F88379]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Text */}
      <span className="text-[var(--color-text)] sm:text-lg text-[#4B4B4B] font-medium">
        {item}
      </span>
    </div>
  ))}
</div>

</div>



    </div>
  </div>
</div>
  );
}
