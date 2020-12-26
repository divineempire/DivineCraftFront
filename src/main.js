import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMq from 'vue-mq'
// global styles
import '@/assets/css/typography.scss'
// global classes like container etc
import '@/assets/css/classes.scss'
// fonts
import '@/assets/css/fonts.scss'
// normalize
import '@/assets/css/normalize.css'

// import widths from css
import { laptopWidth, desktopWidth } from '@/assets/css/vars.scss'
// building sprite
const req = require.context('@/assets/icons', true)
req.keys().forEach(function (key) {
  req(key)
})
// directives
// const directives = require.context('@/directives', true)
// directives.keys().forEach(function (key) {
//   directives(key)
// })

// eslint-disable-next-line no-unused-vars
const app = createApp({
  App
})
  .use(router)
  .use(store)
  .use(VueMq, {
    breakpoints: { // default breakpoints - customize this
      mobile: parseInt(laptopWidth.replace('px', ''), 10),
      laptop: parseInt(desktopWidth.replace('px', ''), 10),
      desktop: Infinity
    }
  })
  .mount('#app')
