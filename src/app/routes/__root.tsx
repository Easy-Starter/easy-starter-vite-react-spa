import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import { AppDevtools } from "@/app/devtools";
import { SEO } from "@/shared/components/SEO";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { useTranslation } from "react-i18next";

export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  pendingComponent: RoutePending,
  errorComponent: RouteError,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <AppDevtools />
    </>
  );
}

function RoutePending() {
  return (
    <div className="grid min-h-dvh place-items-center bg-background text-foreground">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Loading page…
      </div>
    </div>
  );
}

function RouteError({ error, reset }: ErrorComponentProps) {
  return (
    <div className="grid min-h-dvh place-items-center bg-background p-4 text-foreground">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {error instanceof Error
              ? error.message
              : "An unexpected error occurred."}
          </p>
          <div className="flex gap-3">
            <Button onClick={reset}>Try again</Button>
            <Link to="/" className={buttonVariants({ variant: "outline" })}>
              Go home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function NotFoundPage() {
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
}
