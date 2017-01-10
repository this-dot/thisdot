import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let { events } = this.modelFor('javascript');
    let authors = this.store.peekAll('author');
    let [nextEvent] = events;
    let speakers = authors.filterBy('featured', get(nextEvent, 'slug'));

    return {
      nextEvent,
      speakers
    };
  }
});
