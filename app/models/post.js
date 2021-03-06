import Ember from 'ember';
import Post from 'ember-writer/models/post';
import attr from 'ember-data/attr';
import moment from 'moment';
const { computed, computed: { mapBy } } = Ember;

export default Post.extend({
  subTitle: attr('string'),
  brand: attr('string'),
  video: attr('string'),
  thumbnail: attr('string'),
  subscribe: attr('string'),
  timeText: attr('string'),
  speakers: attr(),

  videos: mapBy('speakers', 'video'),

  timezoneDate: computed('date', 'timeText', function() {
    return moment(this.get('date')).tz('America/Los_Angeles');
  }).readOnly(),

  hasSpeakerVideos: computed('speakers.@each.video', function() {
    return this.get('videos').reduce((result, value) => value ? result : false, true);
  })
});
