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
