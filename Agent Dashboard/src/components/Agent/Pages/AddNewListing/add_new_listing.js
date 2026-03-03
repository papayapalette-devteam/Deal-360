import { useState } from "react";
import PropertyInfoForm from "./property_info";

/* ============================================================
   SVG ICONS
============================================================ */

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: "var(--form-icon)" }}>
    <path opacity="0.4" d="M11.9989 13.4275C13.722 13.4275 15.1189 12.0306 15.1189 10.3075C15.1189 8.58437 13.722 7.1875 11.9989 7.1875C10.2758 7.1875 8.87891 8.58437 8.87891 10.3075C8.87891 12.0306 10.2758 13.4275 11.9989 13.4275Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: "var(--form-text)" }}>
    <path d="M7.9987 10.6693V8.0026M7.9987 5.33594H8.00536M14.6654 8.0026C14.6654 11.6845 11.6806 14.6693 7.9987 14.6693C4.3168 14.6693 1.33203 11.6845 1.33203 8.0026C1.33203 4.32071 4.3168 1.33594 7.9987 1.33594C11.6806 1.33594 14.6654 4.32071 14.6654 8.0026Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: "var(--form-text)" }}>
    <path d="M17 9.5L12 14.5L7 9.5H17Z" fill="currentColor" />
  </svg>
);

const CheckedBox = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="var(--form-checkbox-bg)" />
    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="var(--form-checkbox-border)" />
    <path d="M5 8L7.42528 9.94023C7.46707 9.97366 7.52777 9.96826 7.56301 9.92799L11 6" stroke="var(--form-checkbox-border)" strokeLinecap="round" />
  </svg>
);

const UncheckedBox = () => (
  <div style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid var(--form-checkbox-border)", flexShrink: 0 }} />
);

const SparkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, color: "var(--form-text)" }}>
    <path d="M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.33203 10H16.6654M16.6654 10L11.6654 5M16.6654 10L11.6654 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Property Type Icons */
const ApartmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--form-icon)" }}>
    <path d="M19.8581 22.8594V3.03052L18.1873 2.05978V1.46836L16.0771 0L14.3359 0.8145L13.132 0.333234L11.9647 0.937172L10.3216 0.000843734L6.27161 2.19094L7.62161 2.95706V3.63244L7.30225 3.77142L6.52127 3.29442L5.16737 3.83358V22.8594H4V23.5512H20.9961V22.8594H19.8581ZM11.3659 3.43462V4.84959L9.31075 5.73994V4.32511L11.3659 3.43462ZM9.31075 4.02052V2.625L11.3659 1.56173V3.13013L9.31075 4.02052ZM11.3659 5.154V6.60558L9.31075 7.44248V6.04453L11.3659 5.154ZM11.3659 6.90722V8.38491L9.31075 9.16823V7.74412L11.3659 6.90722ZM11.3659 8.68397V10.2185L9.31075 10.8412V9.46725L11.3659 8.68397ZM11.3659 10.5104V11.9674L9.31075 12.5633V11.1332L11.3659 10.5104ZM11.3659 12.2583V13.8217L9.31075 14.2838V12.8543L11.3659 12.2583ZM11.3659 14.1079V15.6011L9.31075 16.0097V14.5701L11.3659 14.1079ZM11.3659 15.886V17.1244L9.31075 17.426V16.2946L11.3659 15.886ZM11.3659 17.4068V18.9292L9.31075 19.1505V17.7083L11.3659 17.4068ZM11.3659 19.2103V20.7302L9.31075 20.871V19.4314L11.3659 19.2103ZM11.3659 21.0102V22.7345H9.31075V21.1513L11.3659 21.0102ZM12.9997 4.44623V5.94014L11.6453 6.49181V5.03297L12.9997 4.44623ZM11.6453 4.72847V3.31364L12.9998 2.72672V4.14164L11.6453 4.72847ZM12.9997 6.24178V7.76213L11.6453 8.27836V6.79345L12.9997 6.24178ZM12.9997 8.06119V9.72328L11.6453 10.1337V8.57752L12.9997 8.06119ZM12.9997 10.0153V11.4935L11.6453 11.8863V10.4257L12.9997 10.0153ZM12.9997 11.7845V13.4542L11.6453 13.7588V12.1773L12.9997 11.7845ZM12.9997 13.7405V15.2762L11.6453 15.5456V14.0453L12.9997 13.7405ZM12.9997 15.5612V16.8847L11.6453 17.0834V15.8304L12.9997 15.5612ZM12.9997 17.1671V18.7535L11.6453 18.8991V17.3658L12.9997 17.1671ZM12.9997 19.0344V20.6181L11.6453 20.7109V19.1801L12.9997 19.0344ZM12.9997 20.8982V22.7345H11.6453V20.991L12.9997 20.8982ZM18.1873 2.38298L19.5788 3.19134V22.7345H18.1873V2.38298ZM6.64773 3.69914L7.15159 4.00673V22.7345H6.64773V3.69914ZM6.23341 3.70987L6.36836 3.65616V22.7345H6.23341V3.70987Z" fill="currentColor" />
  </svg>
);

const VillaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--form-icon)" }}>
    <path d="M3 10L12 3L21 10V21H15V15H9V21H3V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="10" y="14" width="4" height="7" rx="0.5" stroke="currentColor" strokeWidth="1" />
    <rect x="6" y="12" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" />
    <rect x="15" y="12" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const TownhouseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--form-icon)" }}>
    <path d="M1 11L5 8L9 11V21H1V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 12L12 8L16 12V21H8V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M15 11L19 8L23 11V21H15V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <rect x="10" y="15" width="4" height="6" rx="0.5" fill="currentColor" opacity="0.2" />
  </svg>
);

const LandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: "var(--form-icon)" }}>
    <path d="M12 8L18 5L12 2V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.99914 11.9922L2.49914 15.1322C2.34524 15.2194 2.21723 15.3459 2.12817 15.4987C2.03911 15.6516 1.99219 15.8253 1.99219 16.0022C1.99219 16.1791 2.03911 16.3528 2.12817 16.5056C2.21723 16.6585 2.34524 16.785 2.49914 16.8722L10.9991 21.7322C11.3032 21.9077 11.6481 22.0001 11.9991 22.0001C12.3502 22.0001 12.6951 21.9077 12.9991 21.7322L21.4991 16.8722C21.653 16.785 21.781 16.6585 21.8701 16.5056C21.9592 16.3528 22.0061 16.1791 22.0061 16.0022C22.0061 15.8253 21.9592 15.6516 21.8701 15.4987C21.781 15.3459 21.653 15.2194 21.4991 15.1322L15.9991 12.0022" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.48828 12.8516L17.5083 19.1516" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.51 12.8516L6.5 19.1516" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BUAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <path d="M14.414 3.23438H0.351561C0.157394 3.23438 0 3.39177 0 3.58594V17.6484C0 17.8425 0.157394 17.9999 0.351561 17.9999H14.414C14.6082 17.9999 14.7656 17.8425 14.7656 17.6484V3.58594C14.7656 3.39177 14.6082 3.23438 14.414 3.23438ZM14.0624 17.2968H0.703122V3.9375H14.0624V17.2968Z" fill="var(--form-primary)" />
    <path d="M13.7837 0.103012C13.6464 -0.0342728 13.4238 -0.0342728 13.2865 0.103012C13.1492 0.240296 13.1492 0.462905 13.2865 0.600225L13.5653 0.878942H1.20033L1.47908 0.60019C1.61636 0.462905 1.61636 0.240296 1.47908 0.102977C1.34179 -0.0343431 1.11919 -0.034308 0.981866 0.102977L0.102963 0.981879C-0.0343212 1.11916 -0.0343212 1.34177 0.102963 1.47909L0.981866 2.358C1.05053 2.42665 1.14049 2.46097 1.23046 2.46097C1.32042 2.46097 1.41042 2.42662 1.47904 2.358C1.61633 2.22071 1.61633 1.9981 1.47904 1.86078L1.20029 1.58206H13.5653L13.2865 1.86082C13.1492 1.99814 13.1492 2.22071 13.2865 2.35803C13.3552 2.42669 13.4451 2.461 13.5351 2.461C13.6251 2.461 13.7151 2.42669 13.7837 2.35803L14.6626 1.47913C14.7999 1.34181 14.7999 1.11923 14.6626 0.981915L13.7837 0.103012Z" fill="var(--form-primary)" />
    <path d="M17.8971 16.5209C17.7598 16.3836 17.5372 16.3836 17.3999 16.5209L17.1211 16.7997V4.4347L17.3999 4.71345C17.4685 4.78211 17.5585 4.81643 17.6485 4.81643C17.7384 4.81643 17.8284 4.78211 17.8971 4.71345C18.0343 4.57613 18.0343 4.35356 17.8971 4.21624L17.0182 3.33734C16.8809 3.20005 16.6583 3.20005 16.5209 3.33734L15.642 4.21624C15.5048 4.35353 15.5048 4.57613 15.642 4.71345C15.7794 4.85074 16.0019 4.85074 16.1393 4.71345L16.418 4.4347V16.7997L16.1393 16.5209C16.002 16.3836 15.7794 16.3836 15.642 16.5209C15.5047 16.6582 15.5048 16.8808 15.642 17.0181L16.5209 17.897C16.5896 17.9657 16.6796 18 16.7695 18C16.8595 18 16.9495 17.9657 17.0181 17.897L17.897 17.0181C18.0344 16.8808 18.0344 16.6582 17.8971 16.5209Z" fill="var(--form-primary)" />
    <path d="M2.46094 15.8906H12.3046C12.4988 15.8906 12.6562 15.7332 12.6562 15.539V5.69531C12.6562 5.50114 12.4988 5.34375 12.3046 5.34375H2.46094C2.26677 5.34375 2.10938 5.50114 2.10938 5.69531V15.539C2.10938 15.7332 2.26677 15.8906 2.46094 15.8906ZM3.55457 7.28612C3.62323 7.35478 3.7132 7.3891 3.80316 7.3891C3.89313 7.3891 3.98313 7.35478 4.05175 7.28612C4.18903 7.14884 4.18903 6.92623 4.05175 6.78891L3.30971 6.04687H11.4559L7.38283 10.12L6.28908 9.02625C6.1518 8.88896 5.92919 8.88896 5.79187 9.02625C5.65455 9.16353 5.65459 9.38614 5.79187 9.52346L6.88561 10.6172L2.8125 14.6903V6.54409L3.55457 7.28612ZM11.9531 14.6902L7.88 10.6172L11.9531 6.54412V14.6902ZM11.4559 15.1875H3.30975L7.38283 11.1144L11.4559 15.1875Z" fill="var(--form-primary)" />
  </svg>
);

const PlotSizeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--form-primary)" style={{ flexShrink: 0 }}>
    <path d="M0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16ZM9 3H15V9H13V5H9V3ZM3 9H5V13H9V15H3V9Z" />
  </svg>
);

/* ============================================================
   REUSABLE UI COMPONENTS
============================================================ */

const SectionTitle = ({ children }) => (
  <h2 style={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "110%",
    color: "var(--form-text)",
    margin: 0,
  }}>
    {children}
  </h2>
);

const FieldLabel = ({ children, showInfo = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <span style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--form-text)",
    }}>
      {children}
    </span>
    {showInfo && <InfoIcon />}
  </div>
);

const ToggleGroup = ({ options, value, onChange }) => (
  <div style={{
    display: "flex",
    padding: 8,
    alignItems: "center",
    gap: 16,
    backgroundColor: "var(--form-section-bg)",
    borderRadius: 8,
  }}>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onChange(option)}
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: 8,
          backgroundColor: value === option ? "var(--form-input-bg)" : "transparent",
          color: "var(--form-text)",
          fontFamily: "'Poppins', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        {option}
      </button>
    ))}
  </div>
);

const SelectCard = ({ label, icon = null, isSelected, onClick }) => (
  <button
    onClick={onClick}
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "12px 24px",
      borderRadius: 8,
      border: `1px solid ${isSelected ? "var(--form-selected-border)" : "var(--form-border)"}`,
      backgroundColor: isSelected ? "var(--form-selected-bg)" : "transparent",
      cursor: "pointer",
      transition: "all 0.2s",
      minWidth: 0,
    }}
  >
    {icon && <span style={{ color: "var(--form-icon)" }}>{icon}</span>}
    <span style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: 16,
      fontWeight: isSelected ? 500 : 400,
      color: "var(--form-text)",
      whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  </button>
);

const SelectDisplay = ({ value }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: 50,
    padding: "12px 16px",
    borderRadius: 8,
    border: "1px solid var(--form-border)",
    backgroundColor: "var(--form-input-bg)",
    flex: 1,
    overflow: "hidden",
    cursor: "pointer",
  }}>
    <span style={{
      flex: 1,
      fontFamily: "'Poppins', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      color: "var(--form-text)",
    }}>
      {value}
    </span>
    <ChevronDown />
  </div>
);

const CheckboxItem = ({ label, checked, onChange, small = false }) => (
  <button
    onClick={() => onChange(!checked)}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
    }}
  >
    {checked ? <CheckedBox /> : <UncheckedBox />}
    <span style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: small ? 12 : 16,
      fontWeight: 400,
      color: "var(--form-text)",
    }}>
      {label}
    </span>
  </button>
);

