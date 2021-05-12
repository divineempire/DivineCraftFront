<template>
  <header
    class="header"
    v-if="$mq === 'mobile'"
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
      />
      <HeaderCart
        class="header__basket"
        :color="color"
      />
      <!--      <Switcher-->
      <!--        v-model:is-checked="themeSwitcher"-->
      <!--        class="header__switcher"-->
      <!--      />-->
    </div>
  </header>
  <header
    class="header"
    v-else
  >
    <div class="header__navigation">
      <HeaderNav
        :color="color"
        class="header__nav"
      />
      <HeaderCart
        :color="color"
        class="header__basket"
      />
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex'

import menuLogic from '../../composition/Header/Menu'
import menuColor from '@/composition/Header/Colors'
// import themeSwitcherLogic from '@/composition/Header/themeSwitcherLogic'

import BurgerMenu from '@/components/Header/BurgerMenu'
import HeaderCart from '@/components/Header/HeaderCart'
import HeaderNav from '@/components/Header/HeaderNav'
// import Switcher from '@/components/UI/Switcher'

export default {
  name: 'Header',
  components: {
    BurgerMenu,
    HeaderNav,
    HeaderCart
    // Switcher
  },
  setup () {
    const store = useStore()
    const { isMenuShow, toggleMenu } = menuLogic()
    const { color } = menuColor(store)
    // const { themeSwitcher } = themeSwitcherLogic(store)

    return {
      color,
      isMenuShow,
      toggleMenu
      // themeSwitcher
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

  &__nav, &__basket {
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

@media ($laptop) {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding-left: 0px;
    background-color: #252525;
    box-shadow: 0px 1px 20px -5px rgba(0, 0, 0, 0.35);
    transition: transform $transition, background-color $transition;

    &::before, &::after {
      display: none;
    }

    &__nav, &__basket {
      margin-bottom: 0px;
    }

    &__navigation {
      position: relative;
      display: flex;
      align-items: center;
      width: $content-width;
      height: 70px;
      margin: 0 auto;
      padding-top: 0;
      padding-left: 0;
      transition: opacity $transition;

      &::before, &::after {
        display: none;
      }
    }
  }
}
</style>
