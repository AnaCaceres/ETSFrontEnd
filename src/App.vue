<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>;
export default {
  name: "app"
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');

html, body{
  height: 100%;
}

#app {
  font-family: 'Open Sans Condensed';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #828282;
  height: 100%;
}
</style>
