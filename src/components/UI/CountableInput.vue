<template>
  <div class="countable-input">
    <button
      type="button"
      class="countable-input__button countable-input__button--minus"
      @click="decreaseValue"
    />
    <label
      class="countable-input__label"
    >
      <input
        ref="input"
        v-model="inputValue"
        type="number"
        :pattern="regexpForValidation"
        class="countable-input__input"
        :class="{'countable-input__input--focused': focused}"
        @keyup.enter="disableInput"
      >
    </label>
    <button
      type="button"
      class="countable-input__button countable-input__button--plus"
      @click="increaseValue"
    />
  </div>
</template>

<script>
import BaseInput from '@/components/abstract/BaseInput'

export default {
  name: 'CountableInput',
  mixins: [BaseInput],
  props: {
    regexpForValidation: {
      type: RegExp,
      require: false,
      default: /^[1-9]\d*/
    },
    validator: {
      type: Function,
      require: false,
      default () {
        return function (val) {
          return val >= 1
        }
      }
    },
    value: {
      type: [Number, String],
      require: true,
      default: 1
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (newVal) {
        if (!this.regexpForValidation.test(newVal) && this.validator(Number(newVal))) {
          this.$forceUpdate()
        } else if (newVal) {
          // eslint-disable-next-line
          this.$emit('update:value', parseInt(newVal, 10))
        }
      }
    }
  },
  methods: {
    increaseValue () {
      this.inputValue = this.value + 1
    },
    decreaseValue () {
      this.inputValue = this.value - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.countable-input {
  display: flex;
  align-items: center;
  justify-content: center;

  &__label {
    display: block;
    margin-right: 5px;
    margin-left: 5px;
  }

  &__input {
    @include transition(border, color, width);
    overflow: hidden;
    min-width: 50px;
    max-width: 100px;
    margin: 0;
    padding: 5px 10px;
    border: 2px solid var(--text-color);
    border-radius: 10px;
    background-color: transparent;
    color: var(--text-color);
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &--focused {
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    &:focus {
      outline: none;
    }
  }

  &__button {
    @include hover();
    @include transition(border-color);
    position: relative;
    width: 25px;
    height: 25px;
    border: 2px solid var(--text-color);
    border-radius: 5px;
    background-color: transparent;
    outline: none;

    &::before, &::after {
      @include transition(background-color);
      content: '';
      position: absolute;
      top: calc(50% - 1px);
      left: calc(50% - 5px);
      width: 10px;
      height: 2px;
      background-color: var(--text-color);
    }

    &::after {
      transform: rotate(90deg);
      transform-origin: center;
    }

    &--minus {
      &::after {
        display: none;
      }
    }
  }
}
</style>
