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
import { toRefs } from 'vue'
import otherPrivilegesComposition from '@/composition/Privileges/OtherPrivileges'

import OtherPrivilege from '@/components/Privilege/OtherPrivileges/OtherPrivilege'

export default {
  name: 'OtherPrivileges',
  components: {
    OtherPrivilege
  },
  props: {
    privilegeName: {
      type: String,
      require: true,
      default: ''
    }
  },
  setup (props) {
    const { privilegeName } = toRefs(props)

    return { privileges: otherPrivilegesComposition(privilegeName) }
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
@media($laptop) {
  .other-privileges {
    width: 30%;
    margin-top: 75px;

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
}
</style>
