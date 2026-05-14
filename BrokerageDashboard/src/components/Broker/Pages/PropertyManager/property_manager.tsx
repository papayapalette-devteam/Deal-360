import { Link } from "react-router-dom";

export default function PropertyManager() {
  const stats = [
    {
      label: "Total Properties",
      value: "5",
      iconBg: "rgba(248, 131, 121, 0.14)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.96484 21.8836V3.98133C5.96484 3.45377 6.17441 2.94783 6.54745 2.57479C6.92048 2.20176 7.42643 1.99219 7.95398 1.99219H15.9105C16.4381 1.99219 16.944 2.20176 17.3171 2.57479C17.6901 2.94783 17.8997 3.45377 17.8997 3.98133V21.8836H5.96484Z" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.96656 11.9297H3.97742C3.44987 11.9297 2.94392 12.1393 2.57089 12.5123C2.19785 12.8853 1.98828 13.3913 1.98828 13.9188V19.8862C1.98828 20.4138 2.19785 20.9197 2.57089 21.2928C2.94392 21.6658 3.44987 21.8754 3.97742 21.8754H5.96656" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.9023 8.95312H19.8915C20.419 8.95312 20.925 9.16269 21.298 9.53573C21.6711 9.90877 21.8806 10.4147 21.8806 10.9423V19.8934C21.8806 20.4209 21.6711 20.9269 21.298 21.2999C20.925 21.673 20.419 21.8825 19.8915 21.8825H17.9023" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.94531 5.96875H13.9236" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.94531 9.94531H13.9236" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.94531 13.9297H13.9236" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.94531 17.8984H13.9236" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Active Tenancies",
      value: "3",
      iconBg: "rgba(127, 255, 212, 0.27)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9123 20.8893V18.9002C15.9123 17.845 15.4931 16.8332 14.747 16.0871C14.001 15.341 12.9891 14.9219 11.934 14.9219H5.96656C4.91145 14.9219 3.89956 15.341 3.15349 16.0871C2.40742 16.8332 1.98828 17.845 1.98828 18.9002V20.8893" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.95093 10.9409C11.1481 10.9409 12.9292 9.15979 12.9292 6.96265C12.9292 4.76551 11.1481 2.98438 8.95093 2.98438C6.75379 2.98438 4.97266 4.76551 4.97266 6.96265C4.97266 9.15979 6.75379 10.9409 8.95093 10.9409Z" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.8821 20.885V18.8959C21.8815 18.0144 21.5881 17.1581 21.0481 16.4615C20.508 15.7648 19.7519 15.2672 18.8984 15.0469" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9141 3.10938C16.7698 3.32848 17.5283 3.82616 18.0699 4.52396C18.6116 5.22176 18.9056 6.07998 18.9056 6.96333C18.9056 7.84668 18.6116 8.7049 18.0699 9.4027C17.5283 10.1005 16.7698 10.5982 15.9141 10.8173" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Pending Renewals",
      value: "1",
      iconBg: "rgba(248, 131, 121, 0.24)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.95703 1.99219V5.97046" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9141 1.99219V5.97046" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.8975 3.97656H4.97351C3.87494 3.97656 2.98438 4.86713 2.98438 5.9657V19.8897C2.98438 20.9882 3.87494 21.8788 4.97351 21.8788H18.8975C19.9961 21.8788 20.8866 20.9882 20.8866 19.8897V5.9657C20.8866 4.86713 19.9961 3.97656 18.8975 3.97656Z" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.98438 9.94531H20.8866" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Agent Proposals",
      value: "9",
      iconBg: "rgba(127, 255, 212, 0.22)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.8797 6.96094L13.4258 15.4148L8.45298 10.4419L1.98828 16.9066" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9141 6.96094H21.8815V12.9284" stroke="#7FFFD4" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Annual Rent Value",
      value: "AED 850K",
      iconBg: "rgba(248, 131, 121, 0.20)",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9207 1.99219H5.96961C5.44205 1.99219 4.93611 2.20176 4.56307 2.57479C4.19004 2.94783 3.98047 3.45377 3.98047 3.98133V19.8944C3.98047 20.422 4.19004 20.9279 4.56307 21.301C4.93611 21.674 5.44205 21.8836 5.96961 21.8836H17.9044C18.432 21.8836 18.9379 21.674 19.311 21.301C19.684 20.9279 19.8936 20.422 19.8936 19.8944V6.96503L14.9207 1.99219Z" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.9258 1.99219V5.97046C13.9258 6.49802 14.1354 7.00396 14.5084 7.377C14.8814 7.75003 15.3874 7.9596 15.9149 7.9596H19.8932" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.94617 8.95312H7.95703" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9136 12.9297H7.95703" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.9136 16.9141H7.95703" stroke="#F88379" strokeWidth="1.989" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const properties = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b3c5a4052e0e5b96739957b9d151a808b518d5af?width=870",
      badge: "Off-Plan",
      name: "Portofino, DAMAC Lagoons, Dubai",
      price: "AED 3,800,000",
      status: "Available",
      beds: "5 Beds",
      baths: "6 Baths",
      builtUp: "1,976 sqft",
      plot: "2,268 sqft",
      description: "Genuine Resale | End Unit | Luxurious",
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cc643217caeb48dec4710576a03981b34788665b?width=870",
      badge: "Off-Plan",
      name: "Santorini, DAMAC Lagoons, Dubai",
      price: "AED 3,150,000",
      status: "Available",
      beds: "4 Beds",
      baths: "4 Baths",
      builtUp: "1,344 sqft",
      plot: "2,44 sqft",
      description: "Middle Unit | Resale | Back to Back",
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e3deba4fe7e010b998ce3e1039e8bb67ab4647d2?width=870",
      badge: "Off-Plan",
      name: "Venera, The Valley by Emaar, Dubai",
      price: "AED 3,050,000",
      status: "Available",
      beds: "3 Beds",
      baths: "4 Baths",
      builtUp: "1,455 sqft",
      plot: "3,44 sqft",
      description: "Premium 3BR + Maid | Single Row",
    },
    {
      id: 4,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7208f0f66180da98fce26048b8e846b1183d8486?width=870",
      badge: "Off-Plan",
      name: "Santorini, DAMAC Lagoons, Dubai",
      price: "AED 3,050,000",
      status: "Available",
      beds: "5 Beds",
      baths: "6 Baths",
      builtUp: "1,976 sqft",
      plot: "2,268 sqft",
      description: "Middle Unit | Resale | Back to Back",
    },
    {
      id: 5,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/bb5e487129d56acceadd4a6c9e8133cbc9db1cb7?width=870",
      badge: "Off-Plan",
      name: "Santorini, DAMAC Lagoons, Dubai",
      price: "AED 5,900,000",
      status: "Available",
      beds: "4 Beds",
      baths: "4 Baths",
      builtUp: "1,344 sqft",
      plot: "2,44 sqft",
      description: "Genuine Resale | Mid Unit | Back to Back",
    },
    {
      id: 6,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9b638414a9abb583b262a9da496ee418e2c29672?width=870",
      badge: "Off-Plan",
      name: "Costa Brava, DAMAC Lagoons, Dubai",
      price: "AED 3,750,000",
      status: "Available",
      beds: "3 Beds",
      baths: "4 Baths",
      builtUp: "1,455 sqft",
      plot: "3,44 sqft",
      description: "Genuine Resale | Off-Market | Luxurious",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-poppins">
      <div className="p-4 md:p-6 flex flex-col gap-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex items-start justify-between gap-3"
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[#6A7282] text-sm font-normal leading-tight truncate">
                  {stat.label}
                </span>
                <span className="text-[#101828] text-2xl font-bold leading-tight">
                  {stat.value}
                </span>
              </div>
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: stat.iconBg }}
              >
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Properties Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-arimo text-[#101828] text-lg font-bold">Your Properties</h2>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-4">
          <h2 className="text-[#101828] text-lg font-bold font-poppins">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Upload Documents */}
            <button className="flex items-center gap-4 px-5 py-5 rounded-xl border border-[#E5E7EB] hover:bg-gray-50 transition-colors text-left">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M15.1875 2.02344H6.07563C5.53861 2.02344 5.02358 2.23677 4.64385 2.6165C4.26411 2.99624 4.05078 3.51127 4.05078 4.04829V20.2471C4.05078 20.7841 4.26411 21.2992 4.64385 21.6789C5.02358 22.0586 5.53861 22.272 6.07563 22.272H18.2247C18.7618 22.272 19.2768 22.0586 19.6565 21.6789C20.0363 21.2992 20.2496 20.7841 20.2496 20.2471V7.08557L15.1875 2.02344Z" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1719 2.02344V6.07314C14.1719 6.61017 14.3852 7.1252 14.7649 7.50493C15.1447 7.88466 15.6597 8.098 16.1967 8.098H20.2464" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1225 9.10938H8.09766" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.1971 13.1641H8.09766" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.1971 17.2109H8.09766" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="text-[#101828] text-base font-normal font-poppins">Upload Documents</p>
                <p className="text-[#6A7282] text-sm font-normal font-poppins">Add property documents</p>
              </div>
            </button>

            {/* View Rent Schedule */}
            <button className="flex items-center gap-4 px-5 py-5 rounded-xl border border-[#E5E7EB] hover:bg-gray-50 transition-colors text-left">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M8.10156 2.02344V6.07314" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.1992 2.02344V6.07314" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.2379 4.05469H5.06392C3.94562 4.05469 3.03906 4.96124 3.03906 6.07954V20.2535C3.03906 21.3718 3.94562 22.2784 5.06392 22.2784H19.2379C20.3562 22.2784 21.2627 21.3718 21.2627 20.2535V6.07954C21.2627 4.96124 20.3562 4.05469 19.2379 4.05469Z" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.03906 10.125H21.2627" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="text-[#101828] text-base font-normal font-poppins">View Rent Schedule</p>
                <p className="text-[#6A7282] text-sm font-normal font-poppins">Check payment dates</p>
              </div>
            </button>

            {/* Set Market Intent */}
            <button className="flex items-center gap-4 px-5 py-5 rounded-xl border border-[#E5E7EB] hover:bg-gray-50 transition-colors text-left">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M22.272 7.08594L13.6663 15.6916L8.60421 10.6294L2.02344 17.2102" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.1992 7.08594H22.2738V13.1605" stroke="#F88379" strokeWidth="2.025" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <p className="text-[#101828] text-base font-normal font-poppins">Set Market Intent</p>
                <p className="text-[#6A7282] text-sm font-normal font-poppins">Indicate property plans</p>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_4px_6px_0_rgba(0,0,0,0.10)] overflow-hidden p-4 flex flex-col gap-4">
      {/* Image */}
      <div
        className="relative h-56 rounded-3xl border border-[#F88379] bg-cover bg-center flex-shrink-0 p-4 flex flex-col justify-between"
        style={{ backgroundImage: `url('${property.image}')` }}
      >
        {/* Top row: badge + icons */}
        <div className="flex justify-between items-center">
          <span className="bg-black/70 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            {property.badge}
          </span>
          <div className="flex gap-3 items-center">
            {/* Share Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7914 12.6062C21.0355 12.397 21.1575 12.2924 21.2023 12.1679C21.2415 12.0586 21.2415 11.9391 21.2023 11.8298C21.1575 11.7053 21.0355 11.6007 20.7914 11.3914L12.3206 4.1308C11.9004 3.7706 11.6903 3.5905 11.5124 3.58609C11.3578 3.58226 11.2101 3.65018 11.1124 3.77006C11 3.90799 11 4.18473 11 4.7382V9.03346C8.86532 9.40691 6.91159 10.4886 5.45971 12.1127C3.87682 13.8833 3.00123 16.1748 3 18.5498V19.1618C4.04934 17.8977 5.35951 16.8753 6.84076 16.1647C8.1467 15.5383 9.55842 15.1671 11 15.0694V19.2595C11 19.8129 11 20.0897 11.1124 20.2276C11.2101 20.3475 11.3578 20.4154 11.5124 20.4116C11.6903 20.4072 11.9004 20.2271 12.3206 19.8669L20.7914 12.6062Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* Bookmark Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M9.25 9.04688C11.03 9.69687 12.97 9.69687 14.75 9.04688" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#F88379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* Name & Price */}
          <div className="flex flex-col gap-1">
            <p className="text-[#4B4B4B] text-[1.125rem] font-normal leading-[110%]">{property.name}</p>
            <p className="text-[#F88379] text-xl font-medium leading-[110%]">{property.price}</p>
          </div>

          {/* Badges Row 1 */}
          <div className="flex gap-2">
            {/* Status */}
            <div className="flex items-center justify-center gap-1 flex-1 h-6 px-3 rounded border border-[#F88379] bg-[rgba(248,131,121,0.10)]">
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><circle cx="3.5" cy="3.5" r="3.5" fill="#F88379"/></svg>
              <span className="text-[#F88379] text-xs font-normal">{property.status}</span>
            </div>
            {/* Beds */}
            <div className="flex items-center justify-center gap-1 flex-1 h-6 px-3 rounded border border-[#E6E7E6] bg-[#F7F8F8]">
              <BedIcon />
              <span className="text-[#565656] text-xs font-normal">{property.beds}</span>
            </div>
            {/* Baths */}
            <div className="flex items-center justify-center gap-1 flex-1 h-6 px-3 rounded border border-[#E6E7E6] bg-[#F7F8F8]">
              <BathIcon />
              <span className="text-[#565656] text-xs font-normal">{property.baths}</span>
            </div>
          </div>

          {/* Badges Row 2 */}
          <div className="flex gap-2">
            {/* Built-up */}
            <div className="flex items-center justify-center gap-1 flex-1 h-6 px-3 rounded border border-[#E6E7E6] bg-[#F7F8F8]">
              <SqftIcon />
              <span className="text-[#565656] text-xs font-normal">Built-up: {property.builtUp}</span>
            </div>
            {/* Plot */}
            <div className="flex items-center justify-center gap-1 flex-1 h-6 px-3 rounded border border-[#E6E7E6] bg-[#F7F8F8]">
              <PlotIcon />
              <span className="text-[#565656] text-xs font-normal">Plot: {property.plot}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#343A40] text-sm font-medium leading-[120%]">{property.description}</p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Edit Button */}
          <Link
            to="/brokerage/edit-property-manager"
            className="flex-1 flex items-center justify-center gap-2 h-8 rounded-lg border border-[#E6E6E6] hover:bg-gray-50 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.91667 1.74935C10.0801 1.58597 10.2737 1.45573 10.4866 1.36616C10.6994 1.27659 10.9272 1.23047 11.1572 1.23047C11.3873 1.23047 11.6151 1.27659 11.828 1.36616C12.0408 1.45573 12.2344 1.58597 12.3978 1.74935C12.5612 1.91272 12.6914 2.10627 12.781 2.31914C12.8706 2.53201 12.9167 2.75982 12.9167 2.98982C12.9167 3.21983 12.8706 3.44764 12.781 3.66051C12.6914 3.87338 12.5612 4.06692 12.3978 4.2303L4.37498 12.2531L1.16669 13.0833L1.99686 9.87503L9.91667 1.74935Z" stroke="#565656" strokeWidth="1.167" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#565656] text-[0.8125rem] font-medium font-manrope">Edit</span>
          </Link>

          {/* Pause Button */}
          <button className="w-9 h-8 flex items-center justify-center rounded-lg border border-black/10 bg-white hover:bg-gray-50 transition-colors">
            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0H0.666667C0.298477 0 0 0.298477 0 0.666667V10C0 10.3682 0.298477 10.6667 0.666667 10.6667H2C2.36819 10.6667 2.66667 10.3682 2.66667 10V0.666667C2.66667 0.298477 2.36819 0 2 0Z" stroke="#0A0A0A" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.33594 0H6.0026C5.63441 0 5.33594 0.298477 5.33594 0.666667V10C5.33594 10.3682 5.63441 10.6667 6.0026 10.6667H7.33594C7.70413 10.6667 8.0026 10.3682 8.0026 10V0.666667C8.0026 0.298477 7.70413 0 7.33594 0Z" stroke="#0A0A0A" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Delete Button */}
          <button className="w-9 h-8 flex items-center justify-center rounded-lg border border-black/10 bg-white hover:bg-red-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4.66406H14" stroke="#D4183D" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.6693 4.66406V13.9974C12.6693 14.6641 12.0026 15.3307 11.3359 15.3307H4.66927C4.0026 15.3307 3.33594 14.6641 3.33594 13.9974V4.66406" stroke="#D4183D" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.33594 4.66667V3.33333C5.33594 2.66667 6.0026 2 6.66927 2H9.33594C10.0026 2 10.6693 2.66667 10.6693 3.33333V4.66667" stroke="#D4183D" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#bed-clip)">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.29442 2.16406H8.70298C9.92815 2.16405 10.8986 2.16404 11.658 2.26615C12.4397 2.37124 13.0723 2.59265 13.5712 3.09156C14.0701 3.59047 14.2915 4.2231 14.3966 5.00471C14.4975 5.75523 14.4987 6.71174 14.4987 7.91651C14.728 8.10566 14.91 8.34952 15.0258 8.62914C15.106 8.82274 15.1371 9.02242 15.1515 9.23382C15.1654 9.43689 15.1654 9.68425 15.1654 9.98056V10.0142C15.1654 10.3105 15.1654 10.5579 15.1515 10.761C15.1371 10.9724 15.106 11.1721 15.0258 11.3657C14.8397 11.8149 14.4828 12.1718 14.0336 12.3578C13.84 12.438 13.6403 12.4691 13.4289 12.4836C13.3482 12.4891 13.2604 12.4924 13.1654 12.4944V13.3307C13.1654 13.6069 12.9415 13.8307 12.6654 13.8307C12.3892 13.8307 12.1654 13.6069 12.1654 13.3307V12.4974H3.83203V13.3307C3.83203 13.6069 3.60817 13.8307 3.33203 13.8307C3.05589 13.8307 2.83203 13.6069 2.83203 13.3307V12.4944C2.73697 12.4924 2.64921 12.4891 2.56845 12.4836C2.35705 12.4691 2.15737 12.438 1.96378 12.3578C1.51456 12.1718 1.15766 11.8149 0.971586 11.3657C0.891397 11.1721 0.860302 10.9724 0.845878 10.761C0.832022 10.5579 0.832027 10.3105 0.832031 10.0142V9.98056C0.832027 9.68425 0.832022 9.4369 0.845878 9.23382C0.860302 9.02242 0.891397 8.82274 0.971586 8.62914C1.08741 8.34952 1.26943 8.10566 1.4987 7.91651C1.4987 6.71174 1.49988 5.75523 1.60079 5.00471C1.70587 4.2231 1.92728 3.59047 2.42619 3.09156C2.9251 2.59265 3.55773 2.37124 4.33935 2.26615C5.09882 2.16404 6.06925 2.16405 7.29442 2.16406Z" fill="#565656"/>
      </g>
      <defs><clipPath id="bed-clip"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#bath-clip)">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.58881 1.83594C2.98676 1.83594 2.4987 2.324 2.4987 2.92605V7.5026H2.68822C2.72048 7.5026 13.2875 7.5026 13.2875 7.5026H14.6654C14.9415 7.5026 15.1654 7.72646 15.1654 8.0026C15.1654 8.27875 14.9415 8.5026 14.6654 8.5026H14.4868C14.4987 8.71378 14.4987 8.73904 14.4987 8.73904C14.4987 9.29938 14.3937 10.7903 12.4204 13.0673L13.1126 14.4457C13.2361 14.6927 13.136 14.993 12.889 15.1165C12.642 15.24 12.3416 15.1399 12.2182 14.8929L11.573 13.6026C10.4572 14.0513 9.68965 14.129 7.9987 14.1693C6.30775 14.129 5.54018 14.0513 4.42437 13.6026L3.77924 14.8929C3.65575 15.1399 3.35541 15.24 3.10842 15.1165C2.86144 14.993 2.76132 14.6927 2.88482 14.4457L3.55148 13.1123C2.40934 12.167 1.6037 10.7903 1.50907 9.29938C1.4987 8.98916 1.4987 8.5026 1.4987 8.5026H1.33203C1.05589 8.5026 0.832031 8.27875 0.832031 8.0026C0.832031 7.72646 1.05589 7.5026 1.33203 7.5026H1.4987V2.92605C1.4987 1.77171 2.43447 0.835938 3.58881 0.835938C4.44346 0.835938 5.21201 1.35627 5.52943 2.1498L5.60285 2.33336C7.24647 2.46136 8.66812 3.93629 8.66812 3.93629C8.66812 3.93629 8.6487 4.47205 8.40063 4.57884L4.4268 6.28956C3.8135 6.1395 3.51176 5.3737 3.77685 3.94269C3.97632 3.4515 4.30012 3.04879 4.69647 2.75999L4.60095 2.52119C4.4354 2.10732 4.03456 1.83594 3.58881 1.83594Z" fill="#565656"/>
      </g>
      <defs><clipPath id="bath-clip"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg>
  );
}

function SqftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#sqft-clip)">
        <path d="M12.8124 2.875H0.312499C0.139906 2.875 0 3.01491 0 3.1875V15.6874C0 15.86 0.139906 15.9999 0.312499 15.9999H12.8124C12.985 15.9999 13.1249 15.86 13.1249 15.6874V3.1875C13.1249 3.01491 12.985 2.875 12.8124 2.875ZM12.5 15.375H0.624998V3.5H12.5V15.375Z" fill="#565656"/>
        <path d="M12.2522 0.091566C11.6882 0.213597 11.6882 0.411471 11.8102 0.533533L12.058 0.781282H1.06696L1.31474 0.533502C1.43677 0.411471 1.43677 0.213597 1.31474 0.0915348C1.19271 -0.0305272 0.994832 -0.030496 0.87277 0.0915348L0.0915231 0.872782C-0.0305077 0.994812 -0.0305077 1.19269 0.0915231 1.31475L0.87277 2.096C0.933801 2.15703 1.09374 2.18753 1.09374 2.18753C1.17371 2.18753 1.25371 2.157 1.31471 2.096C1.43674 1.97396 1.43674 1.77609 1.31471 1.65403L1.06693 1.40628H12.058L11.8102 1.65406C11.6882 1.77612 11.6882 1.97396 11.8102 2.09603C11.8713 2.15706 11.9512 2.18756 12.0312 2.18756C12.1112 2.18756 12.1912 2.15706 12.2522 2.09603L13.0334 1.31478C13.1554 1.19272 13.1554 0.994875 13.0334 0.872813L12.2522 0.091566Z" fill="#565656"/>
        <path d="M15.9085 14.6853C15.7865 14.5632 15.5886 14.5632 15.4666 14.6853L15.2188 14.933V3.94196L15.4666 4.18974C15.5276 4.25077 15.6875 4.28127 15.6875 4.28127C15.7675 4.28127 15.8475 4.25077 15.9085 4.18974C16.0305 4.06767 16.0305 3.86983 15.9085 3.74777L15.1272 2.96652C15.0052 2.84449 14.8073 2.84449 14.6853 2.96652L13.904 3.74777C13.782 3.8698 13.782 4.06767 13.904 4.18974C14.0261 4.31177 14.2239 4.31177 14.346 4.18974L14.5938 3.94196V14.933L14.346 14.6853C14.224 14.5632 14.0261 14.5632 13.904 14.6853C13.782 14.8073 13.782 15.0052 13.904 15.1272L14.6853 15.9085C14.7463 15.9695 14.9063 16 14.9063 16C14.9862 16 15.0662 15.9695 15.1272 15.9085L15.9085 15.1272C16.0306 15.0052 16.0306 14.8073 15.9085 14.6853Z" fill="#565656"/>
        <path d="M2.1875 14.125H10.9375C11.1101 14.125 11.25 13.9851 11.25 13.8125V5.0625C11.25 4.88991 11.1101 4.75 10.9375 4.75H2.1875C2.01491 4.75 1.875 4.88991 1.875 5.0625V13.8125C1.875 13.9851 2.01491 14.125 2.1875 14.125Z" fill="#565656"/>
      </g>
      <defs><clipPath id="sqft-clip"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg>
  );
}

function PlotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#plot-clip)">
        <path d="M9.33203 5.16927C9.05589 5.16927 8.83203 4.94541 8.83203 4.66927C8.83203 4.39313 9.05589 4.16927 9.33203 4.16927H11.332C11.6082 4.16927 11.832 4.39313 11.832 4.66927V6.66927C11.832 6.94541 11.6082 7.16927 11.332 7.16927C11.0559 7.16927 10.832 6.94541 10.832 6.66927V5.87638L9.35225 7.35616C9.15699 7.55142 8.84041 7.55142 8.64514 7.35616C8.44988 7.16089 8.44988 6.84431 8.64514 6.64905L10.1249 5.16927H9.33203Z" fill="#565656"/>
        <path d="M7.35225 8.64905C7.54751 8.84431 7.54751 9.16089 7.35225 9.35616L5.87247 10.8359H6.66536C6.94151 10.8359 7.16536 11.0598 7.16536 11.3359C7.16536 11.6121 6.94151 11.8359 6.66536 11.8359H4.66536C4.38922 11.8359 4.16536 11.6121 4.16536 11.3359V9.33594C4.16536 9.05979 4.38922 8.83594 4.66536 8.83594C4.94151 8.83594 5.16536 9.05979 5.16536 9.33594V10.1288L6.64514 8.64905C6.84041 8.45379 7.15699 8.45379 7.35225 8.64905Z" fill="#565656"/>
        <path d="M6.66536 5.16927C6.94151 5.16927 7.16536 4.94541 7.16536 4.66927C7.16536 4.39313 6.94151 4.16927 6.66536 4.16927H4.66536C4.38922 4.16927 4.16536 4.39313 4.16536 4.66927V6.66927C4.16536 6.94541 4.38922 7.16927 4.66536 7.16927C4.94151 7.16927 5.16536 6.94541 5.16536 6.66927V5.87638L6.64514 7.35616C6.84041 7.55142 7.15699 7.55142 7.35225 7.35616C7.54751 7.16089 7.54751 6.84431 7.35225 6.64905L5.87247 5.16927H6.66536Z" fill="#565656"/>
        <path d="M8.64514 8.64905C8.44988 8.84431 8.44988 9.16089 8.64514 9.35616L10.1249 10.8359H9.33203C9.05589 10.8359 8.83203 11.0598 8.83203 11.3359C8.83203 11.6121 9.05589 11.8359 9.33203 11.8359H11.332C11.6082 11.8359 11.832 11.6121 11.832 11.3359V9.33594C11.832 9.05979 11.6082 8.83594 11.332 8.83594C11.0559 8.83594 10.832 9.05979 10.832 9.33594V10.1288L9.35225 8.64905C9.15699 8.45379 8.84041 8.45379 8.64514 8.64905Z" fill="#565656"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.96045 0.835938C6.42152 0.835929 5.21549 0.835922 4.2745 0.962435C3.31134 1.09193 2.55133 1.36216 1.95479 1.9587C1.35825 2.55523 1.08802 3.31525 0.958529 4.27841C0.832016 5.2194 0.832023 6.42542 0.832031 7.96435V8.04086C0.832023 9.57978 0.832016 10.7858 0.958529 11.7268C1.08802 12.69 1.35825 13.45 1.95479 14.0465C2.55133 14.6431 3.31134 14.9133 4.2745 15.0428C5.21549 15.1693 6.42152 15.1693 7.96045 15.1693H8.03695C9.57588 15.1693 10.7819 15.1693 11.7229 15.0428C12.6861 14.9133 13.4461 14.6431 14.0426 14.0465C14.6391 13.45 14.9094 12.69 15.0389 11.7268C15.1654 10.7858 15.1654 9.57978 15.1654 8.04085V7.96436C15.1654 6.42543 15.1654 5.2194 15.0389 4.27841C14.9094 3.31525 14.6391 2.55523 14.0426 1.9587C13.4461 1.36216 12.6861 1.09193 11.7229 0.962435C10.7819 0.835922 9.57588 0.835929 8.03695 0.835938H7.96045ZM2.6619 2.6658C3.04167 2.28603 3.55548 2.0681 4.40775 1.95352C5.2744 1.837 6.41321 1.83594 7.9987 1.83594C9.58418 1.83594 10.723 1.837 11.5896 1.95352C12.4419 2.0681 12.9557 2.28603 13.3355 2.6658C13.7153 3.04557 13.9332 3.55939 14.0478 4.41166C14.1643 5.27831 14.1654 6.41712 14.1654 8.0026C14.1654 9.58809 14.1643 10.7269 14.0478 11.5936C13.9332 12.4458 13.7153 12.9596 13.3355 13.3394C12.9557 13.7192 12.4419 13.9371 11.5896 14.0517C10.723 14.1682 9.58418 14.1693 7.9987 14.1693C6.41321 14.1693 5.2744 14.1682 4.40775 14.0517C3.55548 13.9371 3.04167 13.7192 2.6619 13.3394C2.28212 12.9596 2.0642 12.4458 1.94961 11.5936C1.83309 10.7269 1.83203 9.58809 1.83203 8.0026C1.83203 6.41712 1.83309 5.27831 1.94961 4.41166C2.0642 3.55939 2.28212 3.04557 2.6619 2.6658Z" fill="#565656"/>
      </g>
      <defs><clipPath id="plot-clip"><rect width="16" height="16" rx="5" fill="white"/></clipPath></defs>
    </svg>
  );
}
