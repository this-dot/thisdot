import Ember from 'ember';

const {
  isPresent,
  run: { scheduleOnce },
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  scroller: service(),
  didInsertElement() {
    let show = this.get('show');
    if (isPresent(show)) {
      scheduleOnce('afterRender', this, this.scrollTo, show);
    }
  },

  scrollTo(show) {
    this.get('scroller').scrollVertical(`#${show}`);
  }
}).reopenClass({
  positionalParams: 'show'
});
