import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { brandConfig, type BrandThemeTokens } from '@/config/brand';
import { getStoredThemeMode, storeThemeMode } from '@/theme/theme-storage';
import { ThemeContext } from '@/theme/theme-context';
import type { ThemeMode, ThemeName } from '@/theme/theme.types';

function getSystemTheme(): ThemeName {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(mode: ThemeMode): ThemeName {
  return mode === 'system' ? getSystemTheme() : mode;
}

function toCssVariableName(key: string) {
  return `--color-${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
}

function applyThemeTokens(theme: ThemeName) {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const tokens: BrandThemeTokens = brandConfig.theme[theme];

  Object.entries(tokens).forEach(([key, value]) => {
    root.style.setProperty(toCssVariableName(key), value);
  });

  root.style.setProperty('--font-sans', brandConfig.font.family);
  root.dataset.theme = theme;
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setModeState] = useState<ThemeMode>(() => getStoredThemeMode());
  const [resolvedTheme, setResolvedTheme] = useState<ThemeName>(() => resolveTheme(getStoredThemeMode()));

  useEffect(() => {
    const updateResolvedTheme = () => setResolvedTheme(resolveTheme(mode));
    updateResolvedTheme();

    if (mode !== 'system' || typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateResolvedTheme);

    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [mode]);

  useEffect(() => {
    applyThemeTokens(resolvedTheme);
  }, [resolvedTheme]);

  const setMode = useCallback((nextMode: ThemeMode) => {
    storeThemeMode(nextMode);
    setModeState(nextMode);
  }, []);

  const value = useMemo(
    () => ({
      mode,
      resolvedTheme,
      setMode,
    }),
    [mode, resolvedTheme, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
