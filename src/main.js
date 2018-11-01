import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'iview/dist/styles/iview.css'
// import { Button, Table , Layout,MenuItem,Icon } from 'iview'
import iView from 'iview'
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
  render: h => h(App)
}).$mount('#app')
