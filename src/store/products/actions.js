export function loadProducts ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getProducts()
    .then(res => {
      res.map(function (item) {
        if (item.meta !== undefined) {
          item.meta = JSON.parse(item.meta)
        }

        return item
      })

      commit('setProducts', res)
    })
    .finally(() => {
      commit('setIsLoading', false)
    })
}
