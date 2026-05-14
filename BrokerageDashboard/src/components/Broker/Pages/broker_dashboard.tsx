import { Link, useNavigate } from "react-router-dom";



const stats = [
  {
    title: "Total Agents",
    value: "12",
    bgColor: "bg-[#7FFFD421]",
    iconColor: "text-[#7FFFD4]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 21.0028V19.0028C21.9993 18.1165 21.7044 17.2556 21.1614 16.5551C20.6184 15.8547 19.8581 15.3544 19 15.1328"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13281C16.8604 3.35311 17.623 3.85351 18.1676 4.55512C18.7122 5.25673 19.0078 6.11964 19.0078 7.00781C19.0078 7.89598 18.7122 8.75889 18.1676 9.4605C17.623 10.1621 16.8604 10.6625 16 10.8828"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Active Listings",
    value: "146",
    bgColor: "bg-[#7FFFD421]",
    iconColor: "text-[#7FFFD4]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M14.9983 20.9974V12.9997C14.9983 12.7346 14.8929 12.4803 14.7055 12.2928C14.518 12.1053 14.2637 12 13.9986 12H9.99971C9.73457 12 9.48029 12.1053 9.29281 12.2928C9.10533 12.4803 9 12.7346 9 12.9997V20.9974"
          stroke="#7FFFD4"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9.99716C2.99993 9.70632 3.06332 9.41896 3.18573 9.15513C3.30815 8.8913 3.48666 8.65735 3.7088 8.46961L10.7068 2.47234C11.0677 2.16734 11.5249 2 11.9974 2C12.4699 2 12.9271 2.16734 13.288 2.47234L20.286 8.46961C20.5081 8.65735 20.6866 8.8913 20.8091 9.15513C20.9315 9.41896 20.9949 9.70632 20.9948 9.99716V18.9946C20.9948 19.5248 20.7841 20.0334 20.4092 20.4084C20.0342 20.7833 19.5257 20.994 18.9954 20.994H4.99942C4.46914 20.994 3.96058 20.7833 3.58562 20.4084C3.21065 20.0334 3 19.5248 3 18.9946V9.99716Z"
          stroke="#7FFFD4"
          strokeWidth="1.99942"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Leads Received",
    value: "87",
    bgColor: "bg-[rgba(248,131,121,0.13)]",
    iconColor: "text-[#F88379]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#F88379"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
          stroke="#F88379"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
          stroke="#F88379"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Leads Assigned",
    value: "34",
    bgColor: "bg-[#7FFFD421]",
    iconColor: "text-[#7FFFD4]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.7987 10.0034C22.2554 12.2447 21.9299 14.5748 20.8765 16.6052C19.8231 18.6356 18.1056 20.2435 16.0102 21.1607C13.9148 22.078 11.5683 22.2492 9.36196 21.6458C7.15563 21.0424 5.22285 19.7008 3.88593 17.8448C2.54902 15.9889 1.88878 13.7306 2.01532 11.4468C2.14186 9.16294 3.04754 6.9915 4.58131 5.29458C6.11508 3.59766 8.18424 2.47784 10.4437 2.12186C12.7032 1.76588 15.0164 2.19527 16.9977 3.33841"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11L12 14L22 4"
          stroke="#7FFFD4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const activityItems = [
  { color: "#7FFFD4", label: "New agent joined", time: "2 hours ago" },
  { color: "#F88379", label: "5 new leads received", time: "4 hours ago" },
  { color: "#34D399", label: "Listing #1234 marked as sold", time: "6 hours ago" },
  { color: "#7FFFD4", label: "Agent Sarah completed training", time: "1 day ago" },
];







export default function BrokerDashboard() {

  
const navigate =useNavigate()

  return (
    <div className="space-y- mt-4">

{/* verification */}
      <div className="w-full bg-[#fff7ed] border border-[#ffd6a7]  p-6  items-center justify-between rounded-sm">

        <div className="">
          <div className=" flex items-start gap-4 ">


            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-red-400 text-red-500">
              <span className="text-sm font-semibold">!</span>
            </div>


            <div>
              <h2  className="font-sans font-semibold text-2xl leading-[120%] tracking-normal text-[var(--base-black)]">
                Account Verification Required
              </h2>
              <p className="font-poppins font-normal text-[1rem] leading-[120%] tracking-normal text-[var(--text-grey,#6C757D)]">
                Complete verification to unlock full platform access and build trust with clients.
              </p>
            </div>
          </div>

        </div>
        <div className="pl-0 sm:pl-7 pt-4 sm:pt-0">
          <button
          onClick={(()=>navigate("verification"))}
            style={{ border: "2px solid #F88379" }}
            className="flex items-center gap-2 
               px-3 py-3 
               rounded-lg 
               bg-[#FFD1CD]
               hover:opacity-90 
               transition text-[var(--base-black)]"
          >
            Complete Verification
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#343A40" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>

      </div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-3">
  {stats.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-start gap-6 rounded-[0.875rem] border border-black/10 p-6"
    >
      {/* Icon Box */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-[0.625rem] ${item.bgColor} ${item.iconColor}`}
      >
        {item.icon}
      </div>

      {/* Value */}
      <h2 className="text-[#101828] text-[2.25rem] font-bold font-manrope">
        {item.value}
      </h2>

      {/* Title */}
      <p className="text-[#4A5565] text-base ">
        {item.title}
      </p>
    </div>
  ))}
</div>

{/* chart */}

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

   <div
      className="rounded-[0.875rem] border border-black/10 bg-white flex flex-col"
      style={{ minHeight: 500 }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <h2
          className="font-semibold text-[1.25rem] leading-tight"
          style={{ fontFamily: "Manrope, sans-serif", color: "#0A0A0A" }}
        >
          Performance overview
        </h2>
        <p
          className="mt-1 text-[0.875rem]"
          style={{ fontFamily: "Manrope, sans-serif", color: "#717182" }}
        >
          Views and leads over the last 6 months
        </p>
      </div>

      {/* Chart */}
      <div className="flex-1 p-4 pt-2 min-h-0">
        <div className="w-full" style={{ aspectRatio: "634/365" }}>
          <svg
            viewBox="0 0 634 365"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid horizontal dashed */}
            <path d="M74.38 322.41H628.27" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M74.38 243.33H628.27" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M74.38 164.25H628.27" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M74.38 85.16H628.27" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M74.38 6.08H628.27" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            {/* Grid vertical dashed */}
            <path d="M74.38 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M185.16 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M295.94 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M406.72 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M517.49 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M628.27 6.08V322.41" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
            {/* Bottom axis */}
            <path d="M74.38 322.42H628.27" stroke="#9CA3AF" strokeWidth="1" />
            {/* Left axis */}
            <path d="M74.38 6.08V322.41" stroke="#9CA3AF" strokeWidth="1" />
            {/* X axis ticks + labels */}
            <path d="M74.38 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="63.32" y="339.12">Jan</text>
            <path d="M185.16 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="174.38" y="339.12">Feb</text>
            <path d="M295.94 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="284.49" y="339.12">Mar</text>
            <path d="M406.72 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="396.39" y="339.12">Apr</text>
            <path d="M517.50 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="504.91" y="339.12">May</text>
            <path d="M628.27 329.72V322.42" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="609.51" y="339.12">Jun</text>
            {/* Y axis ticks + labels */}
            <path d="M67.52 322.42H74.38" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="57.70" y="324.2">0</text>
            <path d="M67.52 243.33H74.38" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="49.92" y="246.2">40</text>
            <path d="M67.52 164.25H74.38" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="51.89" y="167.2">80</text>
            <path d="M67.52 85.16H74.38" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="48.72" y="88.2">120</text>
            <path d="M67.52 6.08H74.38" stroke="#9CA3AF" strokeWidth="1" />
            <text fill="#9CA3AF" fontFamily="Poppins, sans-serif" fontSize="12" x="48.00" y="11.2">160</text>

            {/* ── Aquamarine line (Agents) ── */}
            <path
              d="M78 243C124 241.78 170 240.56 216 239.33C262 238.11 308 236.58 354 235.67C400 234.75 446 234.44 492 233.83C538 233.22 584 232.61 631 232"
              stroke="#7FFFD4"
              strokeWidth="2.51"
            />
            <circle cx="77.75" cy="242.88" r="3.75" fill="white" stroke="#7FFFD4" strokeWidth="2.51" />
            <circle cx="187.75" cy="240.77" r="3.75" fill="white" stroke="#7FFFD4" strokeWidth="2.51" />
            <circle cx="299.75" cy="237.77" r="3.75" fill="white" stroke="#7FFFD4" strokeWidth="2.51" />
            <circle cx="409.75" cy="234.77" r="3.75" fill="white" stroke="#7FFFD4" strokeWidth="2.51" />
            <circle cx="519.75" cy="233.77" r="3.75" fill="white" stroke="#7FFFD4" strokeWidth="2.51" />

            {/* ── Coral line (Leads) ── */}
            <path
              d="M78 164C123 159.57 169 155.14 215 151.17C261 147.19 307 144.14 353 140.17C398 136.19 444 130.69 490 127.33C536 123.97 582 121.99 628 120"
              stroke="#F88379"
              strokeWidth="2.51"
            />
            <circle cx="77.77" cy="164.23" r="3.75" fill="white" stroke="#F88379" strokeWidth="2.51" />
            <circle cx="186.77" cy="152.77" r="3.75" fill="white" stroke="#F88379" strokeWidth="2.51" />
            <circle cx="298.77" cy="144.77" r="3.75" fill="white" stroke="#F88379" strokeWidth="2.51" />
            <circle cx="409.77" cy="134.77" r="3.75" fill="white" stroke="#F88379" strokeWidth="2.51" />
            <circle cx="520.77" cy="126.77" r="3.75" fill="white" stroke="#F88379" strokeWidth="2.51" />

            {/* ── Blue line (Listings) ── */}
            <path
              d="M78 85C123 74.61 169 64.22 215 57.5C261 50.78 307 48.64 353 44.67C398 40.69 444 37.94 490 33.67C536 29.39 582 24.19 628 19"
              stroke="#3B82F6"
              strokeWidth="2.51"
            />
            <circle cx="77.77" cy="85.46" r="3.75" fill="white" stroke="#3B82F6" strokeWidth="2.51" />
            <circle cx="184.77" cy="62.77" r="3.75" fill="white" stroke="#3B82F6" strokeWidth="2.51" />
            <circle cx="295.77" cy="49.77" r="3.75" fill="white" stroke="#3B82F6" strokeWidth="2.51" />
            <circle cx="406.77" cy="39.77" r="3.75" fill="white" stroke="#3B82F6" strokeWidth="2.51" />
            <circle cx="515.77" cy="31.77" r="3.75" fill="white" stroke="#3B82F6" strokeWidth="2.51" />
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 pb-5 flex-wrap">
        {/* Agents */}
        <div className="flex items-center gap-2">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <line x1="0" y1="5" x2="6" y2="5" stroke="#7FFFD4" strokeWidth="2.2" />
            <circle cx="9" cy="5" r="3" fill="white" stroke="#7FFFD4" strokeWidth="2.2" />
            <line x1="12" y1="5" x2="18" y2="5" stroke="#7FFFD4" strokeWidth="2.2" />
          </svg>
          <span className="font-semibold text-[1rem]" style={{ fontFamily: "Poppins, sans-serif", color: "#7FFFD4" }}>
            Agents
          </span>
        </div>
        {/* Listings */}
        <div className="flex items-center gap-2">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <line x1="0" y1="5" x2="6" y2="5" stroke="#3B82F6" strokeWidth="2.2" />
            <circle cx="9" cy="5" r="3" fill="white" stroke="#3B82F6" strokeWidth="2.2" />
            <line x1="12" y1="5" x2="18" y2="5" stroke="#3B82F6" strokeWidth="2.2" />
          </svg>
          <span className="font-semibold text-[1rem]" style={{ fontFamily: "Poppins, sans-serif", color: "#3B82F6" }}>
            Listings
          </span>
        </div>
        {/* Leads */}
        <div className="flex items-center gap-2">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <line x1="0" y1="5" x2="6" y2="5" stroke="#F88379" strokeWidth="2.2" />
            <circle cx="9" cy="5" r="3" fill="white" stroke="#F88379" strokeWidth="2.2" />
            <line x1="12" y1="5" x2="18" y2="5" stroke="#F88379" strokeWidth="2.2" />
          </svg>
          <span className="font-semibold text-[1rem]" style={{ fontFamily: "Poppins, sans-serif", color: "#F88379" }}>
            Leads
          </span>
        </div>
      </div>
    </div>

        <div
      className="rounded-[0.875rem] bg-white flex flex-col"
      style={{
        minHeight: 500,
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <h2
          className="font-semibold text-[1.25rem] leading-tight"
          style={{ fontFamily: "Manrope, sans-serif", color: "#0A0A0A" }}
        >
          Listing Distribution
        </h2>
        <p
          className="mt-1 text-[0.875rem]"
          style={{ fontFamily: "Manrope, sans-serif", color: "#717182" }}
        >
          Current status of all listings
        </p>
      </div>

      {/* Pie Chart */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="relative w-full max-w-[23.75rem]">
          {/* viewBox matches Figma: 300w x 310h to include labels */}
          <svg
            viewBox="-10 -10 320 330"
            width="100%"
            height="auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* ── Exact paths from Figma, scaled to ~252x253 viewBox, center ≈ (126,126) ── */}
            {/* Large aquamarine slice */}
            <path
              d="M251.815 126C251.815 104.072 246.096 82.5235 235.225 63.4848C224.353 44.4461 208.705 28.5763 189.826 17.4442C170.948 6.31207 149.493 0.30306 127.583 0.0111664C105.673 -0.280728 84.0667 5.1546 64.8989 15.7799C45.7311 26.4051 29.6661 41.8524 18.2918 60.5947C6.91758 79.3371 0.627937 100.726 0.0446295 122.646C-0.538678 144.566 4.60454 166.259 14.9659 185.581C25.3273 204.902 40.548 221.183 59.1235 232.815L125.907 126H251.815Z"
              fill="#7FFFD4"
              stroke="white"
              strokeWidth="1.26"
            />
            {/* Yellow slice */}
            <path
              d="M59.332 232.657C81.1293 246.305 106.602 252.894 132.278 251.524L125.626 126.625L59.332 232.657Z"
              fill="#FCD34D"
              stroke="white"
              strokeWidth="1.25"
            />
            {/* Green slice */}
            <path
              d="M132.628 252.123C158.002 250.771 182.379 241.798 202.572 226.377C222.766 210.956 237.837 189.804 245.818 165.685L125.906 126.023L132.628 252.123Z"
              fill="#34D399"
              stroke="white"
              strokeWidth="1.26"
            />
            {/* Coral slice */}
            <path
              d="M245.443 165.685C249.663 152.89 251.814 139.5 251.814 126.023H125.906L245.443 165.685Z"
              fill="#F88379"
              stroke="white"
              strokeWidth="1.26"
            />

            {/* ── Labels ── */}
            {/* 0.66% – top left */}
            <text x="0" y="14" fill="#7FFFD4" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="700">0.66%</text>
            {/* 1.10% – bottom left */}
            <text x="38" y="272" fill="#FCD34D" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="700">1.10%</text>
            {/* 2.19% – bottom right */}
            <text x="188" y="264" fill="#34D399" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="700">2.19%</text>
            {/* 3.5% – right */}
            <text x="258" y="162" fill="#F88379" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="700">3.5%</text>
          </svg>
        </div>
      </div>
    </div>

    </div>

    {/* lead flows */}

       <div
      className="rounded-[0.875rem] bg-white"
      style={{
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-0">
        <h2
          className="font-semibold text-[1.25rem] leading-tight"
          style={{ fontFamily: "Manrope, sans-serif", color: "#0A0A0A" }}
        >
          Lead Flow (Last 4 Weeks)
        </h2>
        <p
          className="mt-1 text-[0.875rem]"
          style={{ fontFamily: "Manrope, sans-serif", color: "#717182" }}
        >
          Incoming vs assigned leads
        </p>
      </div>

      {/* Bar Chart */}
      <div className="px-4 pt-4 pb-4">
        <div className="w-full overflow-x-auto">
          <div style={{ minWidth: 420 }}>
            <svg
              viewBox="0 0 1420 300"
              width="100%"
              height="auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid horizontals */}
              <path d="M79 241H1414" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M79 182H1414" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M79 123H1414" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M79 64H1414" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M79 5H1414" stroke="#E2E8F0" strokeDasharray="3 3" />
              {/* Grid verticals */}
              <path d="M246 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M580 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M913 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M1247 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M79 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              <path d="M1414 5V241" stroke="#E2E8F0" strokeDasharray="3 3" />
              {/* Bottom axis */}
              <path d="M79 241H1414" stroke="#64748B" />
              {/* Left axis */}
              <path d="M79 5V241" stroke="#64748B" />
              {/* X labels */}
              <path d="M246 247V241" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" x="222" y="259">Week 1</text>
              <path d="M580 247V241" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" x="554" y="259">Week 2</text>
              <path d="M913 247V241" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" x="888" y="259">Week 3</text>
              <path d="M1247 247V241" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" x="1221" y="259">Week 4</text>
              {/* Y labels */}
              <path d="M71 241H79" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" x="60" y="247">0</text>
              <path d="M71 182H79" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" x="61" y="188">7</text>
              <path d="M71 123H79" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" x="56" y="129">14</text>
              <path d="M71 64H79" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" x="56" y="70">21</text>
              <path d="M71 5H79" stroke="#64748B" />
              <text fill="#64748B" fontFamily="Poppins, sans-serif" fontSize="14" x="52" y="18">28</text>

              {/* Bars – Coral (Incoming Leads) */}
              <rect x="112" y="89" width="130" height="152" fill="#F88379" />
              <rect x="446" y="55" width="130" height="186" fill="#F88379" />
              <rect x="780" y="30" width="130" height="211" fill="#F88379" />
              <rect x="1113" y="38" width="130" height="203" fill="#F88379" />

              {/* Bars – Aquamarine (Assigned Leads) */}
              <rect x="248" y="115" width="130" height="126" fill="#7FFFD4" />
              <rect x="581" y="81" width="130" height="160" fill="#7FFFD4" />
              <rect x="915" y="56" width="130" height="185" fill="#7FFFD4" />
              <rect x="1249" y="72" width="130" height="169" fill="#7FFFD4" />
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#F88379" }} />
            <span
              className="font-semibold text-[0.875rem] sm:text-[1rem]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#F88379" }}
            >
              Incoming Leads
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#7FFFD4" }} />
            <span
              className="font-semibold text-[0.875rem] sm:text-[1rem]"
              style={{ fontFamily: "Poppins, sans-serif", color: "#7FFFD4" }}
            >
              Assigned Leads
            </span>
          </div>
        </div>
      </div>
    </div>
    

        {/*quick actin & performance summary */}

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div
      className="rounded-[0.875rem] bg-white p-6 flex flex-col gap-6"
      style={{
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      }}
    >
      <h2
        className="font-medium text-[1.125rem]"
        style={{ fontFamily: "Poppins, sans-serif", color: "#0A0A0A" }}
      >
        Quick Actions
      </h2>

      <div className="flex flex-col gap-3">
        {/* Add New Agent */}
        <button
          className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-left transition-opacity hover:opacity-90"
          style={{ background: "#7FFFD4" }}
        >
          {/* Plus icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3.33 8H12.67" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 3.34V12.67" stroke="#0F172A" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className="text-[0.875rem]"
            style={{ fontFamily: "Manrope, sans-serif", color: "#0F172A" }}
          >
            Add New Agent
          </span>
        </button>

        {/* View All Leads */}
        <button
          className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 text-left border transition-opacity hover:opacity-80"
          style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.10)" }}
        >
          {/* Eye icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.37 8.23C1.32 8.08 1.32 7.92 1.37 7.77C1.91 6.46 2.83 5.34 4.01 4.55C5.19 3.76 6.58 3.34 8 3.34C9.42 3.34 10.81 3.76 11.99 4.55C13.16 5.34 14.08 6.46 14.62 7.77C14.68 7.92 14.68 8.08 14.62 8.23C14.08 9.55 13.16 10.67 11.99 11.46C10.81 12.25 9.42 12.67 8 12.67C6.58 12.67 5.19 12.25 4.01 11.46C2.83 10.67 1.91 9.55 1.37 8.23Z"
              stroke="#0A0A0A"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.10 10 10 9.10 10 8C10 6.90 9.10 6 8 6C6.90 6 6 6.90 6 8C6 9.10 6.90 10 8 10Z"
              stroke="#0A0A0A"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[0.875rem]"
            style={{ fontFamily: "Manrope, sans-serif", color: "#0A0A0A" }}
          >
            View All Leads
          </span>
        </button>
      </div>
    </div>

    <div
      className="rounded-[0.875rem] bg-white p-6 flex flex-col gap-6"
      style={{
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)",
      }}
    >
      <h2
        className="font-medium text-[1.125rem]"
        style={{ fontFamily: "Poppins, sans-serif", color: "#0A0A0A" }}
      >
        Recent Activity
      </h2>

      <div className="flex flex-col gap-5">
        {activityItems.map((item, i) => (
          <div key={i} className="flex items-start gap-5">
            {/* Colored dot */}
            <span
              className="mt-[0.375rem] flex-shrink-0 w-2 h-2 rounded-full"
              style={{ background: item.color }}
            />
            <div className="flex flex-col gap-0.5">
              <span
                className="text-[1rem] leading-[1.2]"
                style={{ fontFamily: "Poppins, sans-serif", color: "#0F172B" }}
              >
                {item.label}
              </span>
              <span
                className="text-[0.875rem] leading-[1.2]"
                style={{ fontFamily: "Poppins, sans-serif", color: "#62748E" }}
              >
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>

    </div>
  );
}
