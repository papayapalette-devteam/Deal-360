"use client";


export default function ForAgents() {
 


  return (
  <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
  <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 py-0 md:py-0">
    {/* Main Flex Container */}
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch  gap-8 lg:gap-12">
      
      {/* Left Column */}
      <div className=" flex flex-col justify-center items-start gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 max-w-full lg:max-w-[55%]">
        
         {/* Phone images container */}
  <div className="relative w-full h-full flex items-start justify-start">
    {/* Right side phone */}
    <img
      src="/agents.png" // put mobile.png in public folder
      alt="App screenshot"
      className="rounded-2xl  z-10"
      style={{
        width: "647px",
        height: "647px",
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
      For Agents
    </span>
  </div>

  {/* Heading + Subtitle */}
 <div className="flex flex-col gap-6">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-medium leading-[110%] text-[#4B4B4B]">
    <span className="whitespace-nowrap text-[var(--color-text)]">No more cold</span>{" "}
    <span className="text-[var(--color-primary)]">Leads</span>
    <span className="inline-flex w-2 h-2 m-1 rounded-full bg-black text-xs flex items-center justify-center">
      .
    </span>

  </h1>
    <p className="text-[var(--color-text)] sm:text-lg lg:text-xl font-normal text-[#4B4B4B] leading-[150%]">
      Built for Agents Who Want Real Deal Flow.
  </p>

  <p className="text-[var(--color-text-secondary)] sm:text-lg lg:text-xl font-normal text-[#686868] leading-[150%]">
   Deal360 connects agents with live buyer and tenent requirments aligned to their
   expertise and inventory-not recycled contact list or passive exposure packages.
  </p>
</div>
  <p className="text-[var(--color-text-secondary)] sm:text-lg lg:text-xl font-normal text-[#686868] leading-[150%] m-0 p-0">
      Designed for commission-based professionals who want structure,speed and serious
       engagement.
  </p>
  <div className="flex flex-col gap-4 mt-0">


  <div className="flex items-center gap-3">
    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#F883791A] flex items-center justify-center flex-shrink-0">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
   <span className="text-[var(--color-text)] sm:text-lg text-[var(--Colors-for-white-theme-Secondary-text,#565656)] font-medium">
      Intent-Matched Requirments
      <p className="text-[var(--color-text-secondary)] sm:text-sm text-[#4B4B4B] font-medium">Engage with buyers
        and tenents who have clearly defined what they need-aligned to your areas and inventory.
      </p>
    </span>
  </div>

 <div className="flex items-center gap-3">
    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#F883791A] flex items-center justify-center flex-shrink-0">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
    stroke="#292D32"
    strokeWidth="1.5"
    strokeMiterlimit="10"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
   <span className="text-[var(--color-text)] sm:text-lg text-[var(--Colors-for-white-theme-Secondary-text,#565656)] font-medium">
      Early Access to Listing Intent
      <p className="text-[var(--color-text-secondary)] sm:text-sm text-[#4B4B4B] font-medium">Engage with owners 
        planning to sell or rent — building relationships and securing mandates
         before properties formally go live.
      </p>
    </span>
  </div>

   <div className="flex items-center gap-3">
    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#F883791A] flex items-center justify-center flex-shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9.31994 13.2814H12.4099V20.4814C12.4099 21.5414 13.7299 22.0414 14.4299 21.2414L21.9999 12.6414C22.6599 11.8914 22.1299 10.7214 21.1299 10.7214H18.0399V3.52143C18.0399 2.46143 16.7199 1.96143 16.0199 2.76143L8.44994 11.3614C7.79994 12.1114 8.32994 13.2814 9.31994 13.2814Z" fill="#4B4B4B"/>
  <path opacity="0.4" d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z" fill="#4B4B4B"/>
  <path opacity="0.4" d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z" fill="#4B4B4B"/>
  <path opacity="0.4" d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z" fill="#4B4B4B"/>
</svg>
    </div>
   <span className="text-[var(--color-text)] sm:text-lg text-[var(--Colors-for-white-theme-Secondary-text,#565656)] font-medium">
      Structured Lead Engagement
      <p className="text-[var(--color-text-secondary)] sm:text-sm text-[#4B4B4B] font-medium">No bulk exposure games.
        Clear visibility on demand, activity, and engagement.
      </p>
    </span>
  </div>

   <div className="flex items-center gap-3">
    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#F883791A] flex items-center justify-center flex-shrink-0">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z"
    stroke="#4B4B4B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
   <span className="text-[var(--color-text)] sm:text-lg text-[var(--Colors-for-white-theme-Secondary-text,#565656)] font-medium">
      Real-Time Demand Signals
      <p className="text-[var(--color-text-secondary)] sm:text-sm text-[#4B4B4B] font-medium">Receive real-time
         notifications when new buyer and tenant requirements — and seller or 
         landlord Listing Intent™ submissions — enter the system, giving you the opportunity
          to engage and secure mandates early.
      </p>
    </span>
  </div>

   <div className="flex items-center gap-3">
    <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#F883791A] flex items-center justify-center flex-shrink-0">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
    stroke="#4B4B4B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
   <span className="text-[var(--color-text)] sm:text-lg text-[var(--Colors-for-white-theme-Secondary-text,#565656)] font-medium">
      Professional Tools Included
      <p className="text-[var(--color-text-secondary)] sm:text-sm  font-medium">Structured lead management, 
        and performance visibility.
      </p>
    </span>
  </div>


<p className="text-2xl font-medium leading-[110%] text-[var(--color-text)] font-poppins">
  Why It&apos;s Different?
</p>

<div className="flex flex-col gap-4 mt-0">
  {["No recycled databases.", "No competing for cold, duplicated enquiries.", "Deal360 aligns expertise with genuine demand."].map((item) => (
    <div key={item} className="flex items-center gap-3 text-[var(--color-text)]">
      
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
      <span className="text-base sm:text-lg text-[var(--color-text)] font-medium">
        {item}
      </span>
    </div>
  ))}
</div>



</div>
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
      className="font-medium leading-tight text-[var(--color-text)]"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "20px",
      }}
    >
      Early Agent Registration
    </span>
  </div>

  <div className="flex flex-col gap-4 mt-0">
  {["Private & off-market opportunities — Some inventory will never be public."].map((item) => (
    <div key={item} className="flex items-center gap-3">
      
      {/* Circle with tick */}
      <div className="w-8 h-8 rounded-full bg-[#F883791A] flex items-center justify-center">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
    stroke="#F88379"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
      </div>

      {/* Text */}
      <span className="text-base sm:text-lg text-[var(--color-text)] font-medium">
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
