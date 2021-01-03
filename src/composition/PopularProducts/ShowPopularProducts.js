import { useStore } from 'vuex'
import { computed } from 'vue'

export default function () {
  const store = useStore()

  return {
    popularProducts: computed(() => store.getters['products/getPopularProducts'])
  }
}
