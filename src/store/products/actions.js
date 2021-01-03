export function loadProducts ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getProducts('MINECRAFT')
    .then(res => {
      commit('setProducts', res)
    })
    .finally(() => {
      commit('setIsLoading', false)
    })
}
