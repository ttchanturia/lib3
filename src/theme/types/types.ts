export const AppThemes = {
  LIGHT: 'light',
  DARK: 'dark'
};

export type AppTheme = typeof AppThemes[keyof typeof AppThemes];
