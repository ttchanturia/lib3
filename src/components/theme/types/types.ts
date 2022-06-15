export const AppThemes = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export type AppTheme = typeof AppThemes[keyof typeof AppThemes];
