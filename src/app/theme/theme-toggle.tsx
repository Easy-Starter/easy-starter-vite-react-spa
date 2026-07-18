import { useTheme } from "@/app/providers/theme-provider";
import { ThemeToggleButton } from "@/shared/components/theme-toggle";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <ThemeToggleButton
      isDark={isDark}
      onToggle={() => setTheme(isDark ? "light" : "dark")}
    />
  );
}
