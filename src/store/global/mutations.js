export function setErrorText (state, payload) {
  state.errorText = payload
}

export function setDevErrorText (state, payload) {
  state.devErrorText = payload
}

export function setActiveSection (state, payload) {
  console.log('setting active section ', payload)
  state.activeSection = payload
}
