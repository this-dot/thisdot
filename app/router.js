import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('labs');
  this.route('media');
  this.route('home', { path: '/' });
  this.route('friends');
  this.route('notes');
  this.route('eastereggs');
  this.route('code-of-conduct');
  this.route('rx-days');
  this.route('partners');
  this.route('apprenticeship');
  this.route('mentorship');
  this.route('consulting');
});

export default Router;
