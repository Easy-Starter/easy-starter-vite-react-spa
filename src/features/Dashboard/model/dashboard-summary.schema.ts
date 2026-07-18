import { z } from "zod";

export const dashboardMetricSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number(),
  change: z.number(),
  suffix: z.string().optional(),
});

export const dashboardSummarySchema = z.object({
  metrics: z.array(dashboardMetricSchema),
  updatedAt: z.iso.datetime(),
});

export type DashboardMetric = z.infer<typeof dashboardMetricSchema>;
export type DashboardSummary = z.infer<typeof dashboardSummarySchema>;
