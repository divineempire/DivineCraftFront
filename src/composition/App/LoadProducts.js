import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default function () {
  const store = useStore()

  onMounted(() => store.dispatch('products/loadProducts'))
}
