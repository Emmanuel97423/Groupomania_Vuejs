import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "../views/Feed.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
