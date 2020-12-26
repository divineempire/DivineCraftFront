<template>
  <header class="header">
    <div class="header__play">
      <a
        href="#"
        class="header__play-link"
      />
    </div>
    <div class="header__nav">
      <HeaderNav />
    </div>
    <div class="header__basket">
      <HeaderBasket />
    </div>
  </header>
</template>

<script>
import HeaderNav from '@/components/Header/HeaderNav'

export default {
  name: 'Header',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss" scoped>
</style>
