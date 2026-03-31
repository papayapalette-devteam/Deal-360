export default function FormSelect({
  label,
  placeholder,
  options = [],
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 flex-1 min-w-0 ${className}`}>
      {label && (
        <label className="block text-brand-dark font-poppins font-medium text-base leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="h-12 px-3 py-2 border border-brand-border rounded font-poppins text-base text-brand-grey focus:outline-none focus:ring-1 focus:ring-brand-salmon w-full bg-white appearance-none pr-10 cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#6C757D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
