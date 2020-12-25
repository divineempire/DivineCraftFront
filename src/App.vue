<template>
  <div
    id="app"
    class="app"
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
  }

}
</script>
<style lang="scss">
.app {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('~st/images/main_back.png');
  background-size: cover;
  background-repeat: no-repeat;

  &__body {
    flex-grow: 1;
  }
}
</style>
