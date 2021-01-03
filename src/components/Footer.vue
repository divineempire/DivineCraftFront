<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__info">
        <p class="footer__copyright footer__text">
          © 2019-2020 DivineCraft
        </p>
        <p class="footer__ogrn footer__text">
          ОГРНИП 318554300045150
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

  &__text {
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
</style>
