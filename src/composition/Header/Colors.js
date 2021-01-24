import { computed } from 'vue'

export default function (store) {
  return {
    color: computed(() => store.getters['global/currentColorForHeader'])
  }
}
