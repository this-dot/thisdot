import Ember from 'ember';
import Post from 'ember-writer/models/post';
import attr from 'ember-data/attr';
import moment from 'moment';
const { computed } = Ember;

export default Post.extend({
  brand: attr('string'),
  video: attr('string'),
  thumbnail: attr('string'),
  subscribe: attr('string'),
  speakers: attr(),

  timezoneDate: computed('date', function() {
    return moment(this.get('date')).tz('America/Los_Angeles');
  }).readOnly(),

  hasSpeakerVideos: computed('speakers.@each.video', function() {
    let speakers = this.get('speakers') || [];
    return speakers.mapBy('video').reduce((result, value) => value ? result : false, true);
  })
});
