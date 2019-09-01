<template>
  <div class="home container-fluid mx-0">
    <div class="row">
      <logo/>
      <div class="col-12 col-lg-4">
        <filters></filters>
      </div>
      <div class="col-12 col-lg-8 text-center">{{ actives }}</div>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "home",
  components: {
    Filters,
    Logo
  },
  data() {
    return {
      actives: []
    };
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
        .then(data => (this.actives = data))
        .catch(error => console.error(error));
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