import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {
  getLocaleDirection,
  siteConfig,
  type LocaleCode,
} from "@/shared/config/site";
import en from "./resources/en.json";
import fa from "./resources/fa.json";

const LANGUAGE_STORAGE_KEY = "vite-react-starter-language";

const resources = {
  en: { translation: en },
  fa: { translation: fa },
};

function isSupportedLanguage(language: string): language is LocaleCode {
  return siteConfig.supportedLocales.some((locale) => locale.code === language);
}

function normalizeLanguage(language?: string | null): LocaleCode {
  const shortLanguage = language?.split("-")[0];
  return shortLanguage && isSupportedLanguage(shortLanguage)
    ? shortLanguage
    : siteConfig.defaultLocale;
}

function getInitialLanguage(): LocaleCode {
  if (typeof window === "undefined") return siteConfig.defaultLocale;

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage) return normalizeLanguage(storedLanguage);

  return normalizeLanguage(window.navigator.language);
}

function syncDocumentLanguage(language: string) {
  if (typeof document === "undefined") return;

  const normalizedLanguage = normalizeLanguage(language);
  document.documentElement.lang = normalizedLanguage;
  document.documentElement.dir = getLocaleDirection(normalizedLanguage);
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: siteConfig.defaultLocale,
  supportedLngs: siteConfig.supportedLocales.map((locale) => locale.code),
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  const normalizedLanguage = normalizeLanguage(language);
  syncDocumentLanguage(normalizedLanguage);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
  }
});

syncDocumentLanguage(i18n.language);

export { i18n };
