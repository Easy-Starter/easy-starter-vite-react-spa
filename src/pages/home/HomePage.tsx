import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { SEO } from '@/components/SEO';

const featureKeys = ['i18n', 'theme', 'production'] as const;

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('home.seo.title')} description={t('home.seo.description')} path="/" />

      <section className="hero-section section-spacing">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{t('home.eyebrow')}</p>
            <h1>{t('home.title')}</h1>
            <p className="hero-description">{t('home.description')}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#features">
                {t('home.primaryCta')}
              </a>
              <Link className="button button-secondary" to="/about">
                {t('home.secondaryCta')}
              </Link>
            </div>
          </div>

          <div className="hero-card" aria-label="Starter features summary">
            <div className="hero-card-header">
              <span className="status-dot" />
              <span>starter.config.ts</span>
            </div>
            <pre>{`brand: configurable\ni18n: en + fa\ntheme: light | dark | system\nrouting: react-router\nseo: meta + sitemap`}</pre>
          </div>
        </div>
      </section>

      <section id="features" className="section-spacing">
        <div className="container">
          <div className="section-heading">
            <h2>{t('home.featuresTitle')}</h2>
          </div>
          <div className="feature-grid">
            {featureKeys.map((featureKey) => (
              <article key={featureKey} className="feature-card">
                <h3>{t(`home.features.${featureKey}.title`)}</h3>
                <p>{t(`home.features.${featureKey}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
