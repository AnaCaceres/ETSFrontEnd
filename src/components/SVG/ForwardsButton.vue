<template>
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle :class="{isHoveredCircle : hoveredForwards}" cx="40" cy="40" r="24.5" stroke="#BDBDBD" />
    <path :class="{isHoveredArrow : hoveredForwards}"
      d="M41.314 40.071L36.364 35.121C36.1818 34.9324 36.081 34.6798 36.0833 34.4176C36.0856 34.1554 36.1907 33.9046 36.3761 33.7192C36.5616 33.5338 36.8124 33.4286 37.0746 33.4263C37.3368 33.424 37.5894 33.5248 37.778 33.707L43.435 39.364C43.6224 39.5515 43.7278 39.8058 43.7278 40.071C43.7278 40.3361 43.6224 40.5905 43.435 40.778L37.778 46.435C37.5894 46.6171 37.3368 46.7179 37.0746 46.7157C36.8124 46.7134 36.5616 46.6082 36.3761 46.4228C36.1907 46.2374 36.0856 45.9866 36.0833 45.7244C36.081 45.4622 36.1818 45.2096 36.364 45.021L41.314 40.071Z"
      fill="#BDBDBD"
    />
  </svg>
</template>

<script>
export default {
  name: "forwards-button",
  props: ['hoveredForwards']
};
</script>

<style lang="scss">
.isHoveredCircle{
  stroke: #330066 !important;
}
  
.isHoveredArrow{
  fill: #02B5C4 !important;
} 
</style>
