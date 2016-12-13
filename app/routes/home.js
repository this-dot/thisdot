import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      featured: this.store.peekRecord('post', 'mw-thinking-reactively-with-rx-js-5')
    };
  }
});
