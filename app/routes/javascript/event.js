import Ember from 'ember';
import moment from 'moment';

const { 
  get
} = Ember;

export default Ember.Route.extend({
  model({ eventDate }) {
    let { events } = this.modelFor('javascript');
    let date = moment(eventDate, 'MM-DD-YYYY');
    if (date.isValid) {
      return events.find((item) => {
        return moment(get(item, 'date')).isSame(date, 'day');
      });
    } else {
      let date = moment(eventDate, 'MM-YYYY');
      return events.find((item) => {
        return moment(get(item, 'date')).isSame(date, 'month');
      });
    }
  },
  serialize(model) {
    let date = get(model, 'date');

    return {
      eventDate: moment(date).format('MM-DD-YYYY')
    };
  }
});
