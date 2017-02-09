import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Controller.extend({
  queryParams: ['show'],
  show: '',
  actions: {
    closerDateFirst(a, b) {
      let dateA = moment(get(a, 'date'));
      let dateB = moment(get(b, 'date'));
      if (dateA.isBefore(dateB)) {
        return -1;
      }
      if (dateA.isAfter(dateB)) {
        return 1;
      }
      return 0;
    },
    filterPastEvents(a){
      let dateNow = moment();
      let dateA = moment(a);
      return dateNow.isBefore(dateA);
    }
  }
});
