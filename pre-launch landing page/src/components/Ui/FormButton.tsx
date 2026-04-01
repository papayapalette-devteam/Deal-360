interface FormButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function FormButton({
  children,
  onClick,
  type = "button",
  className = "",
}: FormButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center bg-[#7FFFD4] justify-center gap-2 px-8 py-4 rounded-lg bg-brand-mint font-manrope font-medium text-base text-black w-full hover:opacity-90 active:opacity-80 transition-opacity ${className}`}
    >
      {children}
    </button>
  );
}
