import { useStore } from 'vuex'
import { computed } from 'vue'

export default function (privilegeName) {
  const store = useStore()

  return {
    theCheapestPrivilege: computed(() => store.getters['privileges/getPrivilegesByName'](privilegeName)[0])
  }
}
