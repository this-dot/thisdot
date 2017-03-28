import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model({ eventDate }) {

    let date = moment(eventDate, 'MM-YYYY');
    let { events } = this.modelFor('javascript');
    
    return events.find((item) => {
      return moment(get(item, 'date')).isSame(date, 'month');
    });
  }
});
