<template>
  <header
    class="header"
    :class="[isMenuShow ? 'header--opened' : 'header--closed', `header--${color}`]"
  >
    <BurgerMenu
      v-show="$mq === 'mobile'"
      :color="color"
      :is-open="isMenuShow"
      class="header__burger-menu"
      @click="toggleMenu"
    />
    <div class="header__navigation">
      <HeaderNav
        class="header__nav"
        :color="color"
      />
      <HeaderCart
        class="header__basket"
        :color="color"
      />
    </div>
  </header>
</template>

<script>
import menuLogic from '../../composition/Header/Menu'
import menuColor from '@/composition/Header/Colors'

import BurgerMenu from '@/components/Header/BurgerMenu'
import HeaderCart from '@/components/Header/HeaderCart'
import HeaderNav from '@/components/Header/HeaderNav'

export default {
  name: 'Header',
  components: {
    BurgerMenu,
    HeaderNav,
    HeaderCart
  },
  setup () {
    const { isMenuShow, toggleMenu } = menuLogic()
    const { color } = menuColor()

    return {
      color,
      isMenuShow,
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 50%;
  padding-left: 30px;
  background-color: transparent;
  transition: transform $transition, background-color $transition;

  &__burger-menu {
    position: absolute;
    top: 15px;
    left: 5px;
  }

  &__nav {
    margin-bottom: 20px;
  }

  &__navigation {
    position: relative;
    padding-top: 5px;
    padding-left: 15px;
    transition: opacity $transition;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -30px;
      z-index: -1;
      display: block;
      width: calc(100% + 30px);
      height: calc(100% + 80px);
      background: var(--header-accent-gradient);
      transition: opacity $transition, background $transition;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -30px;
      z-index: -1;
      display: block;
      width: calc(100% + 30px);
      height: calc(100% + 80px);
      background: var(--header-gradient);
      transition: opacity $transition, background $transition;
    }
  }

  &--closed {
    transform: translateX(calc(200% - 30px));

    .header__navigation::before, .header__navigation::after {
      opacity: 0;
    }
  }

  &--opened {
    transform: translateX(100%);
  }

  &--opened#{&}--accent {
    .header__navigation::before {
      opacity: 1;
    }

    .header__navigation::after {
      opacity: 0;
    }
  }

  &-opened#{&}--text {
    .header__navigation::before {
      opacity: 0;
    }

    .header__navigation::after {
      opacity: 1;
    }
  }
}
</style>
