import productTranformer from '@/utils/fromServerToCartProductTransformer'

export function changePrivilegeTypeInCart ({ state, rootState }, { id, newType }) {
  if (id !== 0 && !id) {
    return
  }

  const currentPrivilegeIndex = state.products.findIndex(product => product.id === id)

  if (~currentPrivilegeIndex) {
    state.products.splice(currentPrivilegeIndex, 1, productTranformer(rootState.products.products.find(product => product.name === newType)))
  } else {
    console.warn(`Can't find privilege with id: ${id} in cart to change type!`)
  }
}
