import type { ThemeConfig } from 'tailwindcss/types/config'

export const screens: ThemeConfig['screens'] = {
  sm: '320px',
  'max-sm': { max: '320px' },
  's-med': '480px',
  'max-s-med': { max: '480px' },
  med: '640px',
  'max-med': { max: '640px' },
  'xl-med': '760px',
  'max-xl-med': { max: '760px' },
  's-large': '960px',
  'max-s-large': { max: '960px' },
  large: '1040px',
  'max-large': { max: '1040px' },
  'xl-large': '1120px',
  'max-xl-large': { max: '1120px' },
  wide: '1200px',
  'max-wide': { max: '1200px' },
  portrait: { raw: '(orientation: portrait)' },
  landscape: { raw: '(orientation: landscape)' }
}
