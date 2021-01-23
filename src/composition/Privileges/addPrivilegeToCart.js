import { useStore } from 'vuex'

export default function (privilege) {
  const store = useStore()

  return {
    addPrivilegeToCart: () => {
      store.commit('cart/changeProductAmountInCart', {
        product: privilege.value,
        newAmount: 1
      })

      console.log(store.state.cart.products)
    }
  }
}
