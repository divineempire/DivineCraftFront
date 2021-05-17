export function loadPrivileges ({ commit }) {
  commit('setIsLoading', true)

  return this.$productsApi.getPrivileges()
    .then(res => {
      res.map(function (item) {
        item.meta.split(';').forEach(function (it) {
          if (it !== '') {
            const metaData = it.split(':')

            item[metaData[0]] = metaData.slice(1).join(':').trim()
          }
        })

        return item
      })
      commit('setPrivileges', res)
    })
}
