import Ember from 'ember';
const { computed: { readOnly }, inject: { service } } = Ember;

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['nav-bar'],
  router: service('-routing'),
  activeRoute: readOnly('router.route')
});
