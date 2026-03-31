import { useState } from "react";
import ModalOverlay from "./modal_overlay";

const SnowflakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9988 1.5C11.6201 1.5 11.2413 1.755 11.2488 2.262V4.60875L9.87034 3.22875C9.80115 3.15712 9.7184 3.09998 9.62689 3.06067C9.53539 3.02137 9.43697 3.00068 9.33739 2.99981C9.23781 2.99895 9.13905 3.01792 9.04687 3.05563C8.9547 3.09334 8.87096 3.14903 8.80054 3.21945C8.73012 3.28987 8.67443 3.37361 8.63672 3.46578C8.59901 3.55796 8.58004 3.65672 8.5809 3.7563C8.58177 3.85589 8.60246 3.9543 8.64176 4.0458C8.68107 4.13731 8.73821 4.22006 8.80984 4.28925L11.2488 6.72825V10.7017L7.80634 8.71575C7.50859 7.605 7.21234 6.49425 6.91384 5.3835C6.89358 5.28296 6.85293 5.18764 6.7944 5.10341C6.73588 5.01919 6.66071 4.94785 6.57355 4.8938C6.48639 4.83974 6.38907 4.80412 6.28761 4.78913C6.18615 4.77414 6.0827 4.7801 5.98363 4.80664C5.88456 4.83318 5.79198 4.87973 5.7116 4.94343C5.63122 5.00714 5.56474 5.08663 5.51627 5.17702C5.4678 5.2674 5.43836 5.36676 5.42977 5.46896C5.42119 5.57117 5.43363 5.67404 5.46634 5.77125L5.97109 7.65525L3.93859 6.48225C3.85339 6.433 3.75933 6.40102 3.66178 6.38813C3.56422 6.37523 3.46508 6.38168 3.37002 6.4071C3.27495 6.43252 3.18583 6.47642 3.10773 6.53628C3.02963 6.59614 2.96408 6.6708 2.91484 6.756C2.86559 6.8412 2.83361 6.93526 2.82072 7.03281C2.80782 7.13037 2.81427 7.22951 2.83969 7.32457C2.86511 7.41963 2.909 7.50876 2.96887 7.58686C3.02873 7.66496 3.10339 7.7305 3.18859 7.77975L5.21959 8.95275L3.33709 9.45675C3.24195 9.48226 3.15276 9.52626 3.07462 9.58624C2.99648 9.64621 2.93092 9.72099 2.88168 9.80631C2.83245 9.89162 2.80049 9.9858 2.78765 10.0835C2.77481 10.1811 2.78133 10.2804 2.80684 10.3755C2.83235 10.4706 2.87635 10.5598 2.93632 10.638C2.9963 10.7161 3.07108 10.7817 3.1564 10.8309C3.24171 10.8801 3.33589 10.9121 3.43355 10.9249C3.53121 10.9378 3.63045 10.9313 3.72559 10.9058L7.05634 10.0133L10.4988 12.0007L7.05634 13.9882L3.72634 13.0958C3.6312 13.0702 3.53196 13.0637 3.4343 13.0766C3.33664 13.0894 3.24246 13.1214 3.15715 13.1706C3.07183 13.2198 2.99705 13.2854 2.93707 13.3635C2.8771 13.4417 2.8331 13.5309 2.80759 13.626C2.78208 13.7211 2.77556 13.8204 2.7884 13.918C2.80124 14.0157 2.8332 14.1099 2.88243 14.1952C2.93167 14.2805 2.99723 14.3553 3.07537 14.4153C3.15351 14.4752 3.2427 14.5192 3.33784 14.5448L5.22109 15.048L3.18859 16.2218C3.10339 16.271 3.02873 16.3365 2.96887 16.4146C2.909 16.4927 2.86511 16.5819 2.83969 16.6769C2.81427 16.772 2.80782 16.8711 2.82072 16.9687C2.83361 17.0662 2.86559 17.1603 2.91484 17.2455C2.96408 17.3307 3.02963 17.4054 3.10773 17.4652C3.18583 17.5251 3.27495 17.569 3.37002 17.5944C3.46508 17.6198 3.56422 17.6263 3.66178 17.6134C3.75933 17.6005 3.85339 17.5685 3.93859 17.5192L5.97109 16.3463L5.46559 18.2302C5.43529 18.3269 5.42484 18.4286 5.43488 18.5293C5.44491 18.6301 5.47522 18.7277 5.52397 18.8165C5.57273 18.9052 5.63893 18.9832 5.71859 19.0456C5.79825 19.1081 5.88972 19.1538 5.98751 19.1801C6.0853 19.2063 6.18738 19.2125 6.28761 19.1982C6.38785 19.1839 6.48416 19.1496 6.57077 19.0971C6.65737 19.0447 6.73248 18.9753 6.79156 18.8931C6.85065 18.8109 6.8925 18.7176 6.91459 18.6188C7.21234 17.5072 7.50859 16.3965 7.80709 15.2858L11.2481 13.299V17.274L8.80909 19.7122C8.73746 19.7814 8.68032 19.8642 8.64101 19.9557C8.60171 20.0472 8.58102 20.1456 8.58015 20.2452C8.57929 20.3448 8.59826 20.4435 8.63597 20.5357C8.67368 20.6279 8.72937 20.7116 8.79979 20.782C8.87021 20.8525 8.95395 20.9082 9.04612 20.9459C9.1383 20.9836 9.23706 21.0026 9.33664 21.0017C9.43622 21.0008 9.53464 20.9801 9.62614 20.9408C9.71765 20.9015 9.8004 20.8444 9.86959 20.7728L11.2481 19.3942V21.7395C11.2464 21.8395 11.2648 21.9389 11.3021 22.0317C11.3395 22.1245 11.3951 22.2088 11.4657 22.2797C11.5362 22.3506 11.6203 22.4067 11.7129 22.4445C11.8055 22.4824 11.9048 22.5012 12.0048 22.5C12.4226 22.4925 12.7548 22.1535 12.7488 21.7395V19.3973L14.1258 20.7728C14.195 20.8444 14.2778 20.9015 14.3693 20.9408C14.4608 20.9801 14.5592 21.0008 14.6588 21.0017C14.7584 21.0026 14.8571 20.9836 14.9493 20.9459C15.0415 20.9082 15.1252 20.8525 15.1956 20.782C15.2661 20.7116 15.3217 20.6279 15.3595 20.5357C15.3972 20.4435 15.4161 20.3448 15.4153 20.2452C15.4144 20.1456 15.3937 20.0472 15.3544 19.9557C15.3151 19.8642 15.258 19.7814 15.1863 19.7122L12.7481 17.2748V13.3005L16.1891 15.2872L17.0823 18.618C17.1041 18.7171 17.1458 18.8107 17.2047 18.8932C17.2637 18.9757 17.3388 19.0454 17.4255 19.0982C17.5121 19.1509 17.6086 19.1855 17.709 19.1999C17.8094 19.2143 17.9116 19.2082 18.0096 19.1819C18.1076 19.1557 18.1993 19.1099 18.2791 19.0473C18.3588 18.9847 18.4251 18.9065 18.4739 18.8176C18.5226 18.7287 18.5529 18.6308 18.5627 18.5298C18.5726 18.4289 18.5619 18.327 18.5313 18.2302L18.0273 16.3478L20.0576 17.5192C20.9283 18.039 21.6926 16.7153 20.8076 16.2203L18.7773 15.048L20.6583 14.5448C20.8505 14.4932 21.0143 14.3675 21.1137 14.1952C21.2132 14.0229 21.2401 13.8181 21.1886 13.626C21.1371 13.4339 21.0113 13.27 20.839 13.1706C20.6667 13.0712 20.462 13.0442 20.2698 13.0958L16.9398 13.9882L13.4981 12L16.9406 10.0125L20.2706 10.905C20.3657 10.9305 20.465 10.937 20.5626 10.9242C20.6603 10.9113 20.7545 10.8794 20.8398 10.8302C20.9251 10.7809 20.9999 10.7154 21.0599 10.6372C21.1198 10.5591 21.1638 10.4699 21.1893 10.3748C21.2148 10.2796 21.2214 10.1804 21.2085 10.0827C21.1957 9.98505 21.1637 9.89087 21.1145 9.80556C21.0653 9.72024 20.9997 9.64546 20.9216 9.58549C20.8434 9.52551 20.7542 9.48151 20.6591 9.456L18.7781 8.952L20.8083 7.7805C21.6933 7.2855 20.9291 5.96175 20.0583 6.4815L18.0258 7.6545L18.5321 5.7705C18.5624 5.6739 18.5728 5.57217 18.5628 5.47142C18.5528 5.37068 18.5225 5.27301 18.4737 5.18428C18.4249 5.09555 18.3587 5.0176 18.2791 4.95511C18.1994 4.89263 18.108 4.8469 18.0102 4.82069C17.9124 4.79447 17.8103 4.7883 17.7101 4.80255C17.6098 4.8168 17.5135 4.85118 17.4269 4.90362C17.3403 4.95605 17.2652 5.02546 17.2061 5.10767C17.147 5.18989 17.1052 5.2832 17.0831 5.382L16.1898 8.715L12.7481 10.7017V6.72675L15.1856 4.28925C15.2572 4.22006 15.3144 4.13731 15.3537 4.0458C15.393 3.9543 15.4137 3.85589 15.4145 3.7563C15.4154 3.65672 15.3964 3.55796 15.3587 3.46578C15.321 3.37361 15.2653 3.28987 15.1949 3.21945C15.1245 3.14903 15.0407 3.09334 14.9486 3.05563C14.8564 3.01792 14.7576 2.99895 14.658 2.99981C14.5585 3.00068 14.46 3.02137 14.3685 3.06067C14.277 3.09998 14.1943 3.15712 14.1251 3.22875L12.7481 4.605V2.262C12.7556 1.75425 12.3783 1.5 11.9988 1.5Z" fill="black"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 9.5L12 14.5L7 9.5H17Z" fill="#1D1B20"/>
  </svg>
);

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const YEARS = ["2025", "2026", "2027"];

