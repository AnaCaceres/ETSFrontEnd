import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false;
window.Event = new Vue();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
