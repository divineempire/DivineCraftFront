<template>
  <div class="copy">
    <p class="copy__text">
      {{ text }}
    </p>
    <svg
      class="copy__icon"
      @click="copy"
    >
      <use xlink:href="#copy" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Copy',
  props: {
    text: {
      type: String,
      require: false,
      default: ''
    }
  },
  methods: {
    copy () {
      window.navigator.clipboard.writeText(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
