import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { formatNumber } from "@/shared/lib/format-number";
import type { DashboardMetric } from "../model/dashboard-summary.schema";

interface MetricCardProps {
  metric: DashboardMetric;
}

export const MetricCard = ({ metric }: MetricCardProps) => {
  const isPositive = metric.change >= 0;
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {metric.label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-3">
          <p className="text-3xl font-bold tracking-tight">
            {formatNumber(metric.value)}
            {metric.suffix ? (
              <span className="ml-1 text-lg">{metric.suffix}</span>
            ) : null}
          </p>
          <span
            className={
              isPositive
                ? "flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400"
                : "flex items-center text-xs font-medium text-rose-600 dark:text-rose-400"
            }
          >
            <TrendIcon className="mr-1 size-3.5" aria-hidden="true" />
            {Math.abs(metric.change)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
