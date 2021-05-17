export function loadProducts ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getProducts()
    .then(res => {
      res.map(function (item) {
        if (item.meta !== undefined) {
          item.meta.split(';').forEach(function (it) {
            if (it !== '') {
              const metaData = it.split(':')

              item[metaData[0]] = metaData.slice(1).join(':').trim()
            }
          })
        }

        return item
      })

      commit('setProducts', res)
    })
    .finally(() => {
      commit('setIsLoading', false)
    })
}
