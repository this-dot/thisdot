import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';
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
  action: 'https://formkeep.com/f/20eb12accb28',
  
  submitTask: task(function *() {
    let validation = yield this.validate();
    let action = this.get('action');

    if (validation.get('isValid')) {
      yield timeout(1000);

      return yield this.get('ajax').post(action, {
        data: {
          utf8: '✓',
          name: this.get('name'),
          lastName: this.get('lastName'),
          email: this.get('email')
        }
      });
    }
  })
});
