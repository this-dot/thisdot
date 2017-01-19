import Ember from 'ember';
const { inject: { service } } = Ember;

export default Ember.Component.extend({
  navState: service(),

  tagName: 'header',
  classNames: ['nav-bar'],
  classNameBindings: ['navState.hideLogo']
});
