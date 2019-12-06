<template>
  <div id="calendar-week">
    <div class="column-calendar is-mobile">
      <CalendarDay v-for="day in sharedState.SeedData" v-bind:key="day.id" :day="day" />
    </div>
  </div>
</template>

<script>
import store from '../app/store';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalenderWeek',
  data() {
    return {
      sharedState: store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
}
.column-calendar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
@media (max-width: 500px) {
  .column-calendar {
    flex-direction: column;
    align-items:unset;
    justify-content: unset;
  }
}
</style>
