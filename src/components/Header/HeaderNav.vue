<template>
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
  name: 'HeaderNav'
}
</script>

<style lang="scss" scoped>
.nav {
  padding-left: 15px;
  &__link {
    display: block;
    margin-bottom: 15px;
    color: var(--text-color);
    font-size: 18px;
    font-family: $second-font;
    line-height: 21px;
    text-decoration: none;
  }
}
</style>
