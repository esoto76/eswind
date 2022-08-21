import type { Config } from 'tailwindcss/types/config';
import { screens } from './screens';

export const ScreenPreset: Partial<Config> = {
  theme: { screens }
};

export { ScreenPreset as default, screens as Screens };
export * from './pkg';
