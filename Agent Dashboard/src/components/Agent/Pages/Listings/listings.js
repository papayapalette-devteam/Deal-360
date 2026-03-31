import { useState } from "react";
import FilterPanel from "./filter";

const TABS = [
  "My Listings (own inventory)",
  "Brokerage Inventory",
  "Draft",
  "Pending Verification",
  "Live",
  "Paused",
  "Under Offer",
  "Sold / Rented",
  "Archived",
];

const LISTINGS = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f053d08ded33a32b7ea63d371dcfc1ee750168ae?width=875",
    badge: "Off-Plan",
    title: "Portofino, DAMAC Lagoons, Dubai",
    price: "AED 3,800,000",
    status: "Available",
    beds: "5 Beds",
    baths: "6 Baths",
    builtUp: "Built-up: 1,976 sqft",
    plot: "Plot: 2,268 sqft",
    description: "Genuine Resale | End Unit | Luxurious",
  },
  {
    id: 2,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/1fe90edc0610683c2ab5e4837e1063907fa3a6ee?width=875",
    badge: "Off-Plan",
    title: "Santorini, DAMAC Lagoons, Dubai",
    price: "AED 3,150,000",
    status: "Available",
    beds: "4 Beds",
    baths: "4 Baths",
    builtUp: "Built-up: 1,344 sqft",
    plot: "Plot: 2,44 sqft",
    description: "Middle Unit | Resale | Back to Back",
  },
  {
    id: 3,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4fa0c649bcfd30f726d23a569e4f2e6010693c8d?width=875",
    badge: "Off-Plan",
    title: "Venera, The Valley by Emaar, Dubai",
    price: "AED 3,050,000",
    status: "Available",
    beds: "3 Beds",
    baths: "4 Baths",
    builtUp: "Built-up: 1,455 sqft",
    plot: "Plot: 3,44 sqft",
    description: "Premium 3BR + Maid | Single Row",
  },
  {
    id: 4,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/224207e5c7be05bf547f366b31439f4eb66f884c?width=875",
    badge: "Off-Plan",
    title: "Santorini, DAMAC Lagoons, Dubai",
    price: "AED 3,050,000",
    status: "Available",
    beds: "5 Beds",
    baths: "6 Baths",
    builtUp: "Built-up: 1,976 sqft",
    plot: "Plot: 2,268 sqft",
    description: "Middle Unit | Resale | Back to Back",
  },
  {
    id: 5,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0a248a4a3d2dafe5d53e574dab4a89bc28f17e96?width=875",
    badge: "Off-Plan",
    title: "Santorini, DAMAC Lagoons, Dubai",
    price: "AED 5,900,000",
    status: "Available",
    beds: "4 Beds",
    baths: "4 Baths",
    builtUp: "Built-up: 1,344 sqft",
    plot: "Plot: 2,44 sqft",
    description: "Genuine Resale | Mid Unit | Back to Back",
  },
  {
    id: 6,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c71cd618e5f04d4a1dbb64c874ea5492bfe57f94?width=875",
    badge: "Off-Plan",
    title: "Costa Brava, DAMAC Lagoons, Dubai",
    price: "AED 3,750,000",
    status: "Available",
    beds: "3 Beds",
    baths: "4 Baths",
    builtUp: "Built-up: 1,455 sqft",
    plot: "Plot: 3,44 sqft",
    description: "Genuine Resale | Off-Market | Luxurious",
  },
];

