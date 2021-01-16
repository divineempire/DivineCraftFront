import { useStore } from 'vuex'

export default function (privilege) {
  const store = useStore()

  console.log(privilege)

  return {
    addPrivilegeToCart: () => {
      store.commit('cart/changeProductAmountInCart', {
        product: privilege.value,
        newAmount: 1
      })
    }
  }
}
