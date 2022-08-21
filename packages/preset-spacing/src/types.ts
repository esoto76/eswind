import type { ThemeConfig, Config } from 'tailwindcss/types/config';

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

export type GetSpacingFn = (options: Partial<SpacingOptions>) => SpacingTheme;

export type SpacingPresetConfig = Partial<Config>;

export type GetSpacingPresetFn = (
  options?: Partial<SpacingOptions>
) => SpacingPresetConfig;
