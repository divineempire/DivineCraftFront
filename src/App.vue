<template>
  <div
    id="app"
    class="app"
    :class="tmp ? 'app--dark-theme' : 'app--light-theme'"
  >
    <Header />
    <router-view class="app__body" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      tmp: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.tmp = false
    }, 3000)
  }
}
</script>
<style lang="scss">
.app {
  &--dark-theme {
    @import "assets/css/dark-theme";
    --main-color: #{$main-black};
  }

  &--light-theme {
    @import "assets/css/light-theme";
    --main-color: #{$main-white};
  }
}
</style>
