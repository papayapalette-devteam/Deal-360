"use client"
import { publicAsset } from "@/lib/assetUrl";
import React, { useEffect, useState } from "react";
import { RegistrationModal } from "../registration-forms/RegistrationModal";
import { useTranslations } from "next-intl";

export default function ForAgents() {

  const [registration_modal, setregistration_modal] = useState(false)
   

  return (
    <main className="bg-white min-h-screen overflow-x-hidden font-[Poppins] dark:bg-black">
      <HeroSection setregistration_modal={setregistration_modal}/>
      <FeaturesSection />

      {
        registration_modal && (
          <RegistrationModal open={registration_modal} onOpenChange={setregistration_modal} />
        )
      }
    </main>
  );
}

function CheckBadge() {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
      style={{
        background: "rgba(248,131,121,0.10)",
        boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.3334 4L6.00008 11.3333L2.66675 8"
          stroke="#F88379"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeroSection({ setregistration_modal }: { setregistration_modal: (value: boolean) => void }) {
  const t = useTranslations("forAgents");
  
  return (
    <div className="relative w-full mx-auto font-[Poppins]">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* ── LEFT: Phone mockup – order-2 on mobile (shows after content) ── */}
        <div className="order-2 lg:order-1 lg:w-[47%] relative flex items-center justify-center py-8 lg:py-12 px-4">
          {/* Aquamarine glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "min(540px, 75%)",
              aspectRatio: "1",
              background: "#7FFFD4",
              filter: "blur(150px)",
              top: "15%",
              left: "5%",
              opacity: 0.9,
            }}
          />

          {/* Phone + overlay wrapper */}
          <div
            className="relative flex items-start justify-center"
            style={{ width: "min(580px, 88vw)", maxWidth: "580px" }}
          >
            {/* Coral circle – clips the tall phone */}
            <div
              className="relative rounded-full overflow-hidden flex justify-center"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                background: "#F88379",
                opacity: 0.9,
              }}
            >
              {/* <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0296fc74d67695aeab737d88aacabda6c90f5349?width=833"
                alt="Agent Overview app on phone"
                style={{ width: "64.5%", height: "auto" }}
              /> */}
            </div>

            {/* Overlay image (image 146) – same left/top as phone, outside the overflow-hidden circle */}
            <img
              src={publicAsset("nomorecoldleads.png")}
              alt=""
              className="absolute pointer-events-none"
              style={{ width: "64.5%", top: 0, left: "17.8%" }}
            />
          </div>
        </div>

        {/* ── RIGHT: Content – order-1 on mobile (shows first) ── */}
        <div className="order-1 lg:order-2 lg:w-[53%] flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-16 pt-10 pb-6 lg:py-16">
          {/* Main heading */}
          <h1 className="font-semibold md:font-medium leading-[110%] mb-6 text-[var(--color-text)] dark:text-white"
            style={{ fontSize: "clamp(34px, 4vw, 64px)", }}>
            <span>{t("hero.title1")} </span>
            <span style={{ color: "var(--color-primary)" }}>{t("hero.titleHighlight")}</span>
            <span>.</span>
          </h1>

          {/* Sub-heading */}
          <p className="font-medium leading-[110%] mb-6 text-[var(--color-text)] dark:text-white/70"
            style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            <span style={{ color: "var(--color-primary)" }}>{t("hero.subtitleHighlight")}</span>{" "}
            {t("hero.subtitleRest")}
          </p>

          <p className="font-normal leading-[150%] mb-4 text-[var(--color-text)] dark:text-white/70"
            style={{ fontSize: "clamp(15px, 1.2vw, 20px)", }}>
            {t("hero.desc1")}
          </p>

          <p className="font-normal leading-[150%] mb-8 text-[var(--color-text)] dark:text-white/70"
            style={{ fontSize: "clamp(15px, 1.2vw, 20px)", }}>
            {t("hero.desc2")}
          </p>

          <h2 className="font-medium leading-[110%] mb-5 text-[var(--color-text)] dark:text-white"
            style={{ fontSize: "clamp(20px, 1.8vw, 24px)"}} >
            {t("hero.whyTitle")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex items-center gap-3">
                <CheckBadge />
                <span 
                  className="leading-[110%] dark:text-white/70"
                  style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
                >
                  {t(`hero.points.p${i}`)}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-8 flex justify-center lg:justify-start">
            <button
              onClick={() => setregistration_modal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold"
              style={{ background: "var(--color-primary)" }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path 
    d="M11.8333 12.6667L16 8.5M16 8.5L11.8333 4.33333M16 8.5H6M6 1H5C3.59987 1 2.8998 1 2.36502 1.27248C1.89462 1.51217 1.51217 1.89462 1.27248 2.36502C1 2.8998 1 3.59987 1 5V12C1 13.4001 1 14.1002 1.27248 14.635C1.51217 15.1054 1.89462 15.4878 2.36502 15.7275C2.8998 16 3.59987 16 5 16H6" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  />
</svg>
              {t("hero.button")}
            </button>
          </div>

          {/* <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "rgba(248,131,121,0.10)" }}>
              🔒
            </div>
            <p>{t("hero.note")}</p>
          </div> */}

          {/* Private & off-market note */}
          <div className="flex items-center gap-3">
            <div
              className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
              style={{
                background: "rgba(248,131,121,0.10)",
                boxShadow: "0 0 8px 0 rgba(0,0,0,0.10)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
                  stroke="#F88379"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className="leading-[110%] text-[var(--color-text)] dark:text-white"
              style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}
            >
             {t("hero.note")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Feature icon circle wrapper
───────────────────────────────────────────── */
function FeatureIconCircle({ children }: { children: React.ReactNode }) {

    const t = useTranslations("forAgents");

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center rounded-full mx-auto "
      style={{
        width: "86px",
        height: "86px",
        background: "var(--color-primary)",
        boxShadow: "0 0 14.333px 0 rgba(0,0,0,0.10)",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Bottom features section
───────────────────────────────────────────── */
function FeaturesSection() {

    const t = useTranslations("forAgents");

  const features = [
    {
      id: 1,
      title:  t("features.f1Title"),
      desc:   t("features.f1Desc"),
      icon: (
        <FeatureIconCircle>
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
            <path
              d="M10.7499 7.16683C13.742 4.92725 17.4687 3.5835 21.4999 3.5835C31.3899 3.5835 39.4166 11.6102 39.4166 21.5002C39.4166 31.3902 31.3899 39.4168 21.4999 39.4168C11.6099 39.4168 3.58325 31.3902 3.58325 21.5002C3.58325 18.2572 4.44323 15.2114 5.96614 12.5776L21.4999 21.5002"
              stroke="white"
              strokeWidth="2.6875"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2371 16.0533C11.2875 17.6479 10.75 19.5112 10.75 21.5C10.75 27.4304 15.5696 32.25 21.5 32.25C27.4304 32.25 32.25 27.4304 32.25 21.5C32.25 15.5696 27.4304 10.75 21.5 10.75C19.8696 10.75 18.3109 11.1083 16.9313 11.7713"
              stroke="white"
              strokeWidth="2.6875"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 2,
      title: t("features.f2Title"),
      desc:   t("features.f2Desc"),
      icon: (
        /* This icon is a self-contained SVG circle from the Figma */
        <svg
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 0 14.333px rgba(0,0,0,0.10))",
            flexShrink: 0,
          }}
        >
          <rect width="86" height="86" rx="43" fill="#F88379" />
          <path
            d="M30.9055 45.549C30.198 44.8416 29.8443 43.9915 29.8443 42.9988C29.8443 42.0062 30.198 41.1567 30.9055 40.4504C31.613 39.7441 32.4625 39.3904 33.4539 39.3892C34.4454 39.388 35.2954 39.7417 36.0041 40.4504C36.7128 41.1591 37.066 42.0086 37.0635 42.9988C37.0611 43.9891 36.708 44.8391 36.0041 45.549C35.3002 46.2589 34.4502 46.6121 33.4539 46.6085C32.4577 46.6049 31.6082 46.2517 30.9055 45.549ZM33.4539 53.8277C30.4459 53.8277 27.8891 52.7749 25.7834 50.6693C23.6778 48.5637 22.625 46.0069 22.625 42.9988C22.625 39.9908 23.6778 37.434 25.7834 35.3284C27.8891 33.2227 30.4459 32.1699 33.4539 32.1699C35.4693 32.1699 37.297 32.6662 38.937 33.6589C40.5769 34.6515 41.8776 35.96 42.839 37.5844H57.9543C58.195 37.5844 58.4284 37.6295 58.6546 37.7197C58.8808 37.81 59.0835 37.9453 59.2628 38.1258L62.8725 41.7355C63.0529 41.9159 63.1805 42.1115 63.2551 42.322C63.3297 42.5326 63.3676 42.7582 63.3688 42.9988C63.37 43.2395 63.3321 43.4651 63.2551 43.6756C63.1781 43.8862 63.0505 44.0817 62.8725 44.2622L57.1422 49.9925C56.9918 50.1429 56.8113 50.2632 56.6007 50.3535C56.3901 50.4437 56.1796 50.5039 55.969 50.534C55.7585 50.564 55.5479 50.549 55.3373 50.4888C55.1268 50.4287 54.9313 50.3234 54.7508 50.173L52.4045 48.4133L49.8326 50.3535C49.6822 50.4738 49.5168 50.564 49.3363 50.6242C49.1558 50.6844 48.9754 50.7144 48.7949 50.7144C48.6144 50.7144 48.4261 50.6844 48.23 50.6242C48.0338 50.564 47.8612 50.4738 47.712 50.3535L44.9596 48.4133H42.839C41.8764 50.0376 40.5751 51.3461 38.9351 52.3388C37.2952 53.3314 35.4681 53.8277 33.4539 53.8277ZM33.4539 50.2181C35.1384 50.2181 36.6202 49.7067 37.8992 48.684C39.1782 47.6613 40.0277 46.3678 40.4476 44.8037H46.0876L48.7046 46.6536L52.4045 43.9012L55.6081 46.3829L58.9921 42.9988L57.1873 41.194H40.4476C40.0265 39.6298 39.177 38.3364 37.8992 37.3137C36.6214 36.2909 35.1396 35.7796 33.4539 35.7796C31.4686 35.7796 29.7691 36.4864 28.3553 37.9002C26.9415 39.314 26.2346 41.0135 26.2346 42.9988C26.2346 44.9841 26.9415 46.6837 28.3553 48.0974C29.7691 49.5112 31.4686 50.2181 33.4539 50.2181Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: t("features.f3Title"),
      desc:   t("features.f3Desc"),
      icon: (
        <FeatureIconCircle>
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
            <path
              d="M29.8315 5.93311C30.1687 5.54779 30.8218 5.78549 30.8218 6.30713V20.7065H37.8579C38.3312 20.7065 38.5846 21.2138 38.3452 21.5835L38.2905 21.6558L24.728 37.064L24.7251 37.0669C24.388 37.4521 23.7352 37.2152 23.7349 36.6938V22.2935H16.6987C16.2245 22.2935 15.9409 21.7186 16.2729 21.3354L16.272 21.3345L29.8286 5.93604L29.8315 5.93311Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              opacity="0.4"
              d="M15.2292 8.51025H2.6875C1.95292 8.51025 1.34375 7.90109 1.34375 7.1665C1.34375 6.43192 1.95292 5.82275 2.6875 5.82275H15.2292C15.9637 5.82275 16.5729 6.43192 16.5729 7.1665C16.5729 7.90109 15.9637 8.51025 15.2292 8.51025Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M13.4375 37.1772H2.6875C1.95292 37.1772 1.34375 36.5681 1.34375 35.8335C1.34375 35.0989 1.95292 34.4897 2.6875 34.4897H13.4375C14.1721 34.4897 14.7812 35.0989 14.7812 35.8335C14.7812 36.5681 14.1721 37.1772 13.4375 37.1772Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M8.0625 22.8438H2.6875C1.95292 22.8438 1.34375 22.2346 1.34375 21.5C1.34375 20.7654 1.95292 20.1562 2.6875 20.1562H8.0625C8.79708 20.1562 9.40625 20.7654 9.40625 21.5C9.40625 22.2346 8.79708 22.8438 8.0625 22.8438Z"
              fill="white"
            />
          </svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 4,
      title: t("features.f4Title"),
      desc:   t("features.f4Desc"),
      icon: (
        <FeatureIconCircle>
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
            <path
              d="M28.6672 16.1252V10.7502C28.6672 6.79212 25.4586 3.5835 21.5006 3.5835C17.5425 3.5835 14.3339 6.79212 14.3339 10.7502V16.1252M6.43625 18.5474L5.36125 30.0141C5.0556 33.2744 4.90277 34.9045 5.44375 36.1637C5.91899 37.2697 6.75179 38.1843 7.8087 38.7607C9.01181 39.4168 10.6491 39.4168 13.9237 39.4168H29.0775C32.352 39.4168 33.9893 39.4168 35.1925 38.7607C36.2494 38.1843 37.0822 37.2697 37.5574 36.1637C38.0984 34.9045 37.9456 33.2744 37.6399 30.0141L36.5649 18.5474C36.3068 15.7943 36.1778 14.4178 35.5586 13.377C35.0133 12.4605 34.2077 11.7268 33.2442 11.2695C32.1502 10.7502 30.7676 10.7502 28.0025 10.7502L14.9987 10.7502C12.2335 10.7502 10.8509 10.7502 9.75696 11.2695C8.79348 11.7268 7.98784 12.4605 7.44256 13.377C6.82341 14.4178 6.69436 15.7943 6.43625 18.5474Z"
              stroke="white"
              strokeWidth="3.58333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FeatureIconCircle>
      ),
    },
    {
      id: 5,
      title: t("features.f5Title"),
      desc:   t("features.f5Desc"),
      icon: (
        <FeatureIconCircle>
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
            <path
              d="M16.1249 21.5002L19.7083 25.0835L27.7708 17.021M32.0729 8.95582C32.4418 9.84812 33.15 10.5574 34.0417 10.9277L37.1685 12.2229C38.0608 12.5925 38.7698 13.3015 39.1394 14.1939C39.509 15.0862 39.509 16.0889 39.1394 16.9812L37.8451 20.1059C37.4754 20.9987 37.4749 22.0023 37.8463 22.8947L39.1383 26.0184C39.3215 26.4604 39.4159 26.9341 39.416 27.4126C39.416 27.891 39.3218 28.3648 39.1387 28.8068C38.9557 29.2489 38.6873 29.6505 38.3489 29.9888C38.0105 30.327 37.6088 30.5953 37.1668 30.7783L34.0422 32.0725C33.15 32.4415 32.4407 33.1497 32.0704 34.0414L30.7753 37.1683C30.4057 38.0607 29.6967 38.7697 28.8044 39.1393C27.912 39.5089 26.9094 39.5089 26.0171 39.1393L22.8926 37.845C22.0002 37.4763 20.9979 37.4771 20.1061 37.8471L16.9794 39.1405C16.0875 39.5092 15.0858 39.5089 14.1942 39.1396C13.3026 38.7703 12.594 38.0621 12.2241 37.1707L10.9286 34.0429C10.5596 33.1506 9.85148 32.4413 8.95977 32.071L5.83298 30.7758C4.94104 30.4064 4.23229 29.6978 3.86254 28.806C3.49279 27.9141 3.49229 26.9119 3.86115 26.0197L5.15537 22.8951C5.52408 22.0027 5.52333 21.0004 5.15328 20.1085L3.86091 16.9794C3.67768 16.5374 3.58333 16.0637 3.58325 15.5852C3.58318 15.1068 3.67737 14.633 3.86046 14.1909C4.04355 13.7489 4.31195 13.3473 4.65031 13.009C4.98867 12.6707 5.39037 12.4025 5.83245 12.2195L8.95699 10.9252C9.84848 10.5566 10.5573 9.84931 10.9278 8.9586L12.223 5.8317C12.5926 4.93933 13.3016 4.23035 14.1939 3.86072C15.0862 3.49109 16.0888 3.49109 16.9812 3.86072L20.1057 5.15499C20.9981 5.52371 22.0003 5.52296 22.8921 5.1529L26.0202 3.86273C26.9125 3.4933 27.9149 3.49338 28.807 3.86294C29.6992 4.23249 30.408 4.94127 30.7777 5.83341L32.0733 8.96124L32.0729 8.95582Z"
              stroke="white"
              strokeWidth="3.58333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FeatureIconCircle>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto pb-16 pt-4 lg:pt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
        {features.map((f) => (
          <div key={f.id} className="flex flex-col items-start ">

            {/* Icon */}
            <div className="mb-6">{f.icon}</div>

            {/* Title */}
            <h3
              className="font-medium leading-[110%] mb-4 min-h-[3em] text-[var(--color-text)] dark:text-white"
              style={{
                fontSize: "clamp(16px, 1.4vw, 20px)",
             
              }}
            >
              {f.title}
            </h3>

            {/* Description */}
            <p
              className="font-normal leading-normal text-[var(--color-text)] dark:text-white/70"
              style={{
                fontSize: "clamp(12px, 1vw, 16px)",
              }}
            >
              {f.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
