<template>
  <div>
    <div class="header p-2">ETS Funds</div>
    <div v-if="actives.length > 0">
      <div v-for="active in actives" :key="active.id">
        Name: {{ active.name }}
        Currency: {{ active.currency }}
        Family Risk: {{ active.risk_family }}
      </div>
    </div>
    <div v-else class="error pt-4 pl-2">
        No funds data
    </div>
  </div>
</template>

<script>
export default {
  name: "funds",
  props: ["actives"]
};
</script>

<style lang="scss">
.header {
  font-size: 20px;
  line-height: 27px;
  color: #02b5c4;
  border-bottom: 1px solid #e0e0e0;
}

.error {
    color: #000000;
}
</style>