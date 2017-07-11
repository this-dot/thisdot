export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = 'api'; // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.passthrough('http://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/176708790');

  this.get('/api/blog/authors.json', () => {
    return {
      "data": [{
        "id": "addy-osmani",
        "type": "author",
        "attributes": {
          "name": "Addy Osmani",
          "twitter": "addyosmani",
          "github": "https://github.com/yyx990803",
          "image": "/media/people/addy-osmani.jpg",
          "frameworks": "chrome",
          "featured": ["tdjs-event-3", "tdjs-event-4"],
          "slug": "addy-osmani",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "evan-you",
        "type": "author",
        "attributes": {
          "name": "Evan You",
          "twitter": "youyuxi",
          "github": "https://github.com/yyx990803",
          "image": "/media/people/evan-you.jpg",
          "frameworks": "vue",
          "slug": "evan-you",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "rob-dodson",
        "type": "author",
        "attributes": {
          "name": "Rob Dodson",
          "twitter": "rob_dodson",
          "github": "https://github.com/robdodson",
          "image": "/media/people/rob-dodson.jpg",
          "frameworks": "polymer",
          "slug": "rob-dodson",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": [{
              "id": "mw-accessibility",
              "type": "post"
            }]
          }
        }
      }, {
        "id": "alex-castillo",
        "type": "author",
        "attributes": {
          "name": "Alex Castillo",
          "twitter": "castillo__io",
          "slug": "alex-castillo",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": [{
              "id": "mw-high-performing-charts",
              "type": "post"
            }]
          }
        }
      }, {
        "id": "ben-lesh",
        "type": "author",
        "attributes": {
          "name": "Ben Lesh",
          "twitter": "benlesh",
          "github": "https://github.com/blesh",
          "image": "/media/people/ben-lesh.png",
          "frameworks": "rxjs",
          "slug": "ben-lesh",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": [{
              "id": "mw-thinking-reactively-with-rx-js-5",
              "type": "post"
            }]
          }
        }
      }, {
        "id": "matt-beale",
        "type": "author",
        "attributes": {
          "name": "Matthew Beale",
          "twitter": "mixonic",
          "github": "https://github.com/mixonic",
          "image": "/media/people/matt-beale.png",
          "frameworks": "ember",
          "slug": "matt-beale",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "misko-hevery",
        "type": "author",
        "attributes": {
          "name": "Miško Hevery",
          "twitter": "mhevery",
          "github": "https://github.com/robdodson",
          "image": "/media/people/misko-hevery.jpg",
          "frameworks": "angular",
          "slug": "misko-hevery",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "brendan-eich",
        "type": "author",
        "attributes": {
          "name": "Brendan Eich",
          "twitter": "brendaneich",
          "github": "https://github.com/brendaneich",
          "image": "/media/people/brendan-eich.jpg",
          "frameworks": "brave",
          "featured": ["tdjs-event-3", "tdjs-event-4"],
          "slug": "brendan-eich",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "dan-abramov",
        "type": "author",
        "attributes": {
          "name": "Dan Abramov",
          "twitter": "dan_abramov",
          "github": "https://github.com/gaearon",
          "image": "/media/people/dan-abramov.jpg",
          "frameworks": "react",
          "slug": "dan-abramov",
          "summary": "",
          "body": "",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": []
          }
        }
      }, {
        "id": "edward-faulkner",
        "type": "author",
        "attributes": {
          "name": "Edward Faulkner",
          "twitter": "eaf4",
          "github": "https://github.com/ef4",
          "slug": "edward-faulkner",
          "summary": "<p>Ember Core Team Member, Creator of Liquid Fire</p>",
          "body": "<p>Ember Core Team Member, Creator of Liquid Fire</p>",
          "tags": [""]
        },
        "relationships": {
          "posts": {
            "data": [{
              "id": "tes-introduction-to-liquid-fire",
              "type": "post"
            }]
          }
        }
      }],
      "included": [{
        "id": "mw-high-performing-charts",
        "type": "post",
        "attributes": {
          "title": "High Performing Charts",
          "date": "Wed Dec 14 2016 13:16:01 GMT-0600 (CST)",
          "author": "alex-castillo",
          "brand": "modern-web",
          "video": "https://www.youtube.com/watch?v=763H0ZJShs4",
          "tags": ["videos"],
          "slug": "mw-high-performing-charts",
          "summary": "",
          "body": ""
        }
      }, {
        "id": "mw-thinking-reactively-with-rx-js-5",
        "type": "post",
        "attributes": {
          "title": "Thinking Reactively with RxJS 5",
          "date": "Wed Nov 23 2016 16:21:22 GMT-0500 (EST)",
          "author": "ben-lesh",
          "brand": "modern-web",
          "tags": ["videos", "rxjs"],
          "video": "https://www.youtube.com/watch?v=1vR9lQLfqjo",
          "slug": "mw-thinking-reactively-with-rx-js-5",
          "summary": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>",
          "body": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>"
        }
      }, {
        "id": "tes-introduction-to-liquid-fire",
        "type": "post",
        "attributes": {
          "title": "Introduction to liquid-fire",
          "date": "Wed Nov 23 2016 16:44:06 GMT-0500 (EST)",
          "author": "edward-faulkner",
          "brand": "the-ember-show",
          "tags": ["videos", "ember"],
          "video": "https://vimeo.com/176708790",
          "slug": "tes-introduction-to-liquid-fire",
          "summary": "",
          "body": ""
        }
      }]
    }
  });

  this.get('/api/blog/posts.json', () => {
    return {
      "data": [{
        "id": "mw-thinking-reactively-with-rx-js-5",
        "type": "post",
        "attributes": {
          "title": "Thinking Reactively with RxJS 5",
          "date": "Wed Nov 23 2016 16:21:22 GMT-0500 (EST)",
          "author": "ben-lesh",
          "brand": "modern-web",
          "tags": ["videos", "rxjs"],
          "video": "https://www.youtube.com/watch?v=1vR9lQLfqjo",
          "slug": "mw-thinking-reactively-with-rx-js-5",
          "summary": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>",
          "body": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>"
        },
        "relationships": {
          "author": {
            "data": {
              "id": "ben-lesh",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "videos",
              "type": "tag"
            }, {
              "id": "rxjs",
              "type": "tag"
            }]
          }
        }
      }, {
        "id": "tdjs-event-5",
        "type": "post",
        "attributes": {
          "title": "This.JavaScript",
          "date": "Thurs Aug 10 2017 09:00:00 GMT-0800 (PST)",
          "author": "thisdot",
          "brand": "this-dot-js",
          "video": "https://www.youtube.com/watch?v=R4vjqnYHlmY",
          "tags": ["events"],
          "subscribe": "//thisdot.us12.list-manage.com/subscribe/post?u=81e8e3fa2a6f79fe97467029a&amp;id=5b98f82079",
          "slug": "tdjs-event-5",
          "summary": "",
          "body": ""
        },
        "relationships": {
          "author": {
            "data": {
              "id": "thisdot",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "events",
              "type": "tag"
            }]
          }
        }
      }, {
        "id": "tes-introduction-to-liquid-fire",
        "type": "post",
        "attributes": {
          "title": "Introduction to liquid-fire",
          "date": "Wed Nov 23 2016 16:44:06 GMT-0500 (EST)",
          "author": "edward-faulkner",
          "brand": "the-ember-show",
          "tags": ["videos", "ember"],
          "video": "https://vimeo.com/176708790",
          "slug": "tes-introduction-to-liquid-fire",
          "summary": "",
          "body": ""
        },
        "relationships": {
          "author": {
            "data": {
              "id": "edward-faulkner",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "videos",
              "type": "tag"
            }, {
              "id": "ember",
              "type": "tag"
            }]
          }
        }
      }, {
        "id": "tdjs-event-2",
        "type": "post",
        "attributes": {
          "title": "JS.Interactive",
          "date": "Sat Feb 18 2017 09:00:00 GMT-0800 (PST)",
          "author": "thisdot",
          "brand": "this-dot-js",
          "video": "https://www.youtube.com/watch?v=CEeJ9JYquTU",
          "tags": ["events"],
          "subscribe": "//thisdot.us12.list-manage.com/subscribe/post?u=81e8e3fa2a6f79fe97467029a&amp;id=fe233fc05b",
          "speakers": [{
            "id": "ben-lesh",
            "framework": "rxjs"
          }, {
            "id": "evan-you",
            "framework": "vuejs"
          }, {
            "id": "misko-hevery",
            "framework": "angular"
          }, {
            "id": "matt-beale",
            "framework": "ember"
          }, {
            "id": "rob-dodson",
            "framework": "polymer"
          }, {
            "id": "dan-abramov",
            "framework": "react"
          }],
          "slug": "tdjs-event-2",
          "summary": "",
          "body": ""
        },
        "relationships": {
          "author": {
            "data": {
              "id": "thisdot",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "events",
              "type": "tag"
            }]
          }
        }
      }, {
        "id": "mw-high-performing-charts",
        "type": "post",
        "attributes": {
          "title": "High Performing Charts",
          "date": "Wed Dec 14 2016 13:16:01 GMT-0600 (CST)",
          "author": "alex-castillo",
          "brand": "modern-web",
          "video": "https://www.youtube.com/watch?v=763H0ZJShs4",
          "tags": ["videos"],
          "slug": "mw-high-performing-charts",
          "summary": "",
          "body": ""
        },
        "relationships": {
          "author": {
            "data": {
              "id": "alex-castillo",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "videos",
              "type": "tag"
            }]
          }
        }
      }],
      "included": [{
        "id": "rob-dodson",
        "type": "author",
        "attributes": {
          "name": "Rob Dodson",
          "twitter": "rob_dodson",
          "github": "https://github.com/robdodson",
          "image": "/media/people/rob-dodson.jpg",
          "frameworks": "polymer",
          "slug": "rob-dodson",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "videos",
        "type": "tag",
        "attributes": {
          "name": "Videos",
          "slug": "videos",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "jay-phelps",
        "type": "author",
        "attributes": {
          "name": "Jay Phelps",
          "twitter": "https://twitter.com/_jayphelps?lang=en",
          "github": "https://github.com/jayphelps",
          "slug": "jay-phelps",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "react",
        "type": "tag",
        "attributes": {
          "name": "React.js",
          "slug": "react",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "rxjs",
        "type": "tag",
        "attributes": {
          "name": "RxJS",
          "slug": "rxjs",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "ben-lesh",
        "type": "author",
        "attributes": {
          "name": "Ben Lesh",
          "twitter": "benlesh",
          "github": "https://github.com/blesh",
          "image": "/media/people/ben-lesh.png",
          "frameworks": "rxjs",
          "slug": "ben-lesh",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "james-a-rosen",
        "type": "author",
        "attributes": {
          "name": "James A Rosen",
          "twitter": "jamesarosen",
          "slug": "james-a-rosen",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "ember",
        "type": "tag",
        "attributes": {
          "name": "Ember.js",
          "slug": "ember",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "hugh-francis",
        "type": "author",
        "attributes": {
          "name": "Hugh Francis",
          "twitter": "_hhff",
          "github": "https://github.com/hhff",
          "slug": "hugh-francis",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "miguel-camba",
        "type": "author",
        "attributes": {
          "name": "Miguel Camba",
          "twitter": "MiguelCamba",
          "slug": "miguel-camba",
          "summary": "<p>Creator of ember-power-select</p>",
          "body": "<p>Creator of ember-power-select</p>",
          "tags": [""]
        }
      }, {
        "id": "edward-faulkner",
        "type": "author",
        "attributes": {
          "name": "Edward Faulkner",
          "twitter": "eaf4",
          "github": "https://github.com/ef4",
          "slug": "edward-faulkner",
          "summary": "<p>Ember Core Team Member, Creator of Liquid Fire</p>",
          "body": "<p>Ember Core Team Member, Creator of Liquid Fire</p>",
          "tags": [""]
        }
      }, {
        "id": "nic-raboy",
        "type": "author",
        "attributes": {
          "name": "Nic Raboy",
          "twitter": "nraboy",
          "github": "https://github.com/nraboy",
          "slug": "nic-raboy",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "alex-castillo",
        "type": "author",
        "attributes": {
          "name": "Alex Castillo",
          "twitter": "castillo__io",
          "slug": "alex-castillo",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "react-training",
        "type": "author",
        "attributes": {
          "name": "Ryan Florence and Michael Jackson",
          "twitter": "reactjstraining",
          "slug": "react-training",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "thisdot",
        "type": "author",
        "attributes": {
          "name": "This Dot Media",
          "slug": "thisdot",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "events",
        "type": "tag",
        "attributes": {
          "name": "Events",
          "slug": "events",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }]
    }
  });

  this.get('/api/blog/posts/mw-thinking-reactively-with-rx-js-5.json', () => {
    return {
      "data": {
        "id": "mw-thinking-reactively-with-rx-js-5",
        "type": "post",
        "attributes": {
          "title": "Thinking Reactively with RxJS 5",
          "date": "Wed Nov 23 2016 16:21:22 GMT-0500 (EST)",
          "author": "ben-lesh",
          "brand": "modern-web",
          "tags": ["videos", "rxjs"],
          "video": "https://www.youtube.com/watch?v=1vR9lQLfqjo",
          "slug": "mw-thinking-reactively-with-rx-js-5",
          "summary": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>",
          "body": "<p>Learn the common patterns and practices from Ben Lesh - creator of RxJS. Ben explains common gotchas, problems and how to get around them. This talk will take you one step closer to \"thinking reactively\"</p>"
        },
        "relationships": {
          "author": {
            "data": {
              "id": "ben-lesh",
              "type": "author"
            }
          },
          "tags": {
            "data": [{
              "id": "videos",
              "type": "tag"
            }, {
              "id": "rxjs",
              "type": "tag"
            }]
          }
        }
      },
      "included": [{
        "id": "ben-lesh",
        "type": "author",
        "attributes": {
          "name": "Ben Lesh",
          "twitter": "benlesh",
          "github": "https://github.com/blesh",
          "image": "/media/people/ben-lesh.png",
          "frameworks": "rxjs",
          "slug": "ben-lesh",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "videos",
        "type": "tag",
        "attributes": {
          "name": "Videos",
          "slug": "videos",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }, {
        "id": "rxjs",
        "type": "tag",
        "attributes": {
          "name": "RxJS",
          "slug": "rxjs",
          "summary": "",
          "body": "",
          "tags": [""]
        }
      }]
    }
  });
}
