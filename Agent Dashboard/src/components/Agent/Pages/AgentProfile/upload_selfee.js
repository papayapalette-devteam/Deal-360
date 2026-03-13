import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function UploadSelfee({ agent_profile, setagent_profile,setsubmission }) {
    const colors = {
        border: "var(--Colors-for-white-theme-Secondary)",
        background: "#FFF9F9",
        icon: "var(--Colors-for-white-theme-Secondary)",
        title: "var(--base-black)",
        text: "#364153",
    };

    const requirements = [
        "Face must be clearly visible",
        "Image must be clear and well-lit",
        "All text must be readable",
        "No black and white copies accepted",
    ];

    const webcamRef = useRef(null);
    const [selfiePreview, setSelfiePreview] = useState(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setSelfiePreview(imageSrc); // show preview

        fetch(imageSrc)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
                setagent_profile((prev) => ({
                    ...prev,
                    Selfee: [...prev.Selfee, file],
                }));
            });
    };

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
        <div className="min-h-screen flex justify-center px-4 py-0">
            <div className="flex flex-col gap-10 w-full">

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
                            Take a Selfie
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
                            Take a clear selfie for identity confirmation
                        </p>
                    </div>
                </div>

                {/* Upload Section */}
                <div className="flex flex-col justify-center gap-6 p-6 rounded-[14px] border-2 border-[#D1D5DC] bg-white w-full">
                    <div className="flex flex-col items-center gap-6 w-full">

                        {/* Icon + Text */}
                        <div className="flex flex-col items-center gap-4 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M29 8H19L14 14H8C6.93913 14 5.92172 14.4214 5.17157 15.1716C4.42143 15.9217 4 16.9391 4 18V36C4 37.0609 4.42143 38.0783 5.17157 38.8284C5.92172 39.5786 6.93913 40 8 40H40C41.0609 40 42.0783 39.5786 42.8284 38.8284C43.5786 38.0783 44 37.0609 44 36V18C44 16.9391 43.5786 15.9217 42.8284 15.1716C42.0783 14.4214 41.0609 14 40 14H34L29 8Z" stroke="#99A1AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 32C27.3137 32 30 29.3137 30 26C30 22.6863 27.3137 20 24 20C20.6863 20 18 22.6863 18 26C18 29.3137 20.6863 32 24 32Z" stroke="#99A1AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <div className="flex flex-col items-center gap-2 w-full">
                                <h2 className="font-poppins text-[18px] font-bold text-center" style={{ color: "var(--base-black)" }}>
                                    Upload Selfie
                                </h2>
                                <p className="font-poppins text-[14px] text-center" style={{ color: "var(--text-grey)" }}>
                                    Make sure your face is clearly visible and well-lit
                                </p>
                            </div>
                        </div>

                        {/* Webcam / Preview */}
                        {!selfiePreview ? (
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                videoConstraints={{ facingMode: "user" }}
                                className="rounded-lg w-full max-w-[400px]"
                            />
                        ) : (
                            <img
                                src={selfiePreview}
                                alt="Selfie Preview"
                                className="rounded-lg w-full max-w-[400px]"
                            />
                        )}

                        {/* Take / Retake Button */}
                        <div className="flex gap-2 mt-4">
                            {!selfiePreview ? (

                                <label onClick={capture}
                                    className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
                                    style={{ backgroundColor: "var(--form-secondary)" }} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <path d="M9.66536 2.66406H6.33203L4.66536 4.66406H2.66536C2.31174 4.66406 1.9726 4.80454 1.72256 5.05459C1.47251 5.30464 1.33203 5.64377 1.33203 5.9974V11.9974C1.33203 12.351 1.47251 12.6902 1.72256 12.9402C1.9726 13.1903 2.31174 13.3307 2.66536 13.3307H13.332C13.6857 13.3307 14.0248 13.1903 14.2748 12.9402C14.5249 12.6902 14.6654 12.351 14.6654 11.9974V5.9974C14.6654 5.64377 14.5249 5.30464 14.2748 5.05459C14.0248 4.80454 13.6857 4.66406 13.332 4.66406H11.332L9.66536 2.66406Z"
                                            stroke="black" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M8 10.6641C9.10457 10.6641 10 9.76863 10 8.66406C10 7.55949 9.10457 6.66406 8 6.66406C6.89543 6.66406 6 7.55949 6 8.66406C6 9.76863 6.89543 10.6641 8 10.6641Z"
                                            stroke="black" stroke-width="1.33333" stroke-linecap="round"
                                            stroke-linejoin="round" /> </svg> <span className="font-poppins text-[14px]"
                                                style={{ color: "var(--form-text-black)" }} >
                                        Take Selfie
                                    </span>
                                </label>


                            ) : (
                                <>
                                    <button
                                        onClick={() => setSelfiePreview(null)}
                                        className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2"
                                    >
                                        Retake Selfie
                                    </button>
                                    <label onClick={()=>setsubmission(true)}
                                        className="flex items-center gap-2 px-4 rounded-[8px] h-10 cursor-pointer"
                                        style={{ backgroundColor: "var(--form-secondary)" }} >
                                        <span className="font-poppins text-[14px]"
                                            style={{ color: "var(--form-text-black)" }} >
                                            Next
                                        </span>
                                    </label>
                                </>
                            )}
                        </div>

                    </div>
                </div>

                {/* Selfie Guidelines */}
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
                                Selfie Guidelines
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
        </div>
    );
}

export default UploadSelfee;