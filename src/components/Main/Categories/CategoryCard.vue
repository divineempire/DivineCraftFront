<template>
  <button
    type="button"
    class="category-card"
    :class="`category-card--${category}`"
    @click="emit('click')"
  >
    <div class="category-card__icon-wrapper">
      <svg
        width="75"
        height="75"
        class="category-card__icon"
      >
        <use :xlink:href="`#${icon}`" />
      </svg>
    </div>
    <div class="category-card__title-wrapper">
      <p class="category-card__title">
        {{ title }}
      </p>
    </div>
  </button>
</template>
<script>
import { toRefs, computed, unref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: String,
      require: true,
      default: ''
    }
  },
  setup (props) {
    const { category } = toRefs(props)
    const store = useStore()
    const {
      icon,
      title
    } = toRefs(unref(computed(() => store.getters['categories/getMetaForCategory'](category.value))))

    return {
      icon,
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.category-card {
  @import "~@/assets/css/categories.scss";
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border: none;
  background-color: transparent;
  outline: none;

  @each $category in $categories {
    &--#{$category} {
      .category-card__icon {
        width: map.get($categoriesIconsWidths, $category);
        height: map.get($categoriesIconsHeights, $category);
      }
    }
  }

  &__icon-wrapper {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__icon {
    fill: var(--text-color);
  }

  &__title {
    margin: 0;
    color: var(--text-color);
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
