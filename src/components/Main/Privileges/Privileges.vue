<template>
  <section class="privileges">
    <div class="container">
      <h2 class="privileges__header">
        Привилегии
      </h2>
      <div class="privileges__wrapper">
        <ul class="privileges__list">
          <li
            v-for="privilegeName in privilegesNames"
            :key="privilegeName"
            class="privileges__element"
          >
            <Privilege
              class="privileges__privilege"
              v-bind="{privilegeName}"
            />
          </li>
        </ul>
        <div class="privileges__corner privileges__corner--top-left" />
        <div class="privileges__corner privileges__corner--top-right" />
        <div class="privileges__corner privileges__corner--bottom-right" />
        <div class="privileges__corner privileges__corner--bottom-left" />
      </div>
    </div>
  </section>
</template>

<script>
import Privilege from '@/components/Main/Privileges/Privilege'

import ShowPrivileges from '@/composition/Privileges/ShowPrivileges'

export default {
  name: 'Privileges',
  components: {
    Privilege
  },
  setup () {
    const { privilegesNames, isLoading } = ShowPrivileges()

    return {
      privilegesNames,
      isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.privileges {
  padding-bottom: 20px;

  &__header {
    margin: 0 0 20px;
    color: var(--text-color);
    text-align: center;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__element:not(:last-child) {
    margin-bottom: 20px;
  }

  &__privilege {
    margin: 0 auto;
  }

  &__wrapper {
    position: relative;
  }

  &__corner {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: transparent;

    &--top-left {
      top: -20px;
      left: -20px;
      border-top: 2px solid rgba($black, 0.25);
      border-left: 2px solid rgba($black, 0.25);
    }

    &--top-right {
      top: -20px;
      right: -20px;
      border-top: 2px solid rgba($black, 0.25);
      border-right: 2px solid rgba($black, 0.25);
    }

    &--bottom-right {
      right: -20px;
      bottom: -20px;
      border-right: 2px solid rgba($black, 0.25);
      border-bottom: 2px solid rgba($black, 0.25);
    }

    &--bottom-left {
      bottom: -20px;
      left: -20px;
      border-bottom: 2px solid rgba($black, 0.25);
      border-left: 2px solid rgba($black, 0.25);
    }
  }
}
</style>
