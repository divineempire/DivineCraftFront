export default {
  name: 'in-viewport',
  data: {
    mounted (el, { instance, value }) {
      if (!instance.$inViewportHandler) {
        instance.$inViewportHandler = function () {
          let needCheck = true

          instance.$inViewportElementsList.forEach(element => {
            if (needCheck) {
              const { top, bottom } = element.el.getBoundingClientRect()

              if (top <= 0 && bottom >= 0 && instance.$store.state.global.activeSection !== element.value) {
                instance.$store.commit('global/setActiveSection', element.value)
                needCheck = false
              }
            }
          })
        }
      }
      if (!instance.$inViewportElementsList) {
        instance.$inViewportElementsList = []
      }
      instance.$inViewportElementsList.push({
        el,
        value
      })
      instance.$inViewportHandler()
      window.addEventListener('scroll', instance.$inViewportHandler)
    },
    unmounted (el, { instance }) {
      window.removeEventListener('scroll', instance.$inViewportHandler)
    }
  }
}
