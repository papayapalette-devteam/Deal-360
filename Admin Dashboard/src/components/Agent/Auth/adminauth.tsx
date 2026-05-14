import React, { useState } from "react";
import { FormInput, PasswordInput } from "../../../UI/FormInput";
import logo from "../../../assets/images/image.png 1.png"
import { useNavigate } from "react-router-dom";

export default function AdminSignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* ── Left: Building Image ─────────────────────────────────── */}
      <div className="relative w-full md:w-1/2 min-h-[45vw] md:min-h-screen overflow-hidden">
        <img
          src={logo}
          alt="Evelyn on the Park"
          className="max-w-full max-h-full object-contain ml-[-4px] mt-[-4px] "
        />
      </div>

      {/* ── Right: Login Form ─────────────────────────────────────── */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 md:py-16 bg-background">
        <div className="w-full max-w-[40.875rem] bg-card rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,0.06)] p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-10">
                <h2 className="font-poppins font-bold text-[2.25rem] leading-[120%] text-[#F88379] w-full">
                  Welcome Back!
                </h2>

                <div className="flex flex-col gap-2">
                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <PasswordInput
                    id="password"
                    label="Password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1.5 cursor-pointer select-none">
                      <div
                        className="w-4 h-4 rounded-sm border border-muted-foreground flex items-center justify-center cursor-pointer"
                        onClick={() => setRememberMe((v) => !v)}
                      >
                        {rememberMe && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="font-manrope font-normal text-base text-muted-foreground leading-[150%]">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => navigate("/forget-password")}
                      className="font-manrope font-normal text-base text-[#F88379] leading-[150%] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      className="btn-primary flex-1"
                    >
                      Sign in
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