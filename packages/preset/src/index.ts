import { PresetConfig } from './types';
import { SpacingConfig, GetSpacing } from '@eswind/preset-spacing';
import { ScreensPreset, Screens } from '@eswind/preset-screens';

export const Preset: Partial<PresetConfig> = {
  preset: [SpacingConfig, ScreensPreset]
};

export * from './pkg';
export * from './types';

export {
  Preset as default,
  SpacingConfig as SpacingPreset,
  GetSpacing,
  Screens
};
