<template>
  <div class="description">
    <h3 class="description__title">
      Описание
    </h3>
    <p class="description__text">
      {{ formattedDescription }}
    </p>
  </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
  name: 'Description',
  props: {
    description: {
      type: [String, Object],
      require: true,
      default: ''
    }
  },
  setup (props) {
    const { description } = toRefs(props)

    return {
      formattedDescription: description.value
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  &__title {
    margin: 0 0 15px 0;
    color: var(--text-color);
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
  }

  &__text {
    margin: 0;
    color: var(--text-color);
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
