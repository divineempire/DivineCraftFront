<template>
  <a
    class="nav__play-link"
    href="#"
  >
    play.divinecraft.ru
  </a>
  <nav class="nav">

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
    <router-link
      to="/terms-of-use"
      class="nav__link"
      href="#"
    >
      Правила
    </router-link>
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
  name: 'HeaderNav'
  // props: {
  //   color: {
  //     type: String,
  //     require: true,
  //     default: 'accent'
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .nav__play-link {
    display: block;
    margin-bottom: 10px;
    color: $blue;
    font-size: 14px;
    line-height: 21px;
  }

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

    &--text {
      .nav {
        &__link {
          color: var(--text-color);
        }
      }
    }
  }

  @media($laptop) {
    .nav__play-link {
      display: block;
      width: calc(calc(100% / 12) * 3);
      margin-bottom: 0px;
      color: $accent;
      font-size: 14px;
      line-height: normal;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(calc(100% / 12) * 6);

      &__link {
        display: block;
        margin-bottom: 0px;
        color: var(--text-color);
        font-size: 18px;
        font-family: $second-font;
        line-height: normal;
        text-decoration: none;
        transition: color $transition;
      }

      &__link:last-child {
        margin-bottom: 0;
      }

      &--text {
        .nav {
          &__link {
            color: var(--text-color);
          }
        }
      }
    }
  }
</style>
