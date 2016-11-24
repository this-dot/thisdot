import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  postCount: attr('number'),
  twitter: attr('string'),
  github: attr('string'),
  slug: attr('string')
});