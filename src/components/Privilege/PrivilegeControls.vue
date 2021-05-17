<template>
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
</template>
<script>
import privilegesTypeTranslator from '@/utils/privilegesTypeTranslator'
import { TYPES } from '@/constants/privileges/privilegesTypes'

export default {
  name: 'PrivilegeControls',
  props: {
    currentType: {
      type: String,
      require: false,
      default: 'forever'
    }
  },
  emits: {
    'update:current-type': null
  },
  setup () {
    const privilegeTypes = []

    TYPES.forEach((val) => {
      privilegeTypes.push({
        title: privilegesTypeTranslator(val),
        value: val
      })
    })

    return {
      privilegeTypes
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
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
      @include transition(color);
      color: var(--text-color);
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
}
@media($laptop) {
  .intro {
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
        @include transition(color);
        color: var(--text-color);
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
  }
}
</style>
