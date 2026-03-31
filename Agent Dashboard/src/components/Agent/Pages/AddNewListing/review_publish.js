import { useState } from "react";

const IMAGES = [
  "https://api.builder.io/api/v1/image/assets/TEMP/4001cc7fe346ac19cb9d898c70ea87845bf843c9?width=2926",
  "https://api.builder.io/api/v1/image/assets/TEMP/300e2c4ae0d760dc61bac33cac024831451cbaef?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/b0e907c375df20013431adc80f2dcb701c2f6d1d?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/3294172ddc50968ca970a816f9cbd2e2da6f76be?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/e046edeaa2c8f0a0ac8848e0e3191b4835da5f3c?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/78f549d08d63ef4389638b96cc12c9b4734095a2?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/005703ad8ecd83951f572fbe03fbd170152ba1e8?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/46014bfa40b91378d278cb704f3540406db96f75?width=360",
  "https://api.builder.io/api/v1/image/assets/TEMP/d006d7d1cbee9868e0445fd7cdca2cacf1b9289f?width=360",
];

const DOT_COUNT = 11;

function LocationPinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
        fill="#68706A"
      />
    </svg>
  );
}

function BedChipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.29442 2.16406H8.70298C9.92815 2.16405 10.8986 2.16404 11.658 2.26615C12.4397 2.37124 13.0723 2.59265 13.5712 3.09156C14.0701 3.59047 14.2915 4.2231 14.3966 5.00471C14.4975 5.75523 14.4987 6.71174 14.4987 7.91651C14.728 8.10566 14.91 8.34952 15.0258 8.62914C15.106 8.82274 15.1371 9.02242 15.1515 9.23382C15.1654 9.43689 15.1654 9.68425 15.1654 9.98056V10.0142C15.1654 10.3105 15.1654 10.5579 15.1515 10.761C15.1371 10.9724 15.106 11.1721 15.0258 11.3657C14.8397 11.8149 14.4828 12.1718 14.0336 12.3578C13.84 12.438 13.6403 12.4691 13.4289 12.4836C13.3482 12.4891 13.2604 12.4924 13.1654 12.4944V13.3307C13.1654 13.6069 12.9415 13.8307 12.6654 13.8307C12.3892 13.8307 12.1654 13.6069 12.1654 13.3307V12.4974H3.83203V13.3307C3.83203 13.6069 3.60817 13.8307 3.33203 13.8307C3.05589 13.8307 2.83203 13.6069 2.83203 13.3307V12.4944C2.73697 12.4924 2.64921 12.4891 2.56845 12.4836C2.35705 12.4691 2.15737 12.438 1.96378 12.3578C1.51456 12.1718 1.15766 11.8149 0.971586 11.3657C0.891397 11.1721 0.860302 10.9724 0.845878 10.761C0.832022 10.5579 0.832027 10.3105 0.832031 10.0142V9.98056C0.832027 9.68425 0.832022 9.4369 0.845878 9.23382C0.860302 9.02242 0.891397 8.82274 0.971586 8.62914C1.08741 8.34952 1.26943 8.10566 1.4987 7.91651C1.4987 6.71174 1.49988 5.75523 1.60079 5.00471C1.70587 4.2231 1.92728 3.59047 2.42619 3.09156C2.9251 2.59265 3.55773 2.37124 4.33935 2.26615C5.09882 2.16404 6.06925 2.16405 7.29442 2.16406Z" fill="#565656"/>
    </svg>
  );
}

function BathChipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.58881 1.83594C2.98676 1.83594 2.4987 2.324 2.4987 2.92605V7.5026H2.68822C2.69547 7.50259 2.70269 7.5026 2.70987 7.5026C2.71342 7.5026 2.71696 7.5026 2.72048 7.5026L13.2875 7.5026C13.2947 7.5026 13.3019 7.50259 13.3092 7.5026H14.6654C14.9415 7.5026 15.1654 7.72646 15.1654 8.0026C15.1654 8.27875 14.9415 8.5026 14.6654 8.5026H14.4868C14.4911 8.53257 14.4942 8.5629 14.4962 8.59357C14.4987 8.63206 14.4987 8.67367 14.4987 8.71378L14.4987 8.73904C14.4987 8.98919 14.4987 9.13583 14.4883 9.29938C14.3937 10.7903 13.5881 12.167 12.4204 13.0673C12.4296 13.0817 12.4381 13.0967 12.4459 13.1123L13.1126 14.4457C13.2361 14.6927 13.136 14.993 12.889 15.1165C12.642 15.24 12.3416 15.1399 12.2182 14.8929L11.573 13.6026C11.0385 13.8732 10.4572 14.0513 9.85263 14.1125C9.68965 14.129 9.59018 14.1327 9.41625 14.1393C8.92276 14.1578 8.43969 14.1693 7.9987 14.1693C7.5577 14.1693 7.07464 14.1578 6.58115 14.1393C6.40722 14.1327 6.30775 14.129 6.14476 14.1125C5.54018 14.0513 4.95888 13.8732 4.42437 13.6026L3.77924 14.8929C3.65575 15.1399 3.35541 15.24 3.10842 15.1165C2.86144 14.993 2.76132 14.6927 2.88482 14.4457L3.55148 13.1123C3.55929 13.0967 3.5678 13.0817 3.57696 13.0673C2.40934 12.167 1.6037 10.7903 1.50907 9.29938C1.49869 9.13582 1.49869 8.98916 1.4987 8.73897L1.4987 8.66927V8.5026H1.33203C1.05589 8.5026 0.832031 8.27875 0.832031 8.0026C0.832031 7.72646 1.05589 7.5026 1.33203 7.5026H1.4987V2.92605C1.4987 1.77171 2.43447 0.835938 3.58881 0.835938Z" fill="#565656"/>
    </svg>
  );
}

function SizeChipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.64 0.5H3.36C2.60189 0.501322 1.8752 0.803067 1.33913 1.33913C0.803067 1.8752 0.501322 2.60189 0.5 3.36V12.64C0.501322 13.3981 0.803067 14.1248 1.33913 14.6609C1.8752 15.1969 2.60189 15.4987 3.36 15.5H12.64C13.3981 15.4987 14.1248 15.1969 14.6609 14.6609C15.1969 14.1248 15.4987 13.3981 15.5 12.64V3.36C15.4987 2.60189 15.1969 1.8752 14.6609 1.33913C14.1248 0.803067 13.3981 0.501322 12.64 0.5Z" stroke="#565656" strokeWidth="1" fill="none"/>
      <path d="M12.5 8.92C12.3674 8.92 12.2402 8.97268 12.1464 9.06645C12.0527 9.16021 12 9.28739 12 9.42V11.295L4.705 4H6.58C6.71261 4 6.83979 3.94732 6.93355 3.85355C7.02732 3.75979 7.08 3.63261 7.08 3.5C7.08 3.36739 7.02732 3.24021 6.93355 3.14645C6.83979 3.05268 6.71261 3 6.58 3H3.345C3.2535 3 3.16575 3.03635 3.10105 3.10105C3.03635 3.16575 3 3.2535 3 3.345V6.58C3 6.71261 3.05268 6.83979 3.14645 6.93355C3.24021 7.02732 3.36739 7.08 3.5 7.08C3.63261 7.08 3.75979 7.02732 3.85355 6.93355C3.94732 6.83979 4 6.71261 4 6.58V4.705L11.295 12H9.42C9.28739 12 9.16021 12.0527 9.06645 12.1464C8.97268 12.2402 8.92 12.3674 8.92 12.5C8.92 12.6326 8.97268 12.7598 9.06645 12.8536C9.16021 12.9473 9.28739 13 9.42 13H12.655C12.7465 13 12.8343 12.9637 12.899 12.899C12.9637 12.8343 13 12.7465 13 12.655V9.42C13 9.28739 12.9473 9.16021 12.8536 9.06645C12.7598 8.97268 12.6326 8.92 12.5 8.92Z" fill="#565656"/>
    </svg>
  );
}

function PlotChipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33203 5.16927C9.05589 5.16927 8.83203 4.94541 8.83203 4.66927C8.83203 4.39313 9.05589 4.16927 9.33203 4.16927H11.332C11.6082 4.16927 11.832 4.39313 11.832 4.66927V6.66927C11.832 6.94541 11.6082 7.16927 11.332 7.16927C11.0559 7.16927 10.832 6.94541 10.832 6.66927V5.87638L9.35225 7.35616C9.15699 7.55142 8.84041 7.55142 8.64514 7.35616C8.44988 7.16089 8.44988 6.84431 8.64514 6.64905L10.1249 5.16927H9.33203Z" fill="#565656"/>
      <path d="M7.35225 8.64905C7.54751 8.84431 7.54751 9.16089 7.35225 9.35616L5.87247 10.8359H6.66536C6.94151 10.8359 7.16536 11.0598 7.16536 11.3359C7.16536 11.6121 6.94151 11.8359 6.66536 11.8359H4.66536C4.38922 11.8359 4.16536 11.6121 4.16536 11.3359V9.33594C4.16536 9.05979 4.38922 8.83594 4.66536 8.83594C4.94151 8.83594 5.16536 9.05979 5.16536 9.33594V10.1288L6.64514 8.64905C6.84041 8.45379 7.15699 8.45379 7.35225 8.64905Z" fill="#565656"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96045 0.835938C6.42152 0.835929 5.21549 0.835922 4.2745 0.962435C3.31134 1.09193 2.55133 1.36216 1.95479 1.9587C1.35825 2.55523 1.08802 3.31525 0.958529 4.27841C0.832016 5.2194 0.832023 6.42542 0.832031 7.96435V8.04086C0.832023 9.57978 0.832016 10.7858 0.958529 11.7268C1.08802 12.69 1.35825 13.45 1.95479 14.0465C2.55133 14.6431 3.31134 14.9133 4.2745 15.0428C5.21549 15.1693 6.42152 15.1693 7.96045 15.1693H8.03695C9.57588 15.1693 10.7819 15.1693 11.7229 15.0428C12.6861 14.9133 13.4461 14.6431 14.0426 14.0465C14.6391 13.45 14.9094 12.69 15.0389 11.7268C15.1654 10.7858 15.1654 9.57978 15.1654 8.04085V7.96436C15.1654 6.42543 15.1654 5.2194 15.0389 4.27841C14.9094 3.31525 14.6391 2.55523 14.0426 1.9587C13.4461 1.36216 12.6861 1.09193 11.7229 0.962435C10.7819 0.835922 9.57588 0.835929 8.03695 0.835938H7.96045Z" fill="#565656"/>
    </svg>
  );
}

