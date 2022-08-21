import { GetSpacing } from './fn';
import { GetSpacingPresetFn, SpacingPresetConfig } from './types';

export const GetSpacingPreset: GetSpacingPresetFn = options => {
  return {
    theme: {
      spacing: GetSpacing(options || {})
    }
  };
};

export const SpacingConfig: SpacingPresetConfig = GetSpacingPreset();
export { SpacingConfig as default };
export * from './pkg';
export * from './types';
export { GetSpacing } from './fn';
