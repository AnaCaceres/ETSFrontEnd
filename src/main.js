import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store'

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
