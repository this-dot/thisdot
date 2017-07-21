import Ember from 'ember';

const {
  inject: { service },
  computed: { map },
  assign,
  getProperties
} = Ember;

export default Ember.Component.extend({
  tagName: '',
  store: service(),

  speakers: map('event.speakers', function(speaker) {
    let author = this.get('store').peekRecord('author', speaker.id);
    if (author) {
      return assign({}, getProperties(author, [
        'image', 'frameworks', 'name'
      ]), speaker);
    }
  })
});
