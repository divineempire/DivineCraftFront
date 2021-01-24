import * as getters from './getters'
import buyModule from './BuyModule'
import productsModule from './ProductsModule'

export default {
  getters,
  modules: {
    buyModule,
    productsModule
  },
  namespaced: true
}
