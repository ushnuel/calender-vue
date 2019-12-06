<template>
  <div class="day" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <CalendarEvent v-for="(event, index) in day.events" :key="index" :day="day" :event="event" />
    </div>
  </div>
</template>

<script>
import store from '../app/store';
import CalendarEvent from './CalendarEvent.vue';

export default {
  name: 'CalendarDay',
  props: ['day'],
  components: {
    CalendarEvent,
  },
  methods: {
    setActiveDay(id) {
      store.setActiveDay(id);
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 500px) {
  .day {
    width: 8rem;
  }
}
.day {
  background-color: #4a4a4a;
  color: #fff;
  border-left: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-size: 12px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: darken(#4a4a4a, 3%);
  }
  .day-banner {
    background-color: #333333;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }
  .day-details {
    padding: 10px;
  }
  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>
