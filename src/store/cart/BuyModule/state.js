export default function () {
  return {
    isLoading: false,
    priceAfterCouponCheck: null,
    isCheckingCoupon: false,
    coupon: '',
    email: {
      value: '',
      gotErrors: false
    },
    nickname: ''
  }
}
