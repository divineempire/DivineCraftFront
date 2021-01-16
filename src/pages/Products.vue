<template>
  <section class="products">
    <div class="container container--no-mobile">
      <div class="products__header">
        <Back
          :to="'/'"
          class="products__back"
        />
        <h2 class="products__title">
          {{ title }}
        </h2>
      </div>
      <ProductsList
        class="products__products-list"
        :category-name="categoryName"
      />
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { categoriesMetaProvider } from '@/utils/categoriesMetaProvider'

import Back from '@/components/UI/Back'
import ProductsList from '@/components/Products/ProductsList'

export default {
  name: 'Products',
  components: {
    Back,
    ProductsList
  },
  setup () {
    const route = useRoute()

    return {
      title: computed(() => categoriesMetaProvider(route.params.name).title),
      categoryName: computed(() => route.params.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  @include back-retina('products');
  min-height: 100vh;
  padding: 15px 0;

  &__back {
    margin-bottom: 10px;
  }

  &__title {
    margin: 0 0 25px 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
  }
}
</style>
