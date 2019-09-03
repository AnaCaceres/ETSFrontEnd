<template>
  <div
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="clickedAsset"
    class="asset row mx-auto mb-4"
  >
    <div class="asset-col name col-12 col-lg-6 d-flex align-items-center">{{ information.name }}</div>
    <div class="asset-col info col-12 col-lg-6 d-flex align-items-center">
      <div class="row w-100">
        <div class="col-6 p-0 d-flex justify-content-center">
          <currency-icon class="mr-1 my-auto" :hovered="hovered" />
          <p :class="{hovered : hovered}" class="m-0 mr-2 my-auto type">
            currency
          </p>
          <p class="my-auto">{{ information.currency }}</p>
        </div>
        <div class="col-6 p-0 d-flex justify-content-center">
          <risk-icon class="mr-1 my-auto" :hovered="hovered" />
          <p :class="{hovered : hovered}" class="m-0 mr-2 my-auto type">
            family risk
          </p>
          <p class="my-auto">{{ information.risk_family }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyIcon from "@/components/SVG/Currency.vue";
import RiskIcon from "@/components/SVG/Risk.vue";

export default {
  name: "asset",
  components: {
    CurrencyIcon,
    RiskIcon
  },
  props: ["information"],
  data() {
    return {
      hovered: false
    };
  },
  methods: {
    clickedAsset(event) {
      Event.$emit("clickedAsset", this.information);
    }
  }
};
</script>

<style lang="scss">
$breakpoint-desktop: 992px;

.type {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  color: #828282;
  text-transform: uppercase;
}

.asset {
  border-radius: 10px;
  background-color: #f2f2f2;
  height: 90px;
  &:hover {
    cursor: url("../assets/pointer.svg"), auto;
    .info {
      background-color: #02b5c4;
    }
    .name {
      background-color: #e0e0e0;
    }
  }
  @media (min-width: $breakpoint-desktop) {
    height: 45px;
  }
}

.info {
  font-family: "Open Sans";
  font-weight: normal;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (min-width: $breakpoint-desktop) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
}

.name {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (min-width: $breakpoint-desktop) {
    border-bottom-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0;
  }
}

.hovered {
  color: #ffffff;
}

.asset-col {
  font-size: 12px;
  line-height: 16px;
  color: #4f4f4f;
  height: 45px;
}

.currency {
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  color: #828282;
}
</style>