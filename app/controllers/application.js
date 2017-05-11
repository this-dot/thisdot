import Ember from 'ember';
import config from '../config/environment';

const { intercom: { appId } } = config;

export default Ember.Controller.extend({
  showIntercom: !!appId
});