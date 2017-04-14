import Ember from 'ember';
import { task } from 'ember-concurrency';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  inject: { service }
} = Ember;

let Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Ember.Component.extend(Validations, {
  ajax: service(),
  email: null,
  action: 'https://us-central1-this-dot.cloudfunctions.net/subscribe',
  
  submitTask: task(function *() {
    let validation = yield this.validate();
    let action = this.get('action');

    if (validation.validations.get('isValid')) {
      yield this.get('ajax').post(action, {
        data: {
          name: this.get('name'),
          lastName: this.get('lastName'),
          email: this.get('email'),
          event: this.get('event')
        }
      }).catch(error => this.set('error', error));

      this.set('isRegistered', true);
    }
  })
});
