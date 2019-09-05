<template>
  <div>
    <apexchart type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexChart from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexChart
  },
 props: ['options', 'series'] 
};
</script>