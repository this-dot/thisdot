import Ember from 'ember';

const {
  inject: { service },
  computed: { mapBy, map }
} = Ember;

export default Ember.Component.extend({
  tagName: '',
  store: service(),

  speakerIds: mapBy('event.speakers', 'id'),

  speakers: map('speakerIds', function(id) {
    return this.get('store').peekRecord('author', id);
  })
});
