"use client";

import { useTranslations } from "next-intl";

export default function CustomPlans() {
  const t = useTranslations("customPlans");

  return (
    <div
      className="w-full rounded-2xl bg-white overflow-hidden mb-8 mt-6 dark:bg-black shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
    >
      {/* Header gradient strip */}
      <div
        className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] 2xl:min-h-[135px]
        bg-gradient-to-r from-[#7FFFD4] to-[#E5FFF6] dark:bg-none dark:from-black dark:to-black"
      >
        <svg className="w-[35.306px] h-[31.383px] sm:w-[47px] sm:h-[42px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 47 42" fill="none">
          <path d="M22.6765 41.3711V38.7854H39.7809C40.2118 38.7854 40.5842 38.6527 40.8979 38.3872C41.2134 38.1217 41.3711 37.7735 41.3711 37.3426V19.5323C41.3711 14.6885 39.5904 10.6436 36.029 7.39767C32.466 4.15004 28.2134 2.52623 23.2712 2.52623C18.3291 2.52623 14.0765 4.15004 10.5134 7.39767C6.95207 10.6436 5.17139 14.6885 5.17139 19.5323V34.2113H3.87854C2.82185 34.2113 1.91083 33.8536 1.14546 33.1382C0.381821 32.4246 0 31.5403 0 30.4853V25.6113C0 24.839 0.250812 24.1538 0.752436 23.5557C1.25578 22.9558 1.86687 22.4688 2.58569 22.0948L2.62965 18.9169C2.70894 16.2192 3.32003 13.7197 4.46291 11.4184C5.60578 9.11716 7.10893 7.11411 8.97235 5.40928C10.8358 3.70444 13.0026 2.37712 15.4728 1.42731C17.943 0.477496 20.5425 0.00172846 23.2712 4.66732e-06C26 -0.00171913 28.5978 0.474048 31.0645 1.42731C33.5261 2.37884 35.692 3.70444 37.5624 5.4041C39.4327 7.10204 40.9358 9.10164 42.0718 11.4029C43.2095 13.7025 43.8232 16.202 43.9128 18.9014L43.9568 22.012C44.6428 22.3344 45.2453 22.7679 45.7642 23.3126C46.283 23.8556 46.5425 24.5081 46.5425 25.27V30.8706C46.5425 31.6325 46.283 32.285 45.7642 32.828C45.2453 33.371 44.6428 33.8036 43.9568 34.126V37.3426C43.9568 38.4665 43.55 39.4189 42.7363 40.1998C41.9227 40.9807 40.9376 41.3711 39.7809 41.3711H22.6765ZM15.1134 24.1194C14.7169 23.7574 14.5187 23.3092 14.5187 22.7748C14.5187 22.2404 14.7169 21.7836 15.1134 21.4044C15.5098 21.0251 15.9753 20.8355 16.5096 20.8355C17.044 20.8355 17.5086 21.0251 17.9033 21.4044C18.2981 21.7836 18.4963 22.2404 18.498 22.7748C18.4998 23.3092 18.3015 23.7574 17.9033 24.1194C17.5051 24.4813 17.0397 24.6623 16.5071 24.6623C15.9744 24.6623 15.5098 24.4813 15.1134 24.1194ZM28.6391 24.1194C28.2427 23.7574 28.0444 23.3092 28.0444 22.7748C28.0444 22.2404 28.2427 21.7836 28.6391 21.4044C29.0356 21.0251 29.501 20.8355 30.0354 20.8355C30.5698 20.8355 31.0343 21.0251 31.4291 21.4044C31.8238 21.7836 32.0221 22.2404 32.0238 22.7748C32.0255 23.3092 31.8273 23.7574 31.4291 24.1194C31.0309 24.4813 30.5655 24.6623 30.0328 24.6623C29.5002 24.6623 29.0356 24.4813 28.6391 24.1194ZM9.61102 20.5563C9.37658 16.6846 10.6237 13.3844 13.3525 10.6556C16.0796 7.92688 19.4289 6.56249 23.4005 6.56249C26.7378 6.56249 29.6958 7.56488 32.2746 9.56966C34.8534 11.5744 36.4272 14.2075 36.9961 17.4689C33.5709 17.4259 30.3922 16.5519 27.4601 14.8471C24.5279 13.1422 22.2783 10.772 20.7114 7.7364C20.0874 10.7203 18.7902 13.3353 16.8199 15.5814C14.8479 17.8275 12.4449 19.4858 9.61102 20.5563Z" fill="#4B4B4B"/>
        </svg>

        <h1 
          className="font-medium leading-[110%] text-[var(--color-text)] dark:text-white line-clamp-2"
          style={{ fontSize: "clamp(24px, 2vw, 40px)" }}
        >
          {t("title")}
        </h1>
      </div>

      {/* Content area */}
      <div className="p-4 sm:p-6">
        <div className="rounded-2xl border bg-white overflow-hidden dark:bg-black">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-6 sm:p-8">
            {/* Left: text content */}
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <p 
                className="font-medium text-[var(--color-text)] dark:text-white"
                style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}
              >
                {t("title")}
              </p>
              <p 
                className="font-semibold text-[var(--color-text)] dark:text-white"
                style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
              >
                {t("subtitle")}
              </p>
              <p 
                className="font-normal leading-normal text-[var(--color-text)] dark:text-white/70"
                style={{ fontSize: "clamp(12px, 0.9vw, 14px)" }}
              >
                {t("description")}
              </p>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center gap-4 shrink-0 lg:min-w-[295px]">
              <button 
                className="font-medium text-center hover:opacity-80 transition-opacity text-[var(--color-primary)]"
                style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
              >
                {t("requestButton")}
              </button>
              <button 
                className="w-full font-medium rounded-lg px-8 py-4 hover:brightness-95 transition-all text-[var(--color-text)] bg-[#7FFFD4] box-shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset]"
                style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
              >
                {t("contactButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}