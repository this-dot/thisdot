import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Route.extend({
  headData: service(),
  afterModel() {
    this.set('headData.title', 'This Dot: the evolution of the modern web');
  }
});
