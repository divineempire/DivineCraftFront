<template>
  <div class="intro">
    <div class="intro__img-wrapper">
      <div
        class="intro__back"
        :class="`intro__back--${name.toLowerCase()}`"
      />
      <img
        class="intro__img"
        :src="imgLink"
      >
    </div>
    <h2 class="intro__title">
      <slot name="title" />
    </h2>
    <p class="intro__description">
      <slot name="description" />
    </p>
    <div class="intro__controls">
      <button
        v-for="type in privilegeTypes"
        :key="type"
        type="button"
        class="intro__control"
        :class="currentType === type.value && 'intro__control--active'"
        @click="$emit('update:current-type', type.value)"
      >
        <span class="intro__control-text">
          {{ type.title }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    imgLink: {
      type: String,
      require: false,
      default: ''
    },
    currentType: {
      type: String,
      require: false,
      default: 'forever'
    },
    name: {
      type: String,
      require: true,
      default: ''
    }
  },
  emits: {
    'update:current-type': null
  },
  setup () {
    return {
      privilegeTypes: [
        {
          value: '30d',
          title: '30 дней'
        },
        {
          value: '90d',
          title: '90 дней'
        },
        {
          value: 'forever',
          title: 'Навсегда'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 314px;
  padding: 0 10px;

  &__title {
    margin: 0 0 10px 0;
    color: var(--text-color);
    font-weight: 800;
    font-size: 30px;
    line-height: 39px;
  }

  &__description {
    margin: 0 0 10px 0;
    color: var(--text-color);
    font-size: 16px;
    line-height: 21px;
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  &__control {
    $self: &;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    background-color: transparent;
    transition: border-color $transition;

    &-text {
      transition: color $transition;
    }

    &--active {
      border-color: $blue;

      #{$self} {
        &-text {
          color: $blue;
        }
      }
    }

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__control-text {
    color: var(--text-color);
  }

  &__img-wrapper {
    position: relative;
    width: 204px;
    height: 264px;
    margin-bottom: 10px;
  }

  &__img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  &__back {
    position: absolute;
    top: calc(50% - 70px);
    left: -10px;
    z-index: 1;
    width: calc(100% + 20px);
    height: 100px;
    border-radius: 10px;

    @each $privilege, $color in $privileges {
      &--#{$privilege} {
        background-color: $color;
      }
    }
  }
}
</style>
