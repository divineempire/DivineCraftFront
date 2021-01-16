<template>
  <section class="welcome-banner">
    <div class="container">
      <div class="welcome-banner__info">
        <h1 class="welcome-banner__header">
          DivineCraft — самый динамично растущий Minecraft проект
        </h1>
        <p class="welcome-banner__text">
          У нас вы можете весело провести время на таких режимах, как: BrawlStars, SkyWars, BedWars, Анархия
        </p>
      </div>
      <div class="welcome-banner__logo-wrapper">
        <picture>
          <source
            :media="`(${retinaQueryWithoutQuotes})`"
            :srcset="require('st/images/logo@2x.png')"
          >
          <img
            class="welcome-banner__logo"
            src="~st/images/logo@1x.png"
          >
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
import { retinaQuery } from '@/assets/css/vars.scss'
export default {
  name: 'WelcomeBanner',
  data () {
    return {
      retinaQuery
    }
  },
  computed: {
    retinaQueryWithoutQuotes () {
      return this.retinaQuery.replace(/["]/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-banner {
  @include back-retina('main/welcome-banner');
  width: 100%;
  max-width: 100%;
  min-height: 690px;
  padding-top: 30px;

  &__header, &__text {
    margin: 0;
    color: $white;
  }

  &__header {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
  }

  &__text {
    margin-bottom: 30px;
  }

  &__logo {
    width: 100%;
    height: auto;
  }
}
</style>
