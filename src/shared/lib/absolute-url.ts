import { siteConfig } from "@/shared/config/site";

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = siteConfig.baseUrl.replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}
