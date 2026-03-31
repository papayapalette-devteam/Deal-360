import { ParkingCircleIcon } from 'lucide-react';
import { useState } from 'react';

/* ─────────────────── SVG Icon Components ─────────────────── */

const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M10.115 21.811C10.721 22.311 11.353 22.768 12 23.214C12.6484 22.7739 13.2773 22.3058 13.885 21.811C14.898 20.9792 15.8513 20.0773 16.738 19.112C18.782 16.877 21 13.637 21 10C21 8.8181 20.7672 7.64778 20.3149 6.55585C19.8626 5.46392 19.1997 4.47177 18.364 3.63604C17.5282 2.80031 16.5361 2.13738 15.4442 1.68508C14.3522 1.23279 13.1819 1 12 1C10.8181 1 9.64778 1.23279 8.55585 1.68508C7.46392 2.13738 6.47177 2.80031 5.63604 3.63604C4.80031 4.47177 4.13738 5.46392 3.68508 6.55585C3.23279 7.64778 3 8.8181 3 10C3 13.637 5.218 16.876 7.262 19.112C8.14862 20.0777 9.10197 20.9789 10.115 21.811ZM12 13.25C11.138 13.25 10.3114 12.9076 9.7019 12.2981C9.09241 11.6886 8.75 10.862 8.75 10C8.75 9.13805 9.09241 8.3114 9.7019 7.7019C10.3114 7.09241 11.138 6.75 12 6.75C12.862 6.75 13.6886 7.09241 14.2981 7.7019C14.9076 8.3114 15.25 9.13805 15.25 10C15.25 10.862 14.9076 11.6886 14.2981 12.2981C13.6886 12.9076 12.862 13.25 12 13.25Z" fill="#7FFFD4" />
    </svg>
);

const ChevronDown24 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M17 9.5L12 14.5L7 9.5H17Z" fill="#1D1B20" />
    </svg>
);

const ChevronDown16 = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M13 5.5L8 10.5L3 5.5H13Z" fill="#1D1B20" />
    </svg>
);

const InfoCircle = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g clipPath="url(#info-clip)">
            <path d="M7.9987 10.6693V8.0026M7.9987 5.33594H8.00536M14.6654 8.0026C14.6654 11.6845 11.6806 14.6693 7.9987 14.6693C4.3168 14.6693 1.33203 11.6845 1.33203 8.0026C1.33203 4.32071 4.3168 1.33594 7.9987 1.33594C11.6806 1.33594 14.6654 4.32071 14.6654 8.0026Z" stroke="#4B4B4B" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs><clipPath id="info-clip"><rect width="16" height="16" fill="white" /></clipPath></defs>
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5L15 15" stroke="#0A0A0A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SparkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M3 12C9.268 12 12 9.363 12 3C12 9.363 14.713 12 21 12C14.713 12 12 14.713 12 21C12 14.713 9.268 12 3 12Z" fill="#4B4B4B" stroke="#4B4B4B" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

