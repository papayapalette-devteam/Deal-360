const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export type UploadType = "photos" | "floor-plan" | "video-tour" | "360-tour" | "ownership-doc";

export class ApiValidationError extends Error {
  fieldErrors: Record<string, string[]>;

  constructor(fieldErrors: Record<string, string[]>) {
    super("Validation error");
    this.fieldErrors = fieldErrors;
  }
}

export async function requestUploadUrl(
  filename: string,
  contentType: string,
  uploadType: UploadType
): Promise<{ upload_url: string; public_url: string }> {
  const res = await fetch(`${API_BASE}/api/pre-launch/upload-url/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filename,
      content_type: contentType,
      upload_type: uploadType,
    }),
  });
  if (!res.ok) throw new Error("Failed to get upload URL");
  return res.json() as Promise<{ upload_url: string; public_url: string }>;
}

export async function uploadToStorage(
  uploadUrl: string,
  file: File
): Promise<void> {
  const res = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });
  if (!res.ok) throw new Error("Upload failed");
}

export async function postPreLaunch(
  endpoint: string,
  data: Record<string, unknown>
): Promise<void> {
  const res = await fetch(`${API_BASE}/api/pre-launch/${endpoint}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    let body: Record<string, string[]> = {};
    if (text.trim()) {
      try {
        const parsed = JSON.parse(text) as unknown;
        if (
          typeof parsed === "object" &&
          parsed !== null &&
          !Array.isArray(parsed)
        ) {
          body = parsed as Record<string, string[]>;
        }
      } catch {
        // empty or invalid JSON — keep body as {}
      }
    }
    throw new ApiValidationError(body);
  }
}
