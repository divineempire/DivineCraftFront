import { onMounted } from 'vue'

export default function (store) {
  onMounted(() => store.dispatch('products/loadProducts'))
}
