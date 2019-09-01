<template>
  <div class="button-filter my-5">
    <div class="clicker" @click="$emit('clicked', filter.name)">
      <svg
        width="70"
        height="27"
        viewBox="0 0 70 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :class="{clickedfilter : filter.clicked}" :d="filter.pathD" fill="#BDBDBD" />

        <path
          :class="{hidden : !filter.clicked}"
          opacity="0.2"
          d="M0 27C7.1797 27 13 20.9558 13 13.5C13 6.04416 7.1797 0 0 0V27Z"
          fill="#02B5C4"
        />

        <path
          :class="{clickedfilter : filter.clicked}"
          d="M0 20C3.40091 20 6.15789 17.0899 6.15789 13.5C6.15789 9.91015 3.40091 7 0 7V20Z"
          fill="#E0E0E0"
        />
      </svg>
      <div :class="{focused : filter.clicked}">{{ filter.name }}</div>
    </div>
    <span :class="{focusedspan : filter.clicked}">{{ filter.type }}</span>
  </div>
</template>

<script>
export default {
  name: "button-filter",
  props: ["filter"]
};
</script>

<style lang="scss">

.button-filter {
  color: #bdbdbd;
}

.clicker {
  width: 170px;
  cursor: pointer;
  div {
    display: inline;
  }
}

.hidden {
  display: none;
}

.clickedfilter {
  fill: #02b5c4;
}

.focused {
  color: #828282;
}

.focusedspan {
  color: #02b5c4;
}

span {
  padding-left: 70px;
}
</style>