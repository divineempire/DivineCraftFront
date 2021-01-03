export function loadPrivileges ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getProducts('MINECRAFT')
    .then(res => {
      commit('setPrivileges', res)
    })
}
