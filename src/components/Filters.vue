<template>
  <div class="filters row">
    <div class="col-12 col-lg-6 px-0">
      <div class="row mx-0 align-items-center">
        <div class="col-12 px-0 d-flex justify-content-around">
          <button-filter
            v-for="filter in filters"
            :key="filter.name"
            v-on:clicked="toggleFilter"
            :filter="filter"
          />
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 selector">
      <div class="row mx-0 align-items-center">
        <div class="col-12 px-0">
          <button-options v-on:clicked-option="toggleOption" :options="optionSelected"></button-options>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFilter from "@/components/ButtonFilter.vue";
import ButtonOptions from "@/components/ButtonOptions.vue";

export default {
  name: "filters",
  components: {
    ButtonFilter,
    ButtonOptions
  },
  data() {
    return {
      current: "Currency",
      type: {
        "Currency": "All",
        "FamilyRisk": "All",
      },
      
      filters: [
        {
          name: "Currency",
          type: "All",
          pathD:
            "M35 17V15C34.2044 15 33.4413 14.6839 32.8787 14.1213C32.3161 13.5587 32 12.7956 32 12C32 11.2044 32.3161 10.4413 32.8787 9.87868C33.4413 9.31607 34.2044 9 35 9V8C35 7.73478 35.1054 7.48043 35.2929 7.29289C35.4804 7.10536 35.7348 7 36 7C36.2652 7 36.5196 7.10536 36.7071 7.29289C36.8946 7.48043 37 7.73478 37 8V9H37.022C37.8118 9 38.5693 9.31375 39.1278 9.87224C39.6862 10.4307 40 11.1882 40 11.978C40 12.2432 39.8946 12.4976 39.7071 12.6851C39.5196 12.8726 39.2652 12.978 39 12.978C38.7348 12.978 38.4804 12.8726 38.2929 12.6851C38.1054 12.4976 38 12.2432 38 11.978C38 11.7186 37.897 11.4699 37.7136 11.2864C37.5301 11.103 37.2814 11 37.022 11H37V13C37.7956 13 38.5587 13.3161 39.1213 13.8787C39.6839 14.4413 40 15.2044 40 16C40 16.7956 39.6839 17.5587 39.1213 18.1213C38.5587 18.6839 37.7956 19 37 19V20C37 20.2652 36.8946 20.5196 36.7071 20.7071C36.5196 20.8946 36.2652 21 36 21C35.7348 21 35.4804 20.8946 35.2929 20.7071C35.1054 20.5196 35 20.2652 35 20V19H34.949C34.1669 19 33.4168 18.6893 32.8637 18.1363C32.3107 17.5832 32 16.8331 32 16.051C32 15.7858 32.1054 15.5314 32.2929 15.3439C32.4804 15.1564 32.7348 15.051 33 15.051C33.2652 15.051 33.5196 15.1564 33.7071 15.3439C33.8946 15.5314 34 15.7858 34 16.051C34.0003 16.3026 34.1003 16.5438 34.2782 16.7218C34.4562 16.8997 34.6974 16.9997 34.949 17H35ZM37 17C37.2652 17 37.5196 16.8946 37.7071 16.7071C37.8946 16.5196 38 16.2652 38 16C38 15.7348 37.8946 15.4804 37.7071 15.2929C37.5196 15.1054 37.2652 15 37 15V17ZM35 11C34.7348 11 34.4804 11.1054 34.2929 11.2929C34.1054 11.4804 34 11.7348 34 12C34 12.2652 34.1054 12.5196 34.2929 12.7071C34.4804 12.8946 34.7348 13 35 13V11ZM36 24C30.477 24 26 19.523 26 14C26 8.477 30.477 4 36 4C41.523 4 46 8.477 46 14C46 19.523 41.523 24 36 24ZM36 22C38.1217 22 40.1566 21.1571 41.6569 19.6569C43.1571 18.1566 44 16.1217 44 14C44 11.8783 43.1571 9.84344 41.6569 8.34315C40.1566 6.84285 38.1217 6 36 6C33.8783 6 31.8434 6.84285 30.3431 8.34315C28.8429 9.84344 28 11.8783 28 14C28 16.1217 28.8429 18.1566 30.3431 19.6569C31.8434 21.1571 33.8783 22 36 22Z",
          clicked: true
        },
        {
          name: "Family Risk",
          type: "All",
          pathD:
            "M26.832 19C26.2814 17.7384 25.9981 16.3765 26 15C26 9.477 30.477 5 36 5C41.523 5 46 9.477 46 15C46.0019 16.3765 45.7186 17.7384 45.168 19H26.832ZM43.748 17C44.0515 15.8183 44.0807 14.5828 43.8334 13.388C43.586 12.1933 43.0687 11.0709 42.3209 10.1068C41.5732 9.14276 40.6148 8.36248 39.5192 7.82569C38.4235 7.2889 37.2196 7.00984 35.9995 7.00984C34.7794 7.00984 33.5755 7.2889 32.4798 7.82569C31.3842 8.36248 30.4258 9.14276 29.6781 10.1068C28.9303 11.0709 28.413 12.1933 28.1656 13.388C27.9183 14.5828 27.9475 15.8183 28.251 17H43.748ZM36 10C35.7348 10 35.4804 9.89464 35.2929 9.70711C35.1054 9.51957 35 9.26522 35 9C35 8.73478 35.1054 8.48043 35.2929 8.29289C35.4804 8.10536 35.7348 8 36 8C36.2652 8 36.5196 8.10536 36.7071 8.29289C36.8946 8.48043 37 8.73478 37 9C37 9.26522 36.8946 9.51957 36.7071 9.70711C36.5196 9.89464 36.2652 10 36 10ZM31 14C30.7348 14 30.4804 13.8946 30.2929 13.7071C30.1054 13.5196 30 13.2652 30 13C30 12.7348 30.1054 12.4804 30.2929 12.2929C30.4804 12.1054 30.7348 12 31 12C31.2652 12 31.5196 12.1054 31.7071 12.2929C31.8946 12.4804 32 12.7348 32 13C32 13.2652 31.8946 13.5196 31.7071 13.7071C31.5196 13.8946 31.2652 14 31 14ZM41 14C40.7348 14 40.4804 13.8946 40.2929 13.7071C40.1054 13.5196 40 13.2652 40 13C40 12.7348 40.1054 12.4804 40.2929 12.2929C40.4804 12.1054 40.7348 12 41 12C41.2652 12 41.5196 12.1054 41.7071 12.2929C41.8946 12.4804 42 12.7348 42 13C42 13.2652 41.8946 13.5196 41.7071 13.7071C41.5196 13.8946 41.2652 14 41 14ZM36 11C36.2652 11 36.5196 11.1054 36.7071 11.2929C36.8946 11.4804 37 11.7348 37 12V15C37 15.2652 36.8946 15.5196 36.7071 15.7071C36.5196 15.8946 36.2652 16 36 16C35.7348 16 35.4804 15.8946 35.2929 15.7071C35.1054 15.5196 35 15.2652 35 15V12C35 11.7348 35.1054 11.4804 35.2929 11.2929C35.4804 11.1054 35.7348 11 36 11Z",
          clicked: false
        }
      ],
      options: [
        {
          name: "Currency",
          buttons: [
            {
              name: "All",
              img: "all-icon",
              order: 1,
              clicked: true
            },
            {
              name: "JPY",
              img: "jpy-icon",
              order: 3,
              clicked: false
            },
            {
              name: "EUR",
              img: "euro-icon",
              order: 2,
              clicked: false
            },
            {
              name: "USD",
              img: "usd-icon",
              order: 4,
              clicked: false
            }
          ]
        },
        {
          name: "Family Risk",
          buttons: [
            {
              name: "All",
              img: "all-icon",
              order: 1,
              clicked: true
            },
            {
              name: "Balanced",
              img: "balanced-icon",
              order: 3,
              clicked: false
            },
            {
              name: "Equity",
              img: "equity-icon",
              order: 2,
              clicked: false
            }
          ]
        }
      ]
    };
  },
  computed: {
    optionSelected() {
      let selected;
      this.options.map((option) => {if (option.name === this.current) selected = option});
      return selected;
    }
  },
  methods: {
    toggleFilter(event) {
      this.filters.forEach((filter, index) => {
        if (filter.name === event) {
          this.current = filter.name;
          filter.clicked = true;
        } else {
          filter.clicked = false;
        }
      });
    },
    toggleOption(event) {
      this.filters.forEach((filter) => {
        if (filter.name === event[0]) {
          this.type[filter.name.split(" ").join('')] = event[1];
          filter.type = event[1];
        }
      })
      let selected;
      this.options.map((option) => {if (option.name === event[0]) selected =  option});
      selected.buttons.forEach((option) => {
        if (option.name === event[1]) {
          option.clicked = true;
        } else {
          option.clicked = false;
        }
      })
      this.$emit('filterAssets', this.type);
    }
  }
};
</script>

<style lang="scss">
$breakpoint-desktop: 992px;

.filters {
  margin-top: 75px;
  @media (min-width: $breakpoint-desktop) {
    margin-top: 0;
  }
}

.filters .col-12 {
  @media (min-width: $breakpoint-desktop) {
    display: block !important;
  }
}

.filters,
.row {
  @media (min-width: $breakpoint-desktop) {
    height: 100%;
  }
}

.row.buttons {
  margin-top: 60px;
  @media (min-width: $breakpoint-desktop) {
    margin-top: 0;
    top: 0;
  }
}

span {
  font-size: 12px;
  line-height: 16px;
}

.selector {
  @media (min-width: $breakpoint-desktop) {
    background-color: #f2f2f2;
  }
}
</style>
