import Ember from 'ember';
import mentorsList from 'thisdot/utils/mentors';
import clientsList from 'thisdot/utils/clients';
const { computed, isPresent } = Ember;

export default Ember.Controller.extend({
  pageClients: computed('model.filterClients', function() {
    let filter =  this.get('model.filterClients');
    if (isPresent(filter)) {
      return clientsList.filterBy(filter);
    }
    return clientsList;
  }),

  pageMentors: computed('model.filterMentors', function() {
    let filter = this.get('model.filterMentors');
    if (isPresent(filter)) {
      return mentorsList.filterBy(filter);
    }
    return mentorsList;
  })
});
