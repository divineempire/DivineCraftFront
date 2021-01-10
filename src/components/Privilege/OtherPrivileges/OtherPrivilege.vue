<template>
  <div class="other-privilege">
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
</template>

<script>
export default {
  name: 'OtherPrivilege',
  props: {
    privilege: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.other-privilege {
  &__img-wrapper {
    width: 115px;
    height: 140px;
  }

  &__img {
    display: block;
    object-fit: contain;
  }
}
</style>
