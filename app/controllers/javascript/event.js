import Ember from 'ember';
const { assign, computed, get, isEmpty } = Ember;

export default Ember.Controller.extend({
    speakers: computed('model.thisEvent.id', 'model.thisEvent.speakers', function() {
      let speakers = this.get('model.thisEvent.speakers');

      if (isEmpty(speakers)) {
        return [];
      }

      return speakers.map((person) => {
        let speaker = this.store.peekRecord('author', get(person, 'id')).getProperties('image', 'name', 'frameworks');
        return assign({ }, person, speaker);
      });
    })
});
