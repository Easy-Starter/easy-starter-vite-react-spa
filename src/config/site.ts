import { brandConfig } from '@/config/brand';

export type LocaleCode = 'en' | 'fa';
export type LocaleDirection = 'ltr' | 'rtl';

export const siteConfig = {
  baseUrl: import.meta.env.VITE_SITE_URL || brandConfig.url,
  defaultLocale: 'en' satisfies LocaleCode,
  supportedLocales: [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'fa', label: 'فارسی', dir: 'rtl' },
  ] satisfies Array<{ code: LocaleCode; label: string; dir: LocaleDirection }>,
  seo: {
    defaultTitle: brandConfig.name,
    titleTemplate: `%s | ${brandConfig.name}`,
    defaultDescription: brandConfig.description,
    defaultImage: brandConfig.openGraphImage,
    twitterCard: 'summary_large_image',
  },
} as const;

export function getLocaleDirection(locale: string): LocaleDirection {
  return siteConfig.supportedLocales.find((item) => item.code === locale)?.dir ?? 'ltr';
}
