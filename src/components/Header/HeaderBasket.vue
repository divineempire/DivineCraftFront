<template>
  <div
    class="basket"
    :class="`basket--${color}`"
  >
    <div class="basket__icon-wrapper">
      <svg class="basket__icon">
        <use xlink:href="#basket" />
      </svg>
      <transition name="amount">
        <span
          v-show="amountInCart"
          class="basket__notification"
        >
          {{ amountInCart }}
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HeaderBasket',
  props: {
    color: {
      type: String,
      require: true,
      default: 'accent'
    }
  },
  setup () {
    const store = useStore()
    console.log(store)
    return {
      amountInCart: computed(() => store.getters['cart/getTotalAmountInCart'])
    }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  display: flex;

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
    .basket__icon {
      fill: $accent;
    }
  }

  &--text {
    .basket__icon {
      fill: var(--text-color);
    }
  }
}
</style>
