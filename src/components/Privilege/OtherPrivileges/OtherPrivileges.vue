<template>
  <ul class="other-privileges">
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
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
