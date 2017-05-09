import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';
import Trackable from 'ember-cli-analytics/mixins/trackable';


const Router = Ember.Router.extend(RouterScroll, Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('labs', function() {
    this.route('upgrade-service');
    this.route('technical-assessment');
    this.route('technical-training');
  });
  this.route('media');
  this.route('home', { path: '/' });
  this.route('code-of-conduct');
  this.route('contact');
  this.route('javascript', function() {
    this.route('event', { path: ':eventDate' });
  });
  this.route('privacy-policy');
});

export default Router;
