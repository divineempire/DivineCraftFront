<template>
  <div class="description">
    <h3 class="description__title">
      Описание
    </h3>
    <select
      v-model="selectedDesc"
      class="description__select"
    >
      <option
        v-for="(descT, i) in descriptions"
        :key="i"
      >
        {{ descT }}
      </option>
    </select>
    <p class="description__text">
      {{ formattedDescription }}
    </p>
  </div>
</template>

<script>
import { toRefs, ref, computed } from 'vue'

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
    const needSelector = typeof (props.description) === 'object'

    if (needSelector) {
      const descriptions = Object.keys(props.description)
      const selectedDesc = ref(descriptions[0])
      const formattedDescription = computed(() => props.description[selectedDesc.value])

      return {
        selectedDesc,
        descriptions,
        formattedDescription
      }
    } else {
      const { description } = toRefs(props)

      return {
        formattedDescription: description.value
      }
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

  &__select {
    width: 50%;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    background: #252525;
    color: white;
    outline: none;
  }

  &__text {
    margin: 0;
    color: var(--text-color);
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
  }
}
@media($laptop) {
  .description {
    width: 40%;
    margin-top: 75px;

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
}
</style>
