import Vue from 'vue'
import App from '@/App'
import router from '@/config/router'
import store from '@/config/store'
import 'fontawesome'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
