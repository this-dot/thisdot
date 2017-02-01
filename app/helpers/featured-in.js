import Ember from 'ember';
const { get, isPresent } = Ember;

export function featuredIn([eventSlug, people]) {
  return people.filter((person) => {
    let featuredList = get(person, 'featured');
    if (isPresent(featuredList)) {
      return featuredList.includes(eventSlug);
    }
  });
}

export default Ember.Helper.helper(featuredIn);
