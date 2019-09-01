<template>
  <div class="button-options">
    <div
      class="clicked-option row"
    >
      <div v-for="(option, index) in options.buttons" :key="index" :class="['order-lg-' + option.order, {clickedoption : option.clicked}]" class="py-3 pl-4 col-6 col-lg-12" @click="$emit('clicked-option', [options.name, option.name])">
        <svg :is="option.img" />
        <p class="pl-2">{{ option.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EuroIcon from "@/components/SVG/Euro.vue";
import AllIcon from "@/components/SVG/All.vue";
import JpyIcon from "@/components/SVG/Jpy.vue";
import UsdIcon from "@/components/SVG/Usd.vue";
import EquityIcon from "@/components/SVG/Equity.vue";
import BalancedIcon from "@/components/SVG/Balanced.vue";

export default {
  name: "button-options",
  props: ["options"],
  components: {
    EuroIcon,
    AllIcon,
    JpyIcon,
    UsdIcon,
    EquityIcon,
    BalancedIcon
  }
};
</script>

<style lang="scss">
$breakpoint-desktop: 992px;

p {
  display: inline;
}

.button-options {
  color: #828282;
}

.clicked-option {
  cursor: pointer;
}

.clickedoption {
  color: #02b5c4;
}

</style>