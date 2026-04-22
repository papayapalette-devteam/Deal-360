const ChevronRight = () => (
  <svg style={{ width: "0.88rem", height: "0.88rem" }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4L10 8L6 12" stroke="#343A40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AgentCompanyCard() {
  return (
    <div className="flex flex-col rounded-[0.55rem] border border-black/10 bg-white shadow-[0.16rem_0.22rem_0.44rem_0.16rem_rgba(158,158,158,0.25)] overflow-hidden min-w-[15.55rem] max-w-[21.55rem] w-full">
      {/* Logo area */}
      <div className="flex items-center justify-center p-[1.33rem] flex-1">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/9abfc4add457790a3b9b8d66d78baf0d71b79b37?width=776"
          alt="Barnes International Realty"
          className="w-full max-w-[15.55rem] object-contain"
        />
      </div>

      {/* Company name footer */}
      <div className="border-t border-black/10 px-[0.88rem] py-[0.66rem] flex items-center justify-between">
        <span className="font-poppins text-[0.77rem] font-medium leading-[120%] text-[#343A40]">
          Barnes International Realty-Dubai
        </span>
        <ChevronRight />
      </div>
    </div>
  );
}
