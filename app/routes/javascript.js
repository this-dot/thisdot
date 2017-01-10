import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model() {
    let events = this.store.peekAll('post').filterBy('brand', 'this-dot-js').toArray().sort(this._dateSorter);
    return {
      events
    };
  },

  _dateSorter(a, b) {
    let dateA = moment(get(a, 'date'));
    let dateB = moment(get(b, 'date'));
    if (dateA.isBefore(dateB)) {
      return -1;
    }
    if (dateA.isAfter(dateB)) {
      return 1;
    }
    return 0;
  }
});
