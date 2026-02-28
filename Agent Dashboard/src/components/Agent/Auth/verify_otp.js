import { useEffect, useRef, useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
// import { BrandButton } from "../components/ui/BrandButton";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const navigate=useNavigate()
  
 const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

   const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    if (timeLeft === 0) {
      setTimeLeft(60);
      // Call your resend API here
      alert("OTP Resent");
    }
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8F9FA]">
      {/* ── Left: Building Image ─────────────────────────────────── */}
      <div className="relative w-full md:w-1/2 min-h-[45vw] md:min-h-screen overflow-hidden">
        <img
          src={logo}
          alt="Evelyn on the Park"
          className="max-w-full max-h-full object-contain ml-[-4px] mt-[-4px] "
        />
      </div>

      {/* ── Right: Login Form ─────────────────────────────────────── */}
      <div className="w-full  md:w-1/2 flex items-center justify-center px-5 py-10 md:py-16 bg-[#F8F9FA]">
        <div className="w-full max-w-[654px] bg-white rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] p-6">
          {/* Outer flex column with gap-10 (40px) */}
          <div className="flex flex-col gap-10">

            {/* ── Upper block: tab + welcome + fields ── */}
            <div className="flex flex-col gap-12">

              {/* Tab row */}
          

              {/* Welcome + form */}
              <div className="flex flex-col gap-10">

                {/* Welcome heading */}
            <div className="flex flex-col gap-2">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#F88379]">
    Verify OTP
  </h2>

  <p className="font-poppins text-base text-[#343A40]">
    Enter the 6-digit code sent to your email
  </p>
</div>

                {/* Form fields */}
  

      {/* OTP Inputs */}
      <div className="flex gap-3 sm:gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F88379] transition"
          />
        ))}
      </div>
  {/* Resend */}
 <div className="mt-4 flex items-center justify-between text-sm">

  {/* LEFT SIDE — TIMER */}
  <div className="flex items-center gap-2 text-[#F88379]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <span className="font-medium">
      {timeLeft > 0
        ? `00:${timeLeft.toString().padStart(2, "0")}`
        : "00:00"}
    </span>
  </div>

  {/* RIGHT SIDE — TEXT + RESEND */}
  <div className="flex items-center gap-1 text-gray-600">
    <span>Didn't get a code?</span>

    <button
      onClick={handleResend}
      disabled={timeLeft !== 0}
      className={`font-medium transition ${
        timeLeft === 0
          ? "text-[#F88379] hover:underline"
          : "text-gray-400 cursor-not-allowed"
      }`}
    >
      Resend
    </button>
  </div>

</div>
      {/* Verify Button */}
      <button
        className="btn-primary flex-1"
      >
        Verify
      </button>

    
    
              
              </div>
            </div>

  


          </div>
        </div>
      </div>
    </div>
  );
}