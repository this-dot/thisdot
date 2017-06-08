import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Route.extend({
  headData: service(),
  model() {
    return {
      featured: this.store.findRecord('post', 'mw-thinking-reactively-with-rx-js-5'),
      posts: this.store.findAll('post')
    };
  },
  afterModel() {
    this.set('headData.title', 'This Dot: the evolution of the modern web');
  }
});
