<template>
  <div class="product-in-cart">
    <button
      type="button"
      class="product-in-cart__remove-button"
    />
    <div class="product-in-cart__img-wrapper">
      <img
        :src="product.imgLink"
        class="product-in-cart__img"
      >
    </div>
    <h3 class="product-in-cart__title">
      {{ product.displayName }}
    </h3>
    <CountableControls class="product-in-cart__controls" />
    <div class="product-in-cart__price-wrapper">
      <p class="product-in-cart__price">
        {{ product.price }}₽
      </p>
    </div>
  </div>
</template>

<script>
import CountableControls from '@/components/Cart/ProductInCart/CountableControls'

export default {
  name: 'ProductInCart',
  components: {
    CountableControls
  },
  props: {
    product: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.product-in-cart {
  @include transition(background-color);
  display: grid;
  grid-template-areas: 'img price button' 'title title title' 'controls controls controls';
  grid-template-columns: 1fr minmax(100px, 150px) 25px;
  row-gap: 10px;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--second-back-color);

  &__remove-button {
    @include hover();
    position: relative;
    display: block;
    grid-area: button;
    width: 25px;
    height: 25px;
    padding: 0;
    border: none;
    background-color: transparent;

    &::before, &::after {
      @include transition(background-color);
      content: '';
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background-color: var(--text-color);
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__img-wrapper {
    display: flex;
    grid-area: img;
    align-items: center;
    justify-content: center;
    justify-self: center;
    width: 100px;
    height: 100px;
  }

  &__img {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }

  &__title {
    grid-area: title;
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }

  &__controls {
    grid-area: controls;
  }

  &__price {
    margin: 0;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    text-align: center;

    &-wrapper {
      display: flex;
      grid-area: price;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
