import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model({ eventDate }) {
    let thisDate = moment(eventDate, 'MM-YYYY');
    let { events } = this.modelFor('javascript');
    let authors = this.store.peekAll('author');
    let thisEvent = events.find((item) => {
      return moment(get(item, 'date')).isSame(thisDate, 'month');
    });
    let speakers = authors.filterBy('featured', get(thisEvent, 'slug'));
    let isInteractive = get(thisEvent, 'title').toUpperCase() === 'JS.INTERACTIVE';

    return {
      thisEvent,
      speakers,
      isInteractive
    };
  }
});
