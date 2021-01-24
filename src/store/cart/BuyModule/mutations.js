import { setIsLoading } from '@/utils/storeMixin'

export { setIsLoading }

export function setCoupon (state, payload) {
  state.isCheckingCoupon = !!payload
  state.coupon = payload
}

export function setPriceAfterCouponCheck (state, payload) {
  state.priceAfterCouponCheck = payload
}

export function setIsCheckingCoupon (state, payload) {
  state.isCheckingCoupon = payload
}

export function setEmailValue (state, payload) {
  state.email.value = payload
}

export function setEmailGotErrors (state, payload) {
  state.email.gotErros = payload
}

export function setNickname (state, payload) {
  state.nickname = payload
}
