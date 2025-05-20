<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SensorView/>
</template>

<script>
import SensorView from './views/SensorView.vue';

export default {
  name: 'App',
  components: {
    SensorView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
