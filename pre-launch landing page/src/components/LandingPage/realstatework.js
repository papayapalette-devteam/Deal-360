export default function RealstateWork() {
  return (
    <section className="w-full bg-white overflow-visible lg:mb-20 lg:mt-20 relative">
      <div className="mx-auto flex flex-col lg:flex-row lg:min-h-[450px] relative z-10">
        {/* Left: Text Content */}
        <div className="flex items-center w-full lg:w-[52%] px-6 sm:px-10 lg:pl-[10%] lg:pr-6 py-16 lg:py-0 shrink-0">
          <div className="flex flex-col gap-10 lg:gap-[72px]">
            <h1 className="font-poppins font-medium text-4xl sm:text-5xl lg:text-[64px] leading-[110%]">
              <span className="text-color-text">Built for how real </span>
              <span className="text-[var(--color-primary)] 2xl:whitespace-nowrap">
                estate actually works
              </span>
              <span className="text-color-text">.</span>
            </h1>
            <p className="font-poppins font-normal text-base sm:text-lg lg:text-[20px] leading-[150%] text-color-text max-w-[827px]">
              Deal 360 is a property operating platform built around transparency,
              verification, and intent — designed for professionals and serious users.
            </p>
          </div>
        </div>

        {/* Right: Laptop Image */}
        <div className="hidden lg:flex w-full lg:w-[48%] items-center justify-center lg:justify-start overflow-visible relative flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac7bf8cd0620392dd739da3e01adcc3ad1c4c470?width=2884"
            alt="Deal 360 Property Management Dashboard"
            className="w-full max-w-[700px] sm:max-w-[700px] lg:max-w-none h-auto object-contain lg:-mt-32 lg:-mb-32"
          />
        </div>

        {/* Mobile / Tablet Image */}
        <div className="lg:hidden w-full items-center justify-center overflow-visible relative flex-shrink-0">
          <img
            src="./laptop.png"
            alt="Deal 360 Property Management Dashboard"
            className="w-full max-w-[700px] sm:max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}