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

  buttonText: "Say hi!",
  confirmationText: "Thanks, we'll get back to you soon!",

  nameEmpty: empty('name'),
  emailEmpty: empty('email'),
  messageEmpty: empty('message'),

  hasNameError: and('nameEmpty', 'nameError'),
  hasEmailError: and('emailEmpty', 'emailError'),
  hasMessageError: and('messageEmpty', 'messageError'),

  init() {
    this._super(...arguments);
    this.setProperties({
      name: '',
      email: '',
      message: '',
      sent: false,
      loading: false,
      error: false
    });
  },

  submitTask: task(function* (data) {
    try {
      yield this.get('ajax').post(action, {
        data
      });
      this.setProperties({
        sent: true,
        loading: false
      });
    } catch (e) {
      this.setProperties({
        error: true,
        loading: false
      });
    }
  }).restartable(),

  actions: {
    submit() {
      let data = this.getProperties(['name', 'email', 'message', 'page', 'ad']);

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
