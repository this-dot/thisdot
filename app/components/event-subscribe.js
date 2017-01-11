import Ember from 'ember';
import EmberChimp from 'ember-chimp/components/ember-chimp';
const { computed } = Ember;

export default EmberChimp.extend({
  formAction: "//thisdot.us12.list-manage.com/subscribe/post?u=81e8e3fa2a6f79fe97467029a&amp;id=9f8c1ada95",
  buttonText: "Register",
  loadingText: "Loading",
  isSuccess: computed.equal('chimpState', 'success')
});
