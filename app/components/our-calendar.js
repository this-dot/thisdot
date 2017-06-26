import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  formats: {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[last] dddd [at] LT',
    sameElse : 'MMMM Do Y'
  }
}).reopenClass({
  positionalParams: ['date']
});