function PropertyChip({ icon, label }) {
  return (
    <div className="flex items-center gap-1 px-4 sm:px-8 py-3 sm:py-4 rounded border border-[#E6E7E6] bg-[#F7F8F8] shrink-0">
      {icon}
      <span className="text-[#565656] font-poppins text-[10px] text-center whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

const DESCRIPTION = `Barnes International Realty is pleased to offer this spectacular 5-bedroom townhouse located in Portofino by Damac, DAMAC Lagoons.

Property Details:

- Handover SOON
- 5 bedrooms, 6 bathrooms
- BUA: 2,363.75
- Mediterranean-inspired villas
- All rooms feature double-glazed windows
- Ceramic tiled floors throughout
- Painted plastered walls and soffit
- Fitted kitchen
- IMAGES used are the Damac Lagoons Show Unit

Experience the enchanting allure of French-inspired living at Damac Lagoons. With captivating architecture, vibrant hues, and meticulously crafted interiors, our French-style residences evoke the charm of a quaint French cityscape. Step outside to discover an array of amenities, from a skate park to cycling routes and splash pools, promising unforgettable getaways right at your doorstep.

Damac Lagoons introduces a new master community in Dubai, drawing inspiration from the Mediterranean. Nestled near the allure of Damac Hills yet secluded from the hustle and bustle, it offers a serene escape.

Spanning over 45 million square feet, Damac Lagoons boasts the epitome of luxury living with its opulent villas and townhouses. Surrounded by picturesque lagoons, pristine sandy beaches, and tropical island vibes, immerse yourself in a world of unparalleled experiences.

BARNES is the global leader in luxury real estate. Unveils to you its exclusive offer of rare and exceptional properties, of private residences in the most luxurious of the world's resorts, international capitals, sought-after cities, and lands of promise.`;


/* Salmon-colored SVG icons for Key Property Highlights */
function BedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9436 3.25H13.0564C14.8942 3.24998 16.3498 3.24997 17.489 3.40314C18.6614 3.56076 19.6104 3.89288 20.3588 4.64124C21.1071 5.38961 21.4392 6.33856 21.5969 7.51098C21.7482 8.63675 21.75 10.0715 21.75 11.8787C22.0939 12.1624 22.3669 12.5282 22.5407 12.9476C22.661 13.238 22.7076 13.5375 22.7292 13.8546C22.75 14.1592 22.75 14.5303 22.75 14.9747V15.0253C22.75 15.4697 22.75 15.8408 22.7292 16.1454C22.7076 16.4625 22.661 16.762 22.5407 17.0524C22.2616 17.7262 21.7262 18.2616 21.0524 18.5407C20.762 18.661 20.4625 18.7076 20.1454 18.7292C20.0242 18.7375 19.8926 18.7425 19.75 18.7455V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V18.75H5.75V20C5.75 20.4142 5.41421 20.75 5 20.75C4.58579 20.75 4.25 20.4142 4.25 20V18.7455C4.10741 18.7425 3.97577 18.7375 3.85464 18.7292C3.53754 18.7076 3.23801 18.661 2.94762 18.5407C2.27379 18.2616 1.73844 17.7262 1.45933 17.0524C1.33905 16.762 1.29241 16.4625 1.27077 16.1454C1.24999 15.8408 1.24999 15.4697 1.25 15.0253V14.9748C1.24999 14.5303 1.24999 14.1592 1.27077 13.8546C1.29241 13.5375 1.33905 13.238 1.45933 12.9476C1.63307 12.5282 1.90609 12.1624 2.25 11.8787C2.25001 10.0715 2.25178 8.63675 2.40314 7.51098C2.56076 6.33856 2.89288 5.38961 3.64124 4.64124C4.38961 3.89288 5.33856 3.56076 6.51098 3.40314C7.65019 3.24997 9.10582 3.24998 10.9436 3.25ZM17.75 11.25V10.5C17.75 9.53599 17.7484 8.88843 17.6835 8.40539C17.6214 7.94393 17.5142 7.74643 17.3839 7.61612C17.2536 7.4858 17.0561 7.37858 16.5946 7.31654C16.1116 7.25159 15.464 7.25 14.5 7.25H12.75V11.25H17.75ZM11.25 11.25V7.25H9.5C8.53599 7.25 7.88843 7.25159 7.40539 7.31654C6.94393 7.37858 6.74643 7.4858 6.61612 7.61612C6.4858 7.74643 6.37858 7.94393 6.31654 8.40539C6.25159 8.88843 6.25 9.53599 6.25 10.5V11.25H11.25Z" fill="#F88379"/>
    </svg>
  );
}

function MaximizeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7.75C13.5858 7.75 13.25 7.41421 13.25 7C13.25 6.58579 13.5858 6.25 14 6.25H17C17.4142 6.25 17.75 6.58579 17.75 7V10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10V8.81066L14.0303 11.0303C13.7374 11.3232 13.2626 11.3232 12.9697 11.0303C12.6768 10.7374 12.6768 10.2626 12.9697 9.96967L15.1893 7.75H14Z" fill="#F88379"/>
      <path d="M11.0303 12.9697C11.3232 13.2626 11.3232 13.7374 11.0303 14.0303L8.81066 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17V14C6.25 13.5858 6.58579 13.25 7 13.25C7.41421 13.25 7.75 13.5858 7.75 14V15.1893L9.96967 12.9697C10.2626 12.6768 10.7374 12.6768 11.0303 12.9697Z" fill="#F88379"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426Z" fill="#F88379"/>
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.38517 2.75C4.48209 2.75 3.75 3.48209 3.75 4.38516V11.25H4.03429C4.04516 11.25 4.05599 11.25 4.06675 11.25C4.07208 11.25 4.07739 11.25 4.08268 11.25L19.9332 11.25C19.944 11.25 19.9548 11.25 19.9657 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21.7321C21.7386 12.7949 21.7433 12.8405 21.7463 12.8864C21.7501 12.9442 21.75 13.0066 21.75 13.0668L21.75 13.1047C21.75 13.4799 21.75 13.6998 21.7344 13.9452C21.5925 16.1815 20.384 18.2467 18.6326 19.597C18.6463 19.6186 18.6591 19.6412 18.6708 19.6646L19.6708 21.6646C19.8561 22.0351 19.7059 22.4856 19.3354 22.6708C18.9649 22.8561 18.5144 22.7059 18.3292 22.3354L17.3615 20.4C16.5597 20.8059 15.6878 21.073 14.7809 21.1648C14.5364 21.1896 14.3872 21.1952 14.133 21.2047C13.3861 21.2328 12.6615 21.25 12 21.25C11.3385 21.25 10.6139 21.2328 9.87368 21.205C9.61278 21.1952 9.46358 21.1896 9.2191 21.1648C8.31222 21.073 7.44028 20.8059 6.63851 20.4L5.67082 22.3354C5.48558 22.7059 5.03507 22.8561 4.66459 22.6708C4.29411 22.4856 4.14394 22.0351 4.32918 21.6646L5.32918 19.6646C5.34089 19.6412 5.35366 19.6186 5.3674 19.597C3.61596 18.2467 2.4075 16.1815 2.26556 13.9452C2.24999 13.6998 2.24999 13.4798 2.25 13.1046L2.25 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H2.25V4.38516C2.25 2.65366 3.65366 1.25 5.38517 1.25Z" fill="#F88379"/>
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M2 9h20" stroke="#F88379" strokeWidth="1.5"/>
      <circle cx="7" cy="6.5" r="1" fill="#F88379"/>
      <circle cx="12" cy="6.5" r="1" fill="#F88379"/>
      <path d="M9 13h6M9 16h4" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M9 7h4.5a3 3 0 0 1 0 6H9V7Z" stroke="#F88379" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M9 13v4" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="9" r="6" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M9 21l3-3 3 3M8.5 15.5l-2 5.5M15.5 15.5l2 5.5" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9l1.5 1.5L14 7" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BalconyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 22h18M3 22V12l9-9 9 9v10" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="9" y="14" width="6" height="8" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M9 14v-3a3 3 0 0 1 6 0v3" stroke="#F88379" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function WardrobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M12 3v18M7 12h2M15 12h2" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AcIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="10" rx="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M6 16l-2 4M10 16l-1 4M14 16l1 4M18 16l2 4" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16" cy="11" r="1.5" fill="#F88379"/>
      <path d="M6 11h7" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MoveInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12l9-9 9 9" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const HIGHLIGHTS = [
  { icon: <BedIcon />, label: "5 Bedrooms" },
  { icon: <MaximizeIcon />, label: "Built-up: 2,364 sqft" },
  { icon: <KitchenIcon />, label: "Fully Equipped Kitchen" },
  { icon: <ParkingIcon />, label: "Covered Parking Space" },
  { icon: <AwardIcon />, label: "High-Quality Finishes" },
  { icon: <BathIcon />, label: "6 Bathrooms" },
  { icon: <BalconyIcon />, label: "Balcony with Open View" },
  { icon: <WardrobeIcon />, label: "Built-in Wardrobes" },
  { icon: <AcIcon />, label: "Central Air Conditioning" },
  { icon: <MoveInIcon />, label: "Ready-to-Move In" },
];


