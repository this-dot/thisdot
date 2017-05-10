import Ember from 'ember';
const {
  inject: {
    service
  },
  isBlank
} = Ember;
import {
  task
} from 'ember-concurrency';

const action =
  'https://us-central1-this-dot.cloudfunctions.net/thisDotLabsSubscribe';

export default Ember.Component.extend({
  tagName: 'form',
  ajax: service(),

  init() {
    this._super(...arguments);
    this.setProperties({
      title: '',
      name: '',
      email: '',
      message: '',
      sent: false,
      loading: false,
      error: false
    });
  },

  submitTask: task(function* (data) {
    return yield this.get('ajax').post(action, {
      data
    }).then(() => {
      this.set('loading', false);
    }).catch(() => {
      this.setProperties({
        error: true,
        loading: false
      });
    });
  }).restartable(),

  actions: {
    submit() {
      let data = this.getProperties(['title', 'name', 'email', 'message', 'page']);

      if (isBlank(data.title) || isBlank(data.name) || isBlank(data.email) || isBlank(data.message)) {
        return this.set('error', true);
      }

      this.setProperties({
        error: false,
        loading: true
      });

      this.get('submitTask').perform(data);
    }
  }
});
