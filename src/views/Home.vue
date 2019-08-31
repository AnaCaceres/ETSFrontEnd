<template>
  <div class="home">{{ actives }}</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
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
  mounted(){
    this.fetchActives();
  }
};
</script>
