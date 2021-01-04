export default {
  name: 'in-viewport',
  data: {
    mounted (el, { instance, value }) {
      if (!instance.$root.headerButton) {
        instance.$root.headerButton = document.querySelector('.header__burger-menu')
      }
      instance.$inViewportHandler = function () {
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= 0 && bottom >= 0) {
          instance.$store.commit('global/setActiveSection', value)
        }
      }
      instance.$inViewportHandler()
      window.addEventListener('scroll', instance.$inViewportHandler)
    },
    unmounted (el, { instance }) {
      window.removeEventListener('scroll', instance.$inViewportHandler)
    }
  }
}