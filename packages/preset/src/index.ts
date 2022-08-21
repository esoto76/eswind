import type { Config } from 'tailwindcss'
import { theme } from './theme'
export const Name: string = ' __PKG__NAME__'

const presets: Partial<Config> = { theme }

export default presets
