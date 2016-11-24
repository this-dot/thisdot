import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  date: attr('date'),
  brand: attr('string'),
  body: attr('string'),
  summary: attr('string'),
  video: attr(),
  slug: attr('string'),
  author: belongsTo('author'),
  tags: hasMany('tag')
});
