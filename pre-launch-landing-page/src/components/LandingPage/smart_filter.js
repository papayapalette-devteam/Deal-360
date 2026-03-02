"use client";


export default function SmartFilter() {
 


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
      src="/smartfilter.png" // put mobile.png in public folder
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
            src="/smartfilter.png"
            alt="App screenshot"
            className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] left-[0%] top-[18%] z-10"
          />
        
        </div>
      </div>
 

     
      </div>


<div className="hidden lg:flex flex-1 flex-col 

                justify-center 
                gap-8 lg:gap-12 
                py-4 md:py-8 lg:py-12 
                max-w-full lg:max-w-[55%]">

  {/* Pill - LEFT aligned */}
  <div className="w-full flex justify-start">
    <div
      className="flex items-center gap-2 rounded-full border-4"
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
        Smarter Filters
      </span>
    </div>
  </div>

  {/* Center Content */}
  <div className="flex flex-col gap-6">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] 
                   font-medium 
                   leading-[110%] 
                   text-[var(--color-text)]">

      <span className="whitespace-nowrap">
        Better filters
      </span>

      <span className="inline-block w-2 h-2 ml-2 mr-2 
                       rounded-full 
                       bg-[var(--color-text)] align-middle">
      </span>

      <span className="text-[var(--color-primary)]">
        Less friction
      </span>

      <span className="inline-block w-2 h-2 ml-2 
                       rounded-full 
                       bg-[var(--color-primary)] align-middle">
      </span>

    </h1>

    <p className="text-lg lg:text-xl 
                  font-normal 
                  text-[#686868] 
                  leading-[150%]">
      Results are refined using intent, availability, and verification — 
      reducing irrelevant listings and helping users reach decisions faster.
    </p>
  </div>

</div>



    </div>
  </div>
</div>
  );
}
