import Vue from 'vue'
import App from './App.vue'

import './config/bootstrap/bootstrap'
import './config/fontawesome/fontawesome'
import './config/the-mask/mask'

import router from './config/router'
import store from './config/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
