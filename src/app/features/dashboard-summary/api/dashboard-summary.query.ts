import { queryOptions } from "@tanstack/react-query";

import { dashboardSummarySchema } from "@/app/features/dashboard-summary/model/dashboard-summary.schema";
import { staticClient } from "@/shared/api/http-client";

export const dashboardSummaryQueryOptions = queryOptions({
  queryKey: ["dashboard", "summary"],
  queryFn: ({ signal }) =>
    staticClient.get("/mock/dashboard-summary.json", {
      signal,
      schema: dashboardSummarySchema,
    }),
  staleTime: 5 * 60_000,
});
