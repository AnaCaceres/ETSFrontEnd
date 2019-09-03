<template>
  <div>
    <div class="header p-2">ETS Funds</div>
    <div v-if="assets.length > 0">
      <Asset
        v-for="asset in assets"
        :key="asset.id"
        :information="asset"
      />
    </div>
    <div v-else class="error pt-4 pl-2">No funds data</div>
  </div>
</template>

<script>
import Asset from "@/components/Asset.vue";

export default {
  name: "funds",
  components: {
    Asset
  },
  props: ["assets"]
};
</script>

<style lang="scss">
.header {
  font-size: 20px;
  line-height: 27px;
  color: #02b5c4;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 11px;
}

.error {
  color: #000000;
}
</style>