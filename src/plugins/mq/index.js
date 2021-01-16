import { ref, unref } from 'vue'
import { subscribeToResize, initialQueryDetecting } from '@/plugins/mq/utils'

export default {
  install (app, options) {
    if (app.config.globalProperties.$mq) {
      return
    }
    if (typeof window === 'undefined') {
      app.config.globalProperties.$mq = 'no windown obj'

      return
    }

    const mq = ref('')

    initialQueryDetecting(options.breakpoints, mq)
    subscribeToResize(options.breakpoints, mq)

    app.mixin({
      computed: {
        $mq () {
          return unref(mq)
        }
      }
    })
  }
}
