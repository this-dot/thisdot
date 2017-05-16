import Page from 'ember-writer/models/page';
import attr from 'ember-data/attr';
import Ember from 'ember';

// const { computed } = Ember;

export default Page.extend({
  filterClients: attr('string'),
  filterMentors: attr('string'),
  showContactForm: attr('boolean'),
  contactLegend: attr('string'),
  clientsLenged: attr('string'),
  mentorsLegend: attr('string'),
  mentorsParagraph: attr('string'),
  howItWorks: attr(),
  whatToExpect: attr()
});
