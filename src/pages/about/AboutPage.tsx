import { useTranslation } from 'react-i18next';

import { SEO } from '@/components/SEO';

export function AboutPage() {
  const { t } = useTranslation();
  const useWhenItems = t('about.sections.useWhen.items', { returnObjects: true }) as string[];
  const avoidWhenItems = t('about.sections.avoidWhen.items', { returnObjects: true }) as string[];

  return (
    <>
      <SEO title={t('about.seo.title')} description={t('about.seo.description')} path="/about" />

      <section className="section-spacing">
        <div className="container narrow-content">
          <p className="eyebrow">React website starter</p>
          <h1>{t('about.title')}</h1>
          <p className="lead-text">{t('about.description')}</p>

          <div className="info-grid">
            <article className="info-panel">
              <h2>{t('about.sections.useWhen.title')}</h2>
              <ul>
                {useWhenItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="info-panel">
              <h2>{t('about.sections.avoidWhen.title')}</h2>
              <ul>
                {avoidWhenItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
