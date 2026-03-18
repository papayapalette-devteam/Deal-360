const statsData = [
  {
    id: 1,
    value: "12,448",
    label: "Total Users",
    iconBg: "rgba(127, 255, 212, 0.13)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 21.0028V19.0028C21.9993 18.1165 21.7044 17.2556 21.1614 16.5551C20.6184 15.8547 19.8581 15.3544 19 15.1328" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13281C16.8604 3.35311 17.623 3.85351 18.1676 4.55512C18.7122 5.25673 19.0078 6.11964 19.0078 7.00781C19.0078 7.89598 18.7122 8.75889 18.1676 9.4605C17.623 10.1621 16.8604 10.6625 16 10.8828" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    value: "3,432",
    label: "Active Listings",
    iconBg: "rgba(127, 255, 212, 0.10)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9983 20.9974V12.9997C14.9983 12.7346 14.8929 12.4803 14.7055 12.2928C14.518 12.1053 14.2637 12 13.9986 12H9.99971C9.73457 12 9.48029 12.1053 9.29281 12.2928C9.10533 12.4803 9 12.7346 9 12.9997V20.9974" stroke="#7FFFD4" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 9.99716C2.99993 9.70632 3.06332 9.41896 3.18573 9.15513C3.30815 8.8913 3.48666 8.65735 3.7088 8.46961L10.7068 2.47234C11.0677 2.16734 11.5249 2 11.9974 2C12.4699 2 12.9271 2.16734 13.288 2.47234L20.286 8.46961C20.5081 8.65735 20.6866 8.8913 20.8091 9.15513C20.9315 9.41896 20.9949 9.70632 20.9948 9.99716V18.9946C20.9948 19.5248 20.7841 20.0334 20.4092 20.4084C20.0342 20.7833 19.5257 20.994 18.9954 20.994H4.99942C4.46914 20.994 3.96058 20.7833 3.58562 20.4084C3.21065 20.0334 3 19.5248 3 18.9946V9.99716Z" stroke="#7FFFD4" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    value: "127",
    label: "Pending Moderation",
    iconBg: "rgba(248, 131, 121, 0.13)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F88379" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12" stroke="#F88379" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16H12.01" stroke="#F88379" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    value: "AED248,954",
    label: "Revenue (MTD)",
    iconBg: "rgba(127, 255, 212, 0.13)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H22V13" stroke="#7FFFD4" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#7FFFD4" strokeWidth="1.99942" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const alertsData = [
  {
    type: "red",
    message: "Suspicious listing flagged by AI: Luxury Villa in Downtown",
    time: "5 min ago",
    borderColor: "#F88379",
    bg: "#FEF2F2",
  },
  {
    type: "yellow",
    message: "User verification documents expired: John Martinez",
    time: "23 min ago",
    borderColor: "#FBBF24",
    bg: "#FFFBEB",
  },
  {
    type: "teal",
    message: "New subscription plan activated: Premium Tier - Sarah Chen",
    time: "1 hour ago",
    borderColor: "#7FFFD4",
    bg: "#F0FDFA",
  },
  {
    type: "yellow",
    message: "Credit balance threshold reached: Empire Realty Group",
    time: "2 hours ago",
    borderColor: "#FBBF24",
    bg: "#FFFBEB",
  },
];

function StatCard({ stat }) {
  return (
    <div className="bg-white rounded-[10px] border border-[#E5E7EB] shadow-sm p-6 flex flex-col gap-6">
      <div
        className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ background: stat.iconBg }}
      >
        {stat.icon}
      </div>
      <div className="flex flex-col gap-1">
        <p
          className="font-semibold leading-[120%] text-[var(--secondary-text)]"
          style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
        >
          {stat.value}
        </p>
        <p className="text-[18px] font-normal leading-[120%] text-[#4A5565]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 894 300"
        width="100%"
        height="auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <clipPath id="lineChartClip">
            <rect width="894" height="300" fill="white" />
          </clipPath>
        </defs>
        <g clipPath="url(#lineChartClip)">
          {/* Horizontal grid lines */}
          <path d="M65 265H889" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M65 200H889" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M65 135H889" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M65 70H889" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M65 5H889" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          {/* Vertical grid lines */}
          <path d="M65 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M202.336 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M339.664 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M477 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M614.336 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M751.672 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          <path d="M889 5V265" stroke="#E5E7EB" strokeWidth="0.999992" strokeDasharray="3 3"/>
          {/* Chart line */}
          <path
            d="M65 128.933C110.778 135.467 156.556 142 202.333 142C248.111 142 293.889 99.5333 339.667 99.5333C385.444 99.5333 431.222 112.6 477 112.6C522.778 112.6 568.556 79.9333 614.333 73.4C660.111 66.8667 705.889 68.5 751.667 63.6C797.444 58.7 843.222 51.3505 889 44"
            stroke="#7FFFD4"
            strokeWidth="2.99998"
            strokeDasharray="840.86 0"
          />
          {/* X axis line */}
          <path d="M65 265H889" stroke="#6B7280" strokeWidth="0.999992"/>
          {/* X axis ticks */}
          <path d="M65 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M202.336 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M339.664 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M477 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M614.336 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M751.672 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M889 271V265" stroke="#6B7280" strokeWidth="0.999992"/>
          {/* Y axis line */}
          <path d="M65 5V265" stroke="#6B7280" strokeWidth="0.999992"/>
          {/* Y axis ticks */}
          <path d="M59 265H65" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M59 200H65" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M59 135H65" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M59 70H65" stroke="#6B7280" strokeWidth="0.999992"/>
          <path d="M59 5H65" stroke="#6B7280" strokeWidth="0.999992"/>
          {/* Data point dots */}
          <circle cx="65" cy="128.925" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="202.336" cy="141.98" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="339.664" cy="99.5346" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="477" cy="112.597" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="614.336" cy="73.4096" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="751.672" cy="63.6127" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          <circle cx="889" cy="44.019" r="4" fill="#7FFFD4" stroke="#7FFFD4" strokeWidth="2.99998"/>
          {/* X axis labels */}
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="46.5312" y="280.481">Jan 12</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="190.869" y="280.481">Jan </tspan><tspan x="196.559" y="294.481">13</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="328.072" y="280.481">Jan </tspan><tspan x="333.439" y="294.481">14</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="465.299" y="280.481">Jan </tspan><tspan x="470.719" y="294.481">15</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="602.51" y="280.481">Jan </tspan><tspan x="607.912" y="294.481">16</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="732.715" y="280.481">Jan 17</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="859.682" y="280.481">Jan </tspan><tspan x="865.107" y="294.481">18</tspan></text>
          {/* Y axis labels */}
          <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="49.3125" y="268.466">0</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="34.6992" y="203.466">200</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="41.543" y="138.458">40</tspan><tspan x="49.3125" y="152.458">0</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="41.6133" y="73.4578">60</tspan><tspan x="49.3125" y="87.4578">0</tspan></text>
          <text fill="#6C6E71" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="41.6602" y="15.4656">80</tspan><tspan x="49.3125" y="29.4656">0</tspan></text>
        </g>
      </svg>
    </div>
  );
}

