<template>
  <button
    class="burger-menu"
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
  emits: {
    click: null
  }
}
</script>

<style lang="scss" scoped>
.burger-menu {
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
    background-color: $accent
  }

  &--opened {
    .burger-menu {
      &__item:nth-child(2) {
        opacity: 0;
      }

      &__item:nth-child(1) {
        transform: translateY(7px) rotateZ(45deg);
        transform-origin: center;
      }

      &__item:nth-child(3) {
        transform: translateY(-7px) rotateZ(-45deg);
        transform-origin: center;
      }
    }
  }
}
</style>
