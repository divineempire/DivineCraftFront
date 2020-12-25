<template>
  <button
    type="button"
    class="button"
    @click="$emit('click')"
  >
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'SimpleButton'
}
</script>

<style lang="scss" scoped>
</style>
