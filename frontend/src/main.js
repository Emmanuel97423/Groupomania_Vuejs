import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SignupComponent from "./components/SignupComponent.vue";
import Signup from "./views/Signup.vue";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component("SignupComponent", SignupComponent);
Vue.component("Signup", Signup);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
