import type { ThemeConfig } from 'tailwindcss/types/config';

export type SpacingTheme = ThemeConfig['spacing'];

export interface SpacingOptions {
  end: number;
  isPx: boolean;
  isRem: boolean;
  prefix: string;
  range: number;
  remVal: number;
  start: number;
}

export type GetSpacingThemeFn = (
  options: Partial<SpacingOptions>
) => SpacingTheme;
