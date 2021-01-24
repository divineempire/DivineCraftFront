export function productsForServer (state, getters, rootState) {
  const idsInCart = new Set(rootState.cart.productsModule.products.map(product => product.id))

  return rootState.products.products.filter(product => idsInCart.has(product.id))
}
