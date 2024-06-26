import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipBoard from "vue-clipboard2"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueClipBoard)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
