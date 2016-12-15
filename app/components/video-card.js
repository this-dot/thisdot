import Ember from 'ember';
import moment from 'moment';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['video-card'],
  classNameBindings: ['isFuture'],
  isFuture: computed('post.date', function() {
    let today = moment();
    let eventDate = moment(this.get('post.date'));
    return eventDate.isAfter(today);
  })
});
