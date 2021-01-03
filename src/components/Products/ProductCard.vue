<template>
  <div class="product-card">
    <div class="product-card__img-wrapper">
      <img
        class="product-card__img"
        alt="product"
        :src="product.imgLink"
      >
    </div>
    <p class="product-card__title">
      {{ product.displayName }}
    </p>
    <div class="product-card__price-block">
      <span class="product-card__price">
        {{ product.price }}₽
      </span>
      <AddToCart
        v-model:amount="amount"
        class="product-card__add-to-cart"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import AddToCart from '@/components/Products/AddToCart'

export default {
  name: 'ProductCard',
  components: {
    AddToCart
  },
  props: {
    product: {
      type: Object,
      require: true,
      default: () => ({})
    }
  },
  setup (props) {
    const store = useStore()
    const amount = computed({
      get () {
        return store.getters['cart/getProductById'](props.product.id)?.amount || 0
      },
      set (val) {
        store.commit('cart/changeProductAmountInCart', {
          newAmount: val,
          product: props.product
        })
      }
    })

    return {
      amount
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  max-width: 226px;
  padding: 0 15px 15px 15px;
  border-radius: 8px;
  background-color: var(--back-color);

  &__title {
    margin-bottom: 10px;
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }

  &__img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin: 0 auto 10px auto;
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
  }

  &__price-block {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
  }
}
</style>
