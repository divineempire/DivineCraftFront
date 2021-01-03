<template>
  <header
    class="header"
    :class="[isMenuShow ? 'header--opened' : 'header--closed']"
  >
    <BurgerMenu
      v-show="$mq === 'mobile'"
      class="header__burger-menu"
      @click="toggleMenu"
    />
    <div class="header__play-wrapper">
      <a
        href="#"
        class="header__play-link"
      />
    </div>
    <div class="header__nav-wrapper">
      <HeaderNav class="header__nav" />
    </div>
    <div class="header__basket-wrapper">
      <HeaderBasket class="header__basket" />
    </div>
  </header>
</template>

<script>
import menuLogic from '../../composition/Header/Menu'
import menuColor from '@/composition/Header/Colors'

import BurgerMenu from '@/components/Header/BurgerMenu'
import HeaderBasket from '@/components/Header/HeaderBasket'
import HeaderNav from '@/components/Header/HeaderNav'

export default {
  name: 'Header',
  components: {
    BurgerMenu,
    HeaderNav,
    HeaderBasket
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
  width: 100%;
  height: 100vh;
  padding-top: 5px;
  padding-left: 30px;
  background-color: transparent;
  transition: transform $transition;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    z-index: -1;
    width: calc(100% - 30px);
    height: 100vh;
    background-color: var(--back-color);
  }

  &__burger-menu {
    position: absolute;
    top: 5px;
    left: 5px;
  }

  &--closed {
    transform: translateX(calc(100% - 30px));
  }

  &--opened {
    transform: translateX(0);
  }
}
</style>
