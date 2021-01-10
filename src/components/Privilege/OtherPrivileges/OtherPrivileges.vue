<template>
  <div class="other-privileges">
    <h3 class="other-privileges__title">
      Другие привилегии
    </h3>
    <ul class="other-privileges__list">
      <li
        v-for="privilege in privileges"
        :key="`other_priv_${privilege.name}`"
        class="other-privileges__item"
      >
        <OtherPrivilege
          class="other-privileges__other-privilege"
          v-bind="{ privilege }"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import OtherPrivilege from '@/components/Privilege/OtherPrivileges/OtherPrivilege'

export default {
  name: 'OtherPrivileges',
  components: {
    OtherPrivilege
  },
  props: {
    privileges: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.other-privileges {
  &__title {
    margin: 0 0 20px 0;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 20px;
  }
}
</style>
