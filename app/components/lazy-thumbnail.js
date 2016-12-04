import Ember from 'ember';

const {
  on,
  get,
  set,
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  tagName: '',
  providers: service('lazy-video-providers'),

  _getVideoThumbnail: on('didInsertElement', function() {
    let providers = get(this, 'providers');
    let url       = get(this, 'url');

    providers.getThumbnailUrl(url).then((res) => {
      set(this, 'thumbnail', res);
    });
  })
});
