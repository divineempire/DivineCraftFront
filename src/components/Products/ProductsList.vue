<template>
  <div class="products-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="products-list__item"
    >
      <ProductCard
        :product="product"
        class="products-list__product"
      />
    </div>
  </div>
</template>

<script>
import { toRefs, computed, unref } from 'vue'
import { useStore } from 'vuex'

import ProductCard from '@/components/Products/ProductCard'

export default {
  name: 'ProductsList',
  components: {
    ProductCard
  },
  props: {
    categoryName: {
      type: String,
      require: true,
      default: ''
    }
  },
  setup (props) {
    const { categoryName } = toRefs(props)
    const store = useStore()

    return {
      products: computed(() => store.getters['products/getProductsByCategory'](unref(categoryName)))
    }
  }
}
</script>

<style lang="scss" scoped>
  .products-list {
    display: grid;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    gap: 10px;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
      width: auto;
      margin-top: 0;
      margin-left: 0;
    }
  }

  @media($laptop) {
    .products-list {
      /*display: grid;*/
      /*grid-template-columns: calc(50% - 5px) calc(50% - 5px);*/
      /*gap: 10px;*/
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      max-width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        display: flex;
        justify-content: center;
        width: 19%;
      }
    }
  }
</style>
