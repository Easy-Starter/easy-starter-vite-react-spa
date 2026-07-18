import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Gauge,
  Route as RouteIcon,
  WandSparkles,
} from "lucide-react";

import { Badge } from "@/shared/components/ui/badge";
import { buttonVariants } from "@/shared/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { siteConfig } from "@/shared/config/site";
import { useDocumentMeta } from "@/shared/hooks/use-document-meta";
import { cn } from "@/shared/lib/cn";

export const Route = createFileRoute("/_public/")({
  component: LandingPage,
});

const benefits = [
  {
    title: "File-based routes",
    description: "Add a route without editing a central routing registry.",
    icon: RouteIcon,
  },
  {
    title: "Feature boundaries",
    description:
      "Keep page composition, business capabilities, and shared UI separate.",
    icon: Boxes,
  },
  {
    title: "Fast by default",
    description:
      "Automatic route splitting, intent preloading, and optimized production builds.",
    icon: Gauge,
  },
  {
    title: "Design-ready",
    description:
      "Theme tokens and reusable primitives make new visual directions easy to implement.",
    icon: WandSparkles,
  },
];

function LandingPage() {
  useDocumentMeta({
    title: `${siteConfig.name}`,
    description: siteConfig.description,
  });

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_40%)]" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Badge>AI-first · production-capable foundation</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Build scalable React SPAs without rebuilding the foundation every
              time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A clean starter for dashboards, portals, internal tools, and
              client-side applications that need fast routing, maintainable
              features, and consistent design primitives.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dashboard" className={buttonVariants({ size: "lg" })}>
                Open dashboard
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                )}
              >
                View architecture
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="content-auto py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="transition-transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <span className="mb-3 grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="leading-6">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