/* ─── Icon Components ─── */

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5013 17.5052L13.918 13.9219" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4974 3.32812H11.6641" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33333 3.32812H2.5" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 10H10" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66667 10H2.5" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5026 16.6719H13.3359" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 16.6719H2.5" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6641 1.67188V5.00521" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66406 8.32812V11.6615" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3359 15V18.3333" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7914 12.6062C21.0355 12.397 21.1575 12.2924 21.2023 12.1679C21.2415 12.0586 21.2415 11.9391 21.2023 11.8298C21.1575 11.7053 21.0355 11.6007 20.7914 11.3914L12.3206 4.1308C11.9004 3.7706 11.6903 3.5905 11.5124 3.58609C11.3578 3.58226 11.2101 3.65018 11.1124 3.77006C11 3.90799 11 4.18473 11 4.7382V9.03346C8.86532 9.40691 6.91159 10.4886 5.45971 12.1127C3.87682 13.8833 3.00123 16.1748 3 18.5498V19.1618C4.04934 17.8977 5.35951 16.8753 6.84076 16.1647C8.1467 15.5383 9.55842 15.1671 11 15.0694V19.2595C11 19.8129 11 20.0897 11.1124 20.2276C11.2101 20.3475 11.3578 20.4154 11.5124 20.4116C11.6903 20.4072 11.9004 20.2271 12.3206 19.8669L20.7914 12.6062Z" stroke="var(--Colors-for-white-theme-Secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M9.25 9.04688C11.03 9.69687 12.97 9.69687 14.75 9.04688" stroke="var(--Colors-for-white-theme-Secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="var(--Colors-for-white-theme-Secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.29442 2.16406H8.70298C9.92815 2.16405 10.8986 2.16404 11.658 2.26615C12.4397 2.37124 13.0723 2.59265 13.5712 3.09156C14.0701 3.59047 14.2915 4.2231 14.3966 5.00471C14.4975 5.75523 14.4987 6.71174 14.4987 7.91651C14.728 8.10566 14.91 8.34952 15.0258 8.62914C15.106 8.82274 15.1371 9.02242 15.1515 9.23382C15.1654 9.43689 15.1654 9.68425 15.1654 9.98056V10.0142C15.1654 10.3105 15.1654 10.5579 15.1515 10.761C15.1371 10.9724 15.106 11.1721 15.0258 11.3657C14.8397 11.8149 14.4828 12.1718 14.0336 12.3578C13.84 12.438 13.6403 12.4691 13.4289 12.4836C13.3482 12.4891 13.2604 12.4924 13.1654 12.4944V13.3307C13.1654 13.6069 12.9415 13.8307 12.6654 13.8307C12.3892 13.8307 12.1654 13.6069 12.1654 13.3307V12.4974H3.83203V13.3307C3.83203 13.6069 3.60817 13.8307 3.33203 13.8307C3.05589 13.8307 2.83203 13.6069 2.83203 13.3307V12.4944C2.73697 12.4924 2.64921 12.4891 2.56845 12.4836C2.35705 12.4691 2.15737 12.438 1.96378 12.3578C1.51456 12.1718 1.15766 11.8149 0.971586 11.3657C0.891397 11.1721 0.860302 10.9724 0.845878 10.761C0.832022 10.5579 0.832027 10.3105 0.832031 10.0142V9.98056C0.832027 9.68425 0.832022 9.4369 0.845878 9.23382C0.860302 9.02242 0.891397 8.82274 0.971586 8.62914C1.08741 8.34952 1.26943 8.10566 1.4987 7.91651C1.4987 6.71174 1.49988 5.75523 1.60079 5.00471C1.70587 4.2231 1.92728 3.59047 2.42619 3.09156C2.9251 2.59265 3.55773 2.37124 4.33935 2.26615C5.09882 2.16404 6.06925 2.16405 7.29442 2.16406ZM2.49895 7.51667C2.52198 7.51463 2.54515 7.51283 2.56846 7.51124C2.7363 7.49979 2.93439 7.49781 3.16536 7.49747L3.16536 6.96273C3.16534 6.36374 3.16533 5.86426 3.21864 5.46774C3.27491 5.04921 3.39869 4.67135 3.70234 4.3677C4.00598 4.06405 4.38385 3.94027 4.80238 3.884C5.1989 3.83069 5.69838 3.83071 6.29736 3.83073H9.70003C10.299 3.83071 10.7985 3.83069 11.195 3.884C11.6135 3.94027 11.9914 4.06405 12.2951 4.3677C12.5987 4.67135 12.7225 5.04921 12.7788 5.46774C12.8321 5.86426 12.8321 6.36375 12.832 6.96273V7.49747C13.063 7.49781 13.2611 7.49979 13.4289 7.51124C13.4522 7.51283 13.4754 7.51463 13.4984 7.51667C13.4969 6.49343 13.4856 5.73337 13.4055 5.13796C13.3153 4.46724 13.1462 4.0808 12.8641 3.79866C12.582 3.51653 12.1955 3.34741 11.5248 3.25724C10.8397 3.16512 9.93658 3.16406 8.66536 3.16406H7.33203C6.06082 3.16406 5.15771 3.16512 4.4726 3.25724C3.80187 3.34741 3.41544 3.51653 3.1333 3.79866C2.85116 4.0808 2.68205 4.46724 2.59187 5.13796C2.51182 5.73337 2.50054 6.49343 2.49895 7.51667ZM11.832 7.4974V6.9974C11.832 6.35472 11.831 5.92302 11.7877 5.60099C11.7463 5.29335 11.6748 5.16168 11.588 5.07481C11.5011 4.98793 11.3694 4.91645 11.0618 4.87509C10.7397 4.83179 10.308 4.83073 9.66536 4.83073H8.4987V7.4974H11.832ZM7.4987 7.4974V4.83073H6.33203C5.68936 4.83073 5.25765 4.83179 4.93563 4.87509C4.62799 4.91645 4.49632 4.98793 4.40944 5.07481C4.32256 5.16168 4.25108 5.29335 4.20972 5.60099C4.16643 5.92302 4.16536 6.35472 4.16536 6.9974V7.4974H7.4987ZM2.63653 8.50892C2.47604 8.51987 2.3979 8.53953 2.34646 8.56083C2.14227 8.64541 1.98004 8.80764 1.89547 9.01183C1.87416 9.06326 1.85451 9.14141 1.84356 9.30189C1.8323 9.46687 1.83203 9.67993 1.83203 9.9974C1.83203 10.3149 1.8323 10.5279 1.84356 10.6929C1.85451 10.8534 1.87416 10.9315 1.89547 10.983C1.98004 11.1872 2.14227 11.3494 2.34646 11.434C2.3979 11.4553 2.47604 11.4749 2.63653 11.4859C2.8015 11.4971 3.01456 11.4974 3.33203 11.4974H12.6654C12.9828 11.4974 13.1959 11.4971 13.3609 11.4859C13.5214 11.4749 13.5995 11.4553 13.6509 11.434C13.8551 11.3494 14.0174 11.1872 14.1019 10.983C14.1232 10.9315 14.1429 10.8534 14.1538 10.6929C14.1651 10.5279 14.1654 10.3149 14.1654 9.9974C14.1654 9.67993 14.1651 9.46687 14.1538 9.30189C14.1429 9.14141 14.1232 9.06326 14.1019 9.01183C14.0174 8.80764 13.8551 8.64541 13.6509 8.56083C13.5995 8.53953 13.5214 8.51987 13.3609 8.50892C13.1959 8.49767 12.9828 8.4974 12.6654 8.4974H3.33203C3.01456 8.4974 2.8015 8.49767 2.63653 8.50892Z" fill="#565656"/>
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.58881 1.83594C2.98676 1.83594 2.4987 2.324 2.4987 2.92605V7.5026H2.68822C2.69547 7.50259 2.70269 7.5026 2.70987 7.5026C2.71342 7.5026 2.71696 7.5026 2.72048 7.5026L13.2875 7.5026C13.2947 7.5026 13.3019 7.50259 13.3092 7.5026H14.6654C14.9415 7.5026 15.1654 7.72646 15.1654 8.0026C15.1654 8.27875 14.9415 8.5026 14.6654 8.5026H14.4868C14.4911 8.53257 14.4942 8.5629 14.4962 8.59357C14.4987 8.63206 14.4987 8.67367 14.4987 8.71378L14.4987 8.73904C14.4987 8.98919 14.4987 9.13583 14.4883 9.29938C14.3937 10.7903 13.5881 12.167 12.4204 13.0673C12.4296 13.0817 12.4381 13.0967 12.4459 13.1123L13.1126 14.4457C13.2361 14.6927 13.136 14.993 12.889 15.1165C12.642 15.24 12.3416 15.1399 12.2182 14.8929L11.573 13.6026C11.0385 13.8732 10.4572 14.0513 9.85263 14.1125C9.68965 14.129 9.59018 14.1327 9.4207 14.1391L9.41625 14.1393C8.92276 14.1578 8.43969 14.1693 7.9987 14.1693C7.5577 14.1693 7.07464 14.1578 6.58115 14.1393L6.57669 14.1391C6.40722 14.1327 6.30775 14.129 6.14476 14.1125C5.54018 14.0513 4.95888 13.8732 4.42437 13.6026L3.77924 14.8929C3.65575 15.1399 3.35541 15.24 3.10842 15.1165C2.86144 14.993 2.76132 14.6927 2.88482 14.4457L3.55148 13.1123C3.55929 13.0967 3.5678 13.0817 3.57696 13.0673C2.40934 12.167 1.6037 10.7903 1.50907 9.29938C1.49869 9.13582 1.49869 8.98916 1.4987 8.73897L1.4987 8.72439C1.4987 8.72087 1.4987 8.71733 1.49869 8.71378C1.49869 8.70145 1.49868 8.68898 1.49875 8.6765C1.49871 8.6741 1.4987 8.67169 1.4987 8.66927V8.5026H1.33203C1.05589 8.5026 0.832031 8.27875 0.832031 8.0026C0.832031 7.72646 1.05589 7.5026 1.33203 7.5026H1.4987V2.92605C1.4987 1.77171 2.43447 0.835938 3.58881 0.835938C4.44346 0.835938 5.21201 1.35627 5.52943 2.1498L5.60285 2.33336C6.13171 2.1992 6.70558 2.23029 7.24647 2.46136C7.92335 2.75053 8.41587 3.29613 8.66812 3.93629C8.76713 4.18757 8.6487 4.47205 8.40063 4.57884L4.4268 6.28956C4.30251 6.34307 4.16185 6.34391 4.03693 6.29191C3.91201 6.23991 3.8135 6.1395 3.7639 6.01361C3.51176 5.3737 3.49664 4.6327 3.77685 3.94269C3.97632 3.4515 4.30012 3.04879 4.69647 2.75999L4.60095 2.52119C4.4354 2.10732 4.03456 1.83594 3.58881 1.83594ZM2.72048 8.5026C2.69377 8.5026 2.67788 8.50261 2.66587 8.50275C2.65713 8.50285 2.65402 8.50299 2.6539 8.50299C2.65346 8.50302 2.65387 8.503 2.6539 8.50299C2.57053 8.50842 2.50472 8.57469 2.49908 8.658C2.57053 8.50842 2.50472 8.57469 2.49908 8.658C2.49905 8.6588 2.49893 8.66213 2.49884 8.66978C2.49871 8.68178 2.4987 8.69768 2.4987 8.72439C2.4987 8.99283 2.4989 9.10746 2.50706 9.23604C2.63068 11.1838 4.30378 12.9209 6.24553 13.1176C6.3755 13.1307 6.44744 13.1335 6.61869 13.14C7.10405 13.1582 7.57394 13.1693 7.9987 13.1693C8.42345 13.1693 8.89335 13.1582 9.37871 13.14C9.54996 13.1335 9.6219 13.1307 9.75187 13.1176C11.6936 12.9209 13.3667 11.1838 13.4903 9.23604C13.4985 9.10746 13.4987 8.99283 13.4987 8.72439C13.4987 8.69768 13.4987 8.68178 13.4986 8.66978C13.4985 8.66301 13.4984 8.65962 13.4983 8.65838C13.4929 8.57485 13.4264 8.50839 13.3428 8.50296C13.3415 8.50291 13.3381 8.50282 13.3315 8.50275C13.3195 8.50261 13.3036 8.5026 13.2769 8.5026H2.72048ZM6.8536 3.38096C6.4154 3.19375 5.94171 3.2198 5.53678 3.41692C5.17754 3.5918 4.87282 3.90167 4.70337 4.31895C4.59436 4.58738 4.55494 4.86698 4.57635 5.13646L7.49712 3.87908C7.33086 3.66487 7.11292 3.49174 6.8536 3.38096Z" fill="#565656"/>
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip-area)">
        <path d="M12.8124 2.875H0.312499C0.139906 2.875 0 3.01491 0 3.1875V15.6874C0 15.86 0.139906 15.9999 0.312499 15.9999H12.8124C12.985 15.9999 13.1249 15.86 13.1249 15.6874V3.1875C13.1249 3.01491 12.985 2.875 12.8124 2.875ZM12.5 15.375H0.624998V3.5H12.5V15.375Z" fill="#565656"/>
        <path d="M12.2522 0.091566C12.1302 -0.0304647 11.9323 -0.0304647 11.8102 0.091566C11.6882 0.213597 11.6882 0.411471 11.8102 0.533533L12.058 0.781282H1.06696L1.31474 0.533502C1.43677 0.411471 1.43677 0.213597 1.31474 0.0915348C1.19271 -0.0305272 0.994832 -0.030496 0.87277 0.0915348L0.0915231 0.872782C-0.0305077 0.994812 -0.0305077 1.19269 0.0915231 1.31475L0.87277 2.096C0.933801 2.15703 1.01377 2.18753 1.09374 2.18753C1.17371 2.18753 1.25371 2.157 1.31471 2.096C1.43674 1.97396 1.43674 1.77609 1.31471 1.65403L1.06693 1.40628H12.058L11.8102 1.65406C11.6882 1.77612 11.6882 1.97396 11.8102 2.09603C11.8713 2.15706 11.9512 2.18756 12.0312 2.18756C12.1112 2.18756 12.1912 2.15706 12.2522 2.09603L13.0334 1.31478C13.1554 1.19272 13.1554 0.994875 13.0334 0.872813L12.2522 0.091566Z" fill="#565656"/>
        <path d="M15.9085 14.6853C15.7865 14.5632 15.5886 14.5632 15.4666 14.6853L15.2188 14.933V3.94196L15.4666 4.18974C15.5276 4.25077 15.6076 4.28127 15.6875 4.28127C15.7675 4.28127 15.8475 4.25077 15.9085 4.18974C16.0305 4.06767 16.0305 3.86983 15.9085 3.74777L15.1272 2.96652C15.0052 2.84449 14.8073 2.84449 14.6853 2.96652L13.904 3.74777C13.782 3.8698 13.782 4.06767 13.904 4.18974C14.0261 4.31177 14.2239 4.31177 14.346 4.18974L14.5938 3.94196V14.933L14.346 14.6853C14.224 14.5632 14.0261 14.5632 13.904 14.6853C13.782 14.8073 13.782 15.0052 13.904 15.1272L14.6853 15.9085C14.7463 15.9695 14.8263 16 14.9063 16C14.9862 16 15.0662 15.9695 15.1272 15.9085L15.9085 15.1272C16.0306 15.0052 16.0306 14.8073 15.9085 14.6853Z" fill="#565656"/>
        <path d="M2.1875 14.125H10.9375C11.1101 14.125 11.25 13.9851 11.25 13.8125V5.0625C11.25 4.88991 11.1101 4.75 10.9375 4.75H2.1875C2.01491 4.75 1.875 4.88991 1.875 5.0625V13.8125C1.875 13.9851 2.01491 14.125 2.1875 14.125ZM3.15962 6.47656L2.5 5.81696V13.058L6.12055 9.43751L5.14833 8.4653C5.0263 8.34324 5.02627 8.14536 5.14833 8.02333C5.27039 7.9013 5.46827 7.9013 5.5903 8.02333L6.56251 8.99554L10.183 5.375H2.94196L3.60156 6.03459C3.72359 6.15665 3.72359 6.35452 3.60156 6.47656C3.54056 6.53759 3.46056 6.56809 3.38059 6.56809C3.30062 6.56809 3.22065 6.53759 3.15962 6.47656ZM10.625 5.817V13.058L7.00445 9.43748L10.625 5.817ZM10.183 13.5H2.942L6.56251 9.87945L10.183 13.5Z" fill="#565656"/>
      </g>
      <defs>
        <clipPath id="clip-area">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function PlotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33203 5.16927C9.05589 5.16927 8.83203 4.94541 8.83203 4.66927C8.83203 4.39313 9.05589 4.16927 9.33203 4.16927H11.332C11.6082 4.16927 11.832 4.39313 11.832 4.66927V6.66927C11.832 6.94541 11.6082 7.16927 11.332 7.16927C11.0559 7.16927 10.832 6.94541 10.832 6.66927V5.87638L9.35225 7.35616C9.15699 7.55142 8.84041 7.55142 8.64514 7.35616C8.44988 7.16089 8.44988 6.84431 8.64514 6.64905L10.1249 5.16927H9.33203Z" fill="#565656"/>
      <path d="M7.35225 8.64905C7.54751 8.84431 7.54751 9.16089 7.35225 9.35616L5.87247 10.8359H6.66536C6.94151 10.8359 7.16536 11.0598 7.16536 11.3359C7.16536 11.6121 6.94151 11.8359 6.66536 11.8359H4.66536C4.38922 11.8359 4.16536 11.6121 4.16536 11.3359V9.33594C4.16536 9.05979 4.38922 8.83594 4.66536 8.83594C4.94151 8.83594 5.16536 9.05979 5.16536 9.33594V10.1288L6.64514 8.64905C6.84041 8.45379 7.15699 8.45379 7.35225 8.64905Z" fill="#565656"/>
      <path d="M6.66536 5.16927C6.94151 5.16927 7.16536 4.94541 7.16536 4.66927C7.16536 4.39313 6.94151 4.16927 6.66536 4.16927H4.66536C4.38922 4.16927 4.16536 4.39313 4.16536 4.66927V6.66927C4.16536 6.94541 4.38922 7.16927 4.66536 7.16927C4.94151 7.16927 5.16536 6.94541 5.16536 6.66927V5.87638L6.64514 7.35616C6.84041 7.55142 7.15699 7.55142 7.35225 7.35616C7.54751 7.16089 7.54751 6.84431 7.35225 6.64905L5.87247 5.16927H6.66536Z" fill="#565656"/>
      <path d="M8.64514 8.64905C8.44988 8.84431 8.44988 9.16089 8.64514 9.35616L10.1249 10.8359H9.33203C9.05589 10.8359 8.83203 11.0598 8.83203 11.3359C8.83203 11.6121 9.05589 11.8359 9.33203 11.8359H11.332C11.6082 11.8359 11.832 11.6121 11.832 11.3359V9.33594C11.832 9.05979 11.6082 8.83594 11.332 8.83594C11.0559 8.83594 10.832 9.05979 10.832 9.33594V10.1288L9.35225 8.64905C9.15699 8.45379 8.84041 8.45379 8.64514 8.64905Z" fill="#565656"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96045 0.835938C6.42152 0.835929 5.21549 0.835922 4.2745 0.962435C3.31134 1.09193 2.55133 1.36216 1.95479 1.9587C1.35825 2.55523 1.08802 3.31525 0.958529 4.27841C0.832016 5.2194 0.832023 6.42542 0.832031 7.96435V8.04086C0.832023 9.57978 0.832016 10.7858 0.958529 11.7268C1.08802 12.69 1.35825 13.45 1.95479 14.0465C2.55133 14.6431 3.31134 14.9133 4.2745 15.0428C5.21549 15.1693 6.42152 15.1693 7.96045 15.1693H8.03695C9.57588 15.1693 10.7819 15.1693 11.7229 15.0428C12.6861 14.9133 13.4461 14.6431 14.0426 14.0465C14.6391 13.45 14.9094 12.69 15.0389 11.7268C15.1654 10.7858 15.1654 9.57978 15.1654 8.04085V7.96436C15.1654 6.42543 15.1654 5.2194 15.0389 4.27841C14.9094 3.31525 14.6391 2.55523 14.0426 1.9587C13.4461 1.36216 12.6861 1.09193 11.7229 0.962435C10.7819 0.835922 9.57588 0.835929 8.03695 0.835938H7.96045ZM2.6619 2.6658C3.04167 2.28603 3.55548 2.0681 4.40775 1.95352C5.2744 1.837 6.41321 1.83594 7.9987 1.83594C9.58418 1.83594 10.723 1.837 11.5896 1.95352C12.4419 2.0681 12.9557 2.28603 13.3355 2.6658C13.7153 3.04557 13.9332 3.55939 14.0478 4.41166C14.1643 5.27831 14.1654 6.41712 14.1654 8.0026C14.1654 9.58809 14.1643 10.7269 14.0478 11.5936C13.9332 12.4458 13.7153 12.9596 13.3355 13.3394C12.9557 13.7192 12.4419 13.9371 11.5896 14.0517C10.723 14.1682 9.58418 14.1693 7.9987 14.1693C6.41321 14.1693 5.2744 14.1682 4.40775 14.0517C3.55548 13.9371 3.04167 13.7192 2.6619 13.3394C2.28212 12.9596 2.0642 12.4458 1.94961 11.5936C1.83309 10.7269 1.83203 9.58809 1.83203 8.0026C1.83203 6.41712 1.83309 5.27831 1.94961 4.41166C2.0642 3.55939 2.28212 3.04557 2.6619 2.6658Z" fill="#565656"/>
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 0H0.666667C0.298477 0 0 0.298477 0 0.666667V10C0 10.3682 0.298477 10.6667 0.666667 10.6667H2C2.36819 10.6667 2.66667 10.3682 2.66667 10V0.666667C2.66667 0.298477 2.36819 0 2 0Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33594 0H6.0026C5.63441 0 5.33594 0.298477 5.33594 0.666667V10C5.33594 10.3682 5.63441 10.6667 6.0026 10.6667H7.33594C7.70413 10.6667 8.0026 10.3682 8.0026 10V0.666667C8.0026 0.298477 7.70413 0 7.33594 0Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip-delete)">
        <path d="M2 4.66406H14" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.6654 4.66406V13.9974C12.6654 14.6641 11.9987 15.3307 11.332 15.3307H4.66536C3.9987 15.3307 3.33203 14.6641 3.33203 13.9974V4.66406" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.33203 4.66667V3.33333C5.33203 2.66667 5.9987 2 6.66536 2H9.33203C9.9987 2 10.6654 2.66667 10.6654 3.33333V4.66667" stroke="#D4183D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip-delete">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ─── Property Card ─── */
