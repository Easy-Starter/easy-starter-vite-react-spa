import { Link, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, Settings } from "lucide-react";

import { ThemeToggle } from "@/app/features/theme-toggle";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

const appNavigation = [
  { label: "Dashboard", to: "/dashboard" as const, icon: LayoutDashboard },
  { label: "Settings", to: "/settings" as const, icon: Settings },
];

export const AppShell = () => {
  return (
    <div className="min-h-dvh bg-muted/25 text-foreground lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="hidden border-r border-border bg-background lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-border px-5">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              ES
            </span>
            {siteConfig.name}
          </Link>
        </div>

        <nav
          className="flex flex-1 flex-col gap-1 p-3"
          aria-label="Application navigation"
        >
          {appNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:bg-muted hover:text-foreground",
                  "[&.active]:bg-primary/10 [&.active]:text-primary",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur-xl sm:px-6">
          <Link to="/" className="font-semibold lg:hidden">
            {siteConfig.name}
          </Link>

          <nav
            className="flex items-center gap-1 lg:hidden"
            aria-label="Mobile application navigation"
          >
            {appNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-2.5 py-2 text-sm text-muted-foreground [&.active]:bg-muted [&.active]:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
