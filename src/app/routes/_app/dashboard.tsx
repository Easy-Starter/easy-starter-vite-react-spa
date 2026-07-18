import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { dashboardSummaryQueryOptions, MetricCard } from "@/features/Dashboard";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { PageHeader } from "@/shared/components/ui/page-header";
import { siteConfig } from "@/shared/config/site";
import { useDocumentMeta } from "@/shared/hooks/use-document-meta";

export const Route = createFileRoute("/_app/dashboard")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(dashboardSummaryQueryOptions),
  component: DashboardPage,
});

function DashboardPage() {
  const { data, refetch, isFetching } = useSuspenseQuery(
    dashboardSummaryQueryOptions,
  );

  useDocumentMeta({
    title: `Dashboard — ${siteConfig.name}`,
    description:
      "Example application route with prefetched and validated data.",
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description={`Validated data prefetched by the route loader. Updated ${new Date(data.updatedAt).toLocaleString()}.`}
        actions={
          <Button
            variant="outline"
            disabled={isFetching}
            onClick={() => void refetch()}
          >
            {isFetching ? "Refreshing…" : "Refresh"}
          </Button>
        }
      />

      <section
        aria-label="Overview metrics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {data.metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Route-first data loading</CardTitle>
            <CardDescription>
              The dashboard loader primes TanStack Query before the page
              renders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid min-h-64 place-items-center rounded-lg border border-dashed border-border bg-muted/30 text-sm text-muted-foreground">
              Replace this placeholder with a chart that is lazy-loaded only on
              this route.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance defaults</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Automatic route code splitting</li>
              <li>Intent-based route preloading</li>
              <li>Abortable requests</li>
              <li>Runtime response validation</li>
              <li>Short, explicit cache policies</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
