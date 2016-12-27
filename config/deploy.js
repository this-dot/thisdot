/* jshint node: true */

module.exports = function() {
  return {
    'gcloud': {
      bucket: 'this-dot-assets',
      key: 'fastboot-release.json'
    },
    'gcloud-storage': {
      projectId: 'this-dot',
      bucket: 'this-dot-assets'
    }
  };
};
