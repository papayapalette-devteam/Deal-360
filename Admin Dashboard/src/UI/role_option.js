export function RoleOption({ label, description, ...props }) {
  return (
    <label className="flex items-center gap-1 cursor-pointer select-none w-full">
      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className="w-4 h-4 rounded-sm border border-[hsl(var(--brand-primary))] bg-[hsl(var(--brand-mint-light))] peer-checked:bg-[hsl(var(--brand-primary))] transition-colors" />
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
      <span className="font-poppins text-sm text-brand-grey-300 leading-[120%]">
        <span className="font-medium">{label}</span>
        <span className="font-normal"> {description}</span>
      </span>
    </label>
  );
}