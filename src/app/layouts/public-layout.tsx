import { Link, Outlet } from "@tanstack/react-router";

import { ThemeToggle } from "@/app/theme/theme-toggle";
import { Container } from "@/shared/components/ui/container";
import { siteConfig } from "@/shared/config/site";

export const PublicLayout = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              ES
            </span>
            <span>{siteConfig.name}</span>
          </Link>

          {/* <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 sm:flex"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:bg-muted hover:text-foreground",
                  "[&.active]:bg-muted [&.active]:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

          <ThemeToggle />
        </Container>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <Container className="flex min-h-20 items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
          <p>“What do we build for, if not to lessen each other’s hardship?”</p>
          <Link to="/about" className="hover:text-foreground">
            Easy Starter React
          </Link>
        </Container>
      </footer>
    </div>
  );
};
