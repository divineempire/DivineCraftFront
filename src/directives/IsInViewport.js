let handler

export default {
  name: 'in-viewport',
  data: {
    mounted (el, { instance, value }) {
      handler = function () {
        if (el.getBoundingClientRect().top === 0) {
          instance.$store.commit('global/setActiveSection', value)
        }
      }
      handler()
      window.addEventListener('scroll', handler)
    },
    unmounted () {
      window.removeEventListener('scroll', handler)
    }
  }
}
