import { computed } from 'vue'

export default function ({ store, privilegeName }) {
  const otherNames = computed(() => store.getters['privileges/getOtherPrivilegesNames'](privilegeName))

  otherNames.value.sort(() => 0.5 - Math.random())

  return {
    otherPrivileges: computed(() => otherNames.value.slice(0, 3)
      .map(name => {
        return store.getters['privileges/getPrivilegesByName'](name)[0]
      }))
  }
}
