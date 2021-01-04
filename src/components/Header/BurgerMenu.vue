<template>
  <button
    class="burger-menu"
    :class="[`burger-menu--${color}`, isOpen ? 'burger-menu--opened' : 'burger-menu--closed']"
    @click="$emit('click')"
  >
    <span class="burger-menu__item" />
    <span class="burger-menu__item" />
    <span class="burger-menu__item" />
  </button>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    color: {
      type: String,
      require: true,
      default: 'accent'
    },
    isOpen: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  emits: {
    click: null
  }
}
</script>

<style lang="scss" scoped>
.burger-menu {
  $self: &;

  @keyframes first-line-to-close {
    0% {
      transform: translateY(0) rotate(0);
    }

    50% {
      transform: translateY(7px) rotate(0);
    }

    100% {
      transform: translateY(7px) rotate(45deg);
    }
  }

  @keyframes first-line-to-open {
    0% {
      transform: translateY(7px) rotate(45deg);
    }

    50% {
      transform: translateY(7px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  @keyframes middle-line-to-close {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes middle-line-to-open {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes last-line-to-close {
    0% {
      transform: translateY(0) rotate(0);
    }

    50% {
      transform: translateY(-7px) rotate(0);
    }

    100% {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  @keyframes last-line-to-open {
    0% {
      transform: translateY(-7px) rotate(-45deg);
    }

    50% {
      transform: translateY(-7px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 16px;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;

  &__item {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    transition: background-color $transition, transform $transition;
  }

  &--opened {
    #{$self} {
      &__item:first-child {
        animation: first-line-to-close $transition forwards;
      }

      &__item:nth-child(2) {
        animation: middle-line-to-close $transition forwards;
      }

      &__item:last-child {
        animation: last-line-to-close $transition forwards;
      }
    }
  }

  &--closed {
    #{$self} {
      &__item:first-child {
        animation: first-line-to-open $transition forwards;
      }

      &__item:nth-child(2) {
        animation: middle-line-to-open $transition forwards;
      }

      &__item:last-child {
        animation: last-line-to-open $transition forwards;
      }
    }
  }

  &--accent {
    #{$self} {
      &__item {
        background-color: $accent;
      }
    }
  }

  &--text {
    #{$self} {
      &__item {
        background-color: var(--text-color);
      }
    }
  }
}
</style>
