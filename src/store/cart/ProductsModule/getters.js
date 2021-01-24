import { INSURANCE as INSURANCE_ID } from '@/constants/productsIds'

export function getProductById (state) {
  return function (id) {
    return state.products.find(product => product.id === id)
  }
}

export function getTotalAmountInCart (state) {
  return state.products.reduce((accum, product) => {
    return accum + (product.countable ? product.amount : 1)
  }, 0)
}

export function getTotalPrice (state) {
  return state.products.reduce((result, product) => {
    return result + product.productDisplayData.price
  }, 0)
}

export function isInsuranceInCart (state) {
  return !!state.products.find(product => product.id === INSURANCE_ID)
}
