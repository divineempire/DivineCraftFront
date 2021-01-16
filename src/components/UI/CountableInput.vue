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
        :class="{'countable-input__input--disabled': disabled}"
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
export default {
  name: 'CountableInput',
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
  emits: {
    'update:value': payload => !!payload
  },
  data () {
    return {
      disabled: true
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (newVal) {
        if (!this.regexpForValidation.test(newVal) && this.validator(newVal)) {
          this.$forceUpdate()
        } else if (newVal) {
          this.$emit('update:value', parseInt(newVal, 10))
        }
      }
    }
  },
  mounted () {
    window.addEventListener('click', this.inputClickHandler)
  },
  unmounted () {
    window.removeEventListener('click', this.inputClickHandler)
  },
  methods: {
    disableInput () {
      this.disabled = true
    },
    increaseValue () {
      this.inputValue = this.value + 1
    },
    decreaseValue () {
      this.inputValue = this.value - 1
    },
    inputClickHandler (evt) {
      if (this.disabled && evt.target === this.$refs.input) {
        this.disabled = false

        return
      }

      if (!this.disabled && evt.target !== this.$refs.input) {
        this.disabled = true
        this.$refs.input.blur()
      }
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
    border: 2px solid $accent;
    border-radius: 10px;
    background-color: transparent;
    color: $accent;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &--disabled {
      border-color: var(--text-color);
      color: var(--text-color);
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
