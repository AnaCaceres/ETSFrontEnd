import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AssetInformation from "./views/AssetInformation.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/asset/:id",
      name: "asset-information",
      component: AssetInformation,
      props: true
    }
  ]
});
