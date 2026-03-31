export default function WhatIsComing() {
  const features = [
    {
      title: "Verified agent marketplace",
      description: "Visibility won't be equal.",
      variant: "mint",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.604 43.2297C23.0468 43.4881 23.2682 43.6172 23.5806 43.6842C23.8231 43.7362 24.1769 43.7362 24.4194 43.6842C24.7318 43.6172 24.9532 43.4881 25.396 43.2297C29.2921 40.9568 40 33.8169 40 24V14.4352C40 12.8362 40 12.0367 39.7385 11.3494C39.5075 10.7423 39.132 10.2005 38.6447 9.77105C38.093 9.28486 37.3444 9.00414 35.8472 8.44268L25.1236 4.42133C24.7078 4.26541 24.4999 4.18745 24.286 4.15655C24.0963 4.12913 23.9037 4.12913 23.714 4.15655C23.5001 4.18745 23.2922 4.26541 22.8764 4.42133L12.1528 8.44268C10.6556 9.00414 9.90699 9.28486 9.35532 9.77105C8.86797 10.2005 8.49255 10.7423 8.26152 11.3494C8 12.0367 8 12.8362 8 14.4352V24C8 33.8169 18.7079 40.9568 22.604 43.2297Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Demand-first discovery",
      description: "Less noise. More intent.",
      variant: "coral",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Brokerage-level control",
      description: "Built for teams, not just individuals.",
      variant: "mint",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4999 18.3333H7.66659C6.73316 18.3333 6.26645 18.3333 5.90993 18.515C5.59633 18.6748 5.34136 18.9297 5.18157 19.2433C4.99992 19.5999 4.99992 20.0666 4.99992 21V35M27.4999 18.3333H32.3333C33.2667 18.3333 33.7334 18.3333 34.0899 18.515C34.4035 18.6748 34.6585 18.9297 34.8183 19.2433C34.9999 19.5999 34.9999 20.0666 34.9999 21V35M27.4999 35V10.3333C27.4999 8.46649 27.4999 7.53307 27.1366 6.82003C26.817 6.19282 26.3071 5.68289 25.6799 5.36331C24.9668 5 24.0334 5 22.1666 5H17.8333C15.9664 5 15.033 5 14.32 5.36331C13.6927 5.68289 13.1828 6.19282 12.8632 6.82003C12.4999 7.53307 12.4999 8.46649 12.4999 10.3333V35M36.6666 35H3.33325M18.3333 11.6667H21.6666M18.3333 18.3333H21.6666M18.3333 25H21.6666" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Private & off-market opportunities",
      description: "Some inventory will never be public.",
      variant: "coral",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34 20V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V20M24 29V33M17.6 42H30.4C33.7603 42 35.4405 42 36.7239 41.346C37.8529 40.7708 38.7708 39.8529 39.346 38.7239C40 37.4405 40 35.7603 40 32.4V29.6C40 26.2397 40 24.5595 39.346 23.2761C38.7708 22.1471 37.8529 21.2292 36.7239 20.654C35.4405 20 33.7603 20 30.4 20H17.6C14.2397 20 12.5595 20 11.2761 20.654C10.1471 21.2292 9.2292 22.1471 8.65396 23.2761C8 24.5595 8 26.2397 8 29.6V32.4C8 35.7603 8 37.4405 8.65396 38.7239C9.2292 39.8529 10.1471 40.7708 11.2761 41.346C12.5595 42 14.2397 42 17.6 42Z" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white font-poppins">
      <section className="overflow-hidden">

        {/* ── HEADING ── */}
        <div className="text-center px-4 pt-12 lg:pt-[55px] pb-0">
          {/* Mobile heading */}
          <h2 className="lg:hidden text-[34px] font-semibold leading-[1.25] text-[#4B4B4B]">
            More than a{" "}
            <span className="text-[#F88379]">portal.</span>
            <br />
            Here&apos;s{" "}
            <span className="text-[#F88379]">why.</span>
          </h2>
          {/* Desktop heading */}
          <h2 className="hidden lg:block text-[64px] font-medium leading-[1.1] text-[#4B4B4B]">
            More than a{" "}
            <span className="text-[#F88379]">portal</span>
            {". Here\u2019s "}
            <span className="text-[#F88379]">why</span>
            {"."}
          </h2>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden lg:flex items-center mt-14 xl:mt-16 pb-16 xl:pb-20">

          {/* Left: Tablet Mockup */}
          <div className="flex-shrink-0 w-[54%] xl:w-[55%] relative" style={{ height: '680px' }}>
            {/* Tablet container — slightly overflows left edge like the design */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -left-6 xl:-left-10">
              <div className="relative w-full h-full" style={{ paddingBottom: '72.1%' }}>
                {/* Tablet frame */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bf47d176cb13cec089f926ad33fb3f18f097f386?width=2159"
                  alt="Tablet frame"
                  className="absolute inset-0 w-full h-full object-fill z-0 "
                />
                {/* App screenshot inside tablet screen */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/30974a59baca99d804c7d0b762113efd0432e8ec?width=1916"
                  alt="App screenshot"
                  className="absolute object-cover z-10"
                  style={{
                    left: '3%',
                    top: '9.1%',
                    width: '90.8%',
                    height: "84%",
                    // height: "auto",
                    // padding:"10px",
                    borderTopRightRadius: '42px',
                    borderBottomRightRadius: '42px',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: 2×2 Feature Cards Grid */}
          <div className="flex-1 grid grid-cols-2 gap-5 xl:gap-6 pr-8 xl:pr-16 2xl:pr-24">
            {features.map((feature, i) => (
              <DesktopCard key={i} {...feature} />
            ))}
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden relative mt-6 pb-0">
          {/* Background city image — behind cards */}
          <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a713f1592a13f3e838d0efae827987dcc6fe59c0?width=2008"
              alt="City background"
              className="w-full h-full object-cover rounded-b-[30px]"
            />
          </div>

          {/* Staggered Cards */}
          <div className="relative flex flex-col gap-8 pt-0 pb-0">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`w-[326px] flex-shrink-0 ${
                  i % 2 === 0 ? '-translate-x-7' : 'translate-x-[88px]'
                }`}
                style={{ width: '326px' }}
              >
                <MobileCard {...feature} />
              </div>
            ))}
          </div>

          {/* Register Early Button */}
          <div className="relative flex justify-center py-8 mt-2">
            <button className="bg-[#7FFFD4] text-[#4B4B4B] font-semibold text-sm px-8 py-[14px] rounded-lg shadow-md hover:brightness-95 transition-all">
              Register Early
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}

/* ── Desktop Feature Card (280px tall, matches figma) ── */
function DesktopCard({ title, description, variant, icon }) {
  const isMint = variant === "mint";
  return (
    <div
      className={`rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex flex-col items-center ${
        isMint ? "bg-[#7FFFD4]" : "bg-[#F88379]"
      }`}
      style={{ height: '280px', padding: '20px 22px 24px' }}
    >
      {/* Icon circle */}
      <div className="w-20 h-20 rounded-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-medium text-center mt-auto leading-[122%] ${
          isMint ? "text-[#4B4B4B]" : "text-white"
        }`}
        style={{ marginTop: 'auto' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm text-center mt-3 leading-[150%] ${
          isMint ? "text-[#4B4B4B]" : "text-white"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

/* ── Mobile Feature Card (209px tall, matches figma) ── */
function MobileCard({ title, description, variant, icon }) {
  const isMint = variant === "mint";
  return (
    <div
      className={`rounded-xl shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex flex-col items-center ${
        isMint ? "bg-[#7FFFD4]" : "bg-[#F88379]"
      }`}
      style={{ height: '209px', padding: '24px 20px 20px' }}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
        {/* Scaled-down icon */}
        <span className="scale-50 origin-center block leading-none">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-medium text-center leading-[150%] mt-auto ${
          isMint ? "text-[#4B4B4B]" : "text-white"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm text-center leading-[150%] mt-1 ${
          isMint ? "text-[#4B4B4B]" : "text-white"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
