export function categories (state, getters, rootState) {
  return Array.from(new Set(rootState.products.products.map(product => product.category))).filter(category => category !== '' && category !== 'priv')
}

export function getProductsForCurrentCategory (state, getters, rootState) {
  return rootState['products/products'].filter(product => product.category === state.currentCategory)
}

export function getMetaForCategory (state) {
  return function (category) {
    return state.categoriesMeta[category]
  }
}
