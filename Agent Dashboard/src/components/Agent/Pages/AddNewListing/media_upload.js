import { useRef, useState, useCallback } from "react";

export default function MediaUpload() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const MAX_IMAGES = 20;
  const MAX_SIZE_MB = 5;

  const processFiles = useCallback((files) => {
    const validFiles = Array.from(files).filter((file) => {
      const isValidType = ["image/jpeg", "image/png"].includes(file.type);
      const isValidSize = file.size <= MAX_SIZE_MB * 1024 * 1024;
      return isValidType && isValidSize;
    });

    const remaining = MAX_IMAGES - images.length;
    const toAdd = validFiles.slice(0, remaining);

    const readers = toAdd.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) =>
            resolve({ id: crypto.randomUUID(), url: e.target.result, name: file.name });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((newImages) => {
      setImages((prev) => [...prev, ...newImages]);
    });
  }, [images.length]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleFileChange = (e) => {
    processFiles(e.target.files);
    e.target.value = "";
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3.33203 10H16.6654M16.6654 10L11.6654 5M16.6654 10L11.6654 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);




  return (
    <div
      className="bg-white rounded-[14px] p-6 flex flex-col gap-[30px]"
      style={{ border: "1px solid rgba(0,0,0,0.10)" }}
    >
      {/* Title */}
      <h2
        className="text-[#0A0A0A] text-xl font-normal leading-4"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Step 3: Media Upload
      </h2>

      <div className="flex flex-col gap-0 flex-1">
        {/* Drop Zone */}
        <div
          className={`relative flex flex-col items-center justify-center gap-3 rounded-[10px] py-10 px-6 cursor-pointer transition-colors ${
            isDragging ? "bg-[#FFECEA]" : "bg-white"
          }`}
          style={{
            border: `2px solid ${isDragging ? "#F88379" : "rgba(0,0,0,0.10)"}`,
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

      

          {/* Text */}
          <p
            className="text-[#101828] text-lg font-medium text-center leading-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Drag and drop images here, or click to browse
          </p>

          {/* Button */}
          <button
            type="button"
            className="px-[21px] py-2 rounded-lg bg-white text-[#0A0A0A] text-sm font-normal leading-5 transition-colors hover:bg-gray-50 active:bg-gray-100"
            style={{
              border: "1px solid rgba(0,0,0,0.10)",
              fontFamily: "Manrope, sans-serif",
            }}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            Choose Files
          </button>

          {/* Helper text */}
          <p
            className="text-[#717182] text-base font-normal text-center"
            style={{ fontFamily: "Manrope, sans-serif", lineHeight: "16px" }}
          >
            Upload up to {MAX_IMAGES} images (JPG, PNG, max {MAX_SIZE_MB}MB each)
          </p>
        </div>

        {/* Image Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative group rounded-[10px] overflow-hidden aspect-video bg-gray-100"
              >
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  aria-label="Remove image"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 1l8 8M9 1L1 9"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Image count indicator */}
        {images.length > 0 && (
          <p
            className="text-sm text-[#717182] text-right"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {images.length} / {MAX_IMAGES} images uploaded
          </p>
        )}
      </div>

           {/* ── BACK / NEXT BUTTONS ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 32 }}>
        <button
          style={{
            display: "flex",
            padding: "16px 32px",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            flex: 1,
            borderRadius: 8,
            backgroundColor: "var(--form-back-btn-bg)",
            color: "var(--form-back-btn-text)",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: "120%",
            boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset",
          }}
        >
          Back
        </button>
        <button
          style={{
            display: "flex",
            padding: "16px 32px",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            flex: 1,
            borderRadius: 8,
            backgroundColor: "var(--form-primary)",
            color: "#FFF",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Manrope', sans-serif",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: "120%",
            boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset",
          }}
        >
          Next <ArrowRight />
        </button>
      </div>

    </div>
  );
}
