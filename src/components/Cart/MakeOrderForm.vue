<template>
  <form
    class="make-order-form"
    @submit="submit"
  >
    <TextInput
      :key="'nick'"
      v-model:value="nickname"
      class="make-order-form__nickname"
      placeholder="Никнейм"
    />
    <TextInput
      :key="'promo'"
      v-model:value="promoCode"
      class="make-order-form__promo-code"
      placeholder="Промокод"
      :disabled="true"
    />
    <AppCheckbox
      v-model:checked="isInsuranceChecked"
      class="make-order-form__insurance-input"
    >
      Страхование аккаунта
    </AppCheckbox>
    <div class="make-order-form__insurance-info">
      <svg
        class="make-order-form__insurance-info-icon"
        width="15"
        height="15"
      >
        <use xlink:href="#question-in-circle" />
      </svg>
      <span class="make-order-form__insurance-info-text">
        +{{ insurancePrice }} ₽
      </span>
    </div>
    <TextInput
      :key="'email'"
      v-model:value="emailValue"
      v-model:got-errors="emailGotErrors"
      :regexp-for-validation="emailRegexp"
      placeholder="Email"
      class="make-order-form__email-input"
      type="email"
    />
    <div class="make-order-form__email-info">
      <p class="make-order-form__email-info-text">
        После оплаты, чек придёт вам на почту
      </p>
    </div>
    <div class="make-order-form__discount">
      (на заказ от 3000 дополнительная скидка - 5%)
    </div>
    <AppCheckbox
      class="make-order-form__terms-input"
      v-model:checked="isUserReady"
    >
      Я согласен с уловиями<br><a href="/">пользовательского соглашения</a>
    </AppCheckbox>
    <div class="make-order-form__price">
      <p class="make-order-form__price-text">
        Итого: <span class="make-order-form__price-total">{{ totalPrice }} ₽</span>
      </p>
    </div>
    <AppButton
      type="submit"
      :disabled="!readyToSubmit"
      class="make-order-form__button"
    >
      Купить
    </AppButton>
  </form>
</template>

<script>
import TextInput from '@/components/UI/TextInput'
import AppCheckbox from '@/components/UI/AppCheckbox'
import AppButton from '@/components/UI/AppButton'

import emailRegexp from '@/constants/EmailRegexp'
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'

import insuranceModule from '@/composition/MakeOrderForm/insuranceModule'

export default {
  name: 'MakeOrderForm',
  components: {
    TextInput,
    AppCheckbox,
    AppButton
  },
  setup () {
    return {
      ...insuranceModule()
    }
  },
  data () {
    return {
      emailRegexp,
      couponCheckDebounceTimer: null,
      isUserReady: false
    }
  },
  computed: {
    ...mapGetters('cart', {
      totalPrice: 'getTotalPrice',
      isLoading: 'isLoading'
    }),
    ...mapState('cart/buyModule', {
      coupon: 'coupon',
      storeNickname: 'nickname',
      storeEmail: 'email'
    }),
    readyToSubmit () {
      return this.isFormValid && !this.isLoading && this.isUserReady
    },
    isFormValid () {
      return !!this.nickname && !!this.emailValue && !this.emailGotErrors
    },
    promoCode: {
      get () {
        return this.coupon
      },
      set (newVal) {
        if (this.couponCheckDebounceTimer) {
          clearTimeout(this.couponCheckDebounceTimer)
        }
        this.setCoupon(newVal)
        if (newVal) {
          this.couponCheckDebounceTimer = setTimeout(() => {
            this.checkCoupon()
          }, 700)
        }
      }
    },
    nickname: {
      get () {
        return this.storeNickname
      },
      set (newVal) {
        this.setNickname(newVal)
      }
    },
    emailValue: {
      get () {
        return this.storeEmail.value
      },
      set (newVal) {
        this.setEmailValue(newVal)
      }
    },
    emailGotErrors: {
      get () {
        return this.storeEmail.gotErros
      },
      set (newVal) {
        this.setEmailGotErrors(newVal)
      }
    }
  },
  methods: {
    ...mapMutations('cart/buyModule', {
      setCoupon: 'setCoupon',
      setNickname: 'setNickname',
      setEmailValue: 'setEmailValue',
      setEmailGotErrors: 'setEmailGotErrors'
    }),
    ...mapActions('cart/buyModule', {
      checkCoupon: 'checkCoupon',
      tryToBuy: 'tryToBuy'
    }),
    submit (evt) {
      evt.preventDefault()
      if (this.readyToSubmit) {
        this.tryToBuy()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.make-order-form {
  @include transition(background-color);
  display: grid;
  grid-template-areas: 'nick nick' 'promo promo' 'insurance-input insurance-info' 'email-input email-input' 'email-info email-info' 'discount discount' 'terms terms' 'price price' 'button button';
  grid-template-columns: 52% calc(48% - 10px);
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--second-back-color);

  &__nickname {
    grid-area: nick;
  }

  &__promo-code {
    grid-area: promo;
  }

  &__insurance-input {
    grid-area: insurance-input;
  }

  &__insurance-info {
    display: flex;
    grid-area: insurance-info;
    align-items: center;

    &-text {
      display: block;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }

    &-icon {
      margin-right: 10px;
    }
  }

  &__email {
    &-input {
      grid-area: email-input;
    }

    &-info {
      grid-area: email-info;

      &-text {
        @include transition(color);
        margin: 0;
        color: var(--text-color);
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  &__discount {
    grid-area: discount;
    color: #9B9B9B;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  &__terms-input {
    grid-area: terms;

    a {
      color: $blue;
      text-decoration: none;
    }
  }

  &__price {
    grid-area: price;

    &-text {
      @include transition(color);
      margin: 0;
      color: var(--text-color);
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
    }

    &-total {
      margin-left: 10px;
      font-weight: bold;
    }
  }

  &__button {
    grid-area: button;
  }
}

@media($laptop) {
  .make-order-form {
    @include transition(background-color);
    display: grid;
    grid-template-areas: 'nick promo' 'insurance-input insurance-info' 'email-input email-info' 'discount discount' 'terms terms' 'price button';
    grid-template-columns: 52% calc(48% - 10px);
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: var(--second-back-color);

    &__nickname {
      grid-area: nick;
    }

    &__promo-code {
      grid-area: promo;
    }

    &__insurance-input {
      grid-area: insurance-input;
    }

    &__insurance-info {
      display: flex;
      grid-area: insurance-info;
      align-items: center;

      &-text {
        display: block;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
      }

      &-icon {
        margin-right: 10px;
      }
    }

    &__email {
      &-input {
        grid-area: email-input;
      }

      &-info {
        grid-area: email-info;

        &-text {
          @include transition(color);
          margin: 0;
          color: var(--text-color);
          font-size: 14px;
          line-height: 16px;
        }
      }
    }

    &__discount {
      grid-area: discount;
      color: #9B9B9B;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }

    &__terms-input {
      grid-area: terms;

      a {
        color: $blue;
        text-decoration: none;
      }
    }

    &__price {
      grid-area: price;

      &-text {
        @include transition(color);
        margin: 0;
        color: var(--text-color);
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
      }

      &-total {
        margin-left: 10px;
        font-weight: bold;
      }
    }

    &__button {
      grid-area: button;
    }
  }
}
</style>
