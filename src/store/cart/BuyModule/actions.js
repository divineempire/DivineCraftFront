export function checkAvailability (ctx, payload) {
  return this.$productsApi.checkAvailability(payload)
    .then(res => {
      return res.available
    })
}

export function tryToBuy ({ dispatch, getters, commit }) {
  commit('setIsLoading', true)

  return dispatch('checkAvailability', getters.productsForServer)
    .then(res => {
      if (res) {
        return dispatch('buyProducts')
      } else {
        throw new Error('not available')
      }
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      commit('setIsLoading', false)
    })
}

export function buyProducts ({ state }) {
  return this.$productsApi.buyProducts({
    email: state.email,
    products: [
      {
        productId: state.currentAccountToBuy.id,
        amount: 1
      }
    ]
  })
}

export function checkLastPurchases (ctx, payload) {
  return this.$productsApi.checkLastPurchases(payload)
}

export function checkCoupon ({ state, commit, getters }) {
  commit('setIsLoading', true)

  this.$productsApi.checkCoupon({
    coupon: state.coupon,
    products: getters.productsForServer
  })
    .then(res => {
      commit('setCoupon', res.price)
    })
    .catch(err => {
      commit('setPriceAfterCouponCHeck', null)
      throw new Error(err)
    })
    .finally(() => {
      commit('setIsCheckingCoupon', false)
      commit('setIsLoading', false)
    })
}
