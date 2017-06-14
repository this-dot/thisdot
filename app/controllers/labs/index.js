import Ember from 'ember';
import mentorsList from 'thisdot/utils/mentors';
import clientsList from 'thisdot/utils/clients';
const { computed } = Ember;

export default Ember.Controller.extend({
  allClients: computed(function() {
    return clientsList;
  }),

  allMentors: computed(function() {
    return mentorsList;
  })
});
