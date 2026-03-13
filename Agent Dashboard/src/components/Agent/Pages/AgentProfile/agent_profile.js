import { useState } from "react";
import TrustSection from "./trust_section";
import SpecialtiesSection from "./specialist_section";
import AgentCompanyCard from "./agent_companycard";
import ContactCard from "./contact_card";
import { useNavigate } from "react-router-dom";

/* ──────────────── SVG Icons ──────────────── */

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
      stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M12.2514 1.75015C12.5166 1.48493 12.8763 1.33594 13.2514 1.33594C13.6264 1.33594 13.9861 1.48493 14.2514 1.75015C14.5166 2.01537 14.6656 2.37508 14.6656 2.75015C14.6656 3.12522 14.5166 3.48493 14.2514 3.75015L8.2427 9.75948C8.0844 9.91765 7.88883 10.0334 7.67403 10.0962L5.7587 10.6562C5.70133 10.6729 5.64052 10.6739 5.58264 10.6591C5.52475 10.6442 5.47192 10.6141 5.42966 10.5719C5.38741 10.5296 5.35729 10.4768 5.34246 10.4189C5.32763 10.361 5.32863 10.3002 5.34536 10.2428L5.90536 8.32748C5.96838 8.11285 6.08439 7.91752 6.2427 7.75948L12.2514 1.75015Z"
      stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M1.5 4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H5.872C6.732 1.5 7.482 2.086 7.691 2.92L8.796 7.343C8.88554 7.701 8.86746 8.07746 8.74401 8.42522C8.62055 8.77299 8.39723 9.07659 8.102 9.298L6.809 10.268C6.674 10.369 6.645 10.517 6.683 10.62C7.24738 12.1549 8.1386 13.5487 9.29495 14.7051C10.4513 15.8614 11.8451 16.7526 13.38 17.317C13.483 17.355 13.63 17.326 13.732 17.191L14.702 15.898C14.9234 15.6028 15.227 15.3794 15.5748 15.256C15.9225 15.1325 16.299 15.1145 16.657 15.204L21.08 16.309C21.914 16.518 22.5 17.268 22.5 18.129V19.5C22.5 20.2956 22.1839 21.0587 21.6213 21.6213C21.0587 22.1839 20.2956 22.5 19.5 22.5H17.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      fill="black"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.9179 15.0026L12.3823 10.0026M7.62035 10.0026L2.08466 15.0026M1.66797 5.83594L8.47207 10.5988C9.02304 10.9845 9.29853 11.1773 9.59819 11.252C9.86288 11.318 10.1397 11.318 10.4044 11.252C10.7041 11.1773 10.9796 10.9845 11.5305 10.5988L18.3346 5.83594M5.66797 16.6693H14.3346C15.7348 16.6693 16.4348 16.6693 16.9696 16.3968C17.44 16.1571 17.8225 15.7747 18.0622 15.3042C18.3346 14.7695 18.3346 14.0694 18.3346 12.6693V7.33594C18.3346 5.93581 18.3346 5.23574 18.0622 4.70096C17.8225 4.23056 17.44 3.8481 16.9696 3.60842C16.4348 3.33594 15.7348 3.33594 14.3346 3.33594H5.66797C4.26784 3.33594 3.56777 3.33594 3.03299 3.60842C2.56259 3.8481 2.18014 4.23056 1.94045 4.70096C1.66797 5.23574 1.66797 5.93581 1.66797 7.33594V12.6693C1.66797 14.0694 1.66797 14.7695 1.94045 15.3042C2.18014 15.7747 2.56259 16.1571 3.03299 16.3968C3.56777 16.6693 4.26784 16.6693 5.66797 16.6693Z"
      stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const CallIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-call)">
      <path
        d="M11.7094 4.9974C12.5233 5.1562 13.2713 5.55428 13.8577 6.14068C14.4441 6.72707 14.8422 7.47512 15.001 8.28906M11.7094 1.66406C13.4004 1.85193 14.9773 2.60921 16.1812 3.81157C17.3851 5.01393 18.1444 6.5899 18.3344 8.28073M8.5235 11.55C7.52219 10.5486 6.73153 9.41644 6.15153 8.20842C6.10164 8.10451 6.0767 8.05256 6.05753 7.98681C5.98943 7.75319 6.03835 7.4663 6.18003 7.26845C6.21989 7.21277 6.26752 7.16514 6.36278 7.06988C6.65412 6.77854 6.79979 6.63287 6.89503 6.48639C7.25419 5.93398 7.25419 5.22183 6.89503 4.66942C6.79979 4.52294 6.65412 4.37727 6.36278 4.08593L6.20039 3.92354C5.75752 3.48067 5.53609 3.25924 5.29827 3.13895C4.8253 2.89973 4.26675 2.89973 3.79378 3.13895C3.55596 3.25924 3.33453 3.48067 2.89166 3.92354L2.7603 4.0549C2.31895 4.49626 2.09827 4.71693 1.92973 5.01696C1.74271 5.34988 1.60825 5.86696 1.60938 6.24881C1.61041 6.59293 1.67716 6.82812 1.81067 7.29849C2.52814 9.82632 3.88187 12.2116 5.87185 14.2016C7.86184 16.1916 10.2471 17.5453 12.775 18.2628C13.2453 18.3963 13.4805 18.463 13.8246 18.4641C14.2065 18.4652 14.7236 18.3307 15.0565 18.1437C15.3565 17.9752 15.5772 17.7545 16.0186 17.3132L16.1499 17.1818C16.5928 16.7389 16.8142 16.5175 16.9345 16.2797C17.1737 15.8067 17.1737 15.2482 16.9345 14.7752C16.8142 14.5374 16.5928 14.3159 16.1499 13.8731L15.9875 13.7107C15.6962 13.4193 15.5505 13.2737 15.404 13.1784C14.8516 12.8193 14.1395 12.8193 13.5871 13.1784C13.4406 13.2737 13.2949 13.4193 13.0036 13.7107C12.9083 13.8059 12.8607 13.8536 12.805 13.8934C12.6072 14.0351 12.3203 14.084 12.0866 14.0159C12.0209 13.9968 11.9689 13.9718 11.865 13.9219C10.657 13.3419 9.52482 12.5513 8.5235 11.55Z"
        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip-call">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WhatsAppIcon = () => (
  <div className="relative w-[20px] h-[20px] flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#25D366" />
    </svg>
    <svg
      style={{ position: "absolute", top: 4, left: 4 }}
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99609 0C7.58675 0.000686511 9.0795 0.620232 10.2021 1.74414C11.3247 2.86796 11.9429 4.36154 11.9424 5.9502C11.9411 9.22801 9.2746 11.8951 5.99609 11.8965H5.99414C4.99895 11.8961 4.02087 11.6466 3.15234 11.1729L0 12L0.84375 8.91895C0.323441 8.01724 0.0494202 6.99418 0.0498047 5.94629C0.0511091 2.66777 2.7186 7.08699e-05 5.99609 0ZM5.99805 1.00391C3.27196 1.004 1.05479 3.22136 1.05371 5.94629C1.05333 6.88008 1.31492 7.78934 1.80957 8.57617L1.92676 8.76367L1.42773 10.5869L3.29785 10.0967L3.47852 10.2041C4.2373 10.6544 5.10732 10.8922 5.99414 10.8926H5.99609C8.72016 10.8926 10.9374 8.67539 10.9385 5.9502C10.939 4.62966 10.4252 3.38828 9.49219 2.4541C8.55907 1.51989 7.31815 1.00436 5.99805 1.00391ZM4.17578 3.20508C4.26694 3.20965 4.3892 3.17059 4.50977 3.45996C4.63352 3.75731 4.93039 4.48849 4.96777 4.56348C5.00493 4.63785 5.02999 4.72501 4.98047 4.82422C4.93112 4.92299 4.90608 4.98478 4.83203 5.07129C4.75777 5.158 4.67621 5.26543 4.60938 5.33203C4.53504 5.40608 4.45752 5.48618 4.54395 5.63477C4.63059 5.78347 4.92863 6.27013 5.37012 6.66406C5.93747 7.17012 6.4167 7.32698 6.56543 7.40137C6.71395 7.47577 6.80102 7.46339 6.8877 7.36426C6.97478 7.2646 7.25839 6.93085 7.35742 6.78223C7.45646 6.63353 7.55622 6.65845 7.69238 6.70801C7.82978 6.75828 8.55852 7.11708 8.70703 7.19141C8.85546 7.26573 8.95497 7.3024 8.99219 7.36426C9.02932 7.42621 9.02902 7.72417 8.90527 8.07129C8.78132 8.41829 8.1878 8.73471 7.90234 8.77734C7.64642 8.81561 7.32263 8.83181 6.9668 8.71875C6.75111 8.65032 6.47432 8.55919 6.12012 8.40625C4.62965 7.76267 3.65534 6.26131 3.58105 6.16211C3.50583 6.06173 2.97461 5.35552 2.97461 4.625C2.97472 3.89394 3.35895 3.53447 3.49512 3.38574C3.63108 3.23736 3.79159 3.20029 3.89062 3.2002C3.98966 3.2002 4.08922 3.20073 4.17578 3.20508Z"
        fill="#FDFDFD"
      />
    </svg>
  </div>
);

