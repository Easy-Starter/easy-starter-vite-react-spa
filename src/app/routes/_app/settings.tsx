import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";

import { useTheme, type Theme } from "@/app/providers/theme-provider";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { PageHeader } from "@/shared/components/ui/page-header";
import { siteConfig } from "@/shared/config/site";
import { useDocumentMeta } from "@/shared/hooks/use-document-meta";
import { cn } from "@/shared/lib/cn";

export const Route = createFileRoute("/_app/settings")({
  component: SettingsPage,
});

const themeOptions: Array<{ label: string; value: Theme }> = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  useDocumentMeta({
    title: `Settings — ${siteConfig.name}`,
    description:
      "Example settings page using reusable form and card primitives.",
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        description="Page-specific design stays inside the page module while generic controls come from shared UI."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Example form composition. Connect it to a feature mutation later.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium">
                Display name
                <Input name="displayName" defaultValue="Easy Starter User" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Email
                <Input
                  name="email"
                  type="email"
                  defaultValue="developer@example.com"
                />
              </label>
              <Button type="submit">{saved ? "Saved" : "Save changes"}</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>
              Design tokens support light, dark, and system preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={cn(
                    "rounded-lg border border-border p-4 text-sm font-medium transition-colors",
                    "hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    theme === option.value &&
                      "border-primary bg-primary/10 text-primary",
                  )}
                  onClick={() => setTheme(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
