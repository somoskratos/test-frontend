import Vue from "vue";
import Router from "vue-router";
import partners from "./partners";
import dashboard from "./dashboard";
import Dashboard from "@/views/Dashboard";
import Page from '@/views/Page';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Page,
      children: [
        {
          path: '/',
          component: Dashboard
        },
        dashboard,
        partners
      ]
    }
  ]
});

