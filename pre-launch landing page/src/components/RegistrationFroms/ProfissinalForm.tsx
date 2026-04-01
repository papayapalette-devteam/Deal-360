import { useState } from "react";
import FormInput from "../Ui/Forminput";
import FormSelect from "../Ui/Formselect";
import FormTextarea from "../Ui/Formtextarea";
import FormButton from "../Ui/FormButton";

const specializationOptions = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "luxury", label: "Luxury" },
  { value: "off-plan", label: "Off-Plan" },
  { value: "investment", label: "Investment" },
];

const experienceOptions = [
  { value: "0-2", label: "0–2 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "6-10", label: "6–10 years" },
  { value: "10+", label: "10+ years" },
];

interface ProfessionalFormState {
  name: string;
  phone: string;
  email: string;
  licenseNumber: string;
  specialization: string;
  experience: string;
  bio: string;
}

export default function ProfessionalForm() {
  const [form, setForm] = useState<ProfessionalFormState>({
    name: "",
    phone: "",
    email: "",
    licenseNumber: "",
    specialization: "",
    experience: "",
    bio: "",
  });

  const handleChange = (field: keyof ProfessionalFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        <h2 className="font-poppins font-semibold text-[var(--color-primary)] text-xl text-brand-salmon leading-[120%]">
          Professional Registration
        </h2>
        <p className="font-poppins text-base text-brand-grey leading-relaxed">
       We’re onboarding a limited number of professionals ahead of launch.
        </p>

                <p className="font-poppins text-base text-brand-grey leading-relaxed">
       Registration is reviewed to protect quality on the platform.
        </p>

        <div className="flex flex-col p-2 gap-4 rounded-lg bg-brand-bg overflow-hidden">
   
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <button className="flex items-center gap-2 flex-1 p-2 rounded-lg bg-[#F9F9F9]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M16.6673 5L7.50065 14.1667L3.33398 10"
        stroke="#4B4B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>Priority visibility</span>
  </button>

  <button className="flex items-center gap-2 flex-1 p-2 rounded-lg bg-[#F9F9F9]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M16.6673 5L7.50065 14.1667L3.33398 10"
        stroke="#4B4B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>Early feature access</span>
  </button>

  <button className="flex items-center gap-2 flex-1 p-2 rounded-lg bg-[#F9F9F9]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M16.6673 5L7.50065 14.1667L3.33398 10"
        stroke="#4B4B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>Founding-only benefits</span>
  </button>
</div>

        </div>

 
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <FormInput
            label="Name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange("name")}
          />
                   <FormSelect
                      label="I am a"
                      placeholder="Select Role"
                      options={[
                        { value: "agent", label: "Agent" },
                        { value: "brokerage", label: "Brokerage" },
                      ]}
                      value={form.phone}
                      onChange={handleChange("phone")}
                    />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormInput
            label="Company / Brokerage"
            placeholder="Company or brokerage name"
            type="text"
            value={form.email}
            onChange={handleChange("email")}
          />
          <FormInput
          type="password"
            label="RERA ORN / BRN ID"
            placeholder="************"
            value={form.licenseNumber}
            onChange={handleChange("licenseNumber")}
          />
        </div>
         <div className="flex flex-col sm:flex-row gap-4">
               <FormInput
                 label="Email Address"
                 placeholder="hello@example.com"
                 type="email"
                 value={form.email}
                 onChange={handleChange("email")}
               />
               <FormInput
                 label="Phone"
                 placeholder="+971 50 XXX XXXX"
                 value={form.phone}
                 onChange={handleChange("phone")}
               />
             </div>
      </div>

      <FormButton>Register as Professional</FormButton>
    </div>
  );
}
