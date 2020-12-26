<template>
  <div
    id="app"
    class="app app--light-theme"
  >
    <Header />
    <router-view class="app__body" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
.app {
  &--dark-theme {
    @import "assets/css/dark-theme";
    --back-color: #{$main-black};
  }

  &--light-theme {
    @import "assets/css/light-theme";
    --back-color: #{$main-white};
    --text-colro: #{$main-black};
  }
}
</style>
