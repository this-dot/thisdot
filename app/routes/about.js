import Ember from 'ember';
import mentors from 'thisdot/utils/mentors';

export default Ember.Route.extend({
  model() {
    return {
      mentors,
      founders: [
        {
          name: 'Taras Mankovski',
          image: '/media/mentors/taras-mankovski.jpg',
          twitter: 'tarasm',
          email: 'taras@thisdot.co'
        },
        {
          name: 'Tracy Lee',
          image: '/media/mentors/tracy-lee.jpg',
          twitter: 'ladyleet',
          email: 'tracy@thisdot.co'
        },
        {
          name: 'Ben Lesh',
          image: '/media/mentors/ben-lesh.png',
          twitter: 'BenLesh',
          email: 'ben@thisdot.co'
        },
        {
          name: 'Mike Auty',
          image: '/media/mentors/mike-auty.jpg',
          twitter: 'mauty',
          email: 'mike@thisdot.co'
        }
      ],
      team: [
        {
          name: 'Wentao Shu',
          image: '/media/team/wentao_shu.jpg',
          title: 'Operations Manager',
          email: 'wentao@thisdot.co'
        },
        {
          name: 'Gagan Dhanjal',
          image: '/media/team/gagan-dhanjal.png',
          title: 'Director, Technology Sales',
          email: 'gagan@thisdot.co'
        },
        {
          name: 'Sarah Rech',
          image: '/media/team/sarah_rech.jpg',
          title: 'Marketing & Operations',
          email: 'sarah@thisdot.co'
        },
        {
          name: 'Trinh Kien',
          image: '/media/team/trinh-kien.png',
          title: 'Marketing & Operations',
          email: 'trinh@thisdot.co'
        },
        {
          name: 'Jorge Lainfiesta',
          image: '/media/team/jorge_lainfiesta.jpg',
          title: 'Resident Mentor',
          email: 'jorge@thisdot.co'
        }
      ]
    };
  }
});
