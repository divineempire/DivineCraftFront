import { createStore, createLogger } from 'vuex'
import Axios from 'axios'
// modules
import privileges from './privileges'
import products from './products'
import global from './global'
import cart from './cart'
import categories from './categories'
// proxies
import ProductsProxy from '@/proxy/Products'

const storeOptions = {
  modules: {
    privileges,
    products,
    global,
    cart,
    categories
  }
}
const plugins = process.env.NODE_ENV === 'development' ? [createLogger()] : undefined

if (plugins) {
  storeOptions.plugins = plugins
}
const store = createStore(storeOptions)

store.$axios = Axios.create({
  baseURL: 'https://api.divinecraft.ru'
})

store.$submit = function ({ method = 'get', data = null, query = null, url = '' }) {
  const options = {
    method,
    url
  }

  if (data) {
    options.data = data
  }

  if (query) {
    options.url += '?'
    for (const key in query) {
      options.url += `${key}=${query[key]}&`
    }
    options.url.slice(0, -1) // remove lst &
  }

  return this.$axios(options)
    .then(res => res.data)
    .catch(err => {
      this.commit('global/setErrorText', 'Что-то пошло не так. Перезагрузите страницу :)')
      this.commit('global/setDevErrorText', err)
      throw new Error(err)
    })
}

store.$productsApi = new ProductsProxy(store)

export default store
