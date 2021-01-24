<template>
  <section class="cart">
    <div class="container">
      <div class="cart__back-wrapper">
        <Back
          class="cart__back"
          to="/"
        >
          Вернуться к покупкам
        </Back>
      </div>
      <ul class="cart__products-list">
        <li
          v-for="product in productsInCart"
          :key="product.id"
          class="cart__products-list-item"
        >
          <ProductInCart v-bind="product" />
        </li>
      </ul>
      <MakeOrderForm
        v-show="productsInCart.length"
        class="cart__make-order-form"
      />
    </div>
  </section>
</template>

<script>
import MakeOrderForm from '@/components/Cart/MakeOrderForm'
import Back from '@/components/UI/Back'
import ProductInCart from '@/components/Cart/ProductInCart'

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Cart',
  components: {
    MakeOrderForm,
    Back,
    ProductInCart
  },
  setup () {
    const store = useStore()

    return {
      productsInCart: computed(() => store.state.cart.productsModule.products)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  @include back-retina('cart');
  min-height: 100vh;

  &__back-wrapper {
    padding: 15px 0;
  }

  &__products-list {
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;

    &-item:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__make-order  {
    width: 100%;
  }
}
</style>
