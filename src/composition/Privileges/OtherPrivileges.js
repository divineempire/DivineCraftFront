import { computed, unref } from 'vue'
import { useStore } from 'vuex'

export default function (privilegeName) {
  const otherNames = computed(() => store.getters['privileges/getOtherPrivilegesNames'](unref(privilegeName)))
  const store = useStore()

  otherNames.value.sort(() => 0.5 - Math.random())

  return computed(() => otherNames.value.slice(0, 3)
    .map(name => {
      return store.getters['privileges/getPrivilegesByName'](name)[0]
    }))
}