/* Amenity chip icon – sofa/furnished */
function FurnishedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.6094 19.1875C1.8328 19.1875 1.2031 19.8171 1.2031 20.5938V24.8125H4.0156V20.5938C4.0156 19.8171 3.386 19.1875 2.6094 19.1875Z" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.3906 19.1875C21.614 19.1875 20.9844 19.8171 20.9844 20.5938V24.8125H23.7969V20.5938C23.7969 19.8171 23.1673 19.1875 22.3906 19.1875Z" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.0156 22H20.9844" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.2031 24.8125V27.625H23.7969V24.8125" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6094 19.1875V17.7812C2.6094 17.0046 3.239 16.375 4.0156 16.375H6.8281" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.1719 16.375H20.9844C21.761 16.375 22.3906 17.0046 22.3906 17.7812V19.1875" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.2344 22C7.4577 22 6.8281 21.3704 6.8281 20.5937V16.375C6.8281 15.5983 7.4577 14.9687 8.2344 14.9687H11.0938C11.8704 14.9687 12.5 15.5983 12.5 16.375V20.5937C12.5 21.3704 11.8704 22 11.0938 22" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 16.375C12.5 15.5983 13.1296 14.9687 13.9062 14.9687H16.7656C17.5423 14.9687 18.1719 15.5983 18.1719 16.375V20.5937C18.1719 21.3704 17.5423 22 16.7656 22" stroke="#F88379" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M4 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M2 18c0-4.4 4.5-8 10-8s10 3.6 10 8v1H2v-1z" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M15 18a3 3 0 1 0-6 0" stroke="#F88379" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function ConciergeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 19H4v-2.5C4 12 7.6 9 12 9s8 3 8 7.5V19z" stroke="#F88379" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9V7M10 7h4" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 17h18" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.5 13H14.5" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function MealIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2v4a4 4 0 0 0 4 4h.5M11 10v12M15 2c0 0 1 2 1 5s-1 5-1 5v8" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 7h3" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="9" cy="7" r="4" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FaithIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L9 9H2l5.5 4.5-2 7L12 17l6.5 3.5-2-7L22 9h-7L12 2z" stroke="#F88379" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function DietaryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6L6 18" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="9" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M12 8v4M12 16h.01" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 3h15v13H1z" stroke="#F88379" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M16 8h4l3 4v5h-7V8z" stroke="#F88379" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <circle cx="5.5" cy="18.5" r="1.5" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <circle cx="18.5" cy="18.5" r="1.5" stroke="#F88379" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 10a4.5 4.5 0 0 0-9 0c0 7-3 9-3 9h15s-3-2-3-9" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 2v2" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="14" r="1" fill="#F88379"/>
      <path d="M12 10v2" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TransportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="10" width="22" height="10" rx="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <circle cx="6" cy="20" r="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <circle cx="18" cy="20" r="2" stroke="#F88379" strokeWidth="1.5" fill="none"/>
      <path d="M1 14h22" stroke="#F88379" strokeWidth="1.5"/>
    </svg>
  );
}

const AMENITY_ROWS = [
  [
    { icon: <FurnishedIcon />, label: "Furnished" },
    { icon: <PetIcon />, label: "Pet-Friendly" },
    { icon: <ConciergeIcon />, label: "Concierge" },
    { icon: <MealIcon />, label: "Meal Preparation And Service" },
  ],
  [
    { icon: <CommunityIcon />, label: "Community-Sponsored Activities" },
    { icon: <FaithIcon />, label: "Faith Based" },
    { icon: <DietaryIcon />, label: "Special Dietary Restrictions" },
  ],
  [
    { icon: <TruckIcon />, label: "Move-In Coordination" },
    { icon: <AlertIcon />, label: "Emergency Alert System" },
    { icon: <TransportIcon />, label: "Transportation & Parking" },
  ],
];

function AmenityChip({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#D8D8D8] shrink-0">
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-[#68706A] font-poppins text-sm sm:text-base capitalize whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}


/* ─── Feature Card Icons (from Figma SVG paths) ─── */
function VillaIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 36V10L26 0V18H28C28 16.9 28.392 15.9587 29.176 15.176C29.96 14.3933 30.9013 14.0013 32 14C33.0987 13.9987 34.0407 14.3907 34.826 15.176C35.6113 15.9613 36.0027 16.9027 36 18V36H0ZM4 32H12V18H22V5.8L4 12.75V32ZM16 32H22V26H26V32H32V22H16V32Z" fill="#494949"/>
    </svg>
  );
}

function BedroomIcon() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 11.56V6C38 2.7 35.3 0 32 0H24C22.46 0 21.06 0.600001 20 1.56C18.94 0.600001 17.54 0 16 0H8C4.7 0 2 2.7 2 6V11.56C0.78 12.66 0 14.24 0 16V26C0 27.1 0.9 28 2 28C3.1 28 4 27.1 4 26V24H36V26C36 27.1 36.9 28 38 28C39.1 28 40 27.1 40 26V16C40 14.24 39.22 12.66 38 11.56ZM24 4H32C33.1 4 34 4.9 34 6V10H22V6C22 4.9 22.9 4 24 4ZM6 6C6 4.9 6.9 4 8 4H16C17.1 4 18 4.9 18 6V10H6V6ZM4 20V16C4 14.9 4.9 14 6 14H34C35.1 14 36 14.9 36 16V20H4Z" fill="#494949"/>
    </svg>
  );
}

