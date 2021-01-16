import { setLoadingStatus } from '@/utils/storeMixin'

export { setLoadingStatus }

export function changeProductAmountInCart (state, payload) {
  const changeAmount = (product, newAmount) => {
    if (newAmount === 0 && productIndex !== -1) {
      state.products.splice(productIndex, 1)

      return
    }
    if (product.countable) {
      product.amount = newAmount
    }
  }
  let productIndex = -1
  const { product, newAmount } = payload
  const productInCart = state.products.find((item, index) => {
    if (item.id === product.id) {
      productIndex = index
    }

    return item.id === product.id
  })

  if (productInCart) {
    changeAmount(productInCart, newAmount)
  } else if (newAmount > 0) {
    const { id, countable, type, ...productDisplayData } = product

    state.products.push({
      id,
      countable,
      productType: type,
      amount: 1,
      productDisplayData
    })
  }
}
