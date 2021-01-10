<template>
  <div
    class="other-privilege"
    :class="`privilege-back-color--${privilege.displayName.toLowerCase()}`"
  >
    <div class="other-privilege__img-wrapper">
      <img
        class="other-privilege__img"
        :src="privilege.imgLink"
      >
    </div>
    <div class="other-privilege__description">
      <p class="other-privilege__text">
        <span class="other-privilege__status">
          Статус
        </span>
        <span class="other-privilege__status">
          {{ privilege.displayName.toUpperCase() }}
        </span>
      </p>
    </div>
    <p class="other-privilege__price other-privilege__text">
      {{ privilege.price }} ₽
    </p>
    <div class="other-privilege__link-wrapper">
      <router-link
        :to="privilege.displayName"
        class="other-privilege__link"
      >
        <svg
          class="other-privilege__link-icon"
          width="22"
          height="18"
        >
          <use xlink:href="#arrow_right" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherPrivilege',
  props: {
    privilege: {
      type: Object,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.other-privilege {
  display: grid;
  grid-template-areas: 'img description' 'img price' 'img link';
  grid-template-columns: 115px 1fr;
  border-radius: 10px;

  &__text {
    margin: 0;
    color: var(--text-color);
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

  &__img-wrapper {
    display: flex;
    grid-area: img;
    align-items: center;
    justify-content: center;
    height: 140px;
  }

  &__img {
    display: block;
    object-fit: contain;
    width: auto;
    height: 100%;
  }

  &__description {
    display: flex;
    grid-area: description;
    align-items: center;
    justify-content: center;
  }

  &__price {
    display: flex;
    grid-area: price;
    align-items: center;
    justify-content: center;
  }

  &__link-wrapper {
    display: flex;
    grid-area: link;
    align-items: center;
    justify-content: center;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid var(--text-color);
    border-radius: 50%;

    &-icon {
      fill: var(--text-color);
    }
  }
}
</style>
