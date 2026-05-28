const defaultSiteUrl = "https://earthiva.vercel.app";

export function getSiteUrl() {
  const rawInput = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  const raw = rawInput.startsWith("http://") || rawInput.startsWith("https://")
    ? rawInput
    : `https://${rawInput}`;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function toAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
