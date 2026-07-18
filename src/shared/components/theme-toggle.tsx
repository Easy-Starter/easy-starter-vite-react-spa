import { Button } from "@/shared/components/ui/button";
import { Moon, Sun } from "lucide-react";

type ThemeToggleButtonProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggleButton({
  isDark,
  onToggle,
}: ThemeToggleButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={onToggle}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
