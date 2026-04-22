import React, { useState } from "react";
import { FormInput } from "../../../UI/FormInput";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";
import api from "../../../api"
import { toast } from "../../../hooks/use-toast";

export default function AgentSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    // phone: "",
    password: "",
    confirmPassword: "",
    company_name: "",
    role: "agent", // default
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleRegister = async () => {
    try {
      if (!agreed) {
        toast({
          title: "Terms & Conditions",
          description: "You must agree to Terms & Conditions and Privacy Policy.",
          variant: "error",
        });
        return;
      }
      // basic validation (don’t skip this)
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Passwords do not match",
          variant: "error",
        });
        return;
      }

      // remove fields not needed by backend
      const { confirmPassword, ...payload } = formData;

      const response = await api.post(
        "/api/auth/register/professional/",
        payload
      );
      if (response.data?.success) {
        toast({
          title: "Success",
          description: response.data.message,
          variant: "success",
        });

        // optional: redirect after success
        // navigate("/login");
      }



    } catch (error: any) {
      const apiError = error?.response?.data;

      // ✅ 1. Validation errors (field आधारित)
      if (apiError?.errors) {
        Object.keys(apiError.errors).forEach((field) => {
          apiError.errors[field].forEach((msg: string) => {
            toast({
              title: field.replace("_", " ").toUpperCase(),
              description: msg,
              variant: "error",
            });
          });
        });

        return;
      }

      // ✅ 2. Backend custom message (non-field error)
      if (apiError?.message) {
        toast({
          title: "Error",
          description: apiError.message,
          variant: "error",
        });
        return;
      }

      // ✅ 3. Network / unknown error
      if (error?.message) {
        toast({
          title: "Network Error",
          description: error.message,
          variant: "error",
        });
        return;
      }

      // ✅ 4. Fallback (just in case)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "error",
      });
    }
  };


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
                <p className="font-medium text-[var(--Colors-for-white-theme-Secondary-text,#565656)]">
                  I am a..
                </p>

                <div className="grid grid-cols-2 gap-3">

                  {/* User */}
                  <div className="flex p-2 bg-black/5 rounded-lg overflow-hidden">
                    <div className="flex-1 flex items-center justify-center h-10 px-2 rounded-lg">
                      <span className="font-poppins font-medium text-base text-black">
                        User
                      </span>
                    </div>
                  </div>

                  {/* Professional */}
                  <div className="flex p-2 bg-black/5 rounded-lg overflow-hidden ">
                    <div className="btn-primary flex-1 flex items-center justify-center h-10 px-2 rounded-lg">
                      <span className="font-poppins font-medium text-base text-black ">
                        Professional
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleChange("role", "agent")}
                    className={`h-12 rounded-lg border border-[hsl(var(--brand-neutral))] 
    ${formData.role === "agent"
                        ? "bg-[hsl(var(--brand-secondary))] text-white"
                        : "bg-[var(--brand-secondary1)] text-[var(--Colors-for-white-theme-Secondary)]"}
    transition-colors font-medium`}
                  >
                    Agent
                  </button>

                  {/* Brokerage */}
                  <button
                    type="button"
                    onClick={() => handleChange("role", "broker")}
                    className={`h-12 rounded-lg border border-[hsl(var(--brand-neutral))] 
    ${formData.role === "broker"
                        ? "bg-[hsl(var(--brand-secondary))] text-white"
                        : "bg-[var(--brand-secondary1)] text-[var(--Colors-for-white-theme-Secondary)]"}
    transition-colors font-medium`}
                  >
                    Brokerage
                  </button>

                </div>
              </div>

              {/* Welcome + form */}
              <div className="flex flex-col gap-10">

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
                          id="first_name"
                          label="First Name"
                          placeholder="Name Here"
                          type="text"
                          value={formData.first_name}
                          onChange={(e) => handleChange("first_name", e.target.value)}
                        />
                        <FormInput
                          id="last_name"
                          label="Last Name"
                          placeholder="Name Here"
                          type="text"
                          value={formData.last_name}
                          onChange={(e) => handleChange("last_name", e.target.value)}
                        />
                      </div>

                      {/* Company Name (NOW FOR BOTH) */}
                      <FormInput
                        id="company_name"
                        label="Company Name"
                        placeholder="Enter company name"
                        type="text"
                        value={formData.company_name}
                        onChange={(e) => handleChange("company_name", e.target.value)}
                      />

                      {/* Email + Phone */}
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <FormInput
                          id="email"
                          label="Email Address"
                          placeholder="hello@example.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                        />
                        {/* <FormInput
      id="phone"
      label="Phone"
      placeholder="+971 50 XXX XXXX"
      type="tel"
      value={formData.phone}
      onChange={(e) => handleChange("phone", e.target.value)}
    /> */}
                      </div>

                      {/* Password */}
                      <FormInput
                        id="password"
                        label="Create Password"
                        placeholder="••••••••"
                        type="password"
                        showToggle
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                      />

                      {/* Confirm Password */}
                      <FormInput
                        id="confirmPassword"
                        label="Confirm Password"
                        placeholder="••••••••"
                        type="password"
                        showToggle
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                      />

                      {/* Terms */}
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <div className="relative flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={() => setAgreed((prev) => !prev)}
                            className="w-4 h-4 mt-2 cursor-pointer"
                          />


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
                      onClick={handleRegister}
                      type="button"
                      className="btn-primary"
                    >
                      Create an account
                    </button>
                  </div>

                  {/* Already have account */}
                  <p className="font-poppins text-base text-center text-brand-dark leading-[150%]">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/login")} className="font-semibold text-[hsl(var(--brand-secondary))] no-underline hover:underline">
                      Log In
                    </button>
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