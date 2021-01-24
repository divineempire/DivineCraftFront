import { useStore } from 'vuex'

export default function (privilege) {
  const store = useStore()

  return {
    addPrivilegeToCart: () => {
      store.commit('cart/productsModule/changeProductAmountInCart', {
        product: privilege.value,
        newAmount: 1
      })
    }
  }
}
