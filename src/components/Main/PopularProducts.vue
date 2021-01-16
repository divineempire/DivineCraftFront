<template>
  <section class="popular-products">
    <div class="container">
      <h2 class="popular-products__title">
        Поплуярные товары
      </h2>
      <ul class="popular-products__list">
        <li
          v-for="product in popularProducts"
          :key="product.id"
          class="popular-products__product"
        >
          <ProductCard
            class="popular-products__product-card"
            v-bind="{product}"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import showPopularProducts from '@/composition/PopularProducts/ShowPopularProducts'

import ProductCard from '@/components/Products/ProductCard'

export default {
  name: 'PopularProducts',
  components: {
    ProductCard
  },
  setup () {
    return {
      ...showPopularProducts()
    }
  }
}
</script>

<style lang="scss" scoped>
.popular-products {
  width: 100%;
  min-height: 429px;
  padding-top: 50px;
  padding-bottom: 25px;
  background-image: url('~st/images/main/popular-products/back@1x.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ($retina) {
    background-image: url('~st/images/main/popular-products/back@2x.jpg');
  }

  &__title {
    margin: 0 0 25px 0;
    color: $white;
    text-align: center;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__product:not(:last-child) {
    margin-bottom: 20px;
  }

  &__product-card {
    margin: 0 auto;
  }
}
</style>