function BalconyFeatureIcon() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20V16H14V20H10ZM22 20V16H26V20H22ZM0 40V24H2V16C2 13.8 2.41667 11.7247 3.25 9.774C4.08333 7.82333 5.22533 6.12333 6.676 4.674C8.12667 3.22467 9.82667 2.08333 11.776 1.25C13.7253 0.416667 15.8 0 18 0C20.2 0 22.2753 0.416667 24.226 1.25C26.1767 2.08333 27.8767 3.22533 29.326 4.676C30.7753 6.12667 31.9167 7.82667 32.75 9.776C33.5833 11.7253 34 13.8 34 16V24H36V40H0ZM4 36H8V28H4V36ZM12 36H16V28H12V36ZM6 24H16V4.15C13.1333 4.61667 10.75 5.958 8.85 8.174C6.95 10.39 6 12.9987 6 16V24ZM20 24H30V16C30 13 29.05 10.392 27.15 8.176C25.25 5.96 22.8667 4.618 20 4.15V24ZM20 36H24V28H20V36ZM28 36H32V28H28V36Z" fill="#494949"/>
    </svg>
  );
}

function AcFeatureIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 31.7L12.85 36.75C12.4833 37.1167 12.0253 37.3 11.476 37.3C10.9267 37.3 10.468 37.1 10.1 36.7C9.7 36.3333 9.5 35.8753 9.5 35.326C9.5 34.7767 9.7 34.3013 10.1 33.9L18 26V22H14L6.05 29.95C5.68333 30.3167 5.22533 30.5 4.676 30.5C4.12667 30.5 3.65133 30.3 3.25 29.9C2.88333 29.5333 2.7 29.0753 2.7 28.526C2.7 27.9767 2.88333 27.518 3.25 27.15L8.3 22H1.95C1.38333 22 0.916667 21.808 0.55 21.424C0.183334 21.04 0 20.5653 0 20C0 19.4347 0.192 18.96 0.576 18.576C0.96 18.192 1.43467 18 2 18H8.3L3.25 12.9C2.88333 12.5333 2.7 12.0753 2.7 11.526C2.7 10.9767 2.9 10.5013 3.3 10.1C3.66667 9.73334 4.12533 9.55001 4.676 9.55001C5.22667 9.55001 5.70133 9.73334 6.1 10.1L14 18H18V14L10.05 6.10001C9.68333 5.73334 9.5 5.27534 9.5 4.72601C9.5 4.17667 9.7 3.70134 10.1 3.30001C10.4667 2.93334 10.9253 2.75001 11.476 2.75001C12.0267 2.75001 12.4847 2.93334 12.85 3.30001L18 8.30001V2.00001C18 1.43334 18.192 0.958674 18.576 0.576007C18.96 0.19334 19.4347 0.00134023 20 6.89654e-06C20.5653 -0.00132644 21.0407 0.190674 21.426 0.576007C21.8113 0.96134 22.0027 1.43601 22 2.00001V8.30001L27.1 3.30001C27.4667 2.93334 27.9253 2.75001 28.476 2.75001C29.0267 2.75001 29.5013 2.93334 29.9 3.30001C30.2667 3.70001 30.45 4.17534 30.45 4.72601C30.45 5.27667 30.2667 5.73467 29.9 6.10001L22 14V18H26L33.9 10.1C34.2667 9.73334 34.7253 9.55001 35.276 9.55001C35.8267 9.55001 36.3013 9.75001 36.7 10.15C37.0667 10.5167 37.25 10.9747 37.25 11.524C37.25 12.0733 37.0667 12.532 36.7 12.9L31.7 18H38C38.5667 18 39.042 18.192 39.426 18.576C39.81 18.96 40.0013 19.4347 40 20C39.9987 20.5653 39.8067 21.0407 39.424 21.426C39.0413 21.8113 38.5667 22.0027 38 22H31.7L36.7 27.15C37.0667 27.5167 37.25 27.9753 37.25 28.526C37.25 29.0767 37.0667 29.5347 36.7 29.9C36.3 30.3 35.8253 30.5 35.276 30.5C34.7267 30.5 34.268 30.3 33.9 29.9L26 22H22V26L29.9 33.95C30.2667 34.3167 30.45 34.7753 30.45 35.326C30.45 35.8767 30.25 36.3513 29.85 36.75C29.4833 37.1167 29.0253 37.3 28.476 37.3C27.9267 37.3 27.468 37.1167 27.1 36.75L22 31.7V38.05C22 38.6167 21.808 39.0833 21.424 39.45C21.04 39.8167 20.5653 40 20 40C19.4347 40 18.96 39.808 18.576 39.424C18.192 39.04 18 38.5653 18 38V31.7Z" fill="#494949"/>
    </svg>
  );
}

