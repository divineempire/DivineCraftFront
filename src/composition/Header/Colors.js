import { useStore } from 'vuex'
import { computed } from 'vue'

export default function () {
  const store = useStore()
  return {
    color: computed(() => store.getters['global/currentColorForHeader'])
  }
}
