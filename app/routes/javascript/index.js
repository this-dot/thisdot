import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let { events } = this.modelFor('javascript');
    let people = this.store.peekAll('author');
    let nextEvent = events[1];

    return {
      nextEvent,
      people
    };
  }
});
