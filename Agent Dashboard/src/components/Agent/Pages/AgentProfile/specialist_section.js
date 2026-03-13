const LocationPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-pin)">
      <path
        d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z"
        stroke="#0F172A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
        stroke="#0F172A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip-pin">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MintBadge = ({ children }) => (
  <div className="flex h-[32px] items-center justify-center gap-4 rounded-[8px] border border-[var(--form-secondary)] px-3 overflow-hidden">
    <span className="font-poppins text-[14px] font-normal leading-[20px] text-[#0F172A] whitespace-nowrap">
      {children}
    </span>
  </div>
);

const LocationBadge = ({ children }) => (
  <div className="flex items-center gap-[8px] rounded-[8px]  px-[24px] py-[8px]" style={{border:"1px solid #F88379"}}>
    <LocationPinIcon />
    <span className="font-poppins text-[14px] font-normal leading-[20px] text-[#0F172A] whitespace-nowrap">
      {children}
    </span>
  </div>
);

const SectionLabel = ({ children }) => (
  <span className="font-poppins text-[12px] font-medium leading-[120%] text-[var(--form-text)]">
    {children}
  </span>
);

export default function SpecialtiesSection() {
  return (
    <div className="flex flex-col items-start gap-[9px]">
      <h3 className="font-poppins text-[18px] font-medium leading-[120%] text-[var(--form-text)]">
        Specialties
      </h3>

      {/* Language */}
      <div className="flex flex-col items-start gap-[3px]">
        <SectionLabel>Language</SectionLabel>
        <div className="flex items-start gap-[8px] flex-wrap">
          <MintBadge>English</MintBadge>
          <MintBadge>Russian</MintBadge>
        </div>
      </div>

      {/* Expertise */}
      <div className="flex flex-col items-start gap-[8px]">
        <SectionLabel>Expertise</SectionLabel>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-start gap-[8px] flex-wrap">
            <MintBadge>Sales</MintBadge>
            <MintBadge>Rentals</MintBadge>
          </div>
          <div className="flex items-start gap-[8px] flex-wrap">
            <MintBadge>Commercial</MintBadge>
            <MintBadge>Residential</MintBadge>
          </div>
          <div className="flex items-start gap-[8px] flex-wrap">
            <MintBadge>Off-Plan</MintBadge>
            <MintBadge>Secondary Market</MintBadge>
          </div>
        </div>
      </div>

      {/* Coverage Area */}
      <div className="flex flex-col items-start gap-[8px]">
        <SectionLabel>Coverage Area</SectionLabel>
        <div className="flex flex-col  gap-[10px]">
          <LocationBadge>Tilal Al Ghaf</LocationBadge>
          <LocationBadge>The Greens</LocationBadge>
          <LocationBadge>Damac Hills</LocationBadge>
          <LocationBadge>Damac Lagoons</LocationBadge>
          <LocationBadge>Town Square</LocationBadge>
          <LocationBadge>Arjan</LocationBadge>
          <LocationBadge>Downtown Dubai</LocationBadge>
          <LocationBadge>Palm Jumeirah</LocationBadge>
        </div>
      </div>
    </div>
  );
}
