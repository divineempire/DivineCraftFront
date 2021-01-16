<template>
  <router-link
    to="/cart"
    class="cart"
    :class="`cart--${color}`"
  >
    <div class="cart__icon-wrapper">
      <svg class="cart__icon">
        <use xlink:href="#cart" />
      </svg>
      <transition name="amount">
        <span
          v-show="amountInCart"
          class="cart__notification"
        >
          {{ amountInCart }}
        </span>
      </transition>
    </div>
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HeaderCart',
  props: {
    color: {
      type: String,
      require: true,
      default: 'accent'
    }
  },
  setup () {
    const store = useStore()

    return {
      amountInCart: computed(() => store.getters['cart/getTotalAmountInCart'])
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  $self: &;
  display: flex;
  text-decoration: none;

  &__icon-wrapper {
    display: flex;
  }

  &__icon {
    display: block;
    width: 34px;
    height: 28px;
    transition: fill $transition;
  }

  &--accent {
    color: $accent;

    #{$self}__icon {
      fill: $accent;
    }
  }

  &--text {
    color: var(--text-color);

    #{$self}__icon {
      fill: var(--text-color);
    }
  }
}
</style>
