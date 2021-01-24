import { DARK_THEME, LIGHT_THEME } from '@/constants/themeNames'
import { computed } from 'vue'

export default function (store) {
  return {
    themeSwitcher: computed({
      get () {
        return store.state.global.activeTheme === LIGHT_THEME
      },
      set (newVal) {
        store.commit('global/setActiveTheme', newVal ? LIGHT_THEME : DARK_THEME)
      }
    })
  }
}
