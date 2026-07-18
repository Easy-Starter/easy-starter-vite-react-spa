import { queryOptions } from "@tanstack/react-query";

import { staticClient } from "@/shared/base/http-client";
import { dashboardSummarySchema } from "../model/dashboard-summary.schema";

export const dashboardSummaryQueryOptions = queryOptions({
  queryKey: ["dashboard", "summary"],
  queryFn: ({ signal }) =>
    staticClient.get("/mock/dashboard-summary.json", {
      signal,
      schema: dashboardSummarySchema,
    }),
  staleTime: 5 * 60_000,
});
