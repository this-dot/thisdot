import Ember from 'ember';
import moment from 'moment';
const { 
  get,
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  model() {
    return hash({
      events: this.store.findAll('post').then(events => {
        return events.filterBy('brand', 'this-dot-js')
          .toArray()
          .sort(this._dateSorter);
      }),
      authors: this.store.findAll('author')
    });
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
