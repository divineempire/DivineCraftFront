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
          <template #pre-price>
            {{ privilege.prePrice }}
          </template>
          <template #price>
            {{ privilege.price }}
          </template>
          <template #name>
            {{ privilege.displayName }}
          </template>
          <template #type>
            {{ formattedType }}
          </template>
        </Price>
        <Description
          class="privilege__description"
          :description="privilege.description"
        />
        <OtherPrivileges
          :key="otherPrivilegesKey"
          class="privilege__other-privileges"
          :privileges="otherPrivileges"
        />
      </div>
    </div>
  </section>
</template>

<script>
import OtherPrivileges from '@/components/Privilege/OtherPrivileges/OtherPrivileges'
import Description from '@/components/Privilege/Description'
import Price from '@/components/Privilege/Price'
import Back from '@/components/UI/Back'
import Intro from '@/components/Privilege/Intro'

import otherPrivilegesComposition from '@/composition/Privileges/OtherPrivileges'

import { computed, toRefs, unref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'Privilege',
  components: {
    Back,
    Intro,
    Price,
    Description,
    OtherPrivileges
  },
  setup () {
    const otherPrivilegesKey = ref(0)
    const { params, query } = toRefs(useRoute())
    const store = useStore()
    const router = useRouter()
    const types = new Set(['30d', '90d', 'forever'])
    const privileges = computed(() => store.getters['privileges/getPrivilegesByName'](params.value.name))
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
    const privilege = computed(() => unref(privileges)
      .find(privilege => privilege.name === `${name.toLowerCase()}_${unref(currentType)}`) || unref(privileges)[0])

    const { otherPrivileges } = otherPrivilegesComposition({ store, privilegeName: params.value.name })

    watch(() => params.value, () => {
      otherPrivilegesKey.value++
    })

    return {
      privileges,
      privilege,
      currentType,
      otherPrivileges,
      otherPrivilegesKey,
      formattedType: computed(() => {
        switch (unref(currentType)) {
          case '30d':
            return '30 дней'
          case '90d':
            return '90 дней'
          case 'forever':
            return 'навсегда'
        }
      })
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

  &__intro, &__price, &__description {
    margin-bottom: 30px;
  }
}
</style>
