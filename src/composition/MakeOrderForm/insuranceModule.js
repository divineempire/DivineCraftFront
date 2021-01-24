import { computed } from 'vue'
import { useStore } from 'vuex'

export default function () {
  const store = useStore()
  const isInsuranceChecked = computed({
    get () {
      return store.getters['cart/productsModule/isInsuranceInCart']
    },
    set (newVal) {
      if (newVal) {
        store.commit('cart/productsModule/changeProductAmountInCart', {
          product: insurance,
          newAmount: 1
        })
      } else {
        store.commit('cart/productsModule/removeProductFromCart', insurance.id)
      }
    }
  })
  const insurance = store.getters['products/getInsurance']

  return {
    isInsuranceChecked,
    insurancePrice: insurance?.price ?? 0
  }
}
