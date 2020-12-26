const selectQuery = (keys, options, mq) => {
  keys.forEach(key => {
    // console.log(window.matchMedia(`(min-width: ${options[key]}px)`))
    if (window.matchMedia(`(min-width: ${options[key]}px)`).matches) {
      mq.value = key
    }
  })
}

export function subscribeToResize (options, mq) {
  const keys = Object.keys(options)
  window.addEventListener('resize', () => {
    selectQuery(keys, options, mq)
  })
}

export function initialQueryDetecting (options, mq) {
  const keys = Object.keys(options)
  selectQuery(keys, options, mq)
}
