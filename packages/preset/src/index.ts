import { PresetConfig } from './types';
import { SpacingConfig, GetSpacing } from '@eswind/preset-spacing';

export const Preset: Partial<PresetConfig> = { preset: [SpacingConfig] };

export * from './pkg';
export * from './types';

export { Preset as default, SpacingConfig as SpacingPreset, GetSpacing };
