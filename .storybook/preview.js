import { applyDesignSystemTheme } from '../src/theme/helpers/theme';

const theme = {
  'up-brand-1': '#312B78',
  'up-brand-3': '#50E2D1',
  'up-brand-1-900': '#211C4E',
  'up-brand-1-800': '#312B78',
  'up-brand-1-700': '#3D3696',
  'up-brand-1-600': '#4A41B4',
  'up-brand-1-500': '#625AC4',
  'up-brand-1-400': '#7E78CF',
  'up-brand-1-300': '#9B96D9',
  'up-brand-1-200': '#B8B4E4',
  'up-brand-1-100': '#D4D2EF',
  'up-brand-1-50': '#F1F0FA',
  'up-brand-3-900': '#0F574F',
  'up-brand-3-800': '#147A6F',
  'up-brand-3-700': '#1A9D8E',
  'up-brand-3-600': '#20C0AE',
  'up-brand-3-500': '#2DDCC8',
  'up-brand-3-400': '#50E2D1',
  'up-brand-3-300': '#73E8DA',
  'up-brand-3-200': '#96EEE3',
  'up-brand-3-100': '#B9F3ED',
  'up-brand-3-50': '#DCF9F6'
};

applyDesignSystemTheme(theme);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}