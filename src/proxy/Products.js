import Proxy from './Proxy'

export default class ProductsProxy extends Proxy {
  constructor (store) {
    super(store, 'api/products')
  }

  getPrivileges () {
    return this.submit(
      {
        endpoint: 'privilege'
      })
  }

  getProducts () {
    return this.submit(
      {
        endpoint: 'simple'
      })
  }

  // getProducts (type = '') {
  //   return this.submit({
  //     query: {
  //       type
  //     }
  //   })
  // }

  checkAvailability (payload) {
    if (Array.isArray(payload)) {
      return Promise.all(payload.map(item => this.submit({
        method: 'post',
        data: {
          productId: item.id,
          productType: item.productType
        },
        endpoint: 'availability'
      })))
    }

    if (typeof payload === 'number') {
      return this.submit({
        method: 'post',
        data: {
          productId: payload
        },
        endpoint: 'availability'
      })
    }

    throw new Error('Bad type for payload in checkAvailability')
  }

  buyProducts ({ coupon = '', username = '', email = '', products = [] }) {
    const data = {
      player: {
        username,
        email
      },
      products
    }

    if (coupon) {
      data.coupon = coupon
    }

    return this.submit({
      method: 'post',
      endpoint: 'checkout',
      data
    })
  }

  checkLastPurchases (orderId) {
    return this.submit({
      endpoint: `lastPurchasedValues/${orderId}`
    })
  }

  checkCoupon ({ coupon, products }) {
    if (!coupon) {
      console.warn('Bad coupon')

      return
    }

    return this.submit({
      endpoint: 'price',
      data: {
        coupon,
        products
      }
    })
  }
}