function BarChart() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1392 300"
        width="100%"
        height="auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* Horizontal grid lines */}
        <path d="M65.6641 265H1386.66" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M65.6641 200H1386.66" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M65.6641 135H1386.66" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M65.6641 70H1386.66" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M65.6641 5H1386.66" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        {/* Vertical grid lines */}
        <path d="M230.789 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M561.039 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M891.289 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M1221.55 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M65.6641 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        <path d="M1386.66 5V265" stroke="#E5E7EB" strokeWidth="0.99999" strokeDasharray="3 3"/>
        {/* Bars */}
        <rect x="98.6875" y="24.8906" width="263.55" height="239.898" fill="#7FFFD4"/>
        <rect x="429.43" y="118.922" width="263.55" height="144.941" fill="#7FFFD4"/>
        <rect x="773.977" y="171.93" width="263.55" height="92.962" fill="#7FFFD4"/>
        <rect x="1090" y="210.844" width="263.55" height="52.978" fill="#7FFFD4"/>
        {/* X axis line */}
        <path d="M65.6641 265H1386.95" stroke="#6B7280" strokeWidth="0.99999"/>
        {/* X axis ticks */}
        <path d="M230.828 271V265" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M561.156 271V265" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M891.469 271V265" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M1221.8 271V265" stroke="#6B7280" strokeWidth="0.99999"/>
        {/* Y axis */}
        <path d="M65.6641 5V265" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M59.6016 265H65.6625" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M59.6016 200H65.6625" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M59.6016 135H65.6625" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M59.6016 70H65.6625" stroke="#6B7280" strokeWidth="0.99999"/>
        <path d="M59.6016 5H65.6625" stroke="#6B7280" strokeWidth="0.99999"/>
        {/* X axis labels */}
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="196.453" y="287.2">Residential</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="523.468" y="287.2">Commercial</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="879.577" y="287.2">Buy</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="1208.18" y="287.2">Rent</tspan></text>
        {/* Y axis labels */}
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="53.3896" y="268.231">0</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="38.0396" y="203.286">500</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="33.8156" y="138.341">1000</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="33.8451" y="73.4031">1500</tspan></text>
        <text fill="#6B7280" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="500" letterSpacing="0"><tspan x="31.0868" y="15.4656">2000</tspan></text>
        {/* Bar labels */}
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" letterSpacing="0"><tspan x="269.309" y="53.4">Residential</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="10" letterSpacing="0"><tspan x="289.639" y="65.4">count : 1847</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" letterSpacing="0"><tspan x="591.316" y="144.4">Commercial</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="10" letterSpacing="0"><tspan x="621.535" y="156.4">count : 1280</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" letterSpacing="0"><tspan x="983.941" y="198.4">Buy</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="10" letterSpacing="0"><tspan x="955.684" y="210.4">count : 823</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="500" letterSpacing="0"><tspan x="1311.5" y="232.4">Rent</tspan></text>
        <text fill="#2C795F" fontFamily="Poppins, sans-serif" fontSize="10" letterSpacing="0"><tspan x="1289.53" y="244.4">count : 223</tspan></text>
      </svg>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className=" bg-background p-2 sm:p-2 lg:p-2 font-sans">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        {statsData.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts + Alerts Row */}
      <div className="flex flex-col xl:flex-row gap-6 mb-6">
        {/* Daily Active Users Line Chart */}
        <div className="flex-1 min-w-0 bg-white rounded-[14px] border border-[#E5E7EB] shadow-sm p-6 pb-1">
          <h2 className="text-[18px] font-medium text-[var(--secondary-text)] leading-[120%] mb-4">
            Daily Active Users
          </h2>
          <LineChart />
        </div>

        {/* Critical Alerts */}
        <div className="xl:w-[476px] xl:flex-shrink-0 bg-white rounded-[14px] border border-[#E5E7EB] shadow-sm p-6 pb-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.55469 17.5C8.70097 17.7533 8.91137 17.9637 9.16472 18.11C9.41808 18.2563 9.70547 18.3333 9.99802 18.3333C10.2906 18.3333 10.578 18.2563 10.8313 18.11C11.0847 17.9637 11.2951 17.7533 11.4414 17.5" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.71772 12.7769C2.60886 12.8962 2.53702 13.0446 2.51094 13.204C2.48486 13.3634 2.50566 13.5269 2.57081 13.6747C2.63597 13.8225 2.74267 13.9482 2.87794 14.0364C3.0132 14.1247 3.17121 14.1718 3.33272 14.1719H16.6661C16.8276 14.1719 16.9856 14.1251 17.1209 14.037C17.2563 13.9489 17.3631 13.8233 17.4285 13.6756C17.4938 13.5279 17.5148 13.3644 17.4889 13.205C17.4631 13.0456 17.3914 12.8972 17.2827 12.7777C16.1744 11.6352 14.9994 10.421 14.9994 6.67187C14.9994 5.34579 14.4726 4.07402 13.5349 3.13634C12.5972 2.19866 11.3255 1.67188 9.99939 1.67188C8.67331 1.67188 7.40154 2.19866 6.46386 3.13634C5.52618 4.07402 4.99939 5.34579 4.99939 6.67187C4.99939 10.421 3.82356 11.6352 2.71772 12.7769Z" stroke="#364153" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-[18px] font-medium text-[var(--secondary-text)] leading-[120%]">
              Critical Alerts
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {alertsData.map((alert, index) => (
              <div
                key={index}
                className="rounded-[10px] px-3 py-2 flex flex-col gap-0"
                style={{
                  border: `1.111px solid ${alert.borderColor}`,
                  background: alert.bg,
                }}
              >
                <p className="text-[14px] font-medium text-[var(--secondary-text)] leading-[120%] m-0">
                  {alert.message}
                </p>
                <p className="text-[12px] font-normal text-[#6A7282] leading-[120%] m-0">
                  {alert.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Listings by Category Bar Chart */}
      <div className="bg-white rounded-[14px] border border-[#E5E7EB] shadow-sm p-6 pb-1">
        <h2 className="text-[18px] font-medium text-[var(--secondary-text)] leading-[120%] mb-4">
          Listings by Category
        </h2>
        <BarChart />
      </div>
    </div>
  );
}
