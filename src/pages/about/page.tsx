import { Code2, Layers3, PackageCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Container } from "@/shared/components/ui/container";
import { PageHeader } from "@/shared/components/ui/page-header";
import { siteConfig } from "@/shared/config/site";
import { useDocumentMeta } from "@/shared/hooks/use-document-meta";

const layers = [
  [
    "app",
    "Application composition, global providers, layouts, router, and configuration.",
  ],
  [
    "routes",
    "Small URL adapters containing loaders, search validation, guards, and page imports.",
  ],
  [
    "pages",
    "Route-level UI composition. A page may combine several features and shared primitives.",
  ],
  [
    "features",
    "User-facing capabilities with their own API, model, and UI boundaries.",
  ],
  [
    "shared",
    "Framework-agnostic UI primitives, API utilities, hooks, and helper functions.",
  ],
];

export const AboutPage = () => {
  useDocumentMeta({
    title: `${siteConfig.name}`,
    description:
      "Understand the layering and route workflow used by this starter.",
  });

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        title="Architecture that stays simple as the app grows"
        description="The structure optimizes for fast route creation while preventing pages, business logic, and generic UI from becoming tightly coupled."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Layers3 className="size-5 text-primary" />
            <CardTitle>Clear layers</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Imports flow downward. Shared code never knows about pages,
            features, or application composition.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Code2 className="size-5 text-primary" />
            <CardTitle>Thin routes</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Route files configure navigation and loading. Visual design remains
            inside page and feature modules.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <PackageCheck className="size-5 text-primary" />
            <CardTitle>Small public APIs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Each page or feature exposes an index file, reducing deep imports
            and making refactors safer.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
        {layers.map(([name, description], index) => (
          <div
            key={name}
            className="grid gap-2 border-b border-border p-5 last:border-0 sm:grid-cols-[8rem_1fr]"
          >
            <code className="font-semibold text-primary">src/{name}</code>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
