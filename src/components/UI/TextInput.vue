<template>
  <div class="text-input">
    <label
      class="text-input__label"
    >
      <input
        ref="input"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        class="text-input__input"
        :class="{'text-input__input--focused': focused}"
        @keyup.enter="disableInput"
      >
    </label>
  </div>
</template>

<script>
import BaseInput from '@/components/abstract/BaseInput'

export default {
  name: 'TextInput',
  mixins: [BaseInput],
  props: {
    regexpForValidation: {
      type: RegExp,
      require: false,
      default: /^.+/
    },
    placeholder: {
      type: String,
      require: false,
      default: ''
    },
    gotErrors: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  emits: ['update:got-errors'],
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('update:got-errors', !this.regexpForValidation.test(newVal))
        // eslint-disable-next-line
        this.$emit('update:value', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  align-items: center;
  justify-content: center;

  &__label {
    display: block;
    width: 100%;
  }

  &__input {
    @include transition(border, color, width);
    overflow: hidden;
    width: 100%;
    min-width: 50px;
    margin: 0;
    padding: 5px 10px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    background-color: transparent;
    color: var(--text-color);
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &::placeholder {
      color: $grey;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
    }

    &--focused {
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
