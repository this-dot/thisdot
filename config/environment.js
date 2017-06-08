/* jshint node: true */

const storageHost = '//storage.googleapis.com';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'thisdot',
    environment: environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    googleFonts: [
      'Raleway:500,500i,600,600i'
    ],

    fastboot: {
      hostWhitelist: [storageHost, /^localhost:\d+$/]
    },

    moment: {
      includeTimezone: 'subset'
    },

    i18n: {
      defaultLocale: 'zh'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.analytics = {
      integrations: [
        {
          name: 'GoogleAnalytics',
          config: {
            id: 'UA-87303561-3',
            remarketing: true,
            ecommerce: true,
            enhancedEcommerce: false
          }
        }
      ]
    };

    ENV.intercom = {
      appId: 'o8q1jqm4',
      enabled: true
    };

    ENV.host = storageHost;
    ENV.namespace = 'this-dot-assets/api/blog';
  }

  return ENV;
};
