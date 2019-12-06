<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fas fa-pencil-alt edit-icon" @click="eventEdit(day.id, event.details)"></i>
        <i class="far fa-trash-alt delete-icon" @click="deleteEvent(day.id, event.details)"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="editedEntry" />
      <div class="has-text-centered icons">
        <i class="fas fa-check" @click="updateEvent(day.id, event.details, editedEntry)"> </i>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../app/store';

export default {
  name: 'CalendarEvent',
  props: ['day', 'event'],
  data() {
    return {
      editedEntry: '',
    };
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background: ${randomColor}`;
    },
  },
  methods: {
    eventEdit(id, details) {
      store.editEvent(id, details);
    },
    updateEvent(eventId, originalDetails, editedDetails) {
      // eslint-disable-next-line no-param-reassign
      if (editedDetails === '') editedDetails = originalDetails;
      store.updateEvent(eventId, originalDetails, editedDetails);
      this.editedEntry = '';
    },
    deleteEvent(eventId, eventDetails) {
      store.deleteEvent(eventId, eventDetails);
    },
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }
  .edit-icon,
  .delete-icon {
    padding: 0 3px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>
