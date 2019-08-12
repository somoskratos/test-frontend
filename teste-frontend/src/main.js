import Vue from 'vue'
import App from '@/App'

import 'vue-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import './config/bootstrap/bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


import router from '@/config/router'
import store from '@/config/store'


library.add(fas)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
