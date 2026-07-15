import { env } from "@/shared/config/env";

export const siteConfig = {
  name: env.appName,
  description:
    "A scalable, maintainable, and high-performance Vite React SPA starter.",
  navigation: [
    { label: "Home", to: "/" as const },
    { label: "About", to: "/about" as const },
    { label: "Dashboard", to: "/dashboard" as const },
  ],
} as const;
