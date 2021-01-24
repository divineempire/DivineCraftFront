import { DARK_THEME } from '@/constants/themeNames'

export default function () {
  return {
    errorText: '',
    devErrorText: '',
    activeSection: '',
    headerColors: {
      banner: 'accent',
      privileges: 'text',
      products: 'accent',
      categories: 'text'
    },
    activeTheme: DARK_THEME
  }
}
