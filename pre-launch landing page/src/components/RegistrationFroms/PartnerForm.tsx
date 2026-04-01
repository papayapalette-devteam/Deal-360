import { useState } from "react";
import FormInput from "../Ui/Forminput";
import FormSelect from "../Ui/Formselect";
import FormTextarea from "../Ui/Formtextarea";
import FormButton from "../Ui/FormButton";

const categoryOptions = [
  { value: "real-estate-developer", label: "Real Estate Developer" },
  { value: "short-term-rentals", label: "Short-term & holiday rentals" },
  { value: "furniture-interior", label: "Furniture & interior solutions" },
  { value: "mortgage-financing", label: "Mortgage & financing providers" },
  { value: "conveyancing-legal", label: "Conveyancing & legal services" },
  { value: "property-management", label: "Property management & maintenance" },
  { value: "other", label: "Other" },
];

const serviceItems = [
  "Real Estate Developers",
  "Short-term & holiday rentals",
  "Furniture & interior solutions",
  "Mortgage & financing providers",
  "Conveyancing & legal services",
  "Property management & maintenance",
  "Other",
];

interface PartnerFormState {
  name: string;
  serviceCategory: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  description: string;
}

export default function PartnerForm() {
  const [form, setForm] = useState<PartnerFormState>({
    name: "",
    serviceCategory: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (field: keyof PartnerFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        <h2 className="font-poppins font-semibold text-xl text-brand-salmon text-[var(--color-primary)] leading-[120%]">
          Partner Registration - by invitation
        </h2>
        <p className="font-poppins text-base text-brand-grey leading-relaxed">
          Deal360 provides structured site marketing and launch advertising for
          real estate developers. As part of our early phase, selected partners
          may showcase their company profile and services within the Deal360
          ecosystem through strategic brand placement and co-marketing
          opportunities.
        </p>

        <div className="flex flex-col p-2 gap-4 rounded-lg bg-brand-bg overflow-hidden">
          <p className="font-poppins font-medium text-base text-brand-dark leading-6">
            This includes services such as:
          </p>
          <div className="flex flex-col gap-2">
            {serviceItems.map((item) => (
              <p
                key={item}
                className="font-poppins text-base text-brand-grey leading-6"
              >
                • {item}
              </p>
            ))}
          </div>
        </div>

        <p className="font-poppins text-base text-brand-grey leading-relaxed">
          Partners registering early will be considered for priority visibility,
          early integrations, and first rollout consideration as the platform
          expands.
        </p>
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
            label="Service Category"
            placeholder="Select Category"
            options={categoryOptions}
            value={form.serviceCategory}
            onChange={handleChange("serviceCategory")}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormInput
            label="Company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange("company")}
          />
          <FormInput
            label="company website"
            placeholder="Website link or name"
            value={form.website}
            onChange={handleChange("website")}
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
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </div>
        <FormTextarea
          label="Brief description of your service"
          placeholder="Tell us about your service........."
          value={form.description}
          onChange={handleChange("description")}
        />
      </div>

      <FormButton>Partner With Us Request</FormButton>
    </div>
  );
}
