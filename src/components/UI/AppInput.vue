<template>
  <div class="input-group">
    <input
      v-model="_value"
      class="input-group__input"
      :required="required"
      :placeholder="placeholder"
      :type="type"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      require: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      require: false,
      default: ''
    },
    value: {
      type: String,
      require: true
    },
    required: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
