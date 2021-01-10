export function getPrivileges (state, getters, rootState) {
  return rootState.products.products.filter(product => product.category === 'priv' || product.category === '')
}

export function getPrivilegesNames (state, getters) {
  return Array.from(new Set(getters.getPrivileges.map(privilege => privilege.displayName)))
}

export function getOtherPrivilegesNames (state, getters) {
  return function (privilegeName) {
    return getters.getPrivilegesNames.filter(name => name !== privilegeName)
  }
}

export function getPrivilegesByName (state, getters) {
  return function (privilegeName) {
    return getters.getPrivileges.filter(privilege => privilege.displayName === privilegeName).sort((first, second) => first.price - second.price)
  }
}