const InfoHexagon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M12 15.9967V11.9967M12 7.99667H12.01M3 7.93811V16.0552C3 16.3979 3 16.5692 3.05048 16.722C3.09515 16.8572 3.16816 16.9812 3.26463 17.0859C3.37369 17.2043 3.52345 17.2875 3.82297 17.4539L11.223 21.565C11.5066 21.7225 11.6484 21.8013 11.7985 21.8322C11.9315 21.8595 12.0685 21.8595 12.2015 21.8322C12.3516 21.8013 12.4934 21.7225 12.777 21.565L20.177 17.4539C20.4766 17.2875 20.6263 17.2043 20.7354 17.0859C20.8318 16.9812 20.9049 16.8572 20.9495 16.722C21 16.5692 21 16.3979 21 16.0552V7.93811C21 7.59547 21 7.42415 20.9495 7.27135C20.9049 7.13617 20.8318 7.01209 20.7354 6.9074C20.6263 6.78906 20.4766 6.70586 20.177 6.53946L12.777 2.42835C12.4934 2.27079 12.3516 2.19201 12.2015 2.16113C12.0685 2.13379 11.9315 2.13379 11.7985 2.16113C11.6484 2.19201 11.5066 2.27079 11.223 2.42835L3.82297 6.53946C3.52345 6.70586 3.37369 6.78906 3.26463 6.9074C3.16816 7.01209 3.09515 7.13617 3.05048 7.27135C3 7.42415 3 7.59547 3 7.93811Z" stroke="#A65F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AreaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <g clipPath="url(#area-clip)">
            <path d="M14.414 3.23438H0.351561C0.157394 3.23438 0 3.39177 0 3.58594V17.6484C0 17.8425 0.157394 17.9999 0.351561 17.9999H14.414C14.6082 17.9999 14.7656 17.8425 14.7656 17.6484V3.58594C14.7656 3.39177 14.6082 3.23438 14.414 3.23438ZM14.0624 17.2968H0.703122V3.9375H14.0624V17.2968Z" fill="#F88379" />
            <path d="M13.7837 0.103012C13.6464 -0.0342728 13.4238 -0.0342728 13.2865 0.103012C13.1492 0.240296 13.1492 0.462905 13.2865 0.600225L13.5653 0.878942H1.20033L1.47908 0.60019C1.61636 0.462905 1.61636 0.240296 1.47908 0.102977C1.34179 -0.0343431 1.11919 -0.034308 0.981866 0.102977L0.102963 0.981879C-0.0343212 1.11916 -0.0343212 1.34177 0.102963 1.47909L0.981866 2.35799C1.05053 2.42665 1.14049 2.46097 1.23046 2.46097C1.32042 2.46097 1.41042 2.42662 1.47904 2.35799C1.61633 2.22071 1.61633 1.9981 1.47904 1.86078L1.20029 1.58206H13.5653L13.2865 1.86082C13.1492 1.99814 13.1492 2.22071 13.2865 2.35803C13.3552 2.42669 13.4451 2.461 13.5351 2.461C13.6251 2.461 13.7151 2.42669 13.7837 2.35803L14.6626 1.47913C14.7999 1.34181 14.7999 1.11923 14.6626 0.981915L13.7837 0.103012Z" fill="#F88379" />
            <path d="M17.8971 16.5209C17.7598 16.3836 17.5372 16.3836 17.3999 16.5209L17.1211 16.7997V4.4347L17.3999 4.71345C17.4685 4.78211 17.5585 4.81643 17.6485 4.81643C17.7384 4.81643 17.8284 4.78211 17.8971 4.71345C18.0343 4.57613 18.0343 4.35356 17.8971 4.21624L17.0182 3.33734C16.8809 3.20005 16.6583 3.20005 16.5209 3.33734L15.642 4.21624C15.5048 4.35353 15.5048 4.57613 15.642 4.71345C15.7794 4.85074 16.0019 4.85074 16.1393 4.71345L16.418 4.4347V16.7997L16.1393 16.5209C16.002 16.3836 15.7794 16.3836 15.642 16.5209C15.5047 16.6582 15.5048 16.8808 15.642 17.0181L16.5209 17.897C16.5896 17.9657 16.6796 18 16.7695 18C16.8595 18 16.9495 17.9657 17.0181 17.897L17.897 17.0181C18.0344 16.8808 18.0344 16.6582 17.8971 16.5209Z" fill="#F88379" />
            <path d="M2.46094 15.8906H12.3046C12.4988 15.8906 12.6562 15.7332 12.6562 15.539V5.69531C12.6562 5.50114 12.4988 5.34375 12.3046 5.34375H2.46094C2.26677 5.34375 2.10938 5.50114 2.10938 5.69531V15.539C2.10938 15.7332 2.26677 15.8906 2.46094 15.8906ZM3.55457 7.28612C3.62323 7.35478 3.7132 7.3891 3.80316 7.3891C3.89313 7.3891 3.98313 7.35478 4.05175 7.28612C4.18903 7.14884 4.18903 6.92623 4.05175 6.78891L3.30971 6.04687H11.4559L7.38283 10.12L6.28908 9.02625C6.1518 8.88896 5.92919 8.88896 5.79187 9.02625C5.65455 9.16353 5.65459 9.38614 5.79187 9.52346L6.88561 10.6172L2.8125 14.6903V6.54409L3.55457 7.28612ZM11.9531 14.6902L7.88 10.6172L11.9531 6.54412V14.6902ZM11.4559 15.1875H3.30975L7.38283 11.1144L11.4559 15.1875Z" fill="#F88379" />
            <path d="M4.92198 8.50781C5.11615 8.50781 5.27354 8.35042 5.27354 8.15625C5.27354 7.96208 5.11615 7.80469 4.92198 7.80469H4.92173C4.72757 7.80469 4.57031 7.96208 4.57031 8.15625C4.57031 8.35042 4.72781 8.50781 4.92198 8.50781Z" fill="#F88379" />
        </g>
        <defs><clipPath id="area-clip"><rect width="18" height="18" fill="white" /></clipPath></defs>
    </svg>
);

const PlotIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, fill: '#F88379' }}>
        <path d="M0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16ZM9 3H15V9H13V5H9V3ZM3 9H5V13H9V15H3V9Z" fill="#F88379" />
    </svg>
);

const CheckedCheckbox = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#DFFFF4" />
        <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="black" />
        <path d="M5 8L7.42528 9.94023C7.46707 9.97366 7.52777 9.96826 7.56301 9.92799L11 6" stroke="black" strokeLinecap="round" />
    </svg>
);

const UncheckedCheckbox = () => (
    <div className="w-4 h-4 rounded-[4px] border border-black flex-shrink-0" />
);

/* ─────────────── Property Type SVG Icons ─────────────── */

const ApartmentSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3581 22.8594V3.03052L17.6873 2.05978V1.46836L15.5771 0L13.8359 0.8145L12.632 0.333234L11.4647 0.937172L9.82161 0.000843734L5.77161 2.19094L7.12161 2.95706V3.63244L6.80225 3.77142L6.02127 3.29442L4.66737 3.83358V22.8594H3.5V23.5512H20.4961V22.8594H19.3581Z" fill="#F88379" />
    </svg>
);

const VillaSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.25 21.7499H22.125V12.7499H22.5C22.5995 12.7499 22.6948 12.7104 22.7652 12.64C22.8355 12.5697 22.875 12.4743 22.875 12.3749V11.2499C22.875 11.1504 22.8355 11.055 22.7652 10.9847C22.6948 10.9144 22.5995 10.8749 22.5 10.8749H22.125V4.95598L22.7245 5.21848C22.8440 5.24348 22.9061 5.24869 22.9061 5.24869C22.9682 5.24352 23.0281 5.22295 23.0802 5.18885C23.1324 5.15474 23.1752 5.10818 23.2049 5.05336C23.2345 4.99854 23.25 4.9372 23.25 4.87488V3.37488C23.25 3.30199 23.2288 3.23066 23.1889 3.16964C23.149 3.10862 23.0922 3.06054 23.0255 3.03129L17.0255 0.40629C16.978 0.385651 16.9268 0.375 16.875 0.375C16.8232 0.375 16.772 0.385651 16.7245 0.40629L10.7245 3.03129C10.6578 3.06054 10.601 3.10862 10.5611 3.16964C10.5212 3.23066 10.5 3.30199 10.5 3.37488V4.87488C10.5 4.9372 10.5155 4.99854 10.5451 5.05336C10.5748 5.10818 10.6176 5.15474 10.6698 5.18885C10.7219 5.22295 10.7818 5.24352 10.8439 5.24869C10.906 5.25387 10.9684 5.24348 11.0255 5.21848L11.625 4.95598V7.12488H1.5C1.40054 7.12488 1.30516 7.16439 1.23483 7.23472C1.16451 7.30504 1.125 7.40043 1.125 7.49988V8.62488C1.125 8.72434 1.16451 8.81972 1.23483 8.89005C1.30516 8.96037 1.40054 8.99988 1.5 8.99988H2.625V10.8749H1.5C1.40054 10.8749 1.30516 10.9144 1.23483 10.9847C1.16451 11.055 1.125 11.1504 1.125 11.2499V12.3749C1.125 12.4743 1.16451 12.5697 1.23483 12.64C1.30516 12.7104 1.40054 12.7499 1.5 12.7499H1.875V21.7499H0.75C0.650544 21.7499 0.555161 21.7894 0.484835 21.8597C0.414509 21.93 0.375 22.0254 0.375 22.1249V23.2499C0.375 23.3493 0.414509 23.4447 0.484835 23.515C0.555161 23.5854 0.650544 23.6249 0.75 23.6249H23.25C23.3495 23.6249 23.4448 23.5854 23.5152 23.515C23.5855 23.4447 23.625 23.3493 23.625 23.2499V22.1249C23.625 22.0254 23.5855 21.93 23.5152 21.8597C23.4448 21.7894 23.3495 21.7499 23.25 21.7499Z" fill="#F88379" />
        <path d="M17.625 19.875H20.625C20.7245 19.875 20.8198 19.8355 20.8902 19.7652C20.9605 19.6948 21 19.5995 21 19.5V16.875C21 16.7755 20.9605 16.6802 20.8902 16.6098C20.8198 16.5395 20.7245 16.5 20.625 16.5H17.625C17.5255 16.5 17.4302 16.5395 17.3598 16.6098C17.2895 16.6802 17.25 16.7755 17.25 16.875V19.5C17.25 19.5995 17.2895 19.6948 17.3598 19.7652C17.4302 19.8355 17.5255 19.875 17.625 19.875Z" fill="#F88379" />
    </svg>
);

const TownhouseSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.4844 7.25191C23.559 7.25191 23.6305 7.22227 23.6832 7.16953C23.736 7.11679 23.7656 7.04525 23.7656 6.97066V5.85063C23.7656 5.77603 23.736 5.7045 23.6832 5.65175C23.6305 5.59901 23.559 5.56938 23.4844 5.56938H16.9213V4.46875H17.1394C17.214 4.46875 17.2855 4.43912 17.3382 4.38637C17.391 4.33363 17.4206 4.26209 17.4206 4.1875V3.61487H18.1122C18.1868 3.61487 18.2583 3.58524 18.311 3.5325C18.3638 3.47975 18.3934 3.40822 18.3934 3.33362V1.86719C18.3934 1.7926 18.3638 1.72106 18.311 1.66831C18.2583 1.61557 18.1868 1.58594 18.1122 1.58594H5.88783C5.81324 1.58594 5.7417 1.61557 5.68895 1.66831C5.63621 1.72106 5.60658 1.7926 5.60658 1.86719V3.33362C5.60658 3.40822 5.63621 3.47975 5.68895 3.5325C5.7417 3.58524 5.81324 3.61487 5.88783 3.61487H6.57938V4.1875C6.57938 4.26209 6.60901 4.33363 6.66175 4.38637C6.7145 4.43912 6.78603 4.46875 6.86063 4.46875H7.07869V5.56938H0.515625C0.441033 5.56938 0.369496 5.59901 0.316751 5.65175C0.264007 5.7045 0.234375 5.77603 0.234375 5.85063V6.97066C0.234375 7.04525 0.264007 7.11679 0.316751 7.16953C0.369496 7.22227 0.441033 7.25191 0.515625 7.25191H1.23975V13.1577H1.03655C0.961955 13.1577 0.890418 13.1874 0.837673 13.2401C0.784928 13.2929 0.755297 13.3644 0.755297 13.439V14.6076C0.755297 14.6822 0.784928 14.7538 0.837673 14.8065C0.890418 14.8592 0.961955 14.8889 1.03655 14.8889H1.23975V20.5653H0.515625C0.441033 20.5653 0.369496 20.595 0.316751 20.6477C0.264007 20.7005 0.234375 20.772 0.234375 20.8466V22.1355C0.234375 22.2101 0.264007 22.2816 0.316751 22.3344C0.369496 22.3871 0.441033 22.4168 0.515625 22.4168H23.4844C23.559 22.4168 23.6305 22.3871 23.6832 22.3344C23.736 22.2816 23.7656 22.2101 23.7656 22.1355V20.8466C23.7656 20.772 23.736 20.7005 23.6832 20.6477C23.6305 20.595 23.559 20.5653 23.4844 20.5653H22.7603V14.8889H22.9635C23.038 14.8889 23.1096 14.8592 23.1623 14.8065C23.2151 14.7538 23.2447 14.6822 23.2447 14.6076V13.439C23.2447 13.3644 23.2151 13.2929 23.1623 13.2401C23.1096 13.1874 23.038 13.1577 22.9635 13.1577H22.7603V7.25191H23.4844Z" fill="#F88379" />
    </svg>
);

const LandSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8L18 5L12 2V12" stroke="#F88379" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.99914 11.9922L2.49914 15.1322C2.34524 15.2194 2.21723 15.3459 2.12817 15.4987C2.03911 15.6516 1.99219 15.8253 1.99219 16.0022C1.99219 16.1791 2.03911 16.3528 2.12817 16.5056C2.21723 16.6585 2.34524 16.785 2.49914 16.8722L10.9991 21.7322C11.3032 21.9077 11.6481 22.0001 11.9991 22.0001C12.3502 22.0001 12.6951 21.9077 12.9991 21.7322L21.4991 16.8722C21.653 16.785 21.781 16.6585 21.8701 16.5056C21.9592 16.3528 22.0061 16.1791 22.0061 16.0022C22.0061 15.8253 21.9592 15.6516 21.8701 15.4987C21.781 15.3459 21.653 15.2194 21.4991 15.1322L15.9991 12.0022" stroke="#F88379" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.48828 12.8516L17.5083 19.1516" stroke="#F88379" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.51 12.8516L6.5 19.1516" stroke="#F88379" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ─────────────── Reusable UI Sub-components ─────────────── */

const SectionLabel = ({ children }) => (
    <p className="text-sm font-medium leading-[110%] m-0" style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}>
        {children}
    </p>
);

const DropdownInput = ({ value, onChange, placeholder, options = [], icon }) => (
    <div className="relative w-full" style={{ height: '50px' }}>
        {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {icon}
            </div>
        )}
        <select
            value={value}
            onChange={onChange}
            className={`w-full h-full appearance-none rounded-lg border border-[var(--form-border)] bg-white px-4 ${icon ? 'pl-10' : 'pl-4'
                } text-base text-[var(--form-text)]`}
        >
            <option value="" disabled hidden>
                {placeholder}
            </option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown24 />
        </div>
    </div>
);

const SmallDropdown = ({ value, onChange, placeholder, options = [], icon }) => (
    <div
        className="flex p-2 items-center flex-1 rounded-lg overflow-hidden"
        style={{ border: '1px solid var(--form-border)', background: 'var(--form-input-bg)' }}
    >


        <select
            value={value}
            onChange={onChange}
            className="flex-1 text-xs font-normal leading-[110%]"
            style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
        >
            <option value="" disabled hidden>
                {placeholder}
            </option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>

        {/* <ChevronDown16 /> */}
    </div>
);

