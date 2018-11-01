import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'iview/dist/styles/iview.css'
// import { Button, Table , Layout,MenuItem,Icon } from 'iview'
import iView from 'iview'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

Vue.use(VueI18Next)

const locales = {
  'zh': {
    hello: '欢迎!',
    loadbundle: '加载语言: {{lang}}'

  },
  en: {
    hello: 'Hello!',
    loadbundle: 'Load bundle language: {{lang}}'
  }

}

i18next
  .use(LanguageDetector)
  .init({
    // lng: 'zh',
    fallbackLng: 'en',
    resources: {
      en: { translation: locales.en },
      'zh': { translation: locales['zh'] }
    }
  }, (err, ddd) => {
    console.log(err, ddd)
  })

const i18n = new VueI18Next(i18next)

Vue.use(iView)

// Vue.component('Button', Button)
// Vue.component('Table', Table)
// Vue.component('Layout', Layout)
// Vue.component('MenuItem', MenuItem)
// Vue.component('Icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
