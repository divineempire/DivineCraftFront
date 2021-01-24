<template>
  <button
    :type="type"
    class="button"
    :class="{'button--disabled': isDisabled, [`button--${color}`]: !!color}"
    @click="$emit('click')"
  >
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    isLoading: {
      type: Boolean,
      require: false,
      default: false
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    },
    type: {
      type: String,
      require: false,
      default: 'button'
    },
    color: {
      type: String,
      require: false,
      default: 'gold'
    }
  },
  emits: ['click'],
  computed: {
    isDisabled () {
      return this.isLoading || this.disabled
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include transition(background-color, opacity);
  @include hover();
  display: block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  outline: none;

  &__text {
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }

  &--gold {
    background-color: $gold;
  }

  &--accent {
    background-color: var(--accent-color);
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