const DropdownChevron = () => (
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4.13259e-05C10 4.13259e-05 6.31758 5 5 5C3.68233 5 0 0 0 0" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────── Bio text ──────────────── */
const BIO_FULL =
  "Natasha Howe won of many years of experience with a strong understanding of the real estate market and expertise for ensuring all clients are always kept well-informed with her strong ability to drive leads growth making her an invaluable asset to an organization. Having worked for both large international corporate firms such as Knight Frank and Savills, to smaller boutiques, as well as launching her own start-up, Natasha has a broad range of experience and a very experienced consultant in her field.";

const BIO_SHORT = BIO_FULL.slice(0, 320) + "...";

/* ──────────────── Main Component ──────────────── */
export default function AgentProfilePage() {
  const [expanded, setExpanded] = useState(false);
  const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-background p-0 sm:p-0 lg:p-0">
      <div className="mx-auto w-full flex flex-col gap-6">

        {/* Edit Profile Button */}
        <div className="flex justify-end">
          <button onClick={()=>navigate('edit-profile')} className="flex items-center gap-[10px] rounded-[8px] bg-[var(--form-secondary)] px-4 py-[10px] hover:opacity-90 transition-opacity">
            <EditIcon />
            <span className="font-manrope text-[16px] font-normal leading-[20px] text-black">
              Edit Profile
            </span>
          </button>
        </div>

        {/* Agent Profile Card */}
        <div className="relative rounded-[10px] border border-black/10 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] overflow-visible">

          {/* Gradient Banner */}
          <div
            className="h-[117px] rounded-t-[9px]"
            style={{ background: "linear-gradient(90deg, rgba(255,159,151,0.60) 0%, rgba(183,255,231,0.50) 100%)" }}
          />

          {/* Avatar – overlaps the banner */}
          <div
            className="absolute rounded-full border-[3.3px] border-white bg-gray-100 overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]"
            style={{
              top: 74,
              left: 36,
              width: 128,
              height: 128,
            }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f12896582d6e7ed45f3e91542a13eba711b2e7dd?width=243"
              alt="Natasha Howe"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-6 pt-5">

            {/* Profile Info Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

              {/* Left: Name + details (with left offset for avatar on desktop) */}
              <div className="flex flex-col gap-[6px] lg:pl-[152px] pt-2 lg:pt-0 mt-16 lg:mt-0">
                {/* On mobile, avatar doesn't overlap, so we push content down with mt-16 */}
                <h1 className="font-sans text-[22px] sm:text-[26px] lg:text-[28px] font-semibold leading-[120%] text-[var(--base-black)]">
                  Natasha Howe
                </h1>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-poppins text-[14px] sm:text-[16px] font-medium leading-[120%] text-[var(--form-secondary)]">
                    Barnes International Realty-Dubai
                  </span>
                  <DropdownChevron />
                </div>

                <span className="font-poppins text-[13px] sm:text-[14px] font-normal leading-[120%] text-[#999]">
                  Senior Property Consultant
                </span>

                <span className="font-poppins text-[14px] sm:text-[16px] font-medium leading-[120%] text-[var(--base-black)]">
                  34 Active Properties
                </span>
              </div>

              {/* Right: Contact Buttons */}
              <div className="flex items-center gap-2 flex-wrap lg:flex-nowrap lg:self-end lg:pb-1 lg:ml-auto">
                <button className="flex items-center gap-2 h-[46px] px-4 sm:px-6 rounded-[8px] bg-[var(--form-secondary)] shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset] hover:opacity-90 transition-opacity">
                  <MailIcon />
                  <span className="font-manrope text-[14px] sm:text-[16px] font-medium leading-[120%] text-black">Email</span>
                </button>
                <button className="flex items-center gap-2 h-[46px] px-4 sm:px-6 rounded-[8px] bg-[var(--form-secondary)] shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset] hover:opacity-90 transition-opacity">
                  <CallIcon />
                  <span className="font-manrope text-[14px] sm:text-[16px] font-medium leading-[120%] text-black">Call</span>
                </button>
                <button className="flex items-center gap-2 h-[46px] px-4 sm:px-6 rounded-[8px] bg-[var(--form-secondary)] shadow-[0_0_10px_0_rgba(255,255,255,0.25)_inset] hover:opacity-90 transition-opacity">
                  <WhatsAppIcon />
                  <span className="font-manrope text-[14px] sm:text-[16px] font-medium leading-[120%] text-black">WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Badge Row */}
            <div className="flex items-center gap-2 mt-4 lg:pl-[152px] flex-wrap">
              <button className="flex items-center justify-center h-[48px] px-[16px] rounded-[8px] bg-[var(--form-secondary)] min-w-[120px] hover:opacity-90 transition-opacity">
                <span className=" text-[14px] font-medium leading-[120%] text-[var(--base-black)]">Agent</span>
              </button>
              <button className="flex items-center justify-center gap-2 h-[48px] px-[16px] rounded-[8px] bg-[rgba(248,131,121,0.60)] min-w-[180px] hover:opacity-90 transition-opacity">
                <PhoneIcon />
                <span className=" text-[14px] font-medium leading-[120%] text-[var(--base-black)]">Responsive</span>
              </button>
            </div>

            {/* Divider */}
            <div className="mt-6 mb-4 h-px bg-black/5" />

            {/* About + Details Section */}
            <div className="flex flex-col gap-6">

              {/* About Natasha */}
              <div className="flex flex-col gap-2">
                <h2 className=" text-[18px] font-medium leading-[120%] text-black">
                  About Natasha
                </h2>
                <p className="font-poppins text-[14px] font-normal leading-[162.5%] text-[#4A5565]">
                  {expanded ? BIO_FULL : BIO_SHORT}{" "}
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="font-arimo text-[16px] font-normal leading-[24px] text-[#00A680] hover:underline"
                  >
                    {expanded ? "Read less" : "Read more"}
                  </button>
                </p>
              </div>

              {/* Bottom 3-column grid: Trust | Specialties | Company Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 items-start">
                <TrustSection />
                <SpecialtiesSection />
                <div className="flex justify-start lg:justify-end">
                  <AgentCompanyCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   <div className="mx-auto max-w-[1400px] flex flex-col gap-6 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 xl:gap-16 items-start">
                <ContactCard />
              </div>
              </div>
    </div>
  );
}
