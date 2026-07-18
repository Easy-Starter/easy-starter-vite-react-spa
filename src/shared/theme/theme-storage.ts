import type { ThemeMode } from "./theme.types";

const THEME_STORAGE_KEY = "vite-react-starter-theme";
const supportedThemeModes = ["light", "dark", "system"] satisfies ThemeMode[];

export function isThemeMode(value: string | null): value is ThemeMode {
  return supportedThemeModes.includes(value as ThemeMode);
}

export function getStoredThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "system";

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeMode(storedTheme) ? storedTheme : "system";
}

export function storeThemeMode(mode: ThemeMode) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, mode);
}