function GardenIcon() {
  return (
    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6795 26.976C13.2525 28.8061 14.1711 30.5094 15.3855 31.9935L10.9395 36.4395C10.7962 36.5779 10.682 36.7434 10.6033 36.9264C10.5247 37.1094 10.4834 37.3062 10.4816 37.5054C10.4799 37.7046 10.5178 37.9021 10.5933 38.0864C10.6687 38.2708 10.7801 38.4383 10.9209 38.5791C11.0617 38.7199 11.2292 38.8313 11.4136 38.9067C11.5979 38.9822 11.7954 39.0201 11.9946 39.0184C12.1938 39.0166 12.3906 38.9753 12.5736 38.8967C12.7566 38.818 12.9221 38.7038 13.0605 38.5605L17.5065 34.1145C20.1833 36.3086 23.5389 37.5052 27 37.5C35.2845 37.5 42 30.7845 42 22.5V12C42 10.8065 41.5259 9.66193 40.682 8.81802C39.8381 7.97411 38.6935 7.5 37.5 7.5H27C26.537 7.5 26.0795 7.5205 25.6275 7.5615C24.5161 5.29257 22.7903 3.38104 20.6464 2.04431C18.5025 0.707576 16.0265 -0.000709686 13.5 5.33594e-07H4.5C3.30653 5.33594e-07 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 3.39731e-08 3.30653 3.39731e-08 4.5V13.5C-0.000243759 16.9386 1.31163 20.2476 3.66792 22.7519C6.02421 25.2562 9.2473 26.767 12.6795 26.976ZM3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H13.5C15.3281 2.9997 17.1246 3.47671 18.7118 4.38382C20.299 5.29093 21.6219 6.59672 22.5495 8.172C19.6791 9.06417 17.143 10.7981 15.27 13.149L10.0605 7.9395C9.7776 7.66626 9.39869 7.51507 9.0054 7.51849C8.6121 7.52191 8.23588 7.67966 7.95777 7.95777C7.67966 8.23589 7.52191 8.6121 7.51849 9.0054C7.51507 9.39869 7.66626 9.7776 7.9395 10.0605L13.6095 15.7305C12.3314 18.2534 11.7956 21.0872 12.0645 23.9025C9.55203 23.5558 7.24998 22.3113 5.58375 20.3991C3.91752 18.487 2.99974 16.0363 3 13.5V4.5ZM27 34.5C24.3347 34.5038 21.7445 33.6168 19.641 31.98L29.5605 22.0605C29.8337 21.7776 29.9849 21.3987 29.9815 21.0054C29.9781 20.6121 29.8203 20.2359 29.5422 19.9578C29.2641 19.6797 28.8879 19.5219 28.4946 19.5185C28.1013 19.5151 27.7224 19.6663 27.4395 19.9395L17.52 29.859C16.1429 28.0852 15.2911 25.9605 15.0615 23.7267C14.832 21.4928 15.2339 19.2393 16.2215 17.2225C17.2091 15.2057 18.7428 13.5064 20.6483 12.318C22.5537 11.1296 24.7544 10.4998 27 10.5H37.5C37.8978 10.5 38.2794 10.658 38.5607 10.9393C38.842 11.2206 39 11.6022 39 12V22.5C39 25.6826 37.7357 28.7348 35.4853 30.9853C33.2348 33.2357 30.1826 34.5 27 34.5Z" fill="#494949"/>
    </svg>
  );
}

