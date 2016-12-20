import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('labs');
  this.route('media');
  this.route('home', { path: '/' });
  this.route('code-of-conduct');
  this.route('contact');
});

export default Router;
