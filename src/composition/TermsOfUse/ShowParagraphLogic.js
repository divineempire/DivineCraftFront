import { ref, onMounted, watch, toRef } from 'vue'

export default function (props, emit) {
  const depth = toRef(props, 'depth')
  const isOpen = ref(false)
  const paragraphRef = ref('')
  const listRef = ref('')
  const animatorRef = ref('')
  const showHeight = ref('0px')
  let listHeight = 0
  const toggleOpenState = () => {
    isOpen.value = !isOpen.value
  }
  const addHeight = evt => {
    animatorRef.value.style.height = `${animatorRef.value.clientHeight + evt}px`
  }
  const removeHeight = evt => {
    animatorRef.value.style.height = `${animatorRef.value.clientHeight - evt}px`
  }

  onMounted(() => {
    listHeight = listRef.value.clientHeight
  })

  watch(() => isOpen.value, newVal => {
    if (newVal) {
      animatorRef.value.style.height = showHeight.value = `${listHeight}px`
      if (depth.value >= 1) {
        emit('add-height', listHeight)
      }
    } else {
      animatorRef.value.style.height = showHeight.value = '0px'
      if (depth.value >= 1) {
        emit('remove-height', listHeight)
      }
    }
  })

  return {
    isOpen,
    paragraphRef,
    listHeight,
    listRef,
    animatorRef,
    showHeight,
    addHeight,
    removeHeight,
    toggleOpenState
  }
}
