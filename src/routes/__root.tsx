import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import { AppDevtools } from "@/app/devtools";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/cn";

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
  return (
    <div className="grid min-h-dvh place-items-center bg-background p-4 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page may have moved, or the address may be incorrect.
        </p>
        <Link to="/" className={cn(buttonVariants(), "mt-6")}>
          Return home
        </Link>
      </div>
    </div>
  );
}
