<template>
  <section class="privilege">
    <div
      class="container"
    >
      <Back
        class="privilege__back"
        :to="'/'"
      >
        Вернуться к выбору привилегии
      </Back>
      <div
        v-if="privilege"
        class="privilege__content"
      >
        <Intro
          v-model:current-type="currentType"
          :name="privilege.displayName"
          :img-link="privilege.imgLink"
          class="privilege__intro"
        >
          <template #title>
            {{ privilege.displayName }}
          </template>
          <template #description>
            {{ privilege.description }}
          </template>
        </Intro>
        <Price class="privilege__price">
          <template #name>
            {{ privilege.name }}
          </template>
        </Price>
      </div>
    </div>
  </section>
</template>

<script>
import Price from '@/components/Privilege/Price'
import Back from '@/components/UI/Back'
import Intro from '@/components/Privilege/Intro'

import { computed, toRefs, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'Privilege',
  components: {
    Back,
    Intro,
    Price
  },
  setup () {
    const { params, query } = toRefs(useRoute())
    const store = useStore()
    const router = useRouter()
    const types = new Set(['30d', '90d', 'forever'])
    const { name } = unref(params)
    const privileges = computed(() => store.getters['privileges/getPrivilegesByName'](name))
    const currentType = computed({
      get: () => types.has(unref(query).type) ? unref(query).type : 'forever',
      set: newVal => {
        router.push({
          query: {
            type: newVal
          }
        })
      }
    })

    return {
      privileges,
      privilege: computed(() => unref(privileges)
        .find(privilege => privilege.name === `${name.toLowerCase()}_${unref(currentType)}`) || unref(privileges)[0]),
      currentType
    }
  }
}
</script>

<style lang="scss" scoped>
.privilege {
  padding-top: 20px;
  background-color: transparent;

  &__back {
    margin: 0 auto;
  }
}
</style>
