import { useTranslation } from 'react-i18next';

import { siteConfig, type LocaleCode } from '@/config/site';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage ?? siteConfig.defaultLocale) as LocaleCode;

  return (
    <label className="control-field">
      <span className="sr-only">{t('actions.changeLanguage')}</span>
      <select
        className="select-control"
        value={currentLanguage}
        onChange={(event) => void i18n.changeLanguage(event.target.value)}
        aria-label={t('actions.changeLanguage')}
      >
        {siteConfig.supportedLocales.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
    </label>
  );
}
