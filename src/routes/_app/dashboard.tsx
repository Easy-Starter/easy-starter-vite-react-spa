import { createFileRoute } from "@tanstack/react-router";

import { dashboardSummaryQueryOptions } from "@/app/features/dashboard-summary";
import { DashboardPage } from "@/pages/dashboard";

export const Route = createFileRoute("/_app/dashboard")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(dashboardSummaryQueryOptions),
  component: DashboardPage,
});
