<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

export default {
  name: 'app',
  components: {
    CalendarWeek,
    CalendarEntry,
  },
};
</script>

<style lang="scss">
  body, html {
    height: 100%;
    background: rgb(107, 103, 103);
  }
</style>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
