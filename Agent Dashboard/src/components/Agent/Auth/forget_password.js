import { useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
// import { BrandButton } from "../components/ui/BrandButton";
import logo from "../../../assets/images/image.png 1.png"

export default function ForgetPassword() {
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


              {/* Welcome + form */}
              <div className="flex flex-col gap-10">
                {/* Welcome heading */}
            <div className="flex flex-col gap-2">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#F88379]">
    Forgot Password
  </h2>

  <p className="font-poppins text-base text-[#343A40]">
    Enter your email to recover your password
  </p>
</div>

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

           
                  {/* Action buttons */}
                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      className="btn-primary flex-1"
                    >
                     Send OTP
                    </button>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}