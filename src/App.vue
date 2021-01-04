<template>
  <div
    class="app app--dark-theme"
  >
    <Header />
    <router-view class="app__body" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'

import { computed } from 'vue'
import { useStore } from 'vuex'
import LoadProducts from '@/composition/App/LoadProducts'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
    LoadProducts()

    const store = useStore()

    return {
      err: computed(() => store.state.global.errorText)
    }
  }
}
</script>
<style lang="scss">
.app {
  @import "assets/css/mixins.scss";

  position: relative;
  width: 100%;
  max-width: 100%;

  &--dark-theme {
    @import "assets/css/dark-theme.scss";
    @include theme($back-color, $text-color, $header-color, $header-accent-color);
  }

  &--light-theme {
    @import "assets/css/light-theme.scss";
    @include theme($back-color, $text-color, $header-color, $header-accent-color);
  }
}
</style>
