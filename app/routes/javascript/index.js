import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    /* 
      TODO: getting featured event should not be done by index - we need a better way
    */
    let { events: [, , event] } = this.modelFor('javascript');

    return event;
  }
});
