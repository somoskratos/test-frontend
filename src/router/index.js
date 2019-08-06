import Vue from 'vue'
import DashClient from '@/components/DashClient'
import DashCompany from '@/components/DashCompany'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/Company/:id',
      name: 'DashCompany',
      component: DashCompany
    },
    {
      path: '/',
      name: 'DashClient',
      component: DashClient
    }
  ],
  mode: 'history'
})
