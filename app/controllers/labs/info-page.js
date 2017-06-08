import Ember from 'ember';
import mentorsList from 'thisdot/utils/mentors';
import clientsList from 'thisdot/utils/clients';
const { computed, isPresent } = Ember;

export default Ember.Controller.extend({
  
  pageClients: computed('model.clients.[]', function() {
    return this.get('model.clients')
      .map(name => clientsList.findBy('name', name));
  }),

  pageMentors: computed('model.mentors.[]', function() {
    return this.get('model.mentors')
      .map(name => mentorsList.findBy('name', name));
  })
});
