/* jshint node: true */

module.exports = function() {
  return {
    gcloud: {
      bucket: 'this-dot-assets',
      key: 'fastboot-release.json',
    },
    'gcloud-storage': {
      projectId: 'this-dot',
      bucket: 'this-dot-assets',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,json}',
      metadata: {
        cacheControl: 'public',
      },
    },
  };
};
