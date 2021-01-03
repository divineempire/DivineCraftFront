<template>
  <div class="add-to-cart">
    <transition name="minus-show">
      <button
        v-show="amount > 0"
        type="button"
        class="add-to-cart__minus-block"
        @click="decreaseAmount"
      >
        <span class="add-to-cart__minus" />
      </button>
    </transition>
    <button
      type="button"
      class="add-to-cart__plus-block"
      @click="increaseAmount"
    >
      <span class="add-to-cart__plus" />
      <transition
        name="cart-number"
        mode="out-in"
      >
        <svg
          v-if="amount === 0"
          class="add-to-cart__icon"
        >
          <use xlink:href="#basket" />
        </svg>
        <span
          v-else
          :key="amountKey"
          class="add-to-cart__amount"
        >
          {{ amount }}
        </span>
      </transition>
    </button>
  </div>
</template>

<script>
import { toRefs, watch, ref } from 'vue'

export default {
  name: 'AddToCart',
  props: {
    amount: {
      type: Number,
      require: false,
      default: 0
    },
    countable: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  emits: {
    'update:amount' (evt) {
      return evt >= 0
    }
  },
  setup (props, { emit }) {
    const { amount } = toRefs(props)
    const amountKey = ref(0)
    const increaseAmount = () => {
      emit('update:amount', amount.value + 1)
    }
    const decreaseAmount = () => {
      emit('update:amount', amount.value - 1)
    }

    watch(amount, () => {
      amountKey.value++
    })

    return {
      amountKey,
      increaseAmount,
      decreaseAmount
    }
  }
}
</script>

<style lang="scss" scoped>
.add-to-cart {
  position: relative;
  display: flex;
  padding-left: 5px;

  &__icon {
    width: 22px;
    height: 19px;
    margin: 0 auto;
    fill: $white;
  }

  &__minus-block {
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    padding: 0 8px;
    border: none;
    border-radius: 6px;
    background-color: $blue;
    outline: none;
    transform: translateX(-5px);
  }

  &__minus {
    display: block;
    width: 12px;
    height: 2px;
    background-color: $white;
  }

  &__plus-block {
    display: flex;
    align-items: center;
    width: 59px;
    min-width: 59px;
    padding: 5px 10px;
    border: none;
    border-radius: 6px;
    background-color: $blue;
    outline: none;
    transition: width $transition;
  }

  &__plus {
    position: relative;
    display: block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border: none;
    background-color: transparent;
    outline: none;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $white;
    }

    &::after {
      transform: rotate(90deg);
    }
  }

  &__amount {
    display: block;
    overflow: hidden;
    color: $white;
    text-align: center;
  }

  .cart-number {
    &-enter-active, &-leave-active {
      transition: opacity $transition, transform $transition;
      will-change: opacity, transform;
    }

    &-enter-from {
      opacity: 0;
      transform: translateY(10px);
    }

    &-enter-to {
      opacity: 1;
      transform: translateY(0);
    }

    &-leave-to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  .minus-show {
    &-enter-active, &-leave-active {
      transition: opacity $transition, transform $transition;
      will-change: opacity, transform;
    }

    &-enter-from, &-leave-to {
      opacity: 0;
      transform: translateX(-10px);
    }

    &-enter-to {
      opacity: 1;
      transform: translateX(-5px);
    }
  }
}
</style>
