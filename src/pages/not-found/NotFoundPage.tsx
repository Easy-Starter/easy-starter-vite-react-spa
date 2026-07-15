import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { SEO } from "@/components/SEO";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing not-found-page">
      <SEO
        title={t("notFound.seo.title")}
        description={t("notFound.seo.description")}
        noIndex
      />
      <div className="container narrow-content">
        <p className="eyebrow">404</p>
        <h1>{t("notFound.title")}</h1>
        <p className="lead-text">{t("notFound.description")}</p>
        <Link className="button button-primary" to="/">
          {t("notFound.backHome")}
        </Link>
      </div>
    </section>
  );
};
