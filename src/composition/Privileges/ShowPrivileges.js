import { computed } from 'vue'
import { useStore } from 'vuex'

export default function () {
  const store = useStore()
  const privilegesNames = computed(() => store.getters['privileges/getPrivilegesNames'])
  const isLoading = computed(() => store.state.products.isLoading)

  return {
    privilegesNames,
    isLoading
  }
}
