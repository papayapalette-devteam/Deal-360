
import React, { useState } from "react";
import UploadSelfee from "./upload_selfee";
import ReviewSubmission from "./review_submission";


function UploadIdentification() {

  const [agent_profile, setagent_profile] = useState({ AgentId: [], Selfee: [] })

  const [showPassportUpload, setShowPassportUpload] = useState("");

  const [show_selfee, setshow_selfee] = useState(false);

   const [submission, setsubmission] = useState(false);

  const passportBg = showPassportUpload === "passport" ? "#FFEFEE" : "#FFFFFF";

  const emiratesbg = showPassportUpload === "emiratesid" ? "#FFEFEE" : "#FFFFFF";


  const colors = {
    border: "var(--Colors-for-white-theme-Secondary)",
    background: "#FFF9F9",
    icon: "var(--Colors-for-white-theme-Secondary)",
    title: "var(--base-black)",
    text: "#364153",
  };

  const requirements = [
    "Document must be valid and not expired",
    "Image must be clear and well-lit",
    "All text must be readable",
    "No black and white copies accepted",
  ];

  function InfoIcon() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, marginTop: "1px" }}
      >
        <g clipPath="url(#clip0_doc_req)">
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6V9"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12H9.0075"
            stroke={colors.icon}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_doc_req">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <div
      className="min-h-screen flex  justify-center px-4 py-0"

    >
      {!show_selfee && !submission &&(
        <div className="flex flex-col  gap-10 w-full w-full">

          {/* Header */}
          <div className="flex flex-col items-center gap-4 w-full">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                stroke="var(--base-black)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34 16L24 6L14 16"
                stroke="var(--base-black)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 6V30"
                stroke="var(--base-black)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col items-center gap-2 w-full">
              <h1
                style={{
                  color: "var(--base-black)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "120%",
                  textAlign: "center",
                }}
              >
                Upload Identification
              </h1>

              <p
                style={{
                  color: "var(--text-grey)",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "120%",
                  textAlign: "center",
                }}
              >
                Upload a clear photo of your Passport or Emirates ID
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row items-stretch gap-6 w-full">

            {/* Passport Card */}
            <div
              onClick={() => setShowPassportUpload("passport")}
              className="flex-1 flex flex-col justify-center items-center gap-[10px] cursor-pointer"
              style={{
                padding: "24px",
                borderRadius: "14px",
                border: "2px solid #D1D5DC",
                background: passportBg
              }}
            >
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col items-center gap-4 w-full">

                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 18H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 26H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 34H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <div className="flex flex-col items-center w-full gap-2">
                    <p
                      style={{
                        color: "var(--base-black)",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      Passport
                    </p>

                    <p
                      style={{
                        color: "var(--text-grey)",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      Bio page with photo
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Emirates ID Card */}
            <div
              onClick={() => setShowPassportUpload("emiratesid")}
              className="flex-1 flex flex-col justify-center items-center gap-[10px] cursor-pointer"
              style={{
                padding: "24px",
                borderRadius: "14px",
                border: "2px solid #D1D5DC",
                background: emiratesbg
              }}
            >
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col items-center gap-4 w-full">

                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 18H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 26H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32 34H16" stroke="#4A5565" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <div className="flex flex-col items-center w-full gap-2">
                    <p
                      style={{
                        color: "var(--base-black)",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                    >
                      Emirates ID
                    </p>

                    <p
                      style={{
                        color: "var(--text-grey)",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      Front and back
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
          {/* Passport Upload Section */}
          {showPassportUpload === "passport" && agent_profile.AgentId.length === 0 && (
            <div className="w-full">
              <PassportUpload setagent_profile={setagent_profile} />
            </div>
          )}

          {showPassportUpload === "emiratesid" && agent_profile.AgentId.length === 0 && (
            <div className="w-full">
              <EmiratesId setagent_profile={setagent_profile} />
            </div>
          )}

          {agent_profile.AgentId.length > 0 && (
            <div className="w-full">
              <FileUploaded setshow_selfee={setshow_selfee} />
            </div>
          )}

          <div
            className="document-requirements-card"
            style={{
              border: `1px solid ${colors.border}`,
              background: colors.background,
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <InfoIcon />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "120%",
                    color: colors.title,
                    margin: 0,
                  }}
                >
                  Document Requirements
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {requirements.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "120%",
                        color: colors.text,
                      }}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {show_selfee && !submission &&(
        <div className="w-full">
          <UploadSelfee agent_profile={agent_profile} setagent_profile={setagent_profile} 
          setsubmission={setsubmission} />
        </div>
      )}

          {submission &&(
        <div className="w-full">
          <ReviewSubmission agent_profile={agent_profile}/>
        </div>
      )}

    </div>
  );
}





function PassportUpload({ setagent_profile }) {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setagent_profile((prev) => ({
        ...prev,
        AgentId: [...prev.AgentId, file]
      }));
    }
  };

  return (
    <div className="w-full flex bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full">

        <div className="flex flex-col justify-center gap-6 p-6 rounded-[14px] border-2 border-[#D1D5DC] bg-white w-full">

          <div className="flex flex-col items-center gap-6 w-full">

            {/* Icon + Text */}
            <div className="flex flex-col items-center gap-4 w-full">

              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 16L24 6L14 16"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6V30"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-center gap-2 w-full">
                <h2
                  className="font-poppins text-[18px] font-bold text-center"
                  style={{ color: "var(--base-black)" }}
                >
                  Upload Passport
                </h2>

                <p
                  className="font-poppins text-[14px] text-center"
                  style={{ color: "var(--text-grey)" }}
                >
                  Make sure the document is clear and all details are visible
                </p>
              </div>

            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              id="passportUpload"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Choose File Button */}
            <label
              htmlFor="passportUpload"
              className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
              style={{ backgroundColor: "var(--form-secondary)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3307 5.33333L7.9974 2L4.66406 5.33333"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V10"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                className="font-poppins text-[14px]"
                style={{ color: "var(--form-text-black)" }}
              >
                Choose File
              </span>
            </label>

          </div>
        </div>

      </div>
    </div>
  );
}

function EmiratesId({ setagent_profile }) {

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setagent_profile((prev) => ({
        ...prev,
        AgentId: [...prev.AgentId, file]
      }));
    }
  };

  return (
    <div className="w-full flex bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full">

        <div className="flex flex-col justify-center gap-6 p-6 rounded-[14px] border-2 border-[#D1D5DC] bg-white w-full">

          <div className="flex flex-col items-center gap-6 w-full">

            {/* Icon + Text */}
            <div className="flex flex-col items-center gap-4 w-full">

              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 16L24 6L14 16"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6V30"
                  stroke="#C0C3C1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col items-center gap-2 w-full">
                <h2
                  className="font-poppins text-[18px] font-bold text-center"
                  style={{ color: "var(--base-black)" }}
                >
                  Upload Emirates ID
                </h2>

                <p
                  className="font-poppins text-[14px] text-center"
                  style={{ color: "var(--text-grey)" }}
                >
                  Make sure the document is clear and all details are visible
                </p>
              </div>

            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              id="passportUpload"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Choose File Button */}
            <label
              htmlFor="passportUpload"
              className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
              style={{ backgroundColor: "var(--form-secondary)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3307 5.33333L7.9974 2L4.66406 5.33333"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V10"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                className="font-poppins text-[14px]"
                style={{ color: "var(--form-text-black)" }}
              >
                Choose File
              </span>
            </label>

          </div>
        </div>

      </div>
    </div>
  );
}


function FileUploaded({ setshow_selfee }) {


  return (
    <div className="w-full flex bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full">

        <div className="flex flex-col justify-center gap-6 p-6 rounded-[14px] border-2 border-[#D1D5DC] bg-white w-full">

          <div className="flex flex-col items-center gap-6 w-full">

            {/* Icon + Text */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex w-16 h-16 p-1 justify-center items-center rounded-full bg-[#DCFCE7]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16.0013 29.3307C23.3651 29.3307 29.3346 23.3612 29.3346 15.9974C29.3346 8.6336 23.3651 2.66406 16.0013 2.66406C8.63751 2.66406 2.66797 8.6336 2.66797 15.9974C2.66797 23.3612 8.63751 29.3307 16.0013 29.3307Z" stroke="#00A63E" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 16.0026L14.6667 18.6693L20 13.3359" stroke="#00A63E" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <h2
                  className="font-poppins text-[18px] font-bold text-center"
                  style={{ color: "var(--base-black)" }}
                >
                  Document Uploaded
                </h2>

                <p
                  className="font-poppins text-[14px] text-center"
                  style={{ color: "var(--text-grey)" }}
                >
                  Document uploaded successfully
                </p>
              </div>

            </div>



            {/* Button */}
            <div className="flex gap-2">
              <label
                className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
                style={{ backgroundColor: "var(--form-bg)", border: "1px solid #E6E7E6" }}
              >

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 4L12 12" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span
                  className="font-poppins text-[14px]"
                  style={{ color: "var(--form-text-black)" }}
                >
                  Remove
                </span>

              </label>

              <label
                className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
                style={{ backgroundColor: "var(--form-secondary)" }}
              >


                <span
                  className="font-poppins text-[14px]"
                  style={{ color: "var(--form-text-black)" }}
                  onClick={() => setshow_selfee(true)}
                >
                  Continue to Selfie
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </label>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}



export default UploadIdentification;