import Post from 'ember-writer/models/post';
import attr from 'ember-data/attr';

export default Post.extend({
  brand: attr(),
  video: attr(),
});