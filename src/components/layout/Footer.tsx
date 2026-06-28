import { useTranslation } from 'react-i18next';

import { brandConfig } from '@/config/brand';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {brandConfig.name}. {t('footer.copyright')}
        </p>
        <div className="footer-links">
          {brandConfig.socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
