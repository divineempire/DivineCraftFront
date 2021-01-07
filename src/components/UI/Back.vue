<template>
  <div class="back">
    <router-link
      class="back__link"
      :to="to"
    >
      <svg
        class="back__icon"
        width="22"
        height="20"
      >
        <use xlink:href="#back_arrow" />
      </svg>
      <span class="back__text">
        Назад
      </span>
    </router-link>
    <p
      v-if="$slots.default"
      class="back__description"
    >
      (
      <slot />
      )
    </p>
  </div>
</template>

<script>
export default {
  name: 'Back',
  props: {
    to: {
      type: String,
      require: true,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  text-decoration: none;

  &__link {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  &__icon {
    margin-right: 10px;
    fill: var(--text-color);
  }

  &__text {
    display: block;
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  &__description {
    margin: 0;
    color: $grey;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