function PropertyCard({ listing }) {
  return (
    <div className="flex flex-col p-3 rounded-[24px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.10)] gap-4 overflow-hidden">

      {/* Image */}
      <div
        className="h-[220px] sm:h-[240px] lg:h-[259px] rounded-[24px] border border-[var(--Colors-for-white-theme-Secondary)] bg-center bg-cover bg-no-repeat p-4 flex flex-col justify-start shrink-0"
        style={{ backgroundImage: `url(${listing.image})` }}
      >
        <div className="flex justify-between items-center">

          {/* Badge */}
          <div className="inline-flex px-3 py-2 justify-center items-center gap-2 rounded-full bg-black/70">
            <span className="text-white font-poppins text-[12px] font-medium leading-[120%]">
              {listing.badge}
            </span>
          </div>

          {/* Icons */}
          <div className="flex gap-2 items-center">
            <ShareIcon />
            <BookmarkIcon />
          </div>

        </div>
      </div>


      {/* Card Body */}
      <div className="flex flex-col gap-5">

        {/* Title + Price */}
        <div className="flex flex-col gap-2">

          <p className="text-[18px] sm:text-[20px] font-poppins font-normal leading-[110%] text-[var(--form-text)] m-0">
            {listing.title}
          </p>

          <p className="text-[20px] sm:text-[24px] font-poppins font-medium leading-[110%] text-[var(--Colors-for-white-theme-Secondary)] m-0">
            {listing.price}
          </p>

        </div>


        {/* Status + Beds + Baths */}
     <div className="flex flex-col gap-2">

  <div className="flex flex-wrap gap-2">

    {/* Status */}
    <div className="flex items-center gap-1 px-3 py-[6px] rounded-[4px] border border-[var(--Colors-for-white-theme-Secondary)] bg-[rgba(248,131,121,0.10)] whitespace-nowrap min-w-fit">

      <svg width="7" height="7">
        <circle
          cx="3.5"
          cy="3.5"
          r="3.5"
          fill="var(--Colors-for-white-theme-Secondary)"
        />
      </svg>

      <span className="text-[12px] font-poppins font-normal leading-[150%] text-[var(--Colors-for-white-theme-Secondary)]">
        {listing.status}
      </span>

    </div>


    {/* Beds */}
    <div className="flex items-center gap-1 px-3 py-[6px] rounded-[4px] border border-[var(--neutral-100)] bg-[var(--neutral-50)] whitespace-nowrap min-w-fit">

      <BedIcon />

      <span className="text-[12px] font-poppins font-normal leading-[150%] text-[var(--Colors-for-white-theme-Secondary-text)]">
        {listing.beds}
      </span>

    </div>


    {/* Baths */}
    <div className="flex items-center gap-1 px-3 py-[6px] rounded-[4px] border border-[var(--neutral-100)] bg-[var(--neutral-50)] whitespace-nowrap min-w-fit">

      <BathIcon />

      <span className="text-[12px] font-poppins font-normal leading-[150%] text-[var(--Colors-for-white-theme-Secondary-text)]">
        {listing.baths}
      </span>

    </div>

  </div>


  {/* Built-up + Plot */}
  <div className="flex flex-wrap gap-2">

    <div className="flex items-center gap-1 px-3 py-[6px] rounded-[4px] border border-[var(--neutral-100)] bg-[var(--neutral-50)] whitespace-nowrap min-w-fit">

      <AreaIcon />

      <span className="text-[12px] font-poppins font-normal leading-[150%] text-[var(--Colors-for-white-theme-Secondary-text)]">
        {listing.builtUp}
      </span>

    </div>


    <div className="flex items-center gap-1 px-3 py-[6px] rounded-[4px] border border-[var(--neutral-100)] bg-[var(--neutral-50)] whitespace-nowrap min-w-fit">

      <PlotIcon />

      <span className="text-[12px] font-poppins font-normal leading-[150%] text-[var(--Colors-for-white-theme-Secondary-text)]">
        {listing.plot}
      </span>

    </div>

  </div>

</div>

      </div>


      {/* Description */}
      <p className="text-[14px] sm:text-[16px] font-poppins font-medium leading-[120%] text-[var(--base-black)] m-0">
        {listing.description}
      </p>


      {/* Action Buttons */}
      <div className="flex items-center gap-2">

        {/* Edit */}
        <button className="flex flex-1 h-[31px] px-[15px] justify-center items-center gap-2 rounded-[8px] border border-[#E6E6E6] bg-white cursor-pointer hover:bg-gray-50">

          <span className="text-[15px] font-manrope font-medium leading-[120%] text-[#565656]">
            Edit
          </span>
        </button>


        {/* Pause */}
        <button className="flex w-[38px] h-[32px] justify-center items-center rounded-[8px] border border-black/10 bg-white cursor-pointer shrink-0 hover:bg-gray-50">
          <PauseIcon />
        </button>


        {/* Delete */}
        <button className="flex w-[38px] h-[32px] justify-center items-center rounded-[8px] border border-black/10 bg-white cursor-pointer shrink-0 hover:bg-gray-50">
          <DeleteIcon />
        </button>

      </div>

    </div>
  );
}

