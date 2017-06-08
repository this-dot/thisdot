import Ember from 'ember';
import mentors from 'thisdot/utils/mentors';

export default Ember.Route.extend({
  model() {
    return {
      mentors
    };
  }
});
