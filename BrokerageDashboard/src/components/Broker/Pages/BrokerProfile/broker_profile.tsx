import { useState } from "react";
import { useNavigate } from "react-router-dom";

// --- SVG Icons ---

function EditIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.276 9.31386L9.03733 2.55252L8.09467 1.60986L1.33333 8.37119V9.31386H2.276ZM2.82867 10.6472H0V7.81852L7.62333 0.195191C7.74835 0.0702102 7.91789 0 8.09467 0C8.27144 0 8.44098 0.0702102 8.566 0.195191L10.452 2.08119C10.577 2.20621 10.6472 2.37575 10.6472 2.55252C10.6472 2.7293 10.577 2.89884 10.452 3.02386L2.82867 10.6472ZM0 11.9805H12V13.3139H0V11.9805Z" fill="#101010" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#email-clip)">
        <path d="M17.9179 15.0026L12.3823 10.0026M7.62035 10.0026L2.08466 15.0026M1.66797 5.83594L8.47207 10.5988C9.02304 10.9845 9.29853 11.1773 9.59819 11.252C9.86288 11.318 10.1397 11.318 10.4044 11.252C10.7041 11.1773 10.9796 10.9845 11.5305 10.5988L18.3346 5.83594M5.66797 16.6693H14.3346C15.7348 16.6693 16.4348 16.6693 16.9696 16.3968C17.44 16.1571 17.8225 15.7747 18.0622 15.3042C18.3346 14.7695 18.3346 14.0694 18.3346 12.6693V7.33594C18.3346 5.93581 18.3346 5.23574 18.0622 4.70096C17.8225 4.23056 17.44 3.8481 16.9696 3.60842C16.4348 3.33594 15.7348 3.33594 14.3346 3.33594H5.66797C4.26784 3.33594 3.56777 3.33594 3.03299 3.60842C2.56259 3.8481 2.18014 4.23056 1.94045 4.70096C1.66797 5.23574 1.66797 5.93581 1.66797 7.33594V12.6693C1.66797 14.0694 1.66797 14.7695 1.94045 15.3042C2.18014 15.7747 2.56259 16.1571 3.03299 16.3968C3.56777 16.6693 4.26784 16.6693 5.66797 16.6693Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="email-clip"><rect width="20" height="20" fill="white" /></clipPath>
      </defs>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#phone-clip)">
        <path d="M11.7094 4.9974C12.5233 5.1562 13.2713 5.55428 13.8577 6.14068C14.4441 6.72707 14.8422 7.47512 15.001 8.28906M11.7094 1.66406C13.4004 1.85193 14.9773 2.60921 16.1812 3.81157C17.3851 5.01393 18.1444 6.5899 18.3344 8.28073M8.5235 11.55C7.52219 10.5486 6.73153 9.41644 6.15153 8.20842C6.10164 8.10451 6.0767 8.05256 6.05753 7.98681C5.98943 7.75319 6.03835 7.4663 6.18003 7.26845C6.21989 7.21277 6.26752 7.16514 6.36278 7.06988C6.65412 6.77854 6.79979 6.63287 6.89503 6.48639C7.25419 5.93398 7.25419 5.22183 6.89503 4.66942C6.79979 4.52294 6.65412 4.37727 6.36278 4.08593L6.20039 3.92354C5.75752 3.48067 5.53609 3.25924 5.29827 3.13895C4.8253 2.89973 4.26675 2.89973 3.79378 3.13895C3.55596 3.25924 3.33453 3.48067 2.89166 3.92354L2.7603 4.0549C2.31895 4.49626 2.09827 4.71693 1.92973 5.01696C1.74271 5.34988 1.60825 5.86696 1.60938 6.24881C1.61041 6.59293 1.67716 6.82812 1.81067 7.29849C2.52814 9.82632 3.88187 12.2116 5.87185 14.2016C7.86184 16.1916 10.2471 17.5453 12.775 18.2628C13.2453 18.3963 13.4805 18.463 13.8246 18.4641C14.2065 18.4652 14.7236 18.3307 15.0565 18.1437C15.3565 17.9752 15.5772 17.7545 16.0186 17.3132L16.1499 17.1818C16.5928 16.7389 16.8142 16.5175 16.9345 16.2797C17.1737 15.8067 17.1737 15.2482 16.9345 14.7752C16.8142 14.5374 16.5928 14.3159 16.1499 13.8731L15.9875 13.7107C15.6962 13.4193 15.5505 13.2737 15.404 13.1784C14.8516 12.8193 14.1395 12.8193 13.5871 13.1784C13.4406 13.2737 13.2949 13.4193 13.0036 13.7107C12.9083 13.8059 12.8607 13.8536 12.805 13.8934C12.6072 14.0351 12.3203 14.084 12.0866 14.0159C12.0209 13.9968 11.9689 13.9718 11.865 13.9219C10.657 13.3419 9.52482 12.5513 8.5235 11.55Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="phone-clip"><rect width="20" height="20" fill="white" /></clipPath>
      </defs>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <div className="relative w-5 h-5 flex-shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#25D366" />
      </svg>
      <svg className="absolute top-1 left-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99609 0C7.58675 0.000686511 9.0795 0.620232 10.2021 1.74414C11.3247 2.86796 11.9429 4.36154 11.9424 5.9502C11.9411 9.22801 9.2746 11.8951 5.99609 11.8965H5.99414C4.99895 11.8961 4.02087 11.6466 3.15234 11.1729L0 12L0.84375 8.91895C0.323441 8.01724 0.0494202 6.99418 0.0498047 5.94629C0.0511091 2.66777 2.7186 7.08699e-05 5.99609 0ZM5.99805 1.00391C3.27196 1.004 1.05479 3.22136 1.05371 5.94629C1.05333 6.88008 1.31492 7.78934 1.80957 8.57617L1.92676 8.76367L1.42773 10.5869L3.29785 10.0967L3.47852 10.2041C4.2373 10.6544 5.10732 10.8922 5.99414 10.8926H5.99609C8.72016 10.8926 10.9374 8.67539 10.9385 5.9502C10.939 4.62966 10.4252 3.38828 9.49219 2.4541C8.55907 1.51989 7.31815 1.00436 5.99805 1.00391ZM4.17578 3.20508C4.26694 3.20965 4.3892 3.17059 4.50977 3.45996C4.63352 3.75731 4.93039 4.48849 4.96777 4.56348C5.00493 4.63785 5.02999 4.72501 4.98047 4.82422C4.93112 4.92299 4.90608 4.98478 4.83203 5.07129C4.75777 5.158 4.67621 5.26543 4.60938 5.33203C4.53504 5.40608 4.45752 5.48618 4.54395 5.63477C4.63059 5.78347 4.92863 6.27013 5.37012 6.66406C5.93747 7.17012 6.4167 7.32698 6.56543 7.40137C6.71395 7.47577 6.80102 7.46339 6.8877 7.36426C6.97478 7.2646 7.25839 6.93085 7.35742 6.78223C7.45646 6.63353 7.55622 6.65845 7.69238 6.70801C7.82978 6.75828 8.55852 7.11708 8.70703 7.19141C8.85546 7.26573 8.95497 7.3024 8.99219 7.36426C9.02932 7.42621 9.02902 7.72417 8.90527 8.07129C8.78132 8.41829 8.1878 8.73471 7.90234 8.77734C7.64642 8.81561 7.32263 8.83181 6.9668 8.71875C6.75111 8.65032 6.47432 8.55919 6.12012 8.40625C4.62965 7.76267 3.65534 6.26131 3.58105 6.16211C3.50583 6.06173 2.97461 5.35552 2.97461 4.625C2.97472 3.89394 3.35895 3.53447 3.49512 3.38574C3.63108 3.23736 3.79159 3.20029 3.89062 3.2002C3.98966 3.2002 4.08922 3.20073 4.17578 3.20508Z" fill="#FDFDFD" />
      </svg>
    </div>
  );
}

function LocationPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/ea71e320c726c81944264da1f21588620f831121?width=64"
      alt="Award"
      className="w-8 h-[2.4375rem] flex-shrink-0"
    />
  );
}

// --- Badge components ---

function MintBadge({ children }) {
  return (
    <span className="h-8 px-3 flex items-center justify-center rounded-lg  font-poppins font-normal text-sm text-[#0F172A] whitespace-nowrap" style={{border:"1px solid var(--form-secondary)"}}>
      {children}
    </span>
  );
}

function CoralLocationBadge({ children }) {
  return (
    <div className="flex items-center gap-2 px-6 py-2 rounded-lg  font-poppins font-normal text-sm text-[#0F172A] whitespace-nowrap" style={{border:"1px solid var(--form-primary)"}}>
      <LocationPinIcon />
      {children}
    </div>
  );
}

// --- Award Card ---

function AwardCard({ title }) {
  return (
    <div
      className="flex-1   px-6 flex items-center rounded-[0.25rem]"
      style={{ background: "rgba(52, 58, 64, 0.80)" }}
    >
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <AwardIcon />
          <span className="font-manrope font-semibold text-2xl leading-[110%] text-[var(--form-primary)]">
            Deal 360
          </span>
        </div>
        <div className="w-px h-[3.4375rem] bg-white flex-shrink-0" />
        <span className="font-manrope font-semibold text-base leading-[110%] text-[#F7F8F8] whitespace-pre-line w-[3.5625rem]">
          {"AWARD\n2025"}
        </span>
        <div className="w-px h-[3.4375rem] bg-white flex-shrink-0" />
        <span className="font-manrope font-semibold text-base leading-[110%] text-[#F7F8F8]">
          {title}
        </span>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function BrokerProfile() {

  const navigate=useNavigate()

  const [showFullAbout, setShowFullAbout] = useState(false);

  const coverageAreas = [
    "Tilal Al Ghaf",
    "The Greens",
    "Damac Hills",
    "Damac Lagoons",
    "Town Square",
    "Arjan",
    "Downtown Dubai",
    "Palm Jumeirah",
  ];

  const propertyBadges = ["161 Sale", "69 Rent", "230 Active Listings"];

  const expertiseRows = [
    ["Sales", "Rentals"],
    ["Commercial", "Residential"],
    ["Off-Plan", "Secondary Market"],
  ];

  const awards = [
    { title: "WINNER" },
    { title: "1st RUNNER UP" },
    { title: "1st RUNNER UP" },
  ];

  return (
    <div className=" mx-auto px-2 sm:px-2 py-2 flex flex-col items-end gap-6">

      {/* Edit Profile Button */}
      <button onClick={()=>navigate("edit-profile")} className="flex items-center gap-2 px-10 py-2.5 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-sm text-black flex-shrink-0">
        <EditIcon />
        Edit Profile
      </button>

      {/* Content Area */}
      <div className="flex flex-col gap-6 w-full">

        {/* ── Profile Card ── */}
        <div className="px-4 rounded-lg flex flex-col gap-9 bg-[#FAFAFA]">
          <div className="p-0 rounded-lg bg-white flex flex-col gap-9">

            {/* Header: Logo + Company Name */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/33ea0f9dcd13c1fb1044d64c6ce9453e05d493fa?width=496"
                alt="Barnes International Realty"
                className="w-[12.5rem] h-[9.625rem] sm:w-[15.5rem] sm:h-[11.9375rem] rounded-lg object-contain flex-shrink-0"
                style={{
                  border: "1px solid var(--form-primary)",
                  boxShadow: "0 4px 4px 0 rgba(0,0,0,0.10)",
                }}
              />
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[2.25rem] text-black leading-[120%]">
                Barnes International Realty-Dubai
              </h1>
            </div>

            {/* Info Block */}
            <div className="flex flex-col gap-3.5">

              {/* RERA & Address */}
              <div className="flex flex-col gap-2">
                <span className="font-poppins font-medium text-base leading-[120%] text-[#0A0A0A]">
                  RERA ORN ID
                </span>
                <span className="font-poppins font-normal text-sm leading-[120%] text-[#616161]">
                  2982398246
                </span>
                <span className="font-poppins font-medium text-base leading-[120%] text-black">
                  Office Address
                </span>
                <span className="font-poppins font-normal text-sm leading-[120%] text-[#616161]">
                  Office 305, Building Onyx Tower 2, The Greens, n/a, Dubai,
                </span>
              </div>

              {/* Properties + Expertise (left) / Buttons + Coverage (right) */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

                {/* Left Column */}
                <div className="flex flex-col gap-2.5 flex-1">

                  {/* Properties */}
                  <div className="flex flex-col gap-1">
                    <span className="font-poppins font-medium text-xs leading-[120%] text-[var(--form-text)]">
                      Properties
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {propertyBadges.map((b) => (
                        <MintBadge key={b}>{b}</MintBadge>
                      ))}
                    </div>
                  </div>

                  {/* Active Agents */}
                  <div className="flex flex-col gap-1">
                    <span className="font-poppins font-medium text-xs leading-[120%] text-[var(--form-text)]">
                      Active Agents
                    </span>
                    <div className="flex items-center gap-2">
                      <MintBadge>28 Agent</MintBadge>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="flex flex-col gap-2">
                    <span className="font-poppins font-medium text-xs leading-[120%] text-[var(--form-text)]">
                      Expertise
                    </span>
                    <div className="flex flex-col gap-2">
                      {expertiseRows.map((row, i) => (
                        <div key={i} className="flex flex-wrap gap-2">
                          {row.map((label) => (
                            <MintBadge key={label}>{label}</MintBadge>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Action Buttons + Coverage Area */}
                <div className="flex flex-col gap-6 w-full lg:w-[30.0625rem]">

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                    <button
                      className="flex-1 min-w-[6.25rem] h-[2.875rem] px-6 flex items-center justify-center gap-2 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-base text-black"
                      style={{ boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset" }}
                    >
                      <EmailIcon />
                      Email
                    </button>
                    <button
                      className="flex-1 min-w-[6.25rem] h-[2.875rem] px-6 flex items-center justify-center gap-2 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-base text-black"
                      style={{ boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset" }}
                    >
                      <PhoneIcon />
                      Call
                    </button>
                    <button
                      className="flex-1 min-w-[7.5rem] h-[2.875rem] px-6 flex items-center justify-center gap-2 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-base text-black"
                      style={{ boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset" }}
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </button>
                  </div>

                  {/* Coverage Area */}
                  <div className="flex flex-col gap-2">
                    <span className="font-poppins font-medium text-xs leading-[120%] text-[var(--form-text)]">
                      Coverage Area
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {coverageAreas.map((area) => (
                        <CoralLocationBadge key={area}>{area}</CoralLocationBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Awards Section ── */}
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-xl text-black leading-[120%]">
            Awards
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            {awards.map((award, i) => (
              <AwardCard key={i} title={award.title} />
            ))}
          </div>
        </div>

        {/* ── About Section ── */}
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-xl text-black leading-[120%]">
            ABOUT Barnes International Realty-Dubai
          </h2>
          <div className="font-poppins text-base text-justify leading-[120%]">

            {/* About heading */}
            <p className="font-medium text-[1.125rem] text-[#191818] mb-2">About</p>

            {/* Property Types */}
            <p className="mb-3">
              <span className="font-medium text-[#191818]">Property Types: </span>
              <span className="font-normal text-[var(--base-black)]">Hotel Apartments, Townhouses, Penthouses, Villas, Apartments</span>
            </p>

            {/* Service Areas */}
            <p className="mb-3">
              <span className="font-medium text-[#191818]">Service Areas: </span>
              <span className="font-normal text-[var(--base-black)]">
                Arjan, The Greens, DAMAC Hills, Town Square, DAMAC Lagoons, Downtown Dubai, Palm Jumeirah, Dubai Marina, Mohammed Bin Rashid City, Business Bay, Sobha Hartland, Jumeirah Park, Jumeirah Beach Residence (JBR), The Lakes, Dubai Creek Harbour, Dubai Harbour, Meydan City, Nad Al Sheba, Al Jaddaf, Jumeirah Village Circle (JVC), The Valley by Emaar, World Trade Centre, Tilal Al Ghaf, Za'abeel, Sobha Hartland 2, Bur Dubai, Dubai Hills Estate, Umm Suqeim, Al Sufouh, Dubai Land Residence Complex, Al Wasl, Al Barari, Athlon by Aldar, Mudon, Jumeirah Lake Towers (JLT), Dubai South, Al Furjan, Arabian Ranches 3, Haven by Aldar, Dubai Sports City, Dubai Production City (IMPZ), Bluewaters Island, Dubai Design District, The Acres, Dubai Islands, Motor City, Dubailand
              </span>
              {!showFullAbout && (
                <span
                  className="font-normal text-[var(--base-black)] cursor-pointer ml-1"
                  onClick={() => setShowFullAbout(true)}
                >
                  See less areas.
                </span>
              )}
            </p>

            {/* Properties */}
            <p className="mb-3">
              <span className="font-medium text-[#191818]">Properties: </span>
              <span className="font-normal text-[var(--base-black)]">For Sale(161), For Rent(69)</span>
            </p>

            {/* Description */}
            <p>
              <span className="font-normal text-[#191818]">Description: </span>
              <span className="font-normal text-[var(--base-black)]">
                Barnes International is a global leader in high-end real estate, known for its excellence and exceptional service. Our Dubai office combines international standards with the vibrancy of the local market. Choosing Barnes International Dubai means benefiting from our global reach and local expertise. With a network spanning 22 countries and 145 offices, we connect you with prime real estate opportunities worldwide while offering in-depth knowledge of the local market. Our professionalism is unmatched; we pride ourselves on integrity, transparency, and a commitment to excellence, ensuring a seamless and rewarding experience. We leverage the latest technology and market insights to provide innovative solutions and strategies, maximizing the value of your investments. Our portfolio features exclusive properties, from luxurious villas and penthouses to premium apartments and investment properties. We offer personalized consultations and bespoke property solutions to meet the unique needs of each client, whether you are looking to buy, sell, or invest. Our expert team consists of seasoned professionals with years of experience in the real estate industry. With deep insights into the Dubai market, we guide you through every step of your real estate journey. At Barnes International Dubai, we transform your real estate dreams into reality, offering the guidance, resources, and support necessary for informed decisions and achieving your goals...
              </span>
              <button
                className="font-bold text-black ml-1"
                onClick={() => setShowFullAbout(!showFullAbout)}
              >
                Read less
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
