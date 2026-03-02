import { useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
// import { BrandButton } from "../components/ui/BrandButton";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";

export default function ProfessionSignIn() {
  const navigate=useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
              <div className="flex flex-col gap-4 ">
                <div className="flex p-2 bg-black/5 rounded-lg overflow-hidden ">
                  <div className="btn-primary flex-1 flex items-center justify-center h-10 px-2 rounded-lg">
                    <span className="font-poppins font-medium text-base text-black ">
                      Professional
                    </span>
                  </div>
                </div>
              </div>

              {/* Welcome + form */}
              <div className="flex flex-col gap-10">
                {/* Welcome heading */}
                <h2 className="font-poppins font-bold text-[36px] leading-[120%] text-[#F88379] w-full">
                  Welcome Back!
                </h2>

                {/* Form fields */}
                <div className="flex flex-col gap-2">
                  {/* Email */}
                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Password */}
                  <PasswordInput
                    id="password"
                    label="Password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* Remember me + Forgot password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 cursor-pointer select-none">
                      <div
                        className="w-4 h-4 rounded-sm border border-[#68706A] flex items-center justify-center cursor-pointer"
                        onClick={() => setRememberMe((v) => !v)}
                      >
                        {rememberMe && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#68706A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="font-manrope font-normal text-base text-[#68706A] leading-[150%]">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={()=>navigate("/forget-password")}
                      className="font-manrope font-normal text-base text-[#F88379] leading-[150%] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="btn-primary flex-1"
                    >
                      Continue with Password
                    </button>
                    <button
                      type="button"
                      className="btn-secondary flex-1"
                    >
                      Continue with OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign up text */}
            <p className="text-center font-poppins text-base text-[#343A40]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="font-semibold text-[#F88379] hover:underline"
              >
                Sign Up
              </button>
            </p>

            {/* Google button */}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                className="btn-outline"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8cade9ea1ee473884c1b3be7a42768094bea6204?width=48"
                  alt="Google"
                  className="w-6 h-[25px]"
                />
                <span className="font-manrope font-medium text-base text-black">
                  Continue with Google
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}