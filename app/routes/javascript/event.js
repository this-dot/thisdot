import Ember from 'ember';
import moment from 'moment';
const { get } = Ember;

export default Ember.Route.extend({
  model({ eventDate }) {
    let thisDate = moment(eventDate, 'MM-YYYY');
    let { events } = this.modelFor('javascript');
    let people = this.store.peekAll('author');
    let thisEvent = events.find((item) => {
      return moment(get(item, 'date')).isSame(thisDate, 'month');
    });
    let isInteractive = get(thisEvent, 'title').toUpperCase() === 'JS.INTERACTIVE';
    let isPrevious = moment(get(thisEvent, 'date')).isBefore(moment());

    return {
      thisEvent,
      people,
      isInteractive,
      isPrevious
    };
  }
});
