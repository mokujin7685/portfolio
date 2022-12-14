import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import _ from "lodash";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$_ = _;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
