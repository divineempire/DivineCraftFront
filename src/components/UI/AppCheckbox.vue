<template>
  <div class="app-checkbox">
    <div
      class="app-checkbox__indicator"
      :class="{'app-checkbox__indicator--checked': checked}"
      @click="toggleChecked"
    >
      <svg
        class="app-checkbox__icon"
        width="20"
        height="20"
      >
        <use xlink:href="#checked" />
      </svg>
    </div>
    <label class="app-checkbox__label">
      <input
        ref="input"
        class="app-checkbox__input visually-hidden"
        type="checkbox"
        :checked="checked"
        @click="toggleChecked"
      >
      <p class="app-checkbox__text">
        <slot />
      </p>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    checked: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  emits: ['update:checked'],
  methods: {
    toggleChecked () {
      this.$emit('update:checked', !this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-checkbox {
  $self: &;
  display: flex;
  align-items: center;

  &__indicator {
    @include transition(border-color, background-color);
    @include hover();
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 1px solid var(--text-color);
    border-radius: 5px;
    background-color: transparent;

    &--checked {
      border-color: transparent;
      #{$self}__icon {
        opacity: 1;
      }
    }
  }

  &__icon {
    @include transition(opacity);
    opacity: 0;
  }

  &__label {
    @include hover();
    display: block;
  }

  &__text {
    @include transition(color);
    margin: 0;
    color: var(--text-color);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
