import { GetSpacing } from './fn';
import { GetPresetFn, PresetConfig } from './types';

export const GetPreset: GetPresetFn = options => {
  return {
    theme: {
      spacing: GetSpacing(options || {})
    }
  };
};

export const Preset: PresetConfig = GetPreset();
export { Preset as default };
export * from './pkg';
export * from './types';
export { GetSpacing } from './fn';
