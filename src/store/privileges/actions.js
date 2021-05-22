export function loadPrivileges ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getPrivileges()
    .then(res => {
      res.map(function (item) {
        item.meta = JSON.parse(item.meta)

        return item
      })
      commit('setPrivileges', res)
    })
}
