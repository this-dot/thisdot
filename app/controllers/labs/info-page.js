import Ember from 'ember';
import mentorsList from 'thisdot/utils/mentors';
import clientsList from 'thisdot/utils/clients';
const { computed } = Ember;

export default Ember.Controller.extend({
  pageClients: computed('model.filterClients', function() {
    return clientsList.filterBy(this.get('model.filterClients'));
  }),

  pageMentors: computed('model.filterMentors', function() {
    return mentorsList.filterBy(this.get('model.filterMentors'));
  })
});
