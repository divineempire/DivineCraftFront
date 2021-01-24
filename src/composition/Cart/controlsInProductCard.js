import { computed, ref } from 'vue'
import { getPrivilegeType, getPrivilegeName } from '@/utils/privilegeTypesUtils'

export const PRIVILEGE_CONTROLS = 'PrivilegeControls'
export const COUNTABLE_CONTROLS = 'CountableControls'

function providePrivilegeControls ({
  name,
  store,
  id
}) {
  return {
    modelValue: 'current-type',
    propsForControl: computed({
      get () {
        return getPrivilegeType(name.value)
      },
      set (newType) {
        store.dispatch('cart/productsModule/changePrivilegeTypeInCart', {
          id: id.value,
          newType: `${getPrivilegeName(name.value)}_${newType}`
        })
      }
    })
  }
}

function provideCountableControls ({
  amount,
  store,
  id
}) {
  return {
    modelValue: 'amount',
    propsForControl: computed({
      get () {
        return amount.value
      },
      set (newAmount) {
        store.commit('cart/productsModule/changeProductAmountInCart', {
          id: id.value,
          newAmount
        })
      }
    })
  }
}

export default function ({
  countable = ref(false),
  category = ref(''),
  amount = ref(1),
  id = ref(-1),
  name,
  store
}) {
  const isPrivilege = computed(() => category.value === '' || category.value === 'priv')
  const needControls = computed(() => countable.value || isPrivilege.value)
  const controlsType = computed(() => {
    if (needControls.value) {
      return isPrivilege.value ? PRIVILEGE_CONTROLS : COUNTABLE_CONTROLS
    }

    return ''
  })
  const {
    modelValue,
    propsForControl
  } = controlsType.value === PRIVILEGE_CONTROLS
    ? providePrivilegeControls({ store, name, id })
    : provideCountableControls({ store, amount, id })

  return {
    modelValue,
    needControls,
    controlsType,
    propsForControl
  }
}
