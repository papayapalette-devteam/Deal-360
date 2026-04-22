import { useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
import { RoleOption } from "../../../UI/role_option";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";

export default function UserSingup() {
  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8F9FA]">

{/* ── Left: Building Image ─────────────────────────────────── */}
<div className="w-full md:w-1/2 min-h-screen overflow-hidden">
  <img
    src={logo}
    alt="Evelyn on the Park"
    className="w-full h-full object-cover"
  />
</div>

      {/* ── Right: Login Form ─────────────────────────────────────── */}
      <div className="w-full  md:w-1/2 flex items-top justify-center px-5 py-10 md:py-16 bg-[#F8F9FA]">
        <div className="w-full max-w-[654px] bg-white rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] p-6">
          {/* Outer flex column with gap-10 (40px) */}
          <div className="flex flex-col gap-10">

            {/* ── Upper block: tab + welcome + fields ── */}
            <div className="flex flex-col gap-12">

              {/* Tab row */}
              <div className="flex flex-col gap-4">
                <div className="flex p-2 bg-black/5 rounded-lg overflow-hidden">
                  <div className="flex-1 flex items-center justify-center h-10 px-2 rounded-lg">
                    <span className="font-poppins font-medium text-base text-black">
                      User
                    </span>
                  </div>
                </div>
              </div>

              {/* Welcome + form */}
              <div className="flex flex-col gap-10">
    {/* I'm here to section */}
              <div className="flex flex-col gap-4">
                <p className="font-poppins font-medium text-lg text-brand-grey leading-[120%] truncate">
                  I'm here to:
                </p>
                <div className="flex flex-col gap-3">
                  <RoleOption
                    label="Buy property (Buyer)"
                    description="→ you want to purchase property"
                    // checked={roles.buyer}
                    // onChange={() => toggleRole("buyer")}
                  />
                  <RoleOption
                    label="Rent property (Renter)"
                    description="→ you want to rent a place"
                    // checked={roles.renter}
                    // onChange={() => toggleRole("renter")}
                  />
                  <RoleOption
                    label="Sell property (Seller)"
                    description="→ you want to sell a property you own"
                    // checked={roles.seller}
                    // onChange={() => toggleRole("seller")}
                  />
                  <RoleOption
                    label="Rent out property (Landlord)"
                    description="→ you want to rent your property to others"
                    // checked={roles.landlord}
                    // onChange={() => toggleRole("landlord")}
                  />
                </div>
              </div>
                              <h2 className="font-poppins font-bold text-[36px] leading-[120%] text-[#F88379] w-full">
                  Create Your Account
                </h2>

                {/* Form fields */}
                    <div className="flex flex-col items-center gap-[70px]">
                <div className="flex flex-col gap-10 w-full">


                  {/* Form fields */}
                  <div className="flex flex-col gap-4 w-full">

                    {/* First Name + Last Name */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <FormInput
                        label="First Name"
                        placeholder="Name Here"
                        type="text"
                      />
                      <FormInput
                        label="Last Name"
                        placeholder="Name Here"
                        type="text"
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <FormInput
                        label="Email Address"
                        placeholder="hello@example.com"
                        type="email"
                      />
                      <FormInput
                        label="Phone"
                        placeholder="+971 50 XXX XXXX"
                        type="tel"
                      />
                    </div>

                    {/* Create Password */}
                    <FormInput
                      label="Create Password"
                      placeholder="••••••••"
                      type="password"
                      showToggle
                    />

                    {/* Confirm Password */}
                    <FormInput
                      label="Confirm Password"
                      placeholder="••••••••"
                      type="password"
                      showToggle
                    />

                    {/* Terms & Conditions */}
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <div className="relative flex-shrink-0">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                        //   checked={agreed}
                        //   onChange={() => setAgreed((v) => !v)}
                        />
                        <div className="w-4 h-4 rounded-sm border border-brand-grey bg-white peer-checked:bg-brand-primary peer-checked:border-brand-primary transition-colors" />
                        <svg
                          className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="font-poppins text-xs text-brand-grey leading-[150%]">
                        I agree to Deal 360's{" "}
                        <a href="#" className="font-medium text-[#F88379] no-underline">
                          Terms &amp; Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-medium text-[#F88379] no-underline">
                          Privacy Policy.
                        </a>
                      </span>
                    </label>
                  </div>

                  {/* Create account button */}
                  <button
                    type="button"
                    className="btn-primary"
                  >
                    Create an account
                  </button>
                </div>

                {/* Already have account */}
                <p className="font-poppins text-base text-center text-brand-dark leading-[150%]">
                  Already have an account?{" "}
                  <a href="#" className="font-semibold text-[hsl(var(--brand-secondary))] no-underline hover:underline">
                    Log In
                  </a>
                </p>

              {/* Google button */}
            <div className="flex flex-col gap-2.5 w-full">
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
        </div>
      </div>
    </div>
  );
}