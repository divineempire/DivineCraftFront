<template>
  <nav
    class="nav"
    :class="`nav--${color}`"
  >
    <a
      href="#"
      class="nav__play-link"
    >
      play.divinecraft.ru
    </a>
    <router-link
      class="nav__main nav__link"
      to="/"
    >
      Главная
    </router-link>
    <a
      class="nav__link"
      href="#"
    >
      Донат
    </a>
    <a
      class="nav__link"
      href="#"
    >
      Правила
    </a>
    <a
      class="nav__link"
      href="#"
    >
      Вконтакте
    </a>
    <a
      class="nav__link"
      href="#"
    >
      Дискорд
    </a>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    color: {
      type: String,
      require: true,
      default: 'accent'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    display: block;
    margin-bottom: 10px;
    color: var(--text-color);
    font-size: 18px;
    font-family: $second-font;
    line-height: 21px;
    text-decoration: none;
    transition: color $transition;
  }

  &__link:last-child {
    margin-bottom: 0;
  }

  &__play-link {
    display: block;
    margin-bottom: 10px;
    color: $blue;
    font-size: 14px;
    line-height: 21px;
  }

  &--accent {
    .nav {
      &__link {
        color: $accent;
      }
    }
  }

  &--text {
    .nav {
      &__link {
        color: var(--text-color);
      }
    }
  }
}
</style>
