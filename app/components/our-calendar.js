import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  formats: {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : '[last] dddd [at] LT',
    nextWeek : 'dddd [at] LT',
    sameElse : 'MMMM Mo Y'
  }
}).reopenClass({
  positionalParams: ['date']
});
