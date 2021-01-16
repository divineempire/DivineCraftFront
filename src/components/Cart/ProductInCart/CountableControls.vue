<template>
  <div class="countable-controls">
    <CountableInput
      v-model:value="amount"
      class="countable-controls__countable-input"
    />
  </div>
</template>

<script>
import CountableInput from '@/components/UI/CountableInput'

import { ref } from 'vue'

export default {
  name: 'CountableControls',
  components: {
    CountableInput
  },
  setup () {
    const amount = ref(1)

    return {
      amount
    }
  }
}
</script>

<style lang="scss" scoped>
.countable-controls {
  //width: 100%;
}
</style>
