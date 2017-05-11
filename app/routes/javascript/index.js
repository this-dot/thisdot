import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let { events } = this.modelFor('javascript');

    return events.find(event => {
      let date = moment(get(event, 'date'));
      return date.isAfter(moment());
    });
  }
});
