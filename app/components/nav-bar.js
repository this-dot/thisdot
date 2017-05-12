import Ember from 'ember';
const { computed: { readOnly, match, or, not }, inject: { service } } = Ember;

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['nav-bar'],
  router: service('-routing'),
  activeRoute: readOnly('router.currentRouteName'),

  isMedia: match('activeRoute', /media.*\W*/),
  isLabs: match('activeRoute', /labs.*\W*/),

  isMediaOrLabs: or('isMedia', 'isLabs'),
  isOther: not('isMediaOrLabs')
});
