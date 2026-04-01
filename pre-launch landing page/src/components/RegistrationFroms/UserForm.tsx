import { useState } from "react";
import FormInput from "../Ui/Forminput";
import FormSelect from "../Ui/Formselect";
import FormTextarea from "../Ui/Formtextarea";
import FormButton from "../Ui/FormButton";

const interestOptions = [
  { value: "buy", label: "Buy a Property" },
  { value: "rent", label: "Rent a Property" },
  { value: "invest", label: "Invest in Real Estate" },
  { value: "all", label: "All of the above" },
];

const budgetOptions = [
  { value: "under-500k", label: "Under AED 500K" },
  { value: "500k-1m", label: "AED 500K – 1M" },
  { value: "1m-3m", label: "AED 1M – 3M" },
  { value: "3m-5m", label: "AED 3M – 5M" },
  { value: "5m+", label: "AED 5M+" },
];

interface UserFormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  interest: string;
  budget: string;
  notes: string;
}

export default function UserForm() {
  const [form, setForm] = useState<UserFormState>({
    name: "",
    phone: "",
    email: "",
    location: "",
    interest: "",
    budget: "",
    notes: "",
  });

  const handleChange = (field: keyof UserFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        <h2 className="font-poppins text-[var(--color-primary)] font-semibold text-xl text-brand-salmon leading-[120%]">
          User Registration
        </h2>
        <p className="font-poppins text-base text-brand-grey leading-relaxed">
          For buyers, tenants, and investors who want early visibility.
        </p>

      <div className="flex flex-col sm:flex-row gap-4">
  
  {/* Left Column Card */}
  <div
    className="
      flex flex-col 
      items-start 
      gap-2 
      p-2 
      flex-1 
      rounded-lg 
      bg-[#F9F9F9]
    "
  >
    {/* Title */}
    <h3
      className="
        self-stretch
        text-[var(--base-black)]
        font-poppins
        text-base
        font-medium
        leading-6
        line-clamp-1
      "
    >
      Find a Property
    </h3>

    {/* Paragraph */}
    <p
      className="
        self-stretch
        text-[var(--grey-base)]
        font-poppins
        text-base
        font-normal
        leading-6
      "
    >
      Buy or rent with clarity
    </p>
  </div>

  {/* Right Column Card */}
  <div
    className="
      flex flex-col 
      items-start 
      gap-2 
      p-2 
      flex-1 
      rounded-lg 
      bg-[#F9F9F9]
    "
  >
    {/* Title */}
    <h3
      className="
        self-stretch
        text-[#343A40]
        font-poppins
        text-base
        font-medium
        leading-6
        line-clamp-1
      "
    >
      Submit Requirement
    </h3>

    {/* Paragraph */}
    <p
      className="
        self-stretch
        text-[#6C757D]
        font-poppins
        text-base
        font-normal
        leading-6
      "
    >
      Priority matching with agents
    </p>
  </div>

</div>

     <div className="flex flex-col sm:flex-row gap-4">
  
  {/* Left Column Card */}
  <div
    className="
      flex flex-col 
      items-start 
      gap-2 
      p-2 
      flex-1 
      rounded-lg 
      bg-[#F9F9F9]
    "
  >
    {/* Title */}
    <h3
      className="
        self-stretch
        text-[var(--base-black)]
        font-poppins
        text-base
        font-medium
        leading-6
        line-clamp-1
      "
    >
      List a Property
    </h3>

    {/* Paragraph */}
    <p
      className="
        self-stretch
        text-[var(--grey-base)]
        font-poppins
        text-base
        font-normal
        leading-6
      "
    >
     Submit listing intent
    </p>
  </div>

  {/* Right Column Card */}
  <div
    className="
      flex flex-col 
      items-start 
      gap-2 
      p-2 
      flex-1 
      rounded-lg 
      bg-[#F9F9F9]
    "
  >
    {/* Title */}
    <h3
      className="
        self-stretch
        text-[#343A40]
        font-poppins
        text-base
        font-medium
        leading-6
        line-clamp-1
      "
    >
      For Investors
    </h3>

    {/* Paragraph */}
    <p
      className="
        self-stretch
        text-[#6C757D]
        font-poppins
        text-base
        font-normal
        leading-6
      "
    >
      Manage your property portfolio
    </p>
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
            placeholder="Select"
            options={[
              { value: "buyer", label: "Buyer" },
              { value: "tenant", label: "Tenant" },
              { value: "owner", label: "Owner" },
              { value: "investor", label: "Investor" },
            ]}
            value={form.phone}
            onChange={handleChange("phone")}
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

<p className="text-left text-[var(--grey-base)] font-poppins text-md font-normal leading-5">
  User access is free for buyers, tenants, owners, 
  and investors — with early registration and priority engagement at launch.
</p>
      <FormButton>Sign Up as a User</FormButton>
    </div>
  );
}
