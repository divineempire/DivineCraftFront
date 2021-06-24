<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__info">
        <p class="footer__copyright footer__text">
          © 2019-2021 DivineCraft
        </p>
        <p class="footer__ogrn footer__text">
                ИП Данильцев Михаил Александрович, ОГРНИП 319774600661880, ИНН - 772148129606. Основной контакт - iam@mnx.pw
                Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию услуг в сфере торговли.
                Все закупаемые ключи приобретаются у официальных поставщиков. Все названия продуктов, компаний и марок,
                логотипы и товарные знаки являются собственностью соответствующих владельцев
        </p>
      </div>
      <div class="footer__links">
        <a
          href="https://vk.me/divinecraftru"
          target="_blank"
          class="footer__link footer__call-administration"
        >
          Связь с администрацией
        </a>
        <a
          href="https://vk.com/divinecraftru"
          class="footer__link footer__vk-link"
          target="_blank"
        >
          <svg
            class="footer__icon footer__vk"
            width="34"
            height="34"
          >
            <use xlink:href="#vk" />
          </svg>
        </a>
        <a
          target="_blank"
          href="https://discord.divinecraft.ru"
          class="footer__link footer__discord-link"
        >
          <svg
            class="footer__icon footer__discord"
            width="34"
            height="34"
          >
            <use xlink:href="#discord" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 15px;
  background-color: $footer-color;

  &__container {
    display: block;
  }

  &__info {
    display: block;
  }

  &__text {
    display: block;
    margin: 0 0 10px 0;
    color: $white;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__link {
    display: block;
    text-align: center;
  }

  &__call-administration {
    width: 100%;
    margin-bottom: 15px;
    color: $accent;
  }

  &__vk-link {
    margin-right: 10px;
  }
}

@media($laptop) {
  .footer {
    padding: 30px 0;
    background-color: $footer-color;

    &__container {
      display: flex;
    }

    &__info {
      display: flex;
      align-items: center;
    }

    &__text {
      display: inline-block;
      margin: 0 0 10px 0;
      color: $white;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }

    &__ogrn {
      margin-left: 50px;
    }

    &__links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
    }

    &__link {
      display: inline-block;
      text-align: center;
    }

    &__call-administration {
      width: auto;
      margin-right: 50px;
      margin-bottom: 0;
      color: $accent;
    }

    &__vk-link {
      margin-right: 10px;
    }
  }
}
</style>
