import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import SignupFormComponent from "./components/signupComponents/SignupFormComponent";
import LoginComponent from "./components/LoginComponent";
import FeedLeftMenu from "./components/feedComponents/FeedLeftMenu";

import store from "./store";
Vue.config.productionTip = false;
Vue.component("SignupFormComponent", SignupFormComponent);
Vue.component("LoginComponent", LoginComponent);
Vue.component("FeedLeftMenu", FeedLeftMenu);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
