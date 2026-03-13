import { useNavigate } from "react-router-dom";

export default function ReviewSubmission({agent_profile}) {

    const navigate=useNavigate()
  return (
    <div className=" flex  justify-center p-4 sm:p-6 lg:p-8" style={{ background: "hsl(var(--background))" }}>
      <div
        className="w-full max-w-2xl rounded-xl border p-6 flex flex-col gap-10"
        style={{ background: "#fff", borderColor: "#E6E7E6" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-2xl font-medium text-center leading-tight"
            style={{ color: "var(--base-black)", fontFamily: "Poppins, sans-serif" }}
          >
            Review Your Submission
          </h1>
          <p
            className="text-base text-center leading-tight"
            style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
          >
            Verify all information before submitting
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-6">

          {/* Uploaded Documents Card */}
          <div
            className="rounded-2xl border p-6 flex flex-col gap-8"
            style={{ background: "#fff", borderColor: "rgba(0,0,0,0.10)" }}
          >
            <h2
              className="text-lg font-bold leading-tight"
              style={{ color: "var(--base-black)", fontFamily: "Poppins, sans-serif" }}
            >
              Uploaded Documents
            </h2>

            <div className="flex flex-col gap-2">
              {/* Passport Row */}
              <div
                className="flex items-center justify-between rounded-xl px-6 py-4"
                style={{ background: "#fff" }}
              >
                <div className="flex items-center gap-4">
                  {/* Icon Container */}
                  <div
                    className="flex items-center justify-center rounded"
                    style={{
                      width: 38,
                      height: 38,
                      background: "#FFEFEE",
                      border: "1px solid #E6E7E6",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4987 1.66406H4.9987C4.55667 1.66406 4.13275 1.83966 3.82019 2.15222C3.50763 2.46478 3.33203 2.8887 3.33203 3.33073V16.6641C3.33203 17.1061 3.50763 17.53 3.82019 17.8426C4.13275 18.1551 4.55667 18.3307 4.9987 18.3307H14.9987C15.4407 18.3307 15.8646 18.1551 16.1772 17.8426C16.4898 17.53 16.6654 17.1061 16.6654 16.6641V5.83073L12.4987 1.66406Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.668 1.66406V4.9974C11.668 5.43942 11.8436 5.86335 12.1561 6.17591C12.4687 6.48847 12.8926 6.66406 13.3346 6.66406H16.668" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.33464 7.5H6.66797" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3346 10.8359H6.66797" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.3346 14.1641H6.66797" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-base font-normal leading-tight"
                      style={{ color: "#101828", fontFamily: "Poppins, sans-serif" }}
                    >
                      Passport
                    </span>
                    <span
                      className="text-sm font-normal leading-tight"
                      style={{ color: "#4A5565", fontFamily: "Poppins, sans-serif" }}
                    >
                      Identity Document
                    </span>
                  </div>
                </div>
                {/* Check Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <g clipPath="url(#clip-passport-check)">
                    <path d="M10.0013 18.3307C14.6037 18.3307 18.3346 14.5998 18.3346 9.9974C18.3346 5.39502 14.6037 1.66406 10.0013 1.66406C5.39893 1.66406 1.66797 5.39502 1.66797 9.9974C1.66797 14.5998 5.39893 18.3307 10.0013 18.3307Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip-passport-check">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Selfie Photo Row */}
              <div
                className="flex items-center justify-between rounded-xl px-6 py-4"
                style={{ background: "#fff" }}
              >
                <div className="flex items-center gap-4">
                  {/* Icon Container */}
                  <div
                    className="flex items-center justify-center rounded"
                    style={{
                      width: 38,
                      height: 38,
                      background: "#FFEFEE",
                      border: "1px solid #E6E7E6",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0846 3.33594H7.91797L5.83464 5.83594H3.33464C2.89261 5.83594 2.46868 6.01153 2.15612 6.32409C1.84356 6.63665 1.66797 7.06058 1.66797 7.5026V15.0026C1.66797 15.4446 1.84356 15.8686 2.15612 16.1811C2.46868 16.4937 2.89261 16.6693 3.33464 16.6693H16.668C17.11 16.6693 17.5339 16.4937 17.8465 16.1811C18.159 15.8686 18.3346 15.4446 18.3346 15.0026V7.5026C18.3346 7.06058 18.159 6.63665 17.8465 6.32409C17.5339 6.01153 17.11 5.83594 16.668 5.83594H14.168L12.0846 3.33594Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 13.3359C11.3807 13.3359 12.5 12.2166 12.5 10.8359C12.5 9.45523 11.3807 8.33594 10 8.33594C8.61929 8.33594 7.5 9.45523 7.5 10.8359C7.5 12.2166 8.61929 13.3359 10 13.3359Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-base font-normal leading-tight"
                      style={{ color: "#101828", fontFamily: "Poppins, sans-serif" }}
                    >
                      Selfie Photo
                    </span>
                    <span
                      className="text-sm font-normal leading-tight"
                      style={{ color: "#4A5565", fontFamily: "Poppins, sans-serif" }}
                    >
                      Identity Confirmation
                    </span>
                  </div>
                </div>
                {/* Check Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <g clipPath="url(#clip-selfie-check)">
                    <path d="M10.0013 18.3307C14.6037 18.3307 18.3346 14.5998 18.3346 9.9974C18.3346 5.39502 14.6037 1.66406 10.0013 1.66406C5.39893 1.66406 1.66797 5.39502 1.66797 9.9974C1.66797 14.5998 5.39893 18.3307 10.0013 18.3307Z" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594" stroke="#F88379" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip-selfie-check">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* What Happens Next Card */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-8"
            style={{
              background: "#FFF9F9",
              border: "1px solid #F88379",
            }}
          >
            <h2
              className="text-lg font-bold leading-tight"
              style={{ color: "var(--base-black)", fontFamily: "Poppins, sans-serif" }}
            >
              What Happens Next?
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  1.
                </span>
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  Your documents will be reviewed by our compliance team
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  2.
                </span>
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  You'll receive an email notification once verified (24-48 hours)
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  3.
                </span>
                <span
                  className="text-sm font-normal leading-tight"
                  style={{ color: "var(--text-grey)", fontFamily: "Poppins, sans-serif" }}
                >
                  Upon approval, your agent badge will be activated
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
        
          className="w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 text-sm font-normal transition-opacity hover:opacity-90 active:opacity-80"
          style={{
            background: "hsl(var(--primary))",
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            minHeight: 40,
          }}
          onClick={() => {navigate("/admin/agent-profile")}}
        >
          <span>Submit</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
