import Ember from 'ember';
const { set, inject: { service } } = Ember;
export default Ember.Route.extend({
  navState: service(),

  activate() {
    let navState = this.get('navState');
    set(navState, 'hideLogo', true);
  },

  deactivate() {
    let navState = this.get('navState');
    set(navState, 'hideLogo', false);
  },

  model() {
    return [
      {
        name: 'Jeff Cross',
        twitter: 'jeffbcross',
        image: '/media/mentors/jeff-cross.jpg',
        title: 'Angular Core Team',
        frameworks: ['angular']
      },
      {
        name: 'Victor Savkin',
        twitter: 'victorsavkin',
        title: 'Angular Core Team',
        image: '/media/mentors/victor-savkin.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Ben Lesh',
        twitter: 'BenLesh',
        title: 'RxJS Lead',
        image: '/media/mentors/ben-lesh.png',
        frameworks: ['rxjs', 'react', 'redux']
      },
      {
        name: 'Taras Mankovski',
        twitter: 'embersherpa',
        title: 'Senior Ember Mentor',
        image: '/media/mentors/taras-mankovski.jpg',
        frameworks: ['ember']
      },
      {
        name: 'Mike Brocchi',
        twitter: 'Brocco',
        title: 'Angular CLI Contributor',
        image: '/media/mentors/mike-brocchi.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Jay Phelps',
        twitter: '_jayphelps',
        title: 'RxJS Core Team',
        image: '/media/mentors/jay-phelps.jpg',
        frameworks: ['rxjs', 'react', 'redux']
      },
      {
        name: 'Alexey Kureev',
        twitter: 'kureevalexey',
        title: 'React Native Expert',
        image: '/media/mentors/alexey-kureev.jpg',
        frameworks: ['react', 'react native']
      },
      {
        name: 'Balint Erdi',
        twitter: 'baaz',
        title: 'Author Rock and Roll with Ember',
        image: '/media/mentors/ballint-erdi.jpg',
        frameworks: ['ember']
      }
    ]
  }
});
