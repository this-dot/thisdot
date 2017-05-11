import Ember from 'ember';
import moment from 'moment';

const { 
  get,
  inject: { service } 
} = Ember;

export default Ember.Route.extend({
  i18n: service(),
  model({ eventDate }) {

    let format = this.get('i18n').t('event.date.format');
    let date = moment(eventDate, format);
    let { events } = this.modelFor('javascript');
    
    return events.find((item) => {
      return moment(get(item, 'date')).isSame(date, 'month');
    });
  },
  serialize(model) {
    let date = get(model, 'date');

    return {
      eventDate: moment(date).format('MM-YYYY')
    };
  }
});
