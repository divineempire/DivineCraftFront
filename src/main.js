import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMq from './plugins/mq/index'
import CustomDirectives from './plugins/CustomDirectives/index'
// global styles
import '@/assets/css/typography.scss'
// global classes like container etc
import '@/assets/css/classes.scss'
// fonts
import '@/assets/css/fonts.scss'
// normalize
import '@/assets/css/normalize.css'

// import widths from css
import { mobileWidth, tabletWidth, laptopWidth, desktopWidth } from '@/assets/css/vars.scss'
// building sprite
const req = require.context('@/assets/icons', true)

req.keys().forEach(function (key) {
  req(key)
})
// eslint-disable-next-line no-unused-vars
const app = createApp(App)
  .use(router)
  .use(store)
  .use(CustomDirectives)
  .use(VueMq, {
    breakpoints: {
      mobile: parseInt(mobileWidth.replace('px', ''), 10),
      tablet: parseInt(tabletWidth.replace('px', ''), 10),
      laptop: parseInt(laptopWidth.replace('px', ''), 10),
      desktop: parseInt(desktopWidth.replace('px', ''), 10)
    }
  })

app.mount('#app')
