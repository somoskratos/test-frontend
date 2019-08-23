import Vue from 'vue'
import Router from 'vue-router'
import companies from './companies/companies'

Vue.use(Router)

const router = new Router({
  routes: [companies],
  mode: 'history'

})

export default router
