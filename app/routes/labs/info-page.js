import Ember from 'ember';

export default Ember.Route.extend({
  model({ slug }) {
    return this.store.findRecord('page', slug);
  }
});
