import type { Config } from 'tailwindcss/types/config';
import { screens } from './screens';

export const ScreensPreset: Partial<Config> = {
  theme: { screens }
};

export { ScreensPreset as default, screens as Screens };
export * from './pkg';
