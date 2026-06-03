const LOCAL_API_LINK = "http://localhost:3000";

// Change only NEXT_PUBLIC_API_LINK (or LOCAL_API_LINK for local fallback).
export const API_LINK = process.env.NEXT_PUBLIC_API_LINK || LOCAL_API_LINK;

export function buildApiUrl(path = "") {
  if (!path) return API_LINK;
  return `${API_LINK}${path.startsWith("/") ? path : `/${path}`}`;
}
