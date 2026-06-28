import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

import { brandConfig } from '@/config/brand';
import { getLocaleDirection, siteConfig } from '@/config/site';
import { absoluteUrl } from '@/utils/absoluteUrl';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

function formatTitle(title?: string) {
  if (!title) return siteConfig.seo.defaultTitle;
  return siteConfig.seo.titleTemplate.replace('%s', title);
}

export function SEO({
  title,
  description = siteConfig.seo.defaultDescription,
  image = siteConfig.seo.defaultImage,
  path,
  type = 'website',
  noIndex = false,
}: SEOProps) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const pageTitle = formatTitle(title);
  const canonicalUrl = absoluteUrl(path ?? location.pathname);
  const imageUrl = absoluteUrl(image);
  const locale = i18n.resolvedLanguage ?? siteConfig.defaultLocale;

  return (
    <Helmet htmlAttributes={{ lang: locale, dir: getLocaleDirection(locale) }}>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />

      <meta property="og:site_name" content={brandConfig.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
