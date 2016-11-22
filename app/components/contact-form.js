import Ember from 'ember';
const { inject: { service }, isBlank } = Ember;

export default Ember.Component.extend({
  tagName: 'form',
  ajax: service(),

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
  submit(event) {
    event.preventDefault();

    let fields = this.getProperties('name', 'email', 'message');
    if (isBlank(fields.name) || isBlank(fields.email) || isBlank(fields.message)) {
      return this.set('error', true);
    }
    this.setProperties({
      loading: true,
      error: false
    });

    this.get('ajax').request('https://formkeep.com/f/0a3764031358', {
      method: 'POST',
      headers: {
        'Accept': 'application/javascript',
      },
      data: fields
    })
    .then(() => {
      this.set('sent', true);
    })
    .catch(() => {
      this.set('error', true);
    })
    .finally(() => {
      this.set('loading', false);
    });
    return false;
  }
});
