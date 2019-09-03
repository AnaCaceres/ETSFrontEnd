<template>
  <svg class="usd" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="white" />
    <mask
      id="maskusd"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="12" fill="white" /> -->
    </mask>
    <g mask="url(#maskusd)">
      <rect x="1" width="22" height="4" fill="#FF003D" />
      <rect x="1" y="7" width="24" height="4" fill="#FF003D" />
      <rect x="-1" y="14" width="26" height="4" fill="#FF003D" />
      <rect x="1" y="21" width="22" height="4" fill="#FF003D" />
      <rect x="-6" y="-1" width="18" height="12" fill="#17163A" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "usd-icon"
};
</script>
