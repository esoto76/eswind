import type { ThemeConfig } from 'tailwindcss/types/config'
import { screens } from './screens'
import { spacing } from './spacing'

export const theme: Partial<ThemeConfig> = { screens, spacing }
