<template>
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle :class="{isHoveredCircle : hoveredBackwards}" cx="40" cy="40" r="24.5" stroke="#BDBDBD" />
    <path :class="{isHoveredArrow : hoveredBackwards}"
      d="M38.757 40L43.707 44.95C43.8026 45.0422 43.8787 45.1526 43.9311 45.2746C43.9836 45.3966 44.0111 45.5278 44.0123 45.6606C44.0135 45.7934 43.9882 45.9251 43.9379 46.048C43.8876 46.1708 43.8133 46.2825 43.7194 46.3764C43.6256 46.4703 43.5139 46.5445 43.391 46.5948C43.2681 46.6451 43.1364 46.6704 43.0036 46.6692C42.8709 46.6681 42.7396 46.6405 42.6176 46.5881C42.4956 46.5357 42.3853 46.4595 42.293 46.364L36.636 40.707C36.4486 40.5195 36.3433 40.2652 36.3433 40C36.3433 39.7348 36.4486 39.4805 36.636 39.293L42.293 33.636C42.4817 33.4538 42.7343 33.353 42.9964 33.3553C43.2586 33.3576 43.5095 33.4628 43.6949 33.6482C43.8803 33.8336 43.9854 34.0844 43.9877 34.3466C43.99 34.6088 43.8892 34.8614 43.707 35.05L38.757 40Z"
      fill="#BDBDBD"
    />
  </svg>
</template>

<script>
export default {
  name: "backwards-button",
  props:['hoveredBackwards']
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
