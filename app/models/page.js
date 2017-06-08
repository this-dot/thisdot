import Page from 'ember-writer/models/page';
import attr from 'ember-data/attr';

// const { computed } = Ember;

export default Page.extend({
  showContactForm: attr('boolean'),
  contactLegend: attr('string'),
  clientsLegend: attr('string'),
  mentorsLegend: attr('string'),
  mentorsParagraph: attr('string'),
  howItWorks: attr(),
  whatToExpect: attr(),
  subTitle: attr('string'),
  mentors: attr(),
  clients: attr()
});
