import Ember from 'ember';
import mentors from 'thisdot/utils/mentors';
import clients from 'thisdot/utils/clients';

export default Ember.Route.extend({
  model() {
    return {
      mentors: mentors.filterBy('doesAssessment'),
      clients: clients.filterBy('didAssessment')
    };
  }
});
