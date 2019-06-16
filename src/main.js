import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue";
import "./assets/scss/import.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faSignOutAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