function PoolIcon() {
  return (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.86621 3.75C7.17002 3.75 6.50234 4.02656 6.01006 4.51884C5.51778 5.01113 5.24121 5.67881 5.24121 6.375V7.125C5.24121 7.62228 5.04367 8.09919 4.69204 8.45082C4.34041 8.80245 3.8635 9 3.36621 9C2.86893 9 2.39202 8.80245 2.04039 8.45082C1.68876 8.09919 1.49121 7.62228 1.49121 7.125V6.375C1.49121 4.68424 2.16286 3.06274 3.35841 1.86719C4.55395 0.67165 6.17546 0 7.86621 0C9.55697 0 11.1785 0.67165 12.374 1.86719C13.5696 3.06274 14.2412 4.68424 14.2412 6.375V12.75H28.4912V6.375C28.4912 5.67881 28.2147 5.01113 27.7224 4.51884C27.2301 4.02656 26.5624 3.75 25.8662 3.75C25.17 3.75 24.5023 4.02656 24.0101 4.51884C23.5178 5.01113 23.2412 5.67881 23.2412 6.375V7.125C23.2412 7.62228 23.0437 8.09919 22.692 8.45082C22.3404 8.80245 21.8635 9 21.3662 9C20.8689 9 20.392 8.80245 20.0404 8.45082C19.6888 8.09919 19.4912 7.62228 19.4912 7.125V6.375C19.4912 4.68424 20.1629 3.06274 21.3584 1.86719C22.554 0.67165 24.1755 0 25.8662 0C27.557 0 29.1785 0.67165 30.374 1.86719C31.5696 3.06274 32.2412 4.68424 32.2412 6.375V23.5005C31.0173 23.8246 29.7573 23.9924 28.4912 24V16.5H14.2412V19.47C13.0137 19.1374 11.7586 18.917 10.4912 18.8115V6.375C10.4912 5.67881 10.2147 5.01113 9.72237 4.51884C9.23009 4.02656 8.56241 3.75 7.86621 3.75ZM0.570214 23.841L0.573214 23.838L0.579214 23.832L0.619714 23.7945L0.702214 23.7195C0.770214 23.6615 0.861214 23.5875 0.975214 23.4975C1.28397 23.2561 1.60816 23.0351 1.94571 22.836C3.07387 22.1683 4.29826 21.6785 5.57571 21.384C8.78271 20.631 13.3037 20.7735 18.9827 23.775C24.0047 26.43 28.3277 26.523 31.3652 25.995C32.5917 25.786 33.7898 25.4352 34.9352 24.9495C35.3218 24.7825 35.6993 24.5952 36.0662 24.3885L36.1067 24.363C36.314 24.2301 36.5455 24.1409 36.7879 24.0975C37.0303 24.0541 37.2788 24.0588 37.5194 24.1115C37.7599 24.1641 37.9878 24.2637 38.1899 24.4044C38.3919 24.545 38.5644 24.7242 38.6972 24.9315C38.8301 25.1388 38.9208 25.3703 38.9642 25.6127C39.0076 25.8551 39.0029 26.1036 38.9502 26.3442C38.8976 26.5847 38.7981 26.8126 38.6574 27.0146C38.5167 27.2167 38.3375 27.3891 38.1302 27.522C37.9336 27.643 37.7865 27.7275 37.6367 27.807C37.3472 27.963 36.9362 28.17 36.4142 28.395C35.3702 28.8435 33.8717 29.3655 32.0072 29.6895C28.2572 30.342 23.0747 30.18 17.2307 27.09C12.2912 24.48 8.69421 24.504 6.43371 25.035C5.5342 25.2404 4.67162 25.5829 3.87621 26.0505C3.62581 26.2004 3.38668 26.3683 3.16071 26.553L3.14871 26.5635C2.78651 26.8988 2.3067 27.0777 1.81339 27.0615C1.32008 27.0453 0.853066 26.8352 0.513662 26.4769C0.174258 26.1185 -0.0101553 25.6408 0.000431915 25.1473C0.0110191 24.6539 0.215753 24.1845 0.570214 23.841ZM0.570214 32.841L0.573214 32.838L0.579214 32.832L0.619714 32.7945L0.702214 32.7195C0.770214 32.6615 0.861214 32.5875 0.975214 32.4975C1.28397 32.2561 1.60816 32.0351 1.94571 31.836C3.07387 31.1683 4.29826 30.6785 5.57571 30.384C8.78271 29.631 13.3037 29.7735 18.9827 32.775C24.0047 35.43 28.3277 35.523 31.3652 34.995C32.5917 34.786 33.7898 34.4352 34.9352 33.9495C35.3218 33.7825 35.6993 33.5952 36.0662 33.3885L36.1067 33.363C36.5455 33.1409 36.7879 33.0975 37.0303 33.0541C37.2788 33.0088 37.5194 33.1115 37.7599 33.1641C37.9878 33.2637 38.1899 33.4044 38.3919 33.545C38.5644 33.7242 38.6972 33.9315 38.8301 34.1388C38.9208 34.3703 39.0076 34.6127 38.9642 34.8551C39.0029 35.1036 38.9502 35.3442 38.8976 35.5847C38.7981 35.8126 38.6574 36.0146 38.5167 36.2167C38.3375 36.3891 38.1302 36.522 37.9336 36.643C37.7865 36.7275 37.6367 36.807C37.3472 36.963 36.9362 37.17 36.4142 37.395C35.3702 37.8435 33.8717 38.3655 32.0072 38.6895C28.2572 39.342 23.0747 39.18 17.2307 36.09C12.2912 33.48 8.69421 33.504 6.43371 34.035C5.5342 34.2404 4.67162 34.5829 3.87621 35.0505C3.62581 35.2004 3.38668 35.3683 3.16071 35.553L3.14871 35.5635C2.78651 35.8988 2.3067 36.0777 1.81339 36.0615C1.32008 36.0453 0.853066 35.8352 0.513662 35.4769C0.174258 35.1185 -0.0101553 34.6408 0.000431915 34.1473C0.0110191 33.6539 0.215753 33.1845 0.570214 32.841Z" fill="#494949"/>
    </svg>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon, label }) {
  return (
    <div className="flex-1 min-w-[120px] h-[170px] flex flex-col items-center justify-center gap-2 rounded-xl border border-[#DDD] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] px-4 sm:px-12 py-8">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-[#494949] font-poppins font-semibold text-base sm:text-lg text-center">
        {label}
      </span>
    </div>
  );
}

/* ─── Info table data ─── */
const LEFT_ROWS = [
  { label: "Type", value: "Urban Apartment" },
  { label: "Purpose", value: "For Sale" },
  { label: "Reference no.", value: "BARNES-13030" },
  { label: "Furnishing", value: "Unfurnished" },
];

const RIGHT_ROWS = [
  { label: "Added on", value: "16 January 2026" },
  { label: "Original price", value: "AED 3,800,000" },
  { label: "Handover date", value: "Q2 2025" },
  { label: "Completion", value: "Off-Plan" },
];

function TableCell({ label, isLabel }) {
  return (
    <div
      className={`flex items-center justify-center px-4 sm:px-6 py-4 border-b border-[#E6E7E6] last:border-b-0 ${
        isLabel ? "font-medium text-sm text-black" : "text-[#565656] text-sm sm:text-base"
      } font-poppins`}
    >
      {label}
    </div>
  );
}

function EditIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0418 3.02123L8.16183 10.9012C7.86183 11.2012 7.56183 11.7912 7.50183 12.2212L7.07183 15.2312C6.91183 16.3212 7.68183 17.0812 8.77183 16.9312L11.7818 16.5012C12.2018 16.4412 12.7918 16.1412 13.1018 15.8412L20.9818 7.96123C22.3418 6.60123 22.9818 5.02123 20.9818 3.02123C18.9818 1.02123 17.4018 1.66123 16.0418 3.02123Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9102 4.14844C15.5802 6.53844 17.4502 8.40844 19.8502 9.08844"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33203 8H12.6654"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.33594L12.6667 8.0026L8 12.6693"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewPublish() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainSrc = IMAGES[activeIndex] ?? IMAGES[0];

  return (
    <div className="flex flex-col gap-6">

        {/* image section */}
      {/* Main hero image */}
      <div className="relative rounded-xl overflow-hidden h-56 sm:h-80 lg:h-[540px]">
        <img
          src={mainSrc}
          alt="Property view"
          className="w-full h-full object-cover"
        />
        {/* Carousel dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i < IMAGES.length ? i : 0)}
              className="w-4 h-4 rounded-full transition-colors focus:outline-none"
              style={{
                backgroundColor:
                  i === activeIndex
                    ? "#F88379"
                    : "rgba(248, 131, 121, 0.17)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
        {IMAGES.slice(0, 7).map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="block w-full focus:outline-none"
          >
            <img
              src={img}
              alt={`View ${i + 1}`}
              className={`w-full aspect-[90/53] object-cover rounded-lg transition-all ${
                i === activeIndex
                  ? "border-2 border-[#F88379]"
                  : "border-2 border-transparent"
              }`}
            />
          </button>
        ))}

        {/* More photos overlay card */}
        <button
          onClick={() => setActiveIndex(8)}
          className="relative block w-full focus:outline-none"
        >
          <img
            src={IMAGES[8]}
            alt="More photos"
            className="w-full aspect-[90/53] object-cover rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center">
            <span className="text-[#F8F9FA] font-poppins font-semibold text-sm sm:text-base text-center leading-tight">
              10+ More
              <br />
              Photos
            </span>
          </div>
        </button>
      </div>

{/* property herader section */}

        <div className="flex flex-col gap-6">
      {/* Price */}
      <div className="flex items-baseline gap-1 leading-tight">
        <span className="font-poppins font-medium text-2xl sm:text-3xl text-[#F88379]">
          AED
        </span>
        <span className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-[56px] text-[#F88379] leading-none">
          3,800,000
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {/* Location */}
        <div className="flex items-center gap-1">
          <LocationPinIcon />
          <span className="text-[#68706A] font-poppins text-base">
            Portofino, DAMAC Lagoons, Dubai
          </span>
        </div>

        {/* Status chips */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {/* Available badge */}
            <div className="flex items-center gap-1 px-4 py-1.5 rounded border border-[#F88379] bg-[#F88379]/10 shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#F88379]" />
              <span className="text-[#F88379] font-poppins font-medium text-base">
                Available
              </span>
            </div>
            <PropertyChip icon={<BedChipIcon />} label="5 Bedrooms" />
            <PropertyChip icon={<BathChipIcon />} label="6 Bathrooms" />
            <PropertyChip icon={<SizeChipIcon />} label="Built-up: 2,364 sqft" />
            <PropertyChip icon={<PlotChipIcon />} label="Plot: 1,550 sqft" />
          </div>

          {/* Title + Description */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#343A40] font-poppins font-medium text-base">
              Genuine Resale | End Unit | Luxurious
            </h2>
            <p className="text-[#68706A] font-poppins text-sm leading-[120%] whitespace-pre-line">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* key highlights section */}
<div className="rounded-lg bg-white p-4 border border-[#E6E7E6]">
       <div className="flex flex-col gap-10 sm:gap-[60px] rounded-lg">
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <h2 className="font-poppins font-medium text-2xl sm:text-[32px] leading-[120%]">
          <span className="text-[#343A40]">Key </span>
          <span className="text-[#F88379]">Property Highlights</span>
        </h2>
        <p className="text-[#8E938F] font-poppins text-sm leading-[120%]">
          A thoughtfully designed property offering modern features, quality
          finishes, and a comfortable living experience in a prime location.
        </p>
      </div>

      {/* Features grid – 5 per row on large screens, 2 on mobile */}
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {HIGHLIGHTS.slice(0, 5).map(({ icon, label }, i) => (
            <div key={i} className="flex items-center gap-1">
              {icon}
              <span className="text-[#343A40] font-poppins text-xs leading-[120%]">
                {label}
              </span>
            </div>
          ))}
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {HIGHLIGHTS.slice(5, 10).map(({ icon, label }, i) => (
            <div key={i} className="flex items-center gap-1">
              {icon}
              <span className="text-[#343A40] font-poppins text-xs leading-[120%]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* aminities section */}

 <div className="flex flex-col gap-6 w-full mt-4">
  {/* Heading */}
  <div className="flex flex-col gap-1">
    <h2 className="font-poppins font-medium text-2xl sm:text-[32px] leading-[120%]">
      <span className="text-[#343A40]">Property </span>
      <span className="text-[#F88379]">& Community Amenities</span>
    </h2>

    <p className="text-[#8E938F] font-poppins text-sm sm:text-base leading-[120%]">
      A range of modern facilities and conveniences designed to enhance
      everyday living and provide comfort, safety, and convenience.
    </p>
  </div>

  {/* Amenities */}
  <div className="flex flex-wrap gap-4 sm:gap-6 w-full">
    {AMENITY_ROWS.flat().map(({ icon, label }, i) => (
      <AmenityChip key={i} icon={icon} label={label} />
    ))}
  </div>
</div>

</div>

{/* property info */}

    <div className="flex flex-col gap-4">
      {/* Title */}
      <h2 className="text-[#343A40] font-poppins font-medium text-2xl sm:text-[32px] leading-[120%]">
        Property Information
      </h2>

      {/* Table */}
      <div className="rounded-xl border border-[#E6E7E6] bg-white overflow-hidden">
        {/* Desktop: 4-column layout */}
        <div className="hidden sm:grid sm:grid-cols-4">
          {/* Col 1: Left labels */}
          <div className="flex flex-col">
            {LEFT_ROWS.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-center px-6 py-[22px] ${
                  i < LEFT_ROWS.length - 1 ? "border-b border-[#E6E7E6]" : ""
                }`}
              >
                <span className="font-poppins font-medium text-sm text-black text-center">
                  {row.label}
                </span>
              </div>
            ))}
          </div>
          {/* Col 2: Left values */}
          <div className="flex flex-col">
            {LEFT_ROWS.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-center px-6 py-[22px] ${
                  i < LEFT_ROWS.length - 1 ? "border-b border-[#E6E7E6]" : ""
                }`}
              >
                <span className="text-[#565656] font-poppins text-base text-center">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          {/* Col 3: Right labels */}
          <div className="flex flex-col border-l border-[#E6E7E6]">
            {RIGHT_ROWS.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-center px-6 py-[22px] ${
                  i < RIGHT_ROWS.length - 1 ? "border-b border-[#E6E7E6]" : ""
                }`}
              >
                <span className="text-[#565656] font-poppins text-base text-center">
                  {row.label}
                </span>
              </div>
            ))}
          </div>
          {/* Col 4: Right values */}
          <div className="flex flex-col">
            {RIGHT_ROWS.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-center px-6 py-[22px] ${
                  i < RIGHT_ROWS.length - 1 ? "border-b border-[#E6E7E6]" : ""
                }`}
              >
                <span className="text-[#565656] font-poppins text-base text-center">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked list */}
        <div className="flex flex-col sm:hidden">
          {[...LEFT_ROWS, ...RIGHT_ROWS].map((row, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 ${
                i < LEFT_ROWS.length + RIGHT_ROWS.length - 1
                  ? "border-b border-[#E6E7E6]"
                  : ""
              }`}
            >
              <span className="font-poppins font-medium text-sm text-black">
                {row.label}
              </span>
              <span className="text-[#565656] font-poppins text-sm text-right ml-2">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
        <FeatureCard icon={<VillaIcon />} label="Villas" />
        <FeatureCard icon={<BedroomIcon />} label="6 Bedrooms" />
        <FeatureCard icon={<BalconyFeatureIcon />} label="Balcony" />
        <FeatureCard icon={<AcFeatureIcon />} label="Central A/C" />
        <FeatureCard icon={<GardenIcon />} label="Private Garden" />
        <FeatureCard icon={<PoolIcon />} label="Private Pool" />
      </div>

   
    </div>
    
     <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
  
  {/* Edit button */}
  <button
    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-black/10 bg-white opacity-50"
    onClick={() => {}}
  >
    <EditIcon />
    <span className="font-manrope text-base text-[#0A0A0A]">Edit</span>
  </button>

  {/* Publish button */}
  <button
    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#7FFFD4] hover:bg-[#6ef0c3] transition-colors"
    onClick={() => {}}
  >
    <span className="font-manrope text-base text-black">Publish</span>
    <ArrowRightIcon />
  </button>

</div>

      </div>

  );
}
