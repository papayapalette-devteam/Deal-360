import { useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
// import { BrandButton } from "../components/ui/BrandButton";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const navigate=useNavigate()
  

  const [new_password, setnew_password] = useState("");
 const [confirm_new_password, setconfirm_new_password] = useState("");


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
               <div className="flex flex-col gap-2 text-center">
  <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#F88379]">
    Change Password
  </h2>

  <p className="font-poppins text-base text-[#343A40]">
    Enter your new password for update your password
  </p>
</div>

                {/* Form fields */}
                <div className="flex flex-col gap-2">
                  {/* Email */}
                 <PasswordInput
                    id="password"
                    label="Create New Password"
                    placeholder="••••••••"
                    value={new_password}
                    onChange={(e) => setnew_password(e.target.value)}
                  />

                  {/* Password */}
                  <PasswordInput
                    id="password"
                    label="Confirm New Password"
                    placeholder="••••••••"
                    value={confirm_new_password}
                    onChange={(e) => setconfirm_new_password(e.target.value)}
                  />


                  {/* Action buttons */}
                  <div className="flex gap-2 mt-2">
                    <button
                      type="button"
                      className="btn-primary flex-1"
                    >
                      Change Password
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