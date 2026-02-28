"use client";


export default function Verification() {


  return (
  <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
  <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">
    {/* Main Flex Container */}
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch  gap-8 lg:gap-12">
      
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
            Verification by Design
          </span>
        </div>

        {/* Heading + Subtitle */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] text-[var(--color-text)]">
            Verification <span className="text-[var(--color-primary)]">filters</span> out the <span className="text-[var(--color-primary)]">noise</span>
            <span className="inline-flex w-2 h-2 m-1 rounded-full bg-black text-xs flex items-center justify-center">
              .
            </span>
             

          </h1>

          <p className="text-[var(--color-text-secondary)] sm:text-lg lg:text-xl font-normal text-[#686868] leading-[150%]">
            Agents,brokerages, and listings are verified so users engage with real
            professionals and real availability-not duplicated or misleading data.
          </p>
  <div className="flex flex-col gap-4 mt-0">

  {/* 1️⃣ Verified Client */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#F883791A] flex items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <span className="text-[var(--color-text)] sm:text-lg text-[#4B4B4B] font-medium">
      Verified Agents
    </span>
  </div>

  {/* 2️⃣ Checked Listings */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#F883791A] flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="#4B4B4B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-[var(--color-text)] sm:text-lg text-[#4B4B4B] font-medium">
      Checked Listings
    </span>
  </div>

  {/* 3️⃣ Transparent Pricing */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[#F883791A] flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.02992 14.0019C8.63992 13.4319 8.41992 12.7419 8.41992 12.0019C8.41992 10.0219 10.0199 8.42188 11.9999 8.42188C13.9799 8.42188 15.5799 10.0219 15.5799 12.0019"
          stroke="#4B4B4B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5598 5.57656C15.8698 4.37656 13.9698 3.72656 11.9998 3.72656C8.46984 3.72656 5.17984 5.80656 2.88984 9.40656C1.98984 10.8166 1.98984 13.1866 2.88984 14.5966C5.17984 18.1966 8.46984 20.2766 11.9998 20.2766C15.5298 20.2766 18.8198 18.1966 21.1098 14.5966C22.0098 13.1866 22.0098 10.8166 21.1098 9.40656"
          stroke="#4B4B4B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-[var(--color-text)] sm:text-lg text-[#4B4B4B] font-medium">
      Transparent Pricing
    </span>
  </div>

</div>
        </div>

     
      </div>

{/* Right Column: Phone images + blobs */}
<div className="hidden lg:flex flex-1 relative items-center justify-end min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px]">
  
  {/* Phone images container */}
  <div className="relative w-full h-full flex items-center justify-end">
    
    <img
      src="/ZenBook.png"
      alt="App screenshot"
      className="rounded-2xl  z-10 w-full max-w-[835px] h-auto"
    />

  </div>
</div>

      {/* Mobile phones for small screens */}
      <div className="flex lg:hidden w-full justify-center mt-2 mb-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/ZenBook.png"
            alt="App screenshot"
            className="absolute w-[180px] xl:w-[210px] 2xl:w-[239px] rounded-2xl shadow-2xl -rotate-[0deg] left-[0%] top-[18%] z-10"
          />
        
        </div>
      </div>

    </div>
  </div>
</div>
  );
}
