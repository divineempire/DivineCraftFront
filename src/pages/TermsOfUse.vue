<template>
  <section class="terms-of-use">
    <div class="container">
      <h2 class="terms-of-use__title">
        Правила
      </h2>
      <p class="terms-of-use__text">
        При регистрации Игрок автоматически подтверждает свое ознакомление с действующими правилами, свое полное
        согласие с ними и обязательство не нарушать их. Незнание данных правил не освобождает от ответственности.

        Соучастие, попытка нарушения или несообщение о нарушении данных правил является в равной степени нарушением этих
        правил, которое также может повлечь как блокировку аккаунта на сервере, так и блокировку привязанной к аккаунту
        страницы в группе.

        Все меры наказания соответствуют строго разделам, в случае нарушения нескольких пунктов одновременно, игрок
        получает наказание с учетом всех нарушенных пунктов (наказание суммируется в максимальном формате).

        На сервере действует прецедентная система правил. (Если игрок совершил правонарушение, которое не описано ни в
        каких правилах сервера, то он может быть наказан с разрешения ГА. Сделано это не с целью выдумывать правила "на
        ходу" и наказывать по ним, а потому, что все мы люди, могли что-то и забыть или не учесть).
      </p>
      <ul class="terms-of-use__list">
        <li
          v-for="(paragraph, index) in termsOfUse"
          :key="`paragraph_${index}`"
          class="terms-of-use__item"
        >
          <Paragraph
            class="terms-of-use__paragraph"
            v-bind="{index: index + 1, paragraph}"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import rules from '@/constants/TermsOfUse/RulesIndex'

import Paragraph from '@/components/TermsOfUse/Paragraph'
export default {
  name: 'TermsOfUse',
  components: {
    Paragraph
  },
  data () {
    return {
      termsOfUse: rules
    }
  }
}
</script>

<style lang="scss" scoped>
.terms-of-use {
  min-height: 100vh;
  padding-top: 25px;

  &__title {
    margin: 0 0 25px 0;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
  }

  &__text {
    margin: 0;
    color: $white;
    font-size: 14px;
    line-height: 22px;
  }

  &__list {
    margin: 15px 0 0 0;
    padding: 0;
    list-style: none;
  }
}
</style>
