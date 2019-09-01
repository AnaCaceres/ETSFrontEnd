<template>
  <div class="home container-fluid mx-0">
    <div class="row">
      <logo />
      <div class="col-12 col-lg-4">
        <filters v-on:filterAssets="fetchOptions"></filters>
      </div>
      <div class="col-12 col-lg-8 py-5">
        <funds :actives="currentActives" />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters.vue";
import Logo from "@/components/Logo.vue";
import Funds from "@/components/Funds.vue";
import { setTimeout } from 'timers';

export default {
  name: "home",
  components: {
    Filters,
    Logo,
    Funds
  },
  data() {
    return {
      actives: [],
      currentActives: [],
      riskFilter: "All",
      currencyFilter: "All"
    };
  },
  computed: {
    filterAssets(){
      return this.actives.filter((asset) => {
        if((asset.risk_family === this.riskFilter || this.riskFilter === "All") && (asset.currency === this.currencyFilter || this.currencyFilter === "All")){
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    fetchActives() {
      fetch("http://jsonstub.com/symbols", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "JsonStub-User-Key": "6fe1470b-4310-4998-bc11-969c53fd512e",
          "JsonStub-Project-Key": "31597c40-92cb-429a-8394-9cff99a51925"
        })
      })
        .then(stream => stream.json())
        .then(data => {
          this.actives = data;
          this.currentActives = data;
        })
        .catch(error => console.error(error));
    },

    fetchOptions(type) {
      this.currencyFilter = type["Currency"];
      this.riskFilter = type["FamilyRisk"];
      this.currentActives = this.filterAssets;
    }
  },
  mounted() {
    this.fetchActives();
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
}
</style>