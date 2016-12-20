import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Route.extend({
  headData: service(),
  model() {
    return {
      featured: this.store.peekRecord('post', 'mw-thinking-reactively-with-rx-js-5')
    };
  },
  afterModel() {
    this.set('headData.title', 'This Dot: the evolution of the modern web');
  }
});
