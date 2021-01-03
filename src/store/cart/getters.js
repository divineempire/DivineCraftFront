export function getProductById (state) {
  return function (id) {
    return state.products.find(product => product.id === id)
  }
}
