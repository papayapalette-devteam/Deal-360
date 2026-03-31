const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4L10 8L6 12" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AgentCompanyCard() {
  return (
    <div className="flex flex-col rounded-[10px] border border-black/10 bg-white shadow-[3px_4px_8px_3px_rgba(158,158,158,0.25)] overflow-hidden min-w-[280px] max-w-[388px] w-full">
      {/* Logo area */}
      <div className="flex items-center justify-center p-6 flex-1">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9abfc4add457790a3b9b8d66d78baf0d71b79b37?width=776"
          alt="Barnes International Realty"
          className="w-full max-w-[280px] object-contain"
        />
      </div>

      {/* Company name footer */}
      <div className="border-t border-black/10 px-4 py-3 flex items-center justify-between">
        <span className="font-poppins text-[14px] font-medium leading-[120%] text-[#343A40]">
          Barnes International Realty-Dubai
        </span>
        <ChevronRight />
      </div>
    </div>
  );
}
