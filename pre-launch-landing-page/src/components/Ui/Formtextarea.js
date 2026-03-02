export default function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label className="block text-brand-dark font-poppins font-medium text-base leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-brand-border rounded font-poppins text-base text-brand-dark placeholder-brand-grey focus:outline-none focus:ring-1 focus:ring-brand-salmon w-full bg-white resize-none min-h-[120px]"
      />
    </div>
  );
}
