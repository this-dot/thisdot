import Ember from 'ember';
import moment from 'moment';

const {
  computed,
  computed: { equal }
} = Ember;

export default Ember.Controller.extend({
  uppercaseTitle: computed('model.title', function() {
    let title = this.get('model.title') || '';
    return title.toUpperCase();
  }),
  
  isInteractive: equal('uppercaseTitle', 'JS.INTERACTIVE'),

  isPrevious: computed('model.date', function() {
    let date = this.get('model.date');

    let now = moment();
    return moment(date).isBefore(now);
  })
});