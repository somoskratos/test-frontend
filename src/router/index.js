import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard";
import dashboard from "./dashboard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Dashboard,
      children: [
        {
          path: "/",
          redirect: "dashboard"
        },
        dashboard
      ]
    }
  ]
});
