<template>
  <section class="categories">
    <div class="container">
      <h2 class="categories__title">
        Категории
      </h2>
      <ul class="categories__list">
        <li
          v-for="category in categories"
          :key="category"
          class="categories__item"
        >
          <CategoryCard
            :category="category"
            class="categories__category-card"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import CategoryCard from '@/components/Main/Categories/CategoryCard'

export default {
  name: 'Categories',
  components: {
    CategoryCard
  },
  setup () {
    const store = useStore()

    return {
      categories: computed(() => store.getters['categories/categories'])
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  padding: 25px 0;
  background-color: var(--back-color);

  &__title {
    margin: 0 0 25px 0;
    color: var(--text-color);
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    box-shadow: 0 0 0 2px var(--text-color);
  }
}
</style>
