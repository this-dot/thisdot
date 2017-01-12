"use strict";

const GCloudStorageDownloader = require('fastboot-gcloud-storage-downloader');
const GCloudStorageNotifier   = require('fastboot-gcloud-storage-notifier');
const FastBootAppServer       = require('fastboot-app-server');
const RedisCache              = require('fastboot-redis-cache');
const nconf                   = require('nconf');

nconf.file({ file: 'config.enc.json' });

const GCS_BUCKET = nconf.get('bucket');
const GCS_KEY    = nconf.get('key');
const FASTBOOT_REDIS_HOST = nconf.get('redisHost');
const FASTBOOT_REDIS_PORT = nconf.get('redisPort');
const FASTBOOT_REDIS_PASSWORD = nconf.get('redisPassword');

let downloader = new GCloudStorageDownloader({
  bucket: GCS_BUCKET,
  key: GCS_KEY
});

let notifier  = new GCloudStorageNotifier({
  bucket: GCS_BUCKET,
  key: GCS_KEY
});

let cache = new RedisCache({
  host: FASTBOOT_REDIS_HOST,
  port: FASTBOOT_REDIS_PORT,
  password: FASTBOOT_REDIS_PASSWORD,
  cacheKey(path) {
    return `this-dot-${path}`;
  }
});

let server = new FastBootAppServer({
  downloader,
  notifier,
  cache,
  beforeMiddleware(app) { 
    // this redirect is here until GAE whitelists slack.thisdot.co
    app.get('/slack', function(req, res) {
      res.redirect(301, 'http://slackin.this-dot.appspot-preview.com');
    });
  }
});

server.start();