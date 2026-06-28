import { createContext } from 'react';

import type { ThemeContextValue } from '@/theme/theme.types';

export const ThemeContext = createContext<ThemeContextValue | null>(null);
