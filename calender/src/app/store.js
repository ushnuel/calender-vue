/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import SeedData from './seed';

const store = {
  state: {
    SeedData,
  },
  getActiveDay() {
    return this.state.SeedData.find(day => day.active);
  },
  setActiveDay(id) {
    this.state.SeedData.map(day => (day.id === id ? day.active = true : day.active = false));
  },
  submitEvent(eventDetails) {
    const { events } = this.getActiveDay();
    events.push({ details: eventDetails, edit: false });
  },
  findEvent(eventId) {
    return this.state.SeedData.find(({ id }) => id === eventId);
  },
  findEventObj(eventId, eventDetails) {
    const event = this.findEvent(eventId);
    return event.events.find(({ details }) => details === eventDetails);
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const event = this.findEventObj(dayId, eventDetails);
    event.edit = true;
  },
  resetEditOfAllEvents() {
    this.state.SeedData.map(({ events }) => events.map(event => event.edit = false));
  },
  updateEvent(eventId, originalDetails, editedDetails) {
    const event = this.findEventObj(eventId, originalDetails);
    event.details = editedDetails;
    event.edit = false;
  },
  deleteEvent(eventId, eventDetails) {
    const dayObj = this.findEvent(eventId);
    const eventToDelete = dayObj.events.findIndex(event => event.details === eventDetails);
    dayObj.events.splice(eventToDelete, 1);
  },
};

export default store;
