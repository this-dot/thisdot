import Ember from 'ember';

const {
  inject: { service },
  computed: { map },
  assign
} = Ember;

export default Ember.Component.extend({
  tagName: '',
  store: service(),

  speakers: map('event.speakers', function(speaker) {
    let author = this.get('store').peekRecord('author', speaker.id).getProperties([
      'image', 'frameworks', 'name'
    ]);
    return assign({}, author, speaker);
  })
});
