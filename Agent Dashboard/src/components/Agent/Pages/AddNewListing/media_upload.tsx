import React, { useRef, useState, useCallback } from "react";

interface ImageItem {
  id: string;
  url: string | ArrayBuffer | null;
  name: string;
}

export default function MediaUpload() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const MAX_IMAGES = 20;
  const MAX_SIZE_MB = 5;

  const processFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const validFiles = Array.from(files).filter((file) => {
      const isValidType = ["image/jpeg", "image/png"].includes(file.type);
      const isValidSize = file.size <= MAX_SIZE_MB * 1024 * 1024;
      return isValidType && isValidSize;
    });

    const remaining = MAX_IMAGES - images.length;
    const toAdd = validFiles.slice(0, remaining);

    const readers = toAdd.map(
      (file) =>
        new Promise<ImageItem>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) =>
            resolve({ id: crypto.randomUUID(), url: e.target?.result ?? null, name: file.name });
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((newImages) => {
      setImages((prev) => [...prev, ...newImages]);
    });
  }, [images.length]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    if (e.target) e.target.value = "";
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const ArrowRight = () => (
    <svg style={{ width: "1.11rem", height: "1.11rem" }} viewBox="0 0 20 20" fill="none">
      <path d="M3.33203 10H16.6654M16.6654 10L11.6654 5M16.6654 10L11.6654 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div
      className="bg-white rounded-[0.78rem] p-[1.33rem] flex flex-col gap-[1.66rem]"
      style={{ border: "1px solid rgba(0,0,0,0.10)" }}
    >
      {/* Title */}
      <h2
        className="text-[#0A0A0A] text-[1.11rem] font-normal leading-[1rem]"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        Step 3: Media Upload
      </h2>

      <div className="flex flex-col gap-0 flex-1">
        {/* Drop Zone */}
        <div
          className={`relative flex flex-col items-center justify-center gap-[0.66rem] rounded-[0.55rem] py-[2.22rem] px-[1.33rem] cursor-pointer transition-colors ${
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
            className="text-[#101828] text-[1rem] font-medium text-center leading-[1.33rem]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Drag and drop images here, or click to browse
          </p>

          {/* Button */}
          <button
            type="button"
            className="px-[1.16rem] py-[0.44rem] rounded-[0.44rem] bg-white text-[#0A0A0A] text-[0.77rem] font-normal leading-[1.11rem] transition-colors hover:bg-gray-50 active:bg-gray-100"
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
            className="text-[#717182] text-[0.88rem] font-normal text-center"
            style={{ fontFamily: "Manrope, sans-serif", lineHeight: "0.88rem" }}
          >
            Upload up to {MAX_IMAGES} images (JPG, PNG, max {MAX_SIZE_MB}MB each)
          </p>
        </div>

        {/* Image Grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[0.88rem] mt-[1.33rem]">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative group rounded-[0.55rem] overflow-hidden aspect-video bg-gray-100"
              >
                <img
                  src={img.url as string}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="absolute top-[0.44rem] right-[0.44rem] w-[1.33rem] h-[1.33rem] rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  aria-label="Remove image"
                >
                  <svg style={{ width: "0.55rem", height: "0.55rem" }} viewBox="0 0 10 10" fill="none">
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
            className="text-[0.77rem] text-[#717182] text-right mt-[0.44rem]"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {images.length} / {MAX_IMAGES} images uploaded
          </p>
        )}
      </div>

      {/* ── BACK / NEXT BUTTONS ── */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1.77rem" }}>
        <button
          type="button"
          style={{
            display: "flex",
            padding: "0.88rem 1.77rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.44rem",
            flex: 1,
            borderRadius: "0.44rem",
            backgroundColor: "var(--form-back-btn-bg)",
            color: "var(--form-back-btn-text)",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem",
            fontWeight: 500,
            lineHeight: "120%",
            boxShadow: "0 0 10px 0 rgba(255,255,255,0.25) inset",
          }}
        >
          Back
        </button>
        <button
          type="button"
          style={{
            display: "flex",
            padding: "0.88rem 1.77rem",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.44rem",
            flex: 1,
            borderRadius: "0.44rem",
            backgroundColor: "var(--form-primary)",
            color: "#FFF",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem",
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
