<template>
  <div class="asset-information container-fluid">
    <div class="row logo-header align-items-center">
      <logo class="icon" />
    </div>
    <div class="row d-block d-lg-none">
      <router-link to="/" class="go-back mx-2 mt-3 mb-4">
        <img class="mr-2" src="../assets/backarrow.svg" />
        Volver
      </router-link>
    </div>
    <div class="row information">
      <div class="graph col-12 col-lg-5 d-flex align-items-center justify-content-center">
        <div class="row mb-lg-5 mt-3 justify-content-center">
          <div class="col-12 mb-0 mb-lg-3 text-left text-lg-center">
            <p class="price-evolution">Price Evolution</p>
          </div>
          <div class="col-12 text-center mx-auto">
            <chart :series="this.series" :options="this.options"></chart>
          </div>
        </div>
      </div>
      <div class="details col-12 col-lg-7 px-3 px-lg-5 pt-5">
        <div class="row mb-lg-5">
          <div class="col-12">
            <p class="description">name</p>
            <p class="asset-name d-block">{{ this.asset.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">currency</p>
            <p class="asset-detail d-block">{{ this.asset.currency.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">issuer</p>
            <p class="asset-detail d-block">{{ this.asset.issuer.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">isin</p>
            <p class="asset-detail d-block">{{ this.asset.isin }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">region</p>
            <p
              class="asset-detail d-block"
            >{{ this.asset.region.name }} / {{ this.asset.region.region_level2.name }} / {{ this.asset.region.region_level2.region_level3.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">risk family</p>
            <p
              class="asset-detail d-block"
            >{{ this.asset.risk_family.name }} / {{ this.asset.risk_family.sub_family.name }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="description">sector</p>
            <p class="asset-detail d-block">{{ this.asset.sector.name }}</p>
          </div>
        </div>
        <div class="row align-items-center justify-content-end">
          <router-link
            v-if="this.previous.id !== this.next.id"
            tag="div"
            @mouseover.native="hoveredBackwards = true"
            @mouseleave.native="hoveredBackwards = false"
            class="button-div col-3 col-lg-6 d-flex align-items-center justify-content-center navigation"
            :to="'/asset/' + this.previous.id"
          >
            <div class="row">
              <div class="col-10 d-none d-lg-block px-0 align-self-center">
                <p :class="{hoveredRoute : hoveredBackwards}">{{ this.previous.name }}</p>
              </div>
              <div class="col-12 col-lg-2 px-0">
                <backwards-button :hoveredBackwards="hoveredBackwards" />
              </div>
            </div>
          </router-link>
          <router-link
            v-if="this.previous.id != this.$store.state.current"
            tag="div"
            @mouseover.native="hoveredForwards = true"
            @mouseleave.native="hoveredForwards = false"
            class="button-div col-3 col-lg-6 d-flex align-items-center justify-content-center navigation"
            :to="'/asset/' + this.next.id"
          >
            <div class="row">
              <div class="col-12 col-lg-2 px-0">
                <forwards-button :hoveredForwards="hoveredForwards" />
              </div>
              <div class="col-10 d-none d-lg-block px-0 align-self-center">
                <p :class="{hoveredRoute : hoveredForwards}">{{ this.next.name }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Chart from "@/components/Chart.vue";
import ForwardsButton from "@/components/SVG/ForwardsButton.vue";
import BackwardsButton from "@/components/SVG/BackwardsButton.vue";

export default {
  name: "asset-information",
  components: {
    Logo,
    Chart,
    ForwardsButton,
    BackwardsButton
  },
  data() {
    return {
      hoveredBackwards: false,
      hoveredForwards: false,
      asset: [],
      options: {
        chart: {
          id: "prices",
          toolbar: {
            show: false
          }
        },
        labels: [],
        xaxis: {
          type: "datetime",
          labels: {
            rotate: 0,
            style: {
              colors: "#ffffff",
              fontSize: "12px",
              fontFamily: "Open Sans",
              cssClass: "apexcharts-yaxis-label"
            },
            offsetY: 5,
            offsetX: 25
          },
          axisTicks: {
            show: false
          },
          tickAmount: 6,
          tickPlacement: "on"
        },
        yaxis: {
          opposite: true,
          decimalsInFloat: 0,
          labels: {
            style: {
              color: "#ffffff",
              fontSize: "12px",
              fontFamily: "Open Sans",
              cssClass: "apexcharts-yaxis-label"
            },
            offsetX: -20
          },
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "round",
          colors: ["#02B5C4"],
          width: 3
        },
        grid: {
          show: true,
          borderColor: "#ffffff",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: undefined,
            opacity: 0.2
          },
          column: {
            colors: undefined,
            opacity: 0.2
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      series: [
        {
          name: "price",
          data: []
        }
      ],
      next: this.$store.state.next,
      previous: this.$store.state.previous
    };
  },
  methods: {
    fetchAsset() {
      fetch("http://jsonstub.com/" + this.$route.params.id, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "JsonStub-User-Key": "6fe1470b-4310-4998-bc11-969c53fd512e",
          "JsonStub-Project-Key": "31597c40-92cb-429a-8394-9cff99a51925"
        })
      })
        .then(stream => stream.json())
        .then(data => {
          this.asset = data;
          this.options.labels = [];
          this.series[0].data = [];
          this.asset.prices.forEach(price => {
            this.options.labels.push(price.date);
            this.series[0].data.push(price.value);
          });
          this.next = this.$store.state.next;
          this.previous = this.$store.state.previous;
        })
        .catch(error => console.error(error));
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("saveAssets", to.params.id);
    this.$route.params.id = to.params.id;
    this.fetchAsset();
    next();
  },
  mounted() {
    this.fetchAsset();
  }
};
</script>

<style lang="scss">
$breakpoint-desktop: 992px;

.icon svg {
  position: relative !important;
  top: 0 !important;
  margin: 0 auto !important;
}

.asset-information {
  height: 100%;
}

.logo-header {
  height: 10%;
  background-color: white;
}

.information {
  @media (min-width: $breakpoint-desktop) {
    height: 90%;
  }
  .row {
    height: auto;
  }
}

.graph {
  background: linear-gradient(90deg, #330066 0%, #02b5c4 100%);
}

.details {
  background-color: #f2f2f2;
}

.description {
  display: block;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
  color: #bdbdbd;
}

.go-back {
  text-decoration: none;
  font-family: "Open Sans Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #828282;
}

.asset-name,
.price-evolution {
  font-family: "Open Sans Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
}

.price-evolution {
  color: #ffffff;
}

.asset-information {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
}

.apexcharts-gridline {
  stroke-opacity: 0.2;
}

.button-div {
  cursor: pointer;
}

.hoveredRoute {
  color: #02b5c4;
}

.apexcharts-canvas {
  margin: 0 auto;
}

.navigation {
  font-family: "Open Sans Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.15px;
  color: #4f4f4f;
}
</style>