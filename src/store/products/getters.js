export function getPopularProducts (state) {
  return state.products.filter(product => product.category !== 'priv' && product.category !== '').slice(0, 5)
}

export function getProductsByCategory (state) {
  return function (category) {
    return state.products.filter(product => product.category === category)
  }
}