export default function FreezeModal({ onClose, onConfirm, currentPlanPrice }) {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const halfPrice = currentPlanPrice ? (currentPlanPrice / 2).toFixed(1) : "74.5";
  const fullPrice = currentPlanPrice || 149;

  const displayDate = `${selectedMonth} ${selectedDay} ${selectedYear}`;

  const handleDayChange = (e) => setSelectedDay(e.target.value);

  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="flex flex-col gap-2 rounded-lg overflow-hidden p-4 w-full"
        style={{ background: "#F3F3F3" }}
      >
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2
            className="font-poppins font-bold text-black"
            style={{ fontSize: 24, lineHeight: "110%" }}
          >
            Freeze Your Subscription
          </h2>
          <p
            className="font-poppins font-bold text-black"
            style={{ fontSize: 16, lineHeight: "110%" }}
          >
            Pause for one month of holiday mode
          </p>
        </div>

        {/* Description */}
        <p
          className="font-poppins font-normal m-0"
          style={{ fontSize: 12, color: "#575757", lineHeight: "110%" }}
        >
          Schedule a freeze of Zero system use at half price.{"\n"}
          your subscription will reactivate automatically after 1 month.
        </p>

        {/* Plan option */}
        <div className="flex items-center gap-2">
          {/* Snowflake icon box */}
          <div
            className="flex items-center justify-center rounded-lg flex-shrink-0"
            style={{ width: 48, height: 48, background: "#B4FFE6", padding: 12 }}
          >
            <SnowflakeIcon />
          </div>

          {/* Plan info */}
          <div className="flex flex-col gap-2">
            <p
              className="font-poppins font-medium text-black m-0"
              style={{ fontSize: 16, lineHeight: "110%" }}
            >
              1 Month Freeze AED {halfPrice}
            </p>
            <p
              className="font-poppins font-normal line-through m-0"
              style={{ fontSize: 12, color: "#A5A5A5", lineHeight: "110%" }}
            >
              AED {fullPrice}
            </p>
          </div>
        </div>

        {/* Date selection */}
        <div className="flex flex-col gap-2">
          <p
            className="font-poppins font-normal text-black"
            style={{ fontSize: 16, lineHeight: "110%" }}
          >
            Freeze Start Date
          </p>

          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="flex items-center justify-between w-full rounded-lg px-4 bg-white"
              style={{
                height: 50,
                border: "1px solid #CAD5E2",
              }}
            >
              <span
                className="font-poppins font-normal"
                style={{ fontSize: 16, color: "#4B4B4B", lineHeight: "110%" }}
              >
                {displayDate}
              </span>
              <ChevronDown />
            </button>

            {/* Simple date picker dropdown */}
            {showDatePicker && (
              <div
                className="absolute top-full left-0 right-0 mt-1 rounded-lg bg-white z-20 p-3 shadow-lg"
                style={{ border: "1px solid #CAD5E2" }}
              >
                <div className="flex gap-2">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="flex-1 border rounded-lg p-2 text-sm font-poppins"
                    style={{ borderColor: "#CAD5E2", color: "#4B4B4B" }}
                  >
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={selectedDay}
                    onChange={handleDayChange}
                    className="w-16 border rounded-lg p-2 text-sm font-poppins text-center"
                    style={{ borderColor: "#CAD5E2", color: "#4B4B4B" }}
                  />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-24 border rounded-lg p-2 text-sm font-poppins"
                    style={{ borderColor: "#CAD5E2", color: "#4B4B4B" }}
                  >
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setShowDatePicker(false)}
                  className="mt-2 w-full py-1.5 rounded-lg bg-[var(--form-secondary)] text-black text-sm font-poppins font-medium"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Confirm button */}
        <button
          onClick={() => onConfirm && onConfirm(displayDate)}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-[var(--form-secondary)] font-manrope font-medium text-black transition-opacity hover:opacity-90"
          style={{ padding: "16px 32px", fontSize: 16, lineHeight: "120%" }}
        >
          Confirm Freeze
        </button>
      </div>
    </ModalOverlay>
  );
}
