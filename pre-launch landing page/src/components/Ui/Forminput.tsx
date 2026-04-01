interface FormInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-2 flex-1 min-w-0 ${className}`}>
      {label && (
        <label className="block text-[var(--base-black)] font-poppins font-medium text-base leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 px-3 py-2 border border-brand-border rounded font-poppins text-base text-brand-dark placeholder-brand-grey focus:outline-none focus:ring-1 focus:ring-brand-salmon w-full bg-white"
      />
    </div>
  );
}
