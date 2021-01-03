import { ref } from 'vue'

export default function () {
  const isMenuShow = ref(false)
  const openMenu = function () {
    isMenuShow.value = true
  }
  const closeMenu = function () {
    isMenuShow.value = false
  }
  const toggleMenu = function () {
    isMenuShow.value ? closeMenu() : openMenu()
  }

  return {
    isMenuShow,
    toggleMenu
  }
}
