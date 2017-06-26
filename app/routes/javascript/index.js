import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let { events } = this.modelFor('javascript');
    let nextEvent = events.find(event => {
      let date = moment(get(event, 'date'));
      return date.isAfter(moment());
    });
    if (nextEvent) {
      this.transitionTo('javascript.event', nextEvent);
    }
  }
});
