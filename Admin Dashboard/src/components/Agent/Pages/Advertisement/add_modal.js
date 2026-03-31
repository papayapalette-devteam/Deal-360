import { useState } from "react";
  import { useRef } from "react";

export default function AddModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [isDragging, setIsDragging] = useState(false);



const fileInputRef = useRef(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    console.log("Selected file:", file);
  }
};

const handleDrop = (e) => {
  e.preventDefault();
  setIsDragging(false);

  const file = e.dataTransfer.files[0];
  if (file) {
    console.log("Dropped file:", file);
  }
};

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);


  return (
    <div className="bg-white rounded-[12px] border border-[#E6E7E6] overflow-hidden">
      <div className="bg-white dark:bg-[#1a2233] rounded-xl w-full max-w-4xl p-8 my-4">
        {/* Title + Type */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-base font-medium text-[var(--brand-dark)] font-manrope leading-[150%]">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Homepage Hero Section"
              className="h-[69px] px-3 py-2 border border-[#C0C3C1] dark:border-[#2e4060] rounded bg-white dark:bg-[#111827] text-[#8E938F] dark:text-[#5a6e84] font-manrope text-base outline-none focus:border-[#7FFFD4] transition-colors placeholder:text-[#8E938F]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-base font-medium text-[var(--brand-dark)] font-manrope leading-[150%]">
              Type
            </label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Landing Page"
              className="h-[69px] px-3 py-2 border border-[#C0C3C1] dark:border-[#2e4060] rounded bg-white dark:bg-[#111827] text-[#8E938F] dark:text-[#5a6e84] font-manrope text-base outline-none focus:border-[#7FFFD4] transition-colors placeholder:text-[#8E938F]"
            />
          </div>
        </div>

        {/* Image Upload */}
      <div className="flex flex-col gap-2 mb-6">
  <label className="text-base font-medium text-[var(--brand-dark)] font-manrope leading-[150%]">
    Image Upload
  </label>

  {/* Hidden Input */}
  <input
    type="file"
    ref={fileInputRef}
    onChange={handleFileChange}
    accept="image/*"
    className="hidden"
  />

  {/* Upload Box */}
  <div
    className={`flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors
      ${
        isDragging
          ? "border-[#7FFFD4] bg-[#E3FEF5]"
          : "border-[#D1D5DB] dark:border-[#2e4060] hover:border-[#7FFFD4]"
      }`}
    onClick={() => fileInputRef.current.click()}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4V20" stroke="#777B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.6615 10.6667L15.9948 4L9.32812 10.6667" stroke="#777B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="#777B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    <p className="mt-4 text-sm text-[#777B8A] font-manrope">
      Drag and drop files here
    </p>
    <p className="text-xs text-[#777B8A] font-manrope font-medium">
      or click to browse
    </p>
  </div>
</div>

        {/* Add more description */}
        <div className="mb-6">
          <button className="w-full flex items-center justify-center gap-3 py-6 rounded-lg border-[1.5px] border-[#7FFFD4] bg-[#E3FEF5] dark:bg-[#0d2a1f] text-black dark:text-[#e8eaf0] font-inter text-2xl font-normal hover:opacity-90 transition-opacity">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20.0026 8.33594V31.6693M8.33594 20.0026H31.6693"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add more description
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-6">
          <button
            onClick={onClose}
            className="flex-1 max-w-[218px] h-12 flex items-center justify-center rounded-lg border border-[#F2415A] text-[#F2415A] font-poppins font-medium text-base hover:bg-[#F2415A]/5 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 max-w-[218px] h-12 flex items-center justify-center rounded-lg bg-[#7FFFD4] text-black font-poppins font-medium text-base hover:opacity-90 transition-opacity">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
