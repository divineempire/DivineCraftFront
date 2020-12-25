<template>
  <button
    type="button"
    class="colored-button"
    :class="[colorClass, transparentClass]"
    @click="$emit('click')"
  >
    <span class="colored-button__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'ColoredButton',
  props: {
    text: {
      type: String,
      require: false,
      default: ''
    },
    color: {
      type: String,
      require: false,
      default: 'default'
    },
    isTransparent: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  computed: {
    colorClass () {
      return `colored-button--${this.color}`
    },
    transparentClass () {
      return this.isTransparent ? 'colored-button--transparent' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