/* ─── Main Page ─── */
export default function Listings() {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const filtered = LISTINGS.filter(
    (l) =>
      search.trim() === "" ||
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="  p-0 font-poppins box-border">
  <div className="w-full mx-auto">

    {/* ── Top Bar: Search + Filters ── */}
    <div className="flex items-center gap-4 mb-6">

      {/* Search */}
      <div className="relative flex-1">

        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <SearchIcon />
        </div>

        <input
          type="text"
          placeholder="Search by title, unit number, building, or ref ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-[46px] pl-10 pr-4 rounded-[10px] border border-[#D1D5DC] text-[16px] text-black/50 bg-white outline-none focus:border-[var(--Colors-for-white-theme-Secondary)]"
        />

      </div>

      {/* Filters Button */}
      <button onClick={() => setOpenFilter(true)} className="flex items-center gap-2 h-[46px] px-4 rounded-[10px] border border-[#D1D5DC] bg-white cursor-pointer hover:opacity-85 shrink-0">

        <FilterIcon />

        <span className="font-arimo text-[16px] text-[#0A0A0A]">
          Filters
        </span>

      </button>

    </div>

   


    {/* ── Tabs ── */}
    <div className="flex w-full items-center gap-2 border-b border-[#E6E7E6] mb-6 overflow-x-auto scrollbar-hide">

      {TABS.map((tab, i) => (

        <button
          key={tab}
          onClick={() => setActiveTab(i)}
          className={`flex p-3 whitespace-nowrap border-b-2 transition
          
          ${activeTab === i
            ? "border-[var(--Colors-for-white-theme-Secondary)] text-[var(--Colors-for-white-theme-Secondary)] font-medium text-sm"
            : "border-transparent text-[var(--base-black)] font-normal"}
          
          `}
        >
          {tab}
        </button>

      ))}

    </div>


    {/* ── Listings Grid ── */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

      {filtered.map((listing) => (
        <PropertyCard key={listing.id} listing={listing} />
      ))}

    </div>

  </div>

  <FilterPanel
  isOpen={openFilter}
  onClose={() => setOpenFilter(false)}
/>

</div>
  );
}
