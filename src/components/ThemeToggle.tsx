import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme/useTheme';
import type { ThemeMode } from '@/theme/theme.types';

const themeModes = ['light', 'dark', 'system'] satisfies ThemeMode[];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const { t } = useTranslation();

  return (
    <label className="control-field">
      <span className="sr-only">{t('actions.changeTheme')}</span>
      <select
        className="select-control"
        value={mode}
        onChange={(event) => setMode(event.target.value as ThemeMode)}
        aria-label={t('actions.changeTheme')}
      >
        {themeModes.map((themeMode) => (
          <option key={themeMode} value={themeMode}>
            {t(`theme.${themeMode}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
