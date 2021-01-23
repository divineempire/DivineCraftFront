<template>
  <div class="countable-controls">
    <CountableInput
      v-model:value="innerAmount"
      class="countable-controls__countable-input"
    />
  </div>
</template>

<script>
import CountableInput from '@/components/UI/CountableInput'

import { computed, toRefs } from 'vue'

export default {
  name: 'CountableControls',
  components: {
    CountableInput
  },
  props: {
    amount: {
      type: Number,
      require: true,
      default: 1
    }
  },
  emits: {
    'update:amount': null
  },
  setup (props, { emit }) {
    const { amount } = toRefs(props)
    const innerAmount = computed({
      get () {
        return amount.value
      },
      set (newVal) {
        emit('update:amount', newVal)
      }
    })

    return {
      innerAmount
    }
  }
}
</script>

<style lang="scss" scoped>
.countable-controls {
  //width: 100%;
}
</style>
