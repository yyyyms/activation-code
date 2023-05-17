import Vue from "vue";
import VueRouter from "vue-router";
import ActivationCode from "../views/ActivationCode";
import login from "../views/login"
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'lgin',
    component:login
  },
  {
    path: "/Home",
    name: "Home",
    component: ActivationCode,
  },
 
];

const router = new VueRouter({
  routes,
});

export default router;
