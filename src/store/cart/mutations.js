import { setLoadingStatus } from '@/utils/storeMixin'
import { changePrivilegeType } from '@/utils/privilegeTypesUtils'

export { setLoadingStatus }

export function changePrivilegeTypeInCart (state, { id, newType }) {
  if (id !== 0 && !id) {
    return
  }

  const privilege = state.products.find(product => product.id === id)

  if (privilege) {
    console.log(changePrivilegeType(privilege.name, newType))
    privilege.name = changePrivilegeType(privilege.name, newType)
  } else {
    console.warn(`Can't find privilege with id: ${id} in cart to change type!`)
  }
}

export function removeProductFromCart (state, payload) {
  const productId = payload.id || payload
  const indexInCart = state.products.findIndex(product => product.id === productId)

  if (~indexInCart) {
    state.products.splice(indexInCart, 1)
  } else {
    console.warn(`Can't remove product with id ${productId} from cart`)
  }
}

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
  const { product, id, newAmount } = payload
  const productInCart = state.products.find((item, index) => {
    if (product) {
      if (item.id === product.id) {
        productIndex = index
      }
    }

    if (id) {
      if (item.id === id) {
        productIndex = index
      }
    }

    return item.id === (id || product.id)
  })

  if (productInCart) {
    changeAmount(productInCart, newAmount)
  } else if (newAmount > 0) {
    const { id, countable, type, category, name, ...productDisplayData } = product

    state.products.push({
      id,
      countable,
      productType: type,
      category,
      name,
      amount: 1,
      productDisplayData
    })
  }
}
