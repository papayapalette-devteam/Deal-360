"use client";

export default function WhatIsComing() {
  const features = [
    {
      bg: "bg-[rgba(127,255,212,0.10)]",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.604 43.2266C23.0468 43.4849 23.2682 43.614 23.5806 43.681C23.8231 43.733 24.1769 43.733 24.4194 43.681C24.7318 43.614 24.9532 43.4849 25.396 43.2266C29.2921 40.9536 40 33.8137 40 23.9968V14.432C40 12.833 40 12.0335 39.7385 11.3462C39.5075 10.7391 39.132 10.1974 38.6447 9.76787C38.093 9.28169 37.3444 9.00096 35.8472 8.43951L25.1236 4.41816C24.7078 4.26224 24.4999 4.18428 24.286 4.15337C24.0963 4.12596 23.9037 4.12596 23.714 4.15337C23.5001 4.18428 23.2922 4.26224 22.8764 4.41816L12.1528 8.43951C10.6556 9.00096 9.90699 9.28169 9.35532 9.76787C8.86797 10.1974 8.49255 10.7391 8.26152 11.3462C8 12.0335 8 12.833 8 14.432V23.9968C8 33.8137 18.7079 40.9536 22.604 43.2266Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Verified agent marketplace",
      description: "Visibility won't be equal.",
    },
    {
      bg: "bg-[rgba(248,131,121,0.10)]",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34 20V16C34 10.4772 29.5228 6 24 6C18.4772 6 14 10.4772 14 16V20M24 29V33M17.6 42H30.4C33.7603 42 35.4405 42 36.7239 41.346C37.8529 40.7708 38.7708 39.8529 39.346 38.7239C40 37.4405 40 35.7603 40 32.4V29.6C40 26.2397 40 24.5595 39.346 23.2761C38.7708 22.1471 37.8529 21.2292 36.7239 20.654C35.4405 20 33.7603 20 30.4 20H17.6C14.2397 20 12.5595 20 11.2761 20.654C10.1471 21.2292 9.2292 22.1471 8.65396 23.2761C8 24.5595 8 26.2397 8 29.6V32.4C8 35.7603 8 37.4405 8.65396 38.7239C9.2292 39.8529 10.1471 40.7708 11.2761 41.346C12.5595 42 14.2397 42 17.6 42Z" stroke="#F88379" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Private & off-market opportunities",
      description: "Some inventory will never be public.",
    },
    {
      bg: "bg-[rgba(248,131,121,0.10)]",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Demand-first discovery",
      description: "Less noise. More intent.",
    },
    {
      bg: "bg-[rgba(127,255,212,0.10)]",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5007 18.3333H7.66732C6.7339 18.3333 6.26719 18.3333 5.91067 18.515C5.59706 18.6748 5.3421 18.9297 5.18231 19.2433C5.00065 19.5999 5.00065 20.0666 5.00065 21V35M27.5007 18.3333H32.334C33.2674 18.3333 33.7341 18.3333 34.0906 18.515C34.4042 18.6748 34.6592 18.9297 34.819 19.2433C35.0007 19.5999 35.0007 20.0666 35.0007 21V35M27.5007 35V10.3333C27.5007 8.46649 27.5007 7.53307 27.1373 6.82003C26.8178 6.19282 26.3078 5.68289 25.6806 5.36331C24.9676 5 24.0342 5 22.1673 5H17.834C15.9671 5 15.0337 5 14.3207 5.36331C13.6935 5.68289 13.1835 6.19282 12.864 6.82003C12.5007 7.53307 12.5007 8.46649 12.5007 10.3333V35M36.6673 35H3.33398M18.334 11.6667H21.6673M18.334 18.3333H21.6673M18.334 25H21.6673" stroke="#7FFFD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Brokerage-level control",
      description: "Built for teams, not just individuals.",
    },
  ];

  return (
    <div className="min-h-[0vh] bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-48 flex flex-col items-center gap-12">
        {/* Header section */}
        <div className="flex flex-col items-center gap-12 w-full">
          {/* Badge */}
          <div
            className="relative flex items-center gap-2 rounded-full border-4"
            style={{
              borderColor: "#83f4ce",
              padding: "12px 24px",
              background:
                "linear-gradient(90deg, rgba(248,131,121,0.10) 0%, rgba(225,255,109,0.10) 50%, rgba(127,255,212,0.10) 100%)",
            }}
          >
            {/* The small circle */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, #C4FFEC 0%, #00C274 50%, #FFB8B8 100%)",
              }}
            />

            {/* Text */}
            <span
              className="font-medium leading-tight text-[var(--color-primary)]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
              }}
            >
              What&apos;s Coming
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-center w-full leading-tight"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px, 6vw, 64px)",
              lineHeight: "110%",
              color: "#4B4B4B",
            }}
          >
            More than a{" "}
            <span className="text-[var(--color-primary)]">portal</span>. Here&apos;s{" "}
            <span className="text-[var(--color-primary)]">why</span>.
          </h1>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-2xl shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex flex-col items-center justify-center gap-10 p-6 min-h-[220px] sm:min-h-[280px]`}
            >
              {/* Icon circle */}
              <div className="w-20 h-20 flex-shrink-0 rounded-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.10)] flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-4 w-full text-[var(--color-text)]">
                <h2
                  className="text-center w-full"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "110%",
                  }}
                >
                  {feature.title}
                </h2>
                <p
                  className="text-center w-full text-[var(--color-text)]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="flex items-center justify-center px-6 py-4 rounded-lg border-4 border-[#79FFD2] cursor-pointer transition-opacity hover:opacity-80"
          style={{
            background:
              "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
          }}
        >
          <span className="text-[var(--color-text)]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "110%",
            }}
          >
            Register Early
          </span>
        </button>
      </div>
    </div>
  );
}
