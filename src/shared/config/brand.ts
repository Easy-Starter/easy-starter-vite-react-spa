export type BrandThemeTokens = {
  background: string;
  foreground: string;
  surface: string;
  surfaceElevated: string;
  muted: string;
  mutedForeground: string;
  primary: string;
  primaryForeground: string;
  border: string;
  ring: string;
};

export const brandConfig = {
  name: "Easy Starter React",
  shortName: "Starter",
  description:
    "A clean Vite React starter for fast, multilingual, themeable websites.",
  url: "https://example.com",
  logo: {
    light: "/brand/logo.svg",
    dark: "/brand/logo-dark.svg",
    alt: "Easy Starter React logo",
  },
  openGraphImage: "/brand/og-default.svg",
  font: {
    family:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  theme: {
    light: {
      background: "#ffffff",
      foreground: "#0f172a",
      surface: "#ffffff",
      surfaceElevated: "#f8fafc",
      muted: "#f1f5f9",
      mutedForeground: "#64748b",
      primary: "#2563eb",
      primaryForeground: "#ffffff",
      border: "#e2e8f0",
      ring: "#93c5fd",
    },
    dark: {
      background: "#020617",
      foreground: "#e2e8f0",
      surface: "#0f172a",
      surfaceElevated: "#111827",
      muted: "#1e293b",
      mutedForeground: "#94a3b8",
      primary: "#60a5fa",
      primaryForeground: "#0f172a",
      border: "#334155",
      ring: "#60a5fa",
    },
  } satisfies Record<"light" | "dark", BrandThemeTokens>,
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/company/your-company" },
  ],
} as const;
