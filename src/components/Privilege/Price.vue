<template>
  <div class="price">
    <p class="price__title">
      <span class="price__title">
        Цена
      </span>
      <span
        v-if="$slots.prePrice"
        class="price__pre-price"
      >
        <slot name="pre-price" />₽
      </span>
      <span class="price__price">
        <slot name="price" />₽
      </span>
    </p>
    <p class="price__chosen">
      <span class="price__chosen-name">
        Выбран товар: Статус <slot name="name" />
      </span>
      <span class="price__chosen-type">
        Длительность: <slot name="type" />
      </span>
    </p>
    <button
      type="button"
      class="price__add"
    >
      Добавить в корзину
    </button>
  </div>
</template>
<script>
export default {
  name: 'Price'
}
</script>

<style llang="scss" scoped>
.price {
  padding: 25px 20px 20px 20px;
  border-radius: 8px;
  background-color: var(--second-back-color);
}
</style>