const inputStyle = {
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  fontFamily: "'Poppins', sans-serif",
  fontSize: 16,
  fontWeight: 400,
  color: "var(--form-text)",
  minWidth: 0,
};

const inputBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  height: 50,
  padding: "12px 16px",
  borderRadius: 8,
  border: "1px solid var(--form-border)",
  backgroundColor: "var(--form-input-bg)",
  overflow: "hidden",
};

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function PropertyListingForm() {

    const steps = [
  { label: "Property information" },
  { label: "Media Upload" },
  { label: "Review & Publish" },
];

 const [current, setcurrent] = useState(1);
      const total = steps.length;

  // Progress bar fill: complete steps + partial credit for in-progress
  const progressPercent = (current / total) * 100;

  const [activeTab, setActiveTab] = useState("manual");

 
 




  

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 24,
      width: "100%",
      fontFamily: "'Poppins', sans-serif",
      color: "var(--form-text)",
      backgroundColor: "var(--form-bg)",
      padding:"10px"
    }}>

<div className="w-full flex flex-col lg:flex-row lg:items-center gap-6 mb-6">

  {/* LEFT SIDE */}
  <div className="flex flex-col gap-1 flex-1 min-w-0">
    
    <h1
      className="text-xl sm:text-2xl font-bold leading-8 sm:leading-9 whitespace-nowrap"
      style={{
        fontFamily: "Manrope, sans-serif",
        color: "#0A0A0A",
      }}
    >
      Add New Listing
    </h1>

    <p
      className="text-xs sm:text-sm whitespace-nowrap"
      style={{
        fontFamily: "Manrope, sans-serif",
        color: "var(--form-text)",
      }}
    >
      Complete all steps to publish your listing
    </p>

  </div>

  {/* RIGHT SIDE - TABS */}
  <div
    className="
      flex items-center gap-4 
      p-2 rounded-lg 
      flex-1
      w-full
    "
    style={{
      minHeight: "55px",
      background: "var(--form-section-bg)",
    }}
  >
    {/* Manual */}
    <div
      onClick={() => setActiveTab("manual")}
      className="
        flex-1 flex justify-center items-center
        cursor-pointer transition-all duration-200
        whitespace-nowrap
        text-sm md:text-base
      "
      style={{
        padding: "12px 16px",
        borderRadius: "8px",
        background: activeTab === "manual" ? "#FFF" : "transparent",
        fontFamily: "Manrope, sans-serif",
        fontWeight: 600,
        color:
          activeTab === "manual"
            ? "#0A0A0A"
            : "var(--form-text)",
      }}
    >
      List Property Manually
    </div>

    {/* CSV */}
    <div
      onClick={() => setActiveTab("csv")}
      className="
        flex-1 flex justify-center items-center
        cursor-pointer transition-all duration-200
        whitespace-nowrap
        text-sm md:text-base
      "
      style={{
        padding: "12px 16px",
        borderRadius: "8px",
        background: activeTab === "csv" ? "#FFF" : "transparent",
        fontFamily: "Manrope, sans-serif",
        fontWeight: 600,
        color:
          activeTab === "csv"
            ? "#0A0A0A"
            : "var(--form-text)",
      }}
    >
      Upload CSV File
    </div>
  </div>

</div>

 <div className="flex flex-col gap-6 w-full">
      {/* Step bubbles row */}
      <div className="flex items-start justify-between w-full">
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = stepNumber === current;
          const isDone = stepNumber < current;

          return (
            <div
              key={stepNumber}
              onClick={() => setcurrent(stepNumber)} // ✅ Click event
              className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
            >
              {/* Circle */}
              <div
                className={[
                  "flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-all duration-300",
                  isActive || isDone
                    ? "bg-[#7FFFD4]"
                    : "bg-[#ECECF0]",
                ].join(" ")}
              >
                {isDone ? (
                  /* Checkmark */
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                  >
                    <path
                      d="M1 7L6.5 12.5L17 1"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span
                    className={[
                      "text-base select-none transition-all",
                      isActive
                        ? "font-bold text-black"
                        : "font-normal text-[#717182]",
                    ].join(" ")}
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {stepNumber}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className={[
                  "text-center font-medium text-xs sm:text-sm leading-tight transition-all",
                  isActive || isDone
                    ? "text-[#0A0A0A]"
                    : "text-[#717182]",
                ].join(" ")}
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 rounded-full bg-[rgba(127,255,212,0.20)] overflow-hidden">
        <div
          className="h-full bg-[#7FFFD4] rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>

{
    current===1 &&
    (
        <PropertyInfoForm/>
    )
}
  
    
    </div>
  );
}
