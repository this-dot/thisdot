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
  this.route('home');
  this.route('friends');
  this.route('notes');
  this.route('eastereggs');
  this.route('code-of-conduct');
});

export default Router;
