import { useState, useRef } from "react";

export default function EditModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) console.log("Selected file:", file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) console.log("Dropped file:", file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div
        className="flex flex-col justify-center items-center gap-4 bg-white dark:bg-[#1a2233] rounded-xl shadow-lg relative"
        style={{
          width: "906px",
          height: "501px",
          padding: "40px",
          flexShrink: 0,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M30 10L10 30"
              stroke="#343A40"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10L30 30"
              stroke="#343A40"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Title + Type Inputs */}
        <div className="flex w-full gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-base font-medium text-[var(--brand-dark)] font-manrope leading-[150%]">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. UI/UX Designer"
              className="h-[44px] px-3 py-2 border border-[#C0C3C1] dark:border-[#2e4060] rounded bg-white dark:bg-[#111827] text-[#8E938F] dark:text-[#5a6e84] font-manrope text-base outline-none focus:border-[#7FFFD4] transition-colors placeholder:text-[#8E938F]"
            />
          </div>

        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-base font-medium text-[var(--brand-dark)] font-manrope leading-[150%]">
            Re-Upload 
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div
            className={`flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors w-full
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
              <path
                d="M16 4V20"
                stroke="#777B8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.6615 10.6667L15.9948 4L9.32812 10.6667"
                stroke="#777B8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20"
                stroke="#777B8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-4 text-sm text-[#777B8A] font-manrope">
              Drag and drop files here
            </p>
            <p className="text-xs text-[#777B8A] font-manrope ">
              or click to browse
            </p>
          </div>
        </div>


 
        {/* Action Buttons */} 
        <div className="flex justify-end gap-4 w-full mt-auto">
          <button
            onClick={onClose}
            className="flex-1 max-w-[218px] h-12 flex items-center justify-center rounded-lg border border-[#F2415A] text-[#838383] font-poppins font-medium text-base bg-[#EAEAEA] transition-colors"
          >
            Back
          </button>
          <button className="flex-1 max-w-[218px] h-12 flex items-center justify-center rounded-lg bg-[#7FFFD4] text-black font-poppins font-medium text-base hover:opacity-90 transition-opacity">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}