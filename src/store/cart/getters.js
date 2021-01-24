export function getTotalPrice (state, getters) {
  return state.buyModule.priceAfterCouponCheck ?? getters['productsModule/getTotalPrice']
}

export function isLoading (state) {
  return state.buyModule.isLoading || state.buyModule.isCheckingCoupon
}
