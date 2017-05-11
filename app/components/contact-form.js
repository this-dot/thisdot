import Ember from 'ember';
const {
  inject: {
    service
  },
  computed: {
    empty,
    and
  },
  isBlank,
  set
} = Ember;
import {
  task
} from 'ember-concurrency';

const action =
  'https://us-central1-this-dot.cloudfunctions.net/thisDotLabsSubscribe';

export default Ember.Component.extend({
  tagName: 'form',
  ajax: service(),

  titleEmpty: empty('title'),
  nameEmpty: empty('name'),
  emailEmpty: empty('email'),
  messageEmpty: empty('message'),

  hasTitleError: and('titleEmpty', 'titleError'),
  hasNameError: and('nameEmpty', 'nameError'),
  hasEmailError: and('emailEmpty', 'emailError'),
  hasMessageError: and('messageEmpty', 'messageError'),

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
      this.setProperties({
        sent: true,
        loading: false
      });
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

      if (isBlank(data.title)) {
        set(this, 'titleError', true);
        return this.$("#title").focus();
      }

      if (isBlank(data.name)) {
        set(this, 'nameError', true);
        return this.$("#name").focus();
      }

      if (isBlank(data.email)) {
        set(this, 'emailError', true);
        return this.$("#email").focus();
      }

      if (isBlank(data.message)) {
        set(this, 'messageError', true);
        return this.$("#message").focus();
      }

      this.setProperties({
        error: false,
        loading: true
      });

      this.get('submitTask').perform(data);
    }
  }
});
