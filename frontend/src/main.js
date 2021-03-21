import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SignupComponent from "./components/SignupComponent.vue";
import Signup from "./views/Signup.vue";
import Vuelidate from "vuelidate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//Fontawesome
library.add(faHome);
library.add(faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.component("SignupComponent", SignupComponent);
Vue.component("Signup", Signup);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
