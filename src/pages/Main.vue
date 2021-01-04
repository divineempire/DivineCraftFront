<template>
  <body class="main">
    <WelcomeBanner
      v-in-viewport="'banner'"
      class="main__welcome-banner"
    />
    <Privileges
      v-in-viewport="'privileges'"
      class="main__privileges"
    />
    <PopularProducts
      v-in-viewport="'products'"
      class="main__popular-products"
    />
    <Categories
      v-in-viewport="'categories'"
      class="main__categories"
    />
  </body>
</template>

<script>
import Categories from '@/components/Main/Categories/Categories'
import PopularProducts from '@/components/Main/PopularProducts/PopularProducts'
import Privileges from '@/components/Main/Privileges/Privileges'
import WelcomeBanner from '@/components/Main/WelcomeBanner'

export default {
  name: 'Main',
  components: {
    WelcomeBanner,
    Privileges,
    PopularProducts,
    Categories
  }
}
</script>

<style lang="scss" scoped>
</style>