const ToggleTab = ({ options, value, onChange }) => (
    <div
        className="flex p-1 items-center gap-4 self-stretch rounded-lg"
        style={{ background: 'var(--form-section-bg)' }}
    >
        {options.map(opt => (
            <button
                key={opt.value}
                onClick={() => onChange(opt.value)}
                className="flex py-3 px-4 justify-center items-center gap-2 flex-1 rounded-lg text-xs font-medium leading-[110%] transition-all"
                style={{
                    background: value === opt.value ? 'var(--form-input-bg)' : 'transparent',
                    color: 'var(--form-text)',
                    fontFamily: 'Poppins, sans-serif',
                    boxShadow: value === opt.value ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
            >
                {opt.label}
            </button>
        ))}
    </div>
);

const YesNoToggle = ({ value, onChange }) => (
    <div className="flex items-center">
        <button
            onClick={() => onChange('yes')}
            className="flex h-8 px-4 justify-center items-center gap-2 rounded-l text-base font-normal leading-[110%] transition-all"
            style={{
                background: value === 'yes' ? 'var(--form-secondary)' : '#fff',
                color: value === 'yes' ? 'var(--base-black)' : 'var(--form-text)',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 4px 4px rgba(0,0,0,0.25)'
            }}
        >
            Yes
        </button>
        <button
            onClick={() => onChange('no')}
            className="flex h-8 px-4 justify-center items-center gap-2 rounded-r text-base font-normal leading-[110%] transition-all"
            style={{
                background: value === 'no' ? 'var(--form-secondary)' : '#fff',
                color: value === 'no' ? 'var(--base-black)' : 'var(--form-text)',
                fontFamily: 'Poppins, sans-serif',
                border: value === 'no' ? 'none' : '1px solid #F9F9F9',
                boxShadow: value === 'no' ? '0 4px 4px rgba(0,0,0,0.25)' : '0 4px 4px rgba(153,149,149,0.24) inset'
            }}
        >
            No
        </button>
    </div>
);

const SqToggle = ({ value, onChange }) => (
    <div className="flex items-center">
        <button
            onClick={() => onChange('sqft')}
            className="flex h-8 px-4 justify-center items-center gap-2 rounded-l text-base font-normal leading-[110%] transition-all"
            style={{
                background: value === 'sqft' ? 'var(--form-secondary)' : '#fff',
                color: value === 'sqft' ? 'var(--base-black)' : 'var(--form-text)',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 4px 4px rgba(0,0,0,0.25)'
            }}
        >
            Sq. Ft
        </button>
        <button
            onClick={() => onChange('sqm')}
            className="flex h-8 px-4 justify-center items-center gap-2 rounded-r text-base font-normal leading-[110%] transition-all"
            style={{
                background: value === 'sqm' ? 'var(--form-secondary)' : '#fff',
                color: value === 'sqm' ? 'var(--base-black)' : 'var(--form-text)',
                fontFamily: 'Poppins, sans-serif',
                border: value === 'sqm' ? 'none' : '1px solid #F9F9F9',
                boxShadow: value === 'sqm' ? '0 4px 4px rgba(0,0,0,0.25)' : '0 4px 4px rgba(153,149,149,0.24) inset'
            }}
        >
            Sq. M
        </button>
    </div>
);

const TextInput = ({ value, onChange, placeholder, prefix }) => (
    <div className="relative w-full">
        {prefix && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                {prefix}
            </div>
        )}
        <input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full h-[50px] pl-${prefix ? '10' : '2'} pr-4 rounded-lg border border-[var(--form-border)] bg-white text-base text-[#565656] outline-none`}
            style={{
                color: value ? 'var(--form-text)' : 'var(--form-placeholder)',
                fontFamily: 'Poppins, sans-serif'
            }}
        />
    </div>
);

const Textarea = ({ value, onChange, placeholder }) => (
    <div
        className="flex p-3 items-start gap-2 self-stretch rounded-lg"
        style={{ border: '1px solid #999', background: 'var(--form-input-bg)', minHeight: '79px' }}
    >
        <textarea
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 self-stretch text-xs font-normal leading-[120%] outline-none bg-transparent resize-none"
            style={{
                color: value ? 'var(--form-text)' : '#999',
                fontFamily: 'Poppins, sans-serif'
            }}
            rows={4}
        />
    </div>
);

/* ─────────────────── Main FilterPanel Component ─────────────────── */

export default function FilterPanel({ isOpen, onClose }) {
    /* ── State ── */
    const [category, setCategory] = useState('residential');
    const [propertyType, setPropertyType] = useState('apartment');
    const [negotiable, setNegotiable] = useState('yes');
    const [occupancy, setOccupancy] = useState('tenanted');
    const [completion, setCompletion] = useState('off-plan');
    const [areaUnit, setAreaUnit] = useState('sqft');
    const [areaValue, setAreaValue] = useState('');
    const [plotSize, setPlotSize] = useState('');
    const [financeMethod, setFinanceMethod] = useState(['cash']);
    const [name, setName] = useState('Mr. Shamim');
    const [phone, setPhone] = useState('+971************');
    const [email, setEmail] = useState('example@email.com');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [rentPerMonth, setRentPerMonth] = useState('');
    const [notes, setNotes] = useState('');

    const toggleFinance = (method) => {
        setFinanceMethod(prev =>
            prev.includes(method) ? prev.filter(m => m !== method) : [...prev, method]
        );
    };

    const propertyTypes = [
        { value: 'apartment', label: 'Apartment', Icon: ApartmentSVG },
        { value: 'villa', label: 'Villa', Icon: VillaSVG },
        { value: 'townhouse', label: 'Townhouse', Icon: TownhouseSVG },
        { value: 'land', label: 'Land', Icon: LandSVG },
    ];

    return (

        <div
            className={`fixed inset-0 z-50 transition-opacity duration-500
      ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >

            {/* Overlay */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/40"
            />

            {/* Drawer */}
            <div
                className={`absolute right-0 top-0 h-full w-[400px] max-w-full bg-white shadow-xl
        transform transition-transform duration-500 ease-in-out overflow-auto
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <div
                    className="flex flex-col w-full bg-white overflow-y-auto"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {/* ── Header ── */}
                    <div
                        className="flex w-full px-6 items-center justify-between sticky top-0 bg-white z-10"
                        style={{ height: '69px', borderBottom: '1.111px solid #E5E7EB' }}
                    >
                        <h2
                            className="text-lg font-semibold leading-7"
                            style={{ color: '#0A0A0A', fontFamily: 'Poppins, sans-serif' }}
                        >
                            Filters
                        </h2>
                        <button
                            onClick={onClose}
                            className="flex items-center justify-center rounded-[10px] p-2 hover:bg-gray-100 transition-colors"
                            style={{ width: '36px', height: '36px' }}
                            aria-label="Close filters"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* ── Body ── */}
                    <div className="flex flex-col gap-4 px-4 py-4">

                        {/* ── Location ── */}
                        <div className="flex flex-col gap-4">
                            <p
                                className="text-base font-medium leading-[120%] truncate"
                                style={{ color: '#000', fontFamily: 'Manrope, sans-serif' }}
                            >
                                Location
                            </p>
                            <div
                                className="flex p-[10px] items-center gap-[10px] self-stretch rounded-lg"
                                style={{ border: '0.5px solid var(--form-secondary)' }}
                            >
                                <LocationIcon />
                                <span
                                    className="flex-1 text-xs font-normal leading-[120%] truncate"
                                    style={{ color: '#565656', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Area, community, cluster or building
                                </span>
                            </div>
                        </div>

                        {/* ── Category & Type ── */}
                        <div className="flex flex-col gap-4">
                            <p
                                className="text-base font-medium leading-[120%] truncate"
                                style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                            >
                                Category &amp; Type
                            </p>

                            {/* Residential / Commercial toggle */}
                            <div
                                className="flex p-1 items-center gap-4 self-stretch rounded-lg"
                                style={{ border: '1px solid #DBDBDB' }}
                            >
                                <button
                                    onClick={() => setCategory('residential')}
                                    className="flex h-9 px-2 justify-center items-center gap-2 flex-1 rounded-lg text-xs font-medium leading-[120%] transition-all"
                                    style={{
                                        background: category === 'residential' ? 'var(--form-secondary)' : 'transparent',
                                        color: category === 'residential' ? '#0A0A0A' : '#565656',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: category === 'residential' ? 500 : 400
                                    }}
                                >
                                    Residential
                                </button>
                                <button
                                    onClick={() => setCategory('commercial')}
                                    className="flex h-9 px-2 justify-center items-center gap-2 flex-1 rounded-lg text-xs leading-[120%] transition-all"
                                    style={{
                                        background: category === 'commercial' ? 'var(--form-secondary)' : 'transparent',
                                        color: category === 'commercial' ? '#0A0A0A' : '#565656',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: category === 'commercial' ? 500 : 400
                                    }}
                                >
                                    Commercial
                                </button>
                            </div>

                            {/* Property type icons */}
                            <div className="flex py-2 items-center justify-start gap-4 overflow-x-auto">
                                {propertyTypes.map(({ value, label, Icon }) => (
                                    <button
                                        key={value}
                                        onClick={() => setPropertyType(value)}
                                        className="flex flex-col items-center gap-2 shrink-0"
                                    >
                                        <div
                                            className="flex w-[60px] h-[60px] p-2 justify-center items-center rounded-full overflow-hidden"
                                            style={{
                                                border: '0.5px solid var(--form-secondary)',
                                                background: propertyType === value ? '#DFFFF4' : '#FFF',
                                                boxShadow: '0 0 10px rgba(0,0,0,0.25)'
                                            }}
                                        >
                                            <Icon />
                                        </div>
                                        <span
                                            className="text-xs font-light leading-[120%] text-center"
                                            style={{ color: '#000', fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            {label}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Select configuration button */}
                            <div className="flex px-0 flex-col items-start gap-3 self-stretch ">
                                <button
                                    className="w-full flex py-3 px-0 justify-center items-center gap-2 self-stretch rounded-lg text-xs font-medium leading-[140%]"
                                    style={{
                                        border: '1px solid var(--form-secondary)',
                                        background: '#E3FFF6',
                                        color: '#047E55',
                                        fontFamily: 'Poppins, sans-serif'
                                    }}
                                >
                                    Select configuration : {propertyTypes.find(p => p.value === propertyType)?.label || 'Apartment'}
                                </button>
                            </div>
                        </div>

                        {/* ── Budget ── */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-0">
                                <SectionLabel>Budget</SectionLabel>
                            </div>
                            <div
                                className="flex h-[50px] px-1 items-center gap-1 2xl:gap-2 self-stretch rounded-lg overflow-hidden"
                                style={{ border: '1px solid var(--form-border)' }}
                            >
                                <span
                                    className="flex-1 text-base font-normal leading-[110%]"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    e.g. 2,500,000
                                </span>
                                <span
                                    className="text-xs font-normal leading-[110%]"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Negotiable
                                </span>
                                <YesNoToggle value={negotiable} onChange={setNegotiable} />
                            </div>
                        </div>

                        {/* ── Property Status ── */}
                        <div className="flex flex-col gap-3">
                            <h3
                                className="text-xl font-medium leading-[110%] self-stretch"
                                style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                            >
                                Property Status*
                            </h3>

                            {/* Occupancy Status */}
                            <div className="flex flex-col gap-2">
                                <SectionLabel>Occupancy Status *</SectionLabel>
                                <ToggleTab
                                    options={[{ value: 'vacant', label: 'Vacant' }, { value: 'tenanted', label: 'Tenanted' }]}
                                    value={occupancy}
                                    onChange={setOccupancy}
                                />
                            </div>

                            {/* Completion Status */}
                            <div className="flex flex-col gap-2">
                                <SectionLabel>Completion Status *</SectionLabel>
                                <ToggleTab
                                    options={[{ value: 'ready', label: 'Ready' }, { value: 'off-plan', label: 'Off-Plan' }]}
                                    value={completion}
                                    onChange={setCompletion}
                                />
                            </div>
                        </div>

                        {/* ── Bedrooms & Bathrooms ── */}
                        <div className="flex items-center gap-4">
                            {/* Bedrooms */}
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="text-xs font-medium leading-[110%]"
                                        style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Bedrooms (Min) *
                                    </span>
                                    <InfoCircle />
                                </div>
                                <SmallDropdown value="Any" options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]} />
                            </div>
                            {/* Bathrooms */}
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="text-xs font-medium leading-[110%]"
                                        style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Bathrooms (Min) *
                                    </span>
                                    <InfoCircle />
                                </div>
                                <SmallDropdown value="Any" options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]} />
                            </div>
                        </div>

                        {/* ── Built-Up Area ── */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <SectionLabel>Built-Up Area(BUA)</SectionLabel>
                            </div>
                            <TextInput
                                placeholder="Enter Area"
                                prefix={<AreaIcon />}
                            />
                            <SqToggle value={areaUnit} onChange={setAreaUnit} />
                        </div>

                        {/* ── Plot Size ── */}
                        <div className="flex flex-col gap-2">
                            <SectionLabel>Plot Size</SectionLabel>
                            <TextInput
                                placeholder="Enter size"
                                prefix={<PlotIcon />}
                            />
                        </div>



                        {/* ── Parking Spaces ── */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <SectionLabel>Parking Spaces (Min)</SectionLabel>
                                <InfoCircle />
                            </div>
                            <DropdownInput
                                value="any"
                                //   onChange={(e) => setParkingSpaces(e.target.value)}
                                placeholder="Select parking spaces"
                                options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]}
                            />
                        </div>

                        {/* ── Parking Type ── */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <SectionLabel>Parking Type*</SectionLabel>
                            </div>
                            <DropdownInput
                                value="any"
                                //   onChange={(e) => setParkingSpaces(e.target.value)}
                                placeholder="Select Parking Type"
                                options={[
                                    { value: 'any', label: 'Any' },
                                    { value: 'first', label: 'First' },
                                    { value: 'second', label: 'Second' },

                                ]}
                            />
                        </div>

                        {/* ── Features ── */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <SectionLabel>Features</SectionLabel>
                            </div>
                            <DropdownInput
                                value="any"
                                //   onChange={(e) => setParkingSpaces(e.target.value)}
                                placeholder="Select Features"
                                options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]}
                            />
                        </div>

                        {/* ── Property Condition ── */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <SectionLabel>Property condition</SectionLabel>
                            </div>
                            <DropdownInput value="All" placeholder="Select Property condition"
                                options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]} />
                        </div>

                        {/* ── Furnishing ── */}
                        <div className="flex flex-col gap-2">
                            <SectionLabel>Furnishing</SectionLabel>
                            <DropdownInput value="All" placeholder="Select Furnishing"
                                options={[
                                    { value: 'any', label: 'Any' },
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                    { value: '4', label: '4+' },
                                ]} />
                        </div>

                        {/* ── Choose Amenities ── */}
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col gap-2">
                                <SectionLabel>
                                    Choose Amenities
                                </SectionLabel>
                                <DropdownInput value="All" placeholder="Choose Amenities"
                                    options={[
                                        { value: 'any', label: 'Any' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4+' },
                                    ]} />
                            </div>

                            {/* ── Viewing Option ── */}
                            <div className="flex flex-col gap-2">
                                <SectionLabel>
                                    Viewing option
                                </SectionLabel>

                                <DropdownInput value="Multi select" placeholder="Choose Amenities"
                                    options={[
                                        { value: 'any', label: 'Any' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4+' },
                                    ]} />
                            </div>
                        </div>

                        {/* ── Buyer Profile ── */}
                        <div className="flex flex-col gap-6">
                            <h3
                                className="text-xl font-medium leading-[110%] self-stretch"
                                style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                            >
                                Buyer Profile*
                            </h3>

                            {/* Preferred Finance Method */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <SectionLabel>Preferred Finance Method *</SectionLabel>
                                <div className="flex flex-col gap-4 self-stretch">

                                    {/* Cash Buyer */}
                                    <button
                                        onClick={() => toggleFinance('cash')}
                                        className="flex h-[50px] px-4 py-3 items-center gap-2 flex-1 rounded-lg overflow-hidden"
                                        style={{ border: '1px solid var(--form-border)' }}
                                    >
                                        {financeMethod.includes('cash') ? <CheckedCheckbox /> : <UncheckedCheckbox />}
                                        <span
                                            className="text-base font-normal leading-[110%]"
                                            style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            Cash Buyer
                                        </span>
                                    </button>

                                    {/* Mortgage Buyer */}
                                    <button
                                        onClick={() => toggleFinance('mortgage')}
                                        className="flex h-[50px] px-4 py-3 items-center gap-2 flex-1 rounded-lg overflow-hidden"
                                        style={{ border: '1px solid var(--form-border)' }}
                                    >
                                        {financeMethod.includes('mortgage') ? <CheckedCheckbox /> : <UncheckedCheckbox />}
                                        <span
                                            className="text-base font-normal leading-[110%]"
                                            style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            Mortgage Buyer
                                        </span>
                                    </button>

                                    {/* Payment Plan (Off-plan) */}
                                    <button
                                        onClick={() => toggleFinance('payment-plan')}
                                        className="flex h-[50px] px-4 py-3 items-center justify-between flex-1 rounded-lg overflow-hidden"
                                        style={{ border: '1px solid var(--form-border)' }}
                                    >
                                        <div className="flex items-center gap-2">
                                            {financeMethod.includes('payment-plan') ? <CheckedCheckbox /> : <UncheckedCheckbox />}
                                            <span
                                                className="text-base font-normal leading-[110%]"
                                                style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                            >
                                                Payment Plan ( Off-plan )
                                            </span>
                                        </div>
                                        <InfoCircle />
                                    </button>
                                </div>
                            </div>

                            {/* Target Closing Date */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <SectionLabel>Target Closing Date*</SectionLabel>
                                <DropdownInput value="Q1 2026" placeholder="Closing Date"
                                    options={[
                                        { value: 'Q1 2026', label: 'Q1 2026' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4+' },
                                    ]} />
                            </div>

                            {/* Urgency Level */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <SectionLabel>Urgency Level*</SectionLabel>
                                <DropdownInput value="Quick Sale" placeholder="Urgency Level"
                                    options={[
                                        { value: 'Quick Sale', label: 'Quick Sale' },
                                        { value: '1', label: '1' },
                                        { value: '2', label: '2' },
                                        { value: '3', label: '3' },
                                        { value: '4', label: '4+' },
                                    ]} />
                            </div>
                        </div>

                        {/* ── Contact Info ── */}
                        <div className="flex flex-col gap-4 self-stretch">

                            {/* Name */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Name
                                </p>
                                <TextInput value={name} onChange={setName} placeholder="Enter name" />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Phone
                                </p>
                                <TextInput value={phone} onChange={setPhone} placeholder="Enter phone" />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Email
                                </p>
                                <TextInput value={email} onChange={setEmail} placeholder="Enter email" />
                            </div>

                            {/* Expected Price */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Expected Price
                                </p>
                                <div
                                    className="flex p-3 justify-center items-center gap-2 self-stretch rounded-lg"
                                    style={{ border: '1px solid #999', background: 'var(--form-input-bg)' }}
                                >
                                    <div className="flex-1 flex items-center gap-1">
                                        <span
                                            className="text-base font-normal"
                                            style={{ color: '#000', fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            AED
                                        </span>
                                        <input
                                            value={expectedPrice}
                                            onChange={e => setExpectedPrice(e.target.value)}
                                            placeholder="Enter Expected Price"
                                            className="flex-1 text-xs font-normal leading-[120%] outline-none bg-transparent ml-1"
                                            style={{ color: '#999', fontFamily: 'Poppins, sans-serif' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Rent / Month */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Rent / Month
                                </p>
                                <div
                                    className="flex p-3 justify-center items-center gap-2 self-stretch rounded-lg"
                                    style={{ border: '1px solid #999', background: 'var(--form-input-bg)' }}
                                >
                                    <div className="flex-1 flex items-center gap-1">
                                        <span
                                            className="text-base font-normal"
                                            style={{ color: '#000', fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            AED
                                        </span>
                                        <input
                                            value={rentPerMonth}
                                            onChange={e => setRentPerMonth(e.target.value)}
                                            placeholder="Enter Rent/month"
                                            className="flex-1 text-xs font-normal leading-[120%] outline-none bg-transparent ml-1"
                                            style={{ color: '#999', fontFamily: 'Poppins, sans-serif' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="flex flex-col gap-2 self-stretch">
                                <p
                                    className="text-base font-medium leading-[120%] truncate flex-1"
                                    style={{ color: 'var(--form-text)', fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Notes
                                </p>
                                <Textarea value={notes} onChange={setNotes} placeholder="Enter your notes here" />
                            </div>
                        </div>

                        {/* ── Commission Notice ── */}
                        <div className="flex items-start gap-[18px] w-full">
                            <div
                                className="flex py-3 px-4 items-start gap-2 flex-1 self-stretch rounded-2xl overflow-hidden"
                                style={{ border: '1px solid #FDC700', background: '#FFF6DF' }}
                            >
                                <InfoHexagon />
                                <div className="flex-1">
                                    <span
                                        className="text-xs font-medium leading-[110%]"
                                        style={{ color: '#A65F00', fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Commission Notice:{' '}
                                    </span>
                                    <span
                                        className="text-xs font-normal leading-[110%]"
                                        style={{ color: '#A65F00', fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        Buyer's commission and government fees are typically paid by the buyer. All commission and fee details are discussed and agreed directly with the agent handling the transaction.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* bottom padding */}
                        <div className="h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
