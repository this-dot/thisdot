import Author from 'ember-writer/models/author';
import attr from 'ember-data/attr';

export default Author.extend({
  twitter: attr('string'),
  github: attr('string'),
  featured: attr(),
  image: attr('string'),
  frameworks: attr('string')
});
