<template>
  <div class="basket">
    <svg class="basket__icon">
      <use xlink:href="#basket" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HeaderBasket'
}
</script>

<style lang="scss" scoped>
.basket {
  &__icon {
    width: 34px;
    height: 28px;
  }
}
</style>
