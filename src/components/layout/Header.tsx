import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import { appRoutes } from "@/app/router";
import { brandConfig } from "@/config/brand";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import { ThemeToggle } from "@/shared/components/ThemeToggle";
import { useTheme } from "@/theme/useTheme";
import { cn } from "@/utils/classNames";

export function Header() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const logo =
    resolvedTheme === "dark" ? brandConfig.logo.dark : brandConfig.logo.light;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-link" aria-label={brandConfig.name}>
          <img src={logo} alt={brandConfig.logo.alt} className="brand-logo" />
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {appRoutes
            .filter((route) => route.showInNavigation)
            .map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.path === "/"}
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                {t(route.labelKey)}
              </NavLink>
            ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
