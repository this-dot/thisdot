import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let mentors = [{
        name: 'Jeff Cross',
        twitter: 'jeffbcross',
        image: '/media/mentors/jeff-cross.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Victor Savkin',
        twitter: 'victorsavkin',
        image: '/media/mentors/victor-savkin.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Ben Lesh',
        twitter: 'BenLesh',
        image: '/media/mentors/ben-lesh.png',
        frameworks: ['rxjs', 'react', 'redux']
      },
      {
        name: 'Taras Mankovski',
        twitter: 'embersherpa',
        image: '/media/mentors/taras-mankovski.jpg',
        frameworks: ['ember']
      },
      {
        name: 'Mike Brocchi',
        twitter: 'Brocco',
        image: '/media/mentors/mike-brocchi.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Jay Phelps',
        twitter: '_jayphelps',
        image: '/media/mentors/jay-phelps.jpg',
        frameworks: ['rxjs', 'react', 'redux']
      },
      {
        name: 'Alexey Kureev',
        twitter: 'kureevalexey',
        image: '/media/mentors/alexey-kureev.jpg',
        frameworks: ['react', 'react native']
      },
      {
        name: 'Balint Erdi',
        twitter: 'baaz',
        image: '/media/mentors/ballint-erdi.jpg',
        frameworks: ['ember']
      },
      {
        name: 'James Long',
        twitter: 'jlongster',
        image: '/media/mentors/james-long.jpg',
        frameworks: ['react']
      },
      {
        name: 'Sean Larkin',
        twitter: 'thelarkinn',
        image: '/media/mentors/sean-larkin.jpg',
        frameworks: ['angular']
      },
      {
        name: 'Offir Golan',
        twitter: 'offir_golan',
        image: '/media/mentors/offir-golan.jpg',
        frameworks: ['ember']
      },
      {
        name: 'Sani Yusuf',
        twitter: 'saniyusuf',
        image: '/media/mentors/sani-yusuf.jpg',
        frameworks: ['Ionic', 'Angular']
      },
      {
        name: 'Nic Raboy',
        twitter: 'nraboy',
        image: '/media/mentors/nic-raboy.jpg',
        frameworks: ['Node', 'Angular', 'NativeScript']
      },
      {
        name: 'Sergio Cruz',
        twitter: 'hashtagserg',
        image: '/media/mentors/sergio-cruz.jpg',
        frameworks: ['Angular']
      }
    ];
    return {
      mentors
    };
  }
});
