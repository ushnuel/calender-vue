<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" name="calender-entry" placeholder="New Event" v-model="inputEntry">
      <p class="calendar-entry-day">
        Date of Event: <span class="bold">{{ titleOfEventDay }}</span>
      </p>
      <a @click="submitEvent(inputEntry)" class="button is-primary is-small is-outlined">Submit</a>
    </div>
    <p class="calendar-entry-error-note" v-if="error">
      You must type an event...
    </p>
  </div>
</template>

<script>
import Store from '../app/store';

export default {
  name: 'CalenderEntry',
  data() {
    return {
      inputEntry: '',
      error: false,
    };
  },
  computed: {
    titleOfEventDay() {
      return Store.getActiveDay().fullTitle;
    },
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === '') {
        this.error = true;
        return;
      }
      Store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  #calendar-entry {
    border-radius: 2rem;
    margin: auto;
    width: 17rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    background: white;

    .calendar-entry-error-note {
      color: red;
      font-size: 0.9rem;
    }
  }
  .calendar-entry-note {
    padding: 1rem;

    input {
      border: transparent;
      height: 2rem;
      border-bottom: 1px solid #00d1b2;
    }

    p {
      margin: 1.5rem;
    }
    input:focus {
      outline: none;
    }
  }
</style>
